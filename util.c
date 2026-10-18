/*  
    util.c

    Copyright (C) 2010-2019 Amf

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version. 

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <libintl.h>
#include <locale.h>

#ifdef __WIN32__
#include "windows.h"
#include "shlobj.h"
#endif
#ifdef __APPLE__
#include <stdint.h>
#include <mach-o/dyld.h>
#endif

#include "chroma.h"
#include "level.h"
#include "menu.h"
#include "display.h"
#include "util.h"

void display_quit();

void file_readline(FILE *file, char *buffer, size_t size)
{
    char c;
    size_t pos = 0;
    int ok = 1;

    while(ok)
    {
        c=fgetc(file);
        if(!feof(file) && c!=13 && c!=10 && c!=0 && pos<(size-1))
            buffer[pos++]=c; 
        else
            ok=0; 
    }
    buffer[pos]=0;
}

int isfile(char *filename)
{
    struct stat fst;

    if(stat(filename, &fst) == -1)
        return 0;

    if(S_ISREG(fst.st_mode))
        return 1;
      
      return 0;
}

int isdirectory(char *filename)
{
    struct stat fst;

    if(stat(filename, &fst) == -1)
        return 0;

    if(S_ISDIR(fst.st_mode))
        return 1;

    return 0;
}

void ensuredirectory(char *directory)
{
    char buffer[FILENAME_MAX + 4096];
    if(isdirectory(directory))
        return;

    errno = 0;
#ifdef __WIN32__
    if(mkdir(directory) && errno != EEXIST)
#else
    if(mkdir(directory, 0755) && errno != EEXIST)
#endif
    {
        sprintf(buffer, gettext("Unable to create directory '%s': %s"), directory, strerror(errno));
        warning(buffer);
    }
}

/* Creates a directory and any missing parents. */
static void ensuredirectories(char *directory)
{
    char path[FILENAME_MAX];
    char *p;

    snprintf(path, sizeof(path), "%s", directory);
    for(p = path + 1; *p; p ++)
    {
        if(*p == '/')
        {
            *p = 0;
            if(!isdirectory(path))
#ifdef __WIN32__
                mkdir(path);
#else
                mkdir(path, 0755);
#endif
            *p = '/';
        }
    }
    ensuredirectory(path);
}

#ifndef __WIN32__
static void localdirectory(char *base, size_t size)
{
    char old[FILENAME_MAX];
    char *home = getenv("HOME");
    char *xdg = getenv("XDG_DATA_HOME");

    if(xdg != NULL && xdg[0] == '/')
        snprintf(base, size, "%s/chroma", xdg);
    else if(home != NULL)
        snprintf(base, size, "%s/.local/share/chroma", home);
    else
    {
        snprintf(base, size, ".chroma");
        return;
    }

    if(home != NULL && !isdirectory(base))
    {
        snprintf(old, sizeof(old), "%s/.chroma", home);
        if(isdirectory(old))
            snprintf(base, size, "%s", old);
    }
    base[size - 1] = 0;
}
#endif

/* The folder holding the running program, with a trailing separator, the
   symbolic links on the way resolved; 0 when it cannot be found. */
int executabledirectory(char *directory, size_t size)
{
    char path[FILENAME_MAX];
    char *slash;

#if defined(__WIN32__)
    DWORD n = GetModuleFileNameA(NULL, path, sizeof(path));
    if(n == 0 || n >= sizeof(path))
        return 0;
    path[n] = 0;
    slash = strrchr(path, '\\');
    if(strrchr(path, '/') > slash)
        slash = strrchr(path, '/');
#elif defined(__APPLE__)
    char raw[FILENAME_MAX];
    uint32_t n = sizeof(raw);
    if(_NSGetExecutablePath(raw, &n) != 0 || realpath(raw, path) == NULL)
        return 0;
    slash = strrchr(path, '/');
#else
    ssize_t n = readlink("/proc/self/exe", path, sizeof(path) - 1);
    if(n <= 0)
        return 0;
    path[n] = 0;
    slash = strrchr(path, '/');
#endif
    if(slash == NULL || (size_t)(slash - path + 2) > size)
        return 0;
    slash[1] = 0;
    strcpy(directory, path);
    return 1;
}

void getfilename(char *filename, char *fullfilename, int create, int location)
{
    char base[FILENAME_MAX];

#ifdef __WIN32__
#ifndef CSIDL_FLAG_CREATE
#define CSIDL_FLAG_CREATE 0x8000
#endif

#ifndef CSIDL_PERSONAL 
#define CSIDL_PERSONAL 0x05
#endif

#ifndef CSIDL_APPDATA
#define CSIDL_APPDATA 0x1A
#endif

#ifndef SHGFP_TYPE_CURRENT
#define SHGFP_TYPE_CURRENT 0
#endif

    typedef HRESULT (WINAPI *SHGETFOLDERPATH)(HWND, int, HANDLE, DWORD, LPTSTR);

    HINSTANCE shfolder_dll;
    SHGETFOLDERPATH SHGetFolderPath ;
#endif

    if(location == LOCATION_SYSTEM)
    {
        /* The data folders beside the program, when they are there (an
           unpacked archive, or av's install folder reached through a
           symbolic link); otherwise the configured data folder, or the
           current folder. */
        static char exedir[FILENAME_MAX];
        static int exedir_known = 0;

        if(!exedir_known)
        {
            exedir_known = 1;
            exedir[0] = 0;
            if(executabledirectory(exedir, sizeof(exedir) - 16))
            {
                char probe[FILENAME_MAX + 16];
                snprintf(probe, sizeof(probe), "%slevels", exedir);
                if(!isdirectory(probe))
                    exedir[0] = 0;
            }
        }

        if(exedir[0] != 0)
        {
            snprintf(fullfilename, FILENAME_MAX, "%s%s", exedir, filename);
            fullfilename[FILENAME_MAX - 1] = 0;
            return;
        }
#ifdef CHROMA_DATA_DIR
#ifndef __WIN32__
        sprintf(fullfilename, "%s%s", CHROMA_DATA_DIR, filename);
#else
    strcpy(fullfilename, filename);
#endif
#else
    strcpy(fullfilename, filename);
#endif
    return;
    }

    if(location == LOCATION_DOCUMENTS)
    {
#ifdef __WIN32__
        if((shfolder_dll = LoadLibrary("shfolder.dll")) != NULL)
        {
            SHGetFolderPath = (void *)GetProcAddress(shfolder_dll, "SHGetFolderPathA");
            if(SHGetFolderPath != NULL)
            {

                if(SHGetFolderPath(NULL, CSIDL_PERSONAL | CSIDL_FLAG_CREATE, NULL, SHGFP_TYPE_CURRENT, base) != S_OK)
                    strcpy(base, ".");
            }
            FreeLibrary(shfolder_dll);

            if(create)
                ensuredirectory(base);
        }
#endif

#ifndef __WIN32__
        if(getenv("HOME") != NULL)
        {
            snprintf(base, FILENAME_MAX, "%s", getenv("HOME"));
        base[FILENAME_MAX - 1] = 0;

            if(create)
            ensuredirectory(base);
        }
        else
        {
        strcpy(base, ".");
        }
#endif

        snprintf(fullfilename, FILENAME_MAX, "%s/%s", base, filename);
        fullfilename[FILENAME_MAX - 1] = 0;

        if(create)
        ensuredirectory(fullfilename);
    }

    if(location == LOCATION_LOCAL)
    {
#ifdef __WIN32__
        if((shfolder_dll = LoadLibrary("shfolder.dll")) != NULL)
        {
            SHGetFolderPath = (void *)GetProcAddress(shfolder_dll, "SHGetFolderPathA");
            if(SHGetFolderPath != NULL)
            {

                if(SHGetFolderPath(NULL, CSIDL_APPDATA | CSIDL_FLAG_CREATE, NULL, SHGFP_TYPE_CURRENT, base) == S_OK)
                    strcat(base, "\\chroma");
                else
                    strcpy(base, "chroma");
            }
            FreeLibrary(shfolder_dll);

            if(create)
                ensuredirectory(base);
        }
#endif

#ifndef __WIN32__
        /* $XDG_DATA_HOME/chroma (~/.local/share/chroma), unless only an
           older ~/.chroma exists, which is then kept in use */
        localdirectory(base, FILENAME_MAX);

        if(create)
            ensuredirectories(base);
#endif

        snprintf(fullfilename, FILENAME_MAX, "%s/%s", base, filename);
        fullfilename[FILENAME_MAX - 1] = 0;

        if(strcmp(filename, "curses.chroma") == 0)
        create = 0;
        if(strcmp(filename, "sdl.chroma") == 0)
        create = 0;

        if(create)
        ensuredirectory(fullfilename);
    }
}

void warning(char *error)
{
#ifdef __WIN32__
    if(display_type() == DISPLAY_SDL)
        MessageBox(0,error,"Chroma",MB_OK);
    else
    {
        fprintf(stderr, "chroma: %s\n", error);
        sleep(5);
    }
#else
    fprintf(stderr, "chroma: %s\n", error);
#endif
}

void fatal(char *error)
{
    display_quit();
#ifdef __WIN32__
    if(display_type() == DISPLAY_SDL)
        MessageBox(0,error,"Chroma",MB_OK);
    else
    {
        fprintf(stderr, "chroma: %s\n", error);
        sleep(5);
    }
#else
    fprintf(stderr, "chroma: %s\n", error);
#endif

    exit(1);
}

int utf8strlen(char *string)
{
    int i, j;

    i = 0; j = 0;
    while(string[i])
    {
        if((string[i] & 0xc0) != 0x80)
            j ++;
        i++;
    }

    return j;
}

void utf8strncpy(char *out, char *in, int l)
{
    int i, x;

    i = 0; x = 0;
    while(in[i] != 0 && x < l)
    {
        out[i] = in[i];
        if((out[i] & 0xc0) != 0x80)
            x ++;
        i ++;
    }
    while(in[i] != 0 && (in[i] & 0xc0) == 0x80)
    {
        out[i] = in[i];
        i ++;
    }
    out[i] = 0; /* unlike the real strncpy! */
}
