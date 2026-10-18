/*  asciiverse/solve.c: a greedy player for the preview recording

    Plays a Chroma level with the game's own engine and prints the moves,
    one letter each (l, u, r, d, s for swapping to the other player piece),
    for asciiverse/record-preview.py to type. From the current position it
    searches, breadth first over whole moves (a move and everything it sets
    in motion), for the nearest position where one more star is caught,
    no star has been destroyed and both player pieces are alive, plays
    those moves, and repeats; once every star is caught it looks for the
    door the same way. It stops when a search finds nothing within its
    node limit, so on harder levels it plays only part of the level.

    Usage: solve LEVELFILE [MAXMOVES]

    Built by record-preview.py against the game's engine sources:
      cc -O2 -I. -Iasciiverse/nonls -o out/solve asciiverse/solve.c level.c \
        engine.c xor.c enigma.c xmlparser.c util.c names.c

    Part of the Asciiverse packaging of Chroma, under the same licence
    (GPL-2.0-or-later).
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "chroma.h"
#include "level.h"
#include "display.h"
#include "util.h"

/* What util.c and the engine expect from a display; nothing is drawn. */
void display_quit() { }
int display_type() { return DISPLAY_CURSES; }
int display_focus(struct level *plevel) { (void)plevel; return 0; }
int options_debug = 0;
int options_xor_mode = 1;
int options_enigma_mode = 1;

#define LIMIT 400000
static const int MOVES[5] = { MOVE_LEFT, MOVE_UP, MOVE_RIGHT, MOVE_DOWN, MOVE_SWAP };
static const char LETTERS[5] = { 'l', 'u', 'r', 'd', 's' };

struct node
{
    struct level *plevel;
    int parent;
    int move;
};

/* one whole move: the player's step and everything it sets in motion */
static int play(struct level *plevel, int move)
{
    int before = plevel->moves;
    if(!level_move(plevel, move))
        return 0;
    while(plevel->mover_first != NULL)
    {
        level_evolve(plevel);
        level_storemovers(plevel);
    }
    return plevel->moves != before || move == MOVE_SWAP;
}

static unsigned long hash(struct level *plevel)
{
    unsigned long h = 5381;
    int i, n = plevel->size_x * plevel->size_y;
    for(i = 0; i < n; i ++)
        h = h * 33 + (unsigned char)plevel->data_pieces[i];
    return h * 33 + plevel->player;
}

static int same(struct level *a, struct level *b)
{
    return a->player == b->player &&
        memcmp(a->data_pieces, b->data_pieces, a->size_x * a->size_y) == 0;
}

/* a breadth-first search from plevel for a position that satisfies goal;
   appends the moves found to path and returns the position, or NULL */
static struct level *search(struct level *start, int (*goal)(struct level *, struct level *), char *path)
{
    static struct node nodes[LIMIT];
    static int table[1 << 20];
    int head = 0, tail = 0, i, m, found = -1;
    struct level *result = NULL;

    memset(table, -1, sizeof(table));
    nodes[tail].plevel = level_copy(start);
    nodes[tail].parent = -1;
    nodes[tail].move = -1;
    table[hash(start) & ((1 << 20) - 1)] = tail ++;

    while(head < tail && found < 0)
    {
        struct level *here = nodes[head].plevel;
        for(m = 0; m < 5 && found < 0 && tail < LIMIT; m ++)
        {
            struct level *next = level_copy(here);
            unsigned long slot;
            if(!play(next, MOVES[m]) || next->alive[0] == 0 || next->alive[1] == 0
               || next->stars_exploded > 0)
            {
                level_delete(next);
                continue;
            }
            /* positions already seen (open addressing on the table) */
            slot = hash(next) & ((1 << 20) - 1);
            while(table[slot] >= 0 && !same(nodes[table[slot]].plevel, next))
                slot = (slot + 1) & ((1 << 20) - 1);
            if(table[slot] >= 0)
            {
                level_delete(next);
                continue;
            }
            table[slot] = tail;
            nodes[tail].plevel = next;
            nodes[tail].parent = head;
            nodes[tail].move = m;
            if(goal(start, next))
                found = tail;
            tail ++;
        }
        head ++;
    }

    if(found >= 0)
    {
        char moves[LIMIT];
        int n = 0;
        for(i = found; nodes[i].parent >= 0; i = nodes[i].parent)
            moves[n ++] = LETTERS[nodes[i].move];
        while(n > 0)
        {
            size_t l = strlen(path);
            path[l] = moves[-- n];
            path[l + 1] = 0;
        }
        result = level_copy(nodes[found].plevel);
    }
    for(i = 0; i < tail; i ++)
        level_delete(nodes[i].plevel);
    return result;
}

static int one_more_star(struct level *from, struct level *to)
{
    return to->stars_caught > from->stars_caught;
}

static int out_of_the_door(struct level *from, struct level *to)
{
    (void)from;
    return (to->flags & LEVELFLAG_EXIT) != 0;
}

int main(int argc, char **argv)
{
    static char path[100000];
    struct level *plevel, *next;
    int limit = argc > 2 ? atoi(argv[2]) : 100000;

    if(argc < 2 || (plevel = level_load(argv[1], 0)) == NULL)
    {
        fprintf(stderr, "usage: solve LEVELFILE [MAXMOVES]\n");
        return 1;
    }
    path[0] = 0;
    while(plevel->stars_caught < plevel->stars_total && (int)strlen(path) < limit)
    {
        next = search(plevel, one_more_star, path);
        if(next == NULL)
            break;
        level_delete(plevel);
        plevel = next;
        fprintf(stderr, "%d/%d stars, %d moves\n", plevel->stars_caught, plevel->stars_total, (int)strlen(path));
    }
    if(plevel->stars_caught == plevel->stars_total && (next = search(plevel, out_of_the_door, path)) != NULL)
    {
        level_delete(plevel);
        plevel = next;
        fprintf(stderr, "solved in %d moves\n", (int)strlen(path));
    }
    printf("%s\n", path);
    level_delete(plevel);
    return 0;
}
