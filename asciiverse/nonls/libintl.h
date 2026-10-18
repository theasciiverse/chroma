/* Stands in for <libintl.h> where the C library has no gettext (macOS,
   Windows): messages stay in the English of the source. Used by
   asciiverse/build.sh with NLS=0. */
#ifndef CHROMA_NONLS_LIBINTL_H
#define CHROMA_NONLS_LIBINTL_H
#include <locale.h>
#define gettext(s) ((char *)(s))
#define bindtextdomain(domain, directory) ((void)(domain), (void)(directory), (char *)0)
#define textdomain(domain) ((void)(domain), (char *)0)
#ifndef LC_MESSAGES
#define LC_MESSAGES LC_ALL
#endif
#endif
