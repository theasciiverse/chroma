const graphics_sets = [
    { set: "zen", key: "Z", title: "Zen", preview: "preview-zen.svg", sheet: "graphics-zen.svg", xml: "graphics-zen.xml" },
    { set: "marble", key: "M", title: "Marble", preview: "preview-marble.svg", sheet: "graphics-marble.svg", xml: "graphics-marble.xml" },
    { set: "neon", key: "N", title: "Neon", preview: "preview-neon.svg", sheet: "graphics-neon.svg", xml: "graphics-neon.xml" },
    { set: "xor", key: "X", title: "XOR", preview: "preview-xor.svg", sheet: "graphics-xor.png", xml: "graphics-xor.xml" }
];

const graphics_sizes = [
    { size: "0", key: "0", title: "Scale to fit" },
    { size: "16", key: "1", title: "16x16" },
    { size: "24", key: "2", title: "24x24" },
    { size: "32", key: "3", title: "32x32" },
    { size: "48", key: "4", title: "48x48" },
    { size: "64", key: "5", title: "64x64" },
    { size: "96", key: "6", title: "96x96" },
    { size: "128", key: "7", title: "128x128" },
    { size: "-1", key: "C", title: "Custom" }
];

const slider_positions = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

const font_name = "Sans-Serif";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MOVE_LEFT = 0;
const MOVE_UP = 1;
const MOVE_RIGHT = 2;
const MOVE_DOWN = 3;
const MOVE_NONE = 4;
const MOVE_SWAP = 5;
const MOVE_SWAPPED = 6;
const MOVE_UNKNOWN = 7;
const MOVE_REDO = 8;
const MOVE_UNDO = 9;

const MOVER_FAST = 1;
const MOVER_UNDO = 2;
const MOVER_STORE = 4;

const PIECE_SPACE = 0;
const PIECE_WALL = 1;
const PIECE_PLAYER_ONE = 2;
const PIECE_PLAYER_TWO = 3;
const PIECE_STAR = 4;
const PIECE_DOTS = 5;
const PIECE_DOOR = 6;
const PIECE_CIRCLE = 7;
const PIECE_ARROW_RED_LEFT = 8;
const PIECE_ARROW_RED_UP = 9;
const PIECE_ARROW_RED_RIGHT = 10;
const PIECE_ARROW_RED_DOWN = 11;
const PIECE_BOMB_RED_LEFT = 12;
const PIECE_BOMB_RED_UP = 13;
const PIECE_BOMB_RED_RIGHT = 14;
const PIECE_BOMB_RED_DOWN = 15;
const PIECE_ARROW_GREEN_LEFT = 16;
const PIECE_ARROW_GREEN_UP = 17;
const PIECE_ARROW_GREEN_RIGHT = 18;
const PIECE_ARROW_GREEN_DOWN = 19;
const PIECE_BOMB_GREEN_LEFT = 20;
const PIECE_BOMB_GREEN_UP = 21;
const PIECE_BOMB_GREEN_RIGHT = 22;
const PIECE_BOMB_GREEN_DOWN = 23;
const PIECE_ARROW_BLUE_LEFT = 24;
const PIECE_ARROW_BLUE_UP = 25;
const PIECE_ARROW_BLUE_RIGHT = 26;
const PIECE_ARROW_BLUE_DOWN = 27;
const PIECE_BOMB_BLUE_LEFT = 28;
const PIECE_BOMB_BLUE_UP = 29;
const PIECE_BOMB_BLUE_RIGHT = 30;
const PIECE_BOMB_BLUE_DOWN = 31;
const PIECE_CIRCLE_DOUBLE = 32;
const PIECE_DOTS_DOUBLE = 33;
const PIECE_DOTS_X = 34;
const PIECE_DOTS_Y = 35;
const PIECE_SWITCH = 36;
const PIECE_TELEPORT = 37;
const PIECE_MAP_TOP_LEFT = 38;
const PIECE_MAP_TOP_RIGHT = 39;
const PIECE_MAP_BOTTOM_LEFT = 40;
const PIECE_MAP_BOTTOM_RIGHT = 41;
const PIECE_DARKNESS = 42;
const PIECE_EXPLOSION_RED_LEFT = 43;
const PIECE_EXPLOSION_RED_HORIZONTAL = 44;
const PIECE_EXPLOSION_RED_RIGHT = 45;
const PIECE_EXPLOSION_RED_TOP = 46;
const PIECE_EXPLOSION_RED_VERTICAL = 47;
const PIECE_EXPLOSION_RED_BOTTOM = 48;
const PIECE_EXPLOSION_GREEN_LEFT = 49;
const PIECE_EXPLOSION_GREEN_HORIZONTAL = 50;
const PIECE_EXPLOSION_GREEN_RIGHT = 51;
const PIECE_EXPLOSION_GREEN_TOP = 52;
const PIECE_EXPLOSION_GREEN_VERTICAL = 53;
const PIECE_EXPLOSION_GREEN_BOTTOM = 54 ;
const PIECE_EXPLOSION_BLUE_LEFT = 55;
const PIECE_EXPLOSION_BLUE_HORIZONTAL = 56;
const PIECE_EXPLOSION_BLUE_RIGHT = 57;
const PIECE_EXPLOSION_BLUE_TOP = 58;
const PIECE_EXPLOSION_BLUE_VERTICAL = 59;
const PIECE_EXPLOSION_BLUE_BOTTOM = 60;

const PIECE_EXPLOSION_NEW_RED_LEFT = 61;
const PIECE_EXPLOSION_NEW_RED_HORIZONTAL = 62;
const PIECE_EXPLOSION_NEW_RED_RIGHT = 63;
const PIECE_EXPLOSION_NEW_RED_TOP = 64;
const PIECE_EXPLOSION_NEW_RED_VERTICAL = 65;
const PIECE_EXPLOSION_NEW_RED_BOTTOM = 66;
const PIECE_EXPLOSION_NEW_GREEN_LEFT = 67;
const PIECE_EXPLOSION_NEW_GREEN_HORIZONTAL = 68;
const PIECE_EXPLOSION_NEW_GREEN_RIGHT = 69;
const PIECE_EXPLOSION_NEW_GREEN_TOP = 70;
const PIECE_EXPLOSION_NEW_GREEN_VERTICAL = 71;
const PIECE_EXPLOSION_NEW_GREEN_BOTTOM = 72;
const PIECE_EXPLOSION_NEW_BLUE_LEFT = 73;
const PIECE_EXPLOSION_NEW_BLUE_HORIZONTAL = 74;
const PIECE_EXPLOSION_NEW_BLUE_RIGHT = 75;
const PIECE_EXPLOSION_NEW_BLUE_TOP = 76;
const PIECE_EXPLOSION_NEW_BLUE_VERTICAL = 77;
const PIECE_EXPLOSION_NEW_BLUE_BOTTOM = 78;

const PIECE_CURSOR = 79;
const PIECE_GONE = 80;
const PIECE_UNKNOWN = 81;

const PIECE_EXPLOSION_FIRST = PIECE_EXPLOSION_RED_LEFT;
const PIECE_EXPLOSION_LAST = PIECE_EXPLOSION_BLUE_BOTTOM;
const PIECE_EXPLOSION_NEW_FIRST = PIECE_EXPLOSION_NEW_RED_LEFT;
const PIECE_EXPLOSION_NEW_LAST = PIECE_EXPLOSION_NEW_BLUE_BOTTOM;
const PIECE_EXPLOSION_NEW_OFFSET = (PIECE_EXPLOSION_NEW_FIRST - PIECE_EXPLOSION_FIRST);
const PIECE_MOVERS_FIRST = PIECE_ARROW_RED_LEFT;
const PIECE_MOVERS_LAST = PIECE_BOMB_BLUE_DOWN;
const PIECE_MAX = PIECE_GONE;

const PIECE_XOR_MAGUS = PIECE_PLAYER_ONE;
const PIECE_XOR_QUESTOR = PIECE_PLAYER_TWO;
const PIECE_XOR_DOTS = PIECE_DOTS_X;
const PIECE_XOR_WAVES = PIECE_DOTS_Y;
const PIECE_XOR_CHICKEN = PIECE_ARROW_RED_LEFT;
const PIECE_XOR_V_BOMB = PIECE_BOMB_RED_LEFT;
const PIECE_XOR_FISH = PIECE_ARROW_RED_DOWN;
const PIECE_XOR_H_BOMB = PIECE_BOMB_RED_DOWN;
const PIECE_XOR_DOLL = PIECE_CIRCLE;
const PIECE_XOR_MASK = PIECE_STAR;

/*               l  u  r  d  n  s  w   */
const move_x = [-1, 0, 1, 0, 0, 0, 0];
const move_y = [0, -1, 0, 1, 0, 0, 0];

const enigma_move_order = [MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT, MOVE_UP];

const xor_teleport_order = [MOVE_RIGHT, MOVE_UP, MOVE_LEFT, MOVE_DOWN];

const MODE_CHROMA = 0;
const MODE_XOR = 1;
const MODE_ENIGMA = 2;

const LEVELFLAG_MOVES = 1;
const LEVELFLAG_STARS = 2;
const LEVELFLAG_SWITCH = 4;
const LEVELFLAG_EXIT = 8;
const LEVELFLAG_SOLVED = 16;
const LEVELFLAG_FAILED = 32;
const LEVELFLAG_PAUSED = 64;
const LEVELFLAG_UNDO = 128;
const LEVELFLAG_TESTING = 256;
const LEVELFLAG_MAP = 512;
const LEVELFLAG_NOUNDO = 1024;

const MAPPED_TOP_LEFT = 1;
const MAPPED_TOP_RIGHT = 2;
const MAPPED_BOTTOM_LEFT = 4;
const MAPPED_BOTTOM_RIGHT = 8;

const GRAPHICS_BEVEL = 1
const GRAPHICS_BEVEL_SHADOW = 2
const GRAPHICS_BEVEL16 = 4
const GRAPHICS_RANDOM = 8
const GRAPHICS_KEY = 16
const GRAPHICS_MOVER = 32
const GRAPHICS_TILE = 64
const GRAPHICS_ANIMATE = 128
const GRAPHICS_LEVEL = 256
const GRAPHICS_CLONE = 512
const GRAPHICS_SCALE = 1024

const GRAPHICS_CURSES = 1
const GRAPHICS_ZORDER = 2
const GRAPHICS_BACKGROUND = 4
const GRAPHICS_TRANSLATE = 8

const BEVEL_BASE = 0x10000
const BEVEL_L = (BEVEL_BASE * 1)
const BEVEL_R = (BEVEL_BASE * 2)
const BEVEL_U = (BEVEL_BASE * 4)
const BEVEL_D = (BEVEL_BASE * 8)
const BEVEL_TL = (BEVEL_BASE * 16)
const BEVEL_TR = (BEVEL_BASE * 32)
const BEVEL_BL = (BEVEL_BASE * 64)
const BEVEL_BR = (BEVEL_BASE * 128)
const BEVEL_ALL = (BEVEL_BASE * 255)

const SHADOW_BASE = 0x1000000
const SHADOW_TOP_LEFT = 1
const SHADOW_TOP = 2
const SHADOW_TOP_RIGHT = 4
const SHADOW_LEFT = 8
const SHADOW_MIDDLE = 16
const SHADOW_RIGHT = 32
const SHADOW_BOTTOM_LEFT = 64
const SHADOW_BOTTOM = 128
const SHADOW_BOTTOM_RIGHT = 256

const IMAGE_PIECE = 0
const IMAGE_SHADOW = 1
const IMAGE_SMALL = 2
const IMAGE_MAX = 3

const SIZE_PIECES = 1
const SIZE_SMALL = 2

const shadow_flags =
    [
    SHADOW_TOP_LEFT,    SHADOW_TOP,     SHADOW_TOP_RIGHT,
    SHADOW_LEFT,        SHADOW_MIDDLE,      SHADOW_RIGHT,
    SHADOW_BOTTOM_LEFT, SHADOW_BOTTOM,      SHADOW_BOTTOM_RIGHT
    ];

mouse_move = MOVE_NONE;
mouse_recent_event = false;
mouse_target = false;
mouse_target_x = 0;
mouse_target_y = 0;

function initialise()
{
    document.getElementById("missing").textContent = "Please wait";
    document.getElementById("missing-levels").style.display = "block";
    document.getElementById("instructions").style.display = "none";

    options = new Object;
    options.previous_delay = 100;
    options.storage = (localStorage.length != 0);
    options.others = false;

    if(window.location.href.indexOf("?debug") != -1 || window.location.href.indexOf("?hidden") != -1)
        options.show_hidden = true;
    else
        options.show_hidden = false;

    default_preferences();
    load_preferences();

    screen = new Object;
    screen.width = 0;
    screen.height = 0;
    screen.canvas = null;
    screen.context = null;
    screen.bar = new Object;
    screen.bar.height = 0;
    screen.bar.canvas = null;
    screen.bar.context = null;
    screen.bar.lines = 0;
    screen.map = new Object;
    screen.map.pixel_width = 0;
    screen.map.pixel_height = 0;
    screen.map.width = 0;
    screen.map.height = 0;
    screen.map.canvas = null;
    screen.map.context = null;
    screen.offset_x = 0;
    screen.offset_y = 0;

    menu = new Object;
    menu.state = true;
    menu.becoming = true;

    graphics = new Object;
    graphics.missing_sheet = true;
    graphics.missing_xml = true;
    graphics.set = "";
    graphics.width = 0;
    graphics.height = 0;
    graphics.offset_x = 0;
    graphics.offset_y = 0;
    graphics.sheets = [];
    graphics.xml = [];
    graphics.image = [];
    graphics.image_flags = [];
    graphics.small_width = 0;
    graphics.small_height = 0;
    graphics.small_image = [];
    graphics.shadows = [];
    graphics.shadow_image = [];
    graphics.shadow_offset_x = [];
    graphics.shadow_offset_y = [];
    graphics.shadow_width = [];
    graphics.shadow_height = [];
    graphics.shadow_z = [];
    graphics.shift = false;
    graphics.ctrl = false;
    graphics.map_colours = [];

    levels = new Object;
    levels.xml = null;
    levels.file = "levels.xml";
    level = null;
    level_replay = null;

    toggle_keypad(options.keypad);

    window.onresize = screen_resize;

    levels_load();
}

function levels_load()
{
    document.getElementById("missing-levels").style.display = "block";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", levels.file);
    xhr.onerror = function() { this.onerror = null; document.getElementById("error-levels").textContent = "Unable to load "+levels.file +" ("+(xhr.statusText == "" ? "If using Chrome, add --allow-file-access-from-files to the browser's command line, access via a different browser or a local web server, or play online at www.level7.org.uk/chroma/ )" : xhr.statusText); }
    xhr.onload = function() { levels.xml = xhr.responseText; levels_loaded(); }
    xhr.send();
}

function levels_loaded()
{
    document.getElementById("missing-levels").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("items").style.display = "block";

    levels.parser = new DOMParser();
    levels.dom = levels.parser.parseFromString(levels.xml, "text/xml");

    var sets = levels.dom.getElementsByTagName("set");
    for(var s = 0; s < sets.length; s ++)
    {
        if(sets[s].getAttribute("type") != null && sets[s].getAttribute("type") != "chroma")
            options.others = true;
    }

    if(!options.others)
        document.styleSheets[0].insertRule(".other { display: none; }");

    main_menu();
}

function graphics_load(set)
{
    var sheet, xml;

    if(graphics.sheets[set] == null || graphics.xml[set] == null)
    {
        graphics.missing_sheet = true;
        graphics.missing_xml = true;
        graphics.loading = set;

        document.getElementById("missing").style.display = "block";
        document.getElementById("missing-sheet").style.display = "block";
        document.getElementById("missing-xml").style.display = "block";
        document.getElementById("items").style.display = "none";

        for(var s = 0; s < graphics_sets.length; s ++)
        {
            if(graphics_sets[s].set == set)
            {
                sheet = graphics_sets[s].sheet;
                xml = graphics_sets[s].xml;
            }
        }

        graphics.sheets[set] = new Image;
        graphics.sheets[set].src = sheet;

        graphics.sheets[set].onerror = function() { this.onerror = null; graphics.sheets[set] = null; document.getElementById("error-sheet").textContent = "Unable to load "+sheet; setTimeout(function() { document.getElementById("items").style.display = "block"; document.getElementById("missing").style.display = "none"; document.getElementById("missing-sheet").style.display = "none"} , 1000); }
        graphics.sheets[set].onload = function() { graphics.missing_sheet = false; graphics_loaded(); }

        setTimeout(graphics_load_check, 250);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", xml);
        xhr.onerror = function() { this.onerror = null; graphics.sheets[set] = null; document.getElementById("error-xml").textContent = "Unable to load "+xml+" ("+xhr.statusText+")"; setTimeout(function() { document.getElementById("items").style.display = "block"; document.getElementById("missing").style.display = "none"; document.getElementById("missing-xml").style.display = "none"} , 1000); }
        xhr.onload = function() { graphics.missing_xml = false; graphics.xml[graphics.loading] = xhr.responseText; graphics_loaded(); }
        xhr.send();
    }
    else
    {
        graphics_loaded();
    }
}

/* For Firefox and any other browsers incapable of firing an onload for svg images */
function graphics_load_check()
{
    if(graphics.sheets[graphics.loading] != null)
    {
        if(graphics.sheets[graphics.loading].complete)
        {
            graphics.missing_sheet = false;
            graphics_loaded();
        }
    }

    if(graphics.missing_sheet == true)
        setTimeout(graphics_load_check, 250);
}

function graphics_loaded()
{
    if(graphics.sheets[graphics.set] != null && graphics.sheets[graphics.set] > 0)
        graphics.missing_sheet = false;

    if(!graphics.missing_sheet)
        document.getElementById("missing-sheet").style.display = "none";
    if(!graphics.missing_xml)
        document.getElementById("missing-xml").style.display = "none";

    if(graphics.missing_sheet || graphics.missing_xml)
        return;

    document.getElementById("missing").style.display = "none";
    document.getElementById("items").style.display = "block";

    graphics_render();
}

function graphics_render()
{
    if(level == null)
        return;

    var set = options.graphics;
    if(level.mode == MODE_XOR && options.graphics_xor)
        set = "xor";

    if(graphics.sheets[set] == null)
    {
        graphics_load(set);
        return;
    }

    screen.canvas = document.getElementById("screen");
    screen.bar.canvas = document.getElementById("bar");
    screen.map.canvas = document.getElementById("map");

    /* XOR partial display */
    if(level.mode == MODE_XOR && options.xor_display)
    {
        var square = Math.min(window.innerWidth, window.innerHeight);

        /* Allow space on sides if landscape screen */
        if(square < window.innerWidth && square > 0.66 * window.innerWidth)
            square = 0.66 * window.innerWidth;
        /* Allow space below if portrait screen */
        else if(square < window.innerHeight && square > 0.66 * window.innerHeight)
            square = 0.66 * window.innerHeight;

        square = Math.floor(square / 32) * 32;

        screen.canvas.height = screen.height = square;
        screen.canvas.width = screen.width = square;

        screen.canvas.style.position= "fixed";
        screen.bar.canvas.style.position= "fixed";
        screen.map.canvas.style.position= "fixed";

        /* Landscape screen */
        if(window.innerWidth > window.innerHeight)
        {
            screen.offset_x = Math.floor((window.innerWidth - screen.width) / 2);
            screen.offset_y = Math.floor((window.innerHeight - screen.height) / 2);
            screen.canvas.style.left = screen.offset_x + "px";
            screen.canvas.style.top = screen.offset_y + "px";

            screen.map.pixel_width = screen.map.pixel_height = Math.floor((window.innerWidth - screen.width) / (2 * level.width));

            screen.map.canvas.width = screen.map.width = level.width * screen.map.pixel_width;
            screen.map.canvas.height = screen.map.height = level.height * screen.map.pixel_height;

            screen.map.canvas.style.left = (window.innerWidth - screen.map.width) + "px";
            screen.map.canvas.style.top = (window.innerHeight - screen.map.height) + "px";

            screen.bar.height = Math.max(32, screen.map.pixel_width * 8);
            screen.bar.lines = 2;
            screen.bar.width = Math.floor((window.innerWidth - screen.width) / 2);
            screen.bar.canvas.height = screen.bar.height * screen.bar.lines;
            screen.bar.canvas.width = screen.bar.width;

            screen.bar.canvas.style.left = "0px";
            screen.bar.canvas.style.top = (window.innerHeight - screen.bar.height * screen.bar.lines) + "px";
        }
        /* Portrait screen */
        else
        {
            screen.offset_x = Math.floor((window.innerWidth - screen.width) / 2);
            screen.offset_y = Math.floor((window.innerHeight - screen.height) / 2);
            screen.canvas.style.left = screen.offset_x + "px";
            screen.canvas.style.top = screen.offset_y + "px";

            screen.map.pixel_width = screen.map.pixel_height = Math.floor((window.innerHeight - screen.height - 16) / (2 * level.height));

            screen.map.canvas.width = screen.map.width = level.width * screen.map.pixel_width;
            screen.map.canvas.height = screen.map.height = level.height * screen.map.pixel_height;

            screen.map.canvas.style.left = (window.innerWidth - screen.map.width) + "px";
            screen.map.canvas.style.top = (window.innerHeight - screen.map.height) + "px";

            screen.bar.height = Math.max(32, screen.map.pixel_width * 8);
            screen.bar.lines = 2;
            screen.bar.width = window.innerWidth - screen.map.width;
            screen.bar.canvas.height = screen.bar.height * screen.bar.lines;
            screen.bar.canvas.width = screen.bar.width;

            screen.bar.canvas.style.left = "0px";
            screen.bar.canvas.style.top = (window.innerHeight - screen.bar.height * screen.bar.lines) + "px";
        }
    }
    /* Regular display */
    else
    {
        screen.offset_x = 0;
        screen.offset_y = 0;

        screen.bar.lines = 1;
        screen.bar.height = Math.floor(window.innerHeight / 24);
        screen.bar.width = window.innerWidth;

        screen.canvas.height = screen.height =  window.innerHeight - screen.bar.height;
        screen.canvas.width = screen.width = window.innerWidth;

        screen.canvas.style.position= "fixed";
        screen.canvas.style.left = "0px";
        screen.canvas.style.top = "0px";

        screen.bar.canvas.height = screen.bar.height;
        screen.bar.canvas.width = screen.bar.width;

        screen.bar.canvas.style.position= "fixed";
        screen.bar.canvas.style.left = "0px";
        screen.bar.canvas.style.top = screen.height + "px";

        screen.map.canvas.style.display = "none";
    }

    if(screen.canvas.getContext)
    {
        screen.context = screen.canvas.getContext("2d", { alpha: false });
        screen.context.fillStyle = "#000";
        screen.context.fillRect(0, 0, screen.width, screen.height);
    }
    else
    {
        alert("Unable to get screen context");
        return;
    }

    if(screen.bar.canvas.getContext)
    {
        screen.bar.context = screen.bar.canvas.getContext("2d", { alpha: false });
        screen.bar.context.fillStyle = "#000";
        screen.bar.context.fillRect(0, 0, screen.width, screen.bar.height * screen.bar.lines);
    }
    else
    {
        alert("Unable to get bar context");
        return;
    }

    if(screen.map.canvas.getContext)
    {
        screen.map.context = screen.map.canvas.getContext("2d", { alpha: false });
        screen.map.context.fillStyle = "#000";
        screen.map.context.fillRect(0, 0, screen.map.width, screen.map.height);
    }
    else
    {
        alert("Unable to get map context");
        return;
    }

    var ox = graphics.width;
    var oy = graphics.height;
    var os = graphics.set;
    var osh = graphics.small_height;

    /* XOR partial display */
    if(level.mode == MODE_XOR && options.xor_display)
    {
        var granularity = 2;
        graphics.width = graphics.height = granularity * Math.floor(screen.height / (granularity * 8));
    }
    /* Scale to fit screen */
    else if(options.graphics_size == 0)
    {
        var granularity = 2;
        graphics.width = granularity * Math.floor(screen.width / (granularity * level.width));
        graphics.height = granularity * Math.floor(screen.height / (granularity * level.height));

        graphics.width = Math.min(graphics.width, graphics.height);
        graphics.height = Math.min(graphics.width, graphics.height);
    }
    /* Custom size */
    else if(options.graphics_size == -1)
        graphics.width = graphics.height = options.graphics_custom_size;
    /* Fixed size */
    else
        graphics.width = graphics.height = options.graphics_size;

    graphics.small_height = graphics.small_width = Math.floor(screen.bar.height * 0.9);

    if(ox == graphics.width && oy == graphics.height && os == set && osh == graphics.small_height)
    {
        graphics_return_after_rendering();
        return;
    }

    graphics.set = set;

    document.getElementById("missing-render").style.display = "block";
    document.getElementById("missing").style.display = "block";
    document.getElementById("items").style.display = "none";

    setTimeout(graphics_scale_images, 10);
}

function graphics_scale_images()
{
    var small, width, height, rescale;

    graphics.image = [];
    graphics.small_image = [];
    graphics.shadows = [];
    graphics.shadow_image = [];
    graphics.shadow_start_x = [];
    graphics.shadow_offset_x = [];
    graphics.shadow_start_y = [];
    graphics.shadow_offset_y = [];
    graphics.shadow_width = [];
    graphics.shadow_height = [];
    graphics.shadow_z = [];
    graphics.shadow_flags = [];
    graphics.map_colours = [];

    for(var p = 0; p < PIECE_MAX; p ++)
    {
        graphics.shadow_offset_x[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_offset_y[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_start_x[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_start_y[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_width[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_height[p] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        graphics.shadow_z[p] = 0;
    }

    /* Workaround Firefox's poor rendering at odd sizes, especially obvious with "zen" */
    rescale = 1;
    if(options.graphics == "zen" && graphics.width % 8 != 0 && graphics.height % 8 != 0 && graphics.width < 64)
        rescale = 4;

    var parser = new DOMParser();
    graphics.dom = parser.parseFromString(graphics.xml[graphics.set], "text/xml");

    var shadows = graphics.dom.getElementsByTagName("shadow");
    for(var s = 0; s < shadows.length; s ++)
    {
        var shadow = new Object;
        shadow.x = parseInt(shadows[s].getAttribute("x"));
        shadow.y = parseInt(shadows[s].getAttribute("y"));
        graphics.shadows.push(shadow);
    }

    var pieces = graphics.dom.getElementsByTagName("piece");
    for(var p = 0; p < pieces.length; p ++)
    {
        piece = eval("PIECE_" + (pieces[p].getAttribute("name").toUpperCase()));

        graphics.image_flags[piece] = 0;

        if(pieces[p].getAttribute("tile") == "yes")
            graphics.image_flags[piece] |= GRAPHICS_TILE;

        if(pieces[p].getAttribute("bevel") == "piece")
            graphics.image_flags[piece] |= GRAPHICS_BEVEL;
        if(pieces[p].getAttribute("bevel") == "shadow")
            graphics.image_flags[piece] |= GRAPHICS_BEVEL_SHADOW;
        if(pieces[p].getAttribute("bevel") == "piece shadow")
            graphics.image_flags[piece] |= GRAPHICS_BEVEL | GRAPHICS_BEVEL_SHADOW;
        if(pieces[p].getAttribute("bevel") == "16")
            graphics.image_flags[piece] |= GRAPHICS_BEVEL16;

        if(pieces[p].getAttribute("level") == "yes")
            graphics.image_flags[piece] |= GRAPHICS_LEVEL;

        var clones = pieces[p].getElementsByTagName("clone");
        if(clones.length > 0 && clones[0].getAttribute("piece") != null)
        {
            var c = eval("PIECE_" + clones[0].getAttribute("piece").toUpperCase());
            graphics.image_flags[piece] = graphics.image_flags[c];
            graphics.image[piece] = graphics.image[c];
            graphics.small_image[piece] = graphics.small_image[c];
            graphics.shadow_image[piece] = graphics.shadow_image[c];

            graphics.shadow_offset_x[piece][9] = graphics.shadow_offset_x[c][9];
            graphics.shadow_offset_y[piece][9] = graphics.shadow_offset_y[c][9];
            graphics.shadow_width[piece][9] = graphics.shadow_width[c][9];
            graphics.shadow_height[piece][9] = graphics.shadow_height[c][9];
            
        }

        var images = pieces[p].getElementsByTagName("image");
        for(var i = 0; i < images.length; i ++)
        {
            if(images[i].getAttribute("type") == "small")
            {
                small = true;
                width = graphics.small_width;
                height = graphics.small_height;
            }
            else
            {
                small = false;
                width = graphics.width;
                height = graphics.height;
            }

            if(rescale != 1)
            {
                width = width * rescale;
                height = height * rescale;
            }

            var canvas = document.createElement("canvas");

            var context = canvas.getContext("2d");

            var dw = images[i].getAttribute("width") != null ? images[i].getAttribute("width") : 1;
            var dh = images[i].getAttribute("height") != null ? images[i].getAttribute("height") : 1;

            if(dw != 1)
                width = width * dw;
            if(dh != 1)
                height = height * dh;

            canvas.width = width;
            canvas.height = height;

            if(graphics.set == "xor")
                context.imageSmoothingEnabled = false;

            if(images[i].getAttribute("colour") != null)
            {
                context.fillStyle = images[i].getAttribute("colour");
                context.fillRect(0, 0, width, height);

            }
            else if(images[i].getAttribute("file") != null && images[i].getAttribute("file") == "svg:")
            {
                var x = images[i].getAttribute("x") != null ? images[i].getAttribute("x") : 0;
                var y = images[i].getAttribute("y") != null ? images[i].getAttribute("y") : 0;
                var w = images[i].getAttribute("w") != null ? images[i].getAttribute("w") : 100;
                var h = images[i].getAttribute("h") != null ? images[i].getAttribute("h") : 100;
                var rotate = images[i].getAttribute("rotate") != null ? images[i].getAttribute("rotate") : 0;


                if(rotate != 0)
                {
                    context.save();
                    context.translate(width / 2, height / 2);
                    context.rotate(rotate * Math.PI / 180);
                    context.drawImage(graphics.sheets[graphics.set], x, y, w, h, Math.floor(-width / 2), Math.floor(-height / 2), width, height);

                    context.restore();
                }
                else
                    context.drawImage(graphics.sheets[graphics.set], x, y, w, h, 0, 0, width, height);

            }

            if(rescale != 1)
            {
                width = width / rescale;
                height = height / rescale;

                var rescaled = document.createElement("canvas");
                rescaled.width = width;
                rescaled.height = height;

                context = rescaled.getContext("2d");

                context.drawImage(canvas, 0, 0, width * rescale, height * rescale, 0, 0, width, height);
                canvas = rescaled;
            }

            if(small)
            {
                if(graphics.small_image[piece] == null)
                    graphics.small_image[piece] = canvas;
                else
                {
                    var montage = document.createElement("canvas");
                    montage.width = graphics.small_image[piece].width + canvas.width;
                    montage.height = Math.max(graphics.small_image[piece].height, canvas.height);

                    var context = montage.getContext("2d");
                    context.drawImage(graphics.small_image[piece], 0, 0);
                    context.drawImage(canvas, graphics.small_image[piece].width, 0);

                    graphics.small_image[piece] = montage;
                }
            }
            else if(images[i].getAttribute("type") == "shadow")
            {

                if(images[i].getAttribute("z") != null)
                    graphics.shadow_z[p] = parseInt(images[i].getAttribute("z"));

                if(images[i].getAttribute("exclude-middle") == "yes")
                {
                    var ox = images[i].getAttribute("ox") != null ? images[i].getAttribute("ox") : 0;
                    var oy = images[i].getAttribute("oy") != null ? images[i].getAttribute("oy") : 0;

                    context.clearRect(-ox * graphics.width, -oy * graphics.height, graphics.width, graphics.height);
                }

                if(graphics.shadow_image[piece] == null)
                {
                    graphics.shadow_image[piece] = canvas;

                    /* Store offsets if this is the first shadow image */
                    var ox = images[i].getAttribute("ox") != null ? images[i].getAttribute("ox") : 0;
                    var oy = images[i].getAttribute("oy") != null ? images[i].getAttribute("oy") : 0;

                    graphics.shadow_offset_x[piece][9] = graphics.width * ox;
                    graphics.shadow_offset_y[piece][9] = graphics.height * oy;
                    graphics.shadow_width[piece][9] = width;
                    graphics.shadow_height[piece][9] = height;
                }
                else
                {
                    var montage = document.createElement("canvas");
                    montage.width = graphics.shadow_image[piece].width + canvas.width;
                    montage.height = Math.max(graphics.shadow_image[piece].height, canvas.height);

                    var context = montage.getContext("2d");
                    context.drawImage(graphics.shadow_image[piece], 0, 0);
                    context.drawImage(canvas, graphics.shadow_image[piece].width, 0);

                    graphics.shadow_image[piece] = montage;
                }
            }
            else
            {
                if(graphics.image[piece] == null)
                    graphics.image[piece] = canvas;
                else
                {
                    var montage = document.createElement("canvas");
                    montage.width = graphics.image[piece].width + canvas.width;
                    montage.height = Math.max(graphics.image[piece].height, canvas.height);

                    var context = montage.getContext("2d");
                    context.drawImage(graphics.image[piece], 0, 0);
                    context.drawImage(canvas, graphics.image[piece].width, 0);

                    graphics.image[piece] = montage;
                }
            }

        }
    }

    if(graphics.shadows.length > 0)
    {
        /* Calculate quadrants for shadow images */
        for(var p = 0; p < PIECE_MAX; p ++)
        {
            if(graphics.shadow_image[p] != null)
            {
                if(graphics.shadow_z[p] != 0)
                    graphics.flags |= GRAPHICS_ZORDER;

                var width = graphics.shadow_width[p][9];
                var height = graphics.shadow_height[p][9];
                var offset_x = graphics.shadow_offset_x[p][9];
                var offset_y = graphics.shadow_offset_y[p][9];

                for(j = 0; j < 3; j ++)
                {
                    for(k = 0; k < 3; k ++)
                    {
                        x = (j - 1) * graphics.width - offset_x;
                        y = (k - 1) * graphics.height - offset_y;

                        /* Does the shadow fall into this square? */
                        if(x > -(graphics.width) && x < width && y > -(graphics.height) && y < height)
                        {
                            if(x >= 0)
                            {
                                graphics.shadow_start_x[p][j+k*3]= x;
                                graphics.shadow_offset_x[p][j+k*3] = 0;

                                if(x + graphics.width > width)
                                    graphics.shadow_width[p][j+k*3] = width - x;
                                else
                                    graphics.shadow_width[p][j+k*3] = graphics.width;
                            }
                            else
                            {
                                graphics.shadow_start_x[p][j+k*3] = 0;
                                graphics.shadow_offset_x[p][j+k*3] = -x;

                                graphics.shadow_width[p][j+k*3] = graphics.width + x;
                            }


                            if(y >= 0)
                            {
                                graphics.shadow_start_y[p][j+k*3]= y;
                                graphics.shadow_offset_y[p][j+k*3] = 0;

                                if(y + graphics.height > height)
                                    graphics.shadow_height[p][j+k*3] = height - y;
                                else
                                    graphics.shadow_height[p][j+k*3] = graphics.height;
                            }
                            else
                            {
                                graphics.shadow_start_y[p][j+k*3] = 0;
                                graphics.shadow_offset_y[p][j+k*3] = -y;

                                graphics.shadow_height[p][j+k*3] = graphics.height + y;
                            }

                            graphics.shadow_flags[p] |= shadow_flags[j+k*3];
                        }
                    }
                }
            }
        }

        /* Calcuate flags for shadows */
        for(s = 0; s < graphics.shadows.length; s ++)
        {
            graphics.shadows[s].flag = shadow_flags[(graphics.shadows[s].x + 1) + 3 * (graphics.shadows[s].y + 1)];
            graphics.shadows[s].shadow = (1 + graphics.shadows[s].x) + 3 * (1 + graphics.shadows[s].y);
        }
    }

    graphics_return_after_rendering();
}

function graphics_return_after_rendering()
{
    document.getElementById("missing-render").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("items").style.display = "block";

    display_focus();
    display_level();
    menu_show(false);
}

function screen_resize()
{
    if(level != null && (menu.state == false || menu.becoming == false))
        graphics_render();
}

function level_from_string(s)
{
    var level = {};

    level.mode = MODE_CHROMA;
    level.title = "";
    level.width = 0;
    level.height = 0;
    level.flags = 0;

    level.piece = [];
    level.moving = [];
    level.previous = [];
    level.previousmoving = [];
    level.detonator = [];
    level.detonatormoving = [];
    level.data = [];

    level.movers = [];
    level.oldmovers = [];
    level.stack = [];

    level.player = 0;
    level.player_x = [0, 0];
    level.player_y = [0, 0];
    level.alive = [false, false];

    level.teleport_x = [0, 0];
    level.teleport_y = [0, 0];
    level.view_x = [0, 0];
    level.view_y = [0, 0];
    level.view_teleport_x = [0, 0];
    level.view_teleport_y = [0, 0];
    level.switched = 0;
    level.mapped = 0;


    level.stars_caught = 0;
    level.stars_exploded = 0;
    level.stars_total = 0;

    level.moves = [];
    level.redoable_moves = [];

    level.level = 0;

    var l = s.split("\n");

    var i = 0;
    var a;
    while(i < l.length)
    {
        if(a = l[i].match(/^mode: (\w+)/))
        {
            switch(a[1])
            {
                case "chroma":
                    level.mode = MODE_CHROMA;
                    break;
                case "xor":
                    level.mode = MODE_XOR;
                    break;
                case "enigma":
                    level.mode = MODE_ENIGMA;
                    break;
            }
        }

        else if(a = l[i].match(/^title: (.*)/))
            level.title = a[1];

        else if(a = l[i].match(/^level: (.*)/))
            level.level= parseInt(a[1]);

        else if(a = l[i].match(/^size: (\d+) (\d+)/))
        {
            level.width = parseInt(a[1]);
            level.height = parseInt(a[2]);

            for(var x = 0; x < level.width; x ++)
            {
                level.piece[x] = [];
                level.moving[x] = [];
                level.previous[x] = [];
                level.previousmoving[x] = [];
                level.detonator[x] = [];
                level.detonatormoving[x] = [];
                level.data[x] = [];
            }
        }

        else if(a = l[i].match(/^stars: (\d+) (\d+) (\d+)/))
        {
            level.stars_caught = parseInt(a[1]);
            level.stars_exploded = parseInt(a[2]);
            level.stars_total = parseInt(a[3]);
        }

        else if(a = l[i].match(/^moves: (.*)/))
            moves = parseInt(a[1]);

        else if(a = l[i].match(/^player: (.*)/))
        {
            p = parseInt(a[1]);
            if(p == 1 || p == 2)
                level.player = p - 1;
        }

        else if(l[i] == "solved: 1")
        {
            level.flags |= LEVELFLAG_SOLVED;
            level.flags |= LEVELFLAG_EXIT;
        }

        else if(l[i] == "failed: 1")
            level.flags |= LEVELFLAG_FAILED;

        else if(l[i] == "switched: 1")
            level.switched = 1;

        else if(a = l[i].match(/^view1: (\d+) (\d+)/))
        {
            level.view_x[0] = parseInt(a[1]);
            level.view_y[0] = parseInt(a[2]);
        }

        else if(a = l[i].match(/^view2: (\d+) (\d+)/))
        {
            level.view_x[1] = parseInt(a[1]);
            level.view_y[1] = parseInt(a[2]);
        }

        else if(a = l[i].match(/^viewteleport1: (\d+) (\d+) \((\d+) (\d+)\)/))
        {
            level.teleport_x[0] = parseInt(a[3]);
            level.teleport_y[0] = parseInt(a[4]);
            level.view_teleport_x[0] = parseInt(a[1]);
            level.view_teleport_y[0] = parseInt(a[2]);
        }

        else if(a = l[i].match(/^viewteleport2: (\d+) (\d+) \((\d+) (\d+)\)/))
        {
            level.teleport_x[1] = parseInt(a[3]);
            level.teleport_y[1] = parseInt(a[4]);
            level.view_teleport_x[1] = parseInt(a[1]);
            level.view_teleport_y[1] = parseInt(a[2]);
        }

        else if(a = l[i].match(/^mapped:/))
        {
            if(l[i].includes("top_left"))
                level.mapped |= MAPPED_TOP_LEFT;
            if(l[i].includes("top_right"))
                level.mapped |= MAPPED_TOP_RIGHT;
            if(l[i].includes("bottom_left"))
                level.mapped |= MAPPED_BOTTOM_LEFT;
            if(l[i].includes("bottom_right"))
                level.mapped |= MAPPED_BOTTOM_RIGHT;
        }

        else if(l[i].match(/^data:/))
        {
            level.stars_total = 0;
            teleport = 0;

            for(var y = 0; y < level.height; y ++)
            {
                i ++;
                var d = l[i].split("");
                for(var x = 0; x < level.width; x ++)
                {
                    var p = character_to_piece(d[x]);

                    switch(p)
                    {
                        case PIECE_PLAYER_ONE:
                            level.player_x[0] = x;
                            level.player_y[0] = y;
                            level.alive[0] = true;
                            break;
                        case PIECE_PLAYER_TWO:
                            level.player_x[1] = x;
                            level.player_y[1] = y;
                            level.alive[1] = true;
                            break;
                        case PIECE_STAR:
                            level.stars_total ++;
                            break;
                        case PIECE_TELEPORT:
                            if(teleport < 2)
                            {
                                level.teleport_x[teleport] = x;
                                level.teleport_y[teleport] = y;
                                teleport ++;
                            }
                            break;
                    }

                    level.piece[x][y] = p;
                    level.moving[x][y] = MOVE_NONE;
                    level.previous[x][y] = PIECE_SPACE;
                    level.previousmoving[x][y] = MOVE_NONE;
                    level.detonator[x][y] = PIECE_SPACE;
                    level.detonatormoving[x][y] = MOVE_NONE;
                    level.data[x][y] = Math.floor(Math.random() * 65536);
                }
            }

            level.stars_total += level.stars_caught + level.stars_exploded;
        }

        else if(l[i].match(/^movedata:/))
        {
            i ++;

            while(l[i] != "")
            {
                for(p = 0; p < l[i].length; p ++)
                {
                    var direction = character_to_direction(l[i][p]);
                    if(direction != MOVE_UNKNOWN)
                    {
                        var move = new Object;
                        move.direction = direction;
                        move.movers = [];
                        move.count = level.moves.length;

                        level.moves.push(move);
                    }
                }
                i ++;
            }
        }

        else if(l[i].match(/^undodata:/))
        {
            i ++;

            m = 0;

            while(l[i] != "")
            {
                j = 0;
                while(j < l[i].length)
                {
                    var mover = new Object;

                    mover.x = parseInt(l[i][j++]) * 10 + parseInt(l[i][j++]);
                    j ++;
                    mover.y = parseInt(l[i][j++]) * 10 + parseInt(l[i][j++]);
                    mover.direction = character_to_direction(l[i][j++]);
                    mover.piece = character_to_piece(l[i][j++]);
                    mover.piece_previous = character_to_piece(l[i][j++]);

                    c = l[i][j++];
                    mover.fast = (c == "," ? 1 : 0);

                    level.moves[m].movers.push(mover);

                    if(c == ".")
                        m ++;
                }

                i ++;
            }
        }

        i ++;
    }

    return level;
}

function level_to_string()
{
    var l;

    l = "chroma level\n\n";

    if(level.mode == MODE_XOR)
        l += "mode: xor\n\n";

    if(level.mode == MODE_ENIGMA)
        l += "mode: enigma\n\n";

    if(level.title != null && level.title != "")
        l += "title: "+level.title+"\n";
    if(level.level != null && level.level != 0)
        l += "level: "+level.level+"\n";

    l += "size: "+level.width+" "+level.height+"\n";

    l += "player: "+(level.player + 1)+"\n";
    l += "moves: "+level.moves.length+"\n";
    l += "stars: "+level.stars_caught+" "+level.stars_exploded+" "+level.stars_total+"\n";

    if(level.flags & LEVELFLAG_SOLVED)
    {
        l += "solved: 1\n";
    }

    if(level.flags & LEVELFLAG_FAILED)
        l += "failed: 1\n";

    if(level.mode == MODE_XOR)
    {
        if(level.switched == 1)
            l += "switched: "+level.switched+"\n";

        l += "view1: "+level.view_x[0]+" "+level.view_y[0]+"\n";
        l += "view2: "+level.view_x[1]+" "+level.view_y[1]+"\n";

        if(level.teleport_x[0] != -1)
        {
            l += "viewteleport1: "+level.view_teleport_x[0]+" "+level.view_teleport_y[0]+" ("+level.teleport_x[0]+" "+level.teleport_y[0]+")\n";
            l += "viewteleport2: "+level.view_teleport_x[1]+" "+level.view_teleport_y[1]+" ("+level.teleport_x[1]+" "+level.teleport_y[1]+")\n";
        }

        if(level.mapped)
        {
            l += "mapped:";
            if(level.mapped & MAPPED_TOP_LEFT)
                l += " top_left";
            if(level.mapped & MAPPED_TOP_RIGHT)
                l += " top_right";
            if(level.mapped & MAPPED_BOTTOM_LEFT)
                l += " bottom_left";
            if(level.mapped & MAPPED_BOTTOM_RIGHT)
                l += " bottom_right";
            l += "\n";
        }
    }

    l += "\ndata:\n";

    for(y = 0; y < level.height; y ++)
    {
        for(x = 0; x < level.width; x ++)
        {
            l += piece_to_character(level_piece(x, y));
        }
        l += "\n";
    }
    l += "\n";

    if(level.moves.length != 0)
    {
        l += "movedata:\n";

        for(m = 0; m < level.moves.length; m++)
        {
            l += direction_to_character(level.moves[m].direction);
            if(m % 78 == 77)
                l += "\n";
        }
        l += "\n\n";

        l += "undodata:\n";

        buffer = "";
        for(m = 0; m < level.moves.length; m++)
        {
            move = level.moves[m];

            for(n = 0; n < move.movers.length; n ++)
            {
                mover = move.movers[n];

                c = ',';
                if(mover.fast == 0)
                    c = ';';
                if(n == move.movers.length - 1)
                    c = '.';

                buffer += two(mover.x);
                buffer += ":";
                buffer += two(mover.y);
                buffer += direction_to_character(mover.direction);
                buffer += piece_to_character(mover.piece);
                buffer += piece_to_character(mover.piece_previous);
                buffer += c;

                if(buffer.length > 71)
                {
                    l += buffer+"\n";
                    buffer = "";
                }
            }
        }
        if(buffer != "")
            l += buffer+"\n";
    }

    return l;

}

function two(v)
{
    return v < 10 ? "0" + v : v;
}


function character_to_piece(c)
{
    switch(c)
    {
        case ' ':
            return PIECE_SPACE;
        case "%":
            return PIECE_WALL;
        case '1':
            return PIECE_PLAYER_ONE;
        case '2':
            return PIECE_PLAYER_TWO;
        case '.':
            return PIECE_DOTS;
        case 'a':
            return PIECE_ARROW_RED_LEFT;
        case 'b':
            return PIECE_ARROW_RED_UP;
        case 'c':
            return PIECE_ARROW_RED_RIGHT;
        case 'd':
            return PIECE_ARROW_RED_DOWN;
        case 'A':
            return PIECE_BOMB_RED_LEFT;
        case 'B':
            return PIECE_BOMB_RED_UP;
        case 'C':
            return PIECE_BOMB_RED_RIGHT;
        case 'D':
            return PIECE_BOMB_RED_DOWN;
        case 'e':
            return PIECE_ARROW_GREEN_LEFT;
        case 'f':
            return PIECE_ARROW_GREEN_UP;
        case 'g':
            return PIECE_ARROW_GREEN_RIGHT;
        case 'h':
            return PIECE_ARROW_GREEN_DOWN;
        case 'E':
            return PIECE_BOMB_GREEN_LEFT;
        case 'F':
            return PIECE_BOMB_GREEN_UP;
        case 'G':
            return PIECE_BOMB_GREEN_RIGHT;
        case 'H':
            return PIECE_BOMB_GREEN_DOWN;
        case 'i':
            return PIECE_ARROW_BLUE_LEFT;
        case 'j':
            return PIECE_ARROW_BLUE_UP;
        case 'k':
            return PIECE_ARROW_BLUE_RIGHT;
        case 'l':
            return PIECE_ARROW_BLUE_DOWN;
        case 'I':
            return PIECE_BOMB_BLUE_LEFT;
        case 'J':
            return PIECE_BOMB_BLUE_UP;
        case 'K':
            return PIECE_BOMB_BLUE_RIGHT;
        case 'L':
            return PIECE_BOMB_BLUE_DOWN;
        case 'o':
            return PIECE_CIRCLE;
        case '*':
            return PIECE_STAR;
        case '/':
            return PIECE_DOOR;
        case '8':
            return PIECE_CIRCLE_DOUBLE;
        case ':':
            return PIECE_DOTS_DOUBLE;
        case '-':
            return PIECE_DOTS_X;
        case '|':
            return PIECE_DOTS_Y;
        case 'S':
            return PIECE_SWITCH;
        case 'T':
            return PIECE_TELEPORT;
        case 'M':
            return PIECE_MAP_TOP_LEFT;
        case 'm':
            return PIECE_MAP_TOP_RIGHT;
        case 'N':
            return PIECE_MAP_BOTTOM_LEFT;
        case 'n':
            return PIECE_MAP_BOTTOM_RIGHT;
        case '!':
            return PIECE_GONE;
        case 'p':
            return PIECE_EXPLOSION_RED_LEFT;
        case 'q':
            return PIECE_EXPLOSION_RED_HORIZONTAL;
        case 'r':
            return PIECE_EXPLOSION_RED_RIGHT;
        case 'P':
            return PIECE_EXPLOSION_RED_TOP;
        case 'Q':
            return PIECE_EXPLOSION_RED_VERTICAL;
        case 'R':
            return PIECE_EXPLOSION_RED_BOTTOM;
        case 'u':
            return PIECE_EXPLOSION_GREEN_LEFT;
        case 'v':
            return PIECE_EXPLOSION_GREEN_HORIZONTAL;
        case 'w':
            return PIECE_EXPLOSION_GREEN_RIGHT;
        case 'U':
            return PIECE_EXPLOSION_GREEN_TOP;
        case 'V':
            return PIECE_EXPLOSION_GREEN_VERTICAL;
        case 'W':
            return PIECE_EXPLOSION_GREEN_BOTTOM;
        case 'x':
            return PIECE_EXPLOSION_BLUE_LEFT;
        case 'y':
            return PIECE_EXPLOSION_BLUE_HORIZONTAL;
        case 'z':
            return PIECE_EXPLOSION_BLUE_RIGHT;
        case 'X':
            return PIECE_EXPLOSION_BLUE_TOP;
        case 'Y':
            return PIECE_EXPLOSION_BLUE_VERTICAL;
        case 'Z':
            return PIECE_EXPLOSION_BLUE_BOTTOM;
        default:
            return PIECE_UNKNOWN;
    }
}

function piece_to_character(piece)
{
    switch(piece)
    {
        case PIECE_SPACE:
            return ' ';
        case PIECE_WALL:
            return '%';
        case PIECE_PLAYER_ONE:
            return '1';
        case PIECE_PLAYER_TWO:
            return '2';
        case PIECE_DOTS:
            return '.';
        case PIECE_ARROW_RED_LEFT:
            return 'a';
        case PIECE_ARROW_RED_UP:
            return 'b';
        case PIECE_ARROW_RED_RIGHT:
            return 'c';
        case PIECE_ARROW_RED_DOWN:
            return 'd';
        case PIECE_BOMB_RED_LEFT:
            return 'A';
        case PIECE_BOMB_RED_UP:
            return 'B';
        case PIECE_BOMB_RED_RIGHT:
            return 'C';
        case PIECE_BOMB_RED_DOWN:
            return 'D';
        case PIECE_ARROW_GREEN_LEFT:
            return 'e';
        case PIECE_ARROW_GREEN_UP:
            return 'f';
        case PIECE_ARROW_GREEN_RIGHT:
            return 'g';
        case PIECE_ARROW_GREEN_DOWN:
            return 'h';
        case PIECE_BOMB_GREEN_LEFT:
            return 'E';
        case PIECE_BOMB_GREEN_UP:
            return 'F';
        case PIECE_BOMB_GREEN_RIGHT:
            return 'G';
        case PIECE_BOMB_GREEN_DOWN:
            return 'H';
        case PIECE_ARROW_BLUE_LEFT:
            return 'i';
        case PIECE_ARROW_BLUE_UP:
            return 'j';
        case PIECE_ARROW_BLUE_RIGHT:
            return 'k';
        case PIECE_ARROW_BLUE_DOWN:
            return 'l';
        case PIECE_BOMB_BLUE_LEFT:
            return 'I';
        case PIECE_BOMB_BLUE_UP:
            return 'J';
        case PIECE_BOMB_BLUE_RIGHT:
            return 'K';
        case PIECE_BOMB_BLUE_DOWN:
            return 'L';
        case PIECE_CIRCLE:
            return 'o';
        case PIECE_STAR:
            return '*';
        case PIECE_DOOR:
            return '/';
        case PIECE_DOTS_DOUBLE:
            return ':';
        case PIECE_CIRCLE_DOUBLE:
            return '8';
        case PIECE_DOTS_X:
            return '-';
        case PIECE_DOTS_Y:
            return '|';
        case PIECE_SWITCH:
            return 'S';
        case PIECE_TELEPORT:
            return 'T';
        case PIECE_MAP_TOP_LEFT:
            return 'M';
        case PIECE_MAP_TOP_RIGHT:
            return 'm';
        case PIECE_MAP_BOTTOM_LEFT:
            return 'N';
        case PIECE_MAP_BOTTOM_RIGHT:
            return 'n';
        case PIECE_GONE:
            return '!';
        case PIECE_EXPLOSION_RED_LEFT:
                return 'p';
        case PIECE_EXPLOSION_RED_HORIZONTAL:
                return 'q';
        case PIECE_EXPLOSION_RED_RIGHT:
                return 'r';
        case PIECE_EXPLOSION_RED_TOP:
                return 'P';
        case PIECE_EXPLOSION_RED_VERTICAL:
                return 'Q';
        case PIECE_EXPLOSION_RED_BOTTOM:
                return 'R';
        case PIECE_EXPLOSION_GREEN_LEFT:
                return 'u';
        case PIECE_EXPLOSION_GREEN_HORIZONTAL:
                return 'v';
        case PIECE_EXPLOSION_GREEN_RIGHT:
                return 'w';
        case PIECE_EXPLOSION_GREEN_TOP:
                return 'U';
        case PIECE_EXPLOSION_GREEN_VERTICAL:
                return 'V';
        case PIECE_EXPLOSION_GREEN_BOTTOM:
                return 'W';
        case PIECE_EXPLOSION_BLUE_LEFT:
                return 'x';
        case PIECE_EXPLOSION_BLUE_HORIZONTAL:
                return 'y';
        case PIECE_EXPLOSION_BLUE_RIGHT:
                return 'z';
        case PIECE_EXPLOSION_BLUE_TOP:
                return 'X';
        case PIECE_EXPLOSION_BLUE_VERTICAL:
                return 'Y';
        case PIECE_EXPLOSION_BLUE_BOTTOM:
                return 'Z';

        default:
            return '?';
    }
}

function direction_to_character(direction)
{
    switch(direction)
    {
        case MOVE_LEFT:
            return 'l';
        case MOVE_UP:
            return 'u';
        case MOVE_RIGHT:
            return 'r';
        case MOVE_DOWN:
            return 'd';
        case MOVE_SWAP:
            return 's';
        case MOVE_SWAPPED:
            return 'w';
        case MOVE_NONE:
            return 'n';

        default:
            return '?';
    }
}

function character_to_direction(c)
{
    switch(c)
    {
        case 'l':
            return MOVE_LEFT;
        case 'u':
            return MOVE_UP;
        case 'r':
            return MOVE_RIGHT;
        case 'd':
            return MOVE_DOWN;
        case 's':
            return MOVE_SWAP;
        case 'w':
            return MOVE_SWAPPED;
        case 'n':
            return MOVE_NONE;

        default:
            return MOVE_UNKNOWN;
    }
}

function explosiontype(p)
{
    switch(p)
    {
        case PIECE_ARROW_RED_LEFT:
        case PIECE_ARROW_RED_RIGHT:
        case PIECE_BOMB_RED_LEFT:
        case PIECE_BOMB_RED_RIGHT:
            return PIECE_EXPLOSION_NEW_RED_VERTICAL;
        case PIECE_ARROW_RED_UP:
        case PIECE_ARROW_RED_DOWN:
        case PIECE_BOMB_RED_UP:
        case PIECE_BOMB_RED_DOWN:
            return PIECE_EXPLOSION_NEW_RED_HORIZONTAL;

        case PIECE_ARROW_GREEN_LEFT:
        case PIECE_ARROW_GREEN_RIGHT:
        case PIECE_BOMB_GREEN_LEFT:
        case PIECE_BOMB_GREEN_RIGHT:
            return PIECE_EXPLOSION_NEW_GREEN_VERTICAL;
        case PIECE_ARROW_GREEN_UP:
        case PIECE_ARROW_GREEN_DOWN:
        case PIECE_BOMB_GREEN_UP:
        case PIECE_BOMB_GREEN_DOWN:
            return PIECE_EXPLOSION_NEW_GREEN_HORIZONTAL;

        case PIECE_ARROW_BLUE_LEFT:
        case PIECE_ARROW_BLUE_RIGHT:
        case PIECE_BOMB_BLUE_LEFT:
        case PIECE_BOMB_BLUE_RIGHT:
            return PIECE_EXPLOSION_NEW_BLUE_VERTICAL;
        case PIECE_ARROW_BLUE_UP:
        case PIECE_ARROW_BLUE_DOWN:
        case PIECE_BOMB_BLUE_UP:
        case PIECE_BOMB_BLUE_DOWN:
            return PIECE_EXPLOSION_NEW_BLUE_HORIZONTAL;

        default:
            /* This should never happen */
            return PIECE_GONE;
    }
}

function level_moved(move)
{
    level_addmove(move);

    level.flags |= LEVELFLAG_MOVES;

    level_storemovers();

    display_start_update();
}

function level_move(move)
{
    var realmove = move;
    var x, y, ok, p, px, py;
    var teleport, tx, ty, td, dx, dy;

    if(level.flags & LEVELFLAG_EXIT)
        return;

    if(realmove == MOVE_REDO)
    {
        move = level.redoable_moves[level.redoable_moves.length - 1].direction;
    }


    if(move == MOVE_SWAP)
    {
        if(level.alive[1 - level.player])
        {
            level.player = 1 - level.player;

            /* Create new movers for the stationary swapped players to allow
               the display to redraw them after the swap. */
            mover_new(level.player_x[level.player], level.player_y[level.player], MOVE_SWAP, PIECE_PLAYER_ONE +  level.player, 0);

            /* Is the first player still alive? */
            if(level.alive[1 - level.player])
                mover_new(level.player_x[1 - level.player], level.player_y[1 - level.player], MOVE_SWAPPED, PIECE_PLAYER_ONE + 1 - level.player, 0);

            level_moved(realmove);

            return true;
        }
        else
            return false;
    }

    if(level.alive[level.player] == 0)
        return false;

    if(level.mode == MODE_XOR && options.xor_engine)
    {
        if(xor_move(move))
        {
            level_moved(realmove);
            xor_focus();
            return true;
        }
        return false;
    }
    if(level.mode == MODE_ENIGMA && options.enigma_engine)
    {
        if(enigma_move(move))
        {
            level_moved(realmove);
            return true;
        }
        return false;
    }

    /* Consider where we are moving to */
    x = level.player_x[level.player] + move_x[move];
    y = level.player_y[level.player] + move_y[move];

    p = level_piece(x, y);

    ok = 0;

    /* Can we move into the piece in that direction? */
    switch(p)
    {
        case PIECE_DOOR:
            if(level.stars_caught == level.stars_total)
            {
                level.flags |= LEVELFLAG_EXIT;
                ok = 1;
            }
            break;

        case PIECE_STAR:
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
            ok = 1;
            break;

        case PIECE_TELEPORT:
            /* Only XOR has teleports. We force the issue so as not to break
               Chroma's rotational symmetry by introducing teleport order. */
            if(level.mode != MODE_XOR)
                break;

            teleport = -1;
            if(x == level.teleport_x[0] && y == level.teleport_y[0])
                teleport = 0;
            if(x == level.teleport_x[1] && y == level.teleport_y[1])
                teleport = 1;

            if(teleport != -1)
            {
                tx = level.teleport_x[1 - teleport];
                ty = level.teleport_y[1 - teleport];
                td = move;

                /* Does the other teleport still exist? */
                if(level_piece(tx, ty) == PIECE_TELEPORT)
                {
                    ok = 0;
                    /* Find the first available exit from it */
                    for(i = 0; i < 4; i ++)
                    {
                        dx = tx + move_x[xor_teleport_order[i]];
                        dy = ty + move_y[xor_teleport_order[i]];
                        if(!ok && level_piece(dx, dy) == PIECE_SPACE)
                        {
                            /* Change move to produce the effect of coming
                               out of the teleport */
                            x = dx; y = dy; move = xor_teleport_order[i];
                            ok = 1;
                        }
                    }
                    if(ok)
                    {
                        /* Visual effects for the player going in one teleport */
                        /* Store original player move direction in cosmetic mover */
                        mover_new(level.teleport_x[teleport], level.teleport_y[teleport], td, PIECE_TELEPORT, 0);
                        level_setprevious(level.teleport_x[teleport], level.teleport_y[teleport], PIECE_PLAYER_ONE + level.player);
                        level_setpreviousmoving(level.teleport_x[teleport], level.teleport_y[teleport], realmove);
                        /* and out of the other teleport */
                        mover_new(level.teleport_x[1 - teleport], level.teleport_y[1 - teleport], MOVE_NONE, PIECE_TELEPORT, 0);

                        /* Change the viewpoint to that of the other teleport */
                        level.view_x[level.player] = level.view_teleport_x[1 - teleport];
                        level.view_y[level.player] = level.view_teleport_y[1 - teleport];

                    }
                }
            }
            break;

        case PIECE_SWITCH:
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
            ok = 1;
        break;

        case PIECE_MAP_TOP_LEFT:
            level.mapped |= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
            ok = 1;
            break;

        case PIECE_MAP_TOP_RIGHT:
            level.mapped |= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
            ok = 1;
            break;

        case PIECE_MAP_BOTTOM_LEFT:
            level.mapped |= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
            ok = 1;
            break;

        case PIECE_MAP_BOTTOM_RIGHT:
            level.mapped |= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
            ok = 1;
            break;

        case PIECE_DOTS_X:
            if(move == MOVE_LEFT || move == MOVE_RIGHT)
        ok = 1;
            break;

        case PIECE_DOTS_Y:
            if(move == MOVE_UP || move == MOVE_DOWN)
        ok = 1;
            break;

        case PIECE_DOTS_DOUBLE:
        case PIECE_DOTS:
        case PIECE_SPACE:
            ok = 1;
            break;
    }

    /* Is there a piece we can push? */
    if(!ok)
    {
        tx = x + move_x[move];
        ty = y + move_y[move];

        if(canbepushed(p, level_piece(tx, ty), move, level.mode))
        {
            mover_new(tx, ty, move, p, 0);
            ok = 1;
        }
    }

    if(ok)
    {

        /* Cosmetic mover for storing the player's direction in undo */
        mover_new(level.player_x[level.player], level.player_y[level.player], move, PIECE_GONE, 0);

        mover_new(x, y, move, PIECE_PLAYER_ONE + level.player, 0);

        px = level.player_x[level.player];
        py = level.player_y[level.player];

        /* XOR protects the players move */
        if(level.mode == MODE_XOR)
        {
            /* Blank the player's space first to avoid upsetting undo */
            level_setpiece(px, py, PIECE_SPACE);
            mover_new(px, py, (move + 1) % 4, PIECE_SPACE, 1);
        }
        /* Chroma lets a piece follow in the player's trail */
        else
        {
            /* Blank the player's space first to avoid upsetting undo */
            level_setpiece(px, py, PIECE_SPACE);
            mover_consider(px, py, move % 4);
        }

        level.player_x[level.player] = x;
        level.player_y[level.player] = y;

        level_moved(realmove);

        if(level.mode == MODE_XOR)
            xor_focus();

        return true;
    }

    return false;
}

function mover_explode(x, y, d, p)
{
    /* Don't explode any of the edge wall */
    if(x == 0 || y == 0 || x == level.width - 1 || y == level.width - 1)
        return;

    /* What have we exploded? */
    switch(level_piece(x, y))
    {
        case PIECE_STAR:
            level.stars_exploded ++;
            level.flags |= LEVELFLAG_STARS;
            break;

        case PIECE_SWITCH:
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
            break;
    }

    mover_new(x, y, d, p, 1);
}

function mover_new(x, y, d, piece, fast)
{
    var mover = new Object;

    /* Don't allow two movers in the same space, unless one is exploding */
    if(!isnewexplosion(piece) && level_moving(x, y) != MOVE_NONE)
        return;

    var previous = level_piece(x, y);

    mover.x = x;
    mover.y = y;
    mover.direction = d;
    mover.piece = piece;
    mover.piece_previous = previous;
    mover.fast = fast;

    /* Show pieces collected by players */
    if(piece == PIECE_PLAYER_ONE || piece == PIECE_PLAYER_TWO)
    {
        if((previous < PIECE_MOVERS_FIRST || previous > PIECE_MOVERS_LAST)
                    && previous != PIECE_CIRCLE
                    && previous != PIECE_CIRCLE_DOUBLE
                    && previous != PIECE_PLAYER_ONE
                    && previous != PIECE_PLAYER_TWO)
            level_setprevious(x, y, previous);
    }

    /* Show players squashed by movers */
    if(piece >= PIECE_MOVERS_FIRST && piece <= PIECE_MOVERS_LAST)
    {
        if(previous == PIECE_PLAYER_ONE || previous == PIECE_PLAYER_TWO)
               level_setprevious(x, y, previous);
    }

    /* Show pieces removed by movers or explosions */
    if(previous == PIECE_DOTS
            || previous == PIECE_DOTS_DOUBLE
            || previous == PIECE_DOTS_X
            || previous == PIECE_DOTS_Y
            || isexplosion(previous))
        level_setprevious(x, y, previous);

    /* Show exploded pieces */
    if(isnewexplosion(piece) && !isnewexplosion(previous))
    {
        level_setprevious(x, y, previous);
        level_setpreviousmoving(x, y, level_moving(x, y));
    }

    /* Explosions occur later */
    if(!isnewexplosion(piece) && piece != PIECE_GONE)
    {
        level_setpiece(x, y, piece);
        level_setmoving(x, y, d);
    }

    /* Maintain piece graphic */
    if(d != MOVE_NONE)
    {
        data = level_data(x - move_x[d], y - move_y[d]) & 0xff00;
        data = (level_data(x, y) & ~0xff00) | data;
        level_setdata(x, y, data);
    }

    level.movers.push(mover);
}

function mover_addtostack(x, y, move)
{
    var mover = new Object;

    mover.x = x;
    mover.y = y;
    mover.direction = move;
    mover.piece = PIECE_SPACE;
    mover.fast = 0;

    level.stack.push(mover);
}


function level_addmove(direction)
{
    if(direction == MOVE_REDO)
    {
        direction = level.redoable_moves[level.redoable_moves.length - 1].direction;
        level.redoable_moves.pop();
    }
    else if(level.redoable_moves.length != 0)
        level.redoable_moves = [];

    var move = new Object;
    move.direction = direction;
    move.movers = [];
    move.count = level.moves.length;

    level.moves.push(move);
}

function level_storemovers()
{
    var previous;

    for(m = 0; m < level.movers.length; m ++)
    {
        /* If something is moving into an explosion, don't store it as the
           previous piece for this space; it will have its own mover, and thus
           will be stored elsewhere. */
        previous = level.movers[m].piece_previous;
        if(isexplosion(level.movers[m].piece) && level_previousmoving(level.movers[m].x, level.movers[m].y) != MOVE_NONE)
            previous = PIECE_SPACE;

        mover_newundo(level.movers[m].x, level.movers[m].y,
            level.movers[m].direction, level.movers[m].piece, previous,
            MOVER_STORE | (m == level.movers.length - 1 ? 0 : MOVER_FAST));
    }
}

function level_evolve()
{
    var mover, x, y, i, d, ad, ed, ax, ay, bp, bd, filled;

    if(level.mode == MODE_XOR && options.xor_engine)
    {
        return xor_evolve();
    }
    if(level.mode == MODE_ENIGMA && options.enigma_engine)
    {
        return enigma_evolve();
    }

    level.oldmovers = level.movers;
    level.movers = [];

    /* Chroma's engine isn't perfect. Pieces that appear to be in continuous
       motion are actually momentarily stationary at the start of every cycle.
       In pathological cases, this can give rise to some counterintuitive
       situations, where the outcome depends on the order of the movers.

       See levels/regression/chroma-regression.chroma for some examples.
    */

    for(m = 0; m < level.oldmovers.length; m ++)
    {
        mover = level.oldmovers[m];

        level_setmoving(mover.x, mover.y, MOVE_NONE);
        level_setprevious(mover.x, mover.y, PIECE_SPACE);
        level_setpreviousmoving(mover.x, mover.y, MOVE_NONE);
        level_setdetonator(mover.x, mover.y, PIECE_SPACE);
        level_setdetonatormoving(mover.x, mover.y, MOVE_NONE);
    }

    /* Make any changes to the map, if necessary */
    if(level.mode == MODE_XOR && options.xor_display)
    {
        for(m = 0; m < level.oldmovers.length; m ++)
        {
            mover = level.oldmovers[m];

            display_map_piece(mover.x, mover.y);
        }
    }
        


    for(m = 0; m < level.oldmovers.length; m ++)
    {
        mover = level.oldmovers[m];

        /* Remove the mover if something has already moved into its space */
        if(level_moving(mover.x, mover.y) != MOVE_NONE
        /* or it isn't what it should be */
            || level_piece(mover.x, mover.y) != mover.piece
          )
            mover.piece = PIECE_GONE;

        switch(mover.piece)
        {
            case PIECE_SPACE:
            case PIECE_EXPLOSION_RED_LEFT:
            case PIECE_EXPLOSION_RED_HORIZONTAL:
            case PIECE_EXPLOSION_RED_RIGHT:
            case PIECE_EXPLOSION_RED_TOP:
            case PIECE_EXPLOSION_RED_VERTICAL:
            case PIECE_EXPLOSION_RED_BOTTOM:
            case PIECE_EXPLOSION_GREEN_LEFT:
            case PIECE_EXPLOSION_GREEN_HORIZONTAL:
            case PIECE_EXPLOSION_GREEN_RIGHT:
            case PIECE_EXPLOSION_GREEN_TOP:
            case PIECE_EXPLOSION_GREEN_VERTICAL:
            case PIECE_EXPLOSION_GREEN_BOTTOM:
            case PIECE_EXPLOSION_BLUE_LEFT:
            case PIECE_EXPLOSION_BLUE_HORIZONTAL:
            case PIECE_EXPLOSION_BLUE_RIGHT:
            case PIECE_EXPLOSION_BLUE_TOP:
            case PIECE_EXPLOSION_BLUE_VERTICAL:
            case PIECE_EXPLOSION_BLUE_BOTTOM:
                i = 0;
                filled = 0;

                /* Consider the pieces around the space */
                for(i = 0; i < 4; i ++)
                {
                    if(filled)
                        continue;

                    /* Enigma has a fixed move order */
                    if(level.mode == MODE_ENIGMA)
                        d = enigma_move_order[i];
                    else
                    /* Chroma and XOR depend on how the space was emptied */
                        d = (mover.direction + i) % 4;

                    ad = (d + 2) % 4;
                    ax = mover.x + move_x[ad];
                    ay = mover.y + move_y[ad];

                    /* Can the piece move into the space? */
                    if(canfall(level_piece(ax, ay), PIECE_SPACE, d)
                        /* and that piece isn't already moving */
                        && level_moving(ax, ay) == MOVE_NONE
                      )
                    {
                        x = mover.x + move_x[d];
                        y = mover.y + move_y[d];

                        /* Can the piece from the opposite direction also
                           move into this space? */
                        if(canfall(level_piece(x, y), PIECE_SPACE, ad)
                            /* and that piece isn't already moving */
                            && level_moving(x, y) == MOVE_NONE
                            /* If so, can the two explode? */
                            && canexplode(level_piece(ax, ay), level_piece(x, y), d, 1, level.mode)
                            /* (but not for XOR and Enigma) */
                            && level.mode == MODE_CHROMA
                          )
                        {
                            /* If so, detonate them in the middle */
                            if((level_piece(x, y) & 4) == 4)
                            {
                                /* The first piece is the bomb */
                                bp = level_piece(x, y);
                                bd = ad;
                                ed = level_piece(x, y) & 3;

                                level_setdetonator(mover.x, mover.y, level_piece(ax, ay));
                                level_setdetonatormoving(mover.x, mover.y, d);
                            }
                            else
                            {
                                /* The second piece is the bomb */
                                bp = level_piece(ax, ay);
                                bd = d;
                                ed = level_piece(ax, ay) & 3;

                                level_setdetonator(mover.x, mover.y, level_piece(x, y));
                                level_setdetonatormoving(mover.x, mover.y, ad);
                            }

                            /* and consider anything following them */
                            mover_consider(x, y, ad);
                            mover_consider(ax, ay, d);

                            /* Move the bomb into the space */
                            level_setpiece(mover.x, mover.y, bp);
                            level_setmoving(mover.x, mover.y, bd);

                            /* and explode it */
                            mover_explode(mover.x, mover.y, ed, explosiontype(bp));

                            /* Create the central explosion now, to prevent the
                               piece there being processed as a later mover. */
                            level_setpiece(mover.x, mover.y, explosiontype(bp));
                            explode_sides(mover.x, mover.y, bp, ed);

                            filled = 1;
                            break;
                        }

                        /* Otherwise, keep the piece moving */
                        mover_new(mover.x, mover.y, d, level_piece(ax, ay), 1);
                        /* and see if anything is following in its trail */
                        mover_consider(ax, ay, d);

                        filled = 1;
                        break;
                    }
                }

                /* If the explosion has not been filled */
                if(isexplosion(mover.piece) && filled == 0
                    /* and nothing else is moving into it */
                    && level_moving(mover.x, mover.y) == MOVE_NONE
                  )
                    /* then turn it into a space */
                    mover_new(mover.x, mover.y, mover.direction, PIECE_SPACE, 0);

                break;

            case PIECE_PLAYER_ONE:
            case PIECE_PLAYER_TWO:
            case PIECE_GONE:
            /* These 'movers' are purely for cosmetic purposes */
                break;

            case PIECE_TELEPORT:
            /* These 'movers' are purely for cosmetic purposes */
                break;

            default:
                /* A pushed arrow still falls in its natural direction */
                if(mover.fast == 0 && mover.piece >= PIECE_MOVERS_FIRST && mover.piece <= PIECE_MOVERS_LAST)
                    mover.direction = mover.piece % 4;

                /* Consider the space in front of the mover */
                x = mover.x + move_x[mover.direction];
                y = mover.y + move_y[mover.direction];

                /* Can the mover move into the space in front of it? */
                if(canmove(mover.piece, level_piece(x, y), mover.direction, mover.fast)
                    /* and that space doesn't already have something
                       moving into it */
                    && (level_moving(x, y) == MOVE_NONE)
                  )
                {
                    /* If so, keep it moving */
                    mover_new(x, y, mover.direction, mover.piece, 1);
                    /* and see if anything is following in its trail */
                    mover_consider(mover.x, mover.y, mover.direction);
                    break;
                }

                /* Can the mover explode the piece in front of it? */
                if(canexplode(mover.piece, level_piece(x, y), mover.direction, mover.fast, level.mode)
                        /* and the piece in front isn't moving */
                        && (level_moving(x, y) == MOVE_NONE
                        /* or it is moving towards us */
                        || (level_moving(x, y) == ((mover.direction + 2) % 4)
                            /* (but not for XOR or Enigma) */
                            && level.mode==MODE_CHROMA))
                  )
                {
                    bp = level_piece(x, y);
                    level_setdetonator(x, y, mover.piece);
                    level_setdetonatormoving(x, y, mover.direction);

                    /* Explosion direction is bomb fall direction */
                    if(bp & 4)
                        ed = bp & 3;
                    else
                        ed = mover.piece & 3;

                    mover_explode(x, y, ed, explosiontype(bp));

                    /* Create the central explosion now, to prevent the piece
                       there being processed as a later mover. */
                    level_setpiece(x, y, explosiontype(bp));

                    mover_consider(mover.x, mover.y, mover.direction);

                    explode_sides(x, y, bp, ed);

                    break;
                }

        }
    }

    /* Create the side explosions at the end, rather than during the previous
       loop. This allows multiple explosions to occur in parallel. Centre
       explosions will have already been created earlier on. */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        if(isnewexplosion(mover.piece))
        {
            if(!isnewexplosion(level_piece(mover.x, mover.y)))
            {
                level_setprevious(mover.x, mover.y, level_piece(mover.x, mover.y));
                level_setpreviousmoving(mover.x, mover.y, level_moving(mover.x, mover.y));
            }

            /* Use PIECE_EXPLOSION_NEW to allow detection of overlapping
               explosions further down. */
            level_setpiece(mover.x, mover.y, mover.piece);
            level_setmoving(mover.x, mover.y, mover.direction);

            mover.piece += PIECE_EXPLOSION_FIRST - PIECE_EXPLOSION_NEW_FIRST;
        }
    }

    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        if(isexplosion(mover.piece))
        {
            /* Remove any explosions that overlap other explosions */
            if(isexplosion(level_piece(mover.x, mover.y)))
            mover.piece = PIECE_GONE;
            /* Otherwise, convert new explosions into explosions proper */
            else
                level_setpiece(mover.x, mover.y, mover.piece);
        }
        /* Remove any movers that have exploded, or aren't as they should be */
        if(level_piece(mover.x, mover.y) != mover.piece)
        {
            mover.piece = PIECE_GONE;
        }
    }

    /* Is player one still alive? */
    if(level_piece(level.player_x[0], level.player_y[0]) != PIECE_PLAYER_ONE)
    {
        level.flags |= LEVELFLAG_MOVES;
        level.alive[0] = false;
    }

    /* Is player two still alive? */
    if(level_piece(level.player_x[1], level.player_y[1]) != PIECE_PLAYER_TWO)
    {
        level.flags |= LEVELFLAG_MOVES;
        level.alive[1] = false;
    }

    if(level.alive[0] == false && level.alive[1] == false)
        level.flags |= LEVELFLAG_FAILED;

    level.oldmovers = [];
}

function mover_consider(x, y, d)
{
    var tx, ty, ad;

    /* Is there already a mover in this space? If so, don't allow another */
    if(level_moving(x, y) != MOVE_NONE)
        return;

    /* Enigma doesn't consider the direction in which a space was emptied */
    if(level.mode == MODE_ENIGMA)
    {
        mover_new(x, y, d, PIECE_SPACE, 1);
        return;
    }

    if(level.mode == MODE_XOR)
    {
        mover_new(x, y, d, PIECE_SPACE, 1);
        return;
    }

    ad = (d + 2) % 4;
    tx = x + move_x[ad];
    ty = y + move_y[ad];

    /* Can a piece follow in the trail of this one? */
    if(canfall(level_piece(tx, ty), PIECE_SPACE, d))
    {
        /* If it's moving already, just clear this space (1.07) */
        if(level_moving(tx, ty) != MOVE_NONE)
        {
            mover_new(x, y, MOVE_NONE, PIECE_SPACE, 0);
            return;
        }

        /* Otherwise, set it moving */
        mover_new(x, y, d, level_piece(tx, ty), 1);
        /* and see if there's anything following in its trail */
        mover_consider(tx, ty, d);
        return;
    }

    mover_new(x, y, d, PIECE_SPACE, 1);
}

function explode_sides(x, y, p, d)
{
    /* Chroma is subtle. This may be too subtle to have any effect in practice,
       but the principle elsewhere is that things should be rotationally
       symmetric, and this carries through here. */
    if(level.mode == MODE_CHROMA)
    {
        switch(p % 4)
        {
            case 0: /* left */
                mover_explode(x, y - 1, d, explosiontype(p) - 1);
                mover_explode(x, y + 1, d, explosiontype(p) + 1);
                break;

            case 1: /* up */
                mover_explode(x + 1, y, d, explosiontype(p) + 1);
                mover_explode(x - 1, y, d, explosiontype(p) - 1);
                break;

            case 2: /* right */
                mover_explode(x, y + 1, d, explosiontype(p) + 1);
                mover_explode(x, y - 1, d, explosiontype(p) - 1);
                break;

            case 3: /* down */
                mover_explode(x - 1, y, d, explosiontype(p) - 1);
                mover_explode(x + 1, y, d, explosiontype(p) + 1);
                break;
        }
    }
    else
    {
        switch(p % 2)
        {
            case 0: /* left / right */
                mover_explode(x, y - 1, d, explosiontype(p) - 1);
                mover_explode(x, y + 1, d, explosiontype(p) + 1);
                break;

            case 1: /* up /down */
                mover_explode(x - 1, y, d, explosiontype(p) - 1);
                mover_explode(x + 1, y, d, explosiontype(p) + 1);
                break;
        }
    }
}

function canfall(p, into, d)
{
    /* Determine whether a piece can start moving */

    /* Arrows and bombs */
    if(p >= PIECE_MOVERS_FIRST && p<= PIECE_MOVERS_LAST)
    {
        /* can start falling in their natural direction */
        if(d == (p % 4))
        {
            /* but only into empty space */
            if(into == PIECE_SPACE)
                return true;
            /* or into directional dots if appropriate */
            if(into == PIECE_DOTS_X && (d == MOVE_LEFT || d == MOVE_RIGHT ))
                return true;
            if(into == PIECE_DOTS_Y && (d == MOVE_UP || d == MOVE_DOWN ))
                return true;
        }
    }

    return false;
}

function canmove(p, into, d, fast)
{
    /* Determine whether a piece can continue moving */

    /* Arrows and bombs */
    if(p >= PIECE_MOVERS_FIRST && p<= PIECE_MOVERS_LAST)
    {
        /* can continue moving in their natural direction */
        if(d == (p % 4))
        {
            /* into empty space */
            if(into == PIECE_SPACE)
                    return true;
            /* into dots if they're already moving */
                if(into == PIECE_DOTS && fast)
                    return true;
            /* into directional dots if appropriate */
                if(into == PIECE_DOTS_X && (d == MOVE_LEFT || d == MOVE_RIGHT ))
                    return true;
                if(into == PIECE_DOTS_Y && (d == MOVE_UP || d == MOVE_DOWN ))
                    return true;
            /* through dying explosions */
            if(isexplosion(into))
                return true;
            /* can kill players if already moving */
            if(into == PIECE_PLAYER_ONE && fast)
                return true;
            if(into == PIECE_PLAYER_TWO && fast)
                return true;
        }
        return false;
    }

    /* Circles */
    if(p == PIECE_CIRCLE)
    {
        /* are stopped by everything other than empty space */
        if(into == PIECE_SPACE)
            return true;
        /* and dying explosions */
        if(isexplosion(into))
            return true;
        return false;
    }

  return false;
}

function canbepushed(p, into, d, mode)
{
    /* Determine whether a piece can be pushed by the player */

    /* Arrows and bombs */
    if(p >= PIECE_MOVERS_FIRST && p<= PIECE_MOVERS_LAST)
    {
        /* can be pushed, but not against their natural direction */
        if(d != ((p + 2) % 4))
        {
            /* into empty space or through dots */
            if(into == PIECE_SPACE || into == PIECE_DOTS)
                return true;
            /* through directional dots if appropriate */
            if(into == PIECE_DOTS_X && (d == MOVE_LEFT || d == MOVE_RIGHT))
                return true;
            if(into == PIECE_DOTS_Y && (d == MOVE_UP || d == MOVE_DOWN))
                return true;
        }
        return false;
    }

    /* Circles can be pushed in any direction */
    if(p == PIECE_CIRCLE || p == PIECE_CIRCLE_DOUBLE)
    {
        /* into empty space */
        if(into == PIECE_SPACE)
            return true;
        /* XOR won't let circles (dolls) pass through dots */
        if(mode == MODE_XOR)
            return false;
        /* pushed through dots */
        if(into == PIECE_DOTS)
            return true;
        return false;
    }

  return false;
}

function canexplode(p, i, d, fast, mode)
{
    /* Only an already moving arrow or bomb can act as a detonator */
    if(fast == 0)
        return false;

    /* Arrows can detonate bombs */
    if(p >= PIECE_ARROW_RED_LEFT && p<= PIECE_ARROW_RED_DOWN &&
       i >= PIECE_BOMB_RED_LEFT && i<= PIECE_BOMB_RED_DOWN)
        return true;
    if(p >= PIECE_ARROW_GREEN_LEFT && p<= PIECE_ARROW_GREEN_DOWN &&
       i >= PIECE_BOMB_GREEN_LEFT && i<= PIECE_BOMB_GREEN_DOWN)
        return true;
    if(p >= PIECE_ARROW_BLUE_LEFT && p<= PIECE_ARROW_BLUE_DOWN &&
       i >= PIECE_BOMB_BLUE_LEFT && i<= PIECE_BOMB_BLUE_DOWN)
        return true;

    /* Enigma requires a moving arrow to detonate a stationary bomb, and
       does not permit bombs to detonate other bombs */
    if(mode == MODE_ENIGMA)
        return false;

    /* Bombs can be detonated by arrows pointing towards them */
    if(p >= PIECE_BOMB_RED_LEFT && p<= PIECE_BOMB_RED_DOWN &&
       i == (PIECE_ARROW_RED_LEFT + ((d + 2) % 4)))
        return true;
    if(p >= PIECE_BOMB_GREEN_LEFT && p<= PIECE_BOMB_GREEN_DOWN &&
       i == (PIECE_ARROW_GREEN_LEFT + ((d + 2) % 4)))
        return true;
    if(p >= PIECE_BOMB_BLUE_LEFT && p<= PIECE_BOMB_BLUE_DOWN &&
       i == (PIECE_ARROW_BLUE_LEFT + ((d + 2) % 4)))
        return true;

    /* Bombs can detonate other bombs */
    if(p >= PIECE_BOMB_RED_LEFT && p<= PIECE_BOMB_RED_DOWN &&
       i >= PIECE_BOMB_RED_LEFT && i<= PIECE_BOMB_RED_DOWN)
        return true;
    if(p >= PIECE_BOMB_GREEN_LEFT && p<= PIECE_BOMB_GREEN_DOWN &&
       i >= PIECE_BOMB_GREEN_LEFT && i<= PIECE_BOMB_GREEN_DOWN)
        return true;
    if(p >= PIECE_BOMB_BLUE_LEFT && p<= PIECE_BOMB_BLUE_DOWN &&
       i >= PIECE_BOMB_BLUE_LEFT && i<= PIECE_BOMB_BLUE_DOWN)
        return true;

    return false;
}

function mover_newundo(x, y, d, piece, previous, flags)
{
    var mover = new Object;

    mover.x = x;
    mover.y = y;
    mover.direction = d;
    mover.piece = piece;
    mover.piece_previous = previous;

    if(flags & MOVER_FAST)
        mover.fast = 1;
    else
        mover.fast = 0;

    if(flags & MOVER_UNDO)
    {
        level_setmoving(x, y, d);

        level.movers.push(mover);
    }

    if(flags & MOVER_STORE)
    {
        level.moves[level.moves.length - 1].movers.push(mover);
    }
}

function level_undo()
{
    var td;
    var x, y, d;
    var m;
    var fm;

    var count = 0;

    /* Working backwards, undo any changes made to the map by movers in the
       previous step. */
    for(m = level.movers.length - 1; m >= 0; m --)
    {
        /* Not setting SPACEs fixes a pathological case without apparently breaking anything (1.07) */
        if(level.movers[m].piece != PIECE_SPACE)
            level_setpiece(level.movers[m].x, level.movers[m].y, level.movers[m].piece);
    }

    /* Undo any changes to the map, if necessary */
    if(level.mode == MODE_XOR && options.xor_display)
    {
        for(m = level.movers.length - 1; m >= 0; m --)
        {
            display_map_piece(level.movers[m].x, level.movers[m].y);
        }
    }

    /* Is player one still alive? */
    if(level_piece(level.player_x[0], level.player_y[0]) != PIECE_PLAYER_ONE)
        level.alive[0] = false;
    /* Is player two still alive? */
    if(level_piece(level.player_x[1], level.player_y[1]) != PIECE_PLAYER_TWO)
        level.alive[1] = false;

   /* Tidy up any movers created in the previous step */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        level_setmoving(mover.x, mover.y, MOVE_NONE);
        level_setprevious(mover.x, mover.y, PIECE_SPACE);
    }
    level.movers = [];

    /* Can't undo at very start of level */
    if(level.moves.length == 0)
        return false;

    /* If there is no previous step to undo, remove this move entirely */
    if(level.moves[level.moves.length - 1].movers.length == 0)
    {
        level.redoable_moves.push(level.moves.pop());
        level.flags |= LEVELFLAG_MOVES;

        return false;
    }

    /* Start from the last mover for this step. */
    m = level.moves[level.moves.length - 1].movers.length - 1;

    fm = 0;
    td = MOVE_NONE;

    /* Working backwards, remove these pieces from the map */
    while(m >= 0)
    {
        fm = m;

        mover = level.moves[level.moves.length - 1].movers[m];

        level_setpiece(mover.x, mover.y, PIECE_SPACE);

        /* If the piece is the player, update position and status */
        if(mover.piece_previous == PIECE_PLAYER_ONE || mover.piece_previous == PIECE_PLAYER_TWO)
        {
            level.player_x[mover.piece_previous - PIECE_PLAYER_ONE] = mover.x;
            level.player_y[mover.piece_previous - PIECE_PLAYER_ONE] = mover.y;

            if(level.mode == MODE_XOR)
            {
                /* If a player is being resurrected in this move, and the
                   other player is alive, undo the automatic swap */
                if(level.alive[mover.piece_previous - PIECE_PLAYER_ONE] == 0 && level.alive[level.player])
                {
                    /* Cosmetic mover to deactivate other player */
                    mover_newundo(level.player_x[level.player], level.player_y[level.player], MOVE_SWAPPED, PIECE_PLAYER_ONE + level.player, PIECE_SPACE, MOVER_UNDO);
                }
                /* The active player is the one which moves first
                   (last in undo */
                level.player = mover.piece_previous - PIECE_PLAYER_ONE;
            }

            level.alive[mover.piece_previous - PIECE_PLAYER_ONE] = true;
        }

        /* If the piece is a teleport, store the direction of the original move
           into it for later use. */
        if(mover.piece == PIECE_TELEPORT)
            td = mover.direction;

        /* until we reach the first mover for this step. */
        m --;
        if(m >= 0 && level.moves[level.moves.length - 1].movers[m].fast == 0)
            break;
    }

    /* Now, move forwards through the movers and create cosmetic effects. */
    for(m = fm; m < level.moves[level.moves.length - 1].movers.length; m ++)
    {
        mover = level.moves[level.moves.length - 1].movers[m];

        d = mover.direction;
        x = mover.x - move_x[d];
        y = mover.y - move_y[d];

        if(d != MOVE_NONE && d != MOVE_SWAP && d != MOVE_SWAPPED)
            d = (d + 2) % 4;

        if(isexplosion(mover.piece))
        {
            /* Explosions don't move. */
            d = MOVE_NONE;
            /* Show dying explosion when undoing new explosion */
            level_setprevious(mover.x, mover.y, mover.piece);
        }

        /* Do we need to patch up the direction this piece is moving in? */
        /* Is it the player? */
        if((mover.piece_previous == PIECE_PLAYER_ONE || mover.piece_previous == PIECE_PLAYER_TWO) && (mover.piece == PIECE_SPACE || mover.piece == PIECE_GONE))
        {
            /* If so, are they moving out of a teleport? Use original direction
               of move if so. */
            if(td != MOVE_NONE)
                d = (td + 2) % 4;
        }
        /* Otherwise, if the previous piece wasn't a move, it must have been a
           static piece being eaten by a mover, and thus shouldn't move. */
        else if((mover.piece_previous < PIECE_MOVERS_FIRST || mover.piece_previous > PIECE_MOVERS_LAST) && mover.piece_previous != PIECE_CIRCLE && mover.piece_previous != PIECE_CIRCLE_DOUBLE)
            d = MOVE_NONE;

        /* Plot a cosmetic mover. */
            if(level_previous(mover.x, mover.y) != PIECE_SPACE)
                d = MOVE_NONE;
            /* but not if there are overlapping explosions */
            if(!(mover.piece_previous >= PIECE_EXPLOSION_NEW_FIRST && mover.piece_previous <= PIECE_EXPLOSION_NEW_LAST))
                mover_newundo(mover.x, mover.y, d, mover.piece_previous, PIECE_SPACE, MOVER_UNDO);
    }

    /* Remove the movers in the step we've just done */
    for(m = level.moves[level.moves.length - 1].movers.length - 1; m >= fm; m --)
    {
        mover = level.moves[level.moves.length - 1].movers[m];

        /* Undo any pieces exploded or caught */
        if(mover.piece_previous == PIECE_STAR)
        {
            if(mover.piece == PIECE_PLAYER_ONE || mover.piece == PIECE_PLAYER_TWO)
                level.stars_caught --;
            else
                level.stars_exploded --;

            level.flags |= LEVELFLAG_STARS;
        }
        if(mover.piece_previous == PIECE_SWITCH)
        {
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
        }
        if(mover.piece_previous == PIECE_MAP_TOP_LEFT)
        {
            level.mapped ^= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(mover.piece_previous == PIECE_MAP_TOP_RIGHT)
        {
            level.mapped ^= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(mover.piece_previous == PIECE_MAP_BOTTOM_LEFT)
        {
            level.mapped ^= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(mover.piece_previous == PIECE_MAP_BOTTOM_RIGHT)
        {
            level.mapped ^= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }

        level.moves[level.moves.length - 1].movers.pop();
    }

    /* If the move was a swap, revert to the previous player */
    if(level.moves[level.moves.length - 1].direction == MOVE_SWAP)
        level.player = 1 - level.player;

    /* Have we just undone failure? */
    if((level.flags & LEVELFLAG_FAILED) && (level.alive[0] == true || level.alive[1] == true))
    {
        level.flags &= ~LEVELFLAG_FAILED;
        level.flags |= LEVELFLAG_MOVES;
    }

    /* Have we just undone success? */
    if(level.flags & (LEVELFLAG_SOLVED | LEVELFLAG_EXIT))
    {
        level.flags &= ~LEVELFLAG_SOLVED;
        level.flags &= ~LEVELFLAG_EXIT;
        level.flags |= LEVELFLAG_STARS;
    }

   if(level.mode == MODE_XOR)
        xor_focus();

    return true;
}

function isexplosion(piece)
{
    return (piece >= PIECE_EXPLOSION_FIRST && piece <= PIECE_EXPLOSION_LAST);
}

function isnewexplosion(piece)
{
    return (piece >= PIECE_EXPLOSION_NEW_FIRST && piece <= PIECE_EXPLOSION_NEW_LAST);
}

function level_piece(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return PIECE_WALL;

    return level.piece[x][y];
}

function level_setpiece(x, y, piece)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.piece[x][y] = piece;
}

function level_moving(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return MOVE_NONE;

    return level.moving[x][y];
}

function level_setmoving(x, y, moving)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.moving[x][y] = moving;
}

function level_previous(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return PIECE_WALL;

    return level.previous[x][y];
}

function level_setprevious(x, y, previous)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.previous[x][y] = previous;
}

function level_previousmoving(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return MOVE_NONE;

    return level.previousmoving[x][y];
}

function level_setpreviousmoving(x, y, previousmoving)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.previousmoving[x][y] = previousmoving;
}

function level_detonator(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return PIECE_SPACE;

    return level.detonator[x][y];
}

function level_setdetonator(x, y, detonator)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.detonator[x][y] = detonator;
}

function level_detonatormoving(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return MOVE_NONE;

    return level.detonatormoving[x][y];
}

function level_setdetonatormoving(x, y, detonatormoving)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.detonatormoving[x][y] = detonatormoving;
}

function level_data(x, y)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return 0;

    return level.data[x][y];
}

function level_setdata(x, y, data)
{
    if(level == null || x < 0 || x >= level.width || y < 0 || y >= level.height)
        return;

    level.data[x][y] = data;
}

function level_rebevel_movers()
{
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        if(mover.piece == PIECE_WALL)
            level_setpiece(mover.x, mover.y, mover.piece);
    }

    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        x = mover.x;
        y = mover.y;
        if(mover.piece == PIECE_WALL || (isexplosion(mover.piece) && display_animation == 1))
        {
            for(i = -1; i < 2; i ++)
            {
                for(j = - 1; j < 2; j ++)
                {
                    bevel = display_bevelsquare(x + i, y + j);

                    if(bevel != (level_data(x + i, y + j) & BEVEL_ALL))
                        level_setdata(x + i, y + j, bevel | (level_data(x + i, y + j) & ~BEVEL_ALL));
                }
            }
        }
    }
}

function display_level()
{
    var p;

    screen.context.fillStyle = "#000000";
    screen.context.fillRect(0, 0, screen.width, screen.height);

    if(level == null)
        return;

    var startx = Math.floor(- graphics.offset_x / graphics.width);
    var endx = Math.ceil((screen.width - graphics.offset_x) / graphics.width);

    var starty = Math.floor(- graphics.offset_y / graphics.height);
    var endy = Math.ceil((screen.height - graphics.offset_y) / graphics.height);

    if(level.mode == MODE_XOR && options.xor_display)
    {
        endx = startx + 8;
        endy = starty + 8;
    }

    if(graphics.shadows.length > 0)
    {
        for(var y = starty; y < endy; y ++)
        {
            for(var x = startx; x < endx; x ++)
            {
                displayshadowed_piecebase(x, y);

                p = level_piece(x, y);
                if(p != PIECE_SPACE)
                     display_piece(p, x, y, MOVE_NONE);
            }
        }
    }
    else
    {
        for(var y = starty; y < endy; y ++)
        {
            for(var x = startx; x < endx; x ++)
            {
                display_piece(PIECE_SPACE, x, y, MOVE_NONE);
                display_piece(level_piece(x, y), x, y, MOVE_NONE);
            }
        }
    }

    screen.bar.context.fillStyle = "#000000";
    screen.bar.context.fillRect(0, 0, screen.bar.width, screen.bar.height * screen.bar.lines);

    if(screen.bar.lines == 1)
    {
        var str = level.title;
        var font_size = screen.bar.height;
        var ok = false;
        var text;
        
        while(!ok)
        {
            screen.bar.context.font = font_size + "px " + font_name;

            text = screen.bar.context.measureText(str);
            if(text.width < screen.bar.width || font_size == 1)
                ok = true;
            else
                font_size --;
        }
        screen.bar.title_position = (screen.bar.width - text.width) / 2;
        screen.bar.title_width = text.width;

        screen.bar.context.lineWidth = screen.bar.height / 16;
        screen.bar.context.strokeStyle= "#7f7f7f";
        screen.bar.context.strokeText(str, screen.bar.title_position, screen.bar.height - screen.bar.height / 8);

        screen.bar.context.fillStyle = "#ffffff";
        screen.bar.context.fillText(str, screen.bar.title_position, screen.bar.height - screen.bar.height / 8);
    }

    screen.bar.stars_width = 0;
    screen.bar.moves_width = 0;

    display_moves();
    display_stars();

    if(level.mode == MODE_XOR && options.xor_display)
        display_map();
}

function display_movers()
{
    var m, x, y, p, pm;
    var mover;

    if(graphics.shadows.length > 0)
    {
        displayshadowed_movers();
        return;
    }

    /* First, plot spaces for all moving pieces */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m]

        display_piece(PIECE_SPACE, mover.x, mover.y, MOVE_NONE);
    }

    /* Plot moving pieces */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        x = mover.x;
        y = mover.y;

        if(isexplosion(mover.piece))
        {
            /* Plot any piece destroyed by the explosion, or the bomb itself */
            p = level_previous(x, y);
            pm = level_previousmoving(x, y);
            if(p != PIECE_SPACE)
                display_piece(p, x, y, pm);

            /* Plot the detonator */
            p = level_detonator(x, y);
            pm = level_detonatormoving(x, y);
            if(p != PIECE_SPACE)
                display_piece(p, x, y, pm);
        }
        /* Spaces have already been covered */
        else if(mover.piece != PIECE_SPACE && mover.piece != PIECE_GONE)
        {
            if(display_animation < 1)
            {
                /* Pieces being collected, earth being eaten */
                p = level_previous(x, y);
                pm = level_previousmoving(x, y);
                if((p != PIECE_SPACE && !isexplosion(p) && pm == MOVE_NONE) || mover.piece == PIECE_TELEPORT)
                    display_piece(p, x, y, pm);
            }

            display_piece(mover.piece, x, y, mover.direction);
        }
    }

    /* At the peak of the explosion, rebevel any walls that have been
       destroyed. When undoing, rebevel any walls that have been recreated. */
    if(display_animation ==0 || display_animation == 1)
    {
        /* When undoing, we have to create the wall prior to rebevelling, as it
           wouldn't otherwise exist until after the end of the animation. */
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            if(mover.piece == PIECE_WALL)
                level_setpiece(mover.x, mover.y, mover.piece);
        }

        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            x = mover.x;
            y = mover.y;
            if(mover.piece == PIECE_WALL || (isexplosion(mover.piece) && display_animation == 1))
            {
                for(i = -1; i < 2; i ++)
                {
                    for(j = - 1; j < 2; j ++)
                    {
                        bevel = display_bevelsquare(x + i, y + j);

                        if(bevel != (level_data(x + i, y + j) & BEVEL_ALL))
                        {
                            level_setdata(x + i, y + j, bevel | (level_data(x + i, y + j) & ~BEVEL_ALL));

                            p = level_piece(x + i, y + j);
                            if(p == PIECE_WALL)
                            {
                                if(level.switched)
                                    display_piece(PIECE_DARKNESS, x + i, y + j, MOVE_NONE);
                                else
                                    display_piece(PIECE_WALL, x + i, y + j, MOVE_NONE);
                            }
                            else
                            {
                                if(level.switched)
                                    display_piece(PIECE_DARKNESS, x + i, y + j, MOVE_NONE);
                                else
                                    display_piece(PIECE_SPACE, x + i, y + j, MOVE_NONE);
                                /* Moving pieces will be replotted when they next move. */
                                if(p != PIECE_SPACE && level_moving(x + i, y + j) == MOVE_NONE)
                                    display_piece(p, x + i, y + j, MOVE_NONE);
                            }
                        }
                    }
                }
            }
        }
    }

    /* Plot explosions */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        x = mover.x;
        y = mover.y;

        /* Plot growing explosion */
        if(isexplosion(mover.piece))
            display_piece(mover.piece + PIECE_EXPLOSION_NEW_FIRST - PIECE_EXPLOSION_FIRST, x, y, MOVE_NONE);

        /* Plot dying explosion */
        p = level_previous(x, y);
        if(isexplosion(p) && display_animation < 1)
            display_piece(p, x, y, MOVE_NONE);
    }
}

function display_piece(p, x, y, d)
{
    var op;
    var sx, sy, sw, sh;
    var dw, dh;
    var xstart, xend, xpos, xsize;
    var bimage = [];
    var i;
    var bsizex, bsizey, boffset;

    var px = x * graphics.width + graphics.offset_x;
    var py = y * graphics.height + graphics.offset_y;

    if(p < PIECE_SPACE || p >= PIECE_MAX)
        return;

    if(level.switched && (p == PIECE_WALL || p == PIECE_SPACE))
        p = PIECE_DARKNESS;

    op = p;

    if(d != MOVE_NONE
            && p != PIECE_SPACE && !isexplosion(p)
            && p != PIECE_TELEPORT
        )
    {
        if(d == MOVE_LEFT)
            px = px + Math.floor((1 - display_animation) * graphics.width);
        if(d == MOVE_RIGHT)
            px = px - Math.floor((1 - display_animation) * graphics.width);
        if(d == MOVE_UP)
            py = py + Math.floor((1 - display_animation) * graphics.height);
        if(d == MOVE_DOWN)
            py = py - Math.floor((1 -display_animation) * graphics.height);
    }



    if(isexplosion(p))
        screen.context.globalAlpha = 1 - display_animation;
    else if(isnewexplosion(p))
    {
        p += PIECE_EXPLOSION_FIRST - PIECE_EXPLOSION_NEW_FIRST;
        screen.context.globalAlpha = display_animation;
    }
    else
        screen.context.globalAlpha = 1;

    if(graphics.image[p] == null)
        return;

    sx = 0;
    sy = 0;
    sw = graphics.width;
    sh = graphics.height;

    if(graphics.image[p].width > graphics.width)
    {
        xstart = 0;
        xend = graphics.image[p].width / graphics.width;
        xsize = 1;
        xpos = 0;

        if(graphics.image_flags[p] & GRAPHICS_BEVEL)
            xend -= 4;

        if(graphics.image_flags[p] & GRAPHICS_BEVEL16)
            xsize = 16;

        if(graphics.image_flags[p] & GRAPHICS_MOVER)
        {
            xsize = 5;

            if(d == MOVE_LEFT)
                xpos += 1;
            if(d == MOVE_UP)
                xpos += 2;
            if(d == MOVE_RIGHT)
                xpos += 3;
            if(d == MOVE_DOWN)
                xpos += 4;
        }

        if(graphics.image_flags[p] & GRAPHICS_LEVEL && level.level > 0)
        {
            xsize = 15;
            xpos = level.level - 1;
        }

        /* If we're plotting the players */
        if(p == PIECE_PLAYER_ONE || p == PIECE_PLAYER_TWO)
        {

            /* and there's an image for the swapped player */
            if(xend > xstart + xsize)
            {
                /* then use it if the player is swapped out */
                if(level.player != (p & 1) && level.player != 2)
                    xpos += xsize;
            }
        }

        if(graphics.image_flags[p] & GRAPHICS_BEVEL16)
        {
            i = 15;
                b = level_data(x, y) & BEVEL_ALL;

            if(b & BEVEL_U)
                i -= 1;
            if(b & BEVEL_R)
                i -= 2;
            if(b & BEVEL_D)
                i -= 4;
            if(b & BEVEL_L)
                i -= 8;

            xpos += i;
        }

        if(graphics.image_flags[p] & GRAPHICS_ANIMATE)
        {
            b = (xend - xstart) / xsize;

            if(!isexplosion(p))
                b = b * display_animation;
            else
                  b = b * ((display_animation + (isnewexplosion(op) ? 0 : 1)) * 0.5);

            xpos += b * xsize;
        }
        else if(graphics.image_flags[p] & GRAPHICS_RANDOM)
        {
            b = (xend - xstart) / xsize;

            if(p == PIECE_SPACE)
                b = (level_data(x, y) & 0xff) % b;
            else
                b = ((level_data(x, y) & 0xff00) / 0x100) % b;

            xpos += b * xsize;
        }
        else if(graphics.image_flags[p] & GRAPHICS_TILE)
        {
            b = x % ((xend - xstart) / xsize);
            if(b < 0)
                b += (xend - xstart) / xsize;
            xpos += b * xsize;

            b = y % (graphics.image[p].height / graphics.height);
            if(b < 0)
                b += (graphics.image[p].height / graphics.height);
            sy = b * graphics.height;
        }

        sx = (xstart + xpos) * graphics.width;
    }

    /* Plot piece */
    screen.context.drawImage(graphics.image[p], sx, sy, graphics.width, graphics.height, px, py, graphics.width, graphics.height);

    /* Plot bevelling */
    if(graphics.image_flags[p] & GRAPHICS_BEVEL)
    {
        b = level_data(x, y) & BEVEL_ALL;

        if(b != 0)
        {
            bsizex = graphics.width / 2;
            bsizey = graphics.height / 2;
            boffset = (xend - 1) * graphics.width;

            for(i = 0; i < 4; i ++)
                bimage[i] = 0;

            if(b & BEVEL_L)
            {
                if(b & BEVEL_U)
                    bimage[0] = 3 * graphics.width;
                else
                    bimage[0] = 1 * graphics.width;

                if(b & BEVEL_D)
                    bimage[2] = 3 * graphics.width;
                else
                    bimage[2] = 1 * graphics.width;
            }
            else
            {
                if(b & BEVEL_U)
                    bimage[0] = 2 * graphics.width;
                if(b & BEVEL_D)
                    bimage[2] = 2 * graphics.width;
            }

            if(b & BEVEL_R)
            {
                if(b & BEVEL_U)
                    bimage[1] = 3 * graphics.width;
                else
                    bimage[1] = 1 * graphics.width;

                if(b & BEVEL_D)
                    bimage[3] = 3 * graphics.width;
                else
                    bimage[3] = 1 * graphics.width;
            }
            else
            {
                if(b & BEVEL_U)
                    bimage[1] = 2 * graphics.width;
                if(b & BEVEL_D)
                    bimage[3] = 2 * graphics.width;
            }

            if(b & BEVEL_TL)
                bimage[0] = 4 * graphics.width;
            if(b & BEVEL_TR)
                bimage[1] = 4 * graphics.width;
            if(b & BEVEL_BL)
                bimage[2] = 4 * graphics.width;
            if(b & BEVEL_BR)
                bimage[3] = 4 * graphics.width;

            for(i = 0; i < 4; i ++)
            {
                if(bimage[i] != 0)
                {
                    sx = boffset + bimage[i] + ((i & 1) ? bsizex : 0);
                    sy = (i & 2) ? bsizey : 0;
                    sw = bsizex;
                    sh = bsizey;

                    screen.context.drawImage(graphics.image[p], sx, sy, sw, sh, px + ((i & 1) ? bsizex : 0), py + ((i & 2) ? bsizey : 0), bsizex, bsizey);
                }
            }
        }
    }

    screen.context.globalAlpha = 1;
}

function displayshadowed_piecebase(x, y)
{
    var p;
    var px, py;
    var z;
    var ok;
    var b, bp;
    var xend;

    var sx, sy, sw, sh;
    var dx, dy, dw, dh;
    var bsx, bsy, bsw, bsh;
    var bdx, bdy, bdw, bdh;
    var alpha;

    p = level_piece(x, y);

    if(level_moving(x, y) != MOVE_NONE)
    {
        if(display_animation >= 1)
            p = PIECE_SPACE;
        else
            p = level_previous(x, y);
    }

    if(level.switched && (p == PIECE_WALL || p == PIECE_SPACE))
        p = PIECE_DARKNESS;

    if(level.switched)
        bp = PIECE_DARKNESS;
    else
        bp = PIECE_SPACE;

    image = graphics.image[bp];

    px = x * graphics.width + graphics.offset_x;
    py = y * graphics.height + graphics.offset_y;


    sx = 0;
    sy = 0;
    sw = graphics.width;
    sh = graphics.height;

    dx = px;
    dy = py;
    dw = graphics.width;
    dh = graphics.height;

    /* Is the base tiled? */
    if(graphics.image_flags[bp] & GRAPHICS_TILE)
    {
        xend = image.width / graphics.width;
        if(graphics.image_flags[bp] & GRAPHICS_BEVEL)
            xend -= 4;
        sx += graphics.width * (x % xend);
        sy += graphics.height * (y % (image.height / graphics.height));
    }

    /* Plot the base */
    screen.context.globalAlpha = 1;
    screen.context.drawImage(graphics.image[bp], sx, sy, sw, sh, dx, dy, dw, dh);

    /* Do we need to order the shadows prior to plotting? */
    if(graphics.flags & GRAPHICS_ZORDER)
    {
        graphics.shadows_sorted = [];

        for(s = 0; s < graphics.shadows.length; s ++)
        {
            shadow = graphics.shadows[s];

            /* Determine which piece to consider the shadow of */
            p = level_piece(x - shadow.x, y - shadow.y);
            if(level_moving(x - shadow.x, y - shadow.y) != MOVE_NONE)
            {
                if(display_animation >= 1)
                    p = PIECE_SPACE;
                else
                {
                    if(level_previousmoving(x - shadow.x, y - shadow.y) == MOVE_NONE)
                        p = level_previous(x - shadow.x, y - shadow.y);
                    else
                        p = PIECE_SPACE;
                }
            }

            if(p == PIECE_WALL && level.switched)
                p = PIECE_DARKNESS;

            /* Does it have a shadow? */
            if(graphics.shadow_image[p] != null && (graphics.shadow_flags[p] & shadow.flag))
            {
                z = graphics.shadow_z[p];
                shadow.z = graphics.shadow_z[p];
                shadow.p = p;

                graphics.shadows_sorted.push(shadow);
            }
        }

        graphics.shadows_sorted.sort(function(a, b) { return parseInt(a.z) - parseInt(b.z); });

    }
    else
    {
        /* Use the order specified in the graphics file */
        graphics.shadows_sorted = graphics.shadows;
    }

    /* Plot shadows in order */
    for(var s = 0; s < graphics.shadows_sorted.length; s ++)
    {
        shadow = graphics.shadows_sorted[s];

        /* Determine which piece to consider the shadow of */
        p = level_piece(x - shadow.x, y - shadow.y);
        if(level_moving(x - shadow.x, y - shadow.y) != MOVE_NONE)
        {
            if(display_animation >= 1)
                p = PIECE_SPACE;
            else
            {
                if(level_previousmoving(x - shadow.x, y - shadow.y) == MOVE_NONE)
                    p = level_previous(x - shadow.x, y - shadow.y);
                else
                    p = PIECE_SPACE;
            }
        }
        /* Does it have a shadow? */
        if(graphics.shadow_image[p] != null && (graphics.shadow_flags[p] & shadow.flag))
        {
            image = graphics.shadow_image[p];

            if(isexplosion(p))
                screen.context.globalAlpha = 1 - display_animation;
            else if(isnewexplosion(p))
            {
                p += PIECE_EXPLOSION_FIRST - PIECE_EXPLOSION_NEW_FIRST;
                screen.context.globalAlpha = display_animation;
            }
            else
                screen.context.globalAlpha = 1;

            sx = graphics.shadow_start_x[p][shadow.shadow];
            sy = graphics.shadow_start_y[p][shadow.shadow];
            sw = graphics.shadow_width[p][shadow.shadow];
            sh = graphics.shadow_height[p][shadow.shadow];

            dx = px + graphics.shadow_offset_x[p][shadow.shadow];
            dy = py + graphics.shadow_offset_y[p][shadow.shadow];
            dw = graphics.shadow_width[p][shadow.shadow];
            dh = graphics.shadow_height[p][shadow.shadow];

            /* Are there multiple images? */
            if(image.width > graphics.shadow_width[p][9])
            {
                /* Choose swapped player if necessary */
                if(p == PIECE_PLAYER_ONE || p == PIECE_PLAYER_TWO)
                {
                    if(level.player != (p & 1) && level.player != 2)
                        sx += graphics.shadow_width[p][9];
                }
            }

            /* Plot shadow */
            screen.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

            /* Bevel shadow */
            if(graphics.image_flags[p] & GRAPHICS_BEVEL_SHADOW)
            {
                b = level_data(x - shadow.x, y - shadow.y) & BEVEL_ALL;
                /* Top left quadrant */
                if(b & (BEVEL_L | BEVEL_U | BEVEL_TL))
                {
                    bsx = 0;
                    bsy = 0;
                    bsw = graphics.shadow_width[p][9] / 2;
                    bsh = graphics.shadow_height[p][9] / 2;
                    bdx = dx;
                    bdy = dy;

                    ok = 1;
                    if(bsx < sx)
                    {
                        if(bsw > (sx - bsx))
                        {
                            bsw -= (sx - bsx);
                            bdx -= bsx;
                            bsx = sx;
                        }
                        else
                            ok = 0;
                    }
                    if(bsy < sy)
                    {
                        if(bsh > (sy - bsy))
                        {
                            bsh -= (sy - bsy);
                            bdy -= bsy;
                            bsy = sy;
                        }
                        else
                            ok = 0;
                    }
                    if(bdx + bsw > dx + dw)
                    {
                        if(bsw > ((bdx + bsw) - (dx + dw)))
                            bsw -= ((bdx + bsw) - (dx + dw));
                        else
                            ok = 0;
                    }
                    if(bdy + bsh > dy + dh)
                    {
                        if(bsh > ((bdy + bsh) - (dy + dh)))
                            bsh -= ((bdy + bsh) - (dy + dh));
                        else
                            ok = 0;
                    }
                    if(b & BEVEL_TL)
                        bsx += graphics.shadow_width[p][9] * 4;
                    else
                    {
                        if(b & BEVEL_U)
                            bsx += graphics.shadow_width[p][9] * 2;
                        if(b & BEVEL_L)
                            bsx += graphics.shadow_width[p][9];
                    }

                    if(ok)
                        screen.context.drawImage(image, bsx, bsy, bsw, bsh, bdx, bdy, bdw, bdh);
                }

                /* Top right quadrant */
                if(b & (BEVEL_R | BEVEL_U | BEVEL_TR))
                {
                    bsx = graphics.shadow_width[p][9] / 2;
                    bsy = 0;
                    bsw = graphics.shadow_width[p][9] / 2;
                    bsh = graphics.shadow_height[p][9] / 2;
                    bdx = dx + graphics.width / 2;
                    bdy = dy;

                    ok = 1;
                    if(bsx < sx)
                    {
                        if(bsw > (sx - bsx))
                        {
                            bsw -= (sx - bsx);
                            bdx -= bsx;
                            bsx = sx;
                        }
                        else
                            ok = 0;
                    }
                    if(bsy < sy)
                    {
                        if(bsh > (sy - bsy))
                        {
                            bsh -= (sy - bsy);
                            bdy -= bsy;
                            bsy = sy;
                        }
                        else
                            ok = 0;
                    }
                    if(bdx + bsw > dx + dw)
                    {
                        if(bsw > ((bdx + bsw) - (dx + dw)))
                            bsw -= ((bdx + bsw) - (dx + dw));
                        else
                            ok = 0;
                    }
                    if(bdy + bsh > dy + dh)
                    {
                        if(bsh > ((bdy + bsh) - (dy + dh)))
                            bsh -= ((bdy + bsh) - (dy + dh));
                        else
                            ok = 0;
                    }
                    if(b & BEVEL_TR)
                        bsx += graphics.shadow_width[p][9] * 4;
                    else
                    {
                        if(b & BEVEL_U)
                            bsx += graphics.shadow_width[p][9] * 2;
                        if(b & BEVEL_R)
                            bsx += graphics.shadow_width[p][9];
                    }
                    if(ok)
                        screen.context.drawImage(image, bsx, bsy, bsw, bsh, bdx, bdy, bdw, bdh);
                }

                /* Bottom left quadrant */
                if(b & (BEVEL_L | BEVEL_D | BEVEL_BL))
                {
                    bsx = 0;
                    bsy = graphics.shadow_height[p][9] / 2;;
                    bsw = graphics.shadow_width[p][9] / 2;
                    bsh = graphics.shadow_height[p][9] / 2;
                    bdx = dx;
                    bdy = dy + graphics.height / 2;

                    ok = 1;
                    if(bsx < sx)
                    {
                        if(bsw > (sx - bsx))
                        {
                            bsw -= (sx - bsx);
                            bdx -= bsx;
                            bsx = sx;
                        }
                        else
                            ok = 0;
                    }
                    if(bsy < sy)
                    {
                        if(bsh > (sy - bsy))
                        {
                            bsh -= (sy - bsy);
                            bdy -= bsy;
                            bsy = sy;
                        }
                        else
                            ok = 0;
                    }
                    if(bdx + bsw > dx + dw)
                    {
                        if(bsw > ((bdx + bsw) - (dx + dw)))
                            bsw -= ((bdx + bsw) - (dx + dw));
                        else
                            ok = 0;
                    }
                    if(bdy + bsh > dy + dh)
                    {
                        if(bsh > ((bdy + bsh) - (dy + dh)))
                            bsh -= ((bdy + bsh) - (dy + dh));
                        else
                            ok = 0;
                    }
                    if(b & BEVEL_BL)
                        bsx += graphics.shadow_width[p][9] * 4;
                    else
                    {
                        if(b & BEVEL_D)
                            bsx += graphics.shadow_width[p][9] * 2;
                        if(b & BEVEL_L)
                            bsx += graphics.shadow_width[p][9];
                    }
                    if(ok)
                        screen.context.drawImage(image, bsx, bsy, bsw, bsh, bdx, bdy, bdw, bdh);
                }

                /* Bottom right quadrant */
                if(b & (BEVEL_R | BEVEL_D | BEVEL_BR))
                {
                    bsx = graphics.shadow_width[p][9] / 2;
                    bsy = graphics.shadow_height[p][9] / 2;
                    bsw = graphics.shadow_width[p][9] / 2;
                    bsh = graphics.shadow_height[p][9] / 2;
                    bdx = dx + graphics.width / 2;
                    bdy = dy + graphics.height / 2;

                    ok = 1;
                    if(bsx < sx)
                    {
                        if(bsw > (sx - bsx))
                        {
                            bsw -= (sx - bsx);
                            bdx -= bsx;
                            bsx = sx;
                        }
                        else
                            ok = 0;
                    }
                    if(bsy < sy)
                    {
                        if(bsh > (sy - bsy))
                        {
                            bsh -= (sy - bsy);
                            bdy -= bsy;
                            bsy = sy;
                        }
                        else
                            ok = 0;
                    }
                    if(bdx + bsw > dx + dw)
                    {
                        if(bsw > ((bdx + bsw) - (dx + dw)))
                            bsw -= ((bdx + bsw) - (dx + dw));
                        else
                            ok = 0;
                    }
                    if(bdy + bsh > dy + dh)
                    {
                        if(bsh > ((bdy + bsh) - (dy + dh)))
                            bsh -= ((bdy + bsh) - (dy + dh));
                        else
                            ok = 0;
                    }
                    if(b & BEVEL_BR)
                        bsx += graphics.shadow_width[p][9] * 4;
                    else
                    {
                        if(b & BEVEL_D)
                            bsx += graphics.shadow_width[p][9] * 2;
                        if(b & BEVEL_R)
                            bsx += graphics.shadow_width[p][9];
                    }
                    if(ok)
                        screen.context.drawImage(image, bsx, bsy, bsw, bsh, bdx, bdy, bdw, bdh);
                }
            }
        }
    }

    screen.context.globalAlpha = 1;
}

function displayshadowed_movers()
{
    var x, y, p, pm;
    var i, j;
    var d;
    var bevel;
    var bevelold;
    var sx, sy, sw, sh;
    var dx, dy, dw, dh;
    var mover;

    p = PIECE_SPACE;

    /* Stage one: plot base for pieces that need rebevelling */
    if(display_animation == 0 || display_animation == 1)
    {
        /* When undoing, we have to create the wall prior to rebevelling, as it
           wouldn't otherwise exist until after the end of the animation. */
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            if(mover.piece == PIECE_WALL)
                level_setpiece(mover.x, mover.y, mover.piece);
        }

        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            x = mover.x;
            y = mover.y;
            if(mover.piece == PIECE_WALL ||
                (isexplosion(mover.piece) && display_animation == 1))
            {
                for(s = 0; s < graphics.shadows.length; s ++)
                {
                    shadow = graphics.shadows[s];
                        bevel = display_bevelsquare(x + shadow.x, y + shadow.y);
                        bevelold = (level_data(x + shadow.x, y + shadow.y) & BEVEL_ALL);
                        /* Because this happens only once per move cycle, we
                           are lazy and don't bother to count whether this base
                           has already been plotted */
                        if(bevel != bevelold);
                            displayshadowed_piecebase(mover.x + shadow.x, mover.y + shadow.y);
                }
            }
        }
    }

    /* Stage two: plot shadows for stationary squares affected by movers */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        if(mover.piece != PIECE_GONE)
        {
            /* This is overkill, but it's easier just to plot everything that
               could be affected than to calculate what is actually affected.
               */

            for(s = 0; s < graphics.shadows.length; s ++)
            {
                shadow = graphics.shadows[s];
                if(displayshadowed_count(mover.x + shadow.x, mover.y + shadow.y, 1) == 0)
                    displayshadowed_piecebase(mover.x + shadow.x, mover.y + shadow.y);
            }
            if(displayshadowed_count(mover.x, mover.y, 1) == 0)
                displayshadowed_piecebase(mover.x, mover.y);
        }
        
    }
    /* then reset the counts */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        if(mover.piece != PIECE_GONE)
        {
            for(s = 0; s < graphics.shadows.length; s ++)
            {
                shadow = graphics.shadows[s];

                displayshadowed_count(mover.x + shadow.x, mover.y + shadow.y, -1);
            }
            displayshadowed_count(mover.x, mover.y, -1);
        }
    }

    /* Stage three: plot shadows for movers */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        d = mover.direction;
        x = mover.x;
        y = mover.y;

        if(isexplosion(mover.piece))
        {
            /* If the previous piece, that is, the piece destroyed in the
               explosion, is stationary, we don't need to plot a shadow for it,
               as that is handled in stage one. If it is moving, however, it
               needs a moving shadow, which we do have to plot here. */
            p = level_previous(x, y);
            pm = level_previousmoving(x, y);
            if(p != PIECE_SPACE && pm != MOVE_NONE)
                displayshadowed_pieceshadow(p, x, y, pm);

            /* Plot shadow for the detonator */
            p = level_detonator(x, y);
            pm = level_detonatormoving(x, y);
            if(p != PIECE_SPACE)
                displayshadowed_pieceshadow(p, x, y, pm);

        }
        /* Spaces and walls were handled in stage one */
        else if(mover.piece != PIECE_SPACE && mover.piece != PIECE_WALL && mover.piece != PIECE_GONE)
        {
            /* We don't need to plot the shadow for the previous piece
               as that is handled in stage one */

            /* Plot shadow for mover */
            if(mover.piece == PIECE_TELEPORT)
                d = MOVE_NONE;

            displayshadowed_pieceshadow(mover.piece, mover.x, mover.y, d);
        }
    }

    /* Stage four: plot shadows for explosions */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        x = mover.x;
        y = mover.y;
        /* Plot growing explosion */
        if(isexplosion(mover.piece))
            displayshadowed_pieceshadow(mover.piece + PIECE_EXPLOSION_NEW_FIRST - PIECE_EXPLOSION_FIRST, x, y, MOVE_NONE);

        /* Plot dying explosion */
        p = level_previous(x, y);
        if(isexplosion(p) && display_animation < 1)
            displayshadowed_pieceshadow(p, x, y, MOVE_NONE);
    }

    /* Stage five: plot pieces for stationary squares affected by movers.
       We need to be careful not to plot the same piece twice, so we keep
       count and only plot on the first occurrence. */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        for(s = 0; s < graphics.shadows.length; s ++)
        {
            shadow = graphics.shadows[s];
            if(displayshadowed_count(mover.x + shadow.x, mover.y + shadow.y, 1) == 0)
            {
                p = level_piece(mover.x + shadow.x, mover.y + shadow.y);
                pm = level_moving(mover.x + shadow.x, mover.y + shadow.y);
                if(p != PIECE_SPACE && p != PIECE_GONE && pm == MOVE_NONE)
                    display_piece(p, mover.x + shadow.x, mover.y + shadow.y, MOVE_NONE);
            }
        }
    }
    /* then reset the counts */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        for(s = 0; s < graphics.shadows.length; s ++)
        {
            shadow = graphics.shadows[s];
            displayshadowed_count(mover.x + shadow.x, mover.y + shadow.y, -1);
        }
    }

    /* Stage six: plot pieces for movers */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        d = mover.direction;
        x = mover.x;
        y = mover.y;

        if(isexplosion(mover.piece))
        {
            /* Plot any piece destroyed by the explosion, or the bomb itself */
            p = level_previous(x, y);
            pm = level_previousmoving(x, y);
            if(p != PIECE_SPACE)
                display_piece(p, x, y, pm);

            /* Plot the detonator */
            p = level_detonator(x, y);
            pm = level_detonatormoving(x, y);
            if(p != PIECE_SPACE)
                display_piece(p, x, y, pm);

        }
        /* Spaces were handled in stage one */
        else if(mover.piece != PIECE_SPACE && mover.piece != PIECE_GONE)
        {
            if(display_animation < 1)
            {   
                /* Pieces being collected, earth being eaten */
                p = level_previous(x, y);
                pm = level_previousmoving(x, y);
                if((p != PIECE_SPACE && !isexplosion(p) && pm == MOVE_NONE) || mover.piece == PIECE_TELEPORT)
                    display_piece(p, x, y, pm);
            }

            /* Plot the piece itself */
            if(mover.piece == PIECE_TELEPORT)
                d = MOVE_NONE;

           display_piece(mover.piece, mover.x, mover.y, d);
        }
        pmover = mover.next;
    }

    /* Stage seven: plot pieces that need rebevelling */
    if(display_animation == 0 || display_animation == 1)
    {
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            x = mover.x;
            y = mover.y;
            if(mover.piece == PIECE_WALL ||
                (isexplosion(mover.piece) && display_animation == 1))
            {
                for(i = -1; i < 2; i ++)
                {
                    for(j = - 1; j < 2; j ++)
                    {
                        bevel = display_bevelsquare(x + i, y + j);
                        bevelold = (level_data(x + i, y + j) & BEVEL_ALL);
                        if(bevel != bevelold);
                        {
                            /* Here we are not lazy, to avoid issues with
                               transparent graphics being plotted twice */
                            if(displayshadowed_count(mover.x + i, mover.y + j, 1) == 0)
                            {
                                level_setdata(x + i, y + j, bevel | (level_data(x + i, y + j) & ~BEVEL_ALL));
                                p = level_piece(x + i, y + j);
                                if(p == PIECE_WALL)
                                    display_piece(p, mover.x + i, mover.y + j, MOVE_NONE);
                                level_setdata(x + i, y + j, bevelold | (level_data(x + i, y + j) & ~BEVEL_ALL));
                            }
                        }
                    }
                }
            }
        }
        /* and reset counts */
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            x = mover.x;
            y = mover.y;
            if(mover.piece == PIECE_WALL ||
                (isexplosion(mover.piece) && display_animation == 1))
            {
                for(i = -1; i < 2; i ++)
                {
                    for(j = - 1; j < 2; j ++)
                    {
                        bevel = display_bevelsquare(x + i, y + j);
                        bevelold = (level_data(x + i, y + j) & BEVEL_ALL);
                        if(bevel != bevelold);
                            displayshadowed_count(mover.x + i, mover.y + j, -1);
                    }
                }
            }
        }
    }


    /* Stage eight: plot pieces for explosions */
    for(m = 0; m < level.movers.length; m ++)
    {
        mover = level.movers[m];

        x = mover.x;
        y = mover.y;
        /* Plot growing explosion */
        if(isexplosion(mover.piece))
            display_piece(mover.piece + PIECE_EXPLOSION_NEW_FIRST - PIECE_EXPLOSION_FIRST, x, y, MOVE_NONE);

        /* Plot dying explosion */
        p = level_previous(x, y);
        if(isexplosion(p) && display_animation < 1)
            display_piece(p, x, y, MOVE_NONE);
    }

    /* Stage nine: rebevel pieces that need rebevelling */
    if(display_animation == 0 || display_animation == 1)
    {   
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            x = mover.x;
            y = mover.y;
            if(mover.piece == PIECE_WALL || (isexplosion(mover.piece) && display_animation == 1))
            {   
                for(i = -1; i < 2; i ++)
                {   
                    for(j = - 1; j < 2; j ++)
                    {   
                        bevel = display_bevelsquare(x + i, y + j);
                        bevelold = (level_data(x + i, y + j) & BEVEL_ALL);
                        if(bevel != bevelold);
                        {   
                            /* Again, we are lazy and do not keep count of
                               whether this square has already been rebevelled. */
                            level_setdata(x + i, y + j, bevel | (level_data(x + i, y + j) & ~BEVEL_ALL));
                        }
                    }
                }
            }
        }
    }
}

function displayshadowed_count(x, y, delta)
{
    var d = level_data(x, y);
    level_setdata(x, y, d + (delta * SHADOW_BASE));

    return d & (0x7f * SHADOW_BASE);
}

function displayshadowed_pieceshadow(p, x, y, d)
{
    var px, py;
    var image;
    var sx, sy, sw, sh;
    var dx, dy, dw, dh;

    if(isexplosion(p))
        screen.context.globalAlpha = 1 - display_animation;
    else if(isnewexplosion(p))
    {
        p += PIECE_EXPLOSION_FIRST - PIECE_EXPLOSION_NEW_FIRST;
        screen.context.globalAlpha = display_animation;
    }
    else
        screen.context.globalAlpha = 1;

    image = graphics.shadow_image[p];
    if(image == null)
        return;

    px = x * graphics.width + graphics.offset_x;
    py = y * graphics.height + graphics.offset_y;

        if(d == MOVE_LEFT)
            px = px + Math.floor((1 - display_animation) * graphics.width);
        if(d == MOVE_RIGHT)
            px = px - Math.floor((1 - display_animation) * graphics.width);
        if(d == MOVE_UP)
            py = py + Math.floor((1 - display_animation) * graphics.height);
        if(d == MOVE_DOWN)
            py = py - Math.floor((1 -display_animation) * graphics.height);


    sx = 0;
    sy = 0;
    sw = graphics.shadow_width[p][9];
    sh = graphics.shadow_height[p][9];

    dx = px + graphics.shadow_offset_x[p][9];
    dy = py + graphics.shadow_offset_y[p][9];
    dw = sw;
    dh = sh;

    if(image.width > graphics.shadow_width[p][9])
    {
        if(p == PIECE_PLAYER_ONE || p == PIECE_PLAYER_TWO)
        {
            if(level.player != (p & 1))
                sx = graphics.shadow_width[p][9];
        }
    }

    /* Plot piece */
    screen.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

    screen.context.globalAlpha = 1;
}

function display_start_update()
{
    graphics.time_start = Date.now();

    display_animation = 0;
    display_movers();

    window.requestAnimationFrame(display_update);
}

function display_update()
{
    var t = Date.now();

    /* Calculate what the delay should be, defaulting to the Move Speed. */
    var delay = options.move_delay;

    if(level_replay != null)
        delay = options.replay_delay;
    else
    {
        for(m = 0; m < level.movers.length; m ++)
        {
            mover = level.movers[m];

            /* Use the Player Speed if the player is still moving */
            if(mover.piece == PIECE_PLAYER_ONE || mover.piece  == PIECE_PLAYER_TWO)
                delay = options.player_delay;
            /* unless there's a piece following in their trail */
            else if(mover.piece != PIECE_SPACE && mover.fast == 1)
                delay = options.move_delay;
        }

        /* If we're undoing, use the Undo Speed */
        if(level.flags & LEVELFLAG_UNDO)
            delay = options.undo_delay;
    }

    /* If SHIFT is pressed, speed things up. */
    if(graphics.shift)
        delay = delay / 10;
    /* If CTRL is pressed, slow things down. */
    if(graphics.ctrl)
        delay = delay * 4;

    /* If the delay has changed, preserve our position in the animation */
    if(delay != options.previous_delay)
    {
        if(options.previous_delay != 0)
            graphics.time_start = t - (((t - graphics.time_start) * delay) / options.previous_delay);
        options.previous_delay = delay;
    }

    if(t < graphics.time_start + delay)
        display_animation = (t - graphics.time_start) / delay;
    else
        display_animation = 1;

    if(level.flags & LEVELFLAG_SWITCH)
    {
        display_level();
        level.flags &= ~LEVELFLAG_SWITCH;
    }

    display_movers();

    if(display_animation != 1)
        window.requestAnimationFrame(display_update);
    else
    {
        if(level.flags & LEVELFLAG_STARS || level.flags & LEVELFLAG_EXIT)
        {
            display_stars();
            level.flags &= ~LEVELFLAG_STARS;
        }

        if(level.flags & LEVELFLAG_MAP)
        {
            display_map();
            level.flags &= ~LEVELFLAG_MAP;
        }

        if(level.flags & LEVELFLAG_MOVES)
        {
            display_moves();
            level.flags &= ~LEVELFLAG_MOVES;
        }

        if(level.flags & LEVELFLAG_EXIT)
        {
            level.flags |= LEVELFLAG_SOLVED;
        }

        if(!(level.flags & LEVELFLAG_UNDO))
        {
            level_evolve();
            level_storemovers();

            if(display_focus())
                display_level();

            if(level.movers.length > 0)
                display_start_update();
            else
            {
                if(level_replay != null)
                    consider_replay_move();
                else
                    consider_mouse_move();
            }
        }
        else
        {
            if(level_undo())
            {
                level.flags |= LEVELFLAG_UNDO;
            }
            else
                level.flags &= ~LEVELFLAG_UNDO;

            if(level_replay != null)
                consider_replay_move();
            else
                consider_mouse_move();

            if(display_focus())
                display_level();

            display_start_update();

            if(level_replay != null)
                consider_replay_move();
        }

    }
}

function display_bevelsquare(x, y)
{
    var bevel = 0;

    bevel = 0;

    if(level_piece(x, y) == PIECE_WALL)
    {
        if(level_piece(x - 1, y) != PIECE_WALL)
            bevel |= BEVEL_L;
        if(level_piece(x + 1, y) != PIECE_WALL)
            bevel |= BEVEL_R;
        if(level_piece(x, y - 1) != PIECE_WALL)
            bevel |= BEVEL_U;
        if(level_piece(x, y + 1) != PIECE_WALL)
            bevel |= BEVEL_D;

        if(((bevel & (BEVEL_L | BEVEL_U)) == 0) && level_piece(x - 1, y - 1) != PIECE_WALL)
            bevel |= BEVEL_TL;
        if(((bevel & (BEVEL_R | BEVEL_U)) == 0) && level_piece(x + 1, y - 1) != PIECE_WALL)
            bevel |= BEVEL_TR;
        if(((bevel & (BEVEL_L | BEVEL_D)) == 0) && level_piece(x - 1, y + 1) != PIECE_WALL)
            bevel |= BEVEL_BL;
        if(((bevel & (BEVEL_R | BEVEL_D)) == 0) && level_piece(x + 1, y + 1) != PIECE_WALL)
            bevel |= BEVEL_BR;
    }
    else
    {
        if(level_piece(x - 1, y) == PIECE_WALL)
            bevel |= BEVEL_L;
        if(level_piece(x + 1, y) == PIECE_WALL)
            bevel |= BEVEL_R;
        if(level_piece(x, y - 1) == PIECE_WALL)
            bevel |= BEVEL_U;
        if(level_piece(x, y + 1) == PIECE_WALL)
            bevel |= BEVEL_D;

        if(((bevel & (BEVEL_L | BEVEL_U)) == 0) && level_piece(x - 1, y - 1) == PIECE_WALL)
            bevel |= BEVEL_TL;
        if(((bevel & (BEVEL_R | BEVEL_U)) == 0) && level_piece(x + 1, y - 1) == PIECE_WALL)
            bevel |= BEVEL_TR;
        if(((bevel & (BEVEL_L | BEVEL_D)) == 0) && level_piece(x - 1, y + 1) == PIECE_WALL)
            bevel |= BEVEL_BL;
        if(((bevel & (BEVEL_R | BEVEL_D)) == 0) && level_piece(x + 1, y + 1) == PIECE_WALL)
            bevel |= BEVEL_BR;
    }

    return bevel;
}

function display_bevellevel()
{
    var bevel;
    var x, y;

    for(x = 0; x < level.width; x ++)
    {
        for(y = 0; y < level.height; y ++)
        {
            bevel = level_data(x, y) & ~BEVEL_ALL;
            bevel = bevel | display_bevelsquare(x, y);
            level_setdata(x, y, bevel);
        }
    }
}

function display_moves()
{
    var str;
    var line_offset;
    var x;

    if(screen.bar.lines == 1)
        line_offset = 0;
    else
        line_offset = 1 * screen.bar.height;

    if(level_replay != null)
    {
        if(level_replay.flags & LEVELFLAG_PAUSED)
            str = "\u25a0";
        else if(level_replay.flags & LEVELFLAG_UNDO)
            str = "\u25c2";
        else
            str = "\u25b8";

        str += " "+level.moves.length + "/" + level_replay.moves.length;
    }
    else if(level.flags & LEVELFLAG_FAILED)
        str = "failed";
    else if(level.redoable_moves.length != 0)
        str = level.moves.length + "/" + (level.moves.length + level.redoable_moves.length);
    else
        str = level.moves.length;

    str = " " + str + " ";

    screen.bar.context.font = screen.bar.height + "px " + font_name;

    var text = screen.bar.context.measureText(str);
    if(screen.bar.move_width < text.width)
        screen.bar.move_width = text.width;

    if(screen.bar.lines == 1)
        x = screen.bar.width - graphics.small_width - screen.bar.move_width;
    else
        x = 0;

    screen.bar.context.fillStyle = "#000000";
    screen.bar.context.fillRect(x, line_offset, screen.bar.move_width + graphics.small_width, screen.bar.height);

    screen.bar.move_width = text.width;

    if(screen.bar.lines == 1)
        x = screen.bar.width - graphics.small_width - text.width;
    else
        x = graphics.small_width;

    screen.bar.context.lineWidth = screen.bar.height / 16;
    screen.bar.context.strokeStyle= "#0080ff";
    screen.bar.context.strokeText(str, x, line_offset + screen.bar.height - screen.bar.height / 8);

    screen.bar.context.fillStyle = "#66b3ff";
    screen.bar.context.fillText(str, x, line_offset + screen.bar.height - screen.bar.height / 8);

    var sx = 0;
    /* If there is a second small image, use it for a dead player */
    if(!level.alive[level.player] && graphics.small_image[PIECE_PLAYER_ONE + level.player].width > graphics.small_width)
        sx = graphics.small_width;
    if(graphics.image_flags[PIECE_PLAYER_ONE + level.player] & GRAPHICS_LEVEL && level.level > 0)
        sx = graphics.small_width * (level.level - 1);

    if(screen.bar.lines == 1)
        x = screen.bar.width - graphics.small_width;
    else
        x = 0;

    if(graphics.small_image[PIECE_PLAYER_ONE + level.player] != null)
        screen.bar.context.drawImage(graphics.small_image[PIECE_PLAYER_ONE + level.player], sx, 0, graphics.small_width, graphics.small_height, x, line_offset + (screen.bar.height / 2) - (graphics.small_height / 2), graphics.small_width, graphics.small_height);

}

function display_stars()
{
    var str;
    var line_offset;

    if(screen.bar.lines == 1)
        line_offset = 0;
    else
        line_offset = 0 * screen.bar.height;

    if(level.flags & LEVELFLAG_EXIT)
        str = "solved";
    else if(level.stars_exploded != 0)
        str = level.stars_exploded + " lost";
    else
        str = level.stars_caught + "/" + level.stars_total;

    str = " " + str + " ";

    screen.bar.context.font = screen.bar.height + "px " + font_name;

    var text = screen.bar.context.measureText(str);
    if(screen.bar.stars_width < text.width)
        screen.bar.stars_width = text.width;

    screen.bar.context.fillStyle = "#000000";
    screen.bar.context.fillRect(0, line_offset, graphics.small_width + screen.bar.stars_width, screen.bar.height);

    screen.bar.stars_width = text.width;

    screen.bar.context.lineWidth = screen.bar.height / 16;
    screen.bar.context.strokeStyle= "#ffa000";
    screen.bar.context.strokeText(str, graphics.small_width, line_offset + screen.bar.height - screen.bar.height / 8);

    screen.bar.context.fillStyle = "#ffff33";
    screen.bar.context.fillText(str, graphics.small_width, line_offset + screen.bar.height - screen.bar.height / 8);

    var p = PIECE_STAR;

    if(level.flags & LEVELFLAG_EXIT && !(level.flags & LEVELFLAG_FAILED) && graphics.small_image[PIECE_DOOR] != null)
        p = PIECE_DOOR;

    var sx = 0;
    if(graphics.image_flags[p] & GRAPHICS_LEVEL && level.level > 0)
        sx = graphics.small_width * (level.level - 1);

    if(graphics.small_image[p] != null)
        screen.bar.context.drawImage(graphics.small_image[p], sx, 0, graphics.small_width, graphics.small_height, 0, line_offset + (screen.bar.height / 2) - (graphics.small_height / 2), graphics.small_width, graphics.small_height)

}

function display_focus()
{
    if(level == null)
        return;

    if(level.mode == MODE_XOR && options.xor_display)
    {
        ox = graphics.offset_x;
        oy = graphics.offset_y;

        graphics.offset_x = 0;
        graphics.offset_y = 0;

        graphics.offset_x -= level.view_x[level.player] * graphics.width;
        graphics.offset_y -= level.view_y[level.player] * graphics.height;

        if(graphics.offset_x != ox || graphics.offset_y != oy)
            return 1;
        else
            return 0;
    }

    px = level.player_x[level.player] * graphics.width;
    py = level.player_y[level.player] * graphics.height;
    ox = graphics.offset_x;
    oy = graphics.offset_y;

    display_border_x = graphics.width * 3;
    display_border_y = graphics.height * 3;

    for(var i = 1; i < 4; i ++) 
    {
        if(graphics.width * i < screen.width / 2)
            display_border_x = graphics.width * i;
        if(graphics.height * i < screen.height / 2)
            display_border_y = graphics.height * i;
    }

    maxx = (level.width * graphics.width - screen.width);
    maxy = (level.height * graphics.height - screen.height);

    if((level.width - 1) * graphics.width < screen.width)
    {
        graphics.offset_x = (screen.width - (level.width * graphics.width)) / 2;
    }
    else
    {
        if(px < -(graphics.offset_x - display_border_x))
            graphics.offset_x = -(px - display_border_x);
        if(px >= -(graphics.offset_x - screen.width + display_border_x + graphics.width))
            graphics.offset_x = -(px - screen.width + display_border_x + graphics.width);

        if(graphics.offset_x > 0)
            graphics.offset_x = 0;
        if(graphics.offset_x < -maxx)
            graphics.offset_x = -maxx;

    }

    if((level.height - 1) * graphics.height < screen.height)
    {
        graphics.offset_y = (screen.height - (level.height * graphics.height)) / 2;
    }
    else
    {
        if(py < -(graphics.offset_y - display_border_y))
            graphics.offset_y = -(py - display_border_y);
        if(py >= -(graphics.offset_y - screen.height + display_border_y + graphics.height))
            graphics.offset_y = -(py - screen.height + display_border_y + graphics.height);

        if(graphics.offset_y > 0)
            graphics.offset_y = 0;
        if(graphics.offset_y < -maxy)
            graphics.offset_y = -maxy;
    }

    graphics.offset_x = Math.floor(graphics.offset_x);
    graphics.offset_y = Math.floor(graphics.offset_y);

    if(graphics.offset_x != ox || graphics.offset_y != oy)
        return 1;
    else
        return 0;
}

function display_map()
{
    graphics.map_colours = [];

    for(var x = 0; x < level.width; x ++)
    {
        for(var y = 0; y < level.height; y ++)
        {
            display_map_piece(x, y);
        }
    }
}

function display_map_piece(x, y)
{
    var c = "#ffffff";
    var p = PIECE_SPACE;

    var ok = false;

    if(x < level.width / 2 && y < level.width / 2 && level.mapped & MAPPED_TOP_LEFT)
        ok = true;
    if(x >= level.width / 2 && y < level.width / 2 && level.mapped & MAPPED_TOP_RIGHT)
        ok = true;
    if(x < level.width / 2 && y >= level.width / 2 && level.mapped & MAPPED_BOTTOM_LEFT)
        ok = true;
    if(x >= level.width / 2 && y >= level.width / 2 && level.mapped & MAPPED_BOTTOM_RIGHT)
        ok = true;

    if(ok)
    {
        p = level_piece(x, y);

        if(p != PIECE_WALL && p != PIECE_STAR && p != PIECE_DOOR)
            p = PIECE_SPACE;
    }

    if(graphics.map_colours[p] == null)
    {
        var context = graphics.image[p].getContext("2d");
        var r = 0;
        var g = 0;
        var b = 0;
        var a = 1;
        for(var i = 0; i < 24; i += 1)
        {
            for(var j = 0; j < 24; j += 1)
            {
                var px = (i + 0.5) * graphics.width / 24;
                var py = (j + 0.5) * graphics.height / 24;

                if(graphics.image_flags[p] & GRAPHICS_LEVEL && level.level > 0)
                    px += (level.level - 1) * graphics.width;
                var data = context.getImageData(Math.floor(px), Math.floor(py), 1, 1).data;

                r += data[0];
                g += data[1];
                b += data[2];
                a += data[3];
            }
        }
        colour = "#" + (Math.floor((r/a)*16).toString(16)) + (Math.floor((g/a)*16).toString(16)) + (Math.floor((b/a)*16).toString(16));
        graphics.map_colours[p] = colour;
    }
    
    screen.map.context.fillStyle = graphics.map_colours[p];
    screen.map.context.fillRect(x * screen.map.pixel_width, y * screen.map.pixel_height, screen.map.pixel_width, screen.map.pixel_height);
}

function main_menu()
{
    level = null;
    level_replay = null;

    menu_new("");

    var sets = levels.dom.getElementsByTagName("set");


    menu_section("Instructions");
    menu_new_entry("H", "How to Play", null, null, null, instructions_menu, null);

    menu_section("Chroma");

    var other = false;

    for(var s = 0; s < sets.length; s ++)
    {
        if(sets[s].getAttribute("type") != "chroma" && other == false)
        {
            menu_section("Other Games");
            other = true;
        }

        if(sets[s].getAttribute("hidden") == null || options.show_hidden)
            menu_new_entry(sets[s].getAttribute("key"), sets[s].getAttribute("title"), null, null, sets[s].getAttribute("subtitle"), level_set_menu, s);

    }

    /* Are there saved positions? */
    var ok = false;
    for(var i = 0; i < localStorage.length; i ++)
    {
        if(a = localStorage.key(i).match(/^save-(\w+)/))
        {
            ok = true;
            break;
        }
    }

    if(ok)
    {
        menu_section("Saved Positions");

        menu_new_entry("S", "Saved Positions", null, null, null, saved_positions_menu, "");
    }

    menu_section("Preferences");

    menu_new_entry("P", "Preferences", null, null, null, preferences_menu, null);

    menu_show(true);

}

function level_set_menu()
{
    var sets = levels.dom.getElementsByTagName("set");
    var set = sets[this.dataset.data];
    var ok;

    menu_new("Choose a Level");

    menu_new_entry("Q", "Return to previous menu", null, null, null, main_menu, null);
    menu_new_spacer();

    var levs = set.getElementsByTagName("level");

    for(var l = 0; l < levs.length; l ++)
    {
        ok = true;
        if(levs[l].getAttribute("broken") != null)
        {
            ok = false;
            if(levs[l].getAttribute("broken") == "yes" && !options.xor_fix)
                ok = true;
            if(levs[l].getAttribute("broken") == "no" && options.xor_fix)
                ok = true;
        }
        if(ok)
            menu_new_entry(levs[l].getAttribute("key"), levs[l].getAttribute("title"), null, null, null, play_level, levs[l].childNodes[0].nodeValue);
    }

    menu_show(true);
}

function play_level()
{
    level = level_from_string(this.dataset.data);

    revert = new Object;
    revert.data = this.dataset.data;
    revert.moves = level.moves.length;

    display_bevellevel();
    graphics_render();
}

function game_menu()
{
    menu_new("Game Options");

    menu_new_entry("Q", "Return to Level", null, null, null, game_return, null);
    menu_new_entry("A", "Abort Level and Return to Main Menu", null, null, null, main_menu, null);
    menu_new_entry("V", "Revert to Original Position", level.moves.length == revert.moves ? "(only after changes)" : "", null, null, level.moves.length == revert.moves ? null : revert_level, null); 
    menu_new_spacer();
    menu_new_entry("L", "Load Position", null, null, null, load_position, null); 
    menu_new_entry("S", "Save Position", level.movers.length != 0 ? "(not while pieces in motion)" : options.storage ? "" : "(in Private Browsing mode, saved positions will be lost when the browser is closed - use Preferences / Export to save them to a file)", null, null, level.movers.length != 0 ? null : save_position, null);
    menu_new_spacer();

    if(level_replay == null)
        menu_new_entry("R", "Replay Saved Position", level.moves.length != 0 ? "(only at start of level)" : "", null, null, level.moves.length != 0 ? null : load_replay_position, null); 
    else
        menu_new_entry("T", "Stop Replaying Position", null, null, null, stop_replay, null);

    menu_new_spacer();
    menu_new_entry("P", "Preferences", null, null, null, preferences_menu, null);

    menu_show(true);
}

function revert_level()
{
    level = level_from_string(revert.data);
    display_bevellevel();

    graphics_render();
}

function instructions_menu()
{
    menu_new("How to Play")

    menu_new_entry("Q", "Return to previous menu", null, null, null, quit_instructions_menu, null);

    document.getElementById("instructions").style.display = "block";
}

function quit_instructions_menu()
{
    document.getElementById("instructions").style.display = "none";
    main_menu();
}

function preferences_menu()
{
    menu_new("Preferences")

    if(level != null)
        menu_new_entry("Q", "Return to Level", null, null, null, quit_preferences_menu, null);
    else
        menu_new_entry("Q", "Return to Main Menu", null, null, null, quit_preferences_menu, null);

    menu_new_spacer();

    menu_new_select("K", "Show On-screen Keypad", "show_keypad", options.keypad, "no", "yes");

    menu_section("Graphics Scheme");

    var item = document.createElement("div");
    item.className = "item-options";
    item.id = "sets";

    for(var s=0; s < graphics_sets.length; s ++)
    {
        var option = document.createElement("div");
        option.className = "option has-key four";

        if(graphics_sets[s].set != "xor")
        {
            if(graphics_sets[s].set == options.graphics)
                option.classList.add("selected");
        }
        else
        {
            if(options.graphics_xor)
                option.classList.add("selected");
            option.classList.add("other");
            option.id = "xor";
        }
        item.appendChild(option);

        var div = document.createElement("div");
        div.className = "key";
        div.textContent = graphics_sets[s].key;
        option.appendChild(div);

        var t = document.createTextNode(graphics_sets[s].title);
        option.appendChild(t);

        var div = document.createElement("img");
        div.src = graphics_sets[s].preview;
        option.appendChild(div);

        if(graphics_sets[s].set == "xor")
        {
            var t = document.createTextNode("for XOR levels");
            option.appendChild(t);
        }

        option.dataset.data = graphics_sets[s].set;
        option.dataset.key = graphics_sets[s].key;
        option.onclick = set_graphics_set;

    }

    document.getElementById("items").appendChild(item);

    menu_section("Graphics Size");

    var item = document.createElement("div");
    item.className = "item-options";
    item.id = "sizes";

    for(var s=0; s < graphics_sizes.length; s ++)
    {
        var option = document.createElement("div");
        option.className = "option has-key three";
        if(graphics_sizes[s].size == options.graphics_size)
            option.classList.add("selected");
        item.appendChild(option);

        var div = document.createElement("div");
        div.className = "key";
        div.textContent = graphics_sizes[s].key;
        option.appendChild(div);

        var t = document.createTextNode(graphics_sizes[s].title);
        option.appendChild(t);


        if(graphics_sizes[s].size == -1)
        {
            t = document.createElement("input");
            t.type = "number";
            t.value = options.graphics_custom_size;
            t.id = "custom-number";
            option.appendChild(t);
            option.id = "custom";

            option.onclick = custom_graphics_size;
        }
        else
            option.onclick = set_graphics_size;

        option.dataset.data = graphics_sizes[s].size;
        option.dataset.key = graphics_sizes[s].key;
    }

    document.getElementById("items").appendChild(item);

    menu_section("Speeds");

    menu_slider("P", "Player Speed", "player", options.player_delay);
    menu_slider("V", "Move Speed", "move", options.move_delay);
    menu_slider("U", "Undo Speed", "undo", options.undo_delay);
    menu_slider("R", "Replay Speed", "replay", options.replay_delay);

    if(options.others)
    {
        menu_section("Other Game Options");

        menu_new_select("L", "XOR Display", "xor_display", options.xor_display, "full", "partial");
        menu_new_select("O", "XOR Engine", "xor_engine", options.xor_engine, "approximate", "exact");
        menu_new_select("B", "XOR Procyon Levels", "xor_fix", options.xor_fix, "broken", "fixed");

        menu_new_spacer();

        menu_new_select("E", "Enigma Engine", "enigma_engine", options.enigma_engine, "approximate", "exact");
    }

    menu_section("Save and Restore");

    menu_new_entry("S", "Save Preferences", null, options.storage ? "" : "(in Private Browsing mode, preferences will be lost when the browser is closed - use Export to save them to a file)", null, save_preferences, null);

    menu_new_entry("I", "Import and Export Preferences and Saved Positions", null, null, null, import_export_menu, null);

    menu_new_entry("D", "Restore Defaults", null, null, null, restore_default_preferences, null);

    menu_show(true);
}

function menu_section(title)
{
    var heading = document.createElement("h2");
    heading.textContent = title;
    document.getElementById("items").appendChild(heading);
}

function menu_slider(key, title, prefix, value)
{
    var item = document.createElement("div");
    item.className = "item has-key";

    var div = document.createElement("div");
    div.className = "key";
    div.textContent = key;
    item.appendChild(div);
    item.dataset.key = key;
    item.onclick = clicked_slider;

    var inner = document.createElement("div");
    inner.className = "item-slider";

    var t = document.createElement("div");
    t.className = "title";
    t.textContent = title;
    inner.appendChild(t);

    var slider = document.createElement("input");
    slider.type = "range";
    slider.className = "slider";
    slider.id = prefix+"-slider";
    slider.min = 0;
    slider.max = 140;
    slider.value = number_to_slider(value);
    slider.onchange = slider_change;
    slider.oninput = slider_change;
    inner.appendChild(slider);

    var number = document.createElement("input");
    number.type= "number";
    number.className = "number";
    number.id = prefix+"-number";
    number.min = 0;
    number.max = 10000;
    number.value = value;
    number.onchange = number_change;
    inner.appendChild(number);

    var div = document.createElement("div");
    div.className = "clear";
    inner.appendChild(div);

    item.appendChild(inner);

    document.getElementById("items").appendChild(item);
}

function clicked_slider()
{
    this.getElementsByTagName("input")[0].focus();
}

function slider_change()
{
    id = this.id;
    id = id.replace("slider", "number");

    document.getElementById(id).value = slider_to_number(this.value);
}

function slider_to_number(s)
{
    var p = s % 35;
    var t = Math.floor(s/35);

    return slider_positions[p] * Math.pow(10, t);
}

function number_to_slider(n)
{
    var t = 0;
    var p = 0;

    while(n >= 10)
    {
        n = n /10;
        t ++;
    }

    for(var i = 0; i < 35; i ++)
    {
        if(n >= slider_positions[i])
            p = i;
    }

    return t * 35 + p;
}

function number_change()
{
    id = this.id;
    id = id.replace("number", "slider");

    document.getElementById(id).value = number_to_slider(this.value);
}

function menu_new_select(key, title, prefix, value, no, yes)
{
    var item = document.createElement("div");
    item.className = "item has-key";

    var div = document.createElement("div");
    div.className = "key";
    div.textContent = key;
    item.appendChild(div);
    item.dataset.key = key;
    item.onclick = clicked_select;

    var inner = document.createElement("div");
    inner.className = "item-text";

    var t = document.createTextNode(title);
    inner.appendChild(t);

    var select = document.createElement("select");
    select.id = prefix;
    var option = document.createElement("option");
    option.textContent = no;
    option.value = 0;
    option.selected = (value == false);
    select.appendChild(option);

    var option = document.createElement("option");
    option.textContent = yes;
    option.value = 1;
    option.selected = (value == true);
    select.appendChild(option);

    inner.appendChild(select);

    item.appendChild(inner);

    document.getElementById("items").appendChild(item);
}

function clicked_select()
{
    this.getElementsByTagName("select")[0].focus();
}

function set_graphics_set()
{
    if(this.dataset.data != "xor")
        options.graphics = this.dataset.data;
    else
        options.graphics_xor = !options.graphics_xor;

    var opts = document.getElementById("sets").getElementsByClassName("option");
    for(o = 0; o < opts.length; o ++)
    {
        if(opts[o].dataset.data == options.graphics)
            opts[o].classList.add("selected");
        else
            opts[o].classList.remove("selected");
    }

    var x = document.getElementById("xor");
    if(options.graphics_xor)
        x.classList.add("selected");
    else
        x.classList.remove("selected");
}

function set_graphics_size()
{
    options.graphics_size = parseInt(this.dataset.data);

    var opts = document.getElementById("sizes").getElementsByClassName("option");
    for(o = 0; o < opts.length; o ++)
    {
        if(opts[o].dataset.data == options.graphics_size)
            opts[o].classList.add("selected");
        else
            opts[o].classList.remove("selected");
    }
}

function custom_graphics_size()
{
    var opts = document.getElementById("sizes").getElementsByClassName("selected");
    for(o = 0; o < opts.length; o ++)
        opts[o].classList.remove("selected");

    document.getElementById("custom").classList.add("selected");
    document.getElementById("custom-number").focus();

    options.graphics_size = -1;
}

function quit_preferences_menu()
{
    gather_preferences();

    if(level != null)
        game_return();
    else
        main_menu();
}

function gather_preferences()
{
    options.player_delay = parseFloat(document.getElementById("player-number").value);
    options.move_delay = parseFloat(document.getElementById("move-number").value);
    options.undo_delay = parseFloat(document.getElementById("undo-number").value);
    options.replay_delay = parseFloat(document.getElementById("replay-number").value);

    if(options.others)
    {
        if(document.getElementById("xor_fix").value == "1")
            options.xor_fix = true;
        else
            options.xor_fix = false;

        if(document.getElementById("xor_display").value == "1")
            options.xor_display = true;
        else
            options.xor_display = false;

        if(document.getElementById("xor_engine").value == "1")
            options.xor_engine = true;
        else
            options.xor_engine = false;

        if(document.getElementById("enigma_engine").value == "1")
            options.enigma_engine = true;
        else
            options.enigma_engine = false;
    }

    if(document.getElementById("show_keypad").value == "1")
        options.keypad = true;
    else
        options.keypad = false;

    toggle_keypad(options.keypad);

    var size = parseInt(document.getElementById("custom-number").value);
    if(size > 0 && size <= 512)
        options.graphics_custom_size = size;
}

function save_preferences()
{
    gather_preferences();
    push_preferences();

    if(level != null)
        game_return();
    else
        main_menu();
}

function push_preferences()
{
    try
    {
        localStorage.setItem("options.player_delay", options.player_delay);
        localStorage.setItem("options.undo_delay", options.undo_delay);
        localStorage.setItem("options.move_delay", options.move_delay);
        localStorage.setItem("options.replay_delay", options.replay_delay);
        localStorage.setItem("options.graphics", options.graphics);
        localStorage.setItem("options.graphics_size", options.graphics_size);
        localStorage.setItem("options.graphics_custom_size", options.graphics_custom_size);
        localStorage.setItem("options.graphics_xor", options.graphics_xor);
        localStorage.setItem("options.xor_fix", options.xor_fix);
        localStorage.setItem("options.xor_display", options.xor_display);
        localStorage.setItem("options.xor_engine", options.xor_engine);
        localStorage.setItem("options.enigma_engine", options.enigma_engine);
        localStorage.setItem("options.keypad", options.keypad);
    }
    catch(e)
    {
        alert("Unable to save preferences: "+e.message);
    }
}

function default_preferences()
{
    options.player_delay = 100;
    options.undo_delay = 100;
    options.move_delay = 100;
    options.replay_delay = 100;
    options.graphics = "zen";
    options.graphics_size = 0;
    if(window.innerWidth  < 768)
        options.graphics_size = 24;
    options.graphics_custom_size = 192;
    options.graphics_xor = true;
    options.xor_fix = true;
    options.xor_display = true;
    options.xor_engine = true;
    options.enigma_engine = true;
    options.keypad = false;
}

function load_preferences()
{
    try
    {
        if(localStorage.getItem("options.player_delay") != null)
            options.player_delay = parseInt(localStorage.getItem("options.player_delay"));
        if(localStorage.getItem("options.undo_delay") != null)
            options.undo_delay = parseInt(localStorage.getItem("options.undo_delay"));
        if(localStorage.getItem("options.move_delay") != null)
            options.move_delay = parseInt(localStorage.getItem("options.move_delay"));
        if(localStorage.getItem("options.replay_delay") != null)
            options.replay_delay = parseInt(localStorage.getItem("options.replay_delay"));

        if(localStorage.getItem("options.graphics") != null)
        {
            if(localStorage.getItem("options.graphics") == "zen" ||
               localStorage.getItem("options.graphics") == "marble" ||
               localStorage.getItem("options.graphics") == "neon" ||
               localStorage.getItem("options.graphics") == "xor")
            options.graphics = localStorage.getItem("options.graphics");
        }

        if(localStorage.getItem("options.graphics_size") != null)
            options.graphics_size = parseInt(localStorage.getItem("options.graphics_size"));
        if(localStorage.getItem("options.graphics_custom_size") != null)
            options.graphics_custom_size = parseInt(localStorage.getItem("options.graphics_custom_size"));

        if(localStorage.getItem("options.graphics_xor") == "false")
           options.graphics_xor = false;
        if(localStorage.getItem("options.graphics_xor") == "true")
           options.graphics_xor = true;

        if(localStorage.getItem("options.xor_fix") == "false")
           options.xor_fix = false;
        if(localStorage.getItem("options.xor_fix") == "true")
           options.xor_fix = true;

        if(localStorage.getItem("options.xor_display") == "false")
           options.xor_display = false;
        if(localStorage.getItem("options.xor_display") == "true")
           options.xor_display = true;

        if(localStorage.getItem("options.xor_engine") == "false")
           options.xor_engine = false;
        if(localStorage.getItem("options.xor_engine") == "true")
           options.xor_engine = true;

        if(localStorage.getItem("options.enigma_engine") == "false")
           options.enigma_engine = false;
        if(localStorage.getItem("options.enigma_engine") == "true")
           options.enigma_engine = true;

        if(localStorage.getItem("options.keypad") == "false")
           options.keypad = false;
        if(localStorage.getItem("options.keypad") == "true")
           options.keypad = true;
    }
    catch(e)
    {
        alert("Unable to load preferences: "+e.message);
    }
}

function restore_default_preferences()
{
    default_preferences();
    toggle_keypad(options.keypad);
    preferences_menu();
}

function game_return()
{
    graphics_render();
}

function menu_keydown(e)
{
    var key = e.key;

    if(key == "Escape")
        key = "Q";

    key = key.toUpperCase();

    if(document.activeElement.tagName == "INPUT" && key >= "0" && key <= "9")
    {
        return true;
    }

    if(e.ctrlKey)
        return true;
    
    var items = document.getElementsByClassName("has-key");
    for(i = 0; i < items.length; i ++)
    {
        if(items[i].dataset.key == key)
        {
            items[i].click();
            return false;
        }
    }
}

function menu_show(show)
{
    document.onkeydown = null;
    document.onkeyup = null;
    document.onmousedown = null;
    document.onmouseup = null;
    document.ontouchstart = null;
    document.ontouchend = null;
    document.onclick = null;

    menu.becoming = show;

    if(show != menu.state)
    {
        if(show)
        {
            document.getElementById("menu-icon").style.display = "none";
            document.getElementById("menu-icon").style.opacity = 0;


            document.getElementById("menu").style.display = "block";


            setTimeout(function() { menu_shown(true); }, 100);
        }
        else
        {
            document.getElementById("screen").style.display = "block";
            document.getElementById("bar").style.display = "block";
            if(level != null && level.mode == MODE_XOR && options.xor_display)
                document.getElementById("map").style.display = "block";
            

            document.getElementById("keypad").style.display = "block";

            document.getElementById("menu-icon").onclick = game_menu;

            document.getElementById("menu").style.position = "fixed";

            document.getElementById("menu").style.right = "-100%";
            document.getElementById("menu").style.top= "-100%";

            setTimeout(function() { menu_shown(false); }, 1000);
        }
    }
    else
        menu_shown(show);
}

function menu_shown(show)
{

    if(menu.state != show)
    {
        if(show)
        {
            setTimeout(menu_make_absolute, 1000);
            document.getElementById("menu").style.right = "0";
            document.getElementById("menu").style.top= "0"; 
        }
        else
        {
            document.getElementById("menu").style.display = "none";
            document.getElementById("menu-icon").style.display = "block";
            document.getElementById("menu-icon").style.opacity = 0;

            setTimeout(function() { document.getElementById("menu-icon").style.opacity = 1; }, 50);
        }
    }

    if(show)
    {
        document.onkeydown = menu_keydown;
        document.onkeyup = null;
        document.onmousedown = null;
        document.onmouseup = null;
        document.ontouchstart = null;
        document.ontouchend = null;
        document.onclick = null;
    }
    else
    {
        document.onkeydown = game_keydown;
        document.onkeyup = game_keyup;
        document.onmousedown = function(e) { return game_mousedown(e, false) };
        document.onmouseup = function(e) { return game_mouseup(e, false) };
        document.ontouchstart = function(e) { if(e.changedTouches.length > 0) return game_mousedown(e.changedTouches[0], true); };
        document.ontouchend = function(e) { if(e.changedTouches.length > 0) return game_mouseup(e.changedTouches[0], true); };
        document.onclick = game_click;
    }

    menu.state = show;
}


function menu_make_absolute()
{
    if(menu.becoming == true)
    {
        document.getElementById("screen").style.display = "none";
        document.getElementById("bar").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("keypad").style.display = "none";
        document.getElementById("menu").style.position = "absolute";
    }
}

function menu_new(title)
{
    menu.keys = [];
    menu.key = 1;
    document.getElementById("items").innerHTML = "";

    if(title != "")
    {
        var heading = document.createElement("h1");
        heading.textContent = title;
        document.getElementById("items").appendChild(heading);
        document.getElementById("logo").classList.remove("big");
    }
    else
        document.getElementById("logo").classList.add("big");
 
    window.scrollTo(0, 0);   
}

function menu_new_entry(key, text1, text2, text3, text4, onclick, data)
{
    var item = document.createElement("div");
    if(onclick != null)
        item.className = "item has-key";
    else
        item.className = "item grey";

    if(key != null)
        item.dataset.key = key.toUpperCase();
    else
    {
        key = menu.key.toString(36);
        key = key.toUpperCase();
        menu.key ++;

        item.dataset.key = key;
    }

    menu.keys[item.dataset.key] = true;

    var div = document.createElement("div");
    div.className = "key";
    div.textContent = key;
    item.appendChild(div);

    var div = document.createElement("div");
    div.className = "item-text";
    item.appendChild(div);

    if(text1 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.id = "text1";
        tdiv.className = "item-left";
        tdiv.textContent = text1;
        div.appendChild(tdiv);
    }

    if(text2 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.id = "text2";
        tdiv.className = "item-right";
        tdiv.textContent = text2;
        div.appendChild(tdiv);
    }

    if(text1 != null || text2 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.className = "clear";
        div.appendChild(tdiv);
    }

    if(text3 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.id = "text3";
        tdiv.className = "item-left";
        tdiv.textContent = text3;
        div.appendChild(tdiv);
    }

    if(text4 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.id = "text4";
        tdiv.className = "item-right";
        tdiv.textContent = text4;
        div.appendChild(tdiv);
    }

    if(text3 != null || text4 != null)
    {
        var tdiv = document.createElement("div");
        tdiv.className = "clear";
        div.appendChild(tdiv);
    }

    if(data != null)
        item.dataset.data = data;

    if(onclick != null)
        item.onclick = onclick;

    document.getElementById("items").appendChild(item);

    return item;
}

function menu_new_spacer()
{
    var item = document.createElement("div");
    item.className = "spacer";

    document.getElementById("items").appendChild(item);
}

function save_position()
{
    var str = level_to_string(level);
    var time = Date.now().toString(16);

    var summary;

    if(level.flags & LEVELFLAG_FAILED)
        summary = "failed";
    else if(level.flags & LEVELFLAG_SOLVED)
        summary = "solved";
    else
        summary = level.stars_caught+"/"+level.stars_exploded+"/"+level.stars_total;

    summary += " "+level.moves.length+" "+level.title;

    try
    {
        localStorage.setItem("save-"+time, summary);
        localStorage.setItem("data-"+time, str);
    }
    catch(e)
    {
        alert("Unable to save position: "+e.message);
        return;
    }

    if(localStorage.getItem("save-"+time) != summary || localStorage.getItem("data-"+time, str) != str)
    {
        alert("Unable to save position.");
        return;
    }

    revert = new Object;
    revert.data = this.dataset.data;
    revert.moves = level.moves.length;

    game_return();
}


function load_position()
{
    saved_positions(level.title, "", false, false);
}

function load_replay_position()
{
    saved_positions(level.title, "", false, true);
}

function saved_positions_menu()
{
    saved_positions("", this.dataset.data, false, false);
}

function saved_positions(limit, oldlimit, deleting, replay)
{
    var a;
    var positions = [];
    var limited = 0;

    if(replay)
        menu_new("Replay Saved Position");
    else if(deleting)
        menu_new("Delete Saved Positions");
    else
        menu_new("Load Position");

    var return_function = main_menu;
    if(limit != "")
        return_function = game_menu;
    if(oldlimit != "")
        return_function = load_position;

    menu_new_entry("Q", "Return to previous menu", null, null, null, return_function, null);
    if(deleting == false && replay == false)
        menu_new_entry("Delete", "Delete positions", null, null, null, delete_positions, limit);
    menu_new_spacer();

    for(var i = 0; i < localStorage.length; i ++)
    {
        if(a = localStorage.key(i).match(/^save-(\w+)/))
            positions.push(a[1]);
    }

    positions.sort(function(a, b) { return b > a; });

    var action;
    if(replay)
        action = load_replay;
    else if(deleting)
        action = delete_position;
    else
        action = play_level;

    for(var i = 0; i < positions.length; i ++)
    {
        var s = localStorage.getItem("save-"+positions[i]);
        var stars = "";
        var moves = "";
        var title = "";
        var date = "";

        if(a = s.match(/^(\S+) (\S+) (.*)/))
        {
            stars = a[1];
            moves = a[2] + " move" + (a[2] == 1 ? "" : "s");
            title = a[3];

            if(a = stars.match(/^(\d+)\/(\d+)\/(\d+)/))
            {
                if(a[2] != 0)
                    stars = a[2] + " lost";
                else
                    stars = a[1] + "/" + a[3];
            }

            d = new Date(parseInt(positions[i], 16));
            date = d.toString();

            date = days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getHours()+":"+two(d.getMinutes())+":"+two(d.getSeconds())+" "+d.getFullYear();
            
            if(limit == "" || title == limit)
                menu_new_entry(null, title, stars, date, moves, action, deleting ? positions[i] : localStorage.getItem("data-"+positions[i]));
            else
                limited ++;
        }

    }

    if(limited != 0 && deleting == false && replay == false)
    {
        menu_new_spacer();
        menu_new_entry("+", "Show positions for other levels", "("+limited+" other"+(limited == 1 ? "" : "s")+")", null, null, saved_positions_menu, title);
    }

    menu_show(true);
}

function delete_positions()
{
    saved_positions(this.dataset.data, level != null ? level.title : "", true, false);
}

function delete_position()
{
    var p = this.dataset.data;

    var i = document.querySelectorAll("[data-data=\""+p+"\"]");
    if(i.length > 0)
        i[0].parentElement.removeChild(i[0]);

    localStorage.removeItem("save-"+p);
    localStorage.removeItem("data-"+p);
}

function load_replay()
{
    level_replay = level_from_string(this.dataset.data);
    consider_replay_move();
    display_moves();
    game_return();
}

function stop_replay()
{
    level_replay = null;
    display_moves();
    game_return();
}

function consider_replay_move()
{
    var move;

    display_moves();

    if(level.movers.length == 0 && !(level.flags & LEVELFLAG_UNDO))
    {
        if(!(level_replay.flags & LEVELFLAG_PAUSED))
        {
            if(level_replay.flags & LEVELFLAG_UNDO)
            {
                if(level_undo())
                {
                    level.flags |= LEVELFLAG_UNDO;
                    display_start_update();
                }
                else
                    level.flags &= ~LEVELFLAG_UNDO;
            }
            else
            {
                move = level_replay.moves[level.moves.length].direction;
                level_move(move);
            }
        }
    }
}

function import_export_menu(really)
{
    if(really != true)
        gather_preferences();

    menu_new("Import and Export Preferences and Saved Positions");

    menu_new_entry("Q", "Return to previous menu", null, null, null, preferences_menu, null);

    menu_new_spacer();

    menu_new_entry("E", "Export Preferences and Saved Positions to file", null, null, null, really == true ? null : export_data, null);

    var item = menu_new_entry("I", "Import Preferences and Saved Positions from file", null, null, null, really == true ? null : import_click, null);

    if(really != true)
    {
        var upload = document.createElement("input");
        upload.type= "file";
        div = item.getElementsByTagName("div")[3];
        div.appendChild(upload);
        div.style.display = "none";
        upload.addEventListener("change", import_data);
    }

    menu_new_spacer();

    if(really == true)
        menu_new_entry("Y", "Really Delete Preferences and Saved Positions", null, "(cannot be undone)", null, clear_data, null);
    else
        menu_new_entry("D", "Delete Preferences and Saved Positions", null, null, null, confirm_clear_data, null);

    menu_show(true);
}

function confirm_clear_data()
{
    import_export_menu(true);
}

function clear_data()
{
    localStorage.clear();
    alert("Preferences and Saved Positions deleted");

    main_menu();
}

function export_data()
{
    push_preferences();

    var l = {};
    for(var i = 0; i < localStorage.length; i ++)
    {
        l[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }

    var data = JSON.stringify(l);
    var filename = "chroma.json";

    var blob = new Blob([data], {type: "application/octet-stream;"});
    if(window.navigator.msSaveOrOpenBlob)
    {
        window.navigator.msSaveBlob(blob, filename);
    }
    else
    {
        var e = window.document.createElement("a");
        e.href = window.URL.createObjectURL(blob);
        e.download = filename;        
        document.body.appendChild(e);
        e.click();        
        document.body.removeChild(e);
    }
}

function import_click()
{
    this.getElementsByTagName("input")[0].click();
}

function import_data()
{
    if(this.files.length == 1)
    {
        var reader = new FileReader();
        reader.onload = import_data_stage_two;
        reader.readAsText(this.files[0]);
    }
}

function import_data_stage_two()
{
    localStorage.clear();

    var positions = 0;

    try
    {
        var l = JSON.parse(this.result);
        for(var i in l)
        {
            if(l.hasOwnProperty(i))
            {
                localStorage.setItem(i, l[i]);
                if(i.substr(0,5) == "save-")
                    positions ++;
            }
        }
    }
    catch(e)
    {
        alert("Unable to import data: " + e.message);
        return;
    }

    alert("Preferences and "+positions+" saved position"+(positions == 1 ? "" : "s")+" successfully imported");

    options.storage = true;

    load_preferences();
    preferences_menu();
}

function game_keydown(e)
{
    var move = MOVE_NONE;

    if(e.key == "Shift")
        graphics.shift = true;
    if(e.key == "Control")
        graphics.ctrl = true;

    if(e.key == "Escape" || e.key == "Q" || e.key == "q")
    {
        game_menu();
        return;
    }
    else if(e.key == "Tab")
    {
        display_level();
    }
    else if(e.key == "ArrowUp" || e.keyCode == 104)
        move = MOVE_UP;
    else if(e.key == "ArrowDown" || e.keyCode == 98)
        move = MOVE_DOWN;
    else if(e.key == "ArrowLeft" || e.keyCode == 100)
        move = MOVE_LEFT;
    else if(e.key == "ArrowRight" || e.keyCode == 102)
        move = MOVE_RIGHT;
    else if(e.key == " " || e.key == "Enter" || e.key == "Return")
        move = MOVE_SWAP;
    else if(e.key == "Delete" || e.keyCode == 109)
        move = MOVE_UNDO;
    else if (e.key == "Insert" || e.keyCode == 107)
        move = MOVE_REDO;
    else
        return true;

    if(move != MOVE_NONE)
        make_move(move);

    return false;
}

function game_keyup(e)
{
    if(e.key == "Shift")
        graphics.shift = false;
    if(e.key == "Control")
        graphics.ctrl = false;
}

function game_mouseup(e, touch)
{
    if(e.target != null)
    {
        if(e.target.classList.contains("key") || e.target.id == "bar")
        {
            mouse_move = MOVE_NONE;
        }
    }

    if(!keypad.classList.contains("transition"))
        keypad.classList.add("transition");

    if(touch)
        document.ontouchmove = null;
    else
        document.onmousemove = null;
}

function game_mousedown(e, touch)
{
    if(mouse_recent_event)
        return false;

    mouse_recent_event = true;
    setTimeout(function() { mouse_recent_event = false; }, 500);

    if(e.target != null)
    {
        if(e.target.classList.contains("key"))
        {
            if(e.target.id == "up")
                mouse_move = MOVE_UP;
            else if(e.target.id == "down")
                mouse_move = MOVE_DOWN;
            else if(e.target.id == "left")
                mouse_move = MOVE_LEFT;
            else if(e.target.id == "right")
                mouse_move = MOVE_RIGHT;
            else if(e.target.id == "swap")
                mouse_move = MOVE_SWAP;
            else if(e.target.id == "undo")
                mouse_move = MOVE_UNDO;
            else if(e.target.id == "redo")
                mouse_move = MOVE_REDO;

            if(mouse_move != MOVE_NONE);
                consider_mouse_move();

            return false;
        }
        else if(e.target.id == "drag")
        {
            var keypad = document.getElementById("keypad");
            keypad.dataset.startX = e.clientX - keypad.offsetLeft;
            keypad.dataset.startY = e.clientY - keypad.offsetTop;
            keypad.classList.remove("transition");

            if(touch)
                document.ontouchmove = function(e) { if(e.changedTouches.length > 0) return drag_keypad(e.changedTouches[0], true) };
            else
                document.onmousemove = function(e) { return drag_keypad(e, false) };

            return false;
        }
        else if(e.target.id == "toggle")
        {
            options.keypad = !options.keypad;
            toggle_keypad(options.keypad);

            return false;
        }
        else if(e.target.id == "screen")
        {
            var scr = document.getElementById("screen");
            scr.dataset.startX = e.clientX - graphics.offset_x;
            scr.dataset.startY = e.clientY - graphics.offset_y;

            if(touch)
                document.ontouchmove = function(e) { if(e.changedTouches.length > 0) return drag_screen(e.changedTouches[0], true) };
            else
                document.onmousemove = function(e) { return drag_screen(e, false) };

            return false;
        }
        else if(e.target.id == "bar")
        {
            if((screen.bar.lines == 1 && e.clientX > screen.bar.width - graphics.small_width - screen.bar.move_width) ||
               (screen.bar.lines != 1 && e.clientY > screen.height - screen.bar.height))
            {
                mouse_move = MOVE_UNDO;
                consider_mouse_move();
            }
        }
    }
}

function game_click(e)
{
    var x = Math.floor((e.clientX - graphics.offset_x - screen.offset_x) / graphics.width);
    var y = Math.floor((e.clientY - graphics.offset_y - screen.offset_y) / graphics.height);

    if(!mouse_recent_event)
        return;

    if(level.alive[1 - level.player] && x == level.player_x[1 - level.player] && y == level.player_y[1 - level.player])
    {
        mouse_move = MOVE_SWAP;
        mouse_target = true;
        consider_mouse_move();
        return false;
    }
    if(level.alive[level.player])
    {
        if(x == level.player_x[level.player] && y != level.player_y[level.player])
        {
            mouse_target = true;
            mouse_target_x = x;
            mouse_target_y = y;

            if(y < level.player_y[level.player])
                mouse_move = MOVE_UP;
            else
                mouse_move = MOVE_DOWN;

            consider_mouse_move();
            return false;
        }
        if(x != level.player_x[level.player] && y == level.player_y[level.player])
        {
            mouse_target = true;
            mouse_target_x = x;
            mouse_target_y = y;

            if(x < level.player_x[level.player])
                mouse_move = MOVE_LEFT;
            else
                mouse_move = MOVE_RIGHT;

            consider_mouse_move();
            return false;
        }
    }
}

function toggle_keypad(state)
{
    var keypad = document.getElementById("keypad");

    if(state)
    {
        keypad.style.top = keypad.dataset.top;
        keypad.style.left = keypad.dataset.left;
        keypad.classList.remove("minimised");
        document.getElementById("toggle").innerHTML = "&#9700;";
    }
    else
    {
        keypad.dataset.top = keypad.style.top;
        keypad.dataset.left = keypad.style.left;
        keypad.classList.add("minimised");
        keypad.style.top = null;
        keypad.style.left = null;
        document.getElementById("toggle").innerHTML = "&#9698;";
    }
}

function consider_mouse_move()
{
    if(mouse_move != MOVE_NONE)
    {
        var move = make_move(mouse_move);
        if(mouse_target)
        {
            if(mouse_move == MOVE_SWAP)
                mouse_target = false;
            else
            {
                mouse_target = move;
                if(level.player_x[level.player] == mouse_target_x && level.player_y[level.player] == mouse_target_y)
                    mouse_target = false;
            }
            if(mouse_target == false)
                mouse_move = MOVE_NONE;
        }
    }
}

function make_move(move)
{
    if(level_replay != null)
    {
        if(move == MOVE_UP || move == MOVE_DOWN || move == MOVE_SWAP)
        {
            level_replay.flags |= LEVELFLAG_PAUSED;
        }
        else if(move == MOVE_LEFT || move == MOVE_UNDO)
        {
            level_replay.flags |= LEVELFLAG_UNDO;
            level_replay.flags &= ~LEVELFLAG_PAUSED;
        }
        else if(move == MOVE_RIGHT || move == MOVE_REDO)
        {
            level_replay.flags &= ~LEVELFLAG_UNDO;
            level_replay.flags &= ~LEVELFLAG_PAUSED;
        }

        consider_replay_move();
        return;
    }

    if(level.movers.length != 0 || level.flags & LEVELFLAG_UNDO)
        return;

    if(move == MOVE_UNDO)
    {
        if(level_undo())
        {
            level.flags |= LEVELFLAG_UNDO;
            display_start_update();
        }
        else
            level.flags &= ~LEVELFLAG_UNDO;
    }
    else if(move == MOVE_REDO)
    {
        if(level.redoable_moves.length != 0)
            level_move(MOVE_REDO)
    }
    else if(move != MOVE_NONE)
    {
        return level_move(move);
    }
}

function drag_keypad(e)
{
    var keypad = document.getElementById("keypad");

    keypad.style.left = (e.clientX - keypad.dataset.startX) + "px";
    keypad.style.top = (e.clientY - keypad.dataset.startY) + "px";

    return false;
}

function drag_screen(e)
{
    var scr = document.getElementById("screen");

    var ox = graphics.offset_x;
    var oy = graphics.offset_y;

    if(level == null)
        return;

    if(level.mode == MODE_XOR && options.xor_display)
        return;

    if((level.width - 1) * graphics.width > screen.width)
    {
        graphics.offset_x = (e.clientX - scr.dataset.startX);
        if(graphics.offset_x > 0)
            graphics.offset_x = 0;
        if(graphics.offset_x < -graphics.width * level.width + screen.width)
            graphics.offset_x = -graphics.width * level.width + screen.width;
    }
    if((level.height - 1) * graphics.height > screen.height)
    {
        graphics.offset_y = (e.clientY - scr.dataset.startY);
        if(graphics.offset_y > 0)
            graphics.offset_y = 0;
        if(graphics.offset_y < -graphics.height * level.height + screen.height)
            graphics.offset_y = -graphics.height * level.height + screen.height;
    }

    if(graphics.offset_x != ox || graphics.offset_y != oy)
        display_level();

    return false;

}

function enigma_move(move)
{
    var px, py;
    var dx, dy;
    var p;
    var into;

    if(!level.alive[level.player])
        return false;
    if(move == MOVE_SWAP)
        return false;

    px = level.player_x[level.player];
    py = level.player_y[level.player];

    dx = px + move_x[move];
    dy = py + move_y[move];

    /* Can we make the move? */
    p = level_piece(dx, dy);
    switch(p)
    {
        /* Pieces that can be collected */
        case PIECE_SPACE:
        case PIECE_DOTS:
        case PIECE_DOTS_DOUBLE:
            break;
        case PIECE_STAR:
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
            break;
        case PIECE_DOOR:
            if(level.stars_caught == level.stars_total)
                level.flags |= LEVELFLAG_EXIT;
            else
                return false;
            break;
        /* Pieces that can be pushed */
        case PIECE_ARROW_RED_LEFT:
        case PIECE_ARROW_RED_RIGHT:
        case PIECE_ARROW_RED_UP:
        case PIECE_ARROW_RED_DOWN:
        case PIECE_BOMB_RED_LEFT:
        case PIECE_BOMB_RED_RIGHT:
        case PIECE_BOMB_RED_UP:
        case PIECE_BOMB_RED_DOWN:
        /* Can't push against gravity */
            if(((level_piece(dx, dy) + 2) % 4) == move)
                return false;
       /* fallthrough */
        case PIECE_CIRCLE:
        case PIECE_CIRCLE_DOUBLE:
        /* Can't push into other pieces */
            into = level_piece(dx + move_x[move], dy + move_y[move]);
            if(into != PIECE_SPACE && into != PIECE_DOTS)
                return false;
            mover_new(dx + move_x[move], dy + move_y[move], move, p, 0);
            break;

        /* Can't move */
        default:
            return false;
    }

    mover_new(dx, dy, move, PIECE_PLAYER_ONE + level.player, 0);
    mover_new(px, py, move, PIECE_SPACE, 0);
    level_setmoving(px, py, MOVE_NONE);
    level.player_x[level.player] = dx;
    level.player_y[level.player] = dy;
    mover_addtostack(px, py, move);

    return true;

}

function enigma_evolve()
{
    var into;

    var d;
    var i, p, ep;

    var px, py;
    var dx, dy;

    var ok;

    ok = false;
    while(!ok)
    {
        /* Examine the stack, and generate movers from it */
        for(m = 0; m < level.stack.length; m ++)
        {
            mover = level.stack[m];
            /* Can anything fall into this space? */
            for(i = 0; i < 4; i ++)
            {
                d = enigma_move_order[i];
                px = mover.x - move_x[d];
                py = mover.y - move_y[d];
                p = level_piece(px, py);
                if(p >= PIECE_ARROW_RED_LEFT && p <= PIECE_BOMB_RED_DOWN && (p % 4 == d))
                {
                    if(level_moving(px, py) == MOVE_NONE)
                    {
                        mover_new(px, py, d, p, 1);
                        i = 4;
                    }
                }
            }
        }
        level.stack = [];

        level.oldmovers = level.movers;
        level.movers = [];

        /* Examine the movers, adding new movers to a separate list */
        for(m = 0 ; m < level.oldmovers.length; m ++)
        {
            mover = level.oldmovers[m];

            level_setmoving(mover.x, mover.y, MOVE_NONE);
            level_setprevious(mover.x, mover.y, PIECE_SPACE);
            level_setpreviousmoving(mover.x, mover.y, MOVE_NONE);
            level_setdetonator(mover.x, mover.y, PIECE_SPACE);
            level_setdetonatormoving(mover.x, mover.y, MOVE_NONE);

            p = mover.piece;
            if(p == PIECE_EXPLOSION_RED_HORIZONTAL || p == PIECE_EXPLOSION_RED_VERTICAL)
            {
                mover_new(mover.x, mover.y, MOVE_NONE, PIECE_SPACE, 0);
                mover_addtostack(mover.x, mover.y, MOVE_NONE);
                if(p == PIECE_EXPLOSION_RED_HORIZONTAL)
                {
                    if(mover.x - 1 > 0)
                    {
                        mover_new(mover.x - 1, mover.y, MOVE_NONE, PIECE_SPACE, 0);
                        mover_addtostack(mover.x - 1, mover.y, MOVE_NONE);
                    }
                    if(mover.x + 1 < level.width - 1)
                    {
                        mover_new(mover.x + 1, mover.y, MOVE_NONE, PIECE_SPACE, 0);
                        mover_addtostack(mover.x + 1, mover.y, MOVE_NONE);
                    }
                }
                else
                {
                    if(mover.y - 1 > 0)
                    {
                        mover_new(mover.x, mover.y - 1, MOVE_NONE, PIECE_SPACE, 0);
                        mover_addtostack(mover.x, mover.y - 1, MOVE_NONE);
                    }
                    if(mover.y + 1 < level.height - 1)
                    {
                        mover_new(mover.x, mover.y + 1, MOVE_NONE, PIECE_SPACE, 0);
                        mover_addtostack(mover.x, mover.y + 1, MOVE_NONE);
                    }
                }
            }
            if((p >= PIECE_ARROW_RED_LEFT && p <= PIECE_BOMB_RED_DOWN) || p == PIECE_CIRCLE)
            {
                if(p == PIECE_CIRCLE)
                    d = mover.direction;
                else
                        d = p % 4;
                    dx = mover.x + move_x[d];
                    dy = mover.y + move_y[d];

                    into = level_piece(dx, dy);
                /* Can it detonate something? */
                if(p >= PIECE_ARROW_RED_LEFT && p <= PIECE_ARROW_RED_DOWN && into >= PIECE_BOMB_RED_LEFT && into <= PIECE_BOMB_RED_DOWN && mover.fast && level_moving(dx, dy) == MOVE_NONE)
                {
                    /* Add the central explosion to the stack */
                    mover_new(mover.x, mover.y, d, PIECE_SPACE, 0);
                    level_setprevious(dx, dy, into);
                    level_setdetonator(dx, dy, p);
                    level_setdetonatormoving(dx, dy, d);
                    mover_addtostack(mover.x, mover.y, MOVE_NONE);

                    /* Generate cosmetic side explosions */
                    if(into % 2)
                    {
                        if(dx - 1 > 0)
                        {
                            ep = level_piece(dx - 1, dy);
                            if(ep == PIECE_STAR)
                            {
                                level.stars_exploded ++;
                                level.flags |= LEVELFLAG_STARS;
                            }
                            level_setmoving(dx - 1, dy, MOVE_NONE);
                            mover_new(dx - 1, dy, level_moving(dx - 1, dy), PIECE_EXPLOSION_RED_LEFT, 1);
                            level_setprevious(dx - 1, dy, ep);
                        }
                        if(dx + 1 < level.width - 1)
                        {
                            ep = level_piece(dx + 1, dy);
                            if(ep == PIECE_STAR)
                            {
                                level.stars_exploded ++;
                                level.flags |= LEVELFLAG_STARS;
                            }
                            level_setmoving(dx + 1, dy, MOVE_NONE);
                            mover_new(dx + 1, dy, level_moving(dx + 1, dy), PIECE_EXPLOSION_RED_RIGHT, 0);
                            level_setprevious(dx + 1, dy, ep);
                        }
                        mover_new(dx, dy, MOVE_NONE, PIECE_EXPLOSION_RED_HORIZONTAL, 0);
                    }
                    else
                    {
                        if(dy - 1 > 0)
                        {
                            ep = level_piece(dx, dy - 1);
                            if(ep == PIECE_STAR)
                            {
                                level.stars_exploded ++;
                                level.flags |= LEVELFLAG_STARS;
                            }
                            level_setmoving(dx, dy - 1, MOVE_NONE);
                            mover_new(dx, dy - 1, level_moving(dx, dy - 1), PIECE_EXPLOSION_RED_TOP, 0);
                            level_setprevious(dx, dy - 1, ep);
                        }
                        if(dy + 1 < level.height - 1)
                        {
                            ep = level_piece(dx, dy + 1);
                            if(ep == PIECE_STAR)
                            {
                                level.stars_exploded ++;
                                level.flags |= LEVELFLAG_STARS;
                            }
                            level_setmoving(dx, dy + 1, MOVE_NONE);
                            mover_new(dx, dy + 1, level_moving(dx, dy + 1), PIECE_EXPLOSION_RED_BOTTOM, 0);
                            level_setprevious(dx, dy + 1, ep);
                        }
                        mover_new(dx, dy, MOVE_NONE, PIECE_EXPLOSION_RED_VERTICAL, 0);
                    }
                }
                /* Can it keep moving? */
                else if(into == PIECE_SPACE || ((into == PIECE_DOTS || into == PIECE_PLAYER_ONE) && p != PIECE_CIRCLE && mover.fast == 1))
                {
                    mover_new(dx, dy, d, p, 1);
                    mover_new(mover.x, mover.y, d, PIECE_SPACE, 0);
                    level_setmoving(mover.x, mover.y, MOVE_NONE);
                    mover_addtostack(mover.x, mover.y, MOVE_NONE);
                }
            }
        }

        if(level.movers.length != 0 || level.stack.length == 0)
            ok = true;
    }

    /* Is player one still alive? */
    if(level_piece(level.player_x[0], level.player_y[0]) != PIECE_PLAYER_ONE)
        level.alive[0] = 0;
}

function xor_considerdownmover(x, y)
{
    var p = level_piece(x, y - 1);
    if(p == PIECE_XOR_FISH || p == PIECE_XOR_H_BOMB)
        mover_addtostack(x, y - 1, 0);
}

function xor_considerleftmover(x, y)
{
    var p = level_piece(x + 1, y);
    if(p == PIECE_XOR_CHICKEN || p == PIECE_XOR_V_BOMB)
        mover_addtostack(x + 1, y, 0);
}

function xor_teleport(px, py, dx, dy, move)
{
    var teleport;
    var tx, ty;
    var moveout = MOVE_NONE;

    teleport = -1;
    if(px == level.teleport_x[0] && py == level.teleport_y[0])
        teleport = 0;
    if(px == level.teleport_x[1] && py == level.teleport_y[1])
        teleport = 1;
    if(teleport == -1)
        return [false, dx, dy, move];

    tx = level.teleport_x[1 - teleport];
    ty = level.teleport_y[1 - teleport];

    /* If the other teleport has been destroyed, turn this one into a wall */
    if(level_piece(tx, ty) != PIECE_TELEPORT)
    {
        mover_new(level.teleport_x[teleport], level.teleport_y[teleport], MOVE_NONE, PIECE_WALL, 0);
        return [false, dx, dy, move];
    }

    if(level_piece(tx + 1, ty) == PIECE_SPACE)
    {
        dx = tx + 1;
        dy = ty;
        moveout = MOVE_RIGHT;
    }
    else if(level_piece(tx, ty - 1) == PIECE_SPACE)
    {
        dx = tx;
        dy = ty - 1;
        moveout = MOVE_UP;
    }
    else if(level_piece(tx - 1, ty) == PIECE_SPACE)
    {
        dx = tx - 1;
        dy = ty;
        moveout = MOVE_LEFT;
    }
    else if(level_piece(tx, ty + 1) == PIECE_SPACE)
    {
        dx = tx;
        dy = ty + 1;
        moveout = MOVE_DOWN;
    }

    if(moveout != MOVE_NONE)
    {
        /* Visual effects for the player moving in to the teleport */
        /* Store original player move direction in cosmetic mover */
        mover_new(px, py, move, PIECE_TELEPORT, 0);
        level_setprevious(px, py, PIECE_PLAYER_ONE + level.player);
        level_setpreviousmoving(px, py, move);

        /* Visual effects for the player moving out of the teleport */
        mover_new(tx, ty, MOVE_NONE, PIECE_TELEPORT, 0);

        /* Change move to produce the effect of coming out of the teleport */
        move = moveout;

        level.view_x[level.player] = level.view_teleport_x[1 - teleport];
        level.view_y[level.player] = level.view_teleport_y[1 - teleport];

        return [true, dx, dy, move];
    }

    return [false, dx, dy, move];
}

function xor_explode(x, y, type, previous)
{
    var p = level_piece(x, y);

    if(p == PIECE_SWITCH)
    {
        level.switched = 1 - level.switched;
        level.flags |= LEVELFLAG_SWITCH;
    }
    if(p == PIECE_XOR_MASK)
    {
        level.stars_exploded ++;
        level.flags |= LEVELFLAG_STARS;
    }

    /* Don't explode edge walls */
    if(x == 0 || y == 0 || x == level.width - 1 || y == level.height - 1)
        return;

    if(previous != MOVE_NONE)
    {
        mover_new(x, y, previous, PIECE_GONE, 0);
        level_setpiece(x, y, PIECE_SPACE);
    }
    mover_new(x, y, MOVE_NONE, type, 0);
    if(previous == MOVE_NONE)
        level_setprevious(x, y, p);
}

function xor_move(move)
{
    var p;
    var px, py;
    var dx, dy;
    var ox, oy;
    var into;
    var bp;

    if(!level.alive[level.player])
        return false

    px = level.player_x[level.player];
    py = level.player_y[level.player];

    if(move == MOVE_LEFT)
    {
        dx = px - 1;
        dy = py;

        ox = px - 2;
        oy = py;

        p = level_piece(dx, dy);
        if(p == PIECE_WALL || p == PIECE_XOR_MAGUS || p == PIECE_XOR_QUESTOR)
            return false;
        if(p == PIECE_DOOR)
        {
            if(level.stars_caught == level.stars_total)
                level.flags |= LEVELFLAG_EXIT;
            else
                return false;
        }
        if(p == PIECE_XOR_WAVES || p == PIECE_XOR_CHICKEN || p == PIECE_XOR_V_BOMB)
            return false;
        if(p == PIECE_XOR_FISH || p == PIECE_XOR_H_BOMB)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE || into == PIECE_XOR_DOTS)
            {
                mover_new(ox, oy, MOVE_LEFT, p, 0);
                bp = level_piece(ox, oy + 1);
                if(bp == PIECE_SPACE || bp == PIECE_XOR_WAVES)
                    mover_addtostack(ox, oy, 0);
            }
            else
                return false;
        }
        if(p == PIECE_TELEPORT)
        {
            var a = xor_teleport(px - 1, py, dx, dy, move);
            if(!a[0])
                return false;
            dx = a[1]; dy = a[2]; move = a[3];
        }
        if(p == PIECE_XOR_MASK)
        {
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
        }
        if(p == PIECE_SWITCH)
        {
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
        }
        if(p == PIECE_MAP_TOP_LEFT)
        {
            level.mapped |= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_TOP_RIGHT)
        {
            level.mapped |= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_LEFT)
        {
            level.mapped |= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_RIGHT)
        {
            level.mapped |= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_XOR_DOLL)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE)
            {
                mover_new(ox, oy, MOVE_LEFT, p, 0);
                if(level_piece(ox - 1, oy) == PIECE_SPACE)
                    mover_addtostack(ox, oy, MOVE_LEFT);
            }
            else
                return false;
        }

        level.player_x[level.player] = dx;
        level.player_y[level.player] = dy;

        mover_new(dx, dy, move, PIECE_XOR_MAGUS + level.player, 0);
        mover_new(px, py, move, PIECE_SPACE, 0);

        if(level.flags & LEVELFLAG_EXIT)
            return true;

        xor_considerdownmover(px, py);
        xor_considerleftmover(px, py);

        return true;
    }

    if(move == MOVE_RIGHT)
    {
        dx = px + 1;
        dy = py;

        ox = px + 2;
        oy = py;

        p = level_piece(dx, dy);
        if(p == PIECE_WALL || p == PIECE_XOR_MAGUS || p == PIECE_XOR_QUESTOR)
            return false;
        if(p == PIECE_DOOR)
        {
            if(level.stars_caught == level.stars_total)
                level.flags |= LEVELFLAG_EXIT;
            else
                return false;
        }
        if(p == PIECE_XOR_WAVES || p == PIECE_XOR_CHICKEN || p == PIECE_XOR_V_BOMB)
            return false;
        if(p == PIECE_XOR_FISH || p == PIECE_XOR_H_BOMB)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE || into == PIECE_XOR_DOTS)
            {
                mover_new(ox, oy, MOVE_RIGHT, p, 0);
                bp = level_piece(ox, oy + 1);
                if(bp == PIECE_SPACE || bp == PIECE_XOR_WAVES)
                    mover_addtostack(ox, oy, 0);
            }
            else
                return false;
        }
        if(p == PIECE_TELEPORT)
        {
            var a = xor_teleport(px + 1, py, dx, dy, move);
            if(!a[0])
                return false;
            dx = a[1]; dy = a[2]; move = a[3];
        }
        if(p == PIECE_XOR_MASK)
        {
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
        }
        if(p == PIECE_SWITCH)
        {
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
        }
        if(p == PIECE_MAP_TOP_LEFT)
        {
            level.mapped |= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_TOP_RIGHT)
        {
            level.mapped |= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_LEFT)
        {
            level.mapped |= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_RIGHT)
        {
            level.mapped |= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_XOR_DOLL)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE)
            {
                mover_new(ox, oy, MOVE_RIGHT, p, 0);
                if(level_piece(ox + 1, oy) == PIECE_SPACE)
                    mover_addtostack(ox, oy, MOVE_RIGHT);
            }
            else
                return false
        }

        level.player_x[level.player] = dx;
        level.player_y[level.player] = dy;

        mover_new(dx, dy, move, PIECE_XOR_MAGUS + level.player, 0);
        mover_new(px, py, move, PIECE_SPACE, 0);

        if(level.flags & LEVELFLAG_EXIT)
            return true;

        xor_considerdownmover(px, py);

        return true;
    }

    if(move == MOVE_UP)
    {
        dx = px;
        dy = py - 1;

        ox = px;
        oy = py - 2;

        p = level_piece(dx, dy);
        if(p == PIECE_WALL || p == PIECE_XOR_MAGUS || p == PIECE_XOR_QUESTOR)
            return false;
        if(p == PIECE_DOOR)
        {
                if(level.stars_caught == level.stars_total)
                level.flags |= LEVELFLAG_EXIT;
            else
            return false;
        }
        if(p == PIECE_XOR_DOTS || p == PIECE_XOR_FISH || p == PIECE_XOR_H_BOMB)
            return false;
        if(p == PIECE_XOR_CHICKEN || p == PIECE_XOR_V_BOMB)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE || into == PIECE_XOR_WAVES)
            {
                mover_new(ox, oy, MOVE_UP, p, 0);
                bp = level_piece(ox - 1, oy);
                if(bp == PIECE_SPACE || bp == PIECE_XOR_DOTS)
                    mover_addtostack(ox, oy, 0);
            }
            else
                return false;
        }
        if(p == PIECE_TELEPORT)
        {
            var a = xor_teleport(px, py - 1, dx, dy, move);
            if(!a[0])
                return false;
            dx = a[1]; dy = a[2]; move = a[3];
        }
        if(p == PIECE_XOR_MASK)
        {
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
        }
        if(p == PIECE_SWITCH)
        {
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
        }
        if(p == PIECE_MAP_TOP_LEFT)
        {
            level.mapped |= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_TOP_RIGHT)
        {
            level.mapped |= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_LEFT)
        {
            level.mapped |= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_RIGHT)
        {
            level.mapped |= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_XOR_DOLL)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE)
            {
                mover_new(ox, oy, MOVE_UP, p, 0);
                if(level_piece(ox, oy - 1) == PIECE_SPACE)
                    mover_addtostack(ox, oy, MOVE_UP);
            }
            else
                return false
        }

        level.player_x[level.player] = dx;
        level.player_y[level.player] = dy;

        mover_new(dx, dy, move, PIECE_XOR_MAGUS + level.player, 0);
        mover_new(px, py, move, PIECE_SPACE, 0);

        if(level.flags & LEVELFLAG_EXIT)
            return true;

        xor_considerleftmover(px, py);

        return true;
    }

    if(move == MOVE_DOWN)
    {
        dx = px;
        dy = py + 1;

        ox = px;
        oy = py + 2;

        p = level_piece(dx, dy);
        if(p == PIECE_WALL || p == PIECE_XOR_MAGUS || p == PIECE_XOR_QUESTOR)
            return false;
        if(p == PIECE_DOOR)
        {
            if(level.stars_caught == level.stars_total)
                level.flags |= LEVELFLAG_EXIT;
            else
                return false;
        }
        if(p == PIECE_XOR_DOTS || p == PIECE_XOR_FISH || p == PIECE_XOR_H_BOMB)
            return false;
        if(p == PIECE_XOR_CHICKEN || p == PIECE_XOR_V_BOMB)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE || into == PIECE_XOR_WAVES)
            {
                mover_new(ox, oy, MOVE_DOWN, p, 0);
                bp = level_piece(ox - 1, oy);
                if(bp == PIECE_SPACE || bp == PIECE_XOR_DOTS)
                    mover_addtostack(ox, oy, 0);
            }
            else
                return false;
        }
        if(p == PIECE_TELEPORT)
        {
            var a = xor_teleport(px, py + 1, dx, dy, move);
            if(!a[0])
                return false;
            dx = a[1]; dy = a[2]; move = a[3];
        }
        if(p == PIECE_XOR_MASK)
        {
            level.stars_caught ++;
            level.flags |= LEVELFLAG_STARS;
        }
        if(p == PIECE_SWITCH)
        {
            level.switched = 1 - level.switched;
            level.flags |= LEVELFLAG_SWITCH;
        }
        if(p == PIECE_MAP_TOP_LEFT)
        {
            level.mapped |= MAPPED_TOP_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_TOP_RIGHT)
        {
            level.mapped |= MAPPED_TOP_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_LEFT)
        {
            level.mapped |= MAPPED_BOTTOM_LEFT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_MAP_BOTTOM_RIGHT)
        {
            level.mapped |= MAPPED_BOTTOM_RIGHT;
            level.flags |= LEVELFLAG_MAP;
        }
        if(p == PIECE_XOR_DOLL)
        {
            into = level_piece(ox, oy);
            if(into == PIECE_SPACE)
            {
                mover_new(ox, oy, MOVE_DOWN, p, 0);
                if(level_piece(ox, oy + 1) == PIECE_SPACE)
                    mover_addtostack(ox, oy, MOVE_DOWN);
            }
            else
                return false;
        }

        level.player_x[level.player] = dx;
        level.player_y[level.player] = dy;

        mover_new(dx, dy, move, PIECE_XOR_MAGUS + level.player, 0);
        mover_new(px, py, move, PIECE_SPACE, 0);

        if(level.flags & LEVELFLAG_EXIT)
            return true;

        xor_considerleftmover(px, py);
        xor_considerdownmover(px, py);

        return true;
    }

    return false;
}

function xor_evolve()
{
    var mp;
    var into;
    var np;

    var d;

    var px, py;

    level.oldmovers = level.movers;
    level.movers = [];

    for(m = 0; m < level.oldmovers.length; m ++)
    {
        mover = level.oldmovers[m];

        if(isexplosion(mover.piece))
            mover_new(mover.x, mover.y, MOVE_NONE, PIECE_SPACE, 0);

        level_setmoving(mover.x, mover.y, MOVE_NONE);
        level_setprevious(mover.x, mover.y, PIECE_SPACE);
        level_setpreviousmoving(mover.x, mover.y, MOVE_NONE);
        level_setdetonator(mover.x, mover.y, PIECE_SPACE);
        level_setdetonatormoving(mover.x, mover.y, MOVE_NONE);

        if(isexplosion(mover.piece))
            level_setprevious(mover.x, mover.y, mover.piece);

        /* Update the map */
        display_map_piece(mover.x, mover.y);
    }

    while(level.movers.length == 0 && level.stack.length != 0)
    {
        mover = level.stack[0];

        px = mover.x;
        py = mover.y;

        mp = level_piece(px, py);

        if(mp == PIECE_XOR_FISH || mp == PIECE_XOR_H_BOMB)
        {
            into = level_piece(px, py + 1);
            if(into == PIECE_SPACE || into == PIECE_XOR_WAVES || into == PIECE_XOR_MAGUS || into == PIECE_XOR_QUESTOR)
            {
                xor_considerdownmover(px, py);
                xor_considerleftmover(px, py);

                np = level_piece(px, py + 2);
                if(np == PIECE_SPACE || np == PIECE_XOR_WAVES || np == PIECE_XOR_MAGUS || np == PIECE_XOR_QUESTOR || np == PIECE_XOR_V_BOMB || np == PIECE_XOR_H_BOMB)
                    mover_addtostack(px, py + 1, MOVE_NONE);

                mover_new(px, py + 1, MOVE_DOWN, mp, 0);
                mover_new(px, py, MOVE_DOWN, PIECE_SPACE, 0);

            }
            if(into == PIECE_XOR_H_BOMB)
            {
                /* BBC XOR does *not* considerleftmover(px, py) */
                xor_considerdownmover(px, py);
                xor_considerdownmover(px - 1, py + 1);
                xor_considerdownmover(px + 1, py + 1);
                xor_considerleftmover(px + 1, py + 1);

                mover_new(px, py, MOVE_DOWN, PIECE_SPACE, 0);
                level_setdetonator(px, py + 1, mp);
                level_setdetonatormoving(px, py + 1, MOVE_DOWN);

                xor_explode(px - 1, py + 1, PIECE_EXPLOSION_RED_LEFT, MOVE_NONE);
                xor_explode(px, py + 1, PIECE_EXPLOSION_RED_HORIZONTAL, MOVE_NONE);
                xor_explode(px + 1, py + 1, PIECE_EXPLOSION_RED_RIGHT, MOVE_NONE);
            }
            if(into == PIECE_XOR_V_BOMB)
            {
                xor_considerdownmover(px, py);
                xor_considerleftmover(px, py);
                xor_considerleftmover(px, py + 1);
                xor_considerleftmover(px, py + 2);

                level_setdetonator(px, py + 1, mp);
                level_setdetonatormoving(px, py + 1, MOVE_DOWN);

                xor_explode(px, py + 0, PIECE_EXPLOSION_RED_TOP, MOVE_DOWN);
                xor_explode(px, py + 1, PIECE_EXPLOSION_RED_VERTICAL, MOVE_NONE);
                xor_explode(px, py + 2, PIECE_EXPLOSION_RED_BOTTOM, MOVE_NONE);
            }
        }

        if(mp == PIECE_XOR_CHICKEN || mp == PIECE_XOR_V_BOMB)
        {
            into = level_piece(px - 1, py);
            if(into == PIECE_SPACE || into == PIECE_XOR_DOTS || into == PIECE_XOR_MAGUS || into == PIECE_XOR_QUESTOR)
            {
                xor_considerleftmover(px, py);
                xor_considerdownmover(px, py);

                np = level_piece(px - 2, py);
                if(np == PIECE_SPACE || np == PIECE_XOR_DOTS || np == PIECE_XOR_MAGUS || np == PIECE_XOR_QUESTOR || np == PIECE_XOR_V_BOMB || np == PIECE_XOR_H_BOMB)
                    mover_addtostack(px - 1, py, MOVE_NONE);

                mover_new(px - 1, py, MOVE_LEFT, mp, 0);
                mover_new(px, py, MOVE_LEFT, PIECE_SPACE, 0);

            }
            if(into == PIECE_XOR_H_BOMB)
            {
                xor_considerleftmover(px, py);
                xor_considerdownmover(px, py);
                xor_considerdownmover(px - 1, py);
                xor_considerdownmover(px - 2, py);

                level_setdetonator(px - 1, py, mp);
                level_setdetonatormoving(px - 1, py, MOVE_LEFT);

                xor_explode(px - 2, py, PIECE_EXPLOSION_RED_LEFT, MOVE_NONE);
                xor_explode(px - 1, py, PIECE_EXPLOSION_RED_HORIZONTAL, MOVE_NONE);
                xor_explode(px, py, PIECE_EXPLOSION_RED_RIGHT, MOVE_LEFT);
            }
            if(into == PIECE_XOR_V_BOMB)
            {
                xor_considerleftmover(px, py);
                xor_considerdownmover(px, py);
                xor_considerleftmover(px - 1, py + 1);
                xor_considerleftmover(px - 1, py - 1);
                xor_considerdownmover(px - 1, py - 1);

                mover_new(px, py, MOVE_LEFT, PIECE_SPACE, 0);
                level_setdetonator(px - 1, py, mp);
                level_setdetonatormoving(px - 1, py, MOVE_LEFT);

                xor_explode(px - 1, py - 1, PIECE_EXPLOSION_RED_TOP, MOVE_NONE);
                xor_explode(px - 1, py, PIECE_EXPLOSION_RED_VERTICAL, MOVE_NONE);
                xor_explode(px - 1, py + 1, PIECE_EXPLOSION_RED_BOTTOM, MOVE_NONE);
            }
        }

        if(mp == PIECE_XOR_DOLL)
        {
            d = mover.direction;

            into = level_piece(px + move_x[d], py + move_y[d]);
            if(into == PIECE_SPACE)
            {
                np = level_piece(px + 2 * move_x[d], py + 2 * move_y[d]);
                if(np == PIECE_SPACE)
                mover_addtostack(px + move_x[d], py + move_y[d], d);

                mover_new(px + move_x[d], py + move_y[d], d, PIECE_XOR_DOLL, 0);
                mover_new(px, py, d, PIECE_SPACE, 0);
            }
        }

        level.stack.shift();
    }

    /* Is player one still alive? */
    if(level_piece(level.player_x[0], level.player_y[0]) != PIECE_PLAYER_ONE)
        level.alive[0] = false;

    /* Is player two still alive? */
    if(level_piece(level.player_x[1], level.player_y[1]) != PIECE_PLAYER_TWO)
        level.alive[1] = false;

    /* If a player has died, swap to the other player at the end of the move */
    if(level.alive[level.player] == 0 && level.stack.length == 0)
    {
        if(level.alive[1 - level.player])
        {
            level.player = 1 - level.player;

            /* Cosmetic mover for the newly swapped in player */
            mover_new(level.player_x[level.player], level.player_y[level.player], MOVE_SWAP, PIECE_PLAYER_ONE +  level.player, 0);
        }

        /* Force a check for whether a redraw is needed */
        return true;
    }

    return false;
}

function xor_focus()
{
    if(level.player_x[level.player] <= level.view_x[level.player])
        level.view_x[level.player] = level.player_x[level.player] - 1;
    if(level.player_x[level.player] >= level.view_x[level.player] + 7)
        level.view_x[level.player] = level.player_x[level.player] - 6;
    if(level.player_y[level.player] <= level.view_y[level.player])
        level.view_y[level.player] = level.player_y[level.player] - 1;
    if(level.player_y[level.player] >= level.view_y[level.player] + 7)
        level.view_y[level.player] = level.player_y[level.player] - 6;
}

