import { NextResponse, NextRequest } from 'next/server';

const itemList = [
    {
        "itemID": 0,
        "name": "Blank",
        "rarity": 1
      },
      {
        "itemID": 1,
        "name": "Blank Seed",
        "rarity": 1
      },
      {
        "itemID": 2,
        "name": "Dirt",
        "rarity": 1
      },
      {
        "itemID": 3,
        "name": "Dirt Seed",
        "rarity": 1
      },
      {
        "itemID": 4,
        "name": "Lava",
        "rarity": 1
      },
      {
        "itemID": 5,
        "name": "Lava Seed",
        "rarity": 1
      },
      {
        "itemID": 6,
        "name": "Main Door",
        "rarity": 1
      },
      {
        "itemID": 7,
        "name": "Main Door Seed",
        "rarity": 1
      },
      {
        "itemID": 8,
        "name": "Bedrock",
        "rarity": 1
      },
      {
        "itemID": 9,
        "name": "Bedrock Seed",
        "rarity": 1
      },
      {
        "itemID": 10,
        "name": "Rock",
        "rarity": 1
      },
      {
        "itemID": 11,
        "name": "Rock Seed",
        "rarity": 1
      },
      {
        "itemID": 12,
        "name": "Door",
        "rarity": 2
      },
      {
        "itemID": 13,
        "name": "Door Seed",
        "rarity": 2
      },
      {
        "itemID": 14,
        "name": "Cave Background",
        "rarity": 1
      },
      {
        "itemID": 15,
        "name": "Cave Background Seed",
        "rarity": 1
      },
      {
        "itemID": 16,
        "name": "Grass",
        "rarity": 2
      },
      {
        "itemID": 17,
        "name": "Grass Seed",
        "rarity": 2
      },
      {
        "itemID": 18,
        "name": "Fist",
        "rarity": 999
      },
      {
        "itemID": 19,
        "name": "Fist Seed",
        "rarity": 999
      },
      {
        "itemID": 20,
        "name": "Sign",
        "rarity": 2
      },
      {
        "itemID": 21,
        "name": "Sign Seed",
        "rarity": 2
      },
      {
        "itemID": 22,
        "name": "Daisy",
        "rarity": 3
      },
      {
        "itemID": 23,
        "name": "Daisy Seed",
        "rarity": 3
      },
      {
        "itemID": 24,
        "name": "Pointy Sign",
        "rarity": 4
      },
      {
        "itemID": 25,
        "name": "Pointy Sign Seed",
        "rarity": 4
      },
      {
        "itemID": 26,
        "name": "Crappy Sign",
        "rarity": 3
      },
      {
        "itemID": 27,
        "name": "Crappy Sign Seed",
        "rarity": 3
      },
      {
        "itemID": 28,
        "name": "Danger Sign",
        "rarity": 5
      },
      {
        "itemID": 29,
        "name": "Danger Sign Seed",
        "rarity": 5
      },
      {
        "itemID": 30,
        "name": "Dungeon Door",
        "rarity": 8
      },
      {
        "itemID": 31,
        "name": "Dungeon Door Seed",
        "rarity": 8
      },
      {
        "itemID": 32,
        "name": "Wrench",
        "rarity": 999
      },
      {
        "itemID": 33,
        "name": "Wrench Seed",
        "rarity": 999
      },
      {
        "itemID": 34,
        "name": "Shades",
        "rarity": 6
      },
      {
        "itemID": 35,
        "name": "Shades Seed",
        "rarity": 6
      },
      {
        "itemID": 36,
        "name": "Green Shirt",
        "rarity": 7
      },
      {
        "itemID": 37,
        "name": "Green Shirt Seed",
        "rarity": 7
      },
      {
        "itemID": 38,
        "name": "Tuxedo",
        "rarity": 7
      },
      {
        "itemID": 39,
        "name": "Tuxedo Seed",
        "rarity": 7
      },
      {
        "itemID": 40,
        "name": "Brown Shoes",
        "rarity": 5
      },
      {
        "itemID": 41,
        "name": "Brown Shoes Seed",
        "rarity": 5
      },
      {
        "itemID": 42,
        "name": "Boots",
        "rarity": 5
      },
      {
        "itemID": 43,
        "name": "Boots Seed",
        "rarity": 5
      },
      {
        "itemID": 44,
        "name": "Red Hair",
        "rarity": 6
      },
      {
        "itemID": 45,
        "name": "Red Hair Seed",
        "rarity": 6
      },
      {
        "itemID": 46,
        "name": "Baseball Cap",
        "rarity": 13
      },
      {
        "itemID": 47,
        "name": "Baseball Cap Seed",
        "rarity": 13
      },
      {
        "itemID": 48,
        "name": "Jeans",
        "rarity": 6
      },
      {
        "itemID": 49,
        "name": "Jeans Seed",
        "rarity": 6
      },
      {
        "itemID": 50,
        "name": "Sexy Boxers",
        "rarity": 18
      },
      {
        "itemID": 51,
        "name": "Sexy Boxers Seed",
        "rarity": 18
      },
      {
        "itemID": 52,
        "name": "Wooden Background",
        "rarity": 4
      },
      {
        "itemID": 53,
        "name": "Wooden Background Seed",
        "rarity": 4
      },
      {
        "itemID": 54,
        "name": "Window",
        "rarity": 6
      },
      {
        "itemID": 55,
        "name": "Window Seed",
        "rarity": 6
      },
      {
        "itemID": 56,
        "name": "Glass Pane",
        "rarity": 2
      },
      {
        "itemID": 57,
        "name": "Glass Pane Seed",
        "rarity": 2
      },
      {
        "itemID": 58,
        "name": "Wooden Window",
        "rarity": 10
      },
      {
        "itemID": 59,
        "name": "Wooden Window Seed",
        "rarity": 10
      },
      {
        "itemID": 60,
        "name": "Portcullis",
        "rarity": 16
      },
      {
        "itemID": 61,
        "name": "Portcullis Seed",
        "rarity": 16
      },
      {
        "itemID": 62,
        "name": "Boombox",
        "rarity": 39
      },
      {
        "itemID": 63,
        "name": "Boombox Seed",
        "rarity": 39
      },
      {
        "itemID": 64,
        "name": "Olde Timey Radio",
        "rarity": 15
      },
      {
        "itemID": 65,
        "name": "Olde Timey Radio Seed",
        "rarity": 15
      },
      {
        "itemID": 66,
        "name": "Top Hat",
        "rarity": 7
      },
      {
        "itemID": 67,
        "name": "Top Hat Seed",
        "rarity": 7
      },
      {
        "itemID": 68,
        "name": "Brown Hair",
        "rarity": 5
      },
      {
        "itemID": 69,
        "name": "Brown Hair Seed",
        "rarity": 5
      },
      {
        "itemID": 70,
        "name": "Spikey Hair",
        "rarity": 14
      },
      {
        "itemID": 71,
        "name": "Spikey Hair Seed",
        "rarity": 14
      },
      {
        "itemID": 72,
        "name": "Afro",
        "rarity": 13
      },
      {
        "itemID": 73,
        "name": "Afro Seed",
        "rarity": 13
      },
      {
        "itemID": 74,
        "name": "Ski Cap",
        "rarity": 18
      },
      {
        "itemID": 75,
        "name": "Ski Cap Seed",
        "rarity": 18
      },
      {
        "itemID": 76,
        "name": "Black Pants",
        "rarity": 6
      },
      {
        "itemID": 77,
        "name": "Black Pants Seed",
        "rarity": 6
      },
      {
        "itemID": 78,
        "name": "Patent Leather Shoes",
        "rarity": 11
      },
      {
        "itemID": 79,
        "name": "Patent Leather Shoes Seed",
        "rarity": 11
      },
      {
        "itemID": 80,
        "name": "Ruby Slippers",
        "rarity": 49
      },
      {
        "itemID": 81,
        "name": "Ruby Slippers Seed",
        "rarity": 49
      },
      {
        "itemID": 82,
        "name": "Green Skirt",
        "rarity": 11
      },
      {
        "itemID": 83,
        "name": "Green Skirt Seed",
        "rarity": 11
      },
      {
        "itemID": 84,
        "name": "Green Blouse",
        "rarity": 14
      },
      {
        "itemID": 85,
        "name": "Green Blouse Seed",
        "rarity": 14
      },
      {
        "itemID": 86,
        "name": "Purple Thong",
        "rarity": 24
      },
      {
        "itemID": 87,
        "name": "Purple Thong Seed",
        "rarity": 24
      },
      {
        "itemID": 88,
        "name": "Purple Bikini Top",
        "rarity": 22
      },
      {
        "itemID": 89,
        "name": "Purple Bikini Top Seed",
        "rarity": 22
      },
      {
        "itemID": 90,
        "name": "Blonde Bombshell",
        "rarity": 8
      },
      {
        "itemID": 91,
        "name": "Blonde Bombshell Seed",
        "rarity": 8
      },
      {
        "itemID": 92,
        "name": "Briefcase",
        "rarity": 14
      },
      {
        "itemID": 93,
        "name": "Briefcase Seed",
        "rarity": 14
      },
      {
        "itemID": 94,
        "name": "Sword",
        "rarity": 11
      },
      {
        "itemID": 95,
        "name": "Sword Seed",
        "rarity": 11
      },
      {
        "itemID": 96,
        "name": "Just One Boxing Glove",
        "rarity": 16
      },
      {
        "itemID": 97,
        "name": "Just One Boxing Glove Seed",
        "rarity": 16
      },
      {
        "itemID": 98,
        "name": "Pickaxe",
        "rarity": 17
      },
      {
        "itemID": 99,
        "name": "Pickaxe Seed",
        "rarity": 17
      },
      {
        "itemID": 100,
        "name": "Wood Block",
        "rarity": 2
      },
      {
        "itemID": 101,
        "name": "Wood Block Seed",
        "rarity": 2
      },
      {
        "itemID": 102,
        "name": "Wooden Platform",
        "rarity": 4
      },
      {
        "itemID": 103,
        "name": "Wooden Platform Seed",
        "rarity": 4
      },
      {
        "itemID": 104,
        "name": "Rock Background",
        "rarity": 3
      },
      {
        "itemID": 105,
        "name": "Rock Background Seed",
        "rarity": 3
      },
      {
        "itemID": 106,
        "name": "Toilet",
        "rarity": 7
      },
      {
        "itemID": 107,
        "name": "Toilet Seed",
        "rarity": 7
      },
      {
        "itemID": 108,
        "name": "Painting: Yerfdog",
        "rarity": 10
      },
      {
        "itemID": 109,
        "name": "Painting: Yerfdog Seed",
        "rarity": 10
      },
      {
        "itemID": 110,
        "name": "Painting: Dink Duck",
        "rarity": 10
      },
      {
        "itemID": 111,
        "name": "Painting: Dink Duck Seed",
        "rarity": 10
      },
      {
        "itemID": 112,
        "name": "Gems",
        "rarity": 999
      },
      {
        "itemID": 113,
        "name": "Gems Seed",
        "rarity": 999
      },
      {
        "itemID": 114,
        "name": "Disco Ball",
        "rarity": 45
      },
      {
        "itemID": 115,
        "name": "Disco Ball Seed",
        "rarity": 45
      },
      {
        "itemID": 116,
        "name": "Bricks",
        "rarity": 3
      },
      {
        "itemID": 117,
        "name": "Bricks Seed",
        "rarity": 3
      },
      {
        "itemID": 118,
        "name": "Brick Background",
        "rarity": 7
      },
      {
        "itemID": 119,
        "name": "Brick Background Seed",
        "rarity": 7
      },
      {
        "itemID": 120,
        "name": "Mystery Block",
        "rarity": 80
      },
      {
        "itemID": 121,
        "name": "Mystery Block Seed",
        "rarity": 80
      },
      {
        "itemID": 122,
        "name": "Red Riding Hood",
        "rarity": 7
      },
      {
        "itemID": 123,
        "name": "Red Riding Hood Seed",
        "rarity": 7
      },
      {
        "itemID": 124,
        "name": "Red Coat",
        "rarity": 13
      },
      {
        "itemID": 125,
        "name": "Red Coat Seed",
        "rarity": 13
      },
      {
        "itemID": 126,
        "name": "Devil Horns",
        "rarity": 9
      },
      {
        "itemID": 127,
        "name": "Devil Horns Seed",
        "rarity": 9
      },
      {
        "itemID": 128,
        "name": "Golden Halo",
        "rarity": 51
      },
      {
        "itemID": 129,
        "name": "Golden Halo Seed",
        "rarity": 51
      },
      {
        "itemID": 130,
        "name": "Hot Head",
        "rarity": 5
      },
      {
        "itemID": 131,
        "name": "Hot Head Seed",
        "rarity": 5
      },
      {
        "itemID": 132,
        "name": "Brainwave Capacitor",
        "rarity": 21
      },
      {
        "itemID": 133,
        "name": "Brainwave Capacitor Seed",
        "rarity": 21
      },
      {
        "itemID": 134,
        "name": "TV Head",
        "rarity": 17
      },
      {
        "itemID": 135,
        "name": "TV Head Seed",
        "rarity": 17
      },
      {
        "itemID": 136,
        "name": "Fairy Crown",
        "rarity": 47
      },
      {
        "itemID": 137,
        "name": "Fairy Crown Seed",
        "rarity": 47
      },
      {
        "itemID": 138,
        "name": "Cyclopean Visor",
        "rarity": 10
      },
      {
        "itemID": 139,
        "name": "Cyclopean Visor Seed",
        "rarity": 10
      },
      {
        "itemID": 140,
        "name": "Biker Stache",
        "rarity": 6
      },
      {
        "itemID": 141,
        "name": "Biker Stache Seed",
        "rarity": 6
      },
      {
        "itemID": 142,
        "name": "Shallot Mustache",
        "rarity": 5
      },
      {
        "itemID": 143,
        "name": "Shallot Mustache Seed",
        "rarity": 5
      },
      {
        "itemID": 144,
        "name": "X-Ray Specs",
        "rarity": 8
      },
      {
        "itemID": 145,
        "name": "X-Ray Specs Seed",
        "rarity": 8
      },
      {
        "itemID": 146,
        "name": "Gold-Rimmed Glasses",
        "rarity": 12
      },
      {
        "itemID": 147,
        "name": "Gold-Rimmed Glasses Seed",
        "rarity": 12
      },
      {
        "itemID": 148,
        "name": "Big Glasses",
        "rarity": 16
      },
      {
        "itemID": 149,
        "name": "Big Glasses Seed",
        "rarity": 16
      },
      {
        "itemID": 150,
        "name": "Fairy Dress",
        "rarity": 50
      },
      {
        "itemID": 151,
        "name": "Fairy Dress Seed",
        "rarity": 50
      },
      {
        "itemID": 152,
        "name": "Fairy Skirt",
        "rarity": 48
      },
      {
        "itemID": 153,
        "name": "Fairy Skirt Seed",
        "rarity": 48
      },
      {
        "itemID": 154,
        "name": "Fairy Slippers",
        "rarity": 51
      },
      {
        "itemID": 155,
        "name": "Fairy Slippers Seed",
        "rarity": 51
      },
      {
        "itemID": 156,
        "name": "Fairy Wings",
        "rarity": 52
      },
      {
        "itemID": 157,
        "name": "Fairy Wings Seed",
        "rarity": 52
      },
      {
        "itemID": 158,
        "name": "Fairy Wand",
        "rarity": 47
      },
      {
        "itemID": 159,
        "name": "Fairy Wand Seed",
        "rarity": 47
      },
      {
        "itemID": 160,
        "name": "Jetpack",
        "rarity": 36
      },
      {
        "itemID": 161,
        "name": "Jetpack Seed",
        "rarity": 36
      },
      {
        "itemID": 162,
        "name": "Death Spikes",
        "rarity": 8
      },
      {
        "itemID": 163,
        "name": "Death Spikes Seed",
        "rarity": 8
      },
      {
        "itemID": 164,
        "name": "Grey Block",
        "rarity": 4
      },
      {
        "itemID": 165,
        "name": "Grey Block Seed",
        "rarity": 4
      },
      {
        "itemID": 166,
        "name": "Black Block",
        "rarity": 4
      },
      {
        "itemID": 167,
        "name": "Black Block Seed",
        "rarity": 4
      },
      {
        "itemID": 168,
        "name": "White Block",
        "rarity": 6
      },
      {
        "itemID": 169,
        "name": "White Block Seed",
        "rarity": 6
      },
      {
        "itemID": 170,
        "name": "Red Block",
        "rarity": 4
      },
      {
        "itemID": 171,
        "name": "Red Block Seed",
        "rarity": 4
      },
      {
        "itemID": 172,
        "name": "Orange Block",
        "rarity": 9
      },
      {
        "itemID": 173,
        "name": "Orange Block Seed",
        "rarity": 9
      },
      {
        "itemID": 174,
        "name": "Yellow Block",
        "rarity": 6
      },
      {
        "itemID": 175,
        "name": "Yellow Block Seed",
        "rarity": 6
      },
      {
        "itemID": 176,
        "name": "Green Block",
        "rarity": 5
      },
      {
        "itemID": 177,
        "name": "Green Block Seed",
        "rarity": 5
      },
      {
        "itemID": 178,
        "name": "Aqua Block",
        "rarity": 5
      },
      {
        "itemID": 179,
        "name": "Aqua Block Seed",
        "rarity": 5
      },
      {
        "itemID": 180,
        "name": "Blue Block",
        "rarity": 15
      },
      {
        "itemID": 181,
        "name": "Blue Block Seed",
        "rarity": 15
      },
      {
        "itemID": 182,
        "name": "Purple Block",
        "rarity": 19
      },
      {
        "itemID": 183,
        "name": "Purple Block Seed",
        "rarity": 19
      },
      {
        "itemID": 184,
        "name": "Brown Block",
        "rarity": 4
      },
      {
        "itemID": 185,
        "name": "Brown Block Seed",
        "rarity": 4
      },
      {
        "itemID": 186,
        "name": "Steel Block",
        "rarity": 35
      },
      {
        "itemID": 187,
        "name": "Steel Block Seed",
        "rarity": 35
      },
      {
        "itemID": 188,
        "name": "Poppy",
        "rarity": 6
      },
      {
        "itemID": 189,
        "name": "Poppy Seed",
        "rarity": 6
      },
      {
        "itemID": 190,
        "name": "Rose",
        "rarity": 3
      },
      {
        "itemID": 191,
        "name": "Rose Seed",
        "rarity": 3
      },
      {
        "itemID": 192,
        "name": "Bush",
        "rarity": 9
      },
      {
        "itemID": 193,
        "name": "Bush Seed",
        "rarity": 9
      },
      {
        "itemID": 194,
        "name": "Mushroom",
        "rarity": 3
      },
      {
        "itemID": 195,
        "name": "Mushroom Seed",
        "rarity": 3
      },
      {
        "itemID": 196,
        "name": "Blueberry",
        "rarity": 12
      },
      {
        "itemID": 197,
        "name": "Blueberry Seed",
        "rarity": 12
      },
      {
        "itemID": 198,
        "name": "Flowery Wallpaper",
        "rarity": 7
      },
      {
        "itemID": 199,
        "name": "Flowery Wallpaper Seed",
        "rarity": 7
      },
      {
        "itemID": 200,
        "name": "Stripey Wallpaper",
        "rarity": 10
      },
      {
        "itemID": 201,
        "name": "Stripey Wallpaper Seed",
        "rarity": 10
      },
      {
        "itemID": 202,
        "name": "Small Lock",
        "rarity": 999
      },
      {
        "itemID": 203,
        "name": "Small Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 204,
        "name": "Big Lock",
        "rarity": 999
      },
      {
        "itemID": 205,
        "name": "Big Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 206,
        "name": "Huge Lock",
        "rarity": 999
      },
      {
        "itemID": 207,
        "name": "Huge Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 208,
        "name": "Burglar Mask",
        "rarity": 8
      },
      {
        "itemID": 209,
        "name": "Burglar Mask Seed",
        "rarity": 8
      },
      {
        "itemID": 210,
        "name": "Referee Shirt",
        "rarity": 10
      },
      {
        "itemID": 211,
        "name": "Referee Shirt Seed",
        "rarity": 10
      },
      {
        "itemID": 212,
        "name": "Froghat",
        "rarity": 14
      },
      {
        "itemID": 213,
        "name": "Froghat Seed",
        "rarity": 14
      },
      {
        "itemID": 214,
        "name": "Flashlight",
        "rarity": 10
      },
      {
        "itemID": 215,
        "name": "Flashlight Seed",
        "rarity": 10
      },
      {
        "itemID": 216,
        "name": "Rooster Hat",
        "rarity": 12
      },
      {
        "itemID": 217,
        "name": "Rooster Hat Seed",
        "rarity": 12
      },
      {
        "itemID": 218,
        "name": "Wooden Chair",
        "rarity": 11
      },
      {
        "itemID": 219,
        "name": "Wooden Chair Seed",
        "rarity": 11
      },
      {
        "itemID": 220,
        "name": "Note Block",
        "rarity": 30
      },
      {
        "itemID": 221,
        "name": "Note Block Seed",
        "rarity": 30
      },
      {
        "itemID": 222,
        "name": "Wooden Table",
        "rarity": 6
      },
      {
        "itemID": 223,
        "name": "Wooden Table Seed",
        "rarity": 6
      },
      {
        "itemID": 224,
        "name": "House Entrance",
        "rarity": 10
      },
      {
        "itemID": 225,
        "name": "House Entrance Seed",
        "rarity": 10
      },
      {
        "itemID": 226,
        "name": "Signal Jammer",
        "rarity": 999
      },
      {
        "itemID": 227,
        "name": "Signal Jammer Seed",
        "rarity": 999
      },
      {
        "itemID": 228,
        "name": "Grow Spray Fertilizer",
        "rarity": 999
      },
      {
        "itemID": 229,
        "name": "Grow Spray Fertilizer Seed",
        "rarity": 999
      },
      {
        "itemID": 230,
        "name": "Bathtub",
        "rarity": 13
      },
      {
        "itemID": 231,
        "name": "Bathtub Seed",
        "rarity": 13
      },
      {
        "itemID": 232,
        "name": "White Beard",
        "rarity": 15
      },
      {
        "itemID": 233,
        "name": "White Beard Seed",
        "rarity": 15
      },
      {
        "itemID": 234,
        "name": "Santa Hat",
        "rarity": 10
      },
      {
        "itemID": 235,
        "name": "Santa Hat Seed",
        "rarity": 10
      },
      {
        "itemID": 236,
        "name": "Santa Pants",
        "rarity": 5
      },
      {
        "itemID": 237,
        "name": "Santa Pants Seed",
        "rarity": 5
      },
      {
        "itemID": 238,
        "name": "Santa Vest",
        "rarity": 7
      },
      {
        "itemID": 239,
        "name": "Santa Vest Seed",
        "rarity": 7
      },
      {
        "itemID": 240,
        "name": "Sack O' Joy",
        "rarity": 75
      },
      {
        "itemID": 241,
        "name": "Sack O' Joy Seed",
        "rarity": 75
      },
      {
        "itemID": 242,
        "name": "World Lock",
        "rarity": 999
      },
      {
        "itemID": 243,
        "name": "World Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 244,
        "name": "UPDATE_STORE",
        "rarity": 999
      },
      {
        "itemID": 245,
        "name": "UPDATE_STORE Seed",
        "rarity": 999
      },
      {
        "itemID": 246,
        "name": "Music Box",
        "rarity": 38
      },
      {
        "itemID": 247,
        "name": "Music Box Seed",
        "rarity": 38
      },
      {
        "itemID": 248,
        "name": "Evil Bricks",
        "rarity": 5
      },
      {
        "itemID": 249,
        "name": "Evil Bricks Seed",
        "rarity": 5
      },
      {
        "itemID": 250,
        "name": "Asbestos Boots",
        "rarity": 11
      },
      {
        "itemID": 251,
        "name": "Asbestos Boots Seed",
        "rarity": 11
      },
      {
        "itemID": 252,
        "name": "Cuzco Wall Mount",
        "rarity": 18
      },
      {
        "itemID": 253,
        "name": "Cuzco Wall Mount Seed",
        "rarity": 18
      },
      {
        "itemID": 254,
        "name": "Robot Wants Dubstep",
        "rarity": 65
      },
      {
        "itemID": 255,
        "name": "Robot Wants Dubstep Seed",
        "rarity": 65
      },
      {
        "itemID": 256,
        "name": "Saturday Night Vest",
        "rarity": 86
      },
      {
        "itemID": 257,
        "name": "Saturday Night Vest Seed",
        "rarity": 86
      },
      {
        "itemID": 258,
        "name": "White Bellbottoms",
        "rarity": 51
      },
      {
        "itemID": 259,
        "name": "White Bellbottoms Seed",
        "rarity": 51
      },
      {
        "itemID": 260,
        "name": "Golden Block",
        "rarity": 41
      },
      {
        "itemID": 261,
        "name": "Golden Block Seed",
        "rarity": 41
      },
      {
        "itemID": 262,
        "name": "Crystal Block",
        "rarity": 100
      },
      {
        "itemID": 263,
        "name": "Crystal Block Seed",
        "rarity": 100
      },
      {
        "itemID": 264,
        "name": "Picket Fence",
        "rarity": 17
      },
      {
        "itemID": 265,
        "name": "Picket Fence Seed",
        "rarity": 17
      },
      {
        "itemID": 266,
        "name": "Long Black Hair",
        "rarity": 20
      },
      {
        "itemID": 267,
        "name": "Long Black Hair Seed",
        "rarity": 20
      },
      {
        "itemID": 268,
        "name": "Purple Mohawk",
        "rarity": 36
      },
      {
        "itemID": 269,
        "name": "Purple Mohawk Seed",
        "rarity": 36
      },
      {
        "itemID": 270,
        "name": "Messy Brown Hair",
        "rarity": 5
      },
      {
        "itemID": 271,
        "name": "Messy Brown Hair Seed",
        "rarity": 5
      },
      {
        "itemID": 272,
        "name": "Long Brown Hair",
        "rarity": 8
      },
      {
        "itemID": 273,
        "name": "Long Brown Hair Seed",
        "rarity": 8
      },
      {
        "itemID": 274,
        "name": "Freeze Wand",
        "rarity": 999
      },
      {
        "itemID": 275,
        "name": "Freeze Wand Seed",
        "rarity": 999
      },
      {
        "itemID": 276,
        "name": "Fire Wand",
        "rarity": 999
      },
      {
        "itemID": 277,
        "name": "Fire Wand Seed",
        "rarity": 999
      },
      {
        "itemID": 278,
        "name": "Curse Wand",
        "rarity": 999
      },
      {
        "itemID": 279,
        "name": "Curse Wand Seed",
        "rarity": 999
      },
      {
        "itemID": 280,
        "name": "Bed",
        "rarity": 14
      },
      {
        "itemID": 281,
        "name": "Bed Seed",
        "rarity": 14
      },
      {
        "itemID": 282,
        "name": "Polka Dot Block",
        "rarity": 15
      },
      {
        "itemID": 283,
        "name": "Polka Dot Block Seed",
        "rarity": 15
      },
      {
        "itemID": 284,
        "name": "Checker Wallpaper",
        "rarity": 11
      },
      {
        "itemID": 285,
        "name": "Checker Wallpaper Seed",
        "rarity": 11
      },
      {
        "itemID": 286,
        "name": "Fireplace",
        "rarity": 46
      },
      {
        "itemID": 287,
        "name": "Fireplace Seed",
        "rarity": 46
      },
      {
        "itemID": 288,
        "name": "Snorkel",
        "rarity": 15
      },
      {
        "itemID": 289,
        "name": "Snorkel Seed",
        "rarity": 15
      },
      {
        "itemID": 290,
        "name": "Ninja Mask",
        "rarity": 44
      },
      {
        "itemID": 291,
        "name": "Ninja Mask Seed",
        "rarity": 44
      },
      {
        "itemID": 292,
        "name": "Ninja Tights",
        "rarity": 59
      },
      {
        "itemID": 293,
        "name": "Ninja Tights Seed",
        "rarity": 59
      },
      {
        "itemID": 294,
        "name": "Ninja Vest",
        "rarity": 55
      },
      {
        "itemID": 295,
        "name": "Ninja Vest Seed",
        "rarity": 55
      },
      {
        "itemID": 296,
        "name": "Ninja Slippers",
        "rarity": 44
      },
      {
        "itemID": 297,
        "name": "Ninja Slippers Seed",
        "rarity": 44
      },
      {
        "itemID": 298,
        "name": "The Darkness",
        "rarity": 40
      },
      {
        "itemID": 299,
        "name": "The Darkness Seed",
        "rarity": 40
      },
      {
        "itemID": 300,
        "name": "Rubber Ducky",
        "rarity": 23
      },
      {
        "itemID": 301,
        "name": "Rubber Ducky Seed",
        "rarity": 23
      },
      {
        "itemID": 302,
        "name": "Checkered Pajamas",
        "rarity": 25
      },
      {
        "itemID": 303,
        "name": "Checkered Pajamas Seed",
        "rarity": 25
      },
      {
        "itemID": 304,
        "name": "Tie Dyed Shirt",
        "rarity": 26
      },
      {
        "itemID": 305,
        "name": "Tie Dyed Shirt Seed",
        "rarity": 26
      },
      {
        "itemID": 306,
        "name": "Rainbow Wig",
        "rarity": 74
      },
      {
        "itemID": 307,
        "name": "Rainbow Wig Seed",
        "rarity": 74
      },
      {
        "itemID": 308,
        "name": "Rainbow Block",
        "rarity": 28
      },
      {
        "itemID": 309,
        "name": "Rainbow Block Seed",
        "rarity": 28
      },
      {
        "itemID": 310,
        "name": "Monocle",
        "rarity": 44
      },
      {
        "itemID": 311,
        "name": "Monocle Seed",
        "rarity": 44
      },
      {
        "itemID": 312,
        "name": "Pirate Hat",
        "rarity": 53
      },
      {
        "itemID": 313,
        "name": "Pirate Hat Seed",
        "rarity": 53
      },
      {
        "itemID": 314,
        "name": "Eyepatch",
        "rarity": 68
      },
      {
        "itemID": 315,
        "name": "Eyepatch Seed",
        "rarity": 68
      },
      {
        "itemID": 316,
        "name": "Peg Leg",
        "rarity": 29
      },
      {
        "itemID": 317,
        "name": "Peg Leg Seed",
        "rarity": 29
      },
      {
        "itemID": 318,
        "name": "Diamond Ring",
        "rarity": 141
      },
      {
        "itemID": 319,
        "name": "Diamond Ring Seed",
        "rarity": 141
      },
      {
        "itemID": 320,
        "name": "Cannon",
        "rarity": 50
      },
      {
        "itemID": 321,
        "name": "Cannon Seed",
        "rarity": 50
      },
      {
        "itemID": 322,
        "name": "High Tech Wall",
        "rarity": 69
      },
      {
        "itemID": 323,
        "name": "High Tech Wall Seed",
        "rarity": 69
      },
      {
        "itemID": 324,
        "name": "High Tech Block",
        "rarity": 69
      },
      {
        "itemID": 325,
        "name": "High Tech Block Seed",
        "rarity": 69
      },
      {
        "itemID": 326,
        "name": "Magic Bacon Wallpaper",
        "rarity": 38
      },
      {
        "itemID": 327,
        "name": "Magic Bacon Wallpaper Seed",
        "rarity": 38
      },
      {
        "itemID": 328,
        "name": "Bubble Wrap",
        "rarity": 14
      },
      {
        "itemID": 329,
        "name": "Bubble Wrap Seed",
        "rarity": 14
      },
      {
        "itemID": 330,
        "name": "Cactus",
        "rarity": 17
      },
      {
        "itemID": 331,
        "name": "Cactus Seed",
        "rarity": 17
      },
      {
        "itemID": 332,
        "name": "Sandstone",
        "rarity": 18
      },
      {
        "itemID": 333,
        "name": "Sandstone Seed",
        "rarity": 18
      },
      {
        "itemID": 334,
        "name": "Art Wall",
        "rarity": 66
      },
      {
        "itemID": 335,
        "name": "Art Wall Seed",
        "rarity": 66
      },
      {
        "itemID": 336,
        "name": "Stone Wall",
        "rarity": 5
      },
      {
        "itemID": 337,
        "name": "Stone Wall Seed",
        "rarity": 5
      },
      {
        "itemID": 338,
        "name": "Das Red Balloon",
        "rarity": 18
      },
      {
        "itemID": 339,
        "name": "Das Red Balloon Seed",
        "rarity": 18
      },
      {
        "itemID": 340,
        "name": "Chandelier",
        "rarity": 87
      },
      {
        "itemID": 341,
        "name": "Chandelier Seed",
        "rarity": 87
      },
      {
        "itemID": 342,
        "name": "Lovely Pink Dress",
        "rarity": 10
      },
      {
        "itemID": 343,
        "name": "Lovely Pink Dress Seed",
        "rarity": 10
      },
      {
        "itemID": 344,
        "name": "Fishnet Stockings",
        "rarity": 79
      },
      {
        "itemID": 345,
        "name": "Fishnet Stockings Seed",
        "rarity": 79
      },
      {
        "itemID": 346,
        "name": "Monster Feet",
        "rarity": 14
      },
      {
        "itemID": 347,
        "name": "Monster Feet Seed",
        "rarity": 14
      },
      {
        "itemID": 348,
        "name": "Hoop Earrings",
        "rarity": 57
      },
      {
        "itemID": 349,
        "name": "Hoop Earrings Seed",
        "rarity": 57
      },
      {
        "itemID": 350,
        "name": "Heroman Cape",
        "rarity": 999
      },
      {
        "itemID": 351,
        "name": "Heroman Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 352,
        "name": "Lollipop",
        "rarity": 31
      },
      {
        "itemID": 353,
        "name": "Lollipop Seed",
        "rarity": 31
      },
      {
        "itemID": 354,
        "name": "Viking Helmet",
        "rarity": 9
      },
      {
        "itemID": 355,
        "name": "Viking Helmet Seed",
        "rarity": 9
      },
      {
        "itemID": 356,
        "name": "Pigtails",
        "rarity": 12
      },
      {
        "itemID": 357,
        "name": "Pigtails Seed",
        "rarity": 12
      },
      {
        "itemID": 358,
        "name": "Cloudstone Block",
        "rarity": 28
      },
      {
        "itemID": 359,
        "name": "Cloudstone Block Seed",
        "rarity": 28
      },
      {
        "itemID": 360,
        "name": "Dreamstone Block",
        "rarity": 23
      },
      {
        "itemID": 361,
        "name": "Dreamstone Block Seed",
        "rarity": 23
      },
      {
        "itemID": 362,
        "name": "Angel Wings",
        "rarity": 999
      },
      {
        "itemID": 363,
        "name": "Angel Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 364,
        "name": "Diaper",
        "rarity": 999
      },
      {
        "itemID": 365,
        "name": "Diaper Seed",
        "rarity": 999
      },
      {
        "itemID": 366,
        "name": "Heartbow",
        "rarity": 999
      },
      {
        "itemID": 367,
        "name": "Heartbow Seed",
        "rarity": 999
      },
      {
        "itemID": 368,
        "name": "Mud Glob",
        "rarity": 4
      },
      {
        "itemID": 369,
        "name": "Mud Glob Seed",
        "rarity": 4
      },
      {
        "itemID": 370,
        "name": "Cargo Shorts",
        "rarity": 3
      },
      {
        "itemID": 371,
        "name": "Cargo Shorts Seed",
        "rarity": 3
      },
      {
        "itemID": 372,
        "name": "Stinky Socks",
        "rarity": 4
      },
      {
        "itemID": 373,
        "name": "Stinky Socks Seed",
        "rarity": 4
      },
      {
        "itemID": 374,
        "name": "Tan Shirt",
        "rarity": 4
      },
      {
        "itemID": 375,
        "name": "Tan Shirt Seed",
        "rarity": 4
      },
      {
        "itemID": 376,
        "name": "Super Crate Box",
        "rarity": 3
      },
      {
        "itemID": 377,
        "name": "Super Crate Box Seed",
        "rarity": 3
      },
      {
        "itemID": 378,
        "name": "Amber Glass",
        "rarity": 3
      },
      {
        "itemID": 379,
        "name": "Amber Glass Seed",
        "rarity": 3
      },
      {
        "itemID": 380,
        "name": "Lava Rock",
        "rarity": 2
      },
      {
        "itemID": 381,
        "name": "Lava Rock Seed",
        "rarity": 2
      },
      {
        "itemID": 382,
        "name": "Time-Space Rupture",
        "rarity": 79
      },
      {
        "itemID": 383,
        "name": "Time-Space Rupture Seed",
        "rarity": 79
      },
      {
        "itemID": 384,
        "name": "Valentine",
        "rarity": 999
      },
      {
        "itemID": 385,
        "name": "Valentine Seed",
        "rarity": 999
      },
      {
        "itemID": 386,
        "name": "Candy Heart",
        "rarity": 999
      },
      {
        "itemID": 387,
        "name": "Candy Heart Seed",
        "rarity": 999
      },
      {
        "itemID": 388,
        "name": "Perfume",
        "rarity": 999
      },
      {
        "itemID": 389,
        "name": "Perfume Seed",
        "rarity": 999
      },
      {
        "itemID": 390,
        "name": "Heartstone Block",
        "rarity": 999
      },
      {
        "itemID": 391,
        "name": "Heartstone Block Seed",
        "rarity": 999
      },
      {
        "itemID": 392,
        "name": "Heartstone",
        "rarity": 100
      },
      {
        "itemID": 393,
        "name": "Heartstone Seed",
        "rarity": 100
      },
      {
        "itemID": 394,
        "name": "Ultra Trophy 3000",
        "rarity": 999
      },
      {
        "itemID": 395,
        "name": "Ultra Trophy 3000 Seed",
        "rarity": 999
      },
      {
        "itemID": 396,
        "name": "Ultra Trophy 3001",
        "rarity": 999
      },
      {
        "itemID": 397,
        "name": "Ultra Trophy 3001 Seed",
        "rarity": 999
      },
      {
        "itemID": 398,
        "name": "Stove",
        "rarity": 71
      },
      {
        "itemID": 399,
        "name": "Stove Seed",
        "rarity": 71
      },
      {
        "itemID": 400,
        "name": "Spatula",
        "rarity": 88
      },
      {
        "itemID": 401,
        "name": "Spatula Seed",
        "rarity": 88
      },
      {
        "itemID": 402,
        "name": "Apron",
        "rarity": 82
      },
      {
        "itemID": 403,
        "name": "Apron Seed",
        "rarity": 82
      },
      {
        "itemID": 404,
        "name": "Chef Hat",
        "rarity": 74
      },
      {
        "itemID": 405,
        "name": "Chef Hat Seed",
        "rarity": 74
      },
      {
        "itemID": 406,
        "name": "Blueberry Pie",
        "rarity": 83
      },
      {
        "itemID": 407,
        "name": "Blueberry Pie Seed",
        "rarity": 83
      },
      {
        "itemID": 408,
        "name": "Duct Tape",
        "rarity": 999
      },
      {
        "itemID": 409,
        "name": "Duct Tape Seed",
        "rarity": 999
      },
      {
        "itemID": 410,
        "name": "Checkpoint",
        "rarity": 42
      },
      {
        "itemID": 411,
        "name": "Checkpoint Seed",
        "rarity": 42
      },
      {
        "itemID": 412,
        "name": "Sheet Music: Blank",
        "rarity": 9
      },
      {
        "itemID": 413,
        "name": "Sheet Music: Blank Seed",
        "rarity": 9
      },
      {
        "itemID": 414,
        "name": "Sheet Music: Bass Note",
        "rarity": 24
      },
      {
        "itemID": 415,
        "name": "Sheet Music: Bass Note Seed",
        "rarity": 24
      },
      {
        "itemID": 416,
        "name": "Sheet Music: Sharp Bass",
        "rarity": 32
      },
      {
        "itemID": 417,
        "name": "Sheet Music: Sharp Bass Seed",
        "rarity": 32
      },
      {
        "itemID": 418,
        "name": "Sheet Music: Flat Bass",
        "rarity": 25
      },
      {
        "itemID": 419,
        "name": "Sheet Music: Flat Bass Seed",
        "rarity": 25
      },
      {
        "itemID": 420,
        "name": "Sheet Music: Piano Note",
        "rarity": 14
      },
      {
        "itemID": 421,
        "name": "Sheet Music: Piano Note Seed",
        "rarity": 14
      },
      {
        "itemID": 422,
        "name": "Sheet Music: Sharp Piano",
        "rarity": 22
      },
      {
        "itemID": 423,
        "name": "Sheet Music: Sharp Piano Seed",
        "rarity": 22
      },
      {
        "itemID": 424,
        "name": "Sheet Music: Flat Piano",
        "rarity": 15
      },
      {
        "itemID": 425,
        "name": "Sheet Music: Flat Piano Seed",
        "rarity": 15
      },
      {
        "itemID": 426,
        "name": "Sheet Music: Drums",
        "rarity": 13
      },
      {
        "itemID": 427,
        "name": "Sheet Music: Drums Seed",
        "rarity": 13
      },
      {
        "itemID": 428,
        "name": "Race Start Flag",
        "rarity": 22
      },
      {
        "itemID": 429,
        "name": "Race Start Flag Seed",
        "rarity": 22
      },
      {
        "itemID": 430,
        "name": "Race End Flag",
        "rarity": 33
      },
      {
        "itemID": 431,
        "name": "Race End Flag Seed",
        "rarity": 33
      },
      {
        "itemID": 432,
        "name": "Blue Star Wallpaper",
        "rarity": 18
      },
      {
        "itemID": 433,
        "name": "Blue Star Wallpaper Seed",
        "rarity": 18
      },
      {
        "itemID": 434,
        "name": "Sandstone Wall",
        "rarity": 1
      },
      {
        "itemID": 435,
        "name": "Sandstone Wall Seed",
        "rarity": 1
      },
      {
        "itemID": 436,
        "name": "Wall Like An Egyptian",
        "rarity": 22
      },
      {
        "itemID": 437,
        "name": "Wall Like An Egyptian Seed",
        "rarity": 22
      },
      {
        "itemID": 438,
        "name": "Plumbing",
        "rarity": 18
      },
      {
        "itemID": 439,
        "name": "Plumbing Seed",
        "rarity": 18
      },
      {
        "itemID": 440,
        "name": "Ice",
        "rarity": 30
      },
      {
        "itemID": 441,
        "name": "Ice Seed",
        "rarity": 30
      },
      {
        "itemID": 442,
        "name": "Sand",
        "rarity": 1
      },
      {
        "itemID": 443,
        "name": "Sand Seed",
        "rarity": 1
      },
      {
        "itemID": 444,
        "name": "Fishbowl",
        "rarity": 40
      },
      {
        "itemID": 445,
        "name": "Fishbowl Seed",
        "rarity": 40
      },
      {
        "itemID": 446,
        "name": "Poodle Skirt",
        "rarity": 41
      },
      {
        "itemID": 447,
        "name": "Poodle Skirt Seed",
        "rarity": 41
      },
      {
        "itemID": 448,
        "name": "Backpack",
        "rarity": 17
      },
      {
        "itemID": 449,
        "name": "Backpack Seed",
        "rarity": 17
      },
      {
        "itemID": 450,
        "name": "Space Helmet",
        "rarity": 82
      },
      {
        "itemID": 451,
        "name": "Space Helmet Seed",
        "rarity": 82
      },
      {
        "itemID": 452,
        "name": "Plate Mail",
        "rarity": 51
      },
      {
        "itemID": 453,
        "name": "Plate Mail Seed",
        "rarity": 51
      },
      {
        "itemID": 454,
        "name": "Venus Guytrap",
        "rarity": 41
      },
      {
        "itemID": 455,
        "name": "Venus Guytrap Seed",
        "rarity": 41
      },
      {
        "itemID": 456,
        "name": "Dice Block",
        "rarity": 70
      },
      {
        "itemID": 457,
        "name": "Dice Block Seed",
        "rarity": 70
      },
      {
        "itemID": 458,
        "name": "Dresser",
        "rarity": 14
      },
      {
        "itemID": 459,
        "name": "Dresser Seed",
        "rarity": 14
      },
      {
        "itemID": 460,
        "name": "Table Lamp",
        "rarity": 24
      },
      {
        "itemID": 461,
        "name": "Table Lamp Seed",
        "rarity": 24
      },
      {
        "itemID": 462,
        "name": "Fedora",
        "rarity": 83
      },
      {
        "itemID": 463,
        "name": "Fedora Seed",
        "rarity": 83
      },
      {
        "itemID": 464,
        "name": "Dame's Fedora",
        "rarity": 85
      },
      {
        "itemID": 465,
        "name": "Dame's Fedora Seed",
        "rarity": 85
      },
      {
        "itemID": 466,
        "name": "Pinstripe Suit",
        "rarity": 82
      },
      {
        "itemID": 467,
        "name": "Pinstripe Suit Seed",
        "rarity": 82
      },
      {
        "itemID": 468,
        "name": "Pinstripe Pants",
        "rarity": 89
      },
      {
        "itemID": 469,
        "name": "Pinstripe Pants Seed",
        "rarity": 89
      },
      {
        "itemID": 470,
        "name": "Cigar",
        "rarity": 81
      },
      {
        "itemID": 471,
        "name": "Cigar Seed",
        "rarity": 81
      },
      {
        "itemID": 472,
        "name": "Tommygun",
        "rarity": 87
      },
      {
        "itemID": 473,
        "name": "Tommygun Seed",
        "rarity": 87
      },
      {
        "itemID": 474,
        "name": "Flapper Headband",
        "rarity": 82
      },
      {
        "itemID": 475,
        "name": "Flapper Headband Seed",
        "rarity": 82
      },
      {
        "itemID": 476,
        "name": "Flapper Dress",
        "rarity": 80
      },
      {
        "itemID": 477,
        "name": "Flapper Dress Seed",
        "rarity": 80
      },
      {
        "itemID": 478,
        "name": "Art Deco Block",
        "rarity": 83
      },
      {
        "itemID": 479,
        "name": "Art Deco Block Seed",
        "rarity": 83
      },
      {
        "itemID": 480,
        "name": "Victrola",
        "rarity": 94
      },
      {
        "itemID": 481,
        "name": "Victrola Seed",
        "rarity": 94
      },
      {
        "itemID": 482,
        "name": "Big Old Sideways Arrow",
        "rarity": 13
      },
      {
        "itemID": 483,
        "name": "Big Old Sideways Arrow Seed",
        "rarity": 13
      },
      {
        "itemID": 484,
        "name": "Big Old Up Arrow",
        "rarity": 22
      },
      {
        "itemID": 485,
        "name": "Big Old Up Arrow Seed",
        "rarity": 22
      },
      {
        "itemID": 486,
        "name": "Big Old Down Arrow",
        "rarity": 13
      },
      {
        "itemID": 487,
        "name": "Big Old Down Arrow Seed",
        "rarity": 13
      },
      {
        "itemID": 488,
        "name": "Blue Wristband",
        "rarity": 34
      },
      {
        "itemID": 489,
        "name": "Blue Wristband Seed",
        "rarity": 34
      },
      {
        "itemID": 490,
        "name": "Blue Headband",
        "rarity": 73
      },
      {
        "itemID": 491,
        "name": "Blue Headband Seed",
        "rarity": 73
      },
      {
        "itemID": 492,
        "name": "Red Sportsball Jersey",
        "rarity": 28
      },
      {
        "itemID": 493,
        "name": "Red Sportsball Jersey Seed",
        "rarity": 28
      },
      {
        "itemID": 494,
        "name": "Red Sweatpants",
        "rarity": 19
      },
      {
        "itemID": 495,
        "name": "Red Sweatpants Seed",
        "rarity": 19
      },
      {
        "itemID": 496,
        "name": "Air Robinsons",
        "rarity": 47
      },
      {
        "itemID": 497,
        "name": "Air Robinsons Seed",
        "rarity": 47
      },
      {
        "itemID": 498,
        "name": "Hippie Sandals",
        "rarity": 23
      },
      {
        "itemID": 499,
        "name": "Hippie Sandals Seed",
        "rarity": 23
      },
      {
        "itemID": 500,
        "name": "Pastel Pants",
        "rarity": 4
      },
      {
        "itemID": 501,
        "name": "Pastel Pants Seed",
        "rarity": 4
      },
      {
        "itemID": 502,
        "name": "Pastel Suit",
        "rarity": 11
      },
      {
        "itemID": 503,
        "name": "Pastel Suit Seed",
        "rarity": 11
      },
      {
        "itemID": 504,
        "name": "Bunny Mask",
        "rarity": 8
      },
      {
        "itemID": 505,
        "name": "Bunny Mask Seed",
        "rarity": 8
      },
      {
        "itemID": 506,
        "name": "Bunny Ears",
        "rarity": 16
      },
      {
        "itemID": 507,
        "name": "Bunny Ears Seed",
        "rarity": 16
      },
      {
        "itemID": 508,
        "name": "Wicker Basket",
        "rarity": 16
      },
      {
        "itemID": 509,
        "name": "Wicker Basket Seed",
        "rarity": 16
      },
      {
        "itemID": 510,
        "name": "Pastel Pink Block",
        "rarity": 5
      },
      {
        "itemID": 511,
        "name": "Pastel Pink Block Seed",
        "rarity": 5
      },
      {
        "itemID": 512,
        "name": "Pastel Orange Block",
        "rarity": 10
      },
      {
        "itemID": 513,
        "name": "Pastel Orange Block Seed",
        "rarity": 10
      },
      {
        "itemID": 514,
        "name": "Pastel Yellow Block",
        "rarity": 7
      },
      {
        "itemID": 515,
        "name": "Pastel Yellow Block Seed",
        "rarity": 7
      },
      {
        "itemID": 516,
        "name": "Pastel Green Block",
        "rarity": 6
      },
      {
        "itemID": 517,
        "name": "Pastel Green Block Seed",
        "rarity": 6
      },
      {
        "itemID": 518,
        "name": "Pastel Aqua Block",
        "rarity": 6
      },
      {
        "itemID": 519,
        "name": "Pastel Aqua Block Seed",
        "rarity": 6
      },
      {
        "itemID": 520,
        "name": "Pastel Blue Block",
        "rarity": 16
      },
      {
        "itemID": 521,
        "name": "Pastel Blue Block Seed",
        "rarity": 16
      },
      {
        "itemID": 522,
        "name": "Pastel Purple Block",
        "rarity": 20
      },
      {
        "itemID": 523,
        "name": "Pastel Purple Block Seed",
        "rarity": 20
      },
      {
        "itemID": 524,
        "name": "Bunny Tail",
        "rarity": 10
      },
      {
        "itemID": 525,
        "name": "Bunny Tail Seed",
        "rarity": 10
      },
      {
        "itemID": 526,
        "name": "Pinball Bumper",
        "rarity": 53
      },
      {
        "itemID": 527,
        "name": "Pinball Bumper Seed",
        "rarity": 53
      },
      {
        "itemID": 528,
        "name": "Lucky Clover",
        "rarity": 999
      },
      {
        "itemID": 529,
        "name": "Lucky Clover Seed",
        "rarity": 999
      },
      {
        "itemID": 530,
        "name": "Orange Beard",
        "rarity": 999
      },
      {
        "itemID": 531,
        "name": "Orange Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 532,
        "name": "Leprechaun Hat",
        "rarity": 999
      },
      {
        "itemID": 533,
        "name": "Leprechaun Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 534,
        "name": "Green Pants",
        "rarity": 999
      },
      {
        "itemID": 535,
        "name": "Green Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 536,
        "name": "Leprechaun Suit",
        "rarity": 999
      },
      {
        "itemID": 537,
        "name": "Leprechaun Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 538,
        "name": "Leprechaun Shoes",
        "rarity": 999
      },
      {
        "itemID": 539,
        "name": "Leprechaun Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 540,
        "name": "Green Beer",
        "rarity": 999
      },
      {
        "itemID": 541,
        "name": "Green Beer Seed",
        "rarity": 999
      },
      {
        "itemID": 542,
        "name": "Pot O' Gold",
        "rarity": 200
      },
      {
        "itemID": 543,
        "name": "Pot O' Gold Seed",
        "rarity": 200
      },
      {
        "itemID": 544,
        "name": "Orange Portal",
        "rarity": 78
      },
      {
        "itemID": 545,
        "name": "Orange Portal Seed",
        "rarity": 78
      },
      {
        "itemID": 546,
        "name": "Blue Portal",
        "rarity": 84
      },
      {
        "itemID": 547,
        "name": "Blue Portal Seed",
        "rarity": 84
      },
      {
        "itemID": 548,
        "name": "Glass Block",
        "rarity": 7
      },
      {
        "itemID": 549,
        "name": "Glass Block Seed",
        "rarity": 7
      },
      {
        "itemID": 550,
        "name": "Bookcase",
        "rarity": 42
      },
      {
        "itemID": 551,
        "name": "Bookcase Seed",
        "rarity": 42
      },
      {
        "itemID": 552,
        "name": "Secret Passage",
        "rarity": 15
      },
      {
        "itemID": 553,
        "name": "Secret Passage Seed",
        "rarity": 15
      },
      {
        "itemID": 554,
        "name": "Ladder",
        "rarity": 26
      },
      {
        "itemID": 555,
        "name": "Ladder Seed",
        "rarity": 26
      },
      {
        "itemID": 556,
        "name": "Grey Wallpaper",
        "rarity": 42
      },
      {
        "itemID": 557,
        "name": "Grey Wallpaper Seed",
        "rarity": 42
      },
      {
        "itemID": 558,
        "name": "Red Wallpaper",
        "rarity": 42
      },
      {
        "itemID": 559,
        "name": "Red Wallpaper Seed",
        "rarity": 42
      },
      {
        "itemID": 560,
        "name": "Orange Wallpaper",
        "rarity": 47
      },
      {
        "itemID": 561,
        "name": "Orange Wallpaper Seed",
        "rarity": 47
      },
      {
        "itemID": 562,
        "name": "Yellow Wallpaper",
        "rarity": 44
      },
      {
        "itemID": 563,
        "name": "Yellow Wallpaper Seed",
        "rarity": 44
      },
      {
        "itemID": 564,
        "name": "Green Wallpaper",
        "rarity": 43
      },
      {
        "itemID": 565,
        "name": "Green Wallpaper Seed",
        "rarity": 43
      },
      {
        "itemID": 566,
        "name": "Aqua Wallpaper",
        "rarity": 43
      },
      {
        "itemID": 567,
        "name": "Aqua Wallpaper Seed",
        "rarity": 43
      },
      {
        "itemID": 568,
        "name": "Blue Wallpaper",
        "rarity": 53
      },
      {
        "itemID": 569,
        "name": "Blue Wallpaper Seed",
        "rarity": 53
      },
      {
        "itemID": 570,
        "name": "Purple Wallpaper",
        "rarity": 57
      },
      {
        "itemID": 571,
        "name": "Purple Wallpaper Seed",
        "rarity": 57
      },
      {
        "itemID": 572,
        "name": "Phonecats Hat",
        "rarity": 999
      },
      {
        "itemID": 573,
        "name": "Phonecats Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 574,
        "name": "Turtle Hat",
        "rarity": 999
      },
      {
        "itemID": 575,
        "name": "Turtle Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 576,
        "name": "Baneful Mask",
        "rarity": 58
      },
      {
        "itemID": 577,
        "name": "Baneful Mask Seed",
        "rarity": 58
      },
      {
        "itemID": 578,
        "name": "Rollback Plaque",
        "rarity": 1
      },
      {
        "itemID": 579,
        "name": "Rollback Plaque Seed",
        "rarity": 1
      },
      {
        "itemID": 580,
        "name": "Happy Joy Plaque",
        "rarity": 3
      },
      {
        "itemID": 581,
        "name": "Happy Joy Plaque Seed",
        "rarity": 3
      },
      {
        "itemID": 582,
        "name": "Wizard Hat",
        "rarity": 65
      },
      {
        "itemID": 583,
        "name": "Wizard Hat Seed",
        "rarity": 65
      },
      {
        "itemID": 584,
        "name": "Witch Hat",
        "rarity": 65
      },
      {
        "itemID": 585,
        "name": "Witch Hat Seed",
        "rarity": 65
      },
      {
        "itemID": 586,
        "name": "Merlin Hat",
        "rarity": 65
      },
      {
        "itemID": 587,
        "name": "Merlin Hat Seed",
        "rarity": 65
      },
      {
        "itemID": 588,
        "name": "Funk Wizard Hat",
        "rarity": 65
      },
      {
        "itemID": 589,
        "name": "Funk Wizard Hat Seed",
        "rarity": 65
      },
      {
        "itemID": 590,
        "name": "Cursed Wizard Hat",
        "rarity": 65
      },
      {
        "itemID": 591,
        "name": "Cursed Wizard Hat Seed",
        "rarity": 65
      },
      {
        "itemID": 592,
        "name": "Tiny Horsie",
        "rarity": 999
      },
      {
        "itemID": 593,
        "name": "Tiny Horsie Seed",
        "rarity": 999
      },
      {
        "itemID": 594,
        "name": "Elvish Longbow",
        "rarity": 39
      },
      {
        "itemID": 595,
        "name": "Elvish Longbow Seed",
        "rarity": 39
      },
      {
        "itemID": 596,
        "name": "Treasure Chest",
        "rarity": 55
      },
      {
        "itemID": 597,
        "name": "Treasure Chest Seed",
        "rarity": 55
      },
      {
        "itemID": 598,
        "name": "Dragon Gate",
        "rarity": 57
      },
      {
        "itemID": 599,
        "name": "Dragon Gate Seed",
        "rarity": 57
      },
      {
        "itemID": 600,
        "name": "Wizard's Robe",
        "rarity": 60
      },
      {
        "itemID": 601,
        "name": "Wizard's Robe Seed",
        "rarity": 60
      },
      {
        "itemID": 602,
        "name": "GrowBeats Headphones",
        "rarity": 69
      },
      {
        "itemID": 603,
        "name": "GrowBeats Headphones Seed",
        "rarity": 69
      },
      {
        "itemID": 604,
        "name": "Golden Sword",
        "rarity": 58
      },
      {
        "itemID": 605,
        "name": "Golden Sword Seed",
        "rarity": 58
      },
      {
        "itemID": 606,
        "name": "Barrel",
        "rarity": 11
      },
      {
        "itemID": 607,
        "name": "Barrel Seed",
        "rarity": 11
      },
      {
        "itemID": 608,
        "name": "Tavern Sign",
        "rarity": 85
      },
      {
        "itemID": 609,
        "name": "Tavern Sign Seed",
        "rarity": 85
      },
      {
        "itemID": 610,
        "name": "Bunny Egg",
        "rarity": 1
      },
      {
        "itemID": 611,
        "name": "Magic Egg",
        "rarity": 1
      },
      {
        "itemID": 612,
        "name": "Lattice Background",
        "rarity": 15
      },
      {
        "itemID": 613,
        "name": "Lattice Background Seed",
        "rarity": 15
      },
      {
        "itemID": 614,
        "name": "Rotten Egg",
        "rarity": 6
      },
      {
        "itemID": 615,
        "name": "Rotten Egg Seed",
        "rarity": 6
      },
      {
        "itemID": 616,
        "name": "Cuddly Bunny",
        "rarity": 41
      },
      {
        "itemID": 617,
        "name": "Cuddly Bunny Seed",
        "rarity": 41
      },
      {
        "itemID": 618,
        "name": "Psychotic Bunny",
        "rarity": 41
      },
      {
        "itemID": 619,
        "name": "Psychotic Bunny Seed",
        "rarity": 41
      },
      {
        "itemID": 620,
        "name": "Copper Plumbing",
        "rarity": 27
      },
      {
        "itemID": 621,
        "name": "Copper Plumbing Seed",
        "rarity": 27
      },
      {
        "itemID": 622,
        "name": "Steel Girder",
        "rarity": 50
      },
      {
        "itemID": 623,
        "name": "Steel Girder Seed",
        "rarity": 50
      },
      {
        "itemID": 624,
        "name": "Pinball Sproinger",
        "rarity": 56
      },
      {
        "itemID": 625,
        "name": "Pinball Sproinger Seed",
        "rarity": 56
      },
      {
        "itemID": 626,
        "name": "Tangram Block A",
        "rarity": 15
      },
      {
        "itemID": 627,
        "name": "Tangram Block A Seed",
        "rarity": 15
      },
      {
        "itemID": 628,
        "name": "Tangram Block B",
        "rarity": 15
      },
      {
        "itemID": 629,
        "name": "Tangram Block B Seed",
        "rarity": 15
      },
      {
        "itemID": 630,
        "name": "Tangram Block C",
        "rarity": 15
      },
      {
        "itemID": 631,
        "name": "Tangram Block C Seed",
        "rarity": 15
      },
      {
        "itemID": 632,
        "name": "Tangram Block D",
        "rarity": 15
      },
      {
        "itemID": 633,
        "name": "Tangram Block D Seed",
        "rarity": 15
      },
      {
        "itemID": 634,
        "name": "Tangram Block E",
        "rarity": 15
      },
      {
        "itemID": 635,
        "name": "Tangram Block E Seed",
        "rarity": 15
      },
      {
        "itemID": 636,
        "name": "Tangram Block F",
        "rarity": 15
      },
      {
        "itemID": 637,
        "name": "Tangram Block F Seed",
        "rarity": 15
      },
      {
        "itemID": 638,
        "name": "Tangram Block G",
        "rarity": 15
      },
      {
        "itemID": 639,
        "name": "Tangram Block G Seed",
        "rarity": 15
      },
      {
        "itemID": 640,
        "name": "Tangram Block H",
        "rarity": 15
      },
      {
        "itemID": 641,
        "name": "Tangram Block H Seed",
        "rarity": 15
      },
      {
        "itemID": 642,
        "name": "Tangram Block I",
        "rarity": 15
      },
      {
        "itemID": 643,
        "name": "Tangram Block I Seed",
        "rarity": 15
      },
      {
        "itemID": 644,
        "name": "Tangram Block J",
        "rarity": 15
      },
      {
        "itemID": 645,
        "name": "Tangram Block J Seed",
        "rarity": 15
      },
      {
        "itemID": 646,
        "name": "Tangram Block K",
        "rarity": 15
      },
      {
        "itemID": 647,
        "name": "Tangram Block K Seed",
        "rarity": 15
      },
      {
        "itemID": 648,
        "name": "Tangram Block L",
        "rarity": 15
      },
      {
        "itemID": 649,
        "name": "Tangram Block L Seed",
        "rarity": 15
      },
      {
        "itemID": 650,
        "name": "Chalkboard",
        "rarity": 52
      },
      {
        "itemID": 651,
        "name": "Chalkboard Seed",
        "rarity": 52
      },
      {
        "itemID": 652,
        "name": "School Desk",
        "rarity": 20
      },
      {
        "itemID": 653,
        "name": "School Desk Seed",
        "rarity": 20
      },
      {
        "itemID": 654,
        "name": "Red Bricks",
        "rarity": 7
      },
      {
        "itemID": 655,
        "name": "Red Bricks Seed",
        "rarity": 7
      },
      {
        "itemID": 656,
        "name": "Mailbox",
        "rarity": 57
      },
      {
        "itemID": 657,
        "name": "Mailbox Seed",
        "rarity": 57
      },
      {
        "itemID": 658,
        "name": "Bulletin Board",
        "rarity": 67
      },
      {
        "itemID": 659,
        "name": "Bulletin Board Seed",
        "rarity": 67
      },
      {
        "itemID": 660,
        "name": "Letter",
        "rarity": 1
      },
      {
        "itemID": 661,
        "name": "Letter Seed",
        "rarity": 1
      },
      {
        "itemID": 662,
        "name": "Baseball Bat",
        "rarity": 12
      },
      {
        "itemID": 663,
        "name": "Baseball Bat Seed",
        "rarity": 12
      },
      {
        "itemID": 664,
        "name": "Swiss Cheese Block",
        "rarity": 21
      },
      {
        "itemID": 665,
        "name": "Swiss Cheese Block Seed",
        "rarity": 21
      },
      {
        "itemID": 666,
        "name": "Granite Block",
        "rarity": 23
      },
      {
        "itemID": 667,
        "name": "Granite Block Seed",
        "rarity": 23
      },
      {
        "itemID": 668,
        "name": "Marble Block",
        "rarity": 46
      },
      {
        "itemID": 669,
        "name": "Marble Block Seed",
        "rarity": 46
      },
      {
        "itemID": 670,
        "name": "Pencil",
        "rarity": 8
      },
      {
        "itemID": 671,
        "name": "Pencil Seed",
        "rarity": 8
      },
      {
        "itemID": 672,
        "name": "Growtopia Lunchbox",
        "rarity": 999
      },
      {
        "itemID": 673,
        "name": "Growtopia Lunchbox Seed",
        "rarity": 999
      },
      {
        "itemID": 674,
        "name": "Grey Hair Bun",
        "rarity": 19
      },
      {
        "itemID": 675,
        "name": "Grey Hair Bun Seed",
        "rarity": 19
      },
      {
        "itemID": 676,
        "name": "Apple",
        "rarity": 19
      },
      {
        "itemID": 677,
        "name": "Apple Seed",
        "rarity": 19
      },
      {
        "itemID": 678,
        "name": "Crimson Eagle Wings",
        "rarity": 95
      },
      {
        "itemID": 679,
        "name": "Crimson Eagle Wings Seed",
        "rarity": 95
      },
      {
        "itemID": 680,
        "name": "Grimstone",
        "rarity": 7
      },
      {
        "itemID": 681,
        "name": "Grimstone Seed",
        "rarity": 7
      },
      {
        "itemID": 682,
        "name": "Blackrock Wall",
        "rarity": 42
      },
      {
        "itemID": 683,
        "name": "Blackrock Wall Seed",
        "rarity": 42
      },
      {
        "itemID": 684,
        "name": "Iron Bars",
        "rarity": 26
      },
      {
        "itemID": 685,
        "name": "Iron Bars Seed",
        "rarity": 26
      },
      {
        "itemID": 686,
        "name": "Jail Door",
        "rarity": 42
      },
      {
        "itemID": 687,
        "name": "Jail Door Seed",
        "rarity": 42
      },
      {
        "itemID": 688,
        "name": "Skeleton",
        "rarity": 72
      },
      {
        "itemID": 689,
        "name": "Skeleton Seed",
        "rarity": 72
      },
      {
        "itemID": 690,
        "name": "Headsman's Axe",
        "rarity": 65
      },
      {
        "itemID": 691,
        "name": "Headsman's Axe Seed",
        "rarity": 65
      },
      {
        "itemID": 692,
        "name": "Iron Mask",
        "rarity": 999
      },
      {
        "itemID": 693,
        "name": "Iron Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 694,
        "name": "Worthless Rags",
        "rarity": 5
      },
      {
        "itemID": 695,
        "name": "Worthless Rags Seed",
        "rarity": 5
      },
      {
        "itemID": 696,
        "name": "Torch",
        "rarity": 3
      },
      {
        "itemID": 697,
        "name": "Torch Seed",
        "rarity": 3
      },
      {
        "itemID": 698,
        "name": "Meow Ears",
        "rarity": 999
      },
      {
        "itemID": 699,
        "name": "Meow Ears Seed",
        "rarity": 999
      },
      {
        "itemID": 700,
        "name": "Sombrero",
        "rarity": 999
      },
      {
        "itemID": 701,
        "name": "Sombrero Seed",
        "rarity": 999
      },
      {
        "itemID": 702,
        "name": "Poncho",
        "rarity": 999
      },
      {
        "itemID": 703,
        "name": "Poncho Seed",
        "rarity": 999
      },
      {
        "itemID": 704,
        "name": "Desperado Mustache",
        "rarity": 999
      },
      {
        "itemID": 705,
        "name": "Desperado Mustache Seed",
        "rarity": 999
      },
      {
        "itemID": 706,
        "name": "Flamenco Dress",
        "rarity": 999
      },
      {
        "itemID": 707,
        "name": "Flamenco Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 708,
        "name": "Hibiscus Hair",
        "rarity": 999
      },
      {
        "itemID": 709,
        "name": "Hibiscus Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 710,
        "name": "Fiesta Sombrero",
        "rarity": 999
      },
      {
        "itemID": 711,
        "name": "Fiesta Sombrero Seed",
        "rarity": 999
      },
      {
        "itemID": 712,
        "name": "Habanero Pepper",
        "rarity": 999
      },
      {
        "itemID": 713,
        "name": "Habanero Pepper Seed",
        "rarity": 999
      },
      {
        "itemID": 714,
        "name": "Olmec Head",
        "rarity": 999
      },
      {
        "itemID": 715,
        "name": "Olmec Head Seed",
        "rarity": 999
      },
      {
        "itemID": 716,
        "name": "Adobe Block",
        "rarity": 999
      },
      {
        "itemID": 717,
        "name": "Adobe Block Seed",
        "rarity": 999
      },
      {
        "itemID": 718,
        "name": "Ultra Pinata",
        "rarity": 999
      },
      {
        "itemID": 719,
        "name": "Ultra Pinata Seed",
        "rarity": 999
      },
      {
        "itemID": 720,
        "name": "Pinata",
        "rarity": 999
      },
      {
        "itemID": 721,
        "name": "Pinata Seed",
        "rarity": 999
      },
      {
        "itemID": 722,
        "name": "Pinata Whistle",
        "rarity": 999
      },
      {
        "itemID": 723,
        "name": "Pinata Whistle Seed",
        "rarity": 999
      },
      {
        "itemID": 724,
        "name": "Stinky Bucket",
        "rarity": 32
      },
      {
        "itemID": 725,
        "name": "Stinky Bucket Seed",
        "rarity": 32
      },
      {
        "itemID": 726,
        "name": "Acid",
        "rarity": 35
      },
      {
        "itemID": 727,
        "name": "Acid Seed",
        "rarity": 35
      },
      {
        "itemID": 728,
        "name": "Clouds",
        "rarity": 35
      },
      {
        "itemID": 729,
        "name": "Clouds Seed",
        "rarity": 35
      },
      {
        "itemID": 730,
        "name": "Hammer Pants",
        "rarity": 72
      },
      {
        "itemID": 731,
        "name": "Hammer Pants Seed",
        "rarity": 72
      },
      {
        "itemID": 732,
        "name": "Ban Wand",
        "rarity": 999
      },
      {
        "itemID": 733,
        "name": "Ban Wand Seed",
        "rarity": 999
      },
      {
        "itemID": 734,
        "name": "Cybernetic Arm",
        "rarity": 89
      },
      {
        "itemID": 735,
        "name": "Cybernetic Arm Seed",
        "rarity": 89
      },
      {
        "itemID": 736,
        "name": "Play Wings",
        "rarity": 999
      },
      {
        "itemID": 737,
        "name": "Play Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 738,
        "name": "Lokster Hair",
        "rarity": 999
      },
      {
        "itemID": 739,
        "name": "Lokster Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 740,
        "name": "Neon Lights",
        "rarity": 26
      },
      {
        "itemID": 741,
        "name": "Neon Lights Seed",
        "rarity": 26
      },
      {
        "itemID": 742,
        "name": "Card Block - Spade",
        "rarity": 33
      },
      {
        "itemID": 743,
        "name": "Card Block - Spade Seed",
        "rarity": 33
      },
      {
        "itemID": 744,
        "name": "Card Block - Club",
        "rarity": 33
      },
      {
        "itemID": 745,
        "name": "Card Block - Club Seed",
        "rarity": 33
      },
      {
        "itemID": 746,
        "name": "Card Block - Heart",
        "rarity": 33
      },
      {
        "itemID": 747,
        "name": "Card Block - Heart Seed",
        "rarity": 33
      },
      {
        "itemID": 748,
        "name": "Card Block - Diamond",
        "rarity": 33
      },
      {
        "itemID": 749,
        "name": "Card Block - Diamond Seed",
        "rarity": 33
      },
      {
        "itemID": 750,
        "name": "Rabbit's Foot",
        "rarity": 999
      },
      {
        "itemID": 751,
        "name": "Rabbit's Foot Seed",
        "rarity": 999
      },
      {
        "itemID": 752,
        "name": "Flipping Coin",
        "rarity": 54
      },
      {
        "itemID": 753,
        "name": "Flipping Coin Seed",
        "rarity": 54
      },
      {
        "itemID": 754,
        "name": "Gambler's Visor",
        "rarity": 12
      },
      {
        "itemID": 755,
        "name": "Gambler's Visor Seed",
        "rarity": 12
      },
      {
        "itemID": 756,
        "name": "Slot Machine",
        "rarity": 95
      },
      {
        "itemID": 757,
        "name": "Slot Machine Seed",
        "rarity": 95
      },
      {
        "itemID": 758,
        "name": "Roulette Wheel",
        "rarity": 51
      },
      {
        "itemID": 759,
        "name": "Roulette Wheel Seed",
        "rarity": 51
      },
      {
        "itemID": 760,
        "name": "Pleiadian Star Ship",
        "rarity": 999
      },
      {
        "itemID": 761,
        "name": "Pleiadian Star Ship Seed",
        "rarity": 999
      },
      {
        "itemID": 762,
        "name": "Password Door",
        "rarity": 77
      },
      {
        "itemID": 763,
        "name": "Password Door Seed",
        "rarity": 77
      },
      {
        "itemID": 764,
        "name": "g-Virus",
        "rarity": 999
      },
      {
        "itemID": 765,
        "name": "g-Virus Seed",
        "rarity": 999
      },
      {
        "itemID": 766,
        "name": "Little Red Corvette",
        "rarity": 999
      },
      {
        "itemID": 767,
        "name": "Little Red Corvette Seed",
        "rarity": 999
      },
      {
        "itemID": 768,
        "name": "Sawed-Off Shotgun",
        "rarity": 999
      },
      {
        "itemID": 769,
        "name": "Sawed-Off Shotgun Seed",
        "rarity": 999
      },
      {
        "itemID": 770,
        "name": "Combover",
        "rarity": 26
      },
      {
        "itemID": 771,
        "name": "Combover Seed",
        "rarity": 26
      },
      {
        "itemID": 772,
        "name": "Lab Coat",
        "rarity": 75
      },
      {
        "itemID": 773,
        "name": "Lab Coat Seed",
        "rarity": 75
      },
      {
        "itemID": 774,
        "name": "Traffic Barricade",
        "rarity": 50
      },
      {
        "itemID": 775,
        "name": "Traffic Barricade Seed",
        "rarity": 50
      },
      {
        "itemID": 776,
        "name": "Toxic Waste Barrel",
        "rarity": 46
      },
      {
        "itemID": 777,
        "name": "Toxic Waste Barrel Seed",
        "rarity": 46
      },
      {
        "itemID": 778,
        "name": "Toxic Waste",
        "rarity": 999
      },
      {
        "itemID": 779,
        "name": "Toxic Waste Seed",
        "rarity": 999
      },
      {
        "itemID": 780,
        "name": "Biohazard Sign",
        "rarity": 14
      },
      {
        "itemID": 781,
        "name": "Biohazard Sign Seed",
        "rarity": 14
      },
      {
        "itemID": 782,
        "name": "Antidote",
        "rarity": 31
      },
      {
        "itemID": 783,
        "name": "Antidote Seed",
        "rarity": 31
      },
      {
        "itemID": 784,
        "name": "Tombstone",
        "rarity": 95
      },
      {
        "itemID": 785,
        "name": "Tombstone Seed",
        "rarity": 95
      },
      {
        "itemID": 786,
        "name": "Military Radio",
        "rarity": 36
      },
      {
        "itemID": 787,
        "name": "Military Radio Seed",
        "rarity": 36
      },
      {
        "itemID": 788,
        "name": "Zombie-Stompin' Boots",
        "rarity": 15
      },
      {
        "itemID": 789,
        "name": "Zombie-Stompin' Boots Seed",
        "rarity": 15
      },
      {
        "itemID": 790,
        "name": "Combat Vest",
        "rarity": 86
      },
      {
        "itemID": 791,
        "name": "Combat Vest Seed",
        "rarity": 86
      },
      {
        "itemID": 792,
        "name": "Jens Beard",
        "rarity": 999
      },
      {
        "itemID": 793,
        "name": "Jens Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 794,
        "name": "Showgirl Headdress",
        "rarity": 34
      },
      {
        "itemID": 795,
        "name": "Showgirl Headdress Seed",
        "rarity": 34
      },
      {
        "itemID": 796,
        "name": "Showgirl Top",
        "rarity": 48
      },
      {
        "itemID": 797,
        "name": "Showgirl Top Seed",
        "rarity": 48
      },
      {
        "itemID": 798,
        "name": "Showgirl Leggings",
        "rarity": 33
      },
      {
        "itemID": 799,
        "name": "Showgirl Leggings Seed",
        "rarity": 33
      },
      {
        "itemID": 800,
        "name": "Zeta Reticulant Mask",
        "rarity": 78
      },
      {
        "itemID": 801,
        "name": "Zeta Reticulant Mask Seed",
        "rarity": 78
      },
      {
        "itemID": 802,
        "name": "Red Growsaber",
        "rarity": 126
      },
      {
        "itemID": 803,
        "name": "Red Growsaber Seed",
        "rarity": 126
      },
      {
        "itemID": 804,
        "name": "Black Growsaber",
        "rarity": 126
      },
      {
        "itemID": 805,
        "name": "Black Growsaber Seed",
        "rarity": 126
      },
      {
        "itemID": 806,
        "name": "Green Growsaber",
        "rarity": 126
      },
      {
        "itemID": 807,
        "name": "Green Growsaber Seed",
        "rarity": 126
      },
      {
        "itemID": 808,
        "name": "Blue Growsaber",
        "rarity": 126
      },
      {
        "itemID": 809,
        "name": "Blue Growsaber Seed",
        "rarity": 126
      },
      {
        "itemID": 810,
        "name": "Flamesaber",
        "rarity": 126
      },
      {
        "itemID": 811,
        "name": "Flamesaber Seed",
        "rarity": 126
      },
      {
        "itemID": 812,
        "name": "Double Growsaber",
        "rarity": 126
      },
      {
        "itemID": 813,
        "name": "Double Growsaber Seed",
        "rarity": 126
      },
      {
        "itemID": 814,
        "name": "Solorien On Fire",
        "rarity": 999
      },
      {
        "itemID": 815,
        "name": "Solorien On Fire Seed",
        "rarity": 999
      },
      {
        "itemID": 816,
        "name": "Flaming Skull Mask",
        "rarity": 75
      },
      {
        "itemID": 817,
        "name": "Flaming Skull Mask Seed",
        "rarity": 75
      },
      {
        "itemID": 818,
        "name": "Ripper Wings",
        "rarity": 96
      },
      {
        "itemID": 819,
        "name": "Ripper Wings Seed",
        "rarity": 96
      },
      {
        "itemID": 820,
        "name": "Seil's Magic Orbs",
        "rarity": 999
      },
      {
        "itemID": 821,
        "name": "Seil's Magic Orbs Seed",
        "rarity": 999
      },
      {
        "itemID": 822,
        "name": "Water Bucket",
        "rarity": 12
      },
      {
        "itemID": 823,
        "name": "Water Bucket Seed",
        "rarity": 12
      },
      {
        "itemID": 824,
        "name": "Refrigerator",
        "rarity": 85
      },
      {
        "itemID": 825,
        "name": "Refrigerator Seed",
        "rarity": 85
      },
      {
        "itemID": 826,
        "name": "Emerald Block",
        "rarity": 135
      },
      {
        "itemID": 827,
        "name": "Emerald Block Seed",
        "rarity": 135
      },
      {
        "itemID": 828,
        "name": "Ruby Block",
        "rarity": 123
      },
      {
        "itemID": 829,
        "name": "Ruby Block Seed",
        "rarity": 123
      },
      {
        "itemID": 830,
        "name": "Beach Blast",
        "rarity": 999
      },
      {
        "itemID": 831,
        "name": "Beach Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 832,
        "name": "Coral",
        "rarity": 22
      },
      {
        "itemID": 833,
        "name": "Coral Seed",
        "rarity": 22
      },
      {
        "itemID": 834,
        "name": "Fireworks",
        "rarity": 999
      },
      {
        "itemID": 835,
        "name": "Fireworks Seed",
        "rarity": 999
      },
      {
        "itemID": 836,
        "name": "Summer Surprise",
        "rarity": 999
      },
      {
        "itemID": 837,
        "name": "Summer Surprise Seed",
        "rarity": 999
      },
      {
        "itemID": 838,
        "name": "Women's Swimsuit",
        "rarity": 999
      },
      {
        "itemID": 839,
        "name": "Women's Swimsuit Seed",
        "rarity": 999
      },
      {
        "itemID": 840,
        "name": "Men's Swimsuit",
        "rarity": 999
      },
      {
        "itemID": 841,
        "name": "Men's Swimsuit Seed",
        "rarity": 999
      },
      {
        "itemID": 842,
        "name": "Hula Bobblehead",
        "rarity": 999
      },
      {
        "itemID": 843,
        "name": "Hula Bobblehead Seed",
        "rarity": 999
      },
      {
        "itemID": 844,
        "name": "Swim Fins",
        "rarity": 999
      },
      {
        "itemID": 845,
        "name": "Swim Fins Seed",
        "rarity": 999
      },
      {
        "itemID": 846,
        "name": "Seaweed",
        "rarity": 21
      },
      {
        "itemID": 847,
        "name": "Seaweed Seed",
        "rarity": 21
      },
      {
        "itemID": 848,
        "name": "Beach Umbrella",
        "rarity": 999
      },
      {
        "itemID": 849,
        "name": "Beach Umbrella Seed",
        "rarity": 999
      },
      {
        "itemID": 850,
        "name": "Ocean Rock",
        "rarity": 1
      },
      {
        "itemID": 851,
        "name": "Ocean Rock Seed",
        "rarity": 1
      },
      {
        "itemID": 852,
        "name": "Barky's Mask",
        "rarity": 21
      },
      {
        "itemID": 853,
        "name": "Barky's Mask Seed",
        "rarity": 21
      },
      {
        "itemID": 854,
        "name": "Palm Tree",
        "rarity": 28
      },
      {
        "itemID": 855,
        "name": "Palm Tree Seed",
        "rarity": 28
      },
      {
        "itemID": 856,
        "name": "Garbage",
        "rarity": 1
      },
      {
        "itemID": 857,
        "name": "Garbage Seed",
        "rarity": 1
      },
      {
        "itemID": 858,
        "name": "Screen Door",
        "rarity": 17
      },
      {
        "itemID": 859,
        "name": "Screen Door Seed",
        "rarity": 17
      },
      {
        "itemID": 860,
        "name": "Wrought-Iron Fence",
        "rarity": 24
      },
      {
        "itemID": 861,
        "name": "Wrought-Iron Fence Seed",
        "rarity": 24
      },
      {
        "itemID": 862,
        "name": "Velvet Rope",
        "rarity": 40
      },
      {
        "itemID": 863,
        "name": "Velvet Rope Seed",
        "rarity": 40
      },
      {
        "itemID": 864,
        "name": "Sproingy Eyes",
        "rarity": 75
      },
      {
        "itemID": 865,
        "name": "Sproingy Eyes Seed",
        "rarity": 75
      },
      {
        "itemID": 866,
        "name": "Cow",
        "rarity": 89
      },
      {
        "itemID": 867,
        "name": "Cow Seed",
        "rarity": 89
      },
      {
        "itemID": 868,
        "name": "Milk",
        "rarity": 999
      },
      {
        "itemID": 869,
        "name": "Milk Seed",
        "rarity": 999
      },
      {
        "itemID": 870,
        "name": "Calf Leash",
        "rarity": 999
      },
      {
        "itemID": 871,
        "name": "Calf Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 872,
        "name": "Chicken",
        "rarity": 58
      },
      {
        "itemID": 873,
        "name": "Chicken Seed",
        "rarity": 58
      },
      {
        "itemID": 874,
        "name": "Egg",
        "rarity": 999
      },
      {
        "itemID": 875,
        "name": "Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 876,
        "name": "Chick Leash",
        "rarity": 999
      },
      {
        "itemID": 877,
        "name": "Chick Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 878,
        "name": "Piglet Leash",
        "rarity": 999
      },
      {
        "itemID": 879,
        "name": "Piglet Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 880,
        "name": "Wheat",
        "rarity": 3
      },
      {
        "itemID": 881,
        "name": "Wheat Seed",
        "rarity": 3
      },
      {
        "itemID": 882,
        "name": "Butterfly Leash",
        "rarity": 999
      },
      {
        "itemID": 883,
        "name": "Butterfly Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 884,
        "name": "Barn Block",
        "rarity": 7
      },
      {
        "itemID": 885,
        "name": "Barn Block Seed",
        "rarity": 7
      },
      {
        "itemID": 886,
        "name": "Barn Door",
        "rarity": 9
      },
      {
        "itemID": 887,
        "name": "Barn Door Seed",
        "rarity": 9
      },
      {
        "itemID": 888,
        "name": "Red Wood Wall",
        "rarity": 8
      },
      {
        "itemID": 889,
        "name": "Red Wood Wall Seed",
        "rarity": 8
      },
      {
        "itemID": 890,
        "name": "Straw Hat",
        "rarity": 54
      },
      {
        "itemID": 891,
        "name": "Straw Hat Seed",
        "rarity": 54
      },
      {
        "itemID": 892,
        "name": "Overalls",
        "rarity": 64
      },
      {
        "itemID": 893,
        "name": "Overalls Seed",
        "rarity": 64
      },
      {
        "itemID": 894,
        "name": "Pitchfork",
        "rarity": 27
      },
      {
        "itemID": 895,
        "name": "Pitchfork Seed",
        "rarity": 27
      },
      {
        "itemID": 896,
        "name": "Farmgirl Hair",
        "rarity": 46
      },
      {
        "itemID": 897,
        "name": "Farmgirl Hair Seed",
        "rarity": 46
      },
      {
        "itemID": 898,
        "name": "Dear John Tractor",
        "rarity": 999
      },
      {
        "itemID": 899,
        "name": "Dear John Tractor Seed",
        "rarity": 999
      },
      {
        "itemID": 900,
        "name": "Dragon Hand",
        "rarity": 999
      },
      {
        "itemID": 901,
        "name": "Dragon Hand Seed",
        "rarity": 999
      },
      {
        "itemID": 902,
        "name": "Shockinator",
        "rarity": 61
      },
      {
        "itemID": 903,
        "name": "Shockinator Seed",
        "rarity": 61
      },
      {
        "itemID": 904,
        "name": "Ze Goggles",
        "rarity": 85
      },
      {
        "itemID": 905,
        "name": "Ze Goggles Seed",
        "rarity": 85
      },
      {
        "itemID": 906,
        "name": "Shocking Hair",
        "rarity": 36
      },
      {
        "itemID": 907,
        "name": "Shocking Hair Seed",
        "rarity": 36
      },
      {
        "itemID": 908,
        "name": "Enhanced Intellect",
        "rarity": 130
      },
      {
        "itemID": 909,
        "name": "Enhanced Intellect Seed",
        "rarity": 130
      },
      {
        "itemID": 910,
        "name": "Reanimator Remote",
        "rarity": 200
      },
      {
        "itemID": 911,
        "name": "Reanimator Remote Seed",
        "rarity": 200
      },
      {
        "itemID": 912,
        "name": "Laboratory",
        "rarity": 99
      },
      {
        "itemID": 913,
        "name": "Laboratory Seed",
        "rarity": 99
      },
      {
        "itemID": 914,
        "name": "Chemical G",
        "rarity": 1
      },
      {
        "itemID": 915,
        "name": "Chemical G Seed",
        "rarity": 1
      },
      {
        "itemID": 916,
        "name": "Chemical R",
        "rarity": 10
      },
      {
        "itemID": 917,
        "name": "Chemical R Seed",
        "rarity": 10
      },
      {
        "itemID": 918,
        "name": "Chemical P",
        "rarity": 50
      },
      {
        "itemID": 919,
        "name": "Chemical P Seed",
        "rarity": 50
      },
      {
        "itemID": 920,
        "name": "Chemical B",
        "rarity": 25
      },
      {
        "itemID": 921,
        "name": "Chemical B Seed",
        "rarity": 25
      },
      {
        "itemID": 922,
        "name": "Mysterious Chemical",
        "rarity": 90
      },
      {
        "itemID": 923,
        "name": "Mysterious Chemical Seed",
        "rarity": 90
      },
      {
        "itemID": 924,
        "name": "Chemical Y",
        "rarity": 15
      },
      {
        "itemID": 925,
        "name": "Chemical Y Seed",
        "rarity": 15
      },
      {
        "itemID": 926,
        "name": "Steel Table",
        "rarity": 41
      },
      {
        "itemID": 927,
        "name": "Steel Table Seed",
        "rarity": 41
      },
      {
        "itemID": 928,
        "name": "Science Station",
        "rarity": 82
      },
      {
        "itemID": 929,
        "name": "Science Station Seed",
        "rarity": 82
      },
      {
        "itemID": 930,
        "name": "Death Ray",
        "rarity": 999
      },
      {
        "itemID": 931,
        "name": "Death Ray Seed",
        "rarity": 999
      },
      {
        "itemID": 932,
        "name": "Weather Machine - Sunny",
        "rarity": 999
      },
      {
        "itemID": 933,
        "name": "Weather Machine - Sunny Seed",
        "rarity": 999
      },
      {
        "itemID": 934,
        "name": "Weather Machine - Night",
        "rarity": 999
      },
      {
        "itemID": 935,
        "name": "Weather Machine - Night Seed",
        "rarity": 999
      },
      {
        "itemID": 936,
        "name": "Red Bones",
        "rarity": 999
      },
      {
        "itemID": 937,
        "name": "Red Bones Seed",
        "rarity": 999
      },
      {
        "itemID": 938,
        "name": "Tony's Tiger Mask",
        "rarity": 999
      },
      {
        "itemID": 939,
        "name": "Tony's Tiger Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 940,
        "name": "Tony's Tiger Suit",
        "rarity": 999
      },
      {
        "itemID": 941,
        "name": "Tony's Tiger Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 942,
        "name": "Desert Blast",
        "rarity": 999
      },
      {
        "itemID": 943,
        "name": "Desert Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 944,
        "name": "Boulder",
        "rarity": 1
      },
      {
        "itemID": 945,
        "name": "Boulder Seed",
        "rarity": 1
      },
      {
        "itemID": 946,
        "name": "Weather Machine - Arid",
        "rarity": 999
      },
      {
        "itemID": 947,
        "name": "Weather Machine - Arid Seed",
        "rarity": 999
      },
      {
        "itemID": 948,
        "name": "Scoreboard",
        "rarity": 91
      },
      {
        "itemID": 949,
        "name": "Scoreboard Seed",
        "rarity": 91
      },
      {
        "itemID": 950,
        "name": "Bread",
        "rarity": 999
      },
      {
        "itemID": 951,
        "name": "Bread Seed",
        "rarity": 999
      },
      {
        "itemID": 952,
        "name": "E-Z Cook Oven",
        "rarity": 76
      },
      {
        "itemID": 953,
        "name": "E-Z Cook Oven Seed",
        "rarity": 76
      },
      {
        "itemID": 954,
        "name": "Sugar Cane",
        "rarity": 24
      },
      {
        "itemID": 955,
        "name": "Sugar Cane Seed",
        "rarity": 24
      },
      {
        "itemID": 956,
        "name": "Dough",
        "rarity": 999
      },
      {
        "itemID": 957,
        "name": "Dough Seed",
        "rarity": 999
      },
      {
        "itemID": 958,
        "name": "Blueberry Muffin",
        "rarity": 999
      },
      {
        "itemID": 959,
        "name": "Blueberry Muffin Seed",
        "rarity": 999
      },
      {
        "itemID": 960,
        "name": "Habanero Cheese Bread",
        "rarity": 999
      },
      {
        "itemID": 961,
        "name": "Habanero Cheese Bread Seed",
        "rarity": 999
      },
      {
        "itemID": 962,
        "name": "Tomato",
        "rarity": 11
      },
      {
        "itemID": 963,
        "name": "Tomato Seed",
        "rarity": 11
      },
      {
        "itemID": 964,
        "name": "Pizza",
        "rarity": 999
      },
      {
        "itemID": 965,
        "name": "Pizza Seed",
        "rarity": 999
      },
      {
        "itemID": 966,
        "name": "Apple Pie",
        "rarity": 999
      },
      {
        "itemID": 967,
        "name": "Apple Pie Seed",
        "rarity": 999
      },
      {
        "itemID": 968,
        "name": "Cheeseburger",
        "rarity": 999
      },
      {
        "itemID": 969,
        "name": "Cheeseburger Seed",
        "rarity": 999
      },
      {
        "itemID": 970,
        "name": "Silver Idol",
        "rarity": 100
      },
      {
        "itemID": 971,
        "name": "Silver Idol Seed",
        "rarity": 100
      },
      {
        "itemID": 972,
        "name": "Ancient Stone Gate",
        "rarity": 17
      },
      {
        "itemID": 973,
        "name": "Ancient Stone Gate Seed",
        "rarity": 17
      },
      {
        "itemID": 974,
        "name": "Obelisk",
        "rarity": 30
      },
      {
        "itemID": 975,
        "name": "Obelisk Seed",
        "rarity": 30
      },
      {
        "itemID": 976,
        "name": "Sungate",
        "rarity": 100
      },
      {
        "itemID": 977,
        "name": "Sungate Seed",
        "rarity": 100
      },
      {
        "itemID": 978,
        "name": "Slime",
        "rarity": 76
      },
      {
        "itemID": 979,
        "name": "Slime Seed",
        "rarity": 76
      },
      {
        "itemID": 980,
        "name": "Profile",
        "rarity": 999
      },
      {
        "itemID": 981,
        "name": "Profile Seed",
        "rarity": 999
      },
      {
        "itemID": 982,
        "name": "Achievement Block",
        "rarity": 68
      },
      {
        "itemID": 983,
        "name": "Achievement Block Seed",
        "rarity": 68
      },
      {
        "itemID": 984,
        "name": "Weather Machine - Rainy City",
        "rarity": 999
      },
      {
        "itemID": 985,
        "name": "Weather Machine - Rainy City Seed",
        "rarity": 999
      },
      {
        "itemID": 986,
        "name": "Street Sign",
        "rarity": 15
      },
      {
        "itemID": 987,
        "name": "Street Sign Seed",
        "rarity": 15
      },
      {
        "itemID": 988,
        "name": "Gargoyle",
        "rarity": 16
      },
      {
        "itemID": 989,
        "name": "Gargoyle Seed",
        "rarity": 16
      },
      {
        "itemID": 990,
        "name": "Gothic Building",
        "rarity": 89
      },
      {
        "itemID": 991,
        "name": "Gothic Building Seed",
        "rarity": 89
      },
      {
        "itemID": 992,
        "name": "Streetlamp",
        "rarity": 44
      },
      {
        "itemID": 993,
        "name": "Streetlamp Seed",
        "rarity": 44
      },
      {
        "itemID": 994,
        "name": "Sidewalk",
        "rarity": 11
      },
      {
        "itemID": 995,
        "name": "Sidewalk Seed",
        "rarity": 11
      },
      {
        "itemID": 996,
        "name": "Tenement Building",
        "rarity": 11
      },
      {
        "itemID": 997,
        "name": "Tenement Building Seed",
        "rarity": 11
      },
      {
        "itemID": 998,
        "name": "Fire Escape",
        "rarity": 76
      },
      {
        "itemID": 999,
        "name": "Fire Escape Seed",
        "rarity": 76
      },
      {
        "itemID": 1000,
        "name": "Public Lava",
        "rarity": 999
      },
      {
        "itemID": 1001,
        "name": "Public Lava Seed",
        "rarity": 999
      },
      {
        "itemID": 1002,
        "name": "Fire Hydrant",
        "rarity": 54
      },
      {
        "itemID": 1003,
        "name": "Fire Hydrant Seed",
        "rarity": 54
      },
      {
        "itemID": 1004,
        "name": "Hedge",
        "rarity": 9
      },
      {
        "itemID": 1005,
        "name": "Hedge Seed",
        "rarity": 9
      },
      {
        "itemID": 1006,
        "name": "Blue Mailbox",
        "rarity": 72
      },
      {
        "itemID": 1007,
        "name": "Blue Mailbox Seed",
        "rarity": 72
      },
      {
        "itemID": 1008,
        "name": "ATM Machine",
        "rarity": 999
      },
      {
        "itemID": 1009,
        "name": "ATM Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 1010,
        "name": "Destructo Ray",
        "rarity": 999
      },
      {
        "itemID": 1011,
        "name": "Destructo Ray Seed",
        "rarity": 999
      },
      {
        "itemID": 1012,
        "name": "Stick Horse",
        "rarity": 999
      },
      {
        "itemID": 1013,
        "name": "Stick Horse Seed",
        "rarity": 999
      },
      {
        "itemID": 1014,
        "name": "Tumbleweed Attractor",
        "rarity": 999
      },
      {
        "itemID": 1015,
        "name": "Tumbleweed Attractor Seed",
        "rarity": 999
      },
      {
        "itemID": 1016,
        "name": "Six Shooter",
        "rarity": 999
      },
      {
        "itemID": 1017,
        "name": "Six Shooter Seed",
        "rarity": 999
      },
      {
        "itemID": 1018,
        "name": "Tiny Appaloosa",
        "rarity": 999
      },
      {
        "itemID": 1019,
        "name": "Tiny Appaloosa Seed",
        "rarity": 999
      },
      {
        "itemID": 1020,
        "name": "Parasol",
        "rarity": 89
      },
      {
        "itemID": 1021,
        "name": "Parasol Seed",
        "rarity": 89
      },
      {
        "itemID": 1022,
        "name": "Cowboy Hat",
        "rarity": 23
      },
      {
        "itemID": 1023,
        "name": "Cowboy Hat Seed",
        "rarity": 23
      },
      {
        "itemID": 1024,
        "name": "War Paint",
        "rarity": 87
      },
      {
        "itemID": 1025,
        "name": "War Paint Seed",
        "rarity": 87
      },
      {
        "itemID": 1026,
        "name": "Face Bandana",
        "rarity": 31
      },
      {
        "itemID": 1027,
        "name": "Face Bandana Seed",
        "rarity": 31
      },
      {
        "itemID": 1028,
        "name": "Sheriff's Vest",
        "rarity": 60
      },
      {
        "itemID": 1029,
        "name": "Sheriff's Vest Seed",
        "rarity": 60
      },
      {
        "itemID": 1030,
        "name": "Cowboy Boots",
        "rarity": 5
      },
      {
        "itemID": 1031,
        "name": "Cowboy Boots Seed",
        "rarity": 5
      },
      {
        "itemID": 1032,
        "name": "Kansas Curls",
        "rarity": 30
      },
      {
        "itemID": 1033,
        "name": "Kansas Curls Seed",
        "rarity": 30
      },
      {
        "itemID": 1034,
        "name": "Corset",
        "rarity": 62
      },
      {
        "itemID": 1035,
        "name": "Corset Seed",
        "rarity": 62
      },
      {
        "itemID": 1036,
        "name": "Layer Cake Dress",
        "rarity": 999
      },
      {
        "itemID": 1037,
        "name": "Layer Cake Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 1038,
        "name": "Western Building",
        "rarity": 12
      },
      {
        "itemID": 1039,
        "name": "Western Building Seed",
        "rarity": 12
      },
      {
        "itemID": 1040,
        "name": "Saloon Doors",
        "rarity": 14
      },
      {
        "itemID": 1041,
        "name": "Saloon Doors Seed",
        "rarity": 14
      },
      {
        "itemID": 1042,
        "name": "Western Banner",
        "rarity": 14
      },
      {
        "itemID": 1043,
        "name": "Western Banner Seed",
        "rarity": 14
      },
      {
        "itemID": 1044,
        "name": "Buffalo",
        "rarity": 89
      },
      {
        "itemID": 1045,
        "name": "Buffalo Seed",
        "rarity": 89
      },
      {
        "itemID": 1046,
        "name": "Rustic Fence",
        "rarity": 20
      },
      {
        "itemID": 1047,
        "name": "Rustic Fence Seed",
        "rarity": 20
      },
      {
        "itemID": 1048,
        "name": "Campfire",
        "rarity": 63
      },
      {
        "itemID": 1049,
        "name": "Campfire Seed",
        "rarity": 63
      },
      {
        "itemID": 1050,
        "name": "Secret Of Growtopia",
        "rarity": 24
      },
      {
        "itemID": 1051,
        "name": "Secret Of Growtopia Seed",
        "rarity": 24
      },
      {
        "itemID": 1052,
        "name": "Transmog Crystal",
        "rarity": 87
      },
      {
        "itemID": 1053,
        "name": "Transmog Crystal Seed",
        "rarity": 87
      },
      {
        "itemID": 1054,
        "name": "Chinese Lantern",
        "rarity": 999
      },
      {
        "itemID": 1055,
        "name": "Chinese Lantern Seed",
        "rarity": 999
      },
      {
        "itemID": 1056,
        "name": "Songpyeon",
        "rarity": 999
      },
      {
        "itemID": 1057,
        "name": "Songpyeon Seed",
        "rarity": 999
      },
      {
        "itemID": 1058,
        "name": "Harmony Mooncake",
        "rarity": 999
      },
      {
        "itemID": 1059,
        "name": "Harmony Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 1060,
        "name": "Harvest Moon Blast",
        "rarity": 999
      },
      {
        "itemID": 1061,
        "name": "Harvest Moon Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 1062,
        "name": "Ultra Grow Spray",
        "rarity": 999
      },
      {
        "itemID": 1063,
        "name": "Ultra Grow Spray Seed",
        "rarity": 999
      },
      {
        "itemID": 1064,
        "name": "Scarecrow",
        "rarity": 999
      },
      {
        "itemID": 1065,
        "name": "Scarecrow Seed",
        "rarity": 999
      },
      {
        "itemID": 1066,
        "name": "Sky Lantern",
        "rarity": 999
      },
      {
        "itemID": 1067,
        "name": "Sky Lantern Seed",
        "rarity": 999
      },
      {
        "itemID": 1068,
        "name": "Hand Scythe",
        "rarity": 999
      },
      {
        "itemID": 1069,
        "name": "Hand Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 1070,
        "name": "Yellow Hanbok Top",
        "rarity": 999
      },
      {
        "itemID": 1071,
        "name": "Yellow Hanbok Top Seed",
        "rarity": 999
      },
      {
        "itemID": 1072,
        "name": "Purple Hanbok Top",
        "rarity": 999
      },
      {
        "itemID": 1073,
        "name": "Purple Hanbok Top Seed",
        "rarity": 999
      },
      {
        "itemID": 1074,
        "name": "Green Hanbok Top",
        "rarity": 999
      },
      {
        "itemID": 1075,
        "name": "Green Hanbok Top Seed",
        "rarity": 999
      },
      {
        "itemID": 1076,
        "name": "Pink Hanbok Skirt",
        "rarity": 999
      },
      {
        "itemID": 1077,
        "name": "Pink Hanbok Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 1078,
        "name": "Blue Hanbok Skirt",
        "rarity": 999
      },
      {
        "itemID": 1079,
        "name": "Blue Hanbok Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 1080,
        "name": "Orange Hanbok Skirt",
        "rarity": 999
      },
      {
        "itemID": 1081,
        "name": "Orange Hanbok Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 1082,
        "name": "Yellow Hanbok Pants",
        "rarity": 999
      },
      {
        "itemID": 1083,
        "name": "Yellow Hanbok Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 1084,
        "name": "Purple Hanbok Pants",
        "rarity": 999
      },
      {
        "itemID": 1085,
        "name": "Purple Hanbok Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 1086,
        "name": "Green Hanbok Pants",
        "rarity": 999
      },
      {
        "itemID": 1087,
        "name": "Green Hanbok Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 1088,
        "name": "Festival Hair Bun",
        "rarity": 999
      },
      {
        "itemID": 1089,
        "name": "Festival Hair Bun Seed",
        "rarity": 999
      },
      {
        "itemID": 1090,
        "name": "Gat",
        "rarity": 999
      },
      {
        "itemID": 1091,
        "name": "Gat Seed",
        "rarity": 999
      },
      {
        "itemID": 1092,
        "name": "Moon Mask",
        "rarity": 999
      },
      {
        "itemID": 1093,
        "name": "Moon Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 1094,
        "name": "Peace Mooncake",
        "rarity": 999
      },
      {
        "itemID": 1095,
        "name": "Peace Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 1096,
        "name": "Longevity Mooncake",
        "rarity": 999
      },
      {
        "itemID": 1097,
        "name": "Longevity Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 1098,
        "name": "Prosperity Mooncake",
        "rarity": 999
      },
      {
        "itemID": 1099,
        "name": "Prosperity Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 1100,
        "name": "Pillar",
        "rarity": 63
      },
      {
        "itemID": 1101,
        "name": "Pillar Seed",
        "rarity": 63
      },
      {
        "itemID": 1102,
        "name": "Sequoia Tree",
        "rarity": 32
      },
      {
        "itemID": 1103,
        "name": "Sequoia Tree Seed",
        "rarity": 32
      },
      {
        "itemID": 1104,
        "name": "Foliage",
        "rarity": 18
      },
      {
        "itemID": 1105,
        "name": "Foliage Seed",
        "rarity": 18
      },
      {
        "itemID": 1106,
        "name": "Amphora",
        "rarity": 28
      },
      {
        "itemID": 1107,
        "name": "Amphora Seed",
        "rarity": 28
      },
      {
        "itemID": 1108,
        "name": "Potted Daisy",
        "rarity": 31
      },
      {
        "itemID": 1109,
        "name": "Potted Daisy Seed",
        "rarity": 31
      },
      {
        "itemID": 1110,
        "name": "Innie Block",
        "rarity": 30
      },
      {
        "itemID": 1111,
        "name": "Innie Block Seed",
        "rarity": 30
      },
      {
        "itemID": 1112,
        "name": "Outie Block",
        "rarity": 20
      },
      {
        "itemID": 1113,
        "name": "Outie Block Seed",
        "rarity": 20
      },
      {
        "itemID": 1114,
        "name": "Dragon Tail",
        "rarity": 66
      },
      {
        "itemID": 1115,
        "name": "Dragon Tail Seed",
        "rarity": 66
      },
      {
        "itemID": 1116,
        "name": "Clown Shoes",
        "rarity": 27
      },
      {
        "itemID": 1117,
        "name": "Clown Shoes Seed",
        "rarity": 27
      },
      {
        "itemID": 1118,
        "name": "Clown Pants",
        "rarity": 18
      },
      {
        "itemID": 1119,
        "name": "Clown Pants Seed",
        "rarity": 18
      },
      {
        "itemID": 1120,
        "name": "Plain White Tee",
        "rarity": 50
      },
      {
        "itemID": 1121,
        "name": "Plain White Tee Seed",
        "rarity": 50
      },
      {
        "itemID": 1122,
        "name": "Clown Nose",
        "rarity": 14
      },
      {
        "itemID": 1123,
        "name": "Clown Nose Seed",
        "rarity": 14
      },
      {
        "itemID": 1124,
        "name": "Crazy Purple Hair",
        "rarity": 54
      },
      {
        "itemID": 1125,
        "name": "Crazy Purple Hair Seed",
        "rarity": 54
      },
      {
        "itemID": 1126,
        "name": "Foam Finger",
        "rarity": 48
      },
      {
        "itemID": 1127,
        "name": "Foam Finger Seed",
        "rarity": 48
      },
      {
        "itemID": 1128,
        "name": "Rocket Thruster",
        "rarity": 98
      },
      {
        "itemID": 1129,
        "name": "Rocket Thruster Seed",
        "rarity": 98
      },
      {
        "itemID": 1130,
        "name": "Solar Panel",
        "rarity": 33
      },
      {
        "itemID": 1131,
        "name": "Solar Panel Seed",
        "rarity": 33
      },
      {
        "itemID": 1132,
        "name": "Martian Soil",
        "rarity": 1
      },
      {
        "itemID": 1133,
        "name": "Martian Soil Seed",
        "rarity": 1
      },
      {
        "itemID": 1134,
        "name": "Mars Rock",
        "rarity": 1
      },
      {
        "itemID": 1135,
        "name": "Mars Rock Seed",
        "rarity": 1
      },
      {
        "itemID": 1136,
        "name": "Mars Blast",
        "rarity": 999
      },
      {
        "itemID": 1137,
        "name": "Mars Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 1138,
        "name": "Martian Tree",
        "rarity": 2
      },
      {
        "itemID": 1139,
        "name": "Martian Tree Seed",
        "rarity": 2
      },
      {
        "itemID": 1140,
        "name": "Astronaut Pack",
        "rarity": 53
      },
      {
        "itemID": 1141,
        "name": "Astronaut Pack Seed",
        "rarity": 53
      },
      {
        "itemID": 1142,
        "name": "Space Suit",
        "rarity": 50
      },
      {
        "itemID": 1143,
        "name": "Space Suit Seed",
        "rarity": 50
      },
      {
        "itemID": 1144,
        "name": "Space Pants",
        "rarity": 74
      },
      {
        "itemID": 1145,
        "name": "Space Pants Seed",
        "rarity": 74
      },
      {
        "itemID": 1146,
        "name": "Moon Boots",
        "rarity": 60
      },
      {
        "itemID": 1147,
        "name": "Moon Boots Seed",
        "rarity": 60
      },
      {
        "itemID": 1148,
        "name": "Astronaut Helmet",
        "rarity": 82
      },
      {
        "itemID": 1149,
        "name": "Astronaut Helmet Seed",
        "rarity": 82
      },
      {
        "itemID": 1150,
        "name": "Zorbnik Leash",
        "rarity": 999
      },
      {
        "itemID": 1151,
        "name": "Zorbnik Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1152,
        "name": "Zorbnik DNA",
        "rarity": 999
      },
      {
        "itemID": 1153,
        "name": "Zorbnik DNA Seed",
        "rarity": 999
      },
      {
        "itemID": 1154,
        "name": "Space Connector",
        "rarity": 43
      },
      {
        "itemID": 1155,
        "name": "Space Connector Seed",
        "rarity": 43
      },
      {
        "itemID": 1156,
        "name": "White Wallpaper",
        "rarity": 44
      },
      {
        "itemID": 1157,
        "name": "White Wallpaper Seed",
        "rarity": 44
      },
      {
        "itemID": 1158,
        "name": "Black Wallpaper",
        "rarity": 42
      },
      {
        "itemID": 1159,
        "name": "Black Wallpaper Seed",
        "rarity": 42
      },
      {
        "itemID": 1160,
        "name": "Porthole",
        "rarity": 49
      },
      {
        "itemID": 1161,
        "name": "Porthole Seed",
        "rarity": 49
      },
      {
        "itemID": 1162,
        "name": "Forcefield",
        "rarity": 101
      },
      {
        "itemID": 1163,
        "name": "Forcefield Seed",
        "rarity": 101
      },
      {
        "itemID": 1164,
        "name": "Compu Panel",
        "rarity": 95
      },
      {
        "itemID": 1165,
        "name": "Compu Panel Seed",
        "rarity": 95
      },
      {
        "itemID": 1166,
        "name": "Vampire Cape",
        "rarity": 101
      },
      {
        "itemID": 1167,
        "name": "Vampire Cape Seed",
        "rarity": 101
      },
      {
        "itemID": 1168,
        "name": "Slick Black Hair",
        "rarity": 35
      },
      {
        "itemID": 1169,
        "name": "Slick Black Hair Seed",
        "rarity": 35
      },
      {
        "itemID": 1170,
        "name": "Vampire Fangs",
        "rarity": 80
      },
      {
        "itemID": 1171,
        "name": "Vampire Fangs Seed",
        "rarity": 80
      },
      {
        "itemID": 1172,
        "name": "Vamp Vest",
        "rarity": 40
      },
      {
        "itemID": 1173,
        "name": "Vamp Vest Seed",
        "rarity": 40
      },
      {
        "itemID": 1174,
        "name": "Rollback Plaque II",
        "rarity": 1
      },
      {
        "itemID": 1175,
        "name": "Rollback Plaque II Seed",
        "rarity": 1
      },
      {
        "itemID": 1176,
        "name": "Aimster's Nightmare",
        "rarity": 999
      },
      {
        "itemID": 1177,
        "name": "Aimster's Nightmare Seed",
        "rarity": 999
      },
      {
        "itemID": 1178,
        "name": "Skeletal Horsie",
        "rarity": 999
      },
      {
        "itemID": 1179,
        "name": "Skeletal Horsie Seed",
        "rarity": 999
      },
      {
        "itemID": 1180,
        "name": "Spiritual Resonator",
        "rarity": 999
      },
      {
        "itemID": 1181,
        "name": "Spiritual Resonator Seed",
        "rarity": 999
      },
      {
        "itemID": 1182,
        "name": "Hockey Mask",
        "rarity": 70
      },
      {
        "itemID": 1183,
        "name": "Hockey Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 1184,
        "name": "Mummy Mask",
        "rarity": 70
      },
      {
        "itemID": 1185,
        "name": "Mummy Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 1186,
        "name": "Skull Mask",
        "rarity": 70
      },
      {
        "itemID": 1187,
        "name": "Skull Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 1188,
        "name": "Wolfman Mask",
        "rarity": 70
      },
      {
        "itemID": 1189,
        "name": "Wolfman Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 1190,
        "name": "Black Cat Leash",
        "rarity": 999
      },
      {
        "itemID": 1191,
        "name": "Black Cat Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1192,
        "name": "Creepy Hair",
        "rarity": 50
      },
      {
        "itemID": 1193,
        "name": "Creepy Hair Seed",
        "rarity": 50
      },
      {
        "itemID": 1194,
        "name": "Haunted House",
        "rarity": 50
      },
      {
        "itemID": 1195,
        "name": "Haunted House Seed",
        "rarity": 50
      },
      {
        "itemID": 1196,
        "name": "Jack O' Lantern",
        "rarity": 60
      },
      {
        "itemID": 1197,
        "name": "Jack O' Lantern Seed",
        "rarity": 60
      },
      {
        "itemID": 1198,
        "name": "Pumpkin Block",
        "rarity": 10
      },
      {
        "itemID": 1199,
        "name": "Pumpkin Block Seed",
        "rarity": 10
      },
      {
        "itemID": 1200,
        "name": "Jack O' Block",
        "rarity": 15
      },
      {
        "itemID": 1201,
        "name": "Jack O' Block Seed",
        "rarity": 15
      },
      {
        "itemID": 1202,
        "name": "Lit Jack O' Block",
        "rarity": 25
      },
      {
        "itemID": 1203,
        "name": "Lit Jack O' Block Seed",
        "rarity": 25
      },
      {
        "itemID": 1204,
        "name": "Focused Eyes",
        "rarity": 999
      },
      {
        "itemID": 1205,
        "name": "Focused Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 1206,
        "name": "Devil Wings",
        "rarity": 999
      },
      {
        "itemID": 1207,
        "name": "Devil Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1208,
        "name": "Candy Corn",
        "rarity": 1
      },
      {
        "itemID": 1209,
        "name": "Candy Corn Seed",
        "rarity": 1
      },
      {
        "itemID": 1210,
        "name": "Weather Machine - Spooky",
        "rarity": 999
      },
      {
        "itemID": 1211,
        "name": "Weather Machine - Spooky Seed",
        "rarity": 999
      },
      {
        "itemID": 1212,
        "name": "Lock of Black Fur",
        "rarity": 999
      },
      {
        "itemID": 1213,
        "name": "Lock of Black Fur Seed",
        "rarity": 999
      },
      {
        "itemID": 1214,
        "name": "Familiar Leash",
        "rarity": 999
      },
      {
        "itemID": 1215,
        "name": "Familiar Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1216,
        "name": "Cultist Hood",
        "rarity": 90
      },
      {
        "itemID": 1217,
        "name": "Cultist Hood Seed",
        "rarity": 90
      },
      {
        "itemID": 1218,
        "name": "Cultist Robe",
        "rarity": 90
      },
      {
        "itemID": 1219,
        "name": "Cultist Robe Seed",
        "rarity": 90
      },
      {
        "itemID": 1220,
        "name": "Sigil Of K'Tesh",
        "rarity": 20
      },
      {
        "itemID": 1221,
        "name": "Sigil Of K'Tesh Seed",
        "rarity": 20
      },
      {
        "itemID": 1222,
        "name": "Creepstone Platform",
        "rarity": 10
      },
      {
        "itemID": 1223,
        "name": "Creepstone Platform Seed",
        "rarity": 10
      },
      {
        "itemID": 1224,
        "name": "Disabled Platform",
        "rarity": 999
      },
      {
        "itemID": 1225,
        "name": "Disabled Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 1226,
        "name": "Evil Eye",
        "rarity": 55
      },
      {
        "itemID": 1227,
        "name": "Evil Eye Seed",
        "rarity": 55
      },
      {
        "itemID": 1228,
        "name": "Green Dragon Mask",
        "rarity": 999
      },
      {
        "itemID": 1229,
        "name": "Green Dragon Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 1230,
        "name": "Frankenhair",
        "rarity": 45
      },
      {
        "itemID": 1231,
        "name": "Frankenhair Seed",
        "rarity": 45
      },
      {
        "itemID": 1232,
        "name": "Sonar Bracelet",
        "rarity": 999
      },
      {
        "itemID": 1233,
        "name": "Sonar Bracelet Seed",
        "rarity": 999
      },
      {
        "itemID": 1234,
        "name": "Devil Wing Fragment",
        "rarity": 999
      },
      {
        "itemID": 1235,
        "name": "Devil Wing Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 1236,
        "name": "Boney Block",
        "rarity": 65
      },
      {
        "itemID": 1237,
        "name": "Boney Block Seed",
        "rarity": 65
      },
      {
        "itemID": 1238,
        "name": "Cobweb",
        "rarity": 30
      },
      {
        "itemID": 1239,
        "name": "Cobweb Seed",
        "rarity": 30
      },
      {
        "itemID": 1240,
        "name": "Heart Monitor",
        "rarity": 999
      },
      {
        "itemID": 1241,
        "name": "Heart Monitor Seed",
        "rarity": 999
      },
      {
        "itemID": 1242,
        "name": "Scrub Cap",
        "rarity": 999
      },
      {
        "itemID": 1243,
        "name": "Scrub Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 1244,
        "name": "Scrub Mask",
        "rarity": 999
      },
      {
        "itemID": 1245,
        "name": "Scrub Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 1246,
        "name": "Scrub Top",
        "rarity": 999
      },
      {
        "itemID": 1247,
        "name": "Scrub Top Seed",
        "rarity": 999
      },
      {
        "itemID": 1248,
        "name": "Scrub Pants",
        "rarity": 999
      },
      {
        "itemID": 1249,
        "name": "Scrub Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 1250,
        "name": "Bride Of Reanimator Remote",
        "rarity": 200
      },
      {
        "itemID": 1251,
        "name": "Bride Of Reanimator Remote Seed",
        "rarity": 200
      },
      {
        "itemID": 1252,
        "name": "Magnifying Glass",
        "rarity": 999
      },
      {
        "itemID": 1253,
        "name": "Magnifying Glass Seed",
        "rarity": 999
      },
      {
        "itemID": 1254,
        "name": "Retro Magnifying Glass",
        "rarity": 999
      },
      {
        "itemID": 1255,
        "name": "Retro Magnifying Glass Seed",
        "rarity": 999
      },
      {
        "itemID": 1256,
        "name": "Hospital Bed",
        "rarity": 31
      },
      {
        "itemID": 1257,
        "name": "Hospital Bed Seed",
        "rarity": 31
      },
      {
        "itemID": 1258,
        "name": "Surgical Sponge",
        "rarity": 83
      },
      {
        "itemID": 1259,
        "name": "Surgical Sponge Seed",
        "rarity": 83
      },
      {
        "itemID": 1260,
        "name": "Surgical Scalpel",
        "rarity": 83
      },
      {
        "itemID": 1261,
        "name": "Surgical Scalpel Seed",
        "rarity": 83
      },
      {
        "itemID": 1262,
        "name": "Surgical Anesthetic",
        "rarity": 83
      },
      {
        "itemID": 1263,
        "name": "Surgical Anesthetic Seed",
        "rarity": 83
      },
      {
        "itemID": 1264,
        "name": "Surgical Antiseptic",
        "rarity": 83
      },
      {
        "itemID": 1265,
        "name": "Surgical Antiseptic Seed",
        "rarity": 83
      },
      {
        "itemID": 1266,
        "name": "Surgical Antibiotics",
        "rarity": 83
      },
      {
        "itemID": 1267,
        "name": "Surgical Antibiotics Seed",
        "rarity": 83
      },
      {
        "itemID": 1268,
        "name": "Surgical Splint",
        "rarity": 83
      },
      {
        "itemID": 1269,
        "name": "Surgical Splint Seed",
        "rarity": 83
      },
      {
        "itemID": 1270,
        "name": "Surgical Stitches",
        "rarity": 83
      },
      {
        "itemID": 1271,
        "name": "Surgical Stitches Seed",
        "rarity": 83
      },
      {
        "itemID": 1272,
        "name": "Ambulance",
        "rarity": 999
      },
      {
        "itemID": 1273,
        "name": "Ambulance Seed",
        "rarity": 999
      },
      {
        "itemID": 1274,
        "name": "Edison Zoomster",
        "rarity": 999
      },
      {
        "itemID": 1275,
        "name": "Edison Zoomster Seed",
        "rarity": 999
      },
      {
        "itemID": 1276,
        "name": "Punch Jammer",
        "rarity": 999
      },
      {
        "itemID": 1277,
        "name": "Punch Jammer Seed",
        "rarity": 999
      },
      {
        "itemID": 1278,
        "name": "Zombie Jammer",
        "rarity": 999
      },
      {
        "itemID": 1279,
        "name": "Zombie Jammer Seed",
        "rarity": 999
      },
      {
        "itemID": 1280,
        "name": "Birth Certificate",
        "rarity": 999
      },
      {
        "itemID": 1281,
        "name": "Birth Certificate Seed",
        "rarity": 999
      },
      {
        "itemID": 1282,
        "name": "Candy Striper Cap",
        "rarity": 999
      },
      {
        "itemID": 1283,
        "name": "Candy Striper Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 1284,
        "name": "Candy Striper Uniform",
        "rarity": 999
      },
      {
        "itemID": 1285,
        "name": "Candy Striper Uniform Seed",
        "rarity": 999
      },
      {
        "itemID": 1286,
        "name": "Candy Striper Skirt",
        "rarity": 999
      },
      {
        "itemID": 1287,
        "name": "Candy Striper Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 1288,
        "name": "Hospital Curtain",
        "rarity": 999
      },
      {
        "itemID": 1289,
        "name": "Hospital Curtain Seed",
        "rarity": 999
      },
      {
        "itemID": 1290,
        "name": "Hospital Wall",
        "rarity": 999
      },
      {
        "itemID": 1291,
        "name": "Hospital Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 1292,
        "name": "Hospital Window",
        "rarity": 999
      },
      {
        "itemID": 1293,
        "name": "Hospital Window Seed",
        "rarity": 999
      },
      {
        "itemID": 1294,
        "name": "Hospital Door",
        "rarity": 999
      },
      {
        "itemID": 1295,
        "name": "Hospital Door Seed",
        "rarity": 999
      },
      {
        "itemID": 1296,
        "name": "Surgical Gloves",
        "rarity": 999
      },
      {
        "itemID": 1297,
        "name": "Surgical Gloves Seed",
        "rarity": 999
      },
      {
        "itemID": 1298,
        "name": "Cutaway Building",
        "rarity": 23
      },
      {
        "itemID": 1299,
        "name": "Cutaway Building Seed",
        "rarity": 23
      },
      {
        "itemID": 1300,
        "name": "Roshambo Block",
        "rarity": 71
      },
      {
        "itemID": 1301,
        "name": "Roshambo Block Seed",
        "rarity": 71
      },
      {
        "itemID": 1302,
        "name": "Cow Cube",
        "rarity": 98
      },
      {
        "itemID": 1303,
        "name": "Cow Cube Seed",
        "rarity": 98
      },
      {
        "itemID": 1304,
        "name": "Staircase",
        "rarity": 12
      },
      {
        "itemID": 1305,
        "name": "Staircase Seed",
        "rarity": 12
      },
      {
        "itemID": 1306,
        "name": "Terracotta Pot",
        "rarity": 3
      },
      {
        "itemID": 1307,
        "name": "Terracotta Pot Seed",
        "rarity": 3
      },
      {
        "itemID": 1308,
        "name": "Climbing Vine",
        "rarity": 30
      },
      {
        "itemID": 1309,
        "name": "Climbing Vine Seed",
        "rarity": 30
      },
      {
        "itemID": 1310,
        "name": "Thingamajig",
        "rarity": 155
      },
      {
        "itemID": 1311,
        "name": "Thingamajig Seed",
        "rarity": 155
      },
      {
        "itemID": 1312,
        "name": "Bushy Beard",
        "rarity": 41
      },
      {
        "itemID": 1313,
        "name": "Bushy Beard Seed",
        "rarity": 41
      },
      {
        "itemID": 1314,
        "name": "Ponytail",
        "rarity": 40
      },
      {
        "itemID": 1315,
        "name": "Ponytail Seed",
        "rarity": 40
      },
      {
        "itemID": 1316,
        "name": "Happy Sun Shirt",
        "rarity": 42
      },
      {
        "itemID": 1317,
        "name": "Happy Sun Shirt Seed",
        "rarity": 42
      },
      {
        "itemID": 1318,
        "name": "Blue Sun Shirt",
        "rarity": 42
      },
      {
        "itemID": 1319,
        "name": "Blue Sun Shirt Seed",
        "rarity": 42
      },
      {
        "itemID": 1320,
        "name": "Riding Raptor",
        "rarity": 999
      },
      {
        "itemID": 1321,
        "name": "Riding Raptor Seed",
        "rarity": 999
      },
      {
        "itemID": 1322,
        "name": "Cliffside",
        "rarity": 4
      },
      {
        "itemID": 1323,
        "name": "Cliffside Seed",
        "rarity": 4
      },
      {
        "itemID": 1324,
        "name": "Rock Platform",
        "rarity": 5
      },
      {
        "itemID": 1325,
        "name": "Rock Platform Seed",
        "rarity": 5
      },
      {
        "itemID": 1326,
        "name": "Cave Entrance",
        "rarity": 44
      },
      {
        "itemID": 1327,
        "name": "Cave Entrance Seed",
        "rarity": 44
      },
      {
        "itemID": 1328,
        "name": "Prehistoric Palm",
        "rarity": 45
      },
      {
        "itemID": 1329,
        "name": "Prehistoric Palm Seed",
        "rarity": 45
      },
      {
        "itemID": 1330,
        "name": "Caveman Club",
        "rarity": 55
      },
      {
        "itemID": 1331,
        "name": "Caveman Club Seed",
        "rarity": 55
      },
      {
        "itemID": 1332,
        "name": "Sabertooth-Skin Toga",
        "rarity": 25
      },
      {
        "itemID": 1333,
        "name": "Sabertooth-Skin Toga Seed",
        "rarity": 25
      },
      {
        "itemID": 1334,
        "name": "Caveman Hair",
        "rarity": 75
      },
      {
        "itemID": 1335,
        "name": "Caveman Hair Seed",
        "rarity": 75
      },
      {
        "itemID": 1336,
        "name": "Sabertooth Growtopian",
        "rarity": 999
      },
      {
        "itemID": 1337,
        "name": "Sabertooth Growtopian Seed",
        "rarity": 999
      },
      {
        "itemID": 1338,
        "name": "Cavewoman Hair",
        "rarity": 75
      },
      {
        "itemID": 1339,
        "name": "Cavewoman Hair Seed",
        "rarity": 75
      },
      {
        "itemID": 1340,
        "name": "Fuzzy Bikini Top",
        "rarity": 24
      },
      {
        "itemID": 1341,
        "name": "Fuzzy Bikini Top Seed",
        "rarity": 24
      },
      {
        "itemID": 1342,
        "name": "Fuzzy Bikini Bottom",
        "rarity": 34
      },
      {
        "itemID": 1343,
        "name": "Fuzzy Bikini Bottom Seed",
        "rarity": 34
      },
      {
        "itemID": 1344,
        "name": "Ice Cube",
        "rarity": 128
      },
      {
        "itemID": 1345,
        "name": "Ice Cube Seed",
        "rarity": 128
      },
      {
        "itemID": 1346,
        "name": "Frozen DNA Fragment A",
        "rarity": 146
      },
      {
        "itemID": 1347,
        "name": "Frozen DNA Fragment A Seed",
        "rarity": 146
      },
      {
        "itemID": 1348,
        "name": "Frozen DNA Fragment B",
        "rarity": 217
      },
      {
        "itemID": 1349,
        "name": "Frozen DNA Fragment B Seed",
        "rarity": 217
      },
      {
        "itemID": 1350,
        "name": "Mini Mammoth Leash",
        "rarity": 363
      },
      {
        "itemID": 1351,
        "name": "Mini Mammoth Leash Seed",
        "rarity": 363
      },
      {
        "itemID": 1352,
        "name": "Whatchamacallit",
        "rarity": 194
      },
      {
        "itemID": 1353,
        "name": "Whatchamacallit Seed",
        "rarity": 194
      },
      {
        "itemID": 1354,
        "name": "Kerjigger",
        "rarity": 999
      },
      {
        "itemID": 1355,
        "name": "Kerjigger Seed",
        "rarity": 999
      },
      {
        "itemID": 1356,
        "name": "Snowy Rocks",
        "rarity": 31
      },
      {
        "itemID": 1357,
        "name": "Snowy Rocks Seed",
        "rarity": 31
      },
      {
        "itemID": 1358,
        "name": "Candy Cane Block",
        "rarity": 14
      },
      {
        "itemID": 1359,
        "name": "Candy Cane Block Seed",
        "rarity": 14
      },
      {
        "itemID": 1360,
        "name": "Winter Gift",
        "rarity": 999
      },
      {
        "itemID": 1361,
        "name": "Winter Gift Seed",
        "rarity": 999
      },
      {
        "itemID": 1362,
        "name": "Candy Cane Fence",
        "rarity": 48
      },
      {
        "itemID": 1363,
        "name": "Candy Cane Fence Seed",
        "rarity": 48
      },
      {
        "itemID": 1364,
        "name": "Weather Machine - Snowy",
        "rarity": 999
      },
      {
        "itemID": 1365,
        "name": "Weather Machine - Snowy Seed",
        "rarity": 999
      },
      {
        "itemID": 1366,
        "name": "Dumb Friend",
        "rarity": 999
      },
      {
        "itemID": 1367,
        "name": "Dumb Friend Seed",
        "rarity": 999
      },
      {
        "itemID": 1368,
        "name": "Snowball",
        "rarity": 42
      },
      {
        "itemID": 1369,
        "name": "Snowball Seed",
        "rarity": 42
      },
      {
        "itemID": 1370,
        "name": "Festivus Pole",
        "rarity": 46
      },
      {
        "itemID": 1371,
        "name": "Festivus Pole Seed",
        "rarity": 46
      },
      {
        "itemID": 1372,
        "name": "Giant Candle",
        "rarity": 33
      },
      {
        "itemID": 1373,
        "name": "Giant Candle Seed",
        "rarity": 33
      },
      {
        "itemID": 1374,
        "name": "Tangyuan",
        "rarity": 15
      },
      {
        "itemID": 1375,
        "name": "Tangyuan Seed",
        "rarity": 15
      },
      {
        "itemID": 1376,
        "name": "Yeonnalligi",
        "rarity": 162
      },
      {
        "itemID": 1377,
        "name": "Yeonnalligi Seed",
        "rarity": 162
      },
      {
        "itemID": 1378,
        "name": "Ice Dragon Hand",
        "rarity": 999
      },
      {
        "itemID": 1379,
        "name": "Ice Dragon Hand Seed",
        "rarity": 999
      },
      {
        "itemID": 1380,
        "name": "Elf Hat",
        "rarity": 10
      },
      {
        "itemID": 1381,
        "name": "Elf Hat Seed",
        "rarity": 10
      },
      {
        "itemID": 1382,
        "name": "Antler Hat",
        "rarity": 36
      },
      {
        "itemID": 1383,
        "name": "Antler Hat Seed",
        "rarity": 36
      },
      {
        "itemID": 1384,
        "name": "Glowing Nose",
        "rarity": 50
      },
      {
        "itemID": 1385,
        "name": "Glowing Nose Seed",
        "rarity": 50
      },
      {
        "itemID": 1386,
        "name": "Buckskin Hood",
        "rarity": 49
      },
      {
        "itemID": 1387,
        "name": "Buckskin Hood Seed",
        "rarity": 49
      },
      {
        "itemID": 1388,
        "name": "Buckskin Jacket",
        "rarity": 55
      },
      {
        "itemID": 1389,
        "name": "Buckskin Jacket Seed",
        "rarity": 55
      },
      {
        "itemID": 1390,
        "name": "Holiday Gift Box",
        "rarity": 150
      },
      {
        "itemID": 1391,
        "name": "Holiday Gift Box Seed",
        "rarity": 150
      },
      {
        "itemID": 1392,
        "name": "Buckskin Pants",
        "rarity": 48
      },
      {
        "itemID": 1393,
        "name": "Buckskin Pants Seed",
        "rarity": 48
      },
      {
        "itemID": 1394,
        "name": "Polar Bear Leash",
        "rarity": 999
      },
      {
        "itemID": 1395,
        "name": "Polar Bear Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1396,
        "name": "Doohickey",
        "rarity": 999
      },
      {
        "itemID": 1397,
        "name": "Doohickey Seed",
        "rarity": 999
      },
      {
        "itemID": 1398,
        "name": "Inviso-Block",
        "rarity": 1
      },
      {
        "itemID": 1399,
        "name": "Inviso-Block Seed",
        "rarity": 1
      },
      {
        "itemID": 1400,
        "name": "Mini Growtopian",
        "rarity": 999
      },
      {
        "itemID": 1401,
        "name": "Mini Growtopian Seed",
        "rarity": 999
      },
      {
        "itemID": 1402,
        "name": "Thermonuclear Blast",
        "rarity": 999
      },
      {
        "itemID": 1403,
        "name": "Thermonuclear Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 1404,
        "name": "Door Mover",
        "rarity": 999
      },
      {
        "itemID": 1405,
        "name": "Door Mover Seed",
        "rarity": 999
      },
      {
        "itemID": 1406,
        "name": "Skyrocket",
        "rarity": 999
      },
      {
        "itemID": 1407,
        "name": "Skyrocket Seed",
        "rarity": 999
      },
      {
        "itemID": 1408,
        "name": "Party Pants",
        "rarity": 999
      },
      {
        "itemID": 1409,
        "name": "Party Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 1410,
        "name": "Party Vest",
        "rarity": 999
      },
      {
        "itemID": 1411,
        "name": "Party Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 1412,
        "name": "Party Hat",
        "rarity": 999
      },
      {
        "itemID": 1413,
        "name": "Party Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 1414,
        "name": "Party Horn",
        "rarity": 999
      },
      {
        "itemID": 1415,
        "name": "Party Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 1416,
        "name": "Party Socks",
        "rarity": 999
      },
      {
        "itemID": 1417,
        "name": "Party Socks Seed",
        "rarity": 999
      },
      {
        "itemID": 1418,
        "name": "Party Glasses",
        "rarity": 999
      },
      {
        "itemID": 1419,
        "name": "Party Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 1420,
        "name": "Mannequin",
        "rarity": 83
      },
      {
        "itemID": 1421,
        "name": "Mannequin Seed",
        "rarity": 83
      },
      {
        "itemID": 1422,
        "name": "Display Box",
        "rarity": 45
      },
      {
        "itemID": 1423,
        "name": "Display Box Seed",
        "rarity": 45
      },
      {
        "itemID": 1424,
        "name": "World Key",
        "rarity": 999
      },
      {
        "itemID": 1425,
        "name": "World Key Seed",
        "rarity": 999
      },
      {
        "itemID": 1426,
        "name": "For Sale Sign",
        "rarity": 19
      },
      {
        "itemID": 1427,
        "name": "For Sale Sign Seed",
        "rarity": 19
      },
      {
        "itemID": 1428,
        "name": "Gem Sign",
        "rarity": 21
      },
      {
        "itemID": 1429,
        "name": "Gem Sign Seed",
        "rarity": 21
      },
      {
        "itemID": 1430,
        "name": "Shop Sign",
        "rarity": 30
      },
      {
        "itemID": 1431,
        "name": "Shop Sign Seed",
        "rarity": 30
      },
      {
        "itemID": 1432,
        "name": "Exclamation Sign",
        "rarity": 9
      },
      {
        "itemID": 1433,
        "name": "Exclamation Sign Seed",
        "rarity": 9
      },
      {
        "itemID": 1434,
        "name": "Cash Register",
        "rarity": 52
      },
      {
        "itemID": 1435,
        "name": "Cash Register Seed",
        "rarity": 52
      },
      {
        "itemID": 1436,
        "name": "Security Camera",
        "rarity": 999
      },
      {
        "itemID": 1437,
        "name": "Security Camera Seed",
        "rarity": 999
      },
      {
        "itemID": 1438,
        "name": "Golden Pickaxe",
        "rarity": 999
      },
      {
        "itemID": 1439,
        "name": "Golden Pickaxe Seed",
        "rarity": 999
      },
      {
        "itemID": 1440,
        "name": "Evil Space Helmet",
        "rarity": 999
      },
      {
        "itemID": 1441,
        "name": "Evil Space Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 1442,
        "name": "Burning Face",
        "rarity": 999
      },
      {
        "itemID": 1443,
        "name": "Burning Face Seed",
        "rarity": 999
      },
      {
        "itemID": 1444,
        "name": "Frosty Hair",
        "rarity": 999
      },
      {
        "itemID": 1445,
        "name": "Frosty Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 1446,
        "name": "Open Sign",
        "rarity": 59
      },
      {
        "itemID": 1447,
        "name": "Open Sign Seed",
        "rarity": 59
      },
      {
        "itemID": 1448,
        "name": "Television",
        "rarity": 29
      },
      {
        "itemID": 1449,
        "name": "Television Seed",
        "rarity": 29
      },
      {
        "itemID": 1450,
        "name": "Couch",
        "rarity": 41
      },
      {
        "itemID": 1451,
        "name": "Couch Seed",
        "rarity": 41
      },
      {
        "itemID": 1452,
        "name": "Donation Box",
        "rarity": 65
      },
      {
        "itemID": 1453,
        "name": "Donation Box Seed",
        "rarity": 65
      },
      {
        "itemID": 1454,
        "name": "Meaty Apron",
        "rarity": 65
      },
      {
        "itemID": 1455,
        "name": "Meaty Apron Seed",
        "rarity": 65
      },
      {
        "itemID": 1456,
        "name": "Gold Chain",
        "rarity": 71
      },
      {
        "itemID": 1457,
        "name": "Gold Chain Seed",
        "rarity": 71
      },
      {
        "itemID": 1458,
        "name": "Golden Heart Crystal",
        "rarity": 999
      },
      {
        "itemID": 1459,
        "name": "Golden Heart Crystal Seed",
        "rarity": 999
      },
      {
        "itemID": 1460,
        "name": "Golden Angel Wings",
        "rarity": 999
      },
      {
        "itemID": 1461,
        "name": "Golden Angel Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1462,
        "name": "Golden Diaper",
        "rarity": 999
      },
      {
        "itemID": 1463,
        "name": "Golden Diaper Seed",
        "rarity": 999
      },
      {
        "itemID": 1464,
        "name": "Golden Heartbow",
        "rarity": 999
      },
      {
        "itemID": 1465,
        "name": "Golden Heartbow Seed",
        "rarity": 999
      },
      {
        "itemID": 1466,
        "name": "Golden Diamond Necklace",
        "rarity": 999
      },
      {
        "itemID": 1467,
        "name": "Golden Diamond Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 1468,
        "name": "Emerald Necklace",
        "rarity": 165
      },
      {
        "itemID": 1469,
        "name": "Emerald Necklace Seed",
        "rarity": 165
      },
      {
        "itemID": 1470,
        "name": "Ruby Necklace",
        "rarity": 999
      },
      {
        "itemID": 1471,
        "name": "Ruby Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 1472,
        "name": "Microwave",
        "rarity": 75
      },
      {
        "itemID": 1473,
        "name": "Microwave Seed",
        "rarity": 75
      },
      {
        "itemID": 1474,
        "name": "Eggs Benedict",
        "rarity": 999
      },
      {
        "itemID": 1475,
        "name": "Eggs Benedict Seed",
        "rarity": 999
      },
      {
        "itemID": 1476,
        "name": "Ducky Pajama Pants",
        "rarity": 46
      },
      {
        "itemID": 1477,
        "name": "Ducky Pajama Pants Seed",
        "rarity": 46
      },
      {
        "itemID": 1478,
        "name": "Ducky Pajama Top",
        "rarity": 51
      },
      {
        "itemID": 1479,
        "name": "Ducky Pajama Top Seed",
        "rarity": 51
      },
      {
        "itemID": 1480,
        "name": "Window Curtains",
        "rarity": 11
      },
      {
        "itemID": 1481,
        "name": "Window Curtains Seed",
        "rarity": 11
      },
      {
        "itemID": 1482,
        "name": "Wall Clock",
        "rarity": 999
      },
      {
        "itemID": 1483,
        "name": "Wall Clock Seed",
        "rarity": 999
      },
      {
        "itemID": 1484,
        "name": "Atomic Shadow Scythe",
        "rarity": 999
      },
      {
        "itemID": 1485,
        "name": "Atomic Shadow Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 1486,
        "name": "Growtoken",
        "rarity": 999
      },
      {
        "itemID": 1487,
        "name": "Growtoken Seed",
        "rarity": 999
      },
      {
        "itemID": 1488,
        "name": "Experience Potion",
        "rarity": 999
      },
      {
        "itemID": 1489,
        "name": "Experience Potion Seed",
        "rarity": 999
      },
      {
        "itemID": 1490,
        "name": "Weather Machine - Nothingness",
        "rarity": 999
      },
      {
        "itemID": 1491,
        "name": "Weather Machine - Nothingness Seed",
        "rarity": 999
      },
      {
        "itemID": 1492,
        "name": "Doodad",
        "rarity": 999
      },
      {
        "itemID": 1493,
        "name": "Doodad Seed",
        "rarity": 999
      },
      {
        "itemID": 1494,
        "name": "ERROR!",
        "rarity": 999
      },
      {
        "itemID": 1495,
        "name": "ERROR! Seed",
        "rarity": 999
      },
      {
        "itemID": 1496,
        "name": "Rushboard",
        "rarity": 999
      },
      {
        "itemID": 1497,
        "name": "Rushboard Seed",
        "rarity": 999
      },
      {
        "itemID": 1498,
        "name": "Purple Stuff",
        "rarity": 41
      },
      {
        "itemID": 1499,
        "name": "Purple Stuff Seed",
        "rarity": 41
      },
      {
        "itemID": 1500,
        "name": "Orange Stuff",
        "rarity": 31
      },
      {
        "itemID": 1501,
        "name": "Orange Stuff Seed",
        "rarity": 31
      },
      {
        "itemID": 1502,
        "name": "Winter Scarf",
        "rarity": 36
      },
      {
        "itemID": 1503,
        "name": "Winter Scarf Seed",
        "rarity": 36
      },
      {
        "itemID": 1504,
        "name": "Old-Timey Hat",
        "rarity": 19
      },
      {
        "itemID": 1505,
        "name": "Old-Timey Hat Seed",
        "rarity": 19
      },
      {
        "itemID": 1506,
        "name": "Medical Scarf",
        "rarity": 999
      },
      {
        "itemID": 1507,
        "name": "Medical Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 1508,
        "name": "Blarney Stone",
        "rarity": 999
      },
      {
        "itemID": 1509,
        "name": "Blarney Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 1510,
        "name": "Blarney Pebble",
        "rarity": 999
      },
      {
        "itemID": 1511,
        "name": "Blarney Pebble Seed",
        "rarity": 999
      },
      {
        "itemID": 1512,
        "name": "Pet Leprechaun",
        "rarity": 999
      },
      {
        "itemID": 1513,
        "name": "Pet Leprechaun Seed",
        "rarity": 999
      },
      {
        "itemID": 1514,
        "name": "Celtic Block",
        "rarity": 999
      },
      {
        "itemID": 1515,
        "name": "Celtic Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1516,
        "name": "Black-Rimmed Glasses",
        "rarity": 42
      },
      {
        "itemID": 1517,
        "name": "Black-Rimmed Glasses Seed",
        "rarity": 42
      },
      {
        "itemID": 1518,
        "name": "Diving Bell",
        "rarity": 75
      },
      {
        "itemID": 1519,
        "name": "Diving Bell Seed",
        "rarity": 75
      },
      {
        "itemID": 1520,
        "name": "Great White Shark",
        "rarity": 85
      },
      {
        "itemID": 1521,
        "name": "Great White Shark Seed",
        "rarity": 85
      },
      {
        "itemID": 1522,
        "name": "Jellyfish",
        "rarity": 56
      },
      {
        "itemID": 1523,
        "name": "Jellyfish Seed",
        "rarity": 56
      },
      {
        "itemID": 1524,
        "name": "Wetsuit Pants",
        "rarity": 48
      },
      {
        "itemID": 1525,
        "name": "Wetsuit Pants Seed",
        "rarity": 48
      },
      {
        "itemID": 1526,
        "name": "Wetsuit Top",
        "rarity": 63
      },
      {
        "itemID": 1527,
        "name": "Wetsuit Top Seed",
        "rarity": 63
      },
      {
        "itemID": 1528,
        "name": "Sunken Anchor",
        "rarity": 51
      },
      {
        "itemID": 1529,
        "name": "Sunken Anchor Seed",
        "rarity": 51
      },
      {
        "itemID": 1530,
        "name": "Giant Clam",
        "rarity": 56
      },
      {
        "itemID": 1531,
        "name": "Giant Clam Seed",
        "rarity": 56
      },
      {
        "itemID": 1532,
        "name": "Undersea Blast",
        "rarity": 999
      },
      {
        "itemID": 1533,
        "name": "Undersea Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 1534,
        "name": "Cuddly Piranha",
        "rarity": 999
      },
      {
        "itemID": 1535,
        "name": "Cuddly Piranha Seed",
        "rarity": 999
      },
      {
        "itemID": 1536,
        "name": "Deep Sand",
        "rarity": 1
      },
      {
        "itemID": 1537,
        "name": "Deep Sand Seed",
        "rarity": 1
      },
      {
        "itemID": 1538,
        "name": "Deep Rock",
        "rarity": 1
      },
      {
        "itemID": 1539,
        "name": "Deep Rock Seed",
        "rarity": 1
      },
      {
        "itemID": 1540,
        "name": "Mid-Pacific Owl",
        "rarity": 999
      },
      {
        "itemID": 1541,
        "name": "Mid-Pacific Owl Seed",
        "rarity": 999
      },
      {
        "itemID": 1542,
        "name": "Battle Trout",
        "rarity": 141
      },
      {
        "itemID": 1543,
        "name": "Battle Trout Seed",
        "rarity": 141
      },
      {
        "itemID": 1544,
        "name": "Green Bowtie",
        "rarity": 999
      },
      {
        "itemID": 1545,
        "name": "Green Bowtie Seed",
        "rarity": 999
      },
      {
        "itemID": 1546,
        "name": "Green Pageboy",
        "rarity": 999
      },
      {
        "itemID": 1547,
        "name": "Green Pageboy Seed",
        "rarity": 999
      },
      {
        "itemID": 1548,
        "name": "Easter Bonnet",
        "rarity": 999
      },
      {
        "itemID": 1549,
        "name": "Easter Bonnet Seed",
        "rarity": 999
      },
      {
        "itemID": 1550,
        "name": "Bubble Wings",
        "rarity": 999
      },
      {
        "itemID": 1551,
        "name": "Bubble Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1552,
        "name": "Pet Bunny",
        "rarity": 999
      },
      {
        "itemID": 1553,
        "name": "Pet Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 1554,
        "name": "Pastel Pink Flower Block",
        "rarity": 6
      },
      {
        "itemID": 1555,
        "name": "Pastel Pink Flower Block Seed",
        "rarity": 6
      },
      {
        "itemID": 1556,
        "name": "Pastel Orange Flower Block",
        "rarity": 11
      },
      {
        "itemID": 1557,
        "name": "Pastel Orange Flower Block Seed",
        "rarity": 11
      },
      {
        "itemID": 1558,
        "name": "Pastel Yellow Flower Block",
        "rarity": 8
      },
      {
        "itemID": 1559,
        "name": "Pastel Yellow Flower Block Seed",
        "rarity": 8
      },
      {
        "itemID": 1560,
        "name": "Pastel Green Flower Block",
        "rarity": 7
      },
      {
        "itemID": 1561,
        "name": "Pastel Green Flower Block Seed",
        "rarity": 7
      },
      {
        "itemID": 1562,
        "name": "Pastel Aqua Flower Block",
        "rarity": 7
      },
      {
        "itemID": 1563,
        "name": "Pastel Aqua Flower Block Seed",
        "rarity": 7
      },
      {
        "itemID": 1564,
        "name": "Pastel Blue Flower Block",
        "rarity": 17
      },
      {
        "itemID": 1565,
        "name": "Pastel Blue Flower Block Seed",
        "rarity": 17
      },
      {
        "itemID": 1566,
        "name": "Pastel Purple Flower Block",
        "rarity": 21
      },
      {
        "itemID": 1567,
        "name": "Pastel Purple Flower Block Seed",
        "rarity": 21
      },
      {
        "itemID": 1568,
        "name": "Lucky Pinata Hat",
        "rarity": 999
      },
      {
        "itemID": 1569,
        "name": "Lucky Pinata Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 1570,
        "name": "Mariachi Guitar",
        "rarity": 999
      },
      {
        "itemID": 1571,
        "name": "Mariachi Guitar Seed",
        "rarity": 999
      },
      {
        "itemID": 1572,
        "name": "Churro Block",
        "rarity": 1
      },
      {
        "itemID": 1573,
        "name": "Churro Block Seed",
        "rarity": 1
      },
      {
        "itemID": 1574,
        "name": "Parrot Wings",
        "rarity": 999
      },
      {
        "itemID": 1575,
        "name": "Parrot Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1576,
        "name": "Fiesta Dragon",
        "rarity": 999
      },
      {
        "itemID": 1577,
        "name": "Fiesta Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 1578,
        "name": "Party Cactus",
        "rarity": 999
      },
      {
        "itemID": 1579,
        "name": "Party Cactus Seed",
        "rarity": 999
      },
      {
        "itemID": 1580,
        "name": "Burrito",
        "rarity": 999
      },
      {
        "itemID": 1581,
        "name": "Burrito Seed",
        "rarity": 999
      },
      {
        "itemID": 1582,
        "name": "Pink Cadillac",
        "rarity": 999
      },
      {
        "itemID": 1583,
        "name": "Pink Cadillac Seed",
        "rarity": 999
      },
      {
        "itemID": 1584,
        "name": "Mystery Pinata",
        "rarity": 999
      },
      {
        "itemID": 1585,
        "name": "Mystery Pinata Seed",
        "rarity": 999
      },
      {
        "itemID": 1586,
        "name": "Pet Burrito",
        "rarity": 999
      },
      {
        "itemID": 1587,
        "name": "Pet Burrito Seed",
        "rarity": 999
      },
      {
        "itemID": 1588,
        "name": "Clapboard",
        "rarity": 61
      },
      {
        "itemID": 1589,
        "name": "Clapboard Seed",
        "rarity": 61
      },
      {
        "itemID": 1590,
        "name": "3D Glasses",
        "rarity": 33
      },
      {
        "itemID": 1591,
        "name": "3D Glasses Seed",
        "rarity": 33
      },
      {
        "itemID": 1592,
        "name": "Black Beret",
        "rarity": 96
      },
      {
        "itemID": 1593,
        "name": "Black Beret Seed",
        "rarity": 96
      },
      {
        "itemID": 1594,
        "name": "Theater Curtain",
        "rarity": 53
      },
      {
        "itemID": 1595,
        "name": "Theater Curtain Seed",
        "rarity": 53
      },
      {
        "itemID": 1596,
        "name": "GHX Speaker",
        "rarity": 999
      },
      {
        "itemID": 1597,
        "name": "GHX Speaker Seed",
        "rarity": 999
      },
      {
        "itemID": 1598,
        "name": "Marquee Block",
        "rarity": 47
      },
      {
        "itemID": 1599,
        "name": "Marquee Block Seed",
        "rarity": 47
      },
      {
        "itemID": 1600,
        "name": "Director's Chair",
        "rarity": 64
      },
      {
        "itemID": 1601,
        "name": "Director's Chair Seed",
        "rarity": 64
      },
      {
        "itemID": 1602,
        "name": "Mint Julep",
        "rarity": 999
      },
      {
        "itemID": 1603,
        "name": "Mint Julep Seed",
        "rarity": 999
      },
      {
        "itemID": 1604,
        "name": "Theater Seat",
        "rarity": 42
      },
      {
        "itemID": 1605,
        "name": "Theater Seat Seed",
        "rarity": 42
      },
      {
        "itemID": 1606,
        "name": "Movie Screen",
        "rarity": 71
      },
      {
        "itemID": 1607,
        "name": "Movie Screen Seed",
        "rarity": 71
      },
      {
        "itemID": 1608,
        "name": "Movie Camera",
        "rarity": 92
      },
      {
        "itemID": 1609,
        "name": "Movie Camera Seed",
        "rarity": 92
      },
      {
        "itemID": 1610,
        "name": "Red Glass Block",
        "rarity": 11
      },
      {
        "itemID": 1611,
        "name": "Red Glass Block Seed",
        "rarity": 11
      },
      {
        "itemID": 1612,
        "name": "Blue Glass Block",
        "rarity": 22
      },
      {
        "itemID": 1613,
        "name": "Blue Glass Block Seed",
        "rarity": 22
      },
      {
        "itemID": 1614,
        "name": "Growie Award",
        "rarity": 999
      },
      {
        "itemID": 1615,
        "name": "Growie Award Seed",
        "rarity": 999
      },
      {
        "itemID": 1616,
        "name": "Staging Platform",
        "rarity": 229
      },
      {
        "itemID": 1617,
        "name": "Staging Platform Seed",
        "rarity": 229
      },
      {
        "itemID": 1618,
        "name": "Game Block",
        "rarity": 146
      },
      {
        "itemID": 1619,
        "name": "Game Block Seed",
        "rarity": 146
      },
      {
        "itemID": 1620,
        "name": "Busted Game Block",
        "rarity": 999
      },
      {
        "itemID": 1621,
        "name": "Busted Game Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1622,
        "name": "Game Flag",
        "rarity": 168
      },
      {
        "itemID": 1623,
        "name": "Game Flag Seed",
        "rarity": 168
      },
      {
        "itemID": 1624,
        "name": "Missing Game Flag",
        "rarity": 999
      },
      {
        "itemID": 1625,
        "name": "Missing Game Flag Seed",
        "rarity": 999
      },
      {
        "itemID": 1626,
        "name": "Carried Game Flag",
        "rarity": 999
      },
      {
        "itemID": 1627,
        "name": "Carried Game Flag Seed",
        "rarity": 999
      },
      {
        "itemID": 1628,
        "name": "Derpy Star Block",
        "rarity": 999
      },
      {
        "itemID": 1629,
        "name": "Derpy Star Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1630,
        "name": "Lava Cube",
        "rarity": 1
      },
      {
        "itemID": 1631,
        "name": "Lava Cube Seed",
        "rarity": 1
      },
      {
        "itemID": 1632,
        "name": "Coffee Maker",
        "rarity": 91
      },
      {
        "itemID": 1633,
        "name": "Coffee Maker Seed",
        "rarity": 91
      },
      {
        "itemID": 1634,
        "name": "Coffee",
        "rarity": 999
      },
      {
        "itemID": 1635,
        "name": "Coffee Seed",
        "rarity": 999
      },
      {
        "itemID": 1636,
        "name": "Awkward Friendly Unicorn",
        "rarity": 999
      },
      {
        "itemID": 1637,
        "name": "Awkward Friendly Unicorn Seed",
        "rarity": 999
      },
      {
        "itemID": 1638,
        "name": "Unicorn Horn",
        "rarity": 999
      },
      {
        "itemID": 1639,
        "name": "Unicorn Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 1640,
        "name": "Very Bad Unicorn",
        "rarity": 999
      },
      {
        "itemID": 1641,
        "name": "Very Bad Unicorn Seed",
        "rarity": 999
      },
      {
        "itemID": 1642,
        "name": "Horse Mask",
        "rarity": 999
      },
      {
        "itemID": 1643,
        "name": "Horse Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 1644,
        "name": "Unicorn Jumper",
        "rarity": 999
      },
      {
        "itemID": 1645,
        "name": "Unicorn Jumper Seed",
        "rarity": 999
      },
      {
        "itemID": 1646,
        "name": "Happy Unicorn Block",
        "rarity": 50
      },
      {
        "itemID": 1647,
        "name": "Happy Unicorn Block Seed",
        "rarity": 50
      },
      {
        "itemID": 1648,
        "name": "Unicorn Garland",
        "rarity": 999
      },
      {
        "itemID": 1649,
        "name": "Unicorn Garland Seed",
        "rarity": 999
      },
      {
        "itemID": 1650,
        "name": "Pink Hair",
        "rarity": 56
      },
      {
        "itemID": 1651,
        "name": "Pink Hair Seed",
        "rarity": 56
      },
      {
        "itemID": 1652,
        "name": "Aqua Hair",
        "rarity": 57
      },
      {
        "itemID": 1653,
        "name": "Aqua Hair Seed",
        "rarity": 57
      },
      {
        "itemID": 1654,
        "name": "Evil Brick Background",
        "rarity": 47
      },
      {
        "itemID": 1655,
        "name": "Evil Brick Background Seed",
        "rarity": 47
      },
      {
        "itemID": 1656,
        "name": "Game Grave",
        "rarity": 241
      },
      {
        "itemID": 1657,
        "name": "Game Grave Seed",
        "rarity": 241
      },
      {
        "itemID": 1658,
        "name": "Game Goal",
        "rarity": 179
      },
      {
        "itemID": 1659,
        "name": "Game Goal Seed",
        "rarity": 179
      },
      {
        "itemID": 1660,
        "name": "Game Generator",
        "rarity": 999
      },
      {
        "itemID": 1661,
        "name": "Game Generator Seed",
        "rarity": 999
      },
      {
        "itemID": 1662,
        "name": "Spike Juice",
        "rarity": 999
      },
      {
        "itemID": 1663,
        "name": "Spike Juice Seed",
        "rarity": 999
      },
      {
        "itemID": 1664,
        "name": "Barbecue Grill",
        "rarity": 999
      },
      {
        "itemID": 1665,
        "name": "Barbecue Grill Seed",
        "rarity": 999
      },
      {
        "itemID": 1666,
        "name": "Sea Monster Floatie",
        "rarity": 999
      },
      {
        "itemID": 1667,
        "name": "Sea Monster Floatie Seed",
        "rarity": 999
      },
      {
        "itemID": 1668,
        "name": "Water Wings",
        "rarity": 999
      },
      {
        "itemID": 1669,
        "name": "Water Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1670,
        "name": "Summer Kite",
        "rarity": 999
      },
      {
        "itemID": 1671,
        "name": "Summer Kite Seed",
        "rarity": 999
      },
      {
        "itemID": 1672,
        "name": "Rainbow Wings",
        "rarity": 258
      },
      {
        "itemID": 1673,
        "name": "Rainbow Wings Seed",
        "rarity": 258
      },
      {
        "itemID": 1674,
        "name": "Phoenix Wings",
        "rarity": 999
      },
      {
        "itemID": 1675,
        "name": "Phoenix Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1676,
        "name": "Squirt Gun",
        "rarity": 999
      },
      {
        "itemID": 1677,
        "name": "Squirt Gun Seed",
        "rarity": 999
      },
      {
        "itemID": 1678,
        "name": "Sandcastle",
        "rarity": 999
      },
      {
        "itemID": 1679,
        "name": "Sandcastle Seed",
        "rarity": 999
      },
      {
        "itemID": 1680,
        "name": "Super Fireworks",
        "rarity": 999
      },
      {
        "itemID": 1681,
        "name": "Super Fireworks Seed",
        "rarity": 999
      },
      {
        "itemID": 1682,
        "name": "Gateway To Adventure",
        "rarity": 60
      },
      {
        "itemID": 1683,
        "name": "Gateway To Adventure Seed",
        "rarity": 60
      },
      {
        "itemID": 1684,
        "name": "Path Marker",
        "rarity": 29
      },
      {
        "itemID": 1685,
        "name": "Path Marker Seed",
        "rarity": 29
      },
      {
        "itemID": 1686,
        "name": "Pith Helmet",
        "rarity": 81
      },
      {
        "itemID": 1687,
        "name": "Pith Helmet Seed",
        "rarity": 81
      },
      {
        "itemID": 1688,
        "name": "Safari Jacket",
        "rarity": 40
      },
      {
        "itemID": 1689,
        "name": "Safari Jacket Seed",
        "rarity": 40
      },
      {
        "itemID": 1690,
        "name": "Jodhpurs",
        "rarity": 29
      },
      {
        "itemID": 1691,
        "name": "Jodhpurs Seed",
        "rarity": 29
      },
      {
        "itemID": 1692,
        "name": "Adventuring Mustache",
        "rarity": 999
      },
      {
        "itemID": 1693,
        "name": "Adventuring Mustache Seed",
        "rarity": 999
      },
      {
        "itemID": 1694,
        "name": "Adventure Item - Rope",
        "rarity": 62
      },
      {
        "itemID": 1695,
        "name": "Adventure Item - Rope Seed",
        "rarity": 62
      },
      {
        "itemID": 1696,
        "name": "Adventure Item - Key",
        "rarity": 64
      },
      {
        "itemID": 1697,
        "name": "Adventure Item - Key Seed",
        "rarity": 64
      },
      {
        "itemID": 1698,
        "name": "Adventure Item - Golden Idol",
        "rarity": 63
      },
      {
        "itemID": 1699,
        "name": "Adventure Item - Golden Idol Seed",
        "rarity": 63
      },
      {
        "itemID": 1700,
        "name": "Adventure Item - Banana",
        "rarity": 67
      },
      {
        "itemID": 1701,
        "name": "Adventure Item - Banana Seed",
        "rarity": 67
      },
      {
        "itemID": 1702,
        "name": "Adventure Item - Torch",
        "rarity": 68
      },
      {
        "itemID": 1703,
        "name": "Adventure Item - Torch Seed",
        "rarity": 68
      },
      {
        "itemID": 1704,
        "name": "Explorer's Ponytail",
        "rarity": 999
      },
      {
        "itemID": 1705,
        "name": "Explorer's Ponytail Seed",
        "rarity": 999
      },
      {
        "itemID": 1706,
        "name": "Lazy Cobra",
        "rarity": 86
      },
      {
        "itemID": 1707,
        "name": "Lazy Cobra Seed",
        "rarity": 86
      },
      {
        "itemID": 1708,
        "name": "Explorer's Shovel",
        "rarity": 59
      },
      {
        "itemID": 1709,
        "name": "Explorer's Shovel Seed",
        "rarity": 59
      },
      {
        "itemID": 1710,
        "name": "Keytar",
        "rarity": 999
      },
      {
        "itemID": 1711,
        "name": "Keytar Seed",
        "rarity": 999
      },
      {
        "itemID": 1712,
        "name": "Bass Guitar",
        "rarity": 999
      },
      {
        "itemID": 1713,
        "name": "Bass Guitar Seed",
        "rarity": 999
      },
      {
        "itemID": 1714,
        "name": "Tambourine",
        "rarity": 999
      },
      {
        "itemID": 1715,
        "name": "Tambourine Seed",
        "rarity": 999
      },
      {
        "itemID": 1716,
        "name": "Flat-top",
        "rarity": 11
      },
      {
        "itemID": 1717,
        "name": "Flat-top Seed",
        "rarity": 11
      },
      {
        "itemID": 1718,
        "name": "Starchild Makeup",
        "rarity": 29
      },
      {
        "itemID": 1719,
        "name": "Starchild Makeup Seed",
        "rarity": 29
      },
      {
        "itemID": 1720,
        "name": "Shredded T-Shirt",
        "rarity": 13
      },
      {
        "itemID": 1721,
        "name": "Shredded T-Shirt Seed",
        "rarity": 13
      },
      {
        "itemID": 1722,
        "name": "Leopard Leggings",
        "rarity": 14
      },
      {
        "itemID": 1723,
        "name": "Leopard Leggings Seed",
        "rarity": 14
      },
      {
        "itemID": 1724,
        "name": "Drumkit",
        "rarity": 59
      },
      {
        "itemID": 1725,
        "name": "Drumkit Seed",
        "rarity": 59
      },
      {
        "itemID": 1726,
        "name": "Rock N' Roll Wallpaper",
        "rarity": 70
      },
      {
        "itemID": 1727,
        "name": "Rock N' Roll Wallpaper Seed",
        "rarity": 70
      },
      {
        "itemID": 1728,
        "name": "Stage Support",
        "rarity": 49
      },
      {
        "itemID": 1729,
        "name": "Stage Support Seed",
        "rarity": 49
      },
      {
        "itemID": 1730,
        "name": "Mega Rock Speaker",
        "rarity": 54
      },
      {
        "itemID": 1731,
        "name": "Mega Rock Speaker Seed",
        "rarity": 54
      },
      {
        "itemID": 1732,
        "name": "Rockin' Headband",
        "rarity": 72
      },
      {
        "itemID": 1733,
        "name": "Rockin' Headband Seed",
        "rarity": 72
      },
      {
        "itemID": 1734,
        "name": "Kuma-boshi",
        "rarity": 999
      },
      {
        "itemID": 1735,
        "name": "Kuma-boshi Seed",
        "rarity": 999
      },
      {
        "itemID": 1736,
        "name": "Knight Helmet",
        "rarity": 57
      },
      {
        "itemID": 1737,
        "name": "Knight Helmet Seed",
        "rarity": 57
      },
      {
        "itemID": 1738,
        "name": "Crystal Cape",
        "rarity": 999
      },
      {
        "itemID": 1739,
        "name": "Crystal Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 1740,
        "name": "StarBoard",
        "rarity": 999
      },
      {
        "itemID": 1741,
        "name": "StarBoard Seed",
        "rarity": 999
      },
      {
        "itemID": 1742,
        "name": "Puppy Leash",
        "rarity": 999
      },
      {
        "itemID": 1743,
        "name": "Puppy Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1744,
        "name": "Brown Wallpaper",
        "rarity": 42
      },
      {
        "itemID": 1745,
        "name": "Brown Wallpaper Seed",
        "rarity": 42
      },
      {
        "itemID": 1746,
        "name": "Fuel Pack",
        "rarity": 116
      },
      {
        "itemID": 1747,
        "name": "Fuel Pack Seed",
        "rarity": 116
      },
      {
        "itemID": 1748,
        "name": "Flamethrower",
        "rarity": 71
      },
      {
        "itemID": 1749,
        "name": "Flamethrower Seed",
        "rarity": 71
      },
      {
        "itemID": 1750,
        "name": "Weather Machine - Warp Speed",
        "rarity": 999
      },
      {
        "itemID": 1751,
        "name": "Weather Machine - Warp Speed Seed",
        "rarity": 999
      },
      {
        "itemID": 1752,
        "name": "Guestbook",
        "rarity": 72
      },
      {
        "itemID": 1753,
        "name": "Guestbook Seed",
        "rarity": 72
      },
      {
        "itemID": 1754,
        "name": "Flatscreen TV",
        "rarity": 71
      },
      {
        "itemID": 1755,
        "name": "Flatscreen TV Seed",
        "rarity": 71
      },
      {
        "itemID": 1756,
        "name": "Tiger Block",
        "rarity": 13
      },
      {
        "itemID": 1757,
        "name": "Tiger Block Seed",
        "rarity": 13
      },
      {
        "itemID": 1758,
        "name": "Growboard",
        "rarity": 999
      },
      {
        "itemID": 1759,
        "name": "Growboard Seed",
        "rarity": 999
      },
      {
        "itemID": 1760,
        "name": "Spiritfire Mask",
        "rarity": 999
      },
      {
        "itemID": 1761,
        "name": "Spiritfire Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 1762,
        "name": "Soda Jetpack",
        "rarity": 60
      },
      {
        "itemID": 1763,
        "name": "Soda Jetpack Seed",
        "rarity": 60
      },
      {
        "itemID": 1764,
        "name": "Dominatus Moderateus",
        "rarity": 90
      },
      {
        "itemID": 1765,
        "name": "Dominatus Moderateus Seed",
        "rarity": 90
      },
      {
        "itemID": 1766,
        "name": "Seagull",
        "rarity": 44
      },
      {
        "itemID": 1767,
        "name": "Seagull Seed",
        "rarity": 44
      },
      {
        "itemID": 1768,
        "name": "Pacifier",
        "rarity": 67
      },
      {
        "itemID": 1769,
        "name": "Pacifier Seed",
        "rarity": 67
      },
      {
        "itemID": 1770,
        "name": "Flower Checkpoint",
        "rarity": 49
      },
      {
        "itemID": 1771,
        "name": "Flower Checkpoint Seed",
        "rarity": 49
      },
      {
        "itemID": 1772,
        "name": "Bubble Gum",
        "rarity": 23
      },
      {
        "itemID": 1773,
        "name": "Bubble Gum Seed",
        "rarity": 23
      },
      {
        "itemID": 1774,
        "name": "Diving Board",
        "rarity": 22
      },
      {
        "itemID": 1775,
        "name": "Diving Board Seed",
        "rarity": 22
      },
      {
        "itemID": 1776,
        "name": "Diving Board Support",
        "rarity": 71
      },
      {
        "itemID": 1777,
        "name": "Diving Board Support Seed",
        "rarity": 71
      },
      {
        "itemID": 1778,
        "name": "Deluxe Grow Spray",
        "rarity": 999
      },
      {
        "itemID": 1779,
        "name": "Deluxe Grow Spray Seed",
        "rarity": 999
      },
      {
        "itemID": 1780,
        "name": "Legendbot-009",
        "rarity": 999
      },
      {
        "itemID": 1781,
        "name": "Legendbot-009 Seed",
        "rarity": 999
      },
      {
        "itemID": 1782,
        "name": "Dragon of Legend",
        "rarity": 999
      },
      {
        "itemID": 1783,
        "name": "Dragon of Legend Seed",
        "rarity": 999
      },
      {
        "itemID": 1784,
        "name": "Legendary Wings",
        "rarity": 999
      },
      {
        "itemID": 1785,
        "name": "Legendary Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1786,
        "name": "Legen",
        "rarity": 100
      },
      {
        "itemID": 1787,
        "name": "Legen Seed",
        "rarity": 100
      },
      {
        "itemID": 1788,
        "name": "Dary",
        "rarity": 100
      },
      {
        "itemID": 1789,
        "name": "Dary Seed",
        "rarity": 100
      },
      {
        "itemID": 1790,
        "name": "Legendary Wizard",
        "rarity": 200
      },
      {
        "itemID": 1791,
        "name": "Legendary Wizard Seed",
        "rarity": 200
      },
      {
        "itemID": 1792,
        "name": "Great Legendary Orb",
        "rarity": 999
      },
      {
        "itemID": 1793,
        "name": "Great Legendary Orb Seed",
        "rarity": 999
      },
      {
        "itemID": 1794,
        "name": "Legendary Orb",
        "rarity": 999
      },
      {
        "itemID": 1795,
        "name": "Legendary Orb Seed",
        "rarity": 999
      },
      {
        "itemID": 1796,
        "name": "Diamond Lock",
        "rarity": 999
      },
      {
        "itemID": 1797,
        "name": "Diamond Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 1798,
        "name": "Minotaur Mask",
        "rarity": 90
      },
      {
        "itemID": 1799,
        "name": "Minotaur Mask Seed",
        "rarity": 90
      },
      {
        "itemID": 1800,
        "name": "Muscle Suit",
        "rarity": 22
      },
      {
        "itemID": 1801,
        "name": "Muscle Suit Seed",
        "rarity": 22
      },
      {
        "itemID": 1802,
        "name": "Puzzle Brick",
        "rarity": 25
      },
      {
        "itemID": 1803,
        "name": "Puzzle Brick Seed",
        "rarity": 25
      },
      {
        "itemID": 1804,
        "name": "Zeus' Lightning Bolt",
        "rarity": 999
      },
      {
        "itemID": 1805,
        "name": "Zeus' Lightning Bolt Seed",
        "rarity": 999
      },
      {
        "itemID": 1806,
        "name": "Chinese Dragon Head",
        "rarity": 999
      },
      {
        "itemID": 1807,
        "name": "Chinese Dragon Head Seed",
        "rarity": 999
      },
      {
        "itemID": 1808,
        "name": "Chinese Dragon Body",
        "rarity": 999
      },
      {
        "itemID": 1809,
        "name": "Chinese Dragon Body Seed",
        "rarity": 999
      },
      {
        "itemID": 1810,
        "name": "Chinese Dragon Tail",
        "rarity": 999
      },
      {
        "itemID": 1811,
        "name": "Chinese Dragon Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 1812,
        "name": "Ssireum Shorts - Red",
        "rarity": 999
      },
      {
        "itemID": 1813,
        "name": "Ssireum Shorts - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 1814,
        "name": "Ssireum Shorts - Blue",
        "rarity": 999
      },
      {
        "itemID": 1815,
        "name": "Ssireum Shorts - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 1816,
        "name": "Ssireum Shorts - Yellow",
        "rarity": 999
      },
      {
        "itemID": 1817,
        "name": "Ssireum Shorts - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 1818,
        "name": "Ssireum Shorts - Purple",
        "rarity": 999
      },
      {
        "itemID": 1819,
        "name": "Ssireum Shorts - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 1820,
        "name": "Ssireum Shorts - Grey",
        "rarity": 999
      },
      {
        "itemID": 1821,
        "name": "Ssireum Shorts - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 1822,
        "name": "Golden Air Robinsons",
        "rarity": 999
      },
      {
        "itemID": 1823,
        "name": "Golden Air Robinsons Seed",
        "rarity": 999
      },
      {
        "itemID": 1824,
        "name": "Autumn Wings",
        "rarity": 999
      },
      {
        "itemID": 1825,
        "name": "Autumn Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1826,
        "name": "Autumn Bomb",
        "rarity": 999
      },
      {
        "itemID": 1827,
        "name": "Autumn Bomb Seed",
        "rarity": 999
      },
      {
        "itemID": 1828,
        "name": "Balance Mooncake",
        "rarity": 999
      },
      {
        "itemID": 1829,
        "name": "Balance Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 1830,
        "name": "Harvester",
        "rarity": 999
      },
      {
        "itemID": 1831,
        "name": "Harvester Seed",
        "rarity": 999
      },
      {
        "itemID": 1832,
        "name": "Sunflower Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 1833,
        "name": "Sunflower Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 1834,
        "name": "Moon Block",
        "rarity": 999
      },
      {
        "itemID": 1835,
        "name": "Moon Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1836,
        "name": "Diamond Flashaxe",
        "rarity": 999
      },
      {
        "itemID": 1837,
        "name": "Diamond Flashaxe Seed",
        "rarity": 999
      },
      {
        "itemID": 1838,
        "name": "Hot Pink Highlights",
        "rarity": 30
      },
      {
        "itemID": 1839,
        "name": "Hot Pink Highlights Seed",
        "rarity": 30
      },
      {
        "itemID": 1840,
        "name": "Long Black Bangs",
        "rarity": 17
      },
      {
        "itemID": 1841,
        "name": "Long Black Bangs Seed",
        "rarity": 17
      },
      {
        "itemID": 1842,
        "name": "Pink Pageboy",
        "rarity": 77
      },
      {
        "itemID": 1843,
        "name": "Pink Pageboy Seed",
        "rarity": 77
      },
      {
        "itemID": 1844,
        "name": "Long Blonde Bangs",
        "rarity": 14
      },
      {
        "itemID": 1845,
        "name": "Long Blonde Bangs Seed",
        "rarity": 14
      },
      {
        "itemID": 1846,
        "name": "Messy Auburn Tresses",
        "rarity": 10
      },
      {
        "itemID": 1847,
        "name": "Messy Auburn Tresses Seed",
        "rarity": 10
      },
      {
        "itemID": 1848,
        "name": "Growbans",
        "rarity": 46
      },
      {
        "itemID": 1849,
        "name": "Growbans Seed",
        "rarity": 46
      },
      {
        "itemID": 1850,
        "name": "Pink Hair Bow",
        "rarity": 29
      },
      {
        "itemID": 1851,
        "name": "Pink Hair Bow Seed",
        "rarity": 29
      },
      {
        "itemID": 1852,
        "name": "Butterfly Hair Pin",
        "rarity": 94
      },
      {
        "itemID": 1853,
        "name": "Butterfly Hair Pin Seed",
        "rarity": 94
      },
      {
        "itemID": 1854,
        "name": "Bee Hair Pin",
        "rarity": 42
      },
      {
        "itemID": 1855,
        "name": "Bee Hair Pin Seed",
        "rarity": 42
      },
      {
        "itemID": 1856,
        "name": "Simple Purple Dress",
        "rarity": 41
      },
      {
        "itemID": 1857,
        "name": "Simple Purple Dress Seed",
        "rarity": 41
      },
      {
        "itemID": 1858,
        "name": "Red Sun Dress",
        "rarity": 37
      },
      {
        "itemID": 1859,
        "name": "Red Sun Dress Seed",
        "rarity": 37
      },
      {
        "itemID": 1860,
        "name": "Blue Skirt",
        "rarity": 31
      },
      {
        "itemID": 1861,
        "name": "Blue Skirt Seed",
        "rarity": 31
      },
      {
        "itemID": 1862,
        "name": "Checkered Dress",
        "rarity": 44
      },
      {
        "itemID": 1863,
        "name": "Checkered Dress Seed",
        "rarity": 44
      },
      {
        "itemID": 1864,
        "name": "Cardboard Box",
        "rarity": 45
      },
      {
        "itemID": 1865,
        "name": "Cardboard Box Seed",
        "rarity": 45
      },
      {
        "itemID": 1866,
        "name": "Block Glue",
        "rarity": 999
      },
      {
        "itemID": 1867,
        "name": "Block Glue Seed",
        "rarity": 999
      },
      {
        "itemID": 1868,
        "name": "Violet Protodrake Leash",
        "rarity": 999
      },
      {
        "itemID": 1869,
        "name": "Violet Protodrake Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 1870,
        "name": "Hanging Guytrap",
        "rarity": 41
      },
      {
        "itemID": 1871,
        "name": "Hanging Guytrap Seed",
        "rarity": 41
      },
      {
        "itemID": 1872,
        "name": "Funhouse Mirror",
        "rarity": 999
      },
      {
        "itemID": 1873,
        "name": "Funhouse Mirror Seed",
        "rarity": 999
      },
      {
        "itemID": 1874,
        "name": "Ring Of Force",
        "rarity": 999
      },
      {
        "itemID": 1875,
        "name": "Ring Of Force Seed",
        "rarity": 999
      },
      {
        "itemID": 1876,
        "name": "Ring Of Winds",
        "rarity": 999
      },
      {
        "itemID": 1877,
        "name": "Ring Of Winds Seed",
        "rarity": 999
      },
      {
        "itemID": 1878,
        "name": "Carnival Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 1879,
        "name": "Carnival Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 1880,
        "name": "Carnival Awning",
        "rarity": 999
      },
      {
        "itemID": 1881,
        "name": "Carnival Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 1882,
        "name": "Carnival Block",
        "rarity": 999
      },
      {
        "itemID": 1883,
        "name": "Carnival Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1884,
        "name": "Red Pennant",
        "rarity": 999
      },
      {
        "itemID": 1885,
        "name": "Red Pennant Seed",
        "rarity": 999
      },
      {
        "itemID": 1886,
        "name": "Blue Pennant",
        "rarity": 999
      },
      {
        "itemID": 1887,
        "name": "Blue Pennant Seed",
        "rarity": 999
      },
      {
        "itemID": 1888,
        "name": "Green Pennant",
        "rarity": 999
      },
      {
        "itemID": 1889,
        "name": "Green Pennant Seed",
        "rarity": 999
      },
      {
        "itemID": 1890,
        "name": "Yellow Pennant",
        "rarity": 999
      },
      {
        "itemID": 1891,
        "name": "Yellow Pennant Seed",
        "rarity": 999
      },
      {
        "itemID": 1892,
        "name": "Lion Taming Whip",
        "rarity": 999
      },
      {
        "itemID": 1893,
        "name": "Lion Taming Whip Seed",
        "rarity": 999
      },
      {
        "itemID": 1894,
        "name": "Lion Block",
        "rarity": 999
      },
      {
        "itemID": 1895,
        "name": "Lion Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1896,
        "name": "Elephant Block",
        "rarity": 999
      },
      {
        "itemID": 1897,
        "name": "Elephant Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1898,
        "name": "Golden Ticket",
        "rarity": 999
      },
      {
        "itemID": 1899,
        "name": "Golden Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 1900,
        "name": "The Ringmaster",
        "rarity": 999
      },
      {
        "itemID": 1901,
        "name": "The Ringmaster Seed",
        "rarity": 999
      },
      {
        "itemID": 1902,
        "name": "Golden Ticket Booth",
        "rarity": 999
      },
      {
        "itemID": 1903,
        "name": "Golden Ticket Booth Seed",
        "rarity": 999
      },
      {
        "itemID": 1904,
        "name": "The One Ring",
        "rarity": 999
      },
      {
        "itemID": 1905,
        "name": "The One Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 1906,
        "name": "Carnival Sign",
        "rarity": 999
      },
      {
        "itemID": 1907,
        "name": "Carnival Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 1908,
        "name": "Bullseye",
        "rarity": 999
      },
      {
        "itemID": 1909,
        "name": "Bullseye Seed",
        "rarity": 999
      },
      {
        "itemID": 1910,
        "name": "Carnival Tent",
        "rarity": 999
      },
      {
        "itemID": 1911,
        "name": "Carnival Tent Seed",
        "rarity": 999
      },
      {
        "itemID": 1912,
        "name": "Carnival Landing",
        "rarity": 999
      },
      {
        "itemID": 1913,
        "name": "Carnival Landing Seed",
        "rarity": 999
      },
      {
        "itemID": 1914,
        "name": "Carnival Platform",
        "rarity": 999
      },
      {
        "itemID": 1915,
        "name": "Carnival Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 1916,
        "name": "Card Block - Back",
        "rarity": 999
      },
      {
        "itemID": 1917,
        "name": "Card Block - Back Seed",
        "rarity": 999
      },
      {
        "itemID": 1918,
        "name": "Card Block - Pentagon",
        "rarity": 999
      },
      {
        "itemID": 1919,
        "name": "Card Block - Pentagon Seed",
        "rarity": 999
      },
      {
        "itemID": 1920,
        "name": "Card Block - Star",
        "rarity": 999
      },
      {
        "itemID": 1921,
        "name": "Card Block - Star Seed",
        "rarity": 999
      },
      {
        "itemID": 1922,
        "name": "Card Block - Sizzle",
        "rarity": 999
      },
      {
        "itemID": 1923,
        "name": "Card Block - Sizzle Seed",
        "rarity": 999
      },
      {
        "itemID": 1924,
        "name": "Card Block - Plus",
        "rarity": 999
      },
      {
        "itemID": 1925,
        "name": "Card Block - Plus Seed",
        "rarity": 999
      },
      {
        "itemID": 1926,
        "name": "Mirror Maze Block",
        "rarity": 999
      },
      {
        "itemID": 1927,
        "name": "Mirror Maze Block Seed",
        "rarity": 999
      },
      {
        "itemID": 1928,
        "name": "Ringmaster Hat",
        "rarity": 999
      },
      {
        "itemID": 1929,
        "name": "Ringmaster Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 1930,
        "name": "Ringmaster Suit",
        "rarity": 999
      },
      {
        "itemID": 1931,
        "name": "Ringmaster Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 1932,
        "name": "Fistful Of Rings",
        "rarity": 999
      },
      {
        "itemID": 1933,
        "name": "Fistful Of Rings Seed",
        "rarity": 999
      },
      {
        "itemID": 1934,
        "name": "Orbs Of Elixir",
        "rarity": 999
      },
      {
        "itemID": 1935,
        "name": "Orbs Of Elixir Seed",
        "rarity": 999
      },
      {
        "itemID": 1936,
        "name": "Blazing Electro Wings",
        "rarity": 999
      },
      {
        "itemID": 1937,
        "name": "Blazing Electro Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1938,
        "name": "Diamond Wings",
        "rarity": 999
      },
      {
        "itemID": 1939,
        "name": "Diamond Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1940,
        "name": "Diamond Rocket Shoes",
        "rarity": 999
      },
      {
        "itemID": 1941,
        "name": "Diamond Rocket Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 1942,
        "name": "Calliope",
        "rarity": 999
      },
      {
        "itemID": 1943,
        "name": "Calliope Seed",
        "rarity": 999
      },
      {
        "itemID": 1944,
        "name": "Diamond Diaper",
        "rarity": 999
      },
      {
        "itemID": 1945,
        "name": "Diamond Diaper Seed",
        "rarity": 999
      },
      {
        "itemID": 1946,
        "name": "Ice Calf Leash",
        "rarity": 226
      },
      {
        "itemID": 1947,
        "name": "Ice Calf Leash Seed",
        "rarity": 226
      },
      {
        "itemID": 1948,
        "name": "Electro Magnifying Glass",
        "rarity": 999
      },
      {
        "itemID": 1949,
        "name": "Electro Magnifying Glass Seed",
        "rarity": 999
      },
      {
        "itemID": 1950,
        "name": "Growley Motorcycle",
        "rarity": 999
      },
      {
        "itemID": 1951,
        "name": "Growley Motorcycle Seed",
        "rarity": 999
      },
      {
        "itemID": 1952,
        "name": "Owlbeard",
        "rarity": 999
      },
      {
        "itemID": 1953,
        "name": "Owlbeard Seed",
        "rarity": 999
      },
      {
        "itemID": 1954,
        "name": "Blue Star Shoes",
        "rarity": 48
      },
      {
        "itemID": 1955,
        "name": "Blue Star Shoes Seed",
        "rarity": 48
      },
      {
        "itemID": 1956,
        "name": "Chaos Cursed Wand",
        "rarity": 999
      },
      {
        "itemID": 1957,
        "name": "Chaos Cursed Wand Seed",
        "rarity": 999
      },
      {
        "itemID": 1958,
        "name": "Genuine Rings",
        "rarity": 999
      },
      {
        "itemID": 1959,
        "name": "Genuine Rings Seed",
        "rarity": 999
      },
      {
        "itemID": 1960,
        "name": "Ecto Pack",
        "rarity": 116
      },
      {
        "itemID": 1961,
        "name": "Ecto Pack Seed",
        "rarity": 116
      },
      {
        "itemID": 1962,
        "name": "Haunted Chemical",
        "rarity": 999
      },
      {
        "itemID": 1963,
        "name": "Haunted Chemical Seed",
        "rarity": 999
      },
      {
        "itemID": 1964,
        "name": "Devilfruit",
        "rarity": 50
      },
      {
        "itemID": 1965,
        "name": "Devilfruit Seed",
        "rarity": 50
      },
      {
        "itemID": 1966,
        "name": "Harvester Of Sorrows",
        "rarity": 999
      },
      {
        "itemID": 1967,
        "name": "Harvester Of Sorrows Seed",
        "rarity": 999
      },
      {
        "itemID": 1968,
        "name": "Death's Scarf",
        "rarity": 999
      },
      {
        "itemID": 1969,
        "name": "Death's Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 1970,
        "name": "Nightmare Devil Wings",
        "rarity": 999
      },
      {
        "itemID": 1971,
        "name": "Nightmare Devil Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 1972,
        "name": "Edvoid's Mistake",
        "rarity": 70
      },
      {
        "itemID": 1973,
        "name": "Edvoid's Mistake Seed",
        "rarity": 70
      },
      {
        "itemID": 1974,
        "name": "Nightmare Magnifying Glass",
        "rarity": 999
      },
      {
        "itemID": 1975,
        "name": "Nightmare Magnifying Glass Seed",
        "rarity": 999
      },
      {
        "itemID": 1976,
        "name": "Teeny Tiny Skull",
        "rarity": 999
      },
      {
        "itemID": 1977,
        "name": "Teeny Tiny Skull Seed",
        "rarity": 999
      },
      {
        "itemID": 1978,
        "name": "Avenie Golden Horse",
        "rarity": 999
      },
      {
        "itemID": 1979,
        "name": "Avenie Golden Horse Seed",
        "rarity": 999
      },
      {
        "itemID": 1980,
        "name": "Claw Glove",
        "rarity": 70
      },
      {
        "itemID": 1981,
        "name": "Claw Glove Seed",
        "rarity": 70
      },
      {
        "itemID": 1982,
        "name": "Creepy Wallpaper",
        "rarity": 15
      },
      {
        "itemID": 1983,
        "name": "Creepy Wallpaper Seed",
        "rarity": 15
      },
      {
        "itemID": 1984,
        "name": "Haunted Mausoleum",
        "rarity": 85
      },
      {
        "itemID": 1985,
        "name": "Haunted Mausoleum Seed",
        "rarity": 85
      },
      {
        "itemID": 1986,
        "name": "Gemini Ring",
        "rarity": 999
      },
      {
        "itemID": 1987,
        "name": "Gemini Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 1988,
        "name": "Doppelganger Potion",
        "rarity": 75
      },
      {
        "itemID": 1989,
        "name": "Doppelganger Potion Seed",
        "rarity": 75
      },
      {
        "itemID": 1990,
        "name": "Deadly Spider",
        "rarity": 85
      },
      {
        "itemID": 1991,
        "name": "Deadly Spider Seed",
        "rarity": 85
      },
      {
        "itemID": 1992,
        "name": "Hanging Thread",
        "rarity": 5
      },
      {
        "itemID": 1993,
        "name": "Hanging Thread Seed",
        "rarity": 5
      },
      {
        "itemID": 1994,
        "name": "Muerto Mask",
        "rarity": 70
      },
      {
        "itemID": 1995,
        "name": "Muerto Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 1996,
        "name": "Ring of Wisdom",
        "rarity": 999
      },
      {
        "itemID": 1997,
        "name": "Ring of Wisdom Seed",
        "rarity": 999
      },
      {
        "itemID": 1998,
        "name": "Skeletal Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 1999,
        "name": "Skeletal Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 2000,
        "name": "Dragon Bone",
        "rarity": 999
      },
      {
        "itemID": 2001,
        "name": "Dragon Bone Seed",
        "rarity": 999
      },
      {
        "itemID": 2002,
        "name": "Golden Apple",
        "rarity": 999
      },
      {
        "itemID": 2003,
        "name": "Golden Apple Seed",
        "rarity": 999
      },
      {
        "itemID": 2004,
        "name": "Leather Jacket",
        "rarity": 90
      },
      {
        "itemID": 2005,
        "name": "Leather Jacket Seed",
        "rarity": 90
      },
      {
        "itemID": 2006,
        "name": "Puffy Orange Jacket",
        "rarity": 66
      },
      {
        "itemID": 2007,
        "name": "Puffy Orange Jacket Seed",
        "rarity": 66
      },
      {
        "itemID": 2008,
        "name": "Twisted Spikes",
        "rarity": 13
      },
      {
        "itemID": 2009,
        "name": "Twisted Spikes Seed",
        "rarity": 13
      },
      {
        "itemID": 2010,
        "name": "Glowy Block",
        "rarity": 49
      },
      {
        "itemID": 2011,
        "name": "Glowy Block Seed",
        "rarity": 49
      },
      {
        "itemID": 2012,
        "name": "Dark Grey Block",
        "rarity": 11
      },
      {
        "itemID": 2013,
        "name": "Dark Grey Block Seed",
        "rarity": 11
      },
      {
        "itemID": 2014,
        "name": "Dark Red Block",
        "rarity": 11
      },
      {
        "itemID": 2015,
        "name": "Dark Red Block Seed",
        "rarity": 11
      },
      {
        "itemID": 2016,
        "name": "Dark Orange Block",
        "rarity": 16
      },
      {
        "itemID": 2017,
        "name": "Dark Orange Block Seed",
        "rarity": 16
      },
      {
        "itemID": 2018,
        "name": "Dark Yellow Block",
        "rarity": 13
      },
      {
        "itemID": 2019,
        "name": "Dark Yellow Block Seed",
        "rarity": 13
      },
      {
        "itemID": 2020,
        "name": "Dark Green Block",
        "rarity": 12
      },
      {
        "itemID": 2021,
        "name": "Dark Green Block Seed",
        "rarity": 12
      },
      {
        "itemID": 2022,
        "name": "Dark Aqua Block",
        "rarity": 12
      },
      {
        "itemID": 2023,
        "name": "Dark Aqua Block Seed",
        "rarity": 12
      },
      {
        "itemID": 2024,
        "name": "Dark Blue Block",
        "rarity": 22
      },
      {
        "itemID": 2025,
        "name": "Dark Blue Block Seed",
        "rarity": 22
      },
      {
        "itemID": 2026,
        "name": "Dark Purple Block",
        "rarity": 26
      },
      {
        "itemID": 2027,
        "name": "Dark Purple Block Seed",
        "rarity": 26
      },
      {
        "itemID": 2028,
        "name": "Dark Brown Block",
        "rarity": 11
      },
      {
        "itemID": 2029,
        "name": "Dark Brown Block Seed",
        "rarity": 11
      },
      {
        "itemID": 2030,
        "name": "Special Cultist Hood",
        "rarity": 999
      },
      {
        "itemID": 2031,
        "name": "Special Cultist Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 2032,
        "name": "Puddy Leash",
        "rarity": 999
      },
      {
        "itemID": 2033,
        "name": "Puddy Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 2034,
        "name": "Comet Dust",
        "rarity": 10
      },
      {
        "itemID": 2035,
        "name": "Starseed",
        "rarity": 10
      },
      {
        "itemID": 2036,
        "name": "Antimatter Dust",
        "rarity": 50
      },
      {
        "itemID": 2037,
        "name": "Galactic Starseed",
        "rarity": 50
      },
      {
        "itemID": 2038,
        "name": "Unearthly Chemical",
        "rarity": 59
      },
      {
        "itemID": 2039,
        "name": "Unearthly Chemical Seed",
        "rarity": 59
      },
      {
        "itemID": 2040,
        "name": "Comet Pants",
        "rarity": 35
      },
      {
        "itemID": 2041,
        "name": "Comet Pants Seed",
        "rarity": 35
      },
      {
        "itemID": 2042,
        "name": "Comet Shirt",
        "rarity": 29
      },
      {
        "itemID": 2043,
        "name": "Comet Shirt Seed",
        "rarity": 29
      },
      {
        "itemID": 2044,
        "name": "Comet Beanie",
        "rarity": 121
      },
      {
        "itemID": 2045,
        "name": "Comet Beanie Seed",
        "rarity": 121
      },
      {
        "itemID": 2046,
        "name": "Weather Machine - Comet",
        "rarity": 144
      },
      {
        "itemID": 2047,
        "name": "Weather Machine - Comet Seed",
        "rarity": 144
      },
      {
        "itemID": 2048,
        "name": "Riding Comet",
        "rarity": 106
      },
      {
        "itemID": 2049,
        "name": "Riding Comet Seed",
        "rarity": 106
      },
      {
        "itemID": 2050,
        "name": "Rocket Pack",
        "rarity": 85
      },
      {
        "itemID": 2051,
        "name": "Rocket Pack Seed",
        "rarity": 85
      },
      {
        "itemID": 2052,
        "name": "Cosmic Lenses",
        "rarity": 101
      },
      {
        "itemID": 2053,
        "name": "Cosmic Lenses Seed",
        "rarity": 101
      },
      {
        "itemID": 2054,
        "name": "Cosmic Hair",
        "rarity": 17
      },
      {
        "itemID": 2055,
        "name": "Cosmic Hair Seed",
        "rarity": 17
      },
      {
        "itemID": 2056,
        "name": "Alien Block",
        "rarity": 22
      },
      {
        "itemID": 2057,
        "name": "Alien Block Seed",
        "rarity": 22
      },
      {
        "itemID": 2058,
        "name": "Xenoid Block",
        "rarity": 22
      },
      {
        "itemID": 2059,
        "name": "Xenoid Block Seed",
        "rarity": 22
      },
      {
        "itemID": 2060,
        "name": "Cosmic Skirt",
        "rarity": 51
      },
      {
        "itemID": 2061,
        "name": "Cosmic Skirt Seed",
        "rarity": 51
      },
      {
        "itemID": 2062,
        "name": "Velour Space Uniform",
        "rarity": 52
      },
      {
        "itemID": 2063,
        "name": "Velour Space Uniform Seed",
        "rarity": 52
      },
      {
        "itemID": 2064,
        "name": "Riding Meteor",
        "rarity": 121
      },
      {
        "itemID": 2065,
        "name": "Riding Meteor Seed",
        "rarity": 121
      },
      {
        "itemID": 2066,
        "name": "Cosmic Unicorn Bracelet",
        "rarity": 100
      },
      {
        "itemID": 2067,
        "name": "Cosmic Unicorn Bracelet Seed",
        "rarity": 100
      },
      {
        "itemID": 2068,
        "name": "Space Command Seat",
        "rarity": 74
      },
      {
        "itemID": 2069,
        "name": "Space Command Seat Seed",
        "rarity": 74
      },
      {
        "itemID": 2070,
        "name": "Ion Conduit",
        "rarity": 57
      },
      {
        "itemID": 2071,
        "name": "Ion Conduit Seed",
        "rarity": 57
      },
      {
        "itemID": 2072,
        "name": "Xenonite Crystal",
        "rarity": 999
      },
      {
        "itemID": 2073,
        "name": "Xenonite Crystal Seed",
        "rarity": 999
      },
      {
        "itemID": 2074,
        "name": "Super Shirt - Red",
        "rarity": 88
      },
      {
        "itemID": 2075,
        "name": "Super Shirt - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2076,
        "name": "Super Shirt - Blue",
        "rarity": 88
      },
      {
        "itemID": 2077,
        "name": "Super Shirt - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2078,
        "name": "Super Shirt - Green",
        "rarity": 88
      },
      {
        "itemID": 2079,
        "name": "Super Shirt - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2080,
        "name": "Super Shirt - Purple",
        "rarity": 88
      },
      {
        "itemID": 2081,
        "name": "Super Shirt - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2082,
        "name": "Super Shirt - Black",
        "rarity": 999
      },
      {
        "itemID": 2083,
        "name": "Super Shirt - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2084,
        "name": "Super Shirt - Gold",
        "rarity": 999
      },
      {
        "itemID": 2085,
        "name": "Super Shirt - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2086,
        "name": "Muscle Shirt - Red",
        "rarity": 88
      },
      {
        "itemID": 2087,
        "name": "Muscle Shirt - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2088,
        "name": "Muscle Shirt - Blue",
        "rarity": 88
      },
      {
        "itemID": 2089,
        "name": "Muscle Shirt - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2090,
        "name": "Muscle Shirt - Green",
        "rarity": 88
      },
      {
        "itemID": 2091,
        "name": "Muscle Shirt - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2092,
        "name": "Muscle Shirt - Purple",
        "rarity": 88
      },
      {
        "itemID": 2093,
        "name": "Muscle Shirt - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2094,
        "name": "Muscle Shirt - Black",
        "rarity": 999
      },
      {
        "itemID": 2095,
        "name": "Muscle Shirt - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2096,
        "name": "Muscle Shirt - Gold",
        "rarity": 999
      },
      {
        "itemID": 2097,
        "name": "Muscle Shirt - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2098,
        "name": "Heroic Tights - Red",
        "rarity": 88
      },
      {
        "itemID": 2099,
        "name": "Heroic Tights - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2100,
        "name": "Heroic Tights - Blue",
        "rarity": 88
      },
      {
        "itemID": 2101,
        "name": "Heroic Tights - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2102,
        "name": "Heroic Tights - Green",
        "rarity": 88
      },
      {
        "itemID": 2103,
        "name": "Heroic Tights - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2104,
        "name": "Heroic Tights - Purple",
        "rarity": 88
      },
      {
        "itemID": 2105,
        "name": "Heroic Tights - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2106,
        "name": "Heroic Tights - Black",
        "rarity": 999
      },
      {
        "itemID": 2107,
        "name": "Heroic Tights - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2108,
        "name": "Heroic Tights - Gold",
        "rarity": 999
      },
      {
        "itemID": 2109,
        "name": "Heroic Tights - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2110,
        "name": "Super Tights - Red",
        "rarity": 88
      },
      {
        "itemID": 2111,
        "name": "Super Tights - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2112,
        "name": "Super Tights - Blue",
        "rarity": 88
      },
      {
        "itemID": 2113,
        "name": "Super Tights - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2114,
        "name": "Super Tights - Green",
        "rarity": 88
      },
      {
        "itemID": 2115,
        "name": "Super Tights - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2116,
        "name": "Super Tights - Purple",
        "rarity": 88
      },
      {
        "itemID": 2117,
        "name": "Super Tights - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2118,
        "name": "Super Tights - Black",
        "rarity": 999
      },
      {
        "itemID": 2119,
        "name": "Super Tights - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2120,
        "name": "Super Tights - Gold",
        "rarity": 999
      },
      {
        "itemID": 2121,
        "name": "Super Tights - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2122,
        "name": "Heroic Boots - Red",
        "rarity": 88
      },
      {
        "itemID": 2123,
        "name": "Heroic Boots - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2124,
        "name": "Heroic Boots - Blue",
        "rarity": 88
      },
      {
        "itemID": 2125,
        "name": "Heroic Boots - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2126,
        "name": "Heroic Boots - Green",
        "rarity": 88
      },
      {
        "itemID": 2127,
        "name": "Heroic Boots - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2128,
        "name": "Heroic Boots - Purple",
        "rarity": 88
      },
      {
        "itemID": 2129,
        "name": "Heroic Boots - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2130,
        "name": "Heroic Boots - Black",
        "rarity": 999
      },
      {
        "itemID": 2131,
        "name": "Heroic Boots - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2132,
        "name": "Heroic Boots - Gold",
        "rarity": 999
      },
      {
        "itemID": 2133,
        "name": "Heroic Boots - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2134,
        "name": "Superhero Mask - Red",
        "rarity": 88
      },
      {
        "itemID": 2135,
        "name": "Superhero Mask - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2136,
        "name": "Superhero Mask - Blue",
        "rarity": 88
      },
      {
        "itemID": 2137,
        "name": "Superhero Mask - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2138,
        "name": "Superhero Mask - Green",
        "rarity": 88
      },
      {
        "itemID": 2139,
        "name": "Superhero Mask - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2140,
        "name": "Superhero Mask - Purple",
        "rarity": 88
      },
      {
        "itemID": 2141,
        "name": "Superhero Mask - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2142,
        "name": "Superhero Mask - Black",
        "rarity": 999
      },
      {
        "itemID": 2143,
        "name": "Superhero Mask - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2144,
        "name": "Superhero Mask - Gold",
        "rarity": 999
      },
      {
        "itemID": 2145,
        "name": "Superhero Mask - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2146,
        "name": "Crimefighter Mask - Red",
        "rarity": 88
      },
      {
        "itemID": 2147,
        "name": "Crimefighter Mask - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2148,
        "name": "Crimefighter Mask - Blue",
        "rarity": 88
      },
      {
        "itemID": 2149,
        "name": "Crimefighter Mask - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2150,
        "name": "Crimefighter Mask - Green",
        "rarity": 88
      },
      {
        "itemID": 2151,
        "name": "Crimefighter Mask - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2152,
        "name": "Crimefighter Mask - Purple",
        "rarity": 88
      },
      {
        "itemID": 2153,
        "name": "Crimefighter Mask - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2154,
        "name": "Crimefighter Mask - Black",
        "rarity": 999
      },
      {
        "itemID": 2155,
        "name": "Crimefighter Mask - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2156,
        "name": "Crimefighter Mask - Gold",
        "rarity": 999
      },
      {
        "itemID": 2157,
        "name": "Crimefighter Mask - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2158,
        "name": "Super Cape - Red",
        "rarity": 88
      },
      {
        "itemID": 2159,
        "name": "Super Cape - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2160,
        "name": "Super Cape - Blue",
        "rarity": 88
      },
      {
        "itemID": 2161,
        "name": "Super Cape - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2162,
        "name": "Super Cape - Green",
        "rarity": 88
      },
      {
        "itemID": 2163,
        "name": "Super Cape - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2164,
        "name": "Super Cape - Purple",
        "rarity": 88
      },
      {
        "itemID": 2165,
        "name": "Super Cape - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2166,
        "name": "Super Cape - Black",
        "rarity": 999
      },
      {
        "itemID": 2167,
        "name": "Super Cape - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2168,
        "name": "Super Cape - Gold",
        "rarity": 999
      },
      {
        "itemID": 2169,
        "name": "Super Cape - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2170,
        "name": "Superheroine Top - Red",
        "rarity": 88
      },
      {
        "itemID": 2171,
        "name": "Superheroine Top - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2172,
        "name": "Superheroine Top - Blue",
        "rarity": 88
      },
      {
        "itemID": 2173,
        "name": "Superheroine Top - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2174,
        "name": "Superheroine Top - Green",
        "rarity": 88
      },
      {
        "itemID": 2175,
        "name": "Superheroine Top - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2176,
        "name": "Superheroine Top - Purple",
        "rarity": 88
      },
      {
        "itemID": 2177,
        "name": "Superheroine Top - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2178,
        "name": "Superheroine Top - Black",
        "rarity": 999
      },
      {
        "itemID": 2179,
        "name": "Superheroine Top - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2180,
        "name": "Superheroine Top - Gold",
        "rarity": 999
      },
      {
        "itemID": 2181,
        "name": "Superheroine Top - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2182,
        "name": "Super Eye Mask - Red",
        "rarity": 88
      },
      {
        "itemID": 2183,
        "name": "Super Eye Mask - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 2184,
        "name": "Super Eye Mask - Blue",
        "rarity": 88
      },
      {
        "itemID": 2185,
        "name": "Super Eye Mask - Blue Seed",
        "rarity": 88
      },
      {
        "itemID": 2186,
        "name": "Super Eye Mask - Green",
        "rarity": 88
      },
      {
        "itemID": 2187,
        "name": "Super Eye Mask - Green Seed",
        "rarity": 88
      },
      {
        "itemID": 2188,
        "name": "Super Eye Mask - Purple",
        "rarity": 88
      },
      {
        "itemID": 2189,
        "name": "Super Eye Mask - Purple Seed",
        "rarity": 88
      },
      {
        "itemID": 2190,
        "name": "Super Eye Mask - Black",
        "rarity": 999
      },
      {
        "itemID": 2191,
        "name": "Super Eye Mask - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 2192,
        "name": "Super Eye Mask - Gold",
        "rarity": 999
      },
      {
        "itemID": 2193,
        "name": "Super Eye Mask - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 2194,
        "name": "Super Logo - Skull",
        "rarity": 999
      },
      {
        "itemID": 2195,
        "name": "Super Logo - Skull Seed",
        "rarity": 999
      },
      {
        "itemID": 2196,
        "name": "Super Logo - Heart",
        "rarity": 999
      },
      {
        "itemID": 2197,
        "name": "Super Logo - Heart Seed",
        "rarity": 999
      },
      {
        "itemID": 2198,
        "name": "Super Logo - Lightning",
        "rarity": 999
      },
      {
        "itemID": 2199,
        "name": "Super Logo - Lightning Seed",
        "rarity": 999
      },
      {
        "itemID": 2200,
        "name": "Super Logo - Eye",
        "rarity": 999
      },
      {
        "itemID": 2201,
        "name": "Super Logo - Eye Seed",
        "rarity": 999
      },
      {
        "itemID": 2202,
        "name": "Super Logo - Echo",
        "rarity": 999
      },
      {
        "itemID": 2203,
        "name": "Super Logo - Echo Seed",
        "rarity": 999
      },
      {
        "itemID": 2204,
        "name": "Geiger Counter",
        "rarity": 999
      },
      {
        "itemID": 2205,
        "name": "Geiger Counter Seed",
        "rarity": 999
      },
      {
        "itemID": 2206,
        "name": "Radioactive Chemical",
        "rarity": 999
      },
      {
        "itemID": 2207,
        "name": "Radioactive Chemical Seed",
        "rarity": 999
      },
      {
        "itemID": 2208,
        "name": "Phone Booth",
        "rarity": 80
      },
      {
        "itemID": 2209,
        "name": "Phone Booth Seed",
        "rarity": 80
      },
      {
        "itemID": 2210,
        "name": "Action Hero Stubble",
        "rarity": 84
      },
      {
        "itemID": 2211,
        "name": "Action Hero Stubble Seed",
        "rarity": 84
      },
      {
        "itemID": 2212,
        "name": "Black Crystal Dragon",
        "rarity": 100
      },
      {
        "itemID": 2213,
        "name": "Black Crystal Dragon Seed",
        "rarity": 100
      },
      {
        "itemID": 2214,
        "name": "Ice Horse",
        "rarity": 999
      },
      {
        "itemID": 2215,
        "name": "Ice Horse Seed",
        "rarity": 999
      },
      {
        "itemID": 2216,
        "name": "Edvoid's Fire-Nado",
        "rarity": 999
      },
      {
        "itemID": 2217,
        "name": "Edvoid's Fire-Nado Seed",
        "rarity": 999
      },
      {
        "itemID": 2218,
        "name": "Mighty Snow Rod",
        "rarity": 999
      },
      {
        "itemID": 2219,
        "name": "Mighty Snow Rod Seed",
        "rarity": 999
      },
      {
        "itemID": 2220,
        "name": "Tiny Tank",
        "rarity": 999
      },
      {
        "itemID": 2221,
        "name": "Tiny Tank Seed",
        "rarity": 999
      },
      {
        "itemID": 2222,
        "name": "Reindeer Bell",
        "rarity": 999
      },
      {
        "itemID": 2223,
        "name": "Reindeer Bell Seed",
        "rarity": 999
      },
      {
        "itemID": 2224,
        "name": "Magic Reindeer Bell",
        "rarity": 999
      },
      {
        "itemID": 2225,
        "name": "Magic Reindeer Bell Seed",
        "rarity": 999
      },
      {
        "itemID": 2226,
        "name": "Icicles",
        "rarity": 39
      },
      {
        "itemID": 2227,
        "name": "Icicles Seed",
        "rarity": 39
      },
      {
        "itemID": 2228,
        "name": "Siberian Tiger Block",
        "rarity": 44
      },
      {
        "itemID": 2229,
        "name": "Siberian Tiger Block Seed",
        "rarity": 44
      },
      {
        "itemID": 2230,
        "name": "Snowmobile",
        "rarity": 85
      },
      {
        "itemID": 2231,
        "name": "Snowmobile Seed",
        "rarity": 85
      },
      {
        "itemID": 2232,
        "name": "Candy Cane Platform",
        "rarity": 29
      },
      {
        "itemID": 2233,
        "name": "Candy Cane Platform Seed",
        "rarity": 29
      },
      {
        "itemID": 2234,
        "name": "Yeti Hat",
        "rarity": 43
      },
      {
        "itemID": 2235,
        "name": "Yeti Hat Seed",
        "rarity": 43
      },
      {
        "itemID": 2236,
        "name": "Holiday Cheer Bomb",
        "rarity": 125
      },
      {
        "itemID": 2237,
        "name": "Holiday Cheer Bomb Seed",
        "rarity": 125
      },
      {
        "itemID": 2238,
        "name": "Carnival Pipe",
        "rarity": 999
      },
      {
        "itemID": 2239,
        "name": "Carnival Pipe Seed",
        "rarity": 999
      },
      {
        "itemID": 2240,
        "name": "Winter Flu Vaccine",
        "rarity": 999
      },
      {
        "itemID": 2241,
        "name": "Winter Flu Vaccine Seed",
        "rarity": 999
      },
      {
        "itemID": 2242,
        "name": "Red Crystal",
        "rarity": 100
      },
      {
        "itemID": 2243,
        "name": "Red Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 2244,
        "name": "Green Crystal",
        "rarity": 100
      },
      {
        "itemID": 2245,
        "name": "Green Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 2246,
        "name": "Blue Crystal",
        "rarity": 100
      },
      {
        "itemID": 2247,
        "name": "Blue Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 2248,
        "name": "White Crystal",
        "rarity": 100
      },
      {
        "itemID": 2249,
        "name": "White Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 2250,
        "name": "Black Crystal",
        "rarity": 100
      },
      {
        "itemID": 2251,
        "name": "Black Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 2252,
        "name": "Crystal Clock",
        "rarity": 100
      },
      {
        "itemID": 2253,
        "name": "Crystal Clock Seed",
        "rarity": 100
      },
      {
        "itemID": 2254,
        "name": "Red Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2255,
        "name": "Red Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2256,
        "name": "Blue Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2257,
        "name": "Blue Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2258,
        "name": "Green Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2259,
        "name": "Green Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2260,
        "name": "Purple Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2261,
        "name": "Purple Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2262,
        "name": "Golden Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2263,
        "name": "Golden Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2264,
        "name": "Aqua Crystal Wings",
        "rarity": 100
      },
      {
        "itemID": 2265,
        "name": "Aqua Crystal Wings Seed",
        "rarity": 100
      },
      {
        "itemID": 2266,
        "name": "Crystal Glaive",
        "rarity": 100
      },
      {
        "itemID": 2267,
        "name": "Crystal Glaive Seed",
        "rarity": 100
      },
      {
        "itemID": 2268,
        "name": "Crystal Skull",
        "rarity": 100
      },
      {
        "itemID": 2269,
        "name": "Crystal Skull Seed",
        "rarity": 100
      },
      {
        "itemID": 2270,
        "name": "Stained Glass",
        "rarity": 10
      },
      {
        "itemID": 2271,
        "name": "Stained Glass Seed",
        "rarity": 10
      },
      {
        "itemID": 2272,
        "name": "Crystal Tree",
        "rarity": 33
      },
      {
        "itemID": 2273,
        "name": "Crystal Tree Seed",
        "rarity": 33
      },
      {
        "itemID": 2274,
        "name": "Crystal Gate",
        "rarity": 100
      },
      {
        "itemID": 2275,
        "name": "Crystal Gate Seed",
        "rarity": 100
      },
      {
        "itemID": 2276,
        "name": "Crystal Spikes",
        "rarity": 20
      },
      {
        "itemID": 2277,
        "name": "Crystal Spikes Seed",
        "rarity": 20
      },
      {
        "itemID": 2278,
        "name": "Mini-You",
        "rarity": 999
      },
      {
        "itemID": 2279,
        "name": "Mini-You Seed",
        "rarity": 999
      },
      {
        "itemID": 2280,
        "name": "Party Block",
        "rarity": 999
      },
      {
        "itemID": 2281,
        "name": "Party Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2282,
        "name": "Party Boombox",
        "rarity": 999
      },
      {
        "itemID": 2283,
        "name": "Party Boombox Seed",
        "rarity": 999
      },
      {
        "itemID": 2284,
        "name": "Weather Machine - Party",
        "rarity": 999
      },
      {
        "itemID": 2285,
        "name": "Weather Machine - Party Seed",
        "rarity": 999
      },
      {
        "itemID": 2286,
        "name": "Dead Geiger Counter",
        "rarity": 999
      },
      {
        "itemID": 2287,
        "name": "Dead Geiger Counter Seed",
        "rarity": 999
      },
      {
        "itemID": 2288,
        "name": "Party Confetti",
        "rarity": 999
      },
      {
        "itemID": 2289,
        "name": "Party Confetti Seed",
        "rarity": 999
      },
      {
        "itemID": 2290,
        "name": "Party Tunes",
        "rarity": 999
      },
      {
        "itemID": 2291,
        "name": "Party Tunes Seed",
        "rarity": 999
      },
      {
        "itemID": 2292,
        "name": "Superpower - Heat Vision",
        "rarity": 37
      },
      {
        "itemID": 2293,
        "name": "Superpower - Heat Vision Seed",
        "rarity": 37
      },
      {
        "itemID": 2294,
        "name": "Superpower - Incinerate",
        "rarity": 37
      },
      {
        "itemID": 2295,
        "name": "Superpower - Incinerate Seed",
        "rarity": 37
      },
      {
        "itemID": 2296,
        "name": "Superpower - Flame On!",
        "rarity": 37
      },
      {
        "itemID": 2297,
        "name": "Superpower - Flame On! Seed",
        "rarity": 37
      },
      {
        "itemID": 2298,
        "name": "Superpower - Liquify",
        "rarity": 37
      },
      {
        "itemID": 2299,
        "name": "Superpower - Liquify Seed",
        "rarity": 37
      },
      {
        "itemID": 2300,
        "name": "Superpower - Overheat",
        "rarity": 37
      },
      {
        "itemID": 2301,
        "name": "Superpower - Overheat Seed",
        "rarity": 37
      },
      {
        "itemID": 2302,
        "name": "Crime In Progress",
        "rarity": 999
      },
      {
        "itemID": 2303,
        "name": "Crime In Progress Seed",
        "rarity": 999
      },
      {
        "itemID": 2304,
        "name": "Superpower - Death Ray",
        "rarity": 999
      },
      {
        "itemID": 2305,
        "name": "Superpower - Death Ray Seed",
        "rarity": 999
      },
      {
        "itemID": 2306,
        "name": "Party-In-A-Box",
        "rarity": 999
      },
      {
        "itemID": 2307,
        "name": "Party-In-A-Box Seed",
        "rarity": 999
      },
      {
        "itemID": 2308,
        "name": "Superpower - Ice Shards",
        "rarity": 38
      },
      {
        "itemID": 2309,
        "name": "Superpower - Ice Shards Seed",
        "rarity": 38
      },
      {
        "itemID": 2310,
        "name": "Superpower - Frost Breath",
        "rarity": 38
      },
      {
        "itemID": 2311,
        "name": "Superpower - Frost Breath Seed",
        "rarity": 38
      },
      {
        "itemID": 2312,
        "name": "Superpower - Ice Barrier",
        "rarity": 38
      },
      {
        "itemID": 2313,
        "name": "Superpower - Ice Barrier Seed",
        "rarity": 38
      },
      {
        "itemID": 2314,
        "name": "Superpower - Puddle",
        "rarity": 38
      },
      {
        "itemID": 2315,
        "name": "Superpower - Puddle Seed",
        "rarity": 38
      },
      {
        "itemID": 2316,
        "name": "Superpower - Frozen Mirror",
        "rarity": 38
      },
      {
        "itemID": 2317,
        "name": "Superpower - Frozen Mirror Seed",
        "rarity": 38
      },
      {
        "itemID": 2318,
        "name": "Superpower - Ban Hammer",
        "rarity": 999
      },
      {
        "itemID": 2319,
        "name": "Superpower - Ban Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 2320,
        "name": "Superpower - Super Strength",
        "rarity": 38
      },
      {
        "itemID": 2321,
        "name": "Superpower - Super Strength Seed",
        "rarity": 38
      },
      {
        "itemID": 2322,
        "name": "Superpower - Super Speed",
        "rarity": 38
      },
      {
        "itemID": 2323,
        "name": "Superpower - Super Speed Seed",
        "rarity": 38
      },
      {
        "itemID": 2324,
        "name": "Superpower - Enrage",
        "rarity": 38
      },
      {
        "itemID": 2325,
        "name": "Superpower - Enrage Seed",
        "rarity": 38
      },
      {
        "itemID": 2326,
        "name": "Superpower - Crush",
        "rarity": 38
      },
      {
        "itemID": 2327,
        "name": "Superpower - Crush Seed",
        "rarity": 38
      },
      {
        "itemID": 2328,
        "name": "Superpower - Regeneration",
        "rarity": 38
      },
      {
        "itemID": 2329,
        "name": "Superpower - Regeneration Seed",
        "rarity": 38
      },
      {
        "itemID": 2330,
        "name": "Superpower - g-Virus",
        "rarity": 999
      },
      {
        "itemID": 2331,
        "name": "Superpower - g-Virus Seed",
        "rarity": 999
      },
      {
        "itemID": 2332,
        "name": "Superpower - Shocking Fist",
        "rarity": 39
      },
      {
        "itemID": 2333,
        "name": "Superpower - Shocking Fist Seed",
        "rarity": 39
      },
      {
        "itemID": 2334,
        "name": "Superpower - Thunderstorm",
        "rarity": 39
      },
      {
        "itemID": 2335,
        "name": "Superpower - Thunderstorm Seed",
        "rarity": 39
      },
      {
        "itemID": 2336,
        "name": "Superpower - Overcharge",
        "rarity": 39
      },
      {
        "itemID": 2337,
        "name": "Superpower - Overcharge Seed",
        "rarity": 39
      },
      {
        "itemID": 2338,
        "name": "Superpower - Megawatt Pulse",
        "rarity": 39
      },
      {
        "itemID": 2339,
        "name": "Superpower - Megawatt Pulse Seed",
        "rarity": 39
      },
      {
        "itemID": 2340,
        "name": "Superpower - Resuscitate",
        "rarity": 39
      },
      {
        "itemID": 2341,
        "name": "Superpower - Resuscitate Seed",
        "rarity": 39
      },
      {
        "itemID": 2342,
        "name": "Superpower - Duct Tape",
        "rarity": 999
      },
      {
        "itemID": 2343,
        "name": "Superpower - Duct Tape Seed",
        "rarity": 999
      },
      {
        "itemID": 2344,
        "name": "Villain Portrait - The Firebug",
        "rarity": 999
      },
      {
        "itemID": 2345,
        "name": "Villain Portrait - The Firebug Seed",
        "rarity": 999
      },
      {
        "itemID": 2346,
        "name": "Villain Portrait - Jimmy Snow",
        "rarity": 999
      },
      {
        "itemID": 2347,
        "name": "Villain Portrait - Jimmy Snow Seed",
        "rarity": 999
      },
      {
        "itemID": 2348,
        "name": "Villain Portrait - Big Bertha",
        "rarity": 999
      },
      {
        "itemID": 2349,
        "name": "Villain Portrait - Big Bertha Seed",
        "rarity": 999
      },
      {
        "itemID": 2350,
        "name": "Villain Portrait - Shockinator",
        "rarity": 999
      },
      {
        "itemID": 2351,
        "name": "Villain Portrait - Shockinator Seed",
        "rarity": 999
      },
      {
        "itemID": 2352,
        "name": "Villain Portrait - Generic Thug #17",
        "rarity": 999
      },
      {
        "itemID": 2353,
        "name": "Villain Portrait - Generic Thug #17 Seed",
        "rarity": 999
      },
      {
        "itemID": 2354,
        "name": "Villain Portrait - Kat 5",
        "rarity": 999
      },
      {
        "itemID": 2355,
        "name": "Villain Portrait - Kat 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 2356,
        "name": "Villain Portrait - Professor Pummel",
        "rarity": 999
      },
      {
        "itemID": 2357,
        "name": "Villain Portrait - Professor Pummel Seed",
        "rarity": 999
      },
      {
        "itemID": 2358,
        "name": "Villain Portrait - Dragon Hand",
        "rarity": 999
      },
      {
        "itemID": 2359,
        "name": "Villain Portrait - Dragon Hand Seed",
        "rarity": 999
      },
      {
        "itemID": 2360,
        "name": "Villain Portrait - Dr. Destructo",
        "rarity": 999
      },
      {
        "itemID": 2361,
        "name": "Villain Portrait - Dr. Destructo Seed",
        "rarity": 999
      },
      {
        "itemID": 2362,
        "name": "Villain Portrait - Ms. Terry",
        "rarity": 999
      },
      {
        "itemID": 2363,
        "name": "Villain Portrait - Ms. Terry Seed",
        "rarity": 999
      },
      {
        "itemID": 2364,
        "name": "Villain Portrait - Z. Everett Koop",
        "rarity": 999
      },
      {
        "itemID": 2365,
        "name": "Villain Portrait - Z. Everett Koop Seed",
        "rarity": 999
      },
      {
        "itemID": 2366,
        "name": "Villain Portrait - Almighty Seth",
        "rarity": 999
      },
      {
        "itemID": 2367,
        "name": "Villain Portrait - Almighty Seth Seed",
        "rarity": 999
      },
      {
        "itemID": 2368,
        "name": "Villain Portrait - Devil Ham",
        "rarity": 999
      },
      {
        "itemID": 2369,
        "name": "Villain Portrait - Devil Ham Seed",
        "rarity": 999
      },
      {
        "itemID": 2370,
        "name": "Super Logo - ?",
        "rarity": 999
      },
      {
        "itemID": 2371,
        "name": "Super Logo - ? Seed",
        "rarity": 999
      },
      {
        "itemID": 2372,
        "name": "Super Logo - Z",
        "rarity": 999
      },
      {
        "itemID": 2373,
        "name": "Super Logo - Z Seed",
        "rarity": 999
      },
      {
        "itemID": 2374,
        "name": "Super Logo - Yerfdog",
        "rarity": 999
      },
      {
        "itemID": 2375,
        "name": "Super Logo - Yerfdog Seed",
        "rarity": 999
      },
      {
        "itemID": 2376,
        "name": "Super Logo - RTSoft",
        "rarity": 999
      },
      {
        "itemID": 2377,
        "name": "Super Logo - RTSoft Seed",
        "rarity": 999
      },
      {
        "itemID": 2378,
        "name": "Super Logo - D",
        "rarity": 999
      },
      {
        "itemID": 2379,
        "name": "Super Logo - D Seed",
        "rarity": 999
      },
      {
        "itemID": 2380,
        "name": "Henchman",
        "rarity": 999
      },
      {
        "itemID": 2381,
        "name": "Henchman Seed",
        "rarity": 999
      },
      {
        "itemID": 2382,
        "name": "Crime Wave",
        "rarity": 999
      },
      {
        "itemID": 2383,
        "name": "Crime Wave Seed",
        "rarity": 999
      },
      {
        "itemID": 2384,
        "name": "Love Bug",
        "rarity": 999
      },
      {
        "itemID": 2385,
        "name": "Love Bug Seed",
        "rarity": 999
      },
      {
        "itemID": 2386,
        "name": "Heavenly Scythe",
        "rarity": 999
      },
      {
        "itemID": 2387,
        "name": "Heavenly Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 2388,
        "name": "Heartbreaker Hammer",
        "rarity": 999
      },
      {
        "itemID": 2389,
        "name": "Heartbreaker Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 2390,
        "name": "Teeny Angel Wings",
        "rarity": 999
      },
      {
        "itemID": 2391,
        "name": "Teeny Angel Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 2392,
        "name": "Teeny Golden Wings",
        "rarity": 999
      },
      {
        "itemID": 2393,
        "name": "Teeny Golden Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 2394,
        "name": "Golden Love Bug",
        "rarity": 999
      },
      {
        "itemID": 2395,
        "name": "Golden Love Bug Seed",
        "rarity": 999
      },
      {
        "itemID": 2396,
        "name": "Valensign",
        "rarity": 999
      },
      {
        "itemID": 2397,
        "name": "Valensign Seed",
        "rarity": 999
      },
      {
        "itemID": 2398,
        "name": "Locke The Salesman",
        "rarity": 999
      },
      {
        "itemID": 2399,
        "name": "Locke The Salesman Seed",
        "rarity": 999
      },
      {
        "itemID": 2400,
        "name": "Lucky Horseshoe",
        "rarity": 999
      },
      {
        "itemID": 2401,
        "name": "Lucky Horseshoe Seed",
        "rarity": 999
      },
      {
        "itemID": 2402,
        "name": "Irish Sport Horsie",
        "rarity": 999
      },
      {
        "itemID": 2403,
        "name": "Irish Sport Horsie Seed",
        "rarity": 999
      },
      {
        "itemID": 2404,
        "name": "Kilt",
        "rarity": 999
      },
      {
        "itemID": 2405,
        "name": "Kilt Seed",
        "rarity": 999
      },
      {
        "itemID": 2406,
        "name": "Corncob Pipe",
        "rarity": 999
      },
      {
        "itemID": 2407,
        "name": "Corncob Pipe Seed",
        "rarity": 999
      },
      {
        "itemID": 2408,
        "name": "Emerald Lock",
        "rarity": 999
      },
      {
        "itemID": 2409,
        "name": "Emerald Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 2410,
        "name": "Emerald Shard",
        "rarity": 999
      },
      {
        "itemID": 2411,
        "name": "Emerald Shard Seed",
        "rarity": 999
      },
      {
        "itemID": 2412,
        "name": "Cloverleaf",
        "rarity": 999
      },
      {
        "itemID": 2413,
        "name": "Cloverleaf Seed",
        "rarity": 999
      },
      {
        "itemID": 2414,
        "name": "Shamrock Sign",
        "rarity": 999
      },
      {
        "itemID": 2415,
        "name": "Shamrock Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 2416,
        "name": "Slimy Green Hair",
        "rarity": 999
      },
      {
        "itemID": 2417,
        "name": "Slimy Green Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 2418,
        "name": "Possessed Witch Hat",
        "rarity": 999
      },
      {
        "itemID": 2419,
        "name": "Possessed Witch Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 2420,
        "name": "Super Logo - MightyBOOSH",
        "rarity": 999
      },
      {
        "itemID": 2421,
        "name": "Super Logo - MightyBOOSH Seed",
        "rarity": 999
      },
      {
        "itemID": 2422,
        "name": "Shadow Wolf Leash",
        "rarity": 999
      },
      {
        "itemID": 2423,
        "name": "Shadow Wolf Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 2424,
        "name": "Super Shirt - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2425,
        "name": "Super Shirt - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2426,
        "name": "Muscle Shirt - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2427,
        "name": "Muscle Shirt - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2428,
        "name": "Heroic Tights - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2429,
        "name": "Heroic Tights - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2430,
        "name": "Super Tights - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2431,
        "name": "Super Tights - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2432,
        "name": "Heroic Boots - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2433,
        "name": "Heroic Boots - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2434,
        "name": "Superhero Mask - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2435,
        "name": "Superhero Mask - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2436,
        "name": "Crimefighter Mask - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2437,
        "name": "Crimefighter Mask - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2438,
        "name": "Super Cape - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2439,
        "name": "Super Cape - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2440,
        "name": "Superheroine Top - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2441,
        "name": "Superheroine Top - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2442,
        "name": "Super Eye Mask - Emerald",
        "rarity": 999
      },
      {
        "itemID": 2443,
        "name": "Super Eye Mask - Emerald Seed",
        "rarity": 999
      },
      {
        "itemID": 2444,
        "name": "Super Logo - Shamrock",
        "rarity": 999
      },
      {
        "itemID": 2445,
        "name": "Super Logo - Shamrock Seed",
        "rarity": 999
      },
      {
        "itemID": 2446,
        "name": "Superpower - Lucky Shot",
        "rarity": 999
      },
      {
        "itemID": 2447,
        "name": "Superpower - Lucky Shot Seed",
        "rarity": 999
      },
      {
        "itemID": 2448,
        "name": "Villain Portrait - Paddy O'Malice",
        "rarity": 999
      },
      {
        "itemID": 2449,
        "name": "Villain Portrait - Paddy O'Malice Seed",
        "rarity": 999
      },
      {
        "itemID": 2450,
        "name": "Diamond Dragon",
        "rarity": 999
      },
      {
        "itemID": 2451,
        "name": "Diamond Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 2452,
        "name": "Clothing Compactor",
        "rarity": 999
      },
      {
        "itemID": 2453,
        "name": "Clothing Compactor Seed",
        "rarity": 999
      },
      {
        "itemID": 2454,
        "name": "Much-Too-Small Red Shirt",
        "rarity": 999
      },
      {
        "itemID": 2455,
        "name": "Much-Too-Small Red Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2456,
        "name": "Much-Too-Small Yellow Shirt",
        "rarity": 999
      },
      {
        "itemID": 2457,
        "name": "Much-Too-Small Yellow Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2458,
        "name": "Much-Too-Small Aqua Shirt",
        "rarity": 999
      },
      {
        "itemID": 2459,
        "name": "Much-Too-Small Aqua Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2460,
        "name": "Much-Too-Small Lavender Shirt",
        "rarity": 999
      },
      {
        "itemID": 2461,
        "name": "Much-Too-Small Lavender Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2462,
        "name": "Patchwork Quilt",
        "rarity": 999
      },
      {
        "itemID": 2463,
        "name": "Patchwork Quilt Seed",
        "rarity": 999
      },
      {
        "itemID": 2464,
        "name": "Green Glasses",
        "rarity": 999
      },
      {
        "itemID": 2465,
        "name": "Green Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 2466,
        "name": "Pencil Mustache",
        "rarity": 999
      },
      {
        "itemID": 2467,
        "name": "Pencil Mustache Seed",
        "rarity": 999
      },
      {
        "itemID": 2468,
        "name": "Distinguished Grey Hair",
        "rarity": 999
      },
      {
        "itemID": 2469,
        "name": "Distinguished Grey Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 2470,
        "name": "Pink Fedora",
        "rarity": 999
      },
      {
        "itemID": 2471,
        "name": "Pink Fedora Seed",
        "rarity": 999
      },
      {
        "itemID": 2472,
        "name": "Pink Suitcoat",
        "rarity": 999
      },
      {
        "itemID": 2473,
        "name": "Pink Suitcoat Seed",
        "rarity": 999
      },
      {
        "itemID": 2474,
        "name": "Fancy Pants",
        "rarity": 999
      },
      {
        "itemID": 2475,
        "name": "Fancy Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 2476,
        "name": "Burning Eyes",
        "rarity": 999
      },
      {
        "itemID": 2477,
        "name": "Burning Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 2478,
        "name": "Locke's Mystery Box",
        "rarity": 999
      },
      {
        "itemID": 2479,
        "name": "Locke's Mystery Box Seed",
        "rarity": 999
      },
      {
        "itemID": 2480,
        "name": "Megaphone",
        "rarity": 999
      },
      {
        "itemID": 2481,
        "name": "Megaphone Seed",
        "rarity": 999
      },
      {
        "itemID": 2482,
        "name": "Actual Leprechaun Hat",
        "rarity": 999
      },
      {
        "itemID": 2483,
        "name": "Actual Leprechaun Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 2484,
        "name": "Onisim's Genie",
        "rarity": 74
      },
      {
        "itemID": 2485,
        "name": "Onisim's Genie Seed",
        "rarity": 74
      },
      {
        "itemID": 2486,
        "name": "Helmet Of Darkness",
        "rarity": 50
      },
      {
        "itemID": 2487,
        "name": "Helmet Of Darkness Seed",
        "rarity": 50
      },
      {
        "itemID": 2488,
        "name": "Transmatter Field",
        "rarity": 55
      },
      {
        "itemID": 2489,
        "name": "Transmatter Field Seed",
        "rarity": 55
      },
      {
        "itemID": 2490,
        "name": "Cosmic Mustache",
        "rarity": 23
      },
      {
        "itemID": 2491,
        "name": "Cosmic Mustache Seed",
        "rarity": 23
      },
      {
        "itemID": 2492,
        "name": "Asteroid",
        "rarity": 54
      },
      {
        "itemID": 2493,
        "name": "Asteroid Seed",
        "rarity": 54
      },
      {
        "itemID": 2494,
        "name": "Baby Bunny",
        "rarity": 999
      },
      {
        "itemID": 2495,
        "name": "Baby Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 2496,
        "name": "Pastel Pink Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2497,
        "name": "Pastel Pink Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2498,
        "name": "Pastel Orange Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2499,
        "name": "Pastel Orange Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2500,
        "name": "Pastel Yellow Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2501,
        "name": "Pastel Yellow Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2502,
        "name": "Pastel Green Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2503,
        "name": "Pastel Green Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2504,
        "name": "Pastel Aqua Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2505,
        "name": "Pastel Aqua Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2506,
        "name": "Pastel Blue Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2507,
        "name": "Pastel Blue Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2508,
        "name": "Pastel Purple Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 2509,
        "name": "Pastel Purple Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 2510,
        "name": "Dark Bunny Mask",
        "rarity": 999
      },
      {
        "itemID": 2511,
        "name": "Dark Bunny Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 2512,
        "name": "Marshmallow Basket",
        "rarity": 999
      },
      {
        "itemID": 2513,
        "name": "Marshmallow Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 2514,
        "name": "Happy Flower Grass",
        "rarity": 20
      },
      {
        "itemID": 2515,
        "name": "Happy Flower Grass Seed",
        "rarity": 20
      },
      {
        "itemID": 2516,
        "name": "Bouncy Bunny",
        "rarity": 999
      },
      {
        "itemID": 2517,
        "name": "Bouncy Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 2518,
        "name": "Superpower - Egg Shield",
        "rarity": 999
      },
      {
        "itemID": 2519,
        "name": "Superpower - Egg Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 2520,
        "name": "Villain Portrait - Bunny Barko",
        "rarity": 999
      },
      {
        "itemID": 2521,
        "name": "Villain Portrait - Bunny Barko Seed",
        "rarity": 999
      },
      {
        "itemID": 2522,
        "name": "Super Logo - Bunny",
        "rarity": 999
      },
      {
        "itemID": 2523,
        "name": "Super Logo - Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 2524,
        "name": "Super Shirt - Pink",
        "rarity": 999
      },
      {
        "itemID": 2525,
        "name": "Super Shirt - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2526,
        "name": "Muscle Shirt - Pink",
        "rarity": 999
      },
      {
        "itemID": 2527,
        "name": "Muscle Shirt - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2528,
        "name": "Heroic Tights - Pink",
        "rarity": 999
      },
      {
        "itemID": 2529,
        "name": "Heroic Tights - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2530,
        "name": "Super Tights - Pink",
        "rarity": 999
      },
      {
        "itemID": 2531,
        "name": "Super Tights - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2532,
        "name": "Heroic Boots - Pink",
        "rarity": 999
      },
      {
        "itemID": 2533,
        "name": "Heroic Boots - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2534,
        "name": "Superhero Mask - Pink",
        "rarity": 999
      },
      {
        "itemID": 2535,
        "name": "Superhero Mask - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2536,
        "name": "Crimefighter Mask - Pink",
        "rarity": 999
      },
      {
        "itemID": 2537,
        "name": "Crimefighter Mask - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2538,
        "name": "Super Cape - Pink",
        "rarity": 999
      },
      {
        "itemID": 2539,
        "name": "Super Cape - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2540,
        "name": "Superheroine Top - Pink",
        "rarity": 999
      },
      {
        "itemID": 2541,
        "name": "Superheroine Top - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2542,
        "name": "Super Eye Mask - Pink",
        "rarity": 999
      },
      {
        "itemID": 2543,
        "name": "Super Eye Mask - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 2544,
        "name": "Easter Egg - Striped",
        "rarity": 999
      },
      {
        "itemID": 2545,
        "name": "Easter Egg - Striped Seed",
        "rarity": 999
      },
      {
        "itemID": 2546,
        "name": "Easter Egg - Polka Dots",
        "rarity": 999
      },
      {
        "itemID": 2547,
        "name": "Easter Egg - Polka Dots Seed",
        "rarity": 999
      },
      {
        "itemID": 2548,
        "name": "Easter Egg - Jagged",
        "rarity": 999
      },
      {
        "itemID": 2549,
        "name": "Easter Egg - Jagged Seed",
        "rarity": 999
      },
      {
        "itemID": 2550,
        "name": "Easter Egg - Wavey",
        "rarity": 999
      },
      {
        "itemID": 2551,
        "name": "Easter Egg - Wavey Seed",
        "rarity": 999
      },
      {
        "itemID": 2552,
        "name": "Easter Egg - Checkered",
        "rarity": 999
      },
      {
        "itemID": 2553,
        "name": "Easter Egg - Checkered Seed",
        "rarity": 999
      },
      {
        "itemID": 2554,
        "name": "Easter Egg - Rainbow",
        "rarity": 999
      },
      {
        "itemID": 2555,
        "name": "Easter Egg - Rainbow Seed",
        "rarity": 999
      },
      {
        "itemID": 2556,
        "name": "Cursed Jet Engine",
        "rarity": 999
      },
      {
        "itemID": 2557,
        "name": "Cursed Jet Engine Seed",
        "rarity": 999
      },
      {
        "itemID": 2558,
        "name": "Egg-Hunting Basket",
        "rarity": 999
      },
      {
        "itemID": 2559,
        "name": "Egg-Hunting Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 2560,
        "name": "Full Egg-Hunting Basket",
        "rarity": 999
      },
      {
        "itemID": 2561,
        "name": "Full Egg-Hunting Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 2562,
        "name": "Egghead",
        "rarity": 999
      },
      {
        "itemID": 2563,
        "name": "Egghead Seed",
        "rarity": 999
      },
      {
        "itemID": 2564,
        "name": "Chocolate Block",
        "rarity": 20
      },
      {
        "itemID": 2565,
        "name": "Chocolate Block Seed",
        "rarity": 20
      },
      {
        "itemID": 2566,
        "name": "Dark Chocolate Block",
        "rarity": 50
      },
      {
        "itemID": 2567,
        "name": "Dark Chocolate Block Seed",
        "rarity": 50
      },
      {
        "itemID": 2568,
        "name": "Carnival Spikeball",
        "rarity": 999
      },
      {
        "itemID": 2569,
        "name": "Carnival Spikeball Seed",
        "rarity": 999
      },
      {
        "itemID": 2570,
        "name": "Carny Vest",
        "rarity": 999
      },
      {
        "itemID": 2571,
        "name": "Carny Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 2572,
        "name": "Flame Scythe",
        "rarity": 999
      },
      {
        "itemID": 2573,
        "name": "Flame Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 2574,
        "name": "Ride'O'Gold",
        "rarity": 200
      },
      {
        "itemID": 2575,
        "name": "Ride'O'Gold Seed",
        "rarity": 200
      },
      {
        "itemID": 2576,
        "name": "Black Braids",
        "rarity": 48
      },
      {
        "itemID": 2577,
        "name": "Black Braids Seed",
        "rarity": 48
      },
      {
        "itemID": 2578,
        "name": "Ginger Hair Bun",
        "rarity": 24
      },
      {
        "itemID": 2579,
        "name": "Ginger Hair Bun Seed",
        "rarity": 24
      },
      {
        "itemID": 2580,
        "name": "Change of Address",
        "rarity": 999
      },
      {
        "itemID": 2581,
        "name": "Change of Address Seed",
        "rarity": 999
      },
      {
        "itemID": 2582,
        "name": "Teddy Bear",
        "rarity": 999
      },
      {
        "itemID": 2583,
        "name": "Teddy Bear Seed",
        "rarity": 999
      },
      {
        "itemID": 2584,
        "name": "Muddy Pants",
        "rarity": 999
      },
      {
        "itemID": 2585,
        "name": "Muddy Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 2586,
        "name": "Holographic Sign",
        "rarity": 999
      },
      {
        "itemID": 2587,
        "name": "Holographic Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 2588,
        "name": "Sassy Boots",
        "rarity": 115
      },
      {
        "itemID": 2589,
        "name": "Sassy Boots Seed",
        "rarity": 115
      },
      {
        "itemID": 2590,
        "name": "Shifty Block",
        "rarity": 999
      },
      {
        "itemID": 2591,
        "name": "Shifty Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2592,
        "name": "Legendary Katana",
        "rarity": 999
      },
      {
        "itemID": 2593,
        "name": "Legendary Katana Seed",
        "rarity": 999
      },
      {
        "itemID": 2594,
        "name": "Unlucky Pinata Hat",
        "rarity": 999
      },
      {
        "itemID": 2595,
        "name": "Unlucky Pinata Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 2596,
        "name": "Nacho Block",
        "rarity": 999
      },
      {
        "itemID": 2597,
        "name": "Nacho Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2598,
        "name": "Luchador Mask - El Astro",
        "rarity": 999
      },
      {
        "itemID": 2599,
        "name": "Luchador Mask - El Astro Seed",
        "rarity": 999
      },
      {
        "itemID": 2600,
        "name": "Luchador Mask - El Peligro",
        "rarity": 999
      },
      {
        "itemID": 2601,
        "name": "Luchador Mask - El Peligro Seed",
        "rarity": 999
      },
      {
        "itemID": 2602,
        "name": "Luchador Mask - El Tigre",
        "rarity": 999
      },
      {
        "itemID": 2603,
        "name": "Luchador Mask - El Tigre Seed",
        "rarity": 999
      },
      {
        "itemID": 2604,
        "name": "Luchador Mask - El Verdugo",
        "rarity": 999
      },
      {
        "itemID": 2605,
        "name": "Luchador Mask - El Verdugo Seed",
        "rarity": 999
      },
      {
        "itemID": 2606,
        "name": "Luchador Tights - El Astro",
        "rarity": 999
      },
      {
        "itemID": 2607,
        "name": "Luchador Tights - El Astro Seed",
        "rarity": 999
      },
      {
        "itemID": 2608,
        "name": "Luchador Tights - El Peligro",
        "rarity": 999
      },
      {
        "itemID": 2609,
        "name": "Luchador Tights - El Peligro Seed",
        "rarity": 999
      },
      {
        "itemID": 2610,
        "name": "Luchador Tights - El Tigre",
        "rarity": 999
      },
      {
        "itemID": 2611,
        "name": "Luchador Tights - El Tigre Seed",
        "rarity": 999
      },
      {
        "itemID": 2612,
        "name": "Luchador Tights - El Verdugo",
        "rarity": 999
      },
      {
        "itemID": 2613,
        "name": "Luchador Tights - El Verdugo Seed",
        "rarity": 999
      },
      {
        "itemID": 2614,
        "name": "Luchador Jersey - El Astro",
        "rarity": 999
      },
      {
        "itemID": 2615,
        "name": "Luchador Jersey - El Astro Seed",
        "rarity": 999
      },
      {
        "itemID": 2616,
        "name": "Luchador Jersey - El Peligro",
        "rarity": 999
      },
      {
        "itemID": 2617,
        "name": "Luchador Jersey - El Peligro Seed",
        "rarity": 999
      },
      {
        "itemID": 2618,
        "name": "Luchador Jersey - El Tigre",
        "rarity": 999
      },
      {
        "itemID": 2619,
        "name": "Luchador Jersey - El Tigre Seed",
        "rarity": 999
      },
      {
        "itemID": 2620,
        "name": "Luchador Jersey - El Verdugo",
        "rarity": 999
      },
      {
        "itemID": 2621,
        "name": "Luchador Jersey - El Verdugo Seed",
        "rarity": 999
      },
      {
        "itemID": 2622,
        "name": "Luchador Boots",
        "rarity": 999
      },
      {
        "itemID": 2623,
        "name": "Luchador Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 2624,
        "name": "Luchador Championship Belt",
        "rarity": 999
      },
      {
        "itemID": 2625,
        "name": "Luchador Championship Belt Seed",
        "rarity": 999
      },
      {
        "itemID": 2626,
        "name": "Villain Portrait - El Peligro",
        "rarity": 999
      },
      {
        "itemID": 2627,
        "name": "Villain Portrait - El Peligro Seed",
        "rarity": 999
      },
      {
        "itemID": 2628,
        "name": "Superpower - Atomic Backbreaker",
        "rarity": 999
      },
      {
        "itemID": 2629,
        "name": "Superpower - Atomic Backbreaker Seed",
        "rarity": 999
      },
      {
        "itemID": 2630,
        "name": "Wrestling Ring",
        "rarity": 999
      },
      {
        "itemID": 2631,
        "name": "Wrestling Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 2632,
        "name": "Pinata Block",
        "rarity": 20
      },
      {
        "itemID": 2633,
        "name": "Pinata Block Seed",
        "rarity": 20
      },
      {
        "itemID": 2634,
        "name": "Mexican Dress",
        "rarity": 999
      },
      {
        "itemID": 2635,
        "name": "Mexican Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 2636,
        "name": "Rapier",
        "rarity": 999
      },
      {
        "itemID": 2637,
        "name": "Rapier Seed",
        "rarity": 999
      },
      {
        "itemID": 2638,
        "name": "Foxy Hat",
        "rarity": 999
      },
      {
        "itemID": 2639,
        "name": "Foxy Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 2640,
        "name": "Swordsman's Mask",
        "rarity": 999
      },
      {
        "itemID": 2641,
        "name": "Swordsman's Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 2642,
        "name": "Cape of Shadows",
        "rarity": 999
      },
      {
        "itemID": 2643,
        "name": "Cape of Shadows Seed",
        "rarity": 999
      },
      {
        "itemID": 2644,
        "name": "Mystery Dress",
        "rarity": 999
      },
      {
        "itemID": 2645,
        "name": "Mystery Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 2646,
        "name": "Spotlight",
        "rarity": 999
      },
      {
        "itemID": 2647,
        "name": "Spotlight Seed",
        "rarity": 999
      },
      {
        "itemID": 2648,
        "name": "Fashionable Dress - Blue",
        "rarity": 71
      },
      {
        "itemID": 2649,
        "name": "Fashionable Dress - Blue Seed",
        "rarity": 71
      },
      {
        "itemID": 2650,
        "name": "Fashionable Dress - Red",
        "rarity": 71
      },
      {
        "itemID": 2651,
        "name": "Fashionable Dress - Red Seed",
        "rarity": 71
      },
      {
        "itemID": 2652,
        "name": "Fashionable Dress - Pink",
        "rarity": 71
      },
      {
        "itemID": 2653,
        "name": "Fashionable Dress - Pink Seed",
        "rarity": 71
      },
      {
        "itemID": 2654,
        "name": "Fashionable Dress - Green",
        "rarity": 71
      },
      {
        "itemID": 2655,
        "name": "Fashionable Dress - Green Seed",
        "rarity": 71
      },
      {
        "itemID": 2656,
        "name": "Fashionable Dress - Purple",
        "rarity": 71
      },
      {
        "itemID": 2657,
        "name": "Fashionable Dress - Purple Seed",
        "rarity": 71
      },
      {
        "itemID": 2658,
        "name": "Fashionable Dress - Yellow",
        "rarity": 71
      },
      {
        "itemID": 2659,
        "name": "Fashionable Dress - Yellow Seed",
        "rarity": 71
      },
      {
        "itemID": 2660,
        "name": "Stylin' Dress - Blue",
        "rarity": 73
      },
      {
        "itemID": 2661,
        "name": "Stylin' Dress - Blue Seed",
        "rarity": 73
      },
      {
        "itemID": 2662,
        "name": "Stylin' Dress - Red",
        "rarity": 73
      },
      {
        "itemID": 2663,
        "name": "Stylin' Dress - Red Seed",
        "rarity": 73
      },
      {
        "itemID": 2664,
        "name": "Stylin' Dress - Pink",
        "rarity": 73
      },
      {
        "itemID": 2665,
        "name": "Stylin' Dress - Pink Seed",
        "rarity": 73
      },
      {
        "itemID": 2666,
        "name": "Stylin' Dress - Green",
        "rarity": 73
      },
      {
        "itemID": 2667,
        "name": "Stylin' Dress - Green Seed",
        "rarity": 73
      },
      {
        "itemID": 2668,
        "name": "Stylin' Dress - Purple",
        "rarity": 73
      },
      {
        "itemID": 2669,
        "name": "Stylin' Dress - Purple Seed",
        "rarity": 73
      },
      {
        "itemID": 2670,
        "name": "Stylin' Dress - Yellow",
        "rarity": 73
      },
      {
        "itemID": 2671,
        "name": "Stylin' Dress - Yellow Seed",
        "rarity": 73
      },
      {
        "itemID": 2672,
        "name": "High Heels - Blue",
        "rarity": 73
      },
      {
        "itemID": 2673,
        "name": "High Heels - Blue Seed",
        "rarity": 73
      },
      {
        "itemID": 2674,
        "name": "High Heels - Red",
        "rarity": 73
      },
      {
        "itemID": 2675,
        "name": "High Heels - Red Seed",
        "rarity": 73
      },
      {
        "itemID": 2676,
        "name": "High Heels - Pink",
        "rarity": 73
      },
      {
        "itemID": 2677,
        "name": "High Heels - Pink Seed",
        "rarity": 73
      },
      {
        "itemID": 2678,
        "name": "High Heels - Green",
        "rarity": 73
      },
      {
        "itemID": 2679,
        "name": "High Heels - Green Seed",
        "rarity": 73
      },
      {
        "itemID": 2680,
        "name": "High Heels - Purple",
        "rarity": 73
      },
      {
        "itemID": 2681,
        "name": "High Heels - Purple Seed",
        "rarity": 73
      },
      {
        "itemID": 2682,
        "name": "High Heels - Yellow",
        "rarity": 73
      },
      {
        "itemID": 2683,
        "name": "High Heels - Yellow Seed",
        "rarity": 73
      },
      {
        "itemID": 2684,
        "name": "Fashion Purse - Blue",
        "rarity": 68
      },
      {
        "itemID": 2685,
        "name": "Fashion Purse - Blue Seed",
        "rarity": 68
      },
      {
        "itemID": 2686,
        "name": "Fashion Purse - Red",
        "rarity": 68
      },
      {
        "itemID": 2687,
        "name": "Fashion Purse - Red Seed",
        "rarity": 68
      },
      {
        "itemID": 2688,
        "name": "Fashion Purse - Pink",
        "rarity": 68
      },
      {
        "itemID": 2689,
        "name": "Fashion Purse - Pink Seed",
        "rarity": 68
      },
      {
        "itemID": 2690,
        "name": "Fashion Purse - Green",
        "rarity": 68
      },
      {
        "itemID": 2691,
        "name": "Fashion Purse - Green Seed",
        "rarity": 68
      },
      {
        "itemID": 2692,
        "name": "Fashion Purse - Purple",
        "rarity": 68
      },
      {
        "itemID": 2693,
        "name": "Fashion Purse - Purple Seed",
        "rarity": 68
      },
      {
        "itemID": 2694,
        "name": "Fashion Purse - Yellow",
        "rarity": 68
      },
      {
        "itemID": 2695,
        "name": "Fashion Purse - Yellow Seed",
        "rarity": 68
      },
      {
        "itemID": 2696,
        "name": "Purse Dog",
        "rarity": 999
      },
      {
        "itemID": 2697,
        "name": "Purse Dog Seed",
        "rarity": 999
      },
      {
        "itemID": 2698,
        "name": "Makeup",
        "rarity": 47
      },
      {
        "itemID": 2699,
        "name": "Makeup Seed",
        "rarity": 47
      },
      {
        "itemID": 2700,
        "name": "Kansas Pigtails",
        "rarity": 42
      },
      {
        "itemID": 2701,
        "name": "Kansas Pigtails Seed",
        "rarity": 42
      },
      {
        "itemID": 2702,
        "name": "MickeyMay Leash",
        "rarity": 999
      },
      {
        "itemID": 2703,
        "name": "MickeyMay Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 2704,
        "name": "Gold Choker",
        "rarity": 999
      },
      {
        "itemID": 2705,
        "name": "Gold Choker Seed",
        "rarity": 999
      },
      {
        "itemID": 2706,
        "name": "Emerald Choker",
        "rarity": 999
      },
      {
        "itemID": 2707,
        "name": "Emerald Choker Seed",
        "rarity": 999
      },
      {
        "itemID": 2708,
        "name": "Jade Block",
        "rarity": 24
      },
      {
        "itemID": 2709,
        "name": "Jade Block Seed",
        "rarity": 24
      },
      {
        "itemID": 2710,
        "name": "Filigreed Jade Block",
        "rarity": 34
      },
      {
        "itemID": 2711,
        "name": "Filigreed Jade Block Seed",
        "rarity": 34
      },
      {
        "itemID": 2712,
        "name": "Draped Filigreed Jade Block",
        "rarity": 44
      },
      {
        "itemID": 2713,
        "name": "Draped Filigreed Jade Block Seed",
        "rarity": 44
      },
      {
        "itemID": 2714,
        "name": "Diamond-Encrusted Draped Filigreed Jade Block",
        "rarity": 54
      },
      {
        "itemID": 2715,
        "name": "Diamond-Encrusted Draped Filigreed Jade Block Seed",
        "rarity": 54
      },
      {
        "itemID": 2716,
        "name": "Googly-Eyed Diamond-Encrusted Draped Filigreed Jade Block",
        "rarity": 64
      },
      {
        "itemID": 2717,
        "name": "Googly-Eyed Diamond-Encrusted Draped Filigreed Jade Block Seed",
        "rarity": 64
      },
      {
        "itemID": 2718,
        "name": "Platinum Blonde Hair",
        "rarity": 14
      },
      {
        "itemID": 2719,
        "name": "Platinum Blonde Hair Seed",
        "rarity": 14
      },
      {
        "itemID": 2720,
        "name": "Electric Bow",
        "rarity": 999
      },
      {
        "itemID": 2721,
        "name": "Electric Bow Seed",
        "rarity": 999
      },
      {
        "itemID": 2722,
        "name": "Golden Aura",
        "rarity": 999
      },
      {
        "itemID": 2723,
        "name": "Golden Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 2724,
        "name": "Basic Blue Block",
        "rarity": 10
      },
      {
        "itemID": 2725,
        "name": "Basic Blue Block Seed",
        "rarity": 10
      },
      {
        "itemID": 2726,
        "name": "Superpower - Pineapple Spear",
        "rarity": 999
      },
      {
        "itemID": 2727,
        "name": "Superpower - Pineapple Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 2728,
        "name": "Villain Portrait - Pine-Fresh",
        "rarity": 999
      },
      {
        "itemID": 2729,
        "name": "Villain Portrait - Pine-Fresh Seed",
        "rarity": 999
      },
      {
        "itemID": 2730,
        "name": "Pineapple Air Freshener",
        "rarity": 999
      },
      {
        "itemID": 2731,
        "name": "Pineapple Air Freshener Seed",
        "rarity": 999
      },
      {
        "itemID": 2732,
        "name": "Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 2733,
        "name": "Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2734,
        "name": "Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2735,
        "name": "Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2736,
        "name": "Pineapple Head",
        "rarity": 999
      },
      {
        "itemID": 2737,
        "name": "Pineapple Head Seed",
        "rarity": 999
      },
      {
        "itemID": 2738,
        "name": "Fruity Hat",
        "rarity": 999
      },
      {
        "itemID": 2739,
        "name": "Fruity Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 2740,
        "name": "Hawaiian Shirt",
        "rarity": 999
      },
      {
        "itemID": 2741,
        "name": "Hawaiian Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2742,
        "name": "Pineapple Pants",
        "rarity": 999
      },
      {
        "itemID": 2743,
        "name": "Pineapple Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 2744,
        "name": "Weather Machine - Pineapples",
        "rarity": 999
      },
      {
        "itemID": 2745,
        "name": "Weather Machine - Pineapples Seed",
        "rarity": 999
      },
      {
        "itemID": 2746,
        "name": "Sugarloaf Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 2747,
        "name": "Sugarloaf Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2748,
        "name": "Roasted Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 2749,
        "name": "Roasted Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2750,
        "name": "Frozen Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 2751,
        "name": "Frozen Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2752,
        "name": "Pineapple Launcher",
        "rarity": 999
      },
      {
        "itemID": 2753,
        "name": "Pineapple Launcher Seed",
        "rarity": 999
      },
      {
        "itemID": 2754,
        "name": "Demonic Arm",
        "rarity": 999
      },
      {
        "itemID": 2755,
        "name": "Demonic Arm Seed",
        "rarity": 999
      },
      {
        "itemID": 2756,
        "name": "The Gungnir",
        "rarity": 999
      },
      {
        "itemID": 2757,
        "name": "The Gungnir Seed",
        "rarity": 999
      },
      {
        "itemID": 2758,
        "name": "Pineapple Juice",
        "rarity": 999
      },
      {
        "itemID": 2759,
        "name": "Pineapple Juice Seed",
        "rarity": 999
      },
      {
        "itemID": 2760,
        "name": "Pineapple Earrings",
        "rarity": 999
      },
      {
        "itemID": 2761,
        "name": "Pineapple Earrings Seed",
        "rarity": 999
      },
      {
        "itemID": 2762,
        "name": "Pineapple Kite",
        "rarity": 999
      },
      {
        "itemID": 2763,
        "name": "Pineapple Kite Seed",
        "rarity": 999
      },
      {
        "itemID": 2764,
        "name": "Super Shirt - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2765,
        "name": "Super Shirt - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2766,
        "name": "Muscle Shirt - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2767,
        "name": "Muscle Shirt - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2768,
        "name": "Heroic Tights - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2769,
        "name": "Heroic Tights - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2770,
        "name": "Super Tights - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2771,
        "name": "Super Tights - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2772,
        "name": "Heroic Boots - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2773,
        "name": "Heroic Boots - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2774,
        "name": "Superhero Mask - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2775,
        "name": "Superhero Mask - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2776,
        "name": "Crimefighter Mask - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2777,
        "name": "Crimefighter Mask - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2778,
        "name": "Super Cape - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2779,
        "name": "Super Cape - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2780,
        "name": "Superheroine Top - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2781,
        "name": "Superheroine Top - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2782,
        "name": "Super Eye Mask - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2783,
        "name": "Super Eye Mask - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2784,
        "name": "Super Logo - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 2785,
        "name": "Super Logo - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 2786,
        "name": "Viney Block",
        "rarity": 14
      },
      {
        "itemID": 2787,
        "name": "Viney Block Seed",
        "rarity": 14
      },
      {
        "itemID": 2788,
        "name": "Viney Wallpaper",
        "rarity": 14
      },
      {
        "itemID": 2789,
        "name": "Viney Wallpaper Seed",
        "rarity": 14
      },
      {
        "itemID": 2790,
        "name": "Leaf Block",
        "rarity": 25
      },
      {
        "itemID": 2791,
        "name": "Leaf Block Seed",
        "rarity": 25
      },
      {
        "itemID": 2792,
        "name": "Mission Block",
        "rarity": 2
      },
      {
        "itemID": 2793,
        "name": "Mission Block Seed",
        "rarity": 2
      },
      {
        "itemID": 2794,
        "name": "Air Conditioner",
        "rarity": 54
      },
      {
        "itemID": 2795,
        "name": "Air Conditioner Seed",
        "rarity": 54
      },
      {
        "itemID": 2796,
        "name": "Air Duct",
        "rarity": 15
      },
      {
        "itemID": 2797,
        "name": "Air Duct Seed",
        "rarity": 15
      },
      {
        "itemID": 2798,
        "name": "Well",
        "rarity": 999
      },
      {
        "itemID": 2799,
        "name": "Well Seed",
        "rarity": 999
      },
      {
        "itemID": 2800,
        "name": "Penguin Leash",
        "rarity": 999
      },
      {
        "itemID": 2801,
        "name": "Penguin Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 2802,
        "name": "Poseidon's Trident",
        "rarity": 999
      },
      {
        "itemID": 2803,
        "name": "Poseidon's Trident Seed",
        "rarity": 999
      },
      {
        "itemID": 2804,
        "name": "Green Stuff",
        "rarity": 36
      },
      {
        "itemID": 2805,
        "name": "Green Stuff Seed",
        "rarity": 36
      },
      {
        "itemID": 2806,
        "name": "Blue Stuff",
        "rarity": 36
      },
      {
        "itemID": 2807,
        "name": "Blue Stuff Seed",
        "rarity": 36
      },
      {
        "itemID": 2808,
        "name": "Texas Limestone",
        "rarity": 9
      },
      {
        "itemID": 2809,
        "name": "Texas Limestone Seed",
        "rarity": 9
      },
      {
        "itemID": 2810,
        "name": "Air Vent",
        "rarity": 21
      },
      {
        "itemID": 2811,
        "name": "Air Vent Seed",
        "rarity": 21
      },
      {
        "itemID": 2812,
        "name": "Sapphire Block",
        "rarity": 100
      },
      {
        "itemID": 2813,
        "name": "Sapphire Block Seed",
        "rarity": 100
      },
      {
        "itemID": 2814,
        "name": "Number Block 0",
        "rarity": 25
      },
      {
        "itemID": 2815,
        "name": "Number Block 0 Seed",
        "rarity": 25
      },
      {
        "itemID": 2816,
        "name": "Number Block 1",
        "rarity": 25
      },
      {
        "itemID": 2817,
        "name": "Number Block 1 Seed",
        "rarity": 25
      },
      {
        "itemID": 2818,
        "name": "Number Block 2",
        "rarity": 25
      },
      {
        "itemID": 2819,
        "name": "Number Block 2 Seed",
        "rarity": 25
      },
      {
        "itemID": 2820,
        "name": "Number Block 3",
        "rarity": 25
      },
      {
        "itemID": 2821,
        "name": "Number Block 3 Seed",
        "rarity": 25
      },
      {
        "itemID": 2822,
        "name": "Number Block 4",
        "rarity": 25
      },
      {
        "itemID": 2823,
        "name": "Number Block 4 Seed",
        "rarity": 25
      },
      {
        "itemID": 2824,
        "name": "Number Block 5",
        "rarity": 25
      },
      {
        "itemID": 2825,
        "name": "Number Block 5 Seed",
        "rarity": 25
      },
      {
        "itemID": 2826,
        "name": "Number Block 6",
        "rarity": 25
      },
      {
        "itemID": 2827,
        "name": "Number Block 6 Seed",
        "rarity": 25
      },
      {
        "itemID": 2828,
        "name": "Number Block 7",
        "rarity": 25
      },
      {
        "itemID": 2829,
        "name": "Number Block 7 Seed",
        "rarity": 25
      },
      {
        "itemID": 2830,
        "name": "Number Block 8",
        "rarity": 25
      },
      {
        "itemID": 2831,
        "name": "Number Block 8 Seed",
        "rarity": 25
      },
      {
        "itemID": 2832,
        "name": "Number Block 9",
        "rarity": 25
      },
      {
        "itemID": 2833,
        "name": "Number Block 9 Seed",
        "rarity": 25
      },
      {
        "itemID": 2834,
        "name": "Number 0",
        "rarity": 23
      },
      {
        "itemID": 2835,
        "name": "Number 0 Seed",
        "rarity": 23
      },
      {
        "itemID": 2836,
        "name": "Number 1",
        "rarity": 23
      },
      {
        "itemID": 2837,
        "name": "Number 1 Seed",
        "rarity": 23
      },
      {
        "itemID": 2838,
        "name": "Number 2",
        "rarity": 23
      },
      {
        "itemID": 2839,
        "name": "Number 2 Seed",
        "rarity": 23
      },
      {
        "itemID": 2840,
        "name": "Number 3",
        "rarity": 23
      },
      {
        "itemID": 2841,
        "name": "Number 3 Seed",
        "rarity": 23
      },
      {
        "itemID": 2842,
        "name": "Number 4",
        "rarity": 23
      },
      {
        "itemID": 2843,
        "name": "Number 4 Seed",
        "rarity": 23
      },
      {
        "itemID": 2844,
        "name": "Number 5",
        "rarity": 23
      },
      {
        "itemID": 2845,
        "name": "Number 5 Seed",
        "rarity": 23
      },
      {
        "itemID": 2846,
        "name": "Number 6",
        "rarity": 23
      },
      {
        "itemID": 2847,
        "name": "Number 6 Seed",
        "rarity": 23
      },
      {
        "itemID": 2848,
        "name": "Number 7",
        "rarity": 23
      },
      {
        "itemID": 2849,
        "name": "Number 7 Seed",
        "rarity": 23
      },
      {
        "itemID": 2850,
        "name": "Number 8",
        "rarity": 23
      },
      {
        "itemID": 2851,
        "name": "Number 8 Seed",
        "rarity": 23
      },
      {
        "itemID": 2852,
        "name": "Number 9",
        "rarity": 23
      },
      {
        "itemID": 2853,
        "name": "Number 9 Seed",
        "rarity": 23
      },
      {
        "itemID": 2854,
        "name": "Phoenix Pacifier",
        "rarity": 999
      },
      {
        "itemID": 2855,
        "name": "Phoenix Pacifier Seed",
        "rarity": 999
      },
      {
        "itemID": 2856,
        "name": "Sun Block",
        "rarity": 999
      },
      {
        "itemID": 2857,
        "name": "Sun Block Seed",
        "rarity": 999
      },
      {
        "itemID": 2858,
        "name": "Tiki Torch",
        "rarity": 999
      },
      {
        "itemID": 2859,
        "name": "Tiki Torch Seed",
        "rarity": 999
      },
      {
        "itemID": 2860,
        "name": "Cow Skull",
        "rarity": 999
      },
      {
        "itemID": 2861,
        "name": "Cow Skull Seed",
        "rarity": 999
      },
      {
        "itemID": 2862,
        "name": "Flamingo",
        "rarity": 999
      },
      {
        "itemID": 2863,
        "name": "Flamingo Seed",
        "rarity": 999
      },
      {
        "itemID": 2864,
        "name": "Summer Breeze",
        "rarity": 999
      },
      {
        "itemID": 2865,
        "name": "Summer Breeze Seed",
        "rarity": 999
      },
      {
        "itemID": 2866,
        "name": "Wizard's Staff",
        "rarity": 999
      },
      {
        "itemID": 2867,
        "name": "Wizard's Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 2868,
        "name": "White Fury",
        "rarity": 999
      },
      {
        "itemID": 2869,
        "name": "White Fury Seed",
        "rarity": 999
      },
      {
        "itemID": 2870,
        "name": "Seafoam Beard",
        "rarity": 999
      },
      {
        "itemID": 2871,
        "name": "Seafoam Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 2872,
        "name": "Seafoam Hair",
        "rarity": 999
      },
      {
        "itemID": 2873,
        "name": "Seafoam Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 2874,
        "name": "Oceanic Crown",
        "rarity": 999
      },
      {
        "itemID": 2875,
        "name": "Oceanic Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 2876,
        "name": "BLYoshi's Free Dirt",
        "rarity": 999
      },
      {
        "itemID": 2877,
        "name": "BLYoshi's Free Dirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2878,
        "name": "FC Cleats",
        "rarity": 999
      },
      {
        "itemID": 2879,
        "name": "FC Cleats Seed",
        "rarity": 999
      },
      {
        "itemID": 2880,
        "name": "Man U Cleats",
        "rarity": 999
      },
      {
        "itemID": 2881,
        "name": "Man U Cleats Seed",
        "rarity": 999
      },
      {
        "itemID": 2882,
        "name": "FC Jersey",
        "rarity": 52
      },
      {
        "itemID": 2883,
        "name": "FC Jersey Seed",
        "rarity": 52
      },
      {
        "itemID": 2884,
        "name": "Man U Jersey",
        "rarity": 74
      },
      {
        "itemID": 2885,
        "name": "Man U Jersey Seed",
        "rarity": 74
      },
      {
        "itemID": 2886,
        "name": "Baseball Glove",
        "rarity": 999
      },
      {
        "itemID": 2887,
        "name": "Baseball Glove Seed",
        "rarity": 999
      },
      {
        "itemID": 2888,
        "name": "Pigskin",
        "rarity": 999
      },
      {
        "itemID": 2889,
        "name": "Pigskin Seed",
        "rarity": 999
      },
      {
        "itemID": 2890,
        "name": "Basketball",
        "rarity": 999
      },
      {
        "itemID": 2891,
        "name": "Basketball Seed",
        "rarity": 999
      },
      {
        "itemID": 2892,
        "name": "Stadium",
        "rarity": 70
      },
      {
        "itemID": 2893,
        "name": "Stadium Seed",
        "rarity": 70
      },
      {
        "itemID": 2894,
        "name": "Crowded Stadium",
        "rarity": 81
      },
      {
        "itemID": 2895,
        "name": "Crowded Stadium Seed",
        "rarity": 81
      },
      {
        "itemID": 2896,
        "name": "Basketball Hoop",
        "rarity": 106
      },
      {
        "itemID": 2897,
        "name": "Basketball Hoop Seed",
        "rarity": 106
      },
      {
        "itemID": 2898,
        "name": "Sporty Goal",
        "rarity": 105
      },
      {
        "itemID": 2899,
        "name": "Sporty Goal Seed",
        "rarity": 105
      },
      {
        "itemID": 2900,
        "name": "Monkey On Your Back",
        "rarity": 999
      },
      {
        "itemID": 2901,
        "name": "Monkey On Your Back Seed",
        "rarity": 999
      },
      {
        "itemID": 2902,
        "name": "Football Helmet",
        "rarity": 62
      },
      {
        "itemID": 2903,
        "name": "Football Helmet Seed",
        "rarity": 62
      },
      {
        "itemID": 2904,
        "name": "Growies Cap",
        "rarity": 122
      },
      {
        "itemID": 2905,
        "name": "Growies Cap Seed",
        "rarity": 122
      },
      {
        "itemID": 2906,
        "name": "Tennis Racquet",
        "rarity": 999
      },
      {
        "itemID": 2907,
        "name": "Tennis Racquet Seed",
        "rarity": 999
      },
      {
        "itemID": 2908,
        "name": "Carrot Sword",
        "rarity": 999
      },
      {
        "itemID": 2909,
        "name": "Carrot Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 2910,
        "name": "Emerald Staff",
        "rarity": 999
      },
      {
        "itemID": 2911,
        "name": "Emerald Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 2912,
        "name": "Fishing Rod",
        "rarity": 94
      },
      {
        "itemID": 2913,
        "name": "Fishing Rod Seed",
        "rarity": 94
      },
      {
        "itemID": 2914,
        "name": "Wiggly Worm",
        "rarity": 999
      },
      {
        "itemID": 2915,
        "name": "Wiggly Worm Seed",
        "rarity": 999
      },
      {
        "itemID": 2916,
        "name": "Shifting Scroll",
        "rarity": 999
      },
      {
        "itemID": 2917,
        "name": "Shifting Scroll Seed",
        "rarity": 999
      },
      {
        "itemID": 2918,
        "name": "Cryptic Scroll",
        "rarity": 999
      },
      {
        "itemID": 2919,
        "name": "Cryptic Scroll Seed",
        "rarity": 999
      },
      {
        "itemID": 2920,
        "name": "Really Cryptic Scroll",
        "rarity": 999
      },
      {
        "itemID": 2921,
        "name": "Really Cryptic Scroll Seed",
        "rarity": 999
      },
      {
        "itemID": 2922,
        "name": "Exceedingly Cryptic Scroll",
        "rarity": 999
      },
      {
        "itemID": 2923,
        "name": "Exceedingly Cryptic Scroll Seed",
        "rarity": 999
      },
      {
        "itemID": 2924,
        "name": "Needlessly Cryptic Scroll",
        "rarity": 999
      },
      {
        "itemID": 2925,
        "name": "Needlessly Cryptic Scroll Seed",
        "rarity": 999
      },
      {
        "itemID": 2926,
        "name": "Smarty Pants",
        "rarity": 72
      },
      {
        "itemID": 2927,
        "name": "Smarty Pants Seed",
        "rarity": 72
      },
      {
        "itemID": 2928,
        "name": "Camo Pants",
        "rarity": 49
      },
      {
        "itemID": 2929,
        "name": "Camo Pants Seed",
        "rarity": 49
      },
      {
        "itemID": 2930,
        "name": "Carrot Pants",
        "rarity": 67
      },
      {
        "itemID": 2931,
        "name": "Carrot Pants Seed",
        "rarity": 67
      },
      {
        "itemID": 2932,
        "name": "Golf Pants",
        "rarity": 68
      },
      {
        "itemID": 2933,
        "name": "Golf Pants Seed",
        "rarity": 68
      },
      {
        "itemID": 2934,
        "name": "Acid-Washed Skinny Jeans",
        "rarity": 50
      },
      {
        "itemID": 2935,
        "name": "Acid-Washed Skinny Jeans Seed",
        "rarity": 50
      },
      {
        "itemID": 2936,
        "name": "Tiny Red Skirt",
        "rarity": 999
      },
      {
        "itemID": 2937,
        "name": "Tiny Red Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 2938,
        "name": "Flower Sarong",
        "rarity": 9
      },
      {
        "itemID": 2939,
        "name": "Flower Sarong Seed",
        "rarity": 9
      },
      {
        "itemID": 2940,
        "name": "Purple Crystal Skirt",
        "rarity": 100
      },
      {
        "itemID": 2941,
        "name": "Purple Crystal Skirt Seed",
        "rarity": 100
      },
      {
        "itemID": 2942,
        "name": "Golden Crystal Skirt",
        "rarity": 100
      },
      {
        "itemID": 2943,
        "name": "Golden Crystal Skirt Seed",
        "rarity": 100
      },
      {
        "itemID": 2944,
        "name": "Aqua Crystal Skirt",
        "rarity": 100
      },
      {
        "itemID": 2945,
        "name": "Aqua Crystal Skirt Seed",
        "rarity": 100
      },
      {
        "itemID": 2946,
        "name": "Display Block",
        "rarity": 80
      },
      {
        "itemID": 2947,
        "name": "Display Block Seed",
        "rarity": 80
      },
      {
        "itemID": 2948,
        "name": "Ruined Sign",
        "rarity": 33
      },
      {
        "itemID": 2949,
        "name": "Ruined Sign Seed",
        "rarity": 33
      },
      {
        "itemID": 2950,
        "name": "Robotic Lock",
        "rarity": 999
      },
      {
        "itemID": 2951,
        "name": "Robotic Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 2952,
        "name": "Digger's Spade",
        "rarity": 999
      },
      {
        "itemID": 2953,
        "name": "Digger's Spade Seed",
        "rarity": 999
      },
      {
        "itemID": 2954,
        "name": "Disguise Glasses",
        "rarity": 21
      },
      {
        "itemID": 2955,
        "name": "Disguise Glasses Seed",
        "rarity": 21
      },
      {
        "itemID": 2956,
        "name": "Growch Cultist Robe",
        "rarity": 90
      },
      {
        "itemID": 2957,
        "name": "Growch Cultist Robe Seed",
        "rarity": 90
      },
      {
        "itemID": 2958,
        "name": "Wedding Dress",
        "rarity": 47
      },
      {
        "itemID": 2959,
        "name": "Wedding Dress Seed",
        "rarity": 47
      },
      {
        "itemID": 2960,
        "name": "Bridal Veil",
        "rarity": 23
      },
      {
        "itemID": 2961,
        "name": "Bridal Veil Seed",
        "rarity": 23
      },
      {
        "itemID": 2962,
        "name": "Dark Red Wallpaper",
        "rarity": 84
      },
      {
        "itemID": 2963,
        "name": "Dark Red Wallpaper Seed",
        "rarity": 84
      },
      {
        "itemID": 2964,
        "name": "Fountain",
        "rarity": 70
      },
      {
        "itemID": 2965,
        "name": "Fountain Seed",
        "rarity": 70
      },
      {
        "itemID": 2966,
        "name": "Enchanted Spatula",
        "rarity": 999
      },
      {
        "itemID": 2967,
        "name": "Enchanted Spatula Seed",
        "rarity": 999
      },
      {
        "itemID": 2968,
        "name": "Sink",
        "rarity": 58
      },
      {
        "itemID": 2969,
        "name": "Sink Seed",
        "rarity": 58
      },
      {
        "itemID": 2970,
        "name": "Ring Of Water",
        "rarity": 999
      },
      {
        "itemID": 2971,
        "name": "Ring Of Water Seed",
        "rarity": 999
      },
      {
        "itemID": 2972,
        "name": "Spikey Anime Hair",
        "rarity": 100
      },
      {
        "itemID": 2973,
        "name": "Spikey Anime Hair Seed",
        "rarity": 100
      },
      {
        "itemID": 2974,
        "name": "Red Bicycle",
        "rarity": 999
      },
      {
        "itemID": 2975,
        "name": "Red Bicycle Seed",
        "rarity": 999
      },
      {
        "itemID": 2976,
        "name": "Cybernetic Eye",
        "rarity": 999
      },
      {
        "itemID": 2977,
        "name": "Cybernetic Eye Seed",
        "rarity": 999
      },
      {
        "itemID": 2978,
        "name": "Vending Machine",
        "rarity": 999
      },
      {
        "itemID": 2979,
        "name": "Vending Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 2980,
        "name": "Jester's Cap",
        "rarity": 999
      },
      {
        "itemID": 2981,
        "name": "Jester's Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 2982,
        "name": "Blanket Cape",
        "rarity": 999
      },
      {
        "itemID": 2983,
        "name": "Blanket Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 2984,
        "name": "Riding War Wolf",
        "rarity": 999
      },
      {
        "itemID": 2985,
        "name": "Riding War Wolf Seed",
        "rarity": 999
      },
      {
        "itemID": 2986,
        "name": "Wolf Tamer's Glove",
        "rarity": 999
      },
      {
        "itemID": 2987,
        "name": "Wolf Tamer's Glove Seed",
        "rarity": 999
      },
      {
        "itemID": 2988,
        "name": "Red Royal Wallpaper",
        "rarity": 30
      },
      {
        "itemID": 2989,
        "name": "Red Royal Wallpaper Seed",
        "rarity": 30
      },
      {
        "itemID": 2990,
        "name": "Blue Royal Wallpaper",
        "rarity": 30
      },
      {
        "itemID": 2991,
        "name": "Blue Royal Wallpaper Seed",
        "rarity": 30
      },
      {
        "itemID": 2992,
        "name": "Wolf Whistle",
        "rarity": 999
      },
      {
        "itemID": 2993,
        "name": "Wolf Whistle Seed",
        "rarity": 999
      },
      {
        "itemID": 2994,
        "name": "Great Wolf Totem",
        "rarity": 999
      },
      {
        "itemID": 2995,
        "name": "Great Wolf Totem Seed",
        "rarity": 999
      },
      {
        "itemID": 2996,
        "name": "Wolf Totem",
        "rarity": 999
      },
      {
        "itemID": 2997,
        "name": "Wolf Totem Seed",
        "rarity": 999
      },
      {
        "itemID": 2998,
        "name": "Dire Wolf Mask",
        "rarity": 999
      },
      {
        "itemID": 2999,
        "name": "Dire Wolf Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 3000,
        "name": "Goldfish",
        "rarity": 999
      },
      {
        "itemID": 3001,
        "name": "Goldfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3002,
        "name": "Fish Tank Port",
        "rarity": 999
      },
      {
        "itemID": 3003,
        "name": "Fish Tank Port Seed",
        "rarity": 999
      },
      {
        "itemID": 3004,
        "name": "Fish Tank",
        "rarity": 42
      },
      {
        "itemID": 3005,
        "name": "Fish Tank Seed",
        "rarity": 42
      },
      {
        "itemID": 3006,
        "name": "Rollback Plaque III",
        "rarity": 1
      },
      {
        "itemID": 3007,
        "name": "Rollback Plaque III Seed",
        "rarity": 1
      },
      {
        "itemID": 3008,
        "name": "E-Z Rod",
        "rarity": 999
      },
      {
        "itemID": 3009,
        "name": "E-Z Rod Seed",
        "rarity": 999
      },
      {
        "itemID": 3010,
        "name": "Licorice Rod",
        "rarity": 999
      },
      {
        "itemID": 3011,
        "name": "Licorice Rod Seed",
        "rarity": 999
      },
      {
        "itemID": 3012,
        "name": "Shiny Flashy Thing",
        "rarity": 999
      },
      {
        "itemID": 3013,
        "name": "Shiny Flashy Thing Seed",
        "rarity": 999
      },
      {
        "itemID": 3014,
        "name": "Salmon Eggs",
        "rarity": 999
      },
      {
        "itemID": 3015,
        "name": "Salmon Eggs Seed",
        "rarity": 999
      },
      {
        "itemID": 3016,
        "name": "Fishing Fly",
        "rarity": 999
      },
      {
        "itemID": 3017,
        "name": "Fishing Fly Seed",
        "rarity": 999
      },
      {
        "itemID": 3018,
        "name": "Shrimp Lure",
        "rarity": 999
      },
      {
        "itemID": 3019,
        "name": "Shrimp Lure Seed",
        "rarity": 999
      },
      {
        "itemID": 3020,
        "name": "Whizmo Gizmo",
        "rarity": 999
      },
      {
        "itemID": 3021,
        "name": "Whizmo Gizmo Seed",
        "rarity": 999
      },
      {
        "itemID": 3022,
        "name": "Electric Eel",
        "rarity": 999
      },
      {
        "itemID": 3023,
        "name": "Electric Eel Seed",
        "rarity": 999
      },
      {
        "itemID": 3024,
        "name": "Whale",
        "rarity": 999
      },
      {
        "itemID": 3025,
        "name": "Whale Seed",
        "rarity": 999
      },
      {
        "itemID": 3026,
        "name": "Catfish",
        "rarity": 999
      },
      {
        "itemID": 3027,
        "name": "Catfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3028,
        "name": "Perch",
        "rarity": 999
      },
      {
        "itemID": 3029,
        "name": "Perch Seed",
        "rarity": 999
      },
      {
        "itemID": 3030,
        "name": "Dogfish",
        "rarity": 999
      },
      {
        "itemID": 3031,
        "name": "Dogfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3032,
        "name": "Gar",
        "rarity": 999
      },
      {
        "itemID": 3033,
        "name": "Gar Seed",
        "rarity": 999
      },
      {
        "itemID": 3034,
        "name": "Mahi Mahi",
        "rarity": 999
      },
      {
        "itemID": 3035,
        "name": "Mahi Mahi Seed",
        "rarity": 999
      },
      {
        "itemID": 3036,
        "name": "Sunfish",
        "rarity": 999
      },
      {
        "itemID": 3037,
        "name": "Sunfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3038,
        "name": "Bass",
        "rarity": 999
      },
      {
        "itemID": 3039,
        "name": "Bass Seed",
        "rarity": 999
      },
      {
        "itemID": 3040,
        "name": "Goldenrod",
        "rarity": 999
      },
      {
        "itemID": 3041,
        "name": "Goldenrod Seed",
        "rarity": 999
      },
      {
        "itemID": 3042,
        "name": "Fishing Hat",
        "rarity": 999
      },
      {
        "itemID": 3043,
        "name": "Fishing Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 3044,
        "name": "Tackle Box",
        "rarity": 999
      },
      {
        "itemID": 3045,
        "name": "Tackle Box Seed",
        "rarity": 999
      },
      {
        "itemID": 3046,
        "name": "Firefighter Helmet - Red",
        "rarity": 999
      },
      {
        "itemID": 3047,
        "name": "Firefighter Helmet - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3048,
        "name": "Firefighter Helmet - Yellow",
        "rarity": 31
      },
      {
        "itemID": 3049,
        "name": "Firefighter Helmet - Yellow Seed",
        "rarity": 31
      },
      {
        "itemID": 3050,
        "name": "Oxygen Mask",
        "rarity": 63
      },
      {
        "itemID": 3051,
        "name": "Oxygen Mask Seed",
        "rarity": 63
      },
      {
        "itemID": 3052,
        "name": "Firefighter Boots",
        "rarity": 55
      },
      {
        "itemID": 3053,
        "name": "Firefighter Boots Seed",
        "rarity": 55
      },
      {
        "itemID": 3054,
        "name": "Firefighter Pants - Red",
        "rarity": 999
      },
      {
        "itemID": 3055,
        "name": "Firefighter Pants - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3056,
        "name": "Firefighter Pants - Yellow",
        "rarity": 22
      },
      {
        "itemID": 3057,
        "name": "Firefighter Pants - Yellow Seed",
        "rarity": 22
      },
      {
        "itemID": 3058,
        "name": "Firefighter Jacket - Red",
        "rarity": 999
      },
      {
        "itemID": 3059,
        "name": "Firefighter Jacket - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3060,
        "name": "Firefighter Jacket - Yellow",
        "rarity": 22
      },
      {
        "itemID": 3061,
        "name": "Firefighter Jacket - Yellow Seed",
        "rarity": 22
      },
      {
        "itemID": 3062,
        "name": "Pocket Lighter",
        "rarity": 73
      },
      {
        "itemID": 3063,
        "name": "Pocket Lighter Seed",
        "rarity": 73
      },
      {
        "itemID": 3064,
        "name": "Water Balloon",
        "rarity": 30
      },
      {
        "itemID": 3065,
        "name": "Water Balloon Seed",
        "rarity": 30
      },
      {
        "itemID": 3066,
        "name": "Fire Hose",
        "rarity": 93
      },
      {
        "itemID": 3067,
        "name": "Fire Hose Seed",
        "rarity": 93
      },
      {
        "itemID": 3068,
        "name": "Fire Truck",
        "rarity": 999
      },
      {
        "itemID": 3069,
        "name": "Fire Truck Seed",
        "rarity": 999
      },
      {
        "itemID": 3070,
        "name": "Fire Ax",
        "rarity": 999
      },
      {
        "itemID": 3071,
        "name": "Fire Ax Seed",
        "rarity": 999
      },
      {
        "itemID": 3072,
        "name": "Firehouse",
        "rarity": 999
      },
      {
        "itemID": 3073,
        "name": "Firehouse Seed",
        "rarity": 999
      },
      {
        "itemID": 3074,
        "name": "Floating Leaf",
        "rarity": 999
      },
      {
        "itemID": 3075,
        "name": "Floating Leaf Seed",
        "rarity": 999
      },
      {
        "itemID": 3076,
        "name": "Soul Harvester Mask",
        "rarity": 999
      },
      {
        "itemID": 3077,
        "name": "Soul Harvester Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 3078,
        "name": "Solar Collector",
        "rarity": 999
      },
      {
        "itemID": 3079,
        "name": "Solar Collector Seed",
        "rarity": 999
      },
      {
        "itemID": 3080,
        "name": "Autumn Viney Block",
        "rarity": 14
      },
      {
        "itemID": 3081,
        "name": "Autumn Viney Block Seed",
        "rarity": 14
      },
      {
        "itemID": 3082,
        "name": "Autumn Viney Wallpaper",
        "rarity": 14
      },
      {
        "itemID": 3083,
        "name": "Autumn Viney Wallpaper Seed",
        "rarity": 14
      },
      {
        "itemID": 3084,
        "name": "Autumn Leaf Block",
        "rarity": 25
      },
      {
        "itemID": 3085,
        "name": "Autumn Leaf Block Seed",
        "rarity": 25
      },
      {
        "itemID": 3086,
        "name": "Dried Leaf Crown",
        "rarity": 999
      },
      {
        "itemID": 3087,
        "name": "Dried Leaf Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 3088,
        "name": "Musical Gong",
        "rarity": 999
      },
      {
        "itemID": 3089,
        "name": "Musical Gong Seed",
        "rarity": 999
      },
      {
        "itemID": 3090,
        "name": "Highly Combustible Box",
        "rarity": 999
      },
      {
        "itemID": 3091,
        "name": "Highly Combustible Box Seed",
        "rarity": 999
      },
      {
        "itemID": 3092,
        "name": "Skeletal Shark",
        "rarity": 999
      },
      {
        "itemID": 3093,
        "name": "Skeletal Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 3094,
        "name": "Ghost Fish",
        "rarity": 999
      },
      {
        "itemID": 3095,
        "name": "Ghost Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 3096,
        "name": "Demon Angler",
        "rarity": 999
      },
      {
        "itemID": 3097,
        "name": "Demon Angler Seed",
        "rarity": 999
      },
      {
        "itemID": 3098,
        "name": "Otherworldly Bait",
        "rarity": 999
      },
      {
        "itemID": 3099,
        "name": "Otherworldly Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 3100,
        "name": "Cursed Fishing Rod",
        "rarity": 999
      },
      {
        "itemID": 3101,
        "name": "Cursed Fishing Rod Seed",
        "rarity": 999
      },
      {
        "itemID": 3102,
        "name": "Eldritch Flame",
        "rarity": 73
      },
      {
        "itemID": 3103,
        "name": "Eldritch Flame Seed",
        "rarity": 73
      },
      {
        "itemID": 3104,
        "name": "Flaming Cape",
        "rarity": 101
      },
      {
        "itemID": 3105,
        "name": "Flaming Cape Seed",
        "rarity": 101
      },
      {
        "itemID": 3106,
        "name": "Ghost Costume",
        "rarity": 97
      },
      {
        "itemID": 3107,
        "name": "Ghost Costume Seed",
        "rarity": 97
      },
      {
        "itemID": 3108,
        "name": "Chainsaw Hand",
        "rarity": 999
      },
      {
        "itemID": 3109,
        "name": "Chainsaw Hand Seed",
        "rarity": 999
      },
      {
        "itemID": 3110,
        "name": "Cape Tatters",
        "rarity": 101
      },
      {
        "itemID": 3111,
        "name": "Cape Tatters Seed",
        "rarity": 101
      },
      {
        "itemID": 3112,
        "name": "Inside-Out Vampire Cape",
        "rarity": 101
      },
      {
        "itemID": 3113,
        "name": "Inside-Out Vampire Cape Seed",
        "rarity": 101
      },
      {
        "itemID": 3114,
        "name": "Black Aura",
        "rarity": 999
      },
      {
        "itemID": 3115,
        "name": "Black Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 3116,
        "name": "Hellgate",
        "rarity": 40
      },
      {
        "itemID": 3117,
        "name": "Hellgate Seed",
        "rarity": 40
      },
      {
        "itemID": 3118,
        "name": "Riding Demon Dog",
        "rarity": 999
      },
      {
        "itemID": 3119,
        "name": "Riding Demon Dog Seed",
        "rarity": 999
      },
      {
        "itemID": 3120,
        "name": "Teeny Devil Wings",
        "rarity": 999
      },
      {
        "itemID": 3121,
        "name": "Teeny Devil Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 3122,
        "name": "Teeny Wing Fragment",
        "rarity": 999
      },
      {
        "itemID": 3123,
        "name": "Teeny Wing Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3124,
        "name": "Soul Orb",
        "rarity": 999
      },
      {
        "itemID": 3125,
        "name": "Soul Orb Seed",
        "rarity": 999
      },
      {
        "itemID": 3126,
        "name": "Dark Magic Barrier",
        "rarity": 101
      },
      {
        "itemID": 3127,
        "name": "Dark Magic Barrier Seed",
        "rarity": 101
      },
      {
        "itemID": 3128,
        "name": "Combusted Box",
        "rarity": 999
      },
      {
        "itemID": 3129,
        "name": "Combusted Box Seed",
        "rarity": 999
      },
      {
        "itemID": 3130,
        "name": "Stethoscope",
        "rarity": 999
      },
      {
        "itemID": 3131,
        "name": "Stethoscope Seed",
        "rarity": 999
      },
      {
        "itemID": 3132,
        "name": "Super Logo - Crown",
        "rarity": 999
      },
      {
        "itemID": 3133,
        "name": "Super Logo - Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 3134,
        "name": "Wolf Spirit",
        "rarity": 999
      },
      {
        "itemID": 3135,
        "name": "Wolf Spirit Seed",
        "rarity": 999
      },
      {
        "itemID": 3136,
        "name": "Wolfy Block",
        "rarity": 999
      },
      {
        "itemID": 3137,
        "name": "Wolfy Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3138,
        "name": "Challenge Crown",
        "rarity": 999
      },
      {
        "itemID": 3139,
        "name": "Challenge Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 3140,
        "name": "Ring Of Savings",
        "rarity": 999
      },
      {
        "itemID": 3141,
        "name": "Ring Of Savings Seed",
        "rarity": 999
      },
      {
        "itemID": 3142,
        "name": "Challenge Board",
        "rarity": 999
      },
      {
        "itemID": 3143,
        "name": "Challenge Board Seed",
        "rarity": 999
      },
      {
        "itemID": 3144,
        "name": "Cosmic Cape",
        "rarity": 999
      },
      {
        "itemID": 3145,
        "name": "Cosmic Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 3146,
        "name": "Rainbow Crystal Block",
        "rarity": 999
      },
      {
        "itemID": 3147,
        "name": "Rainbow Crystal Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3148,
        "name": "Cosmic Power - Comet Strike",
        "rarity": 89
      },
      {
        "itemID": 3149,
        "name": "Cosmic Power - Comet Strike Seed",
        "rarity": 89
      },
      {
        "itemID": 3150,
        "name": "Cosmic Power - Star Burst",
        "rarity": 87
      },
      {
        "itemID": 3151,
        "name": "Cosmic Power - Star Burst Seed",
        "rarity": 87
      },
      {
        "itemID": 3152,
        "name": "Cosmic Power - Lunar Barrier",
        "rarity": 88
      },
      {
        "itemID": 3153,
        "name": "Cosmic Power - Lunar Barrier Seed",
        "rarity": 88
      },
      {
        "itemID": 3154,
        "name": "Cosmic Power - Nebula Gas",
        "rarity": 88
      },
      {
        "itemID": 3155,
        "name": "Cosmic Power - Nebula Gas Seed",
        "rarity": 88
      },
      {
        "itemID": 3156,
        "name": "Transdimensional Vaporizer Ray",
        "rarity": 70
      },
      {
        "itemID": 3157,
        "name": "Transdimensional Vaporizer Ray Seed",
        "rarity": 70
      },
      {
        "itemID": 3158,
        "name": "Carnival Pinwheel",
        "rarity": 999
      },
      {
        "itemID": 3159,
        "name": "Carnival Pinwheel Seed",
        "rarity": 999
      },
      {
        "itemID": 3160,
        "name": "Sword And Shield",
        "rarity": 999
      },
      {
        "itemID": 3161,
        "name": "Sword And Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 3162,
        "name": "Twin Swords",
        "rarity": 999
      },
      {
        "itemID": 3163,
        "name": "Twin Swords Seed",
        "rarity": 999
      },
      {
        "itemID": 3164,
        "name": "Preppy Blonde Hair",
        "rarity": 24
      },
      {
        "itemID": 3165,
        "name": "Preppy Blonde Hair Seed",
        "rarity": 24
      },
      {
        "itemID": 3166,
        "name": "Pet Slime",
        "rarity": 999
      },
      {
        "itemID": 3167,
        "name": "Pet Slime Seed",
        "rarity": 999
      },
      {
        "itemID": 3168,
        "name": "Strawberry Slime",
        "rarity": 999
      },
      {
        "itemID": 3169,
        "name": "Strawberry Slime Seed",
        "rarity": 999
      },
      {
        "itemID": 3170,
        "name": "Angry Unicorn Block",
        "rarity": 50
      },
      {
        "itemID": 3171,
        "name": "Angry Unicorn Block Seed",
        "rarity": 50
      },
      {
        "itemID": 3172,
        "name": "Legal Briefs",
        "rarity": 999
      },
      {
        "itemID": 3173,
        "name": "Legal Briefs Seed",
        "rarity": 999
      },
      {
        "itemID": 3174,
        "name": "Ring Of Smithing",
        "rarity": 999
      },
      {
        "itemID": 3175,
        "name": "Ring Of Smithing Seed",
        "rarity": 999
      },
      {
        "itemID": 3176,
        "name": "Anvil",
        "rarity": 999
      },
      {
        "itemID": 3177,
        "name": "Anvil Seed",
        "rarity": 999
      },
      {
        "itemID": 3178,
        "name": "Blacksmith's Apron",
        "rarity": 999
      },
      {
        "itemID": 3179,
        "name": "Blacksmith's Apron Seed",
        "rarity": 999
      },
      {
        "itemID": 3180,
        "name": "Crystal Smithing Tools",
        "rarity": 100
      },
      {
        "itemID": 3181,
        "name": "Crystal Smithing Tools Seed",
        "rarity": 100
      },
      {
        "itemID": 3182,
        "name": "Blade Fragment",
        "rarity": 999
      },
      {
        "itemID": 3183,
        "name": "Blade Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3184,
        "name": "Shield Fragment",
        "rarity": 999
      },
      {
        "itemID": 3185,
        "name": "Shield Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3186,
        "name": "Tempered Steel Fragment",
        "rarity": 999
      },
      {
        "itemID": 3187,
        "name": "Tempered Steel Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3188,
        "name": "Sword Pommel",
        "rarity": 999
      },
      {
        "itemID": 3189,
        "name": "Sword Pommel Seed",
        "rarity": 999
      },
      {
        "itemID": 3190,
        "name": "Sword Blade",
        "rarity": 999
      },
      {
        "itemID": 3191,
        "name": "Sword Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 3192,
        "name": "Warrior's Shield",
        "rarity": 999
      },
      {
        "itemID": 3193,
        "name": "Warrior's Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 3194,
        "name": "Forge",
        "rarity": 145
      },
      {
        "itemID": 3195,
        "name": "Forge Seed",
        "rarity": 145
      },
      {
        "itemID": 3196,
        "name": "Nuclear Fuel",
        "rarity": 999
      },
      {
        "itemID": 3197,
        "name": "Nuclear Fuel Seed",
        "rarity": 999
      },
      {
        "itemID": 3198,
        "name": "Gift of the Unicorn",
        "rarity": 999
      },
      {
        "itemID": 3199,
        "name": "Gift of the Unicorn Seed",
        "rarity": 999
      },
      {
        "itemID": 3200,
        "name": "Giving Tree",
        "rarity": 999
      },
      {
        "itemID": 3201,
        "name": "Giving Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 3202,
        "name": "Giving Tree Stump",
        "rarity": 999
      },
      {
        "itemID": 3203,
        "name": "Giving Tree Stump Seed",
        "rarity": 999
      },
      {
        "itemID": 3204,
        "name": "Tree Decorations",
        "rarity": 999
      },
      {
        "itemID": 3205,
        "name": "Tree Decorations Seed",
        "rarity": 999
      },
      {
        "itemID": 3206,
        "name": "Lumber Axe",
        "rarity": 22
      },
      {
        "itemID": 3207,
        "name": "Lumber Axe Seed",
        "rarity": 22
      },
      {
        "itemID": 3208,
        "name": "Axe Fragment",
        "rarity": 999
      },
      {
        "itemID": 3209,
        "name": "Axe Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3210,
        "name": "Icy Heart Of Winter",
        "rarity": 999
      },
      {
        "itemID": 3211,
        "name": "Icy Heart Of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 3212,
        "name": "Icy Heart Pickup",
        "rarity": 999
      },
      {
        "itemID": 3213,
        "name": "Icy Heart Pickup Seed",
        "rarity": 999
      },
      {
        "itemID": 3214,
        "name": "Axe Of Winter",
        "rarity": 999
      },
      {
        "itemID": 3215,
        "name": "Axe Of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 3216,
        "name": "Moose Cap",
        "rarity": 999
      },
      {
        "itemID": 3217,
        "name": "Moose Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 3218,
        "name": "Candy Cane Bait",
        "rarity": 999
      },
      {
        "itemID": 3219,
        "name": "Candy Cane Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 3220,
        "name": "Neon Squid",
        "rarity": 999
      },
      {
        "itemID": 3221,
        "name": "Neon Squid Seed",
        "rarity": 999
      },
      {
        "itemID": 3222,
        "name": "Antarctic Icefish",
        "rarity": 999
      },
      {
        "itemID": 3223,
        "name": "Antarctic Icefish Seed",
        "rarity": 999
      },
      {
        "itemID": 3224,
        "name": "Gingerbread Fish",
        "rarity": 999
      },
      {
        "itemID": 3225,
        "name": "Gingerbread Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 3226,
        "name": "Swedish Fish",
        "rarity": 999
      },
      {
        "itemID": 3227,
        "name": "Swedish Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 3228,
        "name": "Snowcone",
        "rarity": 999
      },
      {
        "itemID": 3229,
        "name": "Snowcone Seed",
        "rarity": 999
      },
      {
        "itemID": 3230,
        "name": "Toboggan",
        "rarity": 999
      },
      {
        "itemID": 3231,
        "name": "Toboggan Seed",
        "rarity": 999
      },
      {
        "itemID": 3232,
        "name": "Winter Wind",
        "rarity": 999
      },
      {
        "itemID": 3233,
        "name": "Winter Wind Seed",
        "rarity": 999
      },
      {
        "itemID": 3234,
        "name": "Snowflake Block",
        "rarity": 999
      },
      {
        "itemID": 3235,
        "name": "Snowflake Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3236,
        "name": "Winter Robe",
        "rarity": 999
      },
      {
        "itemID": 3237,
        "name": "Winter Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 3238,
        "name": "Magical Carrot",
        "rarity": 999
      },
      {
        "itemID": 3239,
        "name": "Magical Carrot Seed",
        "rarity": 999
      },
      {
        "itemID": 3240,
        "name": "Hot Chocolate",
        "rarity": 999
      },
      {
        "itemID": 3241,
        "name": "Hot Chocolate Seed",
        "rarity": 999
      },
      {
        "itemID": 3242,
        "name": "Tempered Axe Fragment",
        "rarity": 999
      },
      {
        "itemID": 3243,
        "name": "Tempered Axe Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 3244,
        "name": "Icy Axe Blade",
        "rarity": 999
      },
      {
        "itemID": 3245,
        "name": "Icy Axe Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 3246,
        "name": "Steel Axe Handle",
        "rarity": 214
      },
      {
        "itemID": 3247,
        "name": "Steel Axe Handle Seed",
        "rarity": 214
      },
      {
        "itemID": 3248,
        "name": "Grip Tape",
        "rarity": 999
      },
      {
        "itemID": 3249,
        "name": "Grip Tape Seed",
        "rarity": 999
      },
      {
        "itemID": 3250,
        "name": "Riding Winter Wolf",
        "rarity": 999
      },
      {
        "itemID": 3251,
        "name": "Riding Winter Wolf Seed",
        "rarity": 999
      },
      {
        "itemID": 3252,
        "name": "Weather Machine - Snowy Night",
        "rarity": 999
      },
      {
        "itemID": 3253,
        "name": "Weather Machine - Snowy Night Seed",
        "rarity": 999
      },
      {
        "itemID": 3254,
        "name": "Elf Stockings",
        "rarity": 999
      },
      {
        "itemID": 3255,
        "name": "Elf Stockings Seed",
        "rarity": 999
      },
      {
        "itemID": 3256,
        "name": "Sock On The Wall",
        "rarity": 39
      },
      {
        "itemID": 3257,
        "name": "Sock On The Wall Seed",
        "rarity": 39
      },
      {
        "itemID": 3258,
        "name": "Steam Gear",
        "rarity": 90
      },
      {
        "itemID": 3259,
        "name": "Steam Gear Seed",
        "rarity": 90
      },
      {
        "itemID": 3260,
        "name": "Steam Tubes",
        "rarity": 36
      },
      {
        "itemID": 3261,
        "name": "Steam Tubes Seed",
        "rarity": 36
      },
      {
        "itemID": 3262,
        "name": "Steam Piston",
        "rarity": 50
      },
      {
        "itemID": 3263,
        "name": "Steam Piston Seed",
        "rarity": 50
      },
      {
        "itemID": 3264,
        "name": "Steam Lifter Piston",
        "rarity": 50
      },
      {
        "itemID": 3265,
        "name": "Steam Lifter Piston Seed",
        "rarity": 50
      },
      {
        "itemID": 3266,
        "name": "Steam Bellows",
        "rarity": 59
      },
      {
        "itemID": 3267,
        "name": "Steam Bellows Seed",
        "rarity": 59
      },
      {
        "itemID": 3268,
        "name": "Steam Riser Bellows",
        "rarity": 81
      },
      {
        "itemID": 3269,
        "name": "Steam Riser Bellows Seed",
        "rarity": 81
      },
      {
        "itemID": 3270,
        "name": "Steam Stomper",
        "rarity": 102
      },
      {
        "itemID": 3271,
        "name": "Steam Stomper Seed",
        "rarity": 102
      },
      {
        "itemID": 3272,
        "name": "Growtopia Fan Shirt",
        "rarity": 999
      },
      {
        "itemID": 3273,
        "name": "Growtopia Fan Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3274,
        "name": "T-Shirt Cannon",
        "rarity": 999
      },
      {
        "itemID": 3275,
        "name": "T-Shirt Cannon Seed",
        "rarity": 999
      },
      {
        "itemID": 3276,
        "name": "Ghost Fan Shirt",
        "rarity": 999
      },
      {
        "itemID": 3277,
        "name": "Ghost Fan Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3278,
        "name": "Pineapple Fan Shirt",
        "rarity": 999
      },
      {
        "itemID": 3279,
        "name": "Pineapple Fan Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3280,
        "name": "Steam Valve",
        "rarity": 93
      },
      {
        "itemID": 3281,
        "name": "Steam Valve Seed",
        "rarity": 93
      },
      {
        "itemID": 3282,
        "name": "Steam Organ",
        "rarity": 95
      },
      {
        "itemID": 3283,
        "name": "Steam Organ Seed",
        "rarity": 95
      },
      {
        "itemID": 3284,
        "name": "Steam Vent",
        "rarity": 90
      },
      {
        "itemID": 3285,
        "name": "Steam Vent Seed",
        "rarity": 90
      },
      {
        "itemID": 3286,
        "name": "Steam Door",
        "rarity": 53
      },
      {
        "itemID": 3287,
        "name": "Steam Door Seed",
        "rarity": 53
      },
      {
        "itemID": 3288,
        "name": "Steampunk Corset",
        "rarity": 135
      },
      {
        "itemID": 3289,
        "name": "Steampunk Corset Seed",
        "rarity": 135
      },
      {
        "itemID": 3290,
        "name": "Steampunk Skirt",
        "rarity": 104
      },
      {
        "itemID": 3291,
        "name": "Steampunk Skirt Seed",
        "rarity": 104
      },
      {
        "itemID": 3292,
        "name": "Steampunk Top Hat",
        "rarity": 999
      },
      {
        "itemID": 3293,
        "name": "Steampunk Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 3294,
        "name": "Steampunk Waistcoat",
        "rarity": 144
      },
      {
        "itemID": 3295,
        "name": "Steampunk Waistcoat Seed",
        "rarity": 144
      },
      {
        "itemID": 3296,
        "name": "Steampunk Leggings",
        "rarity": 156
      },
      {
        "itemID": 3297,
        "name": "Steampunk Leggings Seed",
        "rarity": 156
      },
      {
        "itemID": 3298,
        "name": "Steampunk Trenchcoat",
        "rarity": 144
      },
      {
        "itemID": 3299,
        "name": "Steampunk Trenchcoat Seed",
        "rarity": 144
      },
      {
        "itemID": 3300,
        "name": "Party Blaster",
        "rarity": 999
      },
      {
        "itemID": 3301,
        "name": "Party Blaster Seed",
        "rarity": 999
      },
      {
        "itemID": 3302,
        "name": "Tempered Party Tunes",
        "rarity": 999
      },
      {
        "itemID": 3303,
        "name": "Tempered Party Tunes Seed",
        "rarity": 999
      },
      {
        "itemID": 3304,
        "name": "80's Tape Deck",
        "rarity": 999
      },
      {
        "itemID": 3305,
        "name": "80's Tape Deck Seed",
        "rarity": 999
      },
      {
        "itemID": 3306,
        "name": "D Battery",
        "rarity": 999
      },
      {
        "itemID": 3307,
        "name": "D Battery Seed",
        "rarity": 999
      },
      {
        "itemID": 3308,
        "name": "ERROR!",
        "rarity": 999
      },
      {
        "itemID": 3309,
        "name": "ERROR! Seed",
        "rarity": 999
      },
      {
        "itemID": 3310,
        "name": "Steampunk Sprocket",
        "rarity": 999
      },
      {
        "itemID": 3311,
        "name": "Steampunk Sprocket Seed",
        "rarity": 999
      },
      {
        "itemID": 3312,
        "name": "Steampunk Gearbox",
        "rarity": 999
      },
      {
        "itemID": 3313,
        "name": "Steampunk Gearbox Seed",
        "rarity": 999
      },
      {
        "itemID": 3314,
        "name": "Stretched Canvas",
        "rarity": 999
      },
      {
        "itemID": 3315,
        "name": "Stretched Canvas Seed",
        "rarity": 999
      },
      {
        "itemID": 3316,
        "name": "Silkworm",
        "rarity": 999
      },
      {
        "itemID": 3317,
        "name": "Silkworm Seed",
        "rarity": 999
      },
      {
        "itemID": 3318,
        "name": "Silk Thread - Red",
        "rarity": 999
      },
      {
        "itemID": 3319,
        "name": "Silk Thread - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3320,
        "name": "Silk Thread - Green",
        "rarity": 999
      },
      {
        "itemID": 3321,
        "name": "Silk Thread - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 3322,
        "name": "Silk Thread - Blue",
        "rarity": 999
      },
      {
        "itemID": 3323,
        "name": "Silk Thread - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3324,
        "name": "Silk Thread - Black",
        "rarity": 999
      },
      {
        "itemID": 3325,
        "name": "Silk Thread - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3326,
        "name": "Silk Thread - White",
        "rarity": 999
      },
      {
        "itemID": 3327,
        "name": "Silk Thread - White Seed",
        "rarity": 999
      },
      {
        "itemID": 3328,
        "name": "Silk Thread - Grey",
        "rarity": 999
      },
      {
        "itemID": 3329,
        "name": "Silk Thread - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3330,
        "name": "Silk Thread - Yellow",
        "rarity": 999
      },
      {
        "itemID": 3331,
        "name": "Silk Thread - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 3332,
        "name": "Silk Thread - Purple",
        "rarity": 999
      },
      {
        "itemID": 3333,
        "name": "Silk Thread - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3334,
        "name": "Silk Thread - Aqua",
        "rarity": 999
      },
      {
        "itemID": 3335,
        "name": "Silk Thread - Aqua Seed",
        "rarity": 999
      },
      {
        "itemID": 3336,
        "name": "Silk Bolt - Red",
        "rarity": 999
      },
      {
        "itemID": 3337,
        "name": "Silk Bolt - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3338,
        "name": "Silk Bolt - Green",
        "rarity": 999
      },
      {
        "itemID": 3339,
        "name": "Silk Bolt - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 3340,
        "name": "Silk Bolt - Blue",
        "rarity": 999
      },
      {
        "itemID": 3341,
        "name": "Silk Bolt - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3342,
        "name": "Silk Bolt - Black",
        "rarity": 999
      },
      {
        "itemID": 3343,
        "name": "Silk Bolt - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3344,
        "name": "Silk Bolt - White",
        "rarity": 999
      },
      {
        "itemID": 3345,
        "name": "Silk Bolt - White Seed",
        "rarity": 999
      },
      {
        "itemID": 3346,
        "name": "Silk Bolt - Grey",
        "rarity": 999
      },
      {
        "itemID": 3347,
        "name": "Silk Bolt - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3348,
        "name": "Silk Bolt - Yellow",
        "rarity": 999
      },
      {
        "itemID": 3349,
        "name": "Silk Bolt - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 3350,
        "name": "Silk Bolt - Purple",
        "rarity": 999
      },
      {
        "itemID": 3351,
        "name": "Silk Bolt - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3352,
        "name": "Silk Bolt - Aqua",
        "rarity": 999
      },
      {
        "itemID": 3353,
        "name": "Silk Bolt - Aqua Seed",
        "rarity": 999
      },
      {
        "itemID": 3354,
        "name": "Sewing Machine",
        "rarity": 144
      },
      {
        "itemID": 3355,
        "name": "Sewing Machine Seed",
        "rarity": 144
      },
      {
        "itemID": 3356,
        "name": "Silk Turban",
        "rarity": 999
      },
      {
        "itemID": 3357,
        "name": "Silk Turban Seed",
        "rarity": 999
      },
      {
        "itemID": 3358,
        "name": "Patchwork Mess",
        "rarity": 999
      },
      {
        "itemID": 3359,
        "name": "Patchwork Mess Seed",
        "rarity": 999
      },
      {
        "itemID": 3360,
        "name": "Silk Vest - Red",
        "rarity": 999
      },
      {
        "itemID": 3361,
        "name": "Silk Vest - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3362,
        "name": "Silk Vest - Green",
        "rarity": 999
      },
      {
        "itemID": 3363,
        "name": "Silk Vest - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 3364,
        "name": "Silk Vest - Blue",
        "rarity": 999
      },
      {
        "itemID": 3365,
        "name": "Silk Vest - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3366,
        "name": "Silk Vest - Purple",
        "rarity": 999
      },
      {
        "itemID": 3367,
        "name": "Silk Vest - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3368,
        "name": "Silk Vest - Grey",
        "rarity": 999
      },
      {
        "itemID": 3369,
        "name": "Silk Vest - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3370,
        "name": "Silk Vest - Black",
        "rarity": 999
      },
      {
        "itemID": 3371,
        "name": "Silk Vest - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3372,
        "name": "Silk Tie - Red",
        "rarity": 999
      },
      {
        "itemID": 3373,
        "name": "Silk Tie - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3374,
        "name": "Silk Tie - Yellow",
        "rarity": 999
      },
      {
        "itemID": 3375,
        "name": "Silk Tie - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 3376,
        "name": "Silk Tie - Black",
        "rarity": 999
      },
      {
        "itemID": 3377,
        "name": "Silk Tie - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3378,
        "name": "Silk Tie - Blue",
        "rarity": 999
      },
      {
        "itemID": 3379,
        "name": "Silk Tie - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3380,
        "name": "Silk Tie - Grey",
        "rarity": 999
      },
      {
        "itemID": 3381,
        "name": "Silk Tie - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3382,
        "name": "Silk Skirt - Red",
        "rarity": 999
      },
      {
        "itemID": 3383,
        "name": "Silk Skirt - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3384,
        "name": "Silk Skirt - Blue",
        "rarity": 999
      },
      {
        "itemID": 3385,
        "name": "Silk Skirt - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3386,
        "name": "Silk Skirt - Aqua",
        "rarity": 999
      },
      {
        "itemID": 3387,
        "name": "Silk Skirt - Aqua Seed",
        "rarity": 999
      },
      {
        "itemID": 3388,
        "name": "Silk Skirt - Black",
        "rarity": 999
      },
      {
        "itemID": 3389,
        "name": "Silk Skirt - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3390,
        "name": "Silk Skirt - White",
        "rarity": 999
      },
      {
        "itemID": 3391,
        "name": "Silk Skirt - White Seed",
        "rarity": 999
      },
      {
        "itemID": 3392,
        "name": "Silk Skirt - Purple",
        "rarity": 999
      },
      {
        "itemID": 3393,
        "name": "Silk Skirt - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3394,
        "name": "Country Flag",
        "rarity": 999
      },
      {
        "itemID": 3395,
        "name": "Country Flag Seed",
        "rarity": 999
      },
      {
        "itemID": 3396,
        "name": "Lovebird Pendant",
        "rarity": 999
      },
      {
        "itemID": 3397,
        "name": "Lovebird Pendant Seed",
        "rarity": 999
      },
      {
        "itemID": 3398,
        "name": "Booty Chest",
        "rarity": 999
      },
      {
        "itemID": 3399,
        "name": "Booty Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 3400,
        "name": "Love Potion #8",
        "rarity": 999
      },
      {
        "itemID": 3401,
        "name": "Love Potion #8 Seed",
        "rarity": 999
      },
      {
        "itemID": 3402,
        "name": "Golden Booty Chest",
        "rarity": 999
      },
      {
        "itemID": 3403,
        "name": "Golden Booty Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 3404,
        "name": "Sour Lollipop",
        "rarity": 999
      },
      {
        "itemID": 3405,
        "name": "Sour Lollipop Seed",
        "rarity": 999
      },
      {
        "itemID": 3406,
        "name": "Sweet Lollipop",
        "rarity": 999
      },
      {
        "itemID": 3407,
        "name": "Sweet Lollipop Seed",
        "rarity": 999
      },
      {
        "itemID": 3408,
        "name": "Pink Marble Arch",
        "rarity": 999
      },
      {
        "itemID": 3409,
        "name": "Pink Marble Arch Seed",
        "rarity": 999
      },
      {
        "itemID": 3410,
        "name": "Silkworm Toy",
        "rarity": 40
      },
      {
        "itemID": 3411,
        "name": "Silkworm Toy Seed",
        "rarity": 40
      },
      {
        "itemID": 3412,
        "name": "Steam Collector",
        "rarity": 47
      },
      {
        "itemID": 3413,
        "name": "Steam Collector Seed",
        "rarity": 47
      },
      {
        "itemID": 3414,
        "name": "Steam Scrambler",
        "rarity": 106
      },
      {
        "itemID": 3415,
        "name": "Steam Scrambler Seed",
        "rarity": 106
      },
      {
        "itemID": 3416,
        "name": "Dark Cult Hood",
        "rarity": 999
      },
      {
        "itemID": 3417,
        "name": "Dark Cult Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 3418,
        "name": "Serpent Staff",
        "rarity": 999
      },
      {
        "itemID": 3419,
        "name": "Serpent Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 3420,
        "name": "Roasted Cobra",
        "rarity": 999
      },
      {
        "itemID": 3421,
        "name": "Roasted Cobra Seed",
        "rarity": 999
      },
      {
        "itemID": 3422,
        "name": "Cobra Statuette",
        "rarity": 999
      },
      {
        "itemID": 3423,
        "name": "Cobra Statuette Seed",
        "rarity": 999
      },
      {
        "itemID": 3424,
        "name": "Yellow Diamond",
        "rarity": 100
      },
      {
        "itemID": 3425,
        "name": "Yellow Diamond Seed",
        "rarity": 100
      },
      {
        "itemID": 3426,
        "name": "Potato Couch",
        "rarity": 999
      },
      {
        "itemID": 3427,
        "name": "Potato Couch Seed",
        "rarity": 999
      },
      {
        "itemID": 3428,
        "name": "Potato",
        "rarity": 999
      },
      {
        "itemID": 3429,
        "name": "Potato Seed",
        "rarity": 999
      },
      {
        "itemID": 3430,
        "name": "Lucky Pendant",
        "rarity": 999
      },
      {
        "itemID": 3431,
        "name": "Lucky Pendant Seed",
        "rarity": 999
      },
      {
        "itemID": 3432,
        "name": "Catch-of-the-Day Bait",
        "rarity": 999
      },
      {
        "itemID": 3433,
        "name": "Catch-of-the-Day Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 3434,
        "name": "Rainbowfish",
        "rarity": 999
      },
      {
        "itemID": 3435,
        "name": "Rainbowfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3436,
        "name": "Totally Legit Bunnyfish",
        "rarity": 999
      },
      {
        "itemID": 3437,
        "name": "Totally Legit Bunnyfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3438,
        "name": "Seahorse",
        "rarity": 999
      },
      {
        "itemID": 3439,
        "name": "Seahorse Seed",
        "rarity": 999
      },
      {
        "itemID": 3440,
        "name": "Mutant Fish",
        "rarity": 999
      },
      {
        "itemID": 3441,
        "name": "Mutant Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 3442,
        "name": "Riding Bumblebee",
        "rarity": 999
      },
      {
        "itemID": 3443,
        "name": "Riding Bumblebee Seed",
        "rarity": 999
      },
      {
        "itemID": 3444,
        "name": "Spring Crown",
        "rarity": 52
      },
      {
        "itemID": 3445,
        "name": "Spring Crown Seed",
        "rarity": 52
      },
      {
        "itemID": 3446,
        "name": "Weather Machine - Spring",
        "rarity": 999
      },
      {
        "itemID": 3447,
        "name": "Weather Machine - Spring Seed",
        "rarity": 999
      },
      {
        "itemID": 3448,
        "name": "Lobster Trap",
        "rarity": 999
      },
      {
        "itemID": 3449,
        "name": "Lobster Trap Seed",
        "rarity": 999
      },
      {
        "itemID": 3450,
        "name": "Lobster",
        "rarity": 999
      },
      {
        "itemID": 3451,
        "name": "Lobster Seed",
        "rarity": 999
      },
      {
        "itemID": 3452,
        "name": "Purple Shore Crab",
        "rarity": 999
      },
      {
        "itemID": 3453,
        "name": "Purple Shore Crab Seed",
        "rarity": 999
      },
      {
        "itemID": 3454,
        "name": "Alaskan King Crab",
        "rarity": 999
      },
      {
        "itemID": 3455,
        "name": "Alaskan King Crab Seed",
        "rarity": 999
      },
      {
        "itemID": 3456,
        "name": "Dungeonist Crab",
        "rarity": 999
      },
      {
        "itemID": 3457,
        "name": "Dungeonist Crab Seed",
        "rarity": 999
      },
      {
        "itemID": 3458,
        "name": "Crawdad",
        "rarity": 999
      },
      {
        "itemID": 3459,
        "name": "Crawdad Seed",
        "rarity": 999
      },
      {
        "itemID": 3460,
        "name": "Hermit Crab",
        "rarity": 999
      },
      {
        "itemID": 3461,
        "name": "Hermit Crab Seed",
        "rarity": 999
      },
      {
        "itemID": 3462,
        "name": "Brainflower",
        "rarity": 999
      },
      {
        "itemID": 3463,
        "name": "Brainflower Seed",
        "rarity": 999
      },
      {
        "itemID": 3464,
        "name": "Mermaid Tail",
        "rarity": 999
      },
      {
        "itemID": 3465,
        "name": "Mermaid Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 3466,
        "name": "Sushi Knife",
        "rarity": 39
      },
      {
        "itemID": 3467,
        "name": "Sushi Knife Seed",
        "rarity": 39
      },
      {
        "itemID": 3468,
        "name": "Fish Chunk",
        "rarity": 999
      },
      {
        "itemID": 3469,
        "name": "Fish Chunk Seed",
        "rarity": 999
      },
      {
        "itemID": 3470,
        "name": "Cutting Board",
        "rarity": 28
      },
      {
        "itemID": 3471,
        "name": "Cutting Board Seed",
        "rarity": 28
      },
      {
        "itemID": 3472,
        "name": "Rice",
        "rarity": 23
      },
      {
        "itemID": 3473,
        "name": "Rice Seed",
        "rarity": 23
      },
      {
        "itemID": 3474,
        "name": "Maki Roll",
        "rarity": 999
      },
      {
        "itemID": 3475,
        "name": "Maki Roll Seed",
        "rarity": 999
      },
      {
        "itemID": 3476,
        "name": "Spring Bouquet",
        "rarity": 999
      },
      {
        "itemID": 3477,
        "name": "Spring Bouquet Seed",
        "rarity": 999
      },
      {
        "itemID": 3478,
        "name": "Paint Bucket - Red",
        "rarity": 39
      },
      {
        "itemID": 3479,
        "name": "Paint Bucket - Red Seed",
        "rarity": 39
      },
      {
        "itemID": 3480,
        "name": "Paint Bucket - Yellow",
        "rarity": 39
      },
      {
        "itemID": 3481,
        "name": "Paint Bucket - Yellow Seed",
        "rarity": 39
      },
      {
        "itemID": 3482,
        "name": "Paint Bucket - Green",
        "rarity": 39
      },
      {
        "itemID": 3483,
        "name": "Paint Bucket - Green Seed",
        "rarity": 39
      },
      {
        "itemID": 3484,
        "name": "Paint Bucket - Aqua",
        "rarity": 39
      },
      {
        "itemID": 3485,
        "name": "Paint Bucket - Aqua Seed",
        "rarity": 39
      },
      {
        "itemID": 3486,
        "name": "Paint Bucket - Blue",
        "rarity": 39
      },
      {
        "itemID": 3487,
        "name": "Paint Bucket - Blue Seed",
        "rarity": 39
      },
      {
        "itemID": 3488,
        "name": "Paint Bucket - Purple",
        "rarity": 39
      },
      {
        "itemID": 3489,
        "name": "Paint Bucket - Purple Seed",
        "rarity": 39
      },
      {
        "itemID": 3490,
        "name": "Paint Bucket - Charcoal",
        "rarity": 39
      },
      {
        "itemID": 3491,
        "name": "Paint Bucket - Charcoal Seed",
        "rarity": 39
      },
      {
        "itemID": 3492,
        "name": "Paint Bucket - Varnish",
        "rarity": 39
      },
      {
        "itemID": 3493,
        "name": "Paint Bucket - Varnish Seed",
        "rarity": 39
      },
      {
        "itemID": 3494,
        "name": "Paintbrush",
        "rarity": 999
      },
      {
        "itemID": 3495,
        "name": "Paintbrush Seed",
        "rarity": 999
      },
      {
        "itemID": 3496,
        "name": "Steam Revolver",
        "rarity": 87
      },
      {
        "itemID": 3497,
        "name": "Steam Revolver Seed",
        "rarity": 87
      },
      {
        "itemID": 3498,
        "name": "Steam Launcher",
        "rarity": 92
      },
      {
        "itemID": 3499,
        "name": "Steam Launcher Seed",
        "rarity": 92
      },
      {
        "itemID": 3500,
        "name": "Red Crayon",
        "rarity": 72
      },
      {
        "itemID": 3501,
        "name": "Red Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3502,
        "name": "Yellow Crayon",
        "rarity": 72
      },
      {
        "itemID": 3503,
        "name": "Yellow Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3504,
        "name": "Green Crayon",
        "rarity": 72
      },
      {
        "itemID": 3505,
        "name": "Green Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3506,
        "name": "Aqua Crayon",
        "rarity": 72
      },
      {
        "itemID": 3507,
        "name": "Aqua Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3508,
        "name": "Blue Crayon",
        "rarity": 72
      },
      {
        "itemID": 3509,
        "name": "Blue Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3510,
        "name": "Purple Crayon",
        "rarity": 72
      },
      {
        "itemID": 3511,
        "name": "Purple Crayon Seed",
        "rarity": 72
      },
      {
        "itemID": 3512,
        "name": "Saturday Wings",
        "rarity": 999
      },
      {
        "itemID": 3513,
        "name": "Saturday Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 3514,
        "name": "Raspberry Beret",
        "rarity": 999
      },
      {
        "itemID": 3515,
        "name": "Raspberry Beret Seed",
        "rarity": 999
      },
      {
        "itemID": 3516,
        "name": "Artist's Smock",
        "rarity": 999
      },
      {
        "itemID": 3517,
        "name": "Artist's Smock Seed",
        "rarity": 999
      },
      {
        "itemID": 3518,
        "name": "Goatee",
        "rarity": 65
      },
      {
        "itemID": 3519,
        "name": "Goatee Seed",
        "rarity": 65
      },
      {
        "itemID": 3520,
        "name": "Writing Desk",
        "rarity": 36
      },
      {
        "itemID": 3521,
        "name": "Writing Desk Seed",
        "rarity": 36
      },
      {
        "itemID": 3522,
        "name": "Arrow Placard",
        "rarity": 17
      },
      {
        "itemID": 3523,
        "name": "Arrow Placard Seed",
        "rarity": 17
      },
      {
        "itemID": 3524,
        "name": "Scroll Bulletin",
        "rarity": 999
      },
      {
        "itemID": 3525,
        "name": "Scroll Bulletin Seed",
        "rarity": 999
      },
      {
        "itemID": 3526,
        "name": "Gilded Frame",
        "rarity": 5
      },
      {
        "itemID": 3527,
        "name": "Gilded Frame Seed",
        "rarity": 5
      },
      {
        "itemID": 3528,
        "name": "Painting Easel",
        "rarity": 999
      },
      {
        "itemID": 3529,
        "name": "Painting Easel Seed",
        "rarity": 999
      },
      {
        "itemID": 3530,
        "name": "Orange Shirt",
        "rarity": 53
      },
      {
        "itemID": 3531,
        "name": "Orange Shirt Seed",
        "rarity": 53
      },
      {
        "itemID": 3532,
        "name": "Funtime Block",
        "rarity": 999
      },
      {
        "itemID": 3533,
        "name": "Funtime Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3534,
        "name": "Weather Machine - Howling Sky",
        "rarity": 999
      },
      {
        "itemID": 3535,
        "name": "Weather Machine - Howling Sky Seed",
        "rarity": 999
      },
      {
        "itemID": 3536,
        "name": "Homeopathic Medicine",
        "rarity": 999
      },
      {
        "itemID": 3537,
        "name": "Homeopathic Medicine Seed",
        "rarity": 999
      },
      {
        "itemID": 3538,
        "name": "Howling Wolf Emblem",
        "rarity": 999
      },
      {
        "itemID": 3539,
        "name": "Howling Wolf Emblem Seed",
        "rarity": 999
      },
      {
        "itemID": 3540,
        "name": "Charbroiled Wolf Emblem",
        "rarity": 999
      },
      {
        "itemID": 3541,
        "name": "Charbroiled Wolf Emblem Seed",
        "rarity": 999
      },
      {
        "itemID": 3542,
        "name": "Hero Portrait - Buddy",
        "rarity": 999
      },
      {
        "itemID": 3543,
        "name": "Hero Portrait - Buddy Seed",
        "rarity": 999
      },
      {
        "itemID": 3544,
        "name": "Picasso Triggerfish",
        "rarity": 999
      },
      {
        "itemID": 3545,
        "name": "Picasso Triggerfish Seed",
        "rarity": 999
      },
      {
        "itemID": 3546,
        "name": "Fish And Chips",
        "rarity": 999
      },
      {
        "itemID": 3547,
        "name": "Fish And Chips Seed",
        "rarity": 999
      },
      {
        "itemID": 3548,
        "name": "Battle Pet Cage",
        "rarity": 79
      },
      {
        "itemID": 3549,
        "name": "Battle Pet Cage Seed",
        "rarity": 79
      },
      {
        "itemID": 3550,
        "name": "Axolotl",
        "rarity": 999
      },
      {
        "itemID": 3551,
        "name": "Axolotl Seed",
        "rarity": 999
      },
      {
        "itemID": 3552,
        "name": "Battle Leash",
        "rarity": 100
      },
      {
        "itemID": 3553,
        "name": "Battle Leash Seed",
        "rarity": 100
      },
      {
        "itemID": 3554,
        "name": "Pet Trainer",
        "rarity": 999
      },
      {
        "itemID": 3555,
        "name": "Pet Trainer Seed",
        "rarity": 999
      },
      {
        "itemID": 3556,
        "name": "Dark Cave Background",
        "rarity": 1
      },
      {
        "itemID": 3557,
        "name": "Dark Cave Background Seed",
        "rarity": 1
      },
      {
        "itemID": 3558,
        "name": "Steam Engine",
        "rarity": 112
      },
      {
        "itemID": 3559,
        "name": "Steam Engine Seed",
        "rarity": 112
      },
      {
        "itemID": 3560,
        "name": "Lock Mover",
        "rarity": 999
      },
      {
        "itemID": 3561,
        "name": "Lock Mover Seed",
        "rarity": 999
      },
      {
        "itemID": 3562,
        "name": "Cave Blast",
        "rarity": 999
      },
      {
        "itemID": 3563,
        "name": "Cave Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 3564,
        "name": "Cave Dirt",
        "rarity": 1
      },
      {
        "itemID": 3565,
        "name": "Cave Dirt Seed",
        "rarity": 1
      },
      {
        "itemID": 3566,
        "name": "Cave Column",
        "rarity": 2
      },
      {
        "itemID": 3567,
        "name": "Cave Column Seed",
        "rarity": 2
      },
      {
        "itemID": 3568,
        "name": "Stalagmite",
        "rarity": 9
      },
      {
        "itemID": 3569,
        "name": "Stalagmite Seed",
        "rarity": 9
      },
      {
        "itemID": 3570,
        "name": "Stalactite",
        "rarity": 9
      },
      {
        "itemID": 3571,
        "name": "Stalactite Seed",
        "rarity": 9
      },
      {
        "itemID": 3572,
        "name": "Cave Platform",
        "rarity": 7
      },
      {
        "itemID": 3573,
        "name": "Cave Platform Seed",
        "rarity": 7
      },
      {
        "itemID": 3574,
        "name": "Spelunker's Headlamp",
        "rarity": 999
      },
      {
        "itemID": 3575,
        "name": "Spelunker's Headlamp Seed",
        "rarity": 999
      },
      {
        "itemID": 3576,
        "name": "Night Vision Goggles",
        "rarity": 999
      },
      {
        "itemID": 3577,
        "name": "Night Vision Goggles Seed",
        "rarity": 999
      },
      {
        "itemID": 3578,
        "name": "Hand Torch",
        "rarity": 4
      },
      {
        "itemID": 3579,
        "name": "Hand Torch Seed",
        "rarity": 4
      },
      {
        "itemID": 3580,
        "name": "Purple Cave Crystal",
        "rarity": 10
      },
      {
        "itemID": 3581,
        "name": "Purple Cave Crystal Seed",
        "rarity": 10
      },
      {
        "itemID": 3582,
        "name": "Golden Cave Crystal",
        "rarity": 100
      },
      {
        "itemID": 3583,
        "name": "Golden Cave Crystal Seed",
        "rarity": 100
      },
      {
        "itemID": 3584,
        "name": "Aqua Cave Crystal",
        "rarity": 10
      },
      {
        "itemID": 3585,
        "name": "Aqua Cave Crystal Seed",
        "rarity": 10
      },
      {
        "itemID": 3586,
        "name": "Climbing Wall",
        "rarity": 32
      },
      {
        "itemID": 3587,
        "name": "Climbing Wall Seed",
        "rarity": 32
      },
      {
        "itemID": 3588,
        "name": "Climbing Picks",
        "rarity": 999
      },
      {
        "itemID": 3589,
        "name": "Climbing Picks Seed",
        "rarity": 999
      },
      {
        "itemID": 3590,
        "name": "Climbing Boots",
        "rarity": 41
      },
      {
        "itemID": 3591,
        "name": "Climbing Boots Seed",
        "rarity": 41
      },
      {
        "itemID": 3592,
        "name": "Steam Pipe",
        "rarity": 63
      },
      {
        "itemID": 3593,
        "name": "Steam Pipe Seed",
        "rarity": 63
      },
      {
        "itemID": 3594,
        "name": "Maracas",
        "rarity": 999
      },
      {
        "itemID": 3595,
        "name": "Maracas Seed",
        "rarity": 999
      },
      {
        "itemID": 3596,
        "name": "Pinata Pal",
        "rarity": 999
      },
      {
        "itemID": 3597,
        "name": "Pinata Pal Seed",
        "rarity": 999
      },
      {
        "itemID": 3598,
        "name": "Festive Banner",
        "rarity": 999
      },
      {
        "itemID": 3599,
        "name": "Festive Banner Seed",
        "rarity": 999
      },
      {
        "itemID": 3600,
        "name": "Fish Taco",
        "rarity": 999
      },
      {
        "itemID": 3601,
        "name": "Fish Taco Seed",
        "rarity": 999
      },
      {
        "itemID": 3602,
        "name": "Fiesta Dress",
        "rarity": 999
      },
      {
        "itemID": 3603,
        "name": "Fiesta Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 3604,
        "name": "Golden Treasure Hoard",
        "rarity": 999
      },
      {
        "itemID": 3605,
        "name": "Golden Treasure Hoard Seed",
        "rarity": 999
      },
      {
        "itemID": 3606,
        "name": "Topaz Block",
        "rarity": 100
      },
      {
        "itemID": 3607,
        "name": "Topaz Block Seed",
        "rarity": 100
      },
      {
        "itemID": 3608,
        "name": "Deep Iron",
        "rarity": 999
      },
      {
        "itemID": 3609,
        "name": "Deep Iron Seed",
        "rarity": 999
      },
      {
        "itemID": 3610,
        "name": "Deep Iron Ore",
        "rarity": 999
      },
      {
        "itemID": 3611,
        "name": "Deep Iron Ore Seed",
        "rarity": 999
      },
      {
        "itemID": 3612,
        "name": "Deep Iron Ingot",
        "rarity": 999
      },
      {
        "itemID": 3613,
        "name": "Deep Iron Ingot Seed",
        "rarity": 999
      },
      {
        "itemID": 3614,
        "name": "Pick Blade",
        "rarity": 999
      },
      {
        "itemID": 3615,
        "name": "Pick Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 3616,
        "name": "Guardian Pineapple",
        "rarity": 999
      },
      {
        "itemID": 3617,
        "name": "Guardian Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 3618,
        "name": "Pineapple Ring",
        "rarity": 999
      },
      {
        "itemID": 3619,
        "name": "Pineapple Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 3620,
        "name": "Pineapple Fish",
        "rarity": 999
      },
      {
        "itemID": 3621,
        "name": "Pineapple Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 3622,
        "name": "Pineapple Daiquiri",
        "rarity": 999
      },
      {
        "itemID": 3623,
        "name": "Pineapple Daiquiri Seed",
        "rarity": 999
      },
      {
        "itemID": 3624,
        "name": "Pineapple Hair",
        "rarity": 999
      },
      {
        "itemID": 3625,
        "name": "Pineapple Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 3626,
        "name": "Pet Trainer Cap",
        "rarity": 999
      },
      {
        "itemID": 3627,
        "name": "Pet Trainer Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 3628,
        "name": "Silkworm Leash",
        "rarity": 999
      },
      {
        "itemID": 3629,
        "name": "Silkworm Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 3630,
        "name": "Silkworm Saddle",
        "rarity": 999
      },
      {
        "itemID": 3631,
        "name": "Silkworm Saddle Seed",
        "rarity": 999
      },
      {
        "itemID": 3632,
        "name": "Leashed Silkworm - Red",
        "rarity": 999
      },
      {
        "itemID": 3633,
        "name": "Leashed Silkworm - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3634,
        "name": "Leashed Silkworm - Green",
        "rarity": 999
      },
      {
        "itemID": 3635,
        "name": "Leashed Silkworm - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 3636,
        "name": "Leashed Silkworm - Blue",
        "rarity": 999
      },
      {
        "itemID": 3637,
        "name": "Leashed Silkworm - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3638,
        "name": "Leashed Silkworm - Black",
        "rarity": 999
      },
      {
        "itemID": 3639,
        "name": "Leashed Silkworm - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3640,
        "name": "Leashed Silkworm - White",
        "rarity": 999
      },
      {
        "itemID": 3641,
        "name": "Leashed Silkworm - White Seed",
        "rarity": 999
      },
      {
        "itemID": 3642,
        "name": "Leashed Silkworm - Grey",
        "rarity": 999
      },
      {
        "itemID": 3643,
        "name": "Leashed Silkworm - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3644,
        "name": "Leashed Silkworm - Purple",
        "rarity": 999
      },
      {
        "itemID": 3645,
        "name": "Leashed Silkworm - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3646,
        "name": "Leashed Silkworm - Yellow",
        "rarity": 999
      },
      {
        "itemID": 3647,
        "name": "Leashed Silkworm - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 3648,
        "name": "Leashed Silkworm - Aqua",
        "rarity": 999
      },
      {
        "itemID": 3649,
        "name": "Leashed Silkworm - Aqua Seed",
        "rarity": 999
      },
      {
        "itemID": 3650,
        "name": "Riding Silkworm - Red",
        "rarity": 999
      },
      {
        "itemID": 3651,
        "name": "Riding Silkworm - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 3652,
        "name": "Riding Silkworm - Green",
        "rarity": 999
      },
      {
        "itemID": 3653,
        "name": "Riding Silkworm - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 3654,
        "name": "Riding Silkworm - Blue",
        "rarity": 999
      },
      {
        "itemID": 3655,
        "name": "Riding Silkworm - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 3656,
        "name": "Riding Silkworm - Black",
        "rarity": 999
      },
      {
        "itemID": 3657,
        "name": "Riding Silkworm - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 3658,
        "name": "Riding Silkworm - White",
        "rarity": 999
      },
      {
        "itemID": 3659,
        "name": "Riding Silkworm - White Seed",
        "rarity": 999
      },
      {
        "itemID": 3660,
        "name": "Riding Silkworm - Grey",
        "rarity": 999
      },
      {
        "itemID": 3661,
        "name": "Riding Silkworm - Grey Seed",
        "rarity": 999
      },
      {
        "itemID": 3662,
        "name": "Riding Silkworm - Purple",
        "rarity": 999
      },
      {
        "itemID": 3663,
        "name": "Riding Silkworm - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 3664,
        "name": "Riding Silkworm - Yellow",
        "rarity": 999
      },
      {
        "itemID": 3665,
        "name": "Riding Silkworm - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 3666,
        "name": "Riding Silkworm - Aqua",
        "rarity": 999
      },
      {
        "itemID": 3667,
        "name": "Riding Silkworm - Aqua Seed",
        "rarity": 999
      },
      {
        "itemID": 3668,
        "name": "CRISPR Technology",
        "rarity": 999
      },
      {
        "itemID": 3669,
        "name": "CRISPR Technology Seed",
        "rarity": 999
      },
      {
        "itemID": 3670,
        "name": "Genetic Resequencer",
        "rarity": 999
      },
      {
        "itemID": 3671,
        "name": "Genetic Resequencer Seed",
        "rarity": 999
      },
      {
        "itemID": 3672,
        "name": "Pet Trainer Medal",
        "rarity": 999
      },
      {
        "itemID": 3673,
        "name": "Pet Trainer Medal Seed",
        "rarity": 999
      },
      {
        "itemID": 3674,
        "name": "Whale Block",
        "rarity": 999
      },
      {
        "itemID": 3675,
        "name": "Whale Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3676,
        "name": "Pet Trainer Whistle",
        "rarity": 999
      },
      {
        "itemID": 3677,
        "name": "Pet Trainer Whistle Seed",
        "rarity": 999
      },
      {
        "itemID": 3678,
        "name": "Thinking Cap",
        "rarity": 999
      },
      {
        "itemID": 3679,
        "name": "Thinking Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 3680,
        "name": "Phlogiston",
        "rarity": 999
      },
      {
        "itemID": 3681,
        "name": "Phlogiston Seed",
        "rarity": 999
      },
      {
        "itemID": 3682,
        "name": "Lock-Bot",
        "rarity": 999
      },
      {
        "itemID": 3683,
        "name": "Lock-Bot Seed",
        "rarity": 999
      },
      {
        "itemID": 3684,
        "name": "Lock-Bot Remote",
        "rarity": 999
      },
      {
        "itemID": 3685,
        "name": "Lock-Bot Remote Seed",
        "rarity": 999
      },
      {
        "itemID": 3686,
        "name": "Toy Lock-Bot",
        "rarity": 999
      },
      {
        "itemID": 3687,
        "name": "Toy Lock-Bot Seed",
        "rarity": 999
      },
      {
        "itemID": 3688,
        "name": "Burnt Leather",
        "rarity": 999
      },
      {
        "itemID": 3689,
        "name": "Burnt Leather Seed",
        "rarity": 999
      },
      {
        "itemID": 3690,
        "name": "Buckle Design",
        "rarity": 999
      },
      {
        "itemID": 3691,
        "name": "Buckle Design Seed",
        "rarity": 999
      },
      {
        "itemID": 3692,
        "name": "Iron Buckle",
        "rarity": 999
      },
      {
        "itemID": 3693,
        "name": "Iron Buckle Seed",
        "rarity": 999
      },
      {
        "itemID": 3694,
        "name": "Weather Machine - Heatwave",
        "rarity": 999
      },
      {
        "itemID": 3695,
        "name": "Weather Machine - Heatwave Seed",
        "rarity": 999
      },
      {
        "itemID": 3696,
        "name": "Riding Phoenix",
        "rarity": 999
      },
      {
        "itemID": 3697,
        "name": "Riding Phoenix Seed",
        "rarity": 999
      },
      {
        "itemID": 3698,
        "name": "Red Flip Flops",
        "rarity": 999
      },
      {
        "itemID": 3699,
        "name": "Red Flip Flops Seed",
        "rarity": 999
      },
      {
        "itemID": 3700,
        "name": "Green Flip Flops",
        "rarity": 999
      },
      {
        "itemID": 3701,
        "name": "Green Flip Flops Seed",
        "rarity": 999
      },
      {
        "itemID": 3702,
        "name": "Blue Flip Flops",
        "rarity": 999
      },
      {
        "itemID": 3703,
        "name": "Blue Flip Flops Seed",
        "rarity": 999
      },
      {
        "itemID": 3704,
        "name": "Paper Airplane",
        "rarity": 999
      },
      {
        "itemID": 3705,
        "name": "Paper Airplane Seed",
        "rarity": 999
      },
      {
        "itemID": 3706,
        "name": "B.O.O. Shirt",
        "rarity": 999
      },
      {
        "itemID": 3707,
        "name": "B.O.O. Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3708,
        "name": "B.O.O. Pants",
        "rarity": 999
      },
      {
        "itemID": 3709,
        "name": "B.O.O. Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 3710,
        "name": "Spectral Goggles",
        "rarity": 999
      },
      {
        "itemID": 3711,
        "name": "Spectral Goggles Seed",
        "rarity": 999
      },
      {
        "itemID": 3712,
        "name": "B.O.O. Helmet",
        "rarity": 999
      },
      {
        "itemID": 3713,
        "name": "B.O.O. Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 3714,
        "name": "Neutron Pack",
        "rarity": 107
      },
      {
        "itemID": 3715,
        "name": "Neutron Pack Seed",
        "rarity": 107
      },
      {
        "itemID": 3716,
        "name": "Neutron Gun",
        "rarity": 102
      },
      {
        "itemID": 3717,
        "name": "Neutron Gun Seed",
        "rarity": 102
      },
      {
        "itemID": 3718,
        "name": "Rubber Boots",
        "rarity": 999
      },
      {
        "itemID": 3719,
        "name": "Rubber Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 3720,
        "name": "Ghost Jar",
        "rarity": 38
      },
      {
        "itemID": 3721,
        "name": "Ghost Jar Seed",
        "rarity": 38
      },
      {
        "itemID": 3722,
        "name": "Ghost-In-A-Jar",
        "rarity": 999
      },
      {
        "itemID": 3723,
        "name": "Ghost-In-A-Jar Seed",
        "rarity": 999
      },
      {
        "itemID": 3724,
        "name": "Spirit Storage Unit",
        "rarity": 81
      },
      {
        "itemID": 3725,
        "name": "Spirit Storage Unit Seed",
        "rarity": 81
      },
      {
        "itemID": 3726,
        "name": "Destroyed Spirit Storage Unit",
        "rarity": 999
      },
      {
        "itemID": 3727,
        "name": "Destroyed Spirit Storage Unit Seed",
        "rarity": 999
      },
      {
        "itemID": 3728,
        "name": "Ectoplasm Sample",
        "rarity": 999
      },
      {
        "itemID": 3729,
        "name": "Ectoplasm Sample Seed",
        "rarity": 999
      },
      {
        "itemID": 3730,
        "name": "Crystallized Ghost",
        "rarity": 999
      },
      {
        "itemID": 3731,
        "name": "Crystallized Ghost Seed",
        "rarity": 999
      },
      {
        "itemID": 3732,
        "name": "Warning Block",
        "rarity": 999
      },
      {
        "itemID": 3733,
        "name": "Warning Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3734,
        "name": "Warning Background",
        "rarity": 999
      },
      {
        "itemID": 3735,
        "name": "Warning Background Seed",
        "rarity": 999
      },
      {
        "itemID": 3736,
        "name": "Demon Control Cap",
        "rarity": 999
      },
      {
        "itemID": 3737,
        "name": "Demon Control Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 3738,
        "name": "Haunted Pants",
        "rarity": 999
      },
      {
        "itemID": 3739,
        "name": "Haunted Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 3740,
        "name": "Root Beer",
        "rarity": 999
      },
      {
        "itemID": 3741,
        "name": "Root Beer Seed",
        "rarity": 999
      },
      {
        "itemID": 3742,
        "name": "Spray Tan",
        "rarity": 999
      },
      {
        "itemID": 3743,
        "name": "Spray Tan Seed",
        "rarity": 999
      },
      {
        "itemID": 3744,
        "name": "Shark-Tooth Necklace",
        "rarity": 999
      },
      {
        "itemID": 3745,
        "name": "Shark-Tooth Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 3746,
        "name": "Firefin",
        "rarity": 999
      },
      {
        "itemID": 3747,
        "name": "Firefin Seed",
        "rarity": 999
      },
      {
        "itemID": 3748,
        "name": "Bone Spikes",
        "rarity": 999
      },
      {
        "itemID": 3749,
        "name": "Bone Spikes Seed",
        "rarity": 999
      },
      {
        "itemID": 3750,
        "name": "Ghost Charm",
        "rarity": 999
      },
      {
        "itemID": 3751,
        "name": "Ghost Charm Seed",
        "rarity": 999
      },
      {
        "itemID": 3752,
        "name": "Steam Funnel",
        "rarity": 49
      },
      {
        "itemID": 3753,
        "name": "Steam Funnel Seed",
        "rarity": 49
      },
      {
        "itemID": 3754,
        "name": "Steam Funnel - Up",
        "rarity": 58
      },
      {
        "itemID": 3755,
        "name": "Steam Funnel - Up Seed",
        "rarity": 58
      },
      {
        "itemID": 3756,
        "name": "Steam Funnel - Down",
        "rarity": 49
      },
      {
        "itemID": 3757,
        "name": "Steam Funnel - Down Seed",
        "rarity": 49
      },
      {
        "itemID": 3758,
        "name": "B.O.O. Sign",
        "rarity": 999
      },
      {
        "itemID": 3759,
        "name": "B.O.O. Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 3760,
        "name": "Data Bedrock",
        "rarity": 1
      },
      {
        "itemID": 3761,
        "name": "Data Bedrock Seed",
        "rarity": 1
      },
      {
        "itemID": 3762,
        "name": "Shark Tooth",
        "rarity": 999
      },
      {
        "itemID": 3763,
        "name": "Shark Tooth Seed",
        "rarity": 999
      },
      {
        "itemID": 3764,
        "name": "Atomic Fireball",
        "rarity": 999
      },
      {
        "itemID": 3765,
        "name": "Atomic Fireball Seed",
        "rarity": 999
      },
      {
        "itemID": 3766,
        "name": "Steam Crossover",
        "rarity": 51
      },
      {
        "itemID": 3767,
        "name": "Steam Crossover Seed",
        "rarity": 51
      },
      {
        "itemID": 3768,
        "name": "Steam Crank",
        "rarity": 90
      },
      {
        "itemID": 3769,
        "name": "Steam Crank Seed",
        "rarity": 90
      },
      {
        "itemID": 3770,
        "name": "Steam Lamp",
        "rarity": 100
      },
      {
        "itemID": 3771,
        "name": "Steam Lamp Seed",
        "rarity": 100
      },
      {
        "itemID": 3772,
        "name": "Steam Spikes",
        "rarity": 8
      },
      {
        "itemID": 3773,
        "name": "Steam Spikes Seed",
        "rarity": 8
      },
      {
        "itemID": 3774,
        "name": "No-Face",
        "rarity": 999
      },
      {
        "itemID": 3775,
        "name": "No-Face Seed",
        "rarity": 999
      },
      {
        "itemID": 3776,
        "name": "Purple Djellaba",
        "rarity": 999
      },
      {
        "itemID": 3777,
        "name": "Purple Djellaba Seed",
        "rarity": 999
      },
      {
        "itemID": 3778,
        "name": "Yellow Djellaba",
        "rarity": 999
      },
      {
        "itemID": 3779,
        "name": "Yellow Djellaba Seed",
        "rarity": 999
      },
      {
        "itemID": 3780,
        "name": "Green Djellaba",
        "rarity": 999
      },
      {
        "itemID": 3781,
        "name": "Green Djellaba Seed",
        "rarity": 999
      },
      {
        "itemID": 3782,
        "name": "Mini Blocks",
        "rarity": 4
      },
      {
        "itemID": 3783,
        "name": "Mini Blocks Seed",
        "rarity": 4
      },
      {
        "itemID": 3784,
        "name": "Teeny Blocks",
        "rarity": 4
      },
      {
        "itemID": 3785,
        "name": "Teeny Blocks Seed",
        "rarity": 4
      },
      {
        "itemID": 3786,
        "name": "Jigsaw Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 3787,
        "name": "Jigsaw Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 3788,
        "name": "Riding Broomstick",
        "rarity": 999
      },
      {
        "itemID": 3789,
        "name": "Riding Broomstick Seed",
        "rarity": 999
      },
      {
        "itemID": 3790,
        "name": "Techno Visor",
        "rarity": 999
      },
      {
        "itemID": 3791,
        "name": "Techno Visor Seed",
        "rarity": 999
      },
      {
        "itemID": 3792,
        "name": "Glowstick",
        "rarity": 999
      },
      {
        "itemID": 3793,
        "name": "Glowstick Seed",
        "rarity": 999
      },
      {
        "itemID": 3794,
        "name": "Display Shelf",
        "rarity": 78
      },
      {
        "itemID": 3795,
        "name": "Display Shelf Seed",
        "rarity": 78
      },
      {
        "itemID": 3796,
        "name": "One-Way Block",
        "rarity": 23
      },
      {
        "itemID": 3797,
        "name": "One-Way Block Seed",
        "rarity": 23
      },
      {
        "itemID": 3798,
        "name": "VIP Entrance",
        "rarity": 999
      },
      {
        "itemID": 3799,
        "name": "VIP Entrance Seed",
        "rarity": 999
      },
      {
        "itemID": 3800,
        "name": "Rhino Horn",
        "rarity": 999
      },
      {
        "itemID": 3801,
        "name": "Rhino Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 3802,
        "name": "Globe",
        "rarity": 999
      },
      {
        "itemID": 3803,
        "name": "Globe Seed",
        "rarity": 999
      },
      {
        "itemID": 3804,
        "name": "Challenge Timer",
        "rarity": 999
      },
      {
        "itemID": 3805,
        "name": "Challenge Timer Seed",
        "rarity": 999
      },
      {
        "itemID": 3806,
        "name": "Challenge Start Flag",
        "rarity": 999
      },
      {
        "itemID": 3807,
        "name": "Challenge Start Flag Seed",
        "rarity": 999
      },
      {
        "itemID": 3808,
        "name": "Challenge End Flag",
        "rarity": 999
      },
      {
        "itemID": 3809,
        "name": "Challenge End Flag Seed",
        "rarity": 999
      },
      {
        "itemID": 3810,
        "name": "Fish Wall Mount",
        "rarity": 999
      },
      {
        "itemID": 3811,
        "name": "Fish Wall Mount Seed",
        "rarity": 999
      },
      {
        "itemID": 3812,
        "name": "Octopus Head",
        "rarity": 999
      },
      {
        "itemID": 3813,
        "name": "Octopus Head Seed",
        "rarity": 999
      },
      {
        "itemID": 3814,
        "name": "Stonefish",
        "rarity": 999
      },
      {
        "itemID": 3815,
        "name": "Stonefish Seed",
        "rarity": 999
      },
      {
        "itemID": 3816,
        "name": "Tamago Sushi",
        "rarity": 999
      },
      {
        "itemID": 3817,
        "name": "Tamago Sushi Seed",
        "rarity": 999
      },
      {
        "itemID": 3818,
        "name": "Portrait",
        "rarity": 999
      },
      {
        "itemID": 3819,
        "name": "Portrait Seed",
        "rarity": 999
      },
      {
        "itemID": 3820,
        "name": "Orca",
        "rarity": 999
      },
      {
        "itemID": 3821,
        "name": "Orca Seed",
        "rarity": 999
      },
      {
        "itemID": 3822,
        "name": "Red Hair Dye",
        "rarity": 33
      },
      {
        "itemID": 3823,
        "name": "Red Hair Dye Seed",
        "rarity": 33
      },
      {
        "itemID": 3824,
        "name": "Green Hair Dye",
        "rarity": 34
      },
      {
        "itemID": 3825,
        "name": "Green Hair Dye Seed",
        "rarity": 34
      },
      {
        "itemID": 3826,
        "name": "Blue Hair Dye",
        "rarity": 44
      },
      {
        "itemID": 3827,
        "name": "Blue Hair Dye Seed",
        "rarity": 44
      },
      {
        "itemID": 3828,
        "name": "Black Hair Dye",
        "rarity": 62
      },
      {
        "itemID": 3829,
        "name": "Black Hair Dye Seed",
        "rarity": 62
      },
      {
        "itemID": 3830,
        "name": "Shampoo",
        "rarity": 22
      },
      {
        "itemID": 3831,
        "name": "Shampoo Seed",
        "rarity": 22
      },
      {
        "itemID": 3832,
        "name": "Weather Machine - Stuff",
        "rarity": 999
      },
      {
        "itemID": 3833,
        "name": "Weather Machine - Stuff Seed",
        "rarity": 999
      },
      {
        "itemID": 3834,
        "name": "Beehive",
        "rarity": 52
      },
      {
        "itemID": 3835,
        "name": "Beehive Seed",
        "rarity": 52
      },
      {
        "itemID": 3836,
        "name": "Honey",
        "rarity": 999
      },
      {
        "itemID": 3837,
        "name": "Honey Seed",
        "rarity": 999
      },
      {
        "itemID": 3838,
        "name": "Sorcerer Stone",
        "rarity": 87
      },
      {
        "itemID": 3839,
        "name": "Sorcerer Stone Seed",
        "rarity": 87
      },
      {
        "itemID": 3840,
        "name": "Villain Portrait - The Harvester",
        "rarity": 999
      },
      {
        "itemID": 3841,
        "name": "Villain Portrait - The Harvester Seed",
        "rarity": 999
      },
      {
        "itemID": 3842,
        "name": "Cosmic Power - Life Harvest",
        "rarity": 999
      },
      {
        "itemID": 3843,
        "name": "Cosmic Power - Life Harvest Seed",
        "rarity": 999
      },
      {
        "itemID": 3844,
        "name": "Super Shirt - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3845,
        "name": "Super Shirt - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3846,
        "name": "Muscle Shirt - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3847,
        "name": "Muscle Shirt - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3848,
        "name": "Heroic Tights - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3849,
        "name": "Heroic Tights - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3850,
        "name": "Super Tights - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3851,
        "name": "Super Tights - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3852,
        "name": "Heroic Boots - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3853,
        "name": "Heroic Boots - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3854,
        "name": "Superhero Mask - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3855,
        "name": "Superhero Mask - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3856,
        "name": "Crimefighter Mask - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3857,
        "name": "Crimefighter Mask - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3858,
        "name": "Super Cape - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3859,
        "name": "Super Cape - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3860,
        "name": "Superheroine Top - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3861,
        "name": "Superheroine Top - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3862,
        "name": "Super Eye Mask - Autumn",
        "rarity": 999
      },
      {
        "itemID": 3863,
        "name": "Super Eye Mask - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 3864,
        "name": "Super Logo - Leaf",
        "rarity": 999
      },
      {
        "itemID": 3865,
        "name": "Super Logo - Leaf Seed",
        "rarity": 999
      },
      {
        "itemID": 3866,
        "name": "Harvest Witch Mask",
        "rarity": 999
      },
      {
        "itemID": 3867,
        "name": "Harvest Witch Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 3868,
        "name": "Harvest Horn",
        "rarity": 999
      },
      {
        "itemID": 3869,
        "name": "Harvest Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 3870,
        "name": "Ancestor Mooncake",
        "rarity": 999
      },
      {
        "itemID": 3871,
        "name": "Ancestor Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 3872,
        "name": "Blue Hanbok Top",
        "rarity": 999
      },
      {
        "itemID": 3873,
        "name": "Blue Hanbok Top Seed",
        "rarity": 999
      },
      {
        "itemID": 3874,
        "name": "Orange Hanbok Top",
        "rarity": 999
      },
      {
        "itemID": 3875,
        "name": "Orange Hanbok Top Seed",
        "rarity": 999
      },
      {
        "itemID": 3876,
        "name": "Blue Hanbok Pants",
        "rarity": 999
      },
      {
        "itemID": 3877,
        "name": "Blue Hanbok Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 3878,
        "name": "Orange Hanbok Pants",
        "rarity": 999
      },
      {
        "itemID": 3879,
        "name": "Orange Hanbok Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 3880,
        "name": "Green Hanbok Skirt",
        "rarity": 999
      },
      {
        "itemID": 3881,
        "name": "Green Hanbok Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3882,
        "name": "Yellow Hanbok Skirt",
        "rarity": 999
      },
      {
        "itemID": 3883,
        "name": "Yellow Hanbok Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 3884,
        "name": "Sunflower Hair Pin",
        "rarity": 999
      },
      {
        "itemID": 3885,
        "name": "Sunflower Hair Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 3886,
        "name": "Lil' Sheepers",
        "rarity": 999
      },
      {
        "itemID": 3887,
        "name": "Lil' Sheepers Seed",
        "rarity": 999
      },
      {
        "itemID": 3888,
        "name": "Sheep",
        "rarity": 999
      },
      {
        "itemID": 3889,
        "name": "Sheep Seed",
        "rarity": 999
      },
      {
        "itemID": 3890,
        "name": "Wool",
        "rarity": 999
      },
      {
        "itemID": 3891,
        "name": "Wool Seed",
        "rarity": 999
      },
      {
        "itemID": 3892,
        "name": "Wool Bolt",
        "rarity": 999
      },
      {
        "itemID": 3893,
        "name": "Wool Bolt Seed",
        "rarity": 999
      },
      {
        "itemID": 3894,
        "name": "Harvest Robinsons",
        "rarity": 999
      },
      {
        "itemID": 3895,
        "name": "Harvest Robinsons Seed",
        "rarity": 999
      },
      {
        "itemID": 3896,
        "name": "Silkworm Soul",
        "rarity": 999
      },
      {
        "itemID": 3897,
        "name": "Silkworm Soul Seed",
        "rarity": 999
      },
      {
        "itemID": 3898,
        "name": "Telephone",
        "rarity": 42
      },
      {
        "itemID": 3899,
        "name": "Telephone Seed",
        "rarity": 42
      },
      {
        "itemID": 3900,
        "name": "Wooden Sword",
        "rarity": 105
      },
      {
        "itemID": 3901,
        "name": "Wooden Sword Seed",
        "rarity": 105
      },
      {
        "itemID": 3902,
        "name": "Crazy Jim",
        "rarity": 999
      },
      {
        "itemID": 3903,
        "name": "Crazy Jim Seed",
        "rarity": 999
      },
      {
        "itemID": 3904,
        "name": "Code Block: Kappa",
        "rarity": 999
      },
      {
        "itemID": 3905,
        "name": "Code Block: Kappa Seed",
        "rarity": 999
      },
      {
        "itemID": 3906,
        "name": "Code Block: Charlie",
        "rarity": 999
      },
      {
        "itemID": 3907,
        "name": "Code Block: Charlie Seed",
        "rarity": 999
      },
      {
        "itemID": 3908,
        "name": "Code Block: Ouroboros",
        "rarity": 999
      },
      {
        "itemID": 3909,
        "name": "Code Block: Ouroboros Seed",
        "rarity": 999
      },
      {
        "itemID": 3910,
        "name": "Code Block: Edamame",
        "rarity": 999
      },
      {
        "itemID": 3911,
        "name": "Code Block: Edamame Seed",
        "rarity": 999
      },
      {
        "itemID": 3912,
        "name": "Wool Scarf",
        "rarity": 999
      },
      {
        "itemID": 3913,
        "name": "Wool Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 3914,
        "name": "Sheep Shears",
        "rarity": 999
      },
      {
        "itemID": 3915,
        "name": "Sheep Shears Seed",
        "rarity": 999
      },
      {
        "itemID": 3916,
        "name": "Illuminati Stone",
        "rarity": 999
      },
      {
        "itemID": 3917,
        "name": "Illuminati Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 3918,
        "name": "Fossil Rock",
        "rarity": 999
      },
      {
        "itemID": 3919,
        "name": "Fossil Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 3920,
        "name": "Fossil Boulder",
        "rarity": 999
      },
      {
        "itemID": 3921,
        "name": "Fossil Boulder Seed",
        "rarity": 999
      },
      {
        "itemID": 3922,
        "name": "Deep Fossil Rock",
        "rarity": 999
      },
      {
        "itemID": 3923,
        "name": "Deep Fossil Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 3924,
        "name": "Fossilroid",
        "rarity": 999
      },
      {
        "itemID": 3925,
        "name": "Fossilroid Seed",
        "rarity": 999
      },
      {
        "itemID": 3926,
        "name": "Alien Fossil Rock",
        "rarity": 999
      },
      {
        "itemID": 3927,
        "name": "Alien Fossil Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 3928,
        "name": "Igneous Fossil Rock",
        "rarity": 999
      },
      {
        "itemID": 3929,
        "name": "Igneous Fossil Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 3930,
        "name": "Igneous Rock",
        "rarity": 22
      },
      {
        "itemID": 3931,
        "name": "Igneous Rock Seed",
        "rarity": 22
      },
      {
        "itemID": 3932,
        "name": "Rock Hammer",
        "rarity": 16
      },
      {
        "itemID": 3933,
        "name": "Rock Hammer Seed",
        "rarity": 16
      },
      {
        "itemID": 3934,
        "name": "Rock Chisel",
        "rarity": 21
      },
      {
        "itemID": 3935,
        "name": "Rock Chisel Seed",
        "rarity": 21
      },
      {
        "itemID": 3936,
        "name": "Fossil",
        "rarity": 999
      },
      {
        "itemID": 3937,
        "name": "Fossil Seed",
        "rarity": 999
      },
      {
        "itemID": 3938,
        "name": "Fossil Prep Station",
        "rarity": 999
      },
      {
        "itemID": 3939,
        "name": "Fossil Prep Station Seed",
        "rarity": 999
      },
      {
        "itemID": 3940,
        "name": "Ammonite Block",
        "rarity": 999
      },
      {
        "itemID": 3941,
        "name": "Ammonite Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3942,
        "name": "Dino Ribcage",
        "rarity": 999
      },
      {
        "itemID": 3943,
        "name": "Dino Ribcage Seed",
        "rarity": 999
      },
      {
        "itemID": 3944,
        "name": "Dinosaur Mask",
        "rarity": 999
      },
      {
        "itemID": 3945,
        "name": "Dinosaur Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 3946,
        "name": "Ancient Plant Seed",
        "rarity": 999
      },
      {
        "itemID": 3947,
        "name": "Ancient Plant Seed Seed",
        "rarity": 999
      },
      {
        "itemID": 3948,
        "name": "Amber Block",
        "rarity": 999
      },
      {
        "itemID": 3949,
        "name": "Amber Block Seed",
        "rarity": 999
      },
      {
        "itemID": 3950,
        "name": "T-Rex Skull",
        "rarity": 999
      },
      {
        "itemID": 3951,
        "name": "T-Rex Skull Seed",
        "rarity": 999
      },
      {
        "itemID": 3952,
        "name": "Red Pet Pteranodon",
        "rarity": 999
      },
      {
        "itemID": 3953,
        "name": "Red Pet Pteranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 3954,
        "name": "Red Pet Pterosaurus",
        "rarity": 999
      },
      {
        "itemID": 3955,
        "name": "Red Pet Pterosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3956,
        "name": "Red Pet Pteranus Rex",
        "rarity": 999
      },
      {
        "itemID": 3957,
        "name": "Red Pet Pteranus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 3958,
        "name": "Red Pet Pteratops",
        "rarity": 999
      },
      {
        "itemID": 3959,
        "name": "Red Pet Pteratops Seed",
        "rarity": 999
      },
      {
        "itemID": 3960,
        "name": "Red Pet Apatodon",
        "rarity": 999
      },
      {
        "itemID": 3961,
        "name": "Red Pet Apatodon Seed",
        "rarity": 999
      },
      {
        "itemID": 3962,
        "name": "Red Pet Apatosaurus",
        "rarity": 999
      },
      {
        "itemID": 3963,
        "name": "Red Pet Apatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3964,
        "name": "Red Pet Apatos Rex",
        "rarity": 999
      },
      {
        "itemID": 3965,
        "name": "Red Pet Apatos Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 3966,
        "name": "Red Pet Apatoceratops",
        "rarity": 999
      },
      {
        "itemID": 3967,
        "name": "Red Pet Apatoceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 3968,
        "name": "Red Pet Tyranodon",
        "rarity": 999
      },
      {
        "itemID": 3969,
        "name": "Red Pet Tyranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 3970,
        "name": "Red Pet Tyranopatos",
        "rarity": 999
      },
      {
        "itemID": 3971,
        "name": "Red Pet Tyranopatos Seed",
        "rarity": 999
      },
      {
        "itemID": 3972,
        "name": "Red Pet Tyrannosaurus",
        "rarity": 999
      },
      {
        "itemID": 3973,
        "name": "Red Pet Tyrannosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3974,
        "name": "Red Pet Tyranotops",
        "rarity": 999
      },
      {
        "itemID": 3975,
        "name": "Red Pet Tyranotops Seed",
        "rarity": 999
      },
      {
        "itemID": 3976,
        "name": "Red Pet Triceradon",
        "rarity": 999
      },
      {
        "itemID": 3977,
        "name": "Red Pet Triceradon Seed",
        "rarity": 999
      },
      {
        "itemID": 3978,
        "name": "Red Pet Tripatosaurus",
        "rarity": 999
      },
      {
        "itemID": 3979,
        "name": "Red Pet Tripatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3980,
        "name": "Red Pet Tricerus Rex",
        "rarity": 999
      },
      {
        "itemID": 3981,
        "name": "Red Pet Tricerus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 3982,
        "name": "Red Pet Triceratops",
        "rarity": 999
      },
      {
        "itemID": 3983,
        "name": "Red Pet Triceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 3984,
        "name": "Green Pet Pteranodon",
        "rarity": 999
      },
      {
        "itemID": 3985,
        "name": "Green Pet Pteranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 3986,
        "name": "Green Pet Pterosaurus",
        "rarity": 999
      },
      {
        "itemID": 3987,
        "name": "Green Pet Pterosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3988,
        "name": "Green Pet Pteranus Rex",
        "rarity": 999
      },
      {
        "itemID": 3989,
        "name": "Green Pet Pteranus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 3990,
        "name": "Green Pet Pteratops",
        "rarity": 999
      },
      {
        "itemID": 3991,
        "name": "Green Pet Pteratops Seed",
        "rarity": 999
      },
      {
        "itemID": 3992,
        "name": "Green Pet Apatodon",
        "rarity": 999
      },
      {
        "itemID": 3993,
        "name": "Green Pet Apatodon Seed",
        "rarity": 999
      },
      {
        "itemID": 3994,
        "name": "Green Pet Apatosaurus",
        "rarity": 999
      },
      {
        "itemID": 3995,
        "name": "Green Pet Apatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 3996,
        "name": "Green Pet Apatos Rex",
        "rarity": 999
      },
      {
        "itemID": 3997,
        "name": "Green Pet Apatos Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 3998,
        "name": "Green Pet Apatoceratops",
        "rarity": 999
      },
      {
        "itemID": 3999,
        "name": "Green Pet Apatoceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4000,
        "name": "Green Pet Tyranodon",
        "rarity": 999
      },
      {
        "itemID": 4001,
        "name": "Green Pet Tyranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4002,
        "name": "Green Pet Tyranopatos",
        "rarity": 999
      },
      {
        "itemID": 4003,
        "name": "Green Pet Tyranopatos Seed",
        "rarity": 999
      },
      {
        "itemID": 4004,
        "name": "Green Pet Tyrannosaurus",
        "rarity": 999
      },
      {
        "itemID": 4005,
        "name": "Green Pet Tyrannosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4006,
        "name": "Green Pet Tyranotops",
        "rarity": 999
      },
      {
        "itemID": 4007,
        "name": "Green Pet Tyranotops Seed",
        "rarity": 999
      },
      {
        "itemID": 4008,
        "name": "Green Pet Triceradon",
        "rarity": 999
      },
      {
        "itemID": 4009,
        "name": "Green Pet Triceradon Seed",
        "rarity": 999
      },
      {
        "itemID": 4010,
        "name": "Green Pet Tripatosaurus",
        "rarity": 999
      },
      {
        "itemID": 4011,
        "name": "Green Pet Tripatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4012,
        "name": "Green Pet Tricerus Rex",
        "rarity": 999
      },
      {
        "itemID": 4013,
        "name": "Green Pet Tricerus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4014,
        "name": "Green Pet Triceratops",
        "rarity": 999
      },
      {
        "itemID": 4015,
        "name": "Green Pet Triceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4016,
        "name": "Brown Pet Pteranodon",
        "rarity": 999
      },
      {
        "itemID": 4017,
        "name": "Brown Pet Pteranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4018,
        "name": "Brown Pet Pterosaurus",
        "rarity": 999
      },
      {
        "itemID": 4019,
        "name": "Brown Pet Pterosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4020,
        "name": "Brown Pet Pteranus Rex",
        "rarity": 999
      },
      {
        "itemID": 4021,
        "name": "Brown Pet Pteranus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4022,
        "name": "Brown Pet Pteratops",
        "rarity": 999
      },
      {
        "itemID": 4023,
        "name": "Brown Pet Pteratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4024,
        "name": "Brown Pet Apatodon",
        "rarity": 999
      },
      {
        "itemID": 4025,
        "name": "Brown Pet Apatodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4026,
        "name": "Brown Pet Apatosaurus",
        "rarity": 999
      },
      {
        "itemID": 4027,
        "name": "Brown Pet Apatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4028,
        "name": "Brown Pet Apatos Rex",
        "rarity": 999
      },
      {
        "itemID": 4029,
        "name": "Brown Pet Apatos Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4030,
        "name": "Brown Pet Apatoceratops",
        "rarity": 999
      },
      {
        "itemID": 4031,
        "name": "Brown Pet Apatoceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4032,
        "name": "Brown Pet Tyranodon",
        "rarity": 999
      },
      {
        "itemID": 4033,
        "name": "Brown Pet Tyranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4034,
        "name": "Brown Pet Tyranopatos",
        "rarity": 999
      },
      {
        "itemID": 4035,
        "name": "Brown Pet Tyranopatos Seed",
        "rarity": 999
      },
      {
        "itemID": 4036,
        "name": "Brown Pet Tyrannosaurus",
        "rarity": 999
      },
      {
        "itemID": 4037,
        "name": "Brown Pet Tyrannosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4038,
        "name": "Brown Pet Tyranotops",
        "rarity": 999
      },
      {
        "itemID": 4039,
        "name": "Brown Pet Tyranotops Seed",
        "rarity": 999
      },
      {
        "itemID": 4040,
        "name": "Brown Pet Triceradon",
        "rarity": 999
      },
      {
        "itemID": 4041,
        "name": "Brown Pet Triceradon Seed",
        "rarity": 999
      },
      {
        "itemID": 4042,
        "name": "Brown Pet Tripatosaurus",
        "rarity": 999
      },
      {
        "itemID": 4043,
        "name": "Brown Pet Tripatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4044,
        "name": "Brown Pet Tricerus Rex",
        "rarity": 999
      },
      {
        "itemID": 4045,
        "name": "Brown Pet Tricerus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4046,
        "name": "Brown Pet Triceratops",
        "rarity": 999
      },
      {
        "itemID": 4047,
        "name": "Brown Pet Triceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4048,
        "name": "Grey Pet Pteranodon",
        "rarity": 999
      },
      {
        "itemID": 4049,
        "name": "Grey Pet Pteranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4050,
        "name": "Grey Pet Pterosaurus",
        "rarity": 999
      },
      {
        "itemID": 4051,
        "name": "Grey Pet Pterosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4052,
        "name": "Grey Pet Pteranus Rex",
        "rarity": 999
      },
      {
        "itemID": 4053,
        "name": "Grey Pet Pteranus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4054,
        "name": "Grey Pet Pteratops",
        "rarity": 999
      },
      {
        "itemID": 4055,
        "name": "Grey Pet Pteratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4056,
        "name": "Grey Pet Apatodon",
        "rarity": 999
      },
      {
        "itemID": 4057,
        "name": "Grey Pet Apatodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4058,
        "name": "Grey Pet Apatosaurus",
        "rarity": 999
      },
      {
        "itemID": 4059,
        "name": "Grey Pet Apatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4060,
        "name": "Grey Pet Apatos Rex",
        "rarity": 999
      },
      {
        "itemID": 4061,
        "name": "Grey Pet Apatos Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4062,
        "name": "Grey Pet Apatoceratops",
        "rarity": 999
      },
      {
        "itemID": 4063,
        "name": "Grey Pet Apatoceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4064,
        "name": "Grey Pet Tyranodon",
        "rarity": 999
      },
      {
        "itemID": 4065,
        "name": "Grey Pet Tyranodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4066,
        "name": "Grey Pet Tyranopatos",
        "rarity": 999
      },
      {
        "itemID": 4067,
        "name": "Grey Pet Tyranopatos Seed",
        "rarity": 999
      },
      {
        "itemID": 4068,
        "name": "Grey Pet Tyrannosaurus",
        "rarity": 999
      },
      {
        "itemID": 4069,
        "name": "Grey Pet Tyrannosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4070,
        "name": "Grey Pet Tyranotops",
        "rarity": 999
      },
      {
        "itemID": 4071,
        "name": "Grey Pet Tyranotops Seed",
        "rarity": 999
      },
      {
        "itemID": 4072,
        "name": "Grey Pet Triceradon",
        "rarity": 999
      },
      {
        "itemID": 4073,
        "name": "Grey Pet Triceradon Seed",
        "rarity": 999
      },
      {
        "itemID": 4074,
        "name": "Grey Pet Tripatosaurus",
        "rarity": 999
      },
      {
        "itemID": 4075,
        "name": "Grey Pet Tripatosaurus Seed",
        "rarity": 999
      },
      {
        "itemID": 4076,
        "name": "Grey Pet Tricerus Rex",
        "rarity": 999
      },
      {
        "itemID": 4077,
        "name": "Grey Pet Tricerus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4078,
        "name": "Grey Pet Triceratops",
        "rarity": 999
      },
      {
        "itemID": 4079,
        "name": "Grey Pet Triceratops Seed",
        "rarity": 999
      },
      {
        "itemID": 4080,
        "name": "DNA Processor",
        "rarity": 999
      },
      {
        "itemID": 4081,
        "name": "DNA Processor Seed",
        "rarity": 999
      },
      {
        "itemID": 4082,
        "name": "Dino DNA Strand A-273",
        "rarity": 999
      },
      {
        "itemID": 4083,
        "name": "Dino DNA Strand A-273 Seed",
        "rarity": 999
      },
      {
        "itemID": 4084,
        "name": "Dino DNA Strand C-904",
        "rarity": 999
      },
      {
        "itemID": 4085,
        "name": "Dino DNA Strand C-904 Seed",
        "rarity": 999
      },
      {
        "itemID": 4086,
        "name": "Dino DNA Strand G-137",
        "rarity": 999
      },
      {
        "itemID": 4087,
        "name": "Dino DNA Strand G-137 Seed",
        "rarity": 999
      },
      {
        "itemID": 4088,
        "name": "Dino DNA Strand T-658",
        "rarity": 999
      },
      {
        "itemID": 4089,
        "name": "Dino DNA Strand T-658 Seed",
        "rarity": 999
      },
      {
        "itemID": 4090,
        "name": "Plant DNA Strand X-277",
        "rarity": 999
      },
      {
        "itemID": 4091,
        "name": "Plant DNA Strand X-277 Seed",
        "rarity": 999
      },
      {
        "itemID": 4092,
        "name": "Plant DNA Strand Y-985",
        "rarity": 999
      },
      {
        "itemID": 4093,
        "name": "Plant DNA Strand Y-985 Seed",
        "rarity": 999
      },
      {
        "itemID": 4094,
        "name": "Prehistoric Flowering Fern",
        "rarity": 999
      },
      {
        "itemID": 4095,
        "name": "Prehistoric Flowering Fern Seed",
        "rarity": 999
      },
      {
        "itemID": 4096,
        "name": "Prehistoric Red Fern",
        "rarity": 999
      },
      {
        "itemID": 4097,
        "name": "Prehistoric Red Fern Seed",
        "rarity": 999
      },
      {
        "itemID": 4098,
        "name": "Prehistoric Fern",
        "rarity": 999
      },
      {
        "itemID": 4099,
        "name": "Prehistoric Fern Seed",
        "rarity": 999
      },
      {
        "itemID": 4100,
        "name": "Purple Devourer Plant",
        "rarity": 999
      },
      {
        "itemID": 4101,
        "name": "Purple Devourer Plant Seed",
        "rarity": 999
      },
      {
        "itemID": 4102,
        "name": "Blue Devourer Plant",
        "rarity": 999
      },
      {
        "itemID": 4103,
        "name": "Blue Devourer Plant Seed",
        "rarity": 999
      },
      {
        "itemID": 4104,
        "name": "Prehistoric Vines",
        "rarity": 999
      },
      {
        "itemID": 4105,
        "name": "Prehistoric Vines Seed",
        "rarity": 999
      },
      {
        "itemID": 4106,
        "name": "Prehistoric Candy Vines",
        "rarity": 999
      },
      {
        "itemID": 4107,
        "name": "Prehistoric Candy Vines Seed",
        "rarity": 999
      },
      {
        "itemID": 4108,
        "name": "Seussian Tree",
        "rarity": 999
      },
      {
        "itemID": 4109,
        "name": "Seussian Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 4110,
        "name": "Flowersaurus Rex",
        "rarity": 999
      },
      {
        "itemID": 4111,
        "name": "Flowersaurus Rex Seed",
        "rarity": 999
      },
      {
        "itemID": 4112,
        "name": "Blue Riding Raptor",
        "rarity": 999
      },
      {
        "itemID": 4113,
        "name": "Blue Riding Raptor Seed",
        "rarity": 999
      },
      {
        "itemID": 4114,
        "name": "Brown Riding Raptor",
        "rarity": 999
      },
      {
        "itemID": 4115,
        "name": "Brown Riding Raptor Seed",
        "rarity": 999
      },
      {
        "itemID": 4116,
        "name": "Red Riding Raptor",
        "rarity": 999
      },
      {
        "itemID": 4117,
        "name": "Red Riding Raptor Seed",
        "rarity": 999
      },
      {
        "itemID": 4118,
        "name": "Golden Riding Raptor",
        "rarity": 999
      },
      {
        "itemID": 4119,
        "name": "Golden Riding Raptor Seed",
        "rarity": 999
      },
      {
        "itemID": 4120,
        "name": "Raptor DNA Strand Alpha",
        "rarity": 999
      },
      {
        "itemID": 4121,
        "name": "Raptor DNA Strand Alpha Seed",
        "rarity": 999
      },
      {
        "itemID": 4122,
        "name": "Raptor DNA Strand Omega",
        "rarity": 999
      },
      {
        "itemID": 4123,
        "name": "Raptor DNA Strand Omega Seed",
        "rarity": 999
      },
      {
        "itemID": 4124,
        "name": "DNA Extractor",
        "rarity": 100
      },
      {
        "itemID": 4125,
        "name": "DNA Extractor Seed",
        "rarity": 100
      },
      {
        "itemID": 4126,
        "name": "Stone Spear",
        "rarity": 999
      },
      {
        "itemID": 4127,
        "name": "Stone Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 4128,
        "name": "Blue Hardhat",
        "rarity": 72
      },
      {
        "itemID": 4129,
        "name": "Blue Hardhat Seed",
        "rarity": 72
      },
      {
        "itemID": 4130,
        "name": "Outback Hat",
        "rarity": 999
      },
      {
        "itemID": 4131,
        "name": "Outback Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4132,
        "name": "Fossil Brush",
        "rarity": 91
      },
      {
        "itemID": 4133,
        "name": "Fossil Brush Seed",
        "rarity": 91
      },
      {
        "itemID": 4134,
        "name": "Polished Fossil",
        "rarity": 999
      },
      {
        "itemID": 4135,
        "name": "Polished Fossil Seed",
        "rarity": 999
      },
      {
        "itemID": 4136,
        "name": "Heatbow",
        "rarity": 999
      },
      {
        "itemID": 4137,
        "name": "Heatbow Seed",
        "rarity": 999
      },
      {
        "itemID": 4138,
        "name": "Doompunk Corset",
        "rarity": 999
      },
      {
        "itemID": 4139,
        "name": "Doompunk Corset Seed",
        "rarity": 999
      },
      {
        "itemID": 4140,
        "name": "Doompunk Skirt",
        "rarity": 999
      },
      {
        "itemID": 4141,
        "name": "Doompunk Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 4142,
        "name": "Doompunk Top Hat",
        "rarity": 999
      },
      {
        "itemID": 4143,
        "name": "Doompunk Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4144,
        "name": "Doompunk Waistcoat",
        "rarity": 999
      },
      {
        "itemID": 4145,
        "name": "Doompunk Waistcoat Seed",
        "rarity": 999
      },
      {
        "itemID": 4146,
        "name": "Doompunk Leggings",
        "rarity": 999
      },
      {
        "itemID": 4147,
        "name": "Doompunk Leggings Seed",
        "rarity": 999
      },
      {
        "itemID": 4148,
        "name": "Doompunk Trenchcoat",
        "rarity": 999
      },
      {
        "itemID": 4149,
        "name": "Doompunk Trenchcoat Seed",
        "rarity": 999
      },
      {
        "itemID": 4150,
        "name": "Eye Of Growganoth",
        "rarity": 999
      },
      {
        "itemID": 4151,
        "name": "Eye Of Growganoth Seed",
        "rarity": 999
      },
      {
        "itemID": 4152,
        "name": "Apocalypse Steed",
        "rarity": 999
      },
      {
        "itemID": 4153,
        "name": "Apocalypse Steed Seed",
        "rarity": 999
      },
      {
        "itemID": 4154,
        "name": "Jack o' Lantern Mask",
        "rarity": 70
      },
      {
        "itemID": 4155,
        "name": "Jack o' Lantern Mask Seed",
        "rarity": 70
      },
      {
        "itemID": 4156,
        "name": "Devil Tail",
        "rarity": 66
      },
      {
        "itemID": 4157,
        "name": "Devil Tail Seed",
        "rarity": 66
      },
      {
        "itemID": 4158,
        "name": "Buzzsaw",
        "rarity": 80
      },
      {
        "itemID": 4159,
        "name": "Buzzsaw Seed",
        "rarity": 80
      },
      {
        "itemID": 4160,
        "name": "Rickety Wallpaper",
        "rarity": 20
      },
      {
        "itemID": 4161,
        "name": "Rickety Wallpaper Seed",
        "rarity": 20
      },
      {
        "itemID": 4162,
        "name": "Rickety Window",
        "rarity": 30
      },
      {
        "itemID": 4163,
        "name": "Rickety Window Seed",
        "rarity": 30
      },
      {
        "itemID": 4164,
        "name": "Rickety Door",
        "rarity": 40
      },
      {
        "itemID": 4165,
        "name": "Rickety Door Seed",
        "rarity": 40
      },
      {
        "itemID": 4166,
        "name": "Death's Scythe",
        "rarity": 999
      },
      {
        "itemID": 4167,
        "name": "Death's Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 4168,
        "name": "Demon Chariot",
        "rarity": 999
      },
      {
        "itemID": 4169,
        "name": "Demon Chariot Seed",
        "rarity": 999
      },
      {
        "itemID": 4170,
        "name": "Logarithmic Wheel",
        "rarity": 999
      },
      {
        "itemID": 4171,
        "name": "Logarithmic Wheel Seed",
        "rarity": 999
      },
      {
        "itemID": 4172,
        "name": "Demonic Skull",
        "rarity": 999
      },
      {
        "itemID": 4173,
        "name": "Demonic Skull Seed",
        "rarity": 999
      },
      {
        "itemID": 4174,
        "name": "Death Metal Block",
        "rarity": 999
      },
      {
        "itemID": 4175,
        "name": "Death Metal Block Seed",
        "rarity": 999
      },
      {
        "itemID": 4176,
        "name": "Steel Spike",
        "rarity": 999
      },
      {
        "itemID": 4177,
        "name": "Steel Spike Seed",
        "rarity": 999
      },
      {
        "itemID": 4178,
        "name": "Tempered Steel Spike",
        "rarity": 999
      },
      {
        "itemID": 4179,
        "name": "Tempered Steel Spike Seed",
        "rarity": 999
      },
      {
        "itemID": 4180,
        "name": "Spiked Collar",
        "rarity": 999
      },
      {
        "itemID": 4181,
        "name": "Spiked Collar Seed",
        "rarity": 999
      },
      {
        "itemID": 4182,
        "name": "Malevolent Hair",
        "rarity": 999
      },
      {
        "itemID": 4183,
        "name": "Malevolent Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 4184,
        "name": "Riding Raven",
        "rarity": 999
      },
      {
        "itemID": 4185,
        "name": "Riding Raven Seed",
        "rarity": 999
      },
      {
        "itemID": 4186,
        "name": "Haunted Darkness",
        "rarity": 1
      },
      {
        "itemID": 4187,
        "name": "Haunted Darkness Seed",
        "rarity": 1
      },
      {
        "itemID": 4188,
        "name": "Haunted Window",
        "rarity": 1
      },
      {
        "itemID": 4189,
        "name": "Haunted Window Seed",
        "rarity": 1
      },
      {
        "itemID": 4190,
        "name": "Haunted Door",
        "rarity": 77
      },
      {
        "itemID": 4191,
        "name": "Haunted Door Seed",
        "rarity": 77
      },
      {
        "itemID": 4192,
        "name": "Sheet Music: Spooky",
        "rarity": 999
      },
      {
        "itemID": 4193,
        "name": "Sheet Music: Spooky Seed",
        "rarity": 999
      },
      {
        "itemID": 4194,
        "name": "Stone Pagoda",
        "rarity": 999
      },
      {
        "itemID": 4195,
        "name": "Stone Pagoda Seed",
        "rarity": 999
      },
      {
        "itemID": 4196,
        "name": "Master Peng Stonework",
        "rarity": 999
      },
      {
        "itemID": 4197,
        "name": "Master Peng Stonework Seed",
        "rarity": 999
      },
      {
        "itemID": 4198,
        "name": "Paper Wall",
        "rarity": 999
      },
      {
        "itemID": 4199,
        "name": "Paper Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 4200,
        "name": "Stone Pagoda Roof Element",
        "rarity": 999
      },
      {
        "itemID": 4201,
        "name": "Stone Pagoda Roof Element Seed",
        "rarity": 999
      },
      {
        "itemID": 4202,
        "name": "Decorative Roof Dragon",
        "rarity": 999
      },
      {
        "itemID": 4203,
        "name": "Decorative Roof Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 4204,
        "name": "Grand Jade Platform",
        "rarity": 999
      },
      {
        "itemID": 4205,
        "name": "Grand Jade Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 4206,
        "name": "Stone Pagoda Base",
        "rarity": 999
      },
      {
        "itemID": 4207,
        "name": "Stone Pagoda Base Seed",
        "rarity": 999
      },
      {
        "itemID": 4208,
        "name": "Demonic Horns",
        "rarity": 999
      },
      {
        "itemID": 4209,
        "name": "Demonic Horns Seed",
        "rarity": 999
      },
      {
        "itemID": 4210,
        "name": "Master Peng",
        "rarity": 999
      },
      {
        "itemID": 4211,
        "name": "Master Peng Seed",
        "rarity": 999
      },
      {
        "itemID": 4212,
        "name": "Tourney Token",
        "rarity": 999
      },
      {
        "itemID": 4213,
        "name": "Tourney Token Seed",
        "rarity": 999
      },
      {
        "itemID": 4214,
        "name": "Wooden Pagoda Wall",
        "rarity": 999
      },
      {
        "itemID": 4215,
        "name": "Wooden Pagoda Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 4216,
        "name": "Wooden Pagoda Window",
        "rarity": 999
      },
      {
        "itemID": 4217,
        "name": "Wooden Pagoda Window Seed",
        "rarity": 999
      },
      {
        "itemID": 4218,
        "name": "Wooden Pagoda Door",
        "rarity": 999
      },
      {
        "itemID": 4219,
        "name": "Wooden Pagoda Door Seed",
        "rarity": 999
      },
      {
        "itemID": 4220,
        "name": "Wooden Pagoda Roof",
        "rarity": 999
      },
      {
        "itemID": 4221,
        "name": "Wooden Pagoda Roof Seed",
        "rarity": 999
      },
      {
        "itemID": 4222,
        "name": "Prize Ladder",
        "rarity": 999
      },
      {
        "itemID": 4223,
        "name": "Prize Ladder Seed",
        "rarity": 999
      },
      {
        "itemID": 4224,
        "name": "Tournament Ticket",
        "rarity": 999
      },
      {
        "itemID": 4225,
        "name": "Tournament Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 4226,
        "name": "Punched Tournament Ticket",
        "rarity": 999
      },
      {
        "itemID": 4227,
        "name": "Punched Tournament Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 4228,
        "name": "Snack Fu",
        "rarity": 999
      },
      {
        "itemID": 4229,
        "name": "Snack Fu Seed",
        "rarity": 999
      },
      {
        "itemID": 4230,
        "name": "Ramune",
        "rarity": 999
      },
      {
        "itemID": 4231,
        "name": "Ramune Seed",
        "rarity": 999
      },
      {
        "itemID": 4232,
        "name": "Pow Stones",
        "rarity": 999
      },
      {
        "itemID": 4233,
        "name": "Pow Stones Seed",
        "rarity": 999
      },
      {
        "itemID": 4234,
        "name": "Extractium Ore",
        "rarity": 999
      },
      {
        "itemID": 4235,
        "name": "Extractium Ore Seed",
        "rarity": 999
      },
      {
        "itemID": 4236,
        "name": "Extractium Shard",
        "rarity": 999
      },
      {
        "itemID": 4237,
        "name": "Extractium Shard Seed",
        "rarity": 999
      },
      {
        "itemID": 4238,
        "name": "Tournament Banner",
        "rarity": 999
      },
      {
        "itemID": 4239,
        "name": "Tournament Banner Seed",
        "rarity": 999
      },
      {
        "itemID": 4240,
        "name": "Jade Portcullis",
        "rarity": 999
      },
      {
        "itemID": 4241,
        "name": "Jade Portcullis Seed",
        "rarity": 999
      },
      {
        "itemID": 4242,
        "name": "Weather Machine - Pagoda",
        "rarity": 999
      },
      {
        "itemID": 4243,
        "name": "Weather Machine - Pagoda Seed",
        "rarity": 999
      },
      {
        "itemID": 4244,
        "name": "Non La",
        "rarity": 999
      },
      {
        "itemID": 4245,
        "name": "Non La Seed",
        "rarity": 999
      },
      {
        "itemID": 4246,
        "name": "Minor Otherworldly Bait",
        "rarity": 999
      },
      {
        "itemID": 4247,
        "name": "Minor Otherworldly Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 4248,
        "name": "Lesser Otherworldly Bait",
        "rarity": 999
      },
      {
        "itemID": 4249,
        "name": "Lesser Otherworldly Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 4250,
        "name": "Penguin Mask",
        "rarity": 999
      },
      {
        "itemID": 4251,
        "name": "Penguin Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 4252,
        "name": "Mini-Peng",
        "rarity": 999
      },
      {
        "itemID": 4253,
        "name": "Mini-Peng Seed",
        "rarity": 999
      },
      {
        "itemID": 4254,
        "name": "Pet Fox",
        "rarity": 999
      },
      {
        "itemID": 4255,
        "name": "Pet Fox Seed",
        "rarity": 999
      },
      {
        "itemID": 4256,
        "name": "Popcorn",
        "rarity": 999
      },
      {
        "itemID": 4257,
        "name": "Popcorn Seed",
        "rarity": 999
      },
      {
        "itemID": 4258,
        "name": "Wasabi Peas",
        "rarity": 999
      },
      {
        "itemID": 4259,
        "name": "Wasabi Peas Seed",
        "rarity": 999
      },
      {
        "itemID": 4260,
        "name": "Present Goblin Disguise",
        "rarity": 999
      },
      {
        "itemID": 4261,
        "name": "Present Goblin Disguise Seed",
        "rarity": 999
      },
      {
        "itemID": 4262,
        "name": "Toy Train",
        "rarity": 999
      },
      {
        "itemID": 4263,
        "name": "Toy Train Seed",
        "rarity": 999
      },
      {
        "itemID": 4264,
        "name": "Stuff-4-Toys Box",
        "rarity": 999
      },
      {
        "itemID": 4265,
        "name": "Stuff-4-Toys Box Seed",
        "rarity": 999
      },
      {
        "itemID": 4266,
        "name": "Letter Block - Zerp",
        "rarity": 999
      },
      {
        "itemID": 4267,
        "name": "Letter Block - Zerp Seed",
        "rarity": 999
      },
      {
        "itemID": 4268,
        "name": "Letter Block - Forg",
        "rarity": 999
      },
      {
        "itemID": 4269,
        "name": "Letter Block - Forg Seed",
        "rarity": 999
      },
      {
        "itemID": 4270,
        "name": "Letter Block - Wump",
        "rarity": 999
      },
      {
        "itemID": 4271,
        "name": "Letter Block - Wump Seed",
        "rarity": 999
      },
      {
        "itemID": 4272,
        "name": "Letter Block - Doozle",
        "rarity": 999
      },
      {
        "itemID": 4273,
        "name": "Letter Block - Doozle Seed",
        "rarity": 999
      },
      {
        "itemID": 4274,
        "name": "Hideous Holiday Sweater",
        "rarity": 999
      },
      {
        "itemID": 4275,
        "name": "Hideous Holiday Sweater Seed",
        "rarity": 999
      },
      {
        "itemID": 4276,
        "name": "Winter Turtleneck",
        "rarity": 999
      },
      {
        "itemID": 4277,
        "name": "Winter Turtleneck Seed",
        "rarity": 999
      },
      {
        "itemID": 4278,
        "name": "Yo-Yo",
        "rarity": 999
      },
      {
        "itemID": 4279,
        "name": "Yo-Yo Seed",
        "rarity": 999
      },
      {
        "itemID": 4280,
        "name": "Meh, Bunny Mask",
        "rarity": 999
      },
      {
        "itemID": 4281,
        "name": "Meh, Bunny Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 4282,
        "name": "Meh, Bunny Suit",
        "rarity": 999
      },
      {
        "itemID": 4283,
        "name": "Meh, Bunny Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 4284,
        "name": "Rubber Band Airplane",
        "rarity": 999
      },
      {
        "itemID": 4285,
        "name": "Rubber Band Airplane Seed",
        "rarity": 999
      },
      {
        "itemID": 4286,
        "name": "Stuff-4-Toys Shirt",
        "rarity": 999
      },
      {
        "itemID": 4287,
        "name": "Stuff-4-Toys Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 4288,
        "name": "Present Goblin Home Edition",
        "rarity": 999
      },
      {
        "itemID": 4289,
        "name": "Present Goblin Home Edition Seed",
        "rarity": 999
      },
      {
        "itemID": 4290,
        "name": "Solsascarf",
        "rarity": 999
      },
      {
        "itemID": 4291,
        "name": "Solsascarf Seed",
        "rarity": 999
      },
      {
        "itemID": 4292,
        "name": "Stuff-4-Toys Tote Bag",
        "rarity": 999
      },
      {
        "itemID": 4293,
        "name": "Stuff-4-Toys Tote Bag Seed",
        "rarity": 999
      },
      {
        "itemID": 4294,
        "name": "Betty Bluetooth Doll",
        "rarity": 999
      },
      {
        "itemID": 4295,
        "name": "Betty Bluetooth Doll Seed",
        "rarity": 999
      },
      {
        "itemID": 4296,
        "name": "Surg-E",
        "rarity": 56
      },
      {
        "itemID": 4297,
        "name": "Surg-E Seed",
        "rarity": 56
      },
      {
        "itemID": 4298,
        "name": "Caduceus",
        "rarity": 999
      },
      {
        "itemID": 4299,
        "name": "Caduceus Seed",
        "rarity": 999
      },
      {
        "itemID": 4300,
        "name": "Golden Caduceus",
        "rarity": 999
      },
      {
        "itemID": 4301,
        "name": "Golden Caduceus Seed",
        "rarity": 999
      },
      {
        "itemID": 4302,
        "name": "Golden Dragon Statue",
        "rarity": 999
      },
      {
        "itemID": 4303,
        "name": "Golden Dragon Statue Seed",
        "rarity": 999
      },
      {
        "itemID": 4304,
        "name": "Silver Dragon Statue",
        "rarity": 999
      },
      {
        "itemID": 4305,
        "name": "Silver Dragon Statue Seed",
        "rarity": 999
      },
      {
        "itemID": 4306,
        "name": "Jade Dragon Statue",
        "rarity": 999
      },
      {
        "itemID": 4307,
        "name": "Jade Dragon Statue Seed",
        "rarity": 999
      },
      {
        "itemID": 4308,
        "name": "Surgical Pins",
        "rarity": 83
      },
      {
        "itemID": 4309,
        "name": "Surgical Pins Seed",
        "rarity": 83
      },
      {
        "itemID": 4310,
        "name": "Surgical Transfusion",
        "rarity": 83
      },
      {
        "itemID": 4311,
        "name": "Surgical Transfusion Seed",
        "rarity": 83
      },
      {
        "itemID": 4312,
        "name": "Surgical Defibrillator",
        "rarity": 83
      },
      {
        "itemID": 4313,
        "name": "Surgical Defibrillator Seed",
        "rarity": 83
      },
      {
        "itemID": 4314,
        "name": "Surgical Clamp",
        "rarity": 83
      },
      {
        "itemID": 4315,
        "name": "Surgical Clamp Seed",
        "rarity": 83
      },
      {
        "itemID": 4316,
        "name": "Surgical Ultrasound",
        "rarity": 83
      },
      {
        "itemID": 4317,
        "name": "Surgical Ultrasound Seed",
        "rarity": 83
      },
      {
        "itemID": 4318,
        "name": "Surgical Lab Kit",
        "rarity": 83
      },
      {
        "itemID": 4319,
        "name": "Surgical Lab Kit Seed",
        "rarity": 83
      },
      {
        "itemID": 4320,
        "name": "Empty Surgery Tray",
        "rarity": 999
      },
      {
        "itemID": 4321,
        "name": "Empty Surgery Tray Seed",
        "rarity": 999
      },
      {
        "itemID": 4322,
        "name": "Autoclave",
        "rarity": 999
      },
      {
        "itemID": 4323,
        "name": "Autoclave Seed",
        "rarity": 999
      },
      {
        "itemID": 4324,
        "name": "Biotronic Brain Enhancer",
        "rarity": 999
      },
      {
        "itemID": 4325,
        "name": "Biotronic Brain Enhancer Seed",
        "rarity": 999
      },
      {
        "itemID": 4326,
        "name": "Plague Doctor Mask",
        "rarity": 999
      },
      {
        "itemID": 4327,
        "name": "Plague Doctor Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 4328,
        "name": "Plague Doctor Hat",
        "rarity": 999
      },
      {
        "itemID": 4329,
        "name": "Plague Doctor Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4330,
        "name": "Plague Doctor Robe",
        "rarity": 999
      },
      {
        "itemID": 4331,
        "name": "Plague Doctor Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 4332,
        "name": "Living Dead Remote",
        "rarity": 999
      },
      {
        "itemID": 4333,
        "name": "Living Dead Remote Seed",
        "rarity": 999
      },
      {
        "itemID": 4334,
        "name": "Spare Body Part",
        "rarity": 999
      },
      {
        "itemID": 4335,
        "name": "Spare Body Part Seed",
        "rarity": 999
      },
      {
        "itemID": 4336,
        "name": "Spare Body",
        "rarity": 999
      },
      {
        "itemID": 4337,
        "name": "Spare Body Seed",
        "rarity": 999
      },
      {
        "itemID": 4338,
        "name": "Limb Connector",
        "rarity": 999
      },
      {
        "itemID": 4339,
        "name": "Limb Connector Seed",
        "rarity": 999
      },
      {
        "itemID": 4340,
        "name": "Water Spirit Necklace",
        "rarity": 999
      },
      {
        "itemID": 4341,
        "name": "Water Spirit Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 4342,
        "name": "Massive Fang",
        "rarity": 999
      },
      {
        "itemID": 4343,
        "name": "Massive Fang Seed",
        "rarity": 999
      },
      {
        "itemID": 4344,
        "name": "Howler",
        "rarity": 999
      },
      {
        "itemID": 4345,
        "name": "Howler Seed",
        "rarity": 999
      },
      {
        "itemID": 4346,
        "name": "Fuzzy Pants",
        "rarity": 999
      },
      {
        "itemID": 4347,
        "name": "Fuzzy Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4348,
        "name": "Gemmin' Juice",
        "rarity": 999
      },
      {
        "itemID": 4349,
        "name": "Gemmin' Juice Seed",
        "rarity": 999
      },
      {
        "itemID": 4350,
        "name": "Wolf Skull Shoulders",
        "rarity": 999
      },
      {
        "itemID": 4351,
        "name": "Wolf Skull Shoulders Seed",
        "rarity": 999
      },
      {
        "itemID": 4352,
        "name": "Wolf Gate",
        "rarity": 999
      },
      {
        "itemID": 4353,
        "name": "Wolf Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 4354,
        "name": "Wolf Ticket",
        "rarity": 999
      },
      {
        "itemID": 4355,
        "name": "Wolf Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 4356,
        "name": "Enchanted Wolf Ticket",
        "rarity": 999
      },
      {
        "itemID": 4357,
        "name": "Enchanted Wolf Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 4358,
        "name": "Sales-Man Standee",
        "rarity": 999
      },
      {
        "itemID": 4359,
        "name": "Sales-Man Standee Seed",
        "rarity": 999
      },
      {
        "itemID": 4360,
        "name": "Sales Shades",
        "rarity": 999
      },
      {
        "itemID": 4361,
        "name": "Sales Shades Seed",
        "rarity": 999
      },
      {
        "itemID": 4362,
        "name": "Ghost Wolf Monocle",
        "rarity": 999
      },
      {
        "itemID": 4363,
        "name": "Ghost Wolf Monocle Seed",
        "rarity": 999
      },
      {
        "itemID": 4364,
        "name": "Challenge of Fenrir",
        "rarity": 999
      },
      {
        "itemID": 4365,
        "name": "Challenge of Fenrir Seed",
        "rarity": 999
      },
      {
        "itemID": 4366,
        "name": "Party Screamer",
        "rarity": 999
      },
      {
        "itemID": 4367,
        "name": "Party Screamer Seed",
        "rarity": 999
      },
      {
        "itemID": 4368,
        "name": "Valhowla Treasure",
        "rarity": 999
      },
      {
        "itemID": 4369,
        "name": "Valhowla Treasure Seed",
        "rarity": 999
      },
      {
        "itemID": 4370,
        "name": "Party Popper",
        "rarity": 999
      },
      {
        "itemID": 4371,
        "name": "Party Popper Seed",
        "rarity": 999
      },
      {
        "itemID": 4372,
        "name": "Party Bunting",
        "rarity": 999
      },
      {
        "itemID": 4373,
        "name": "Party Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4374,
        "name": "Party Fowl",
        "rarity": 999
      },
      {
        "itemID": 4375,
        "name": "Party Fowl Seed",
        "rarity": 999
      },
      {
        "itemID": 4376,
        "name": "IIII Block",
        "rarity": 999
      },
      {
        "itemID": 4377,
        "name": "IIII Block Seed",
        "rarity": 999
      },
      {
        "itemID": 4378,
        "name": "Party Cake",
        "rarity": 999
      },
      {
        "itemID": 4379,
        "name": "Party Cake Seed",
        "rarity": 999
      },
      {
        "itemID": 4380,
        "name": "Head Bangin' Steel Wolf",
        "rarity": 999
      },
      {
        "itemID": 4381,
        "name": "Head Bangin' Steel Wolf Seed",
        "rarity": 999
      },
      {
        "itemID": 4382,
        "name": "Pink Bunting",
        "rarity": 999
      },
      {
        "itemID": 4383,
        "name": "Pink Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4384,
        "name": "Blue Bunting",
        "rarity": 999
      },
      {
        "itemID": 4385,
        "name": "Blue Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4386,
        "name": "White Bunting",
        "rarity": 999
      },
      {
        "itemID": 4387,
        "name": "White Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4388,
        "name": "Green Bunting",
        "rarity": 999
      },
      {
        "itemID": 4389,
        "name": "Green Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4390,
        "name": "Yellow Bunting",
        "rarity": 999
      },
      {
        "itemID": 4391,
        "name": "Yellow Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 4392,
        "name": "Red & White Awning",
        "rarity": 999
      },
      {
        "itemID": 4393,
        "name": "Red & White Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 4394,
        "name": "Green & Yellow Awning",
        "rarity": 999
      },
      {
        "itemID": 4395,
        "name": "Green & Yellow Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 4396,
        "name": "Blue Awning",
        "rarity": 999
      },
      {
        "itemID": 4397,
        "name": "Blue Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 4398,
        "name": "Black Awning",
        "rarity": 999
      },
      {
        "itemID": 4399,
        "name": "Black Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 4400,
        "name": "Heart Awning",
        "rarity": 999
      },
      {
        "itemID": 4401,
        "name": "Heart Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 4402,
        "name": "Pink Cat As A Hat",
        "rarity": 999
      },
      {
        "itemID": 4403,
        "name": "Pink Cat As A Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4404,
        "name": "Blue Cat As A Hat",
        "rarity": 999
      },
      {
        "itemID": 4405,
        "name": "Blue Cat As A Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4406,
        "name": "Grey Cat As A Hat",
        "rarity": 999
      },
      {
        "itemID": 4407,
        "name": "Grey Cat As A Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4408,
        "name": "Orange Cat As A Hat",
        "rarity": 999
      },
      {
        "itemID": 4409,
        "name": "Orange Cat As A Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4410,
        "name": "Gruel",
        "rarity": 999
      },
      {
        "itemID": 4411,
        "name": "Gruel Seed",
        "rarity": 999
      },
      {
        "itemID": 4412,
        "name": "Pegasus",
        "rarity": 999
      },
      {
        "itemID": 4413,
        "name": "Pegasus Seed",
        "rarity": 999
      },
      {
        "itemID": 4414,
        "name": "Golden Pegasus",
        "rarity": 999
      },
      {
        "itemID": 4415,
        "name": "Golden Pegasus Seed",
        "rarity": 999
      },
      {
        "itemID": 4416,
        "name": "Heart Glasses",
        "rarity": 999
      },
      {
        "itemID": 4417,
        "name": "Heart Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 4418,
        "name": "Loveseat",
        "rarity": 999
      },
      {
        "itemID": 4419,
        "name": "Loveseat Seed",
        "rarity": 999
      },
      {
        "itemID": 4420,
        "name": "Golden Heart Glasses",
        "rarity": 999
      },
      {
        "itemID": 4421,
        "name": "Golden Heart Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 4422,
        "name": "Chocolate Heart",
        "rarity": 999
      },
      {
        "itemID": 4423,
        "name": "Chocolate Heart Seed",
        "rarity": 999
      },
      {
        "itemID": 4424,
        "name": "Valentine Dress",
        "rarity": 999
      },
      {
        "itemID": 4425,
        "name": "Valentine Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 4426,
        "name": "Ruby Shard",
        "rarity": 999
      },
      {
        "itemID": 4427,
        "name": "Ruby Shard Seed",
        "rarity": 999
      },
      {
        "itemID": 4428,
        "name": "Ruby Lock",
        "rarity": 999
      },
      {
        "itemID": 4429,
        "name": "Ruby Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 4430,
        "name": "Chemsynth Processor",
        "rarity": 999
      },
      {
        "itemID": 4431,
        "name": "Chemsynth Processor Seed",
        "rarity": 999
      },
      {
        "itemID": 4432,
        "name": "Chemsynth Tank",
        "rarity": 68
      },
      {
        "itemID": 4433,
        "name": "Chemsynth Tank Seed",
        "rarity": 68
      },
      {
        "itemID": 4434,
        "name": "Chemsynth Centrifuge",
        "rarity": 158
      },
      {
        "itemID": 4435,
        "name": "Chemsynth Centrifuge Seed",
        "rarity": 158
      },
      {
        "itemID": 4436,
        "name": "Chemsynth Replicator",
        "rarity": 149
      },
      {
        "itemID": 4437,
        "name": "Chemsynth Replicator Seed",
        "rarity": 149
      },
      {
        "itemID": 4438,
        "name": "Chemsynth Catalyst",
        "rarity": 155
      },
      {
        "itemID": 4439,
        "name": "Chemsynth Catalyst Seed",
        "rarity": 155
      },
      {
        "itemID": 4440,
        "name": "Chemsynth Solvent",
        "rarity": 90
      },
      {
        "itemID": 4441,
        "name": "Chemsynth Solvent Seed",
        "rarity": 90
      },
      {
        "itemID": 4442,
        "name": "Chemsynth Stirrer",
        "rarity": 155
      },
      {
        "itemID": 4443,
        "name": "Chemsynth Stirrer Seed",
        "rarity": 155
      },
      {
        "itemID": 4444,
        "name": "Synthetic Chemical",
        "rarity": 100
      },
      {
        "itemID": 4445,
        "name": "Synthetic Chemical Seed",
        "rarity": 100
      },
      {
        "itemID": 4446,
        "name": "Gruesome Marker",
        "rarity": 39
      },
      {
        "itemID": 4447,
        "name": "Gruesome Marker Seed",
        "rarity": 39
      },
      {
        "itemID": 4448,
        "name": "Skeletal Throne",
        "rarity": 30
      },
      {
        "itemID": 4449,
        "name": "Skeletal Throne Seed",
        "rarity": 30
      },
      {
        "itemID": 4450,
        "name": "Zombie Brain",
        "rarity": 999
      },
      {
        "itemID": 4451,
        "name": "Zombie Brain Seed",
        "rarity": 999
      },
      {
        "itemID": 4452,
        "name": "Pile of Zombie Brains",
        "rarity": 999
      },
      {
        "itemID": 4453,
        "name": "Pile of Zombie Brains Seed",
        "rarity": 999
      },
      {
        "itemID": 4454,
        "name": "Mutated Seed Core",
        "rarity": 10
      },
      {
        "itemID": 4455,
        "name": "Mutated Seed",
        "rarity": 10
      },
      {
        "itemID": 4456,
        "name": "Zombie Defense Force Helmet",
        "rarity": 999
      },
      {
        "itemID": 4457,
        "name": "Zombie Defense Force Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 4458,
        "name": "Zombie Defense Force Uniform",
        "rarity": 999
      },
      {
        "itemID": 4459,
        "name": "Zombie Defense Force Uniform Seed",
        "rarity": 999
      },
      {
        "itemID": 4460,
        "name": "Zombie Defense Force Pants",
        "rarity": 999
      },
      {
        "itemID": 4461,
        "name": "Zombie Defense Force Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4462,
        "name": "Camouflage Facepaint",
        "rarity": 999
      },
      {
        "itemID": 4463,
        "name": "Camouflage Facepaint Seed",
        "rarity": 999
      },
      {
        "itemID": 4464,
        "name": "AK-8087",
        "rarity": 999
      },
      {
        "itemID": 4465,
        "name": "AK-8087 Seed",
        "rarity": 999
      },
      {
        "itemID": 4466,
        "name": "Barricaded Door",
        "rarity": 999
      },
      {
        "itemID": 4467,
        "name": "Barricaded Door Seed",
        "rarity": 999
      },
      {
        "itemID": 4468,
        "name": "Infected Door",
        "rarity": 24
      },
      {
        "itemID": 4469,
        "name": "Infected Door Seed",
        "rarity": 24
      },
      {
        "itemID": 4470,
        "name": "Zombie Sign",
        "rarity": 43
      },
      {
        "itemID": 4471,
        "name": "Zombie Sign Seed",
        "rarity": 43
      },
      {
        "itemID": 4472,
        "name": "Retinal Scan Data Repository",
        "rarity": 999
      },
      {
        "itemID": 4473,
        "name": "Retinal Scan Data Repository Seed",
        "rarity": 999
      },
      {
        "itemID": 4474,
        "name": "Skull Launcher",
        "rarity": 97
      },
      {
        "itemID": 4475,
        "name": "Skull Launcher Seed",
        "rarity": 97
      },
      {
        "itemID": 4476,
        "name": "Rainbow Kite",
        "rarity": 999
      },
      {
        "itemID": 4477,
        "name": "Rainbow Kite Seed",
        "rarity": 999
      },
      {
        "itemID": 4478,
        "name": "Zombie Hound",
        "rarity": 999
      },
      {
        "itemID": 4479,
        "name": "Zombie Hound Seed",
        "rarity": 999
      },
      {
        "itemID": 4480,
        "name": "Crazy Zombie Hair",
        "rarity": 96
      },
      {
        "itemID": 4481,
        "name": "Crazy Zombie Hair Seed",
        "rarity": 96
      },
      {
        "itemID": 4482,
        "name": "Objective Marker",
        "rarity": 999
      },
      {
        "itemID": 4483,
        "name": "Objective Marker Seed",
        "rarity": 999
      },
      {
        "itemID": 4484,
        "name": "Infected Block",
        "rarity": 20
      },
      {
        "itemID": 4485,
        "name": "Infected Block Seed",
        "rarity": 20
      },
      {
        "itemID": 4486,
        "name": "Weather Machine - Apocalypse",
        "rarity": 999
      },
      {
        "itemID": 4487,
        "name": "Weather Machine - Apocalypse Seed",
        "rarity": 999
      },
      {
        "itemID": 4488,
        "name": "g-Virus Info Sign",
        "rarity": 67
      },
      {
        "itemID": 4489,
        "name": "g-Virus Info Sign Seed",
        "rarity": 67
      },
      {
        "itemID": 4490,
        "name": "Mutated Cell",
        "rarity": 10
      },
      {
        "itemID": 4491,
        "name": "Mutated Cell Seed",
        "rarity": 10
      },
      {
        "itemID": 4492,
        "name": "Chainlink Fence",
        "rarity": 999
      },
      {
        "itemID": 4493,
        "name": "Chainlink Fence Seed",
        "rarity": 999
      },
      {
        "itemID": 4494,
        "name": "Z.D.F. Fence",
        "rarity": 999
      },
      {
        "itemID": 4495,
        "name": "Z.D.F. Fence Seed",
        "rarity": 999
      },
      {
        "itemID": 4496,
        "name": "Rusted Chainlink Fence",
        "rarity": 30
      },
      {
        "itemID": 4497,
        "name": "Rusted Chainlink Fence Seed",
        "rarity": 30
      },
      {
        "itemID": 4498,
        "name": "Commercial Oven",
        "rarity": 999
      },
      {
        "itemID": 4499,
        "name": "Commercial Oven Seed",
        "rarity": 999
      },
      {
        "itemID": 4500,
        "name": "Chef's Whites",
        "rarity": 999
      },
      {
        "itemID": 4501,
        "name": "Chef's Whites Seed",
        "rarity": 999
      },
      {
        "itemID": 4502,
        "name": "Chef's Cap",
        "rarity": 999
      },
      {
        "itemID": 4503,
        "name": "Chef's Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 4504,
        "name": "Chef's Pants",
        "rarity": 999
      },
      {
        "itemID": 4505,
        "name": "Chef's Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4506,
        "name": "Butcher Knife",
        "rarity": 999
      },
      {
        "itemID": 4507,
        "name": "Butcher Knife Seed",
        "rarity": 999
      },
      {
        "itemID": 4508,
        "name": "Unearthly Synthoid",
        "rarity": 174
      },
      {
        "itemID": 4509,
        "name": "Unearthly Synthoid Seed",
        "rarity": 174
      },
      {
        "itemID": 4510,
        "name": "Radioactive Synthoid",
        "rarity": 999
      },
      {
        "itemID": 4511,
        "name": "Radioactive Synthoid Seed",
        "rarity": 999
      },
      {
        "itemID": 4512,
        "name": "Mysterious Synthoid",
        "rarity": 240
      },
      {
        "itemID": 4513,
        "name": "Mysterious Synthoid Seed",
        "rarity": 240
      },
      {
        "itemID": 4514,
        "name": "Haunted Synthoid",
        "rarity": 999
      },
      {
        "itemID": 4515,
        "name": "Haunted Synthoid Seed",
        "rarity": 999
      },
      {
        "itemID": 4516,
        "name": "Untrade-a-Box",
        "rarity": 249
      },
      {
        "itemID": 4517,
        "name": "Untrade-a-Box Seed",
        "rarity": 249
      },
      {
        "itemID": 4518,
        "name": "Wobbly Dress",
        "rarity": 999
      },
      {
        "itemID": 4519,
        "name": "Wobbly Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 4520,
        "name": "Lucky Portal",
        "rarity": 999
      },
      {
        "itemID": 4521,
        "name": "Lucky Portal Seed",
        "rarity": 999
      },
      {
        "itemID": 4522,
        "name": "Lucky Kitty",
        "rarity": 999
      },
      {
        "itemID": 4523,
        "name": "Lucky Kitty Seed",
        "rarity": 999
      },
      {
        "itemID": 4524,
        "name": "Unlucky Kitty",
        "rarity": 999
      },
      {
        "itemID": 4525,
        "name": "Unlucky Kitty Seed",
        "rarity": 999
      },
      {
        "itemID": 4526,
        "name": "Bamboo",
        "rarity": 999
      },
      {
        "itemID": 4527,
        "name": "Bamboo Seed",
        "rarity": 999
      },
      {
        "itemID": 4528,
        "name": "Ladybug Leaf",
        "rarity": 999
      },
      {
        "itemID": 4529,
        "name": "Ladybug Leaf Seed",
        "rarity": 999
      },
      {
        "itemID": 4530,
        "name": "Cosmic Rain",
        "rarity": 80
      },
      {
        "itemID": 4531,
        "name": "Cosmic Rain Seed",
        "rarity": 80
      },
      {
        "itemID": 4532,
        "name": "Shamrock Hair Pin",
        "rarity": 999
      },
      {
        "itemID": 4533,
        "name": "Shamrock Hair Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 4534,
        "name": "Golden Razor Wings",
        "rarity": 999
      },
      {
        "itemID": 4535,
        "name": "Golden Razor Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 4536,
        "name": "Cosmic Sky Horse",
        "rarity": 999
      },
      {
        "itemID": 4537,
        "name": "Cosmic Sky Horse Seed",
        "rarity": 999
      },
      {
        "itemID": 4538,
        "name": "Bridle Design",
        "rarity": 999
      },
      {
        "itemID": 4539,
        "name": "Bridle Design Seed",
        "rarity": 999
      },
      {
        "itemID": 4540,
        "name": "Star Iron",
        "rarity": 74
      },
      {
        "itemID": 4541,
        "name": "Star Iron Seed",
        "rarity": 74
      },
      {
        "itemID": 4542,
        "name": "Star Iron Ingot",
        "rarity": 999
      },
      {
        "itemID": 4543,
        "name": "Star Iron Ingot Seed",
        "rarity": 999
      },
      {
        "itemID": 4544,
        "name": "Cosmic Bridle",
        "rarity": 999
      },
      {
        "itemID": 4545,
        "name": "Cosmic Bridle Seed",
        "rarity": 999
      },
      {
        "itemID": 4546,
        "name": "Hover Platform",
        "rarity": 15
      },
      {
        "itemID": 4547,
        "name": "Hover Platform Seed",
        "rarity": 15
      },
      {
        "itemID": 4548,
        "name": "Spaceman Pants",
        "rarity": 64
      },
      {
        "itemID": 4549,
        "name": "Spaceman Pants Seed",
        "rarity": 64
      },
      {
        "itemID": 4550,
        "name": "Spaceman Suit",
        "rarity": 73
      },
      {
        "itemID": 4551,
        "name": "Spaceman Suit Seed",
        "rarity": 73
      },
      {
        "itemID": 4552,
        "name": "Synthetic Oculum",
        "rarity": 125
      },
      {
        "itemID": 4553,
        "name": "Synthetic Oculum Seed",
        "rarity": 125
      },
      {
        "itemID": 4554,
        "name": "Cranial Lagomorph",
        "rarity": 999
      },
      {
        "itemID": 4555,
        "name": "Cranial Lagomorph Seed",
        "rarity": 999
      },
      {
        "itemID": 4556,
        "name": "Bunny Slippers",
        "rarity": 999
      },
      {
        "itemID": 4557,
        "name": "Bunny Slippers Seed",
        "rarity": 999
      },
      {
        "itemID": 4558,
        "name": "Cardboard Egg",
        "rarity": 999
      },
      {
        "itemID": 4559,
        "name": "Cardboard Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 4560,
        "name": "Salsa",
        "rarity": 999
      },
      {
        "itemID": 4561,
        "name": "Salsa Seed",
        "rarity": 999
      },
      {
        "itemID": 4562,
        "name": "Flour",
        "rarity": 999
      },
      {
        "itemID": 4563,
        "name": "Flour Seed",
        "rarity": 999
      },
      {
        "itemID": 4564,
        "name": "Lettuce",
        "rarity": 999
      },
      {
        "itemID": 4565,
        "name": "Lettuce Seed",
        "rarity": 999
      },
      {
        "itemID": 4566,
        "name": "Salt Block",
        "rarity": 18
      },
      {
        "itemID": 4567,
        "name": "Salt Block Seed",
        "rarity": 18
      },
      {
        "itemID": 4568,
        "name": "Salt",
        "rarity": 999
      },
      {
        "itemID": 4569,
        "name": "Salt Seed",
        "rarity": 999
      },
      {
        "itemID": 4570,
        "name": "Pepper",
        "rarity": 999
      },
      {
        "itemID": 4571,
        "name": "Pepper Seed",
        "rarity": 999
      },
      {
        "itemID": 4572,
        "name": "Sugar",
        "rarity": 999
      },
      {
        "itemID": 4573,
        "name": "Sugar Seed",
        "rarity": 999
      },
      {
        "itemID": 4574,
        "name": "Disgusting Mess",
        "rarity": 999
      },
      {
        "itemID": 4575,
        "name": "Disgusting Mess Seed",
        "rarity": 999
      },
      {
        "itemID": 4576,
        "name": "Bland Mush",
        "rarity": 999
      },
      {
        "itemID": 4577,
        "name": "Bland Mush Seed",
        "rarity": 999
      },
      {
        "itemID": 4578,
        "name": "Beef",
        "rarity": 999
      },
      {
        "itemID": 4579,
        "name": "Beef Seed",
        "rarity": 999
      },
      {
        "itemID": 4580,
        "name": "Ground Beef",
        "rarity": 999
      },
      {
        "itemID": 4581,
        "name": "Ground Beef Seed",
        "rarity": 999
      },
      {
        "itemID": 4582,
        "name": "Food Grinder",
        "rarity": 999
      },
      {
        "itemID": 4583,
        "name": "Food Grinder Seed",
        "rarity": 999
      },
      {
        "itemID": 4584,
        "name": "Pepper Tree",
        "rarity": 47
      },
      {
        "itemID": 4585,
        "name": "Pepper Tree Seed",
        "rarity": 47
      },
      {
        "itemID": 4586,
        "name": "Bacon",
        "rarity": 999
      },
      {
        "itemID": 4587,
        "name": "Bacon Seed",
        "rarity": 999
      },
      {
        "itemID": 4588,
        "name": "Chicken Meat",
        "rarity": 999
      },
      {
        "itemID": 4589,
        "name": "Chicken Meat Seed",
        "rarity": 999
      },
      {
        "itemID": 4590,
        "name": "Zraei's Dragoscarf",
        "rarity": 999
      },
      {
        "itemID": 4591,
        "name": "Zraei's Dragoscarf Seed",
        "rarity": 999
      },
      {
        "itemID": 4592,
        "name": "Homemade Fish Taco",
        "rarity": 999
      },
      {
        "itemID": 4593,
        "name": "Homemade Fish Taco Seed",
        "rarity": 999
      },
      {
        "itemID": 4594,
        "name": "Apple Strudel",
        "rarity": 999
      },
      {
        "itemID": 4595,
        "name": "Apple Strudel Seed",
        "rarity": 999
      },
      {
        "itemID": 4596,
        "name": "Berry Crepes",
        "rarity": 999
      },
      {
        "itemID": 4597,
        "name": "Berry Crepes Seed",
        "rarity": 999
      },
      {
        "itemID": 4598,
        "name": "BBQ Bacon Burger",
        "rarity": 999
      },
      {
        "itemID": 4599,
        "name": "BBQ Bacon Burger Seed",
        "rarity": 999
      },
      {
        "itemID": 4600,
        "name": "Beer-Battered Fish And Chips",
        "rarity": 999
      },
      {
        "itemID": 4601,
        "name": "Beer-Battered Fish And Chips Seed",
        "rarity": 999
      },
      {
        "itemID": 4602,
        "name": "Onion",
        "rarity": 59
      },
      {
        "itemID": 4603,
        "name": "Onion Seed",
        "rarity": 59
      },
      {
        "itemID": 4604,
        "name": "Arroz Con Pollo",
        "rarity": 999
      },
      {
        "itemID": 4605,
        "name": "Arroz Con Pollo Seed",
        "rarity": 999
      },
      {
        "itemID": 4606,
        "name": "Egg Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 4607,
        "name": "Egg Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 4608,
        "name": "Mini Mallard",
        "rarity": 999
      },
      {
        "itemID": 4609,
        "name": "Mini Mallard Seed",
        "rarity": 999
      },
      {
        "itemID": 4610,
        "name": "Baking Chocolate",
        "rarity": 999
      },
      {
        "itemID": 4611,
        "name": "Baking Chocolate Seed",
        "rarity": 999
      },
      {
        "itemID": 4612,
        "name": "Mac n' Cheese Star",
        "rarity": 999
      },
      {
        "itemID": 4613,
        "name": "Mac n' Cheese Star Seed",
        "rarity": 999
      },
      {
        "itemID": 4614,
        "name": "Plethora Of Mac n' Cheese Stars",
        "rarity": 999
      },
      {
        "itemID": 4615,
        "name": "Plethora Of Mac n' Cheese Stars Seed",
        "rarity": 999
      },
      {
        "itemID": 4616,
        "name": "Mac n' Cheese Star Block",
        "rarity": 999
      },
      {
        "itemID": 4617,
        "name": "Mac n' Cheese Star Block Seed",
        "rarity": 999
      },
      {
        "itemID": 4618,
        "name": "Home Oven",
        "rarity": 88
      },
      {
        "itemID": 4619,
        "name": "Home Oven Seed",
        "rarity": 88
      },
      {
        "itemID": 4620,
        "name": "Master Chef's Oven",
        "rarity": 999
      },
      {
        "itemID": 4621,
        "name": "Master Chef's Oven Seed",
        "rarity": 999
      },
      {
        "itemID": 4622,
        "name": "Chemist's Goggles",
        "rarity": 999
      },
      {
        "itemID": 4623,
        "name": "Chemist's Goggles Seed",
        "rarity": 999
      },
      {
        "itemID": 4624,
        "name": "Marshmallow",
        "rarity": 999
      },
      {
        "itemID": 4625,
        "name": "Marshmallow Seed",
        "rarity": 999
      },
      {
        "itemID": 4626,
        "name": "TXMom's Crown",
        "rarity": 999
      },
      {
        "itemID": 4627,
        "name": "TXMom's Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 4628,
        "name": "Kudo's Carriage",
        "rarity": 999
      },
      {
        "itemID": 4629,
        "name": "Kudo's Carriage Seed",
        "rarity": 999
      },
      {
        "itemID": 4630,
        "name": "Audio Gear",
        "rarity": 90
      },
      {
        "itemID": 4631,
        "name": "Audio Gear Seed",
        "rarity": 90
      },
      {
        "itemID": 4632,
        "name": "Audio Rack",
        "rarity": 87
      },
      {
        "itemID": 4633,
        "name": "Audio Rack Seed",
        "rarity": 87
      },
      {
        "itemID": 4634,
        "name": "Sheet Music: Sax Note",
        "rarity": 15
      },
      {
        "itemID": 4635,
        "name": "Sheet Music: Sax Note Seed",
        "rarity": 15
      },
      {
        "itemID": 4636,
        "name": "Sheet Music: Sharp Sax",
        "rarity": 23
      },
      {
        "itemID": 4637,
        "name": "Sheet Music: Sharp Sax Seed",
        "rarity": 23
      },
      {
        "itemID": 4638,
        "name": "Sheet Music: Flat Sax",
        "rarity": 16
      },
      {
        "itemID": 4639,
        "name": "Sheet Music: Flat Sax Seed",
        "rarity": 16
      },
      {
        "itemID": 4640,
        "name": "Sheet Music: Repeat Begin",
        "rarity": 31
      },
      {
        "itemID": 4641,
        "name": "Sheet Music: Repeat Begin Seed",
        "rarity": 31
      },
      {
        "itemID": 4642,
        "name": "Sheet Music: Repeat End",
        "rarity": 42
      },
      {
        "itemID": 4643,
        "name": "Sheet Music: Repeat End Seed",
        "rarity": 42
      },
      {
        "itemID": 4644,
        "name": "Saxamaphone",
        "rarity": 999
      },
      {
        "itemID": 4645,
        "name": "Saxamaphone Seed",
        "rarity": 999
      },
      {
        "itemID": 4646,
        "name": "Hazmat Boots",
        "rarity": 999
      },
      {
        "itemID": 4647,
        "name": "Hazmat Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 4648,
        "name": "Hazmat Pants",
        "rarity": 999
      },
      {
        "itemID": 4649,
        "name": "Hazmat Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4650,
        "name": "Hazmat Suit",
        "rarity": 999
      },
      {
        "itemID": 4651,
        "name": "Hazmat Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 4652,
        "name": "Hazmat Helmet",
        "rarity": 999
      },
      {
        "itemID": 4653,
        "name": "Hazmat Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 4654,
        "name": "Geiger Charger",
        "rarity": 999
      },
      {
        "itemID": 4655,
        "name": "Geiger Charger Seed",
        "rarity": 999
      },
      {
        "itemID": 4656,
        "name": "Uranium Necklace",
        "rarity": 999
      },
      {
        "itemID": 4657,
        "name": "Uranium Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 4658,
        "name": "Uranium Block",
        "rarity": 1
      },
      {
        "itemID": 4659,
        "name": "Uranium Block Seed",
        "rarity": 1
      },
      {
        "itemID": 4660,
        "name": "Confetti Cannon",
        "rarity": 999
      },
      {
        "itemID": 4661,
        "name": "Confetti Cannon Seed",
        "rarity": 999
      },
      {
        "itemID": 4662,
        "name": "Riding Fiesta Burrito",
        "rarity": 999
      },
      {
        "itemID": 4663,
        "name": "Riding Fiesta Burrito Seed",
        "rarity": 999
      },
      {
        "itemID": 4664,
        "name": "Hotpants",
        "rarity": 999
      },
      {
        "itemID": 4665,
        "name": "Hotpants Seed",
        "rarity": 999
      },
      {
        "itemID": 4666,
        "name": "Lemon",
        "rarity": 51
      },
      {
        "itemID": 4667,
        "name": "Lemon Seed",
        "rarity": 51
      },
      {
        "itemID": 4668,
        "name": "Corn",
        "rarity": 56
      },
      {
        "itemID": 4669,
        "name": "Corn Seed",
        "rarity": 56
      },
      {
        "itemID": 4670,
        "name": "Corn Meal",
        "rarity": 999
      },
      {
        "itemID": 4671,
        "name": "Corn Meal Seed",
        "rarity": 999
      },
      {
        "itemID": 4672,
        "name": "Avocado",
        "rarity": 999
      },
      {
        "itemID": 4673,
        "name": "Avocado Seed",
        "rarity": 999
      },
      {
        "itemID": 4674,
        "name": "Chips And Guacamole",
        "rarity": 999
      },
      {
        "itemID": 4675,
        "name": "Chips And Guacamole Seed",
        "rarity": 999
      },
      {
        "itemID": 4676,
        "name": "Green Geiger V-Neck",
        "rarity": 999
      },
      {
        "itemID": 4677,
        "name": "Green Geiger V-Neck Seed",
        "rarity": 999
      },
      {
        "itemID": 4678,
        "name": "Blue Geiger V-Neck",
        "rarity": 999
      },
      {
        "itemID": 4679,
        "name": "Blue Geiger V-Neck Seed",
        "rarity": 999
      },
      {
        "itemID": 4680,
        "name": "Purple Geiger V-Neck",
        "rarity": 999
      },
      {
        "itemID": 4681,
        "name": "Purple Geiger V-Neck Seed",
        "rarity": 999
      },
      {
        "itemID": 4682,
        "name": "Orange Geiger V-Neck",
        "rarity": 999
      },
      {
        "itemID": 4683,
        "name": "Orange Geiger V-Neck Seed",
        "rarity": 999
      },
      {
        "itemID": 4684,
        "name": "Xenoid Suit",
        "rarity": 999
      },
      {
        "itemID": 4685,
        "name": "Xenoid Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 4686,
        "name": "Xenoid Mask",
        "rarity": 999
      },
      {
        "itemID": 4687,
        "name": "Xenoid Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 4688,
        "name": "Xenoid Claws",
        "rarity": 999
      },
      {
        "itemID": 4689,
        "name": "Xenoid Claws Seed",
        "rarity": 999
      },
      {
        "itemID": 4690,
        "name": "Xenoid Leggings",
        "rarity": 999
      },
      {
        "itemID": 4691,
        "name": "Xenoid Leggings Seed",
        "rarity": 999
      },
      {
        "itemID": 4692,
        "name": "Xenoid Shoes",
        "rarity": 999
      },
      {
        "itemID": 4693,
        "name": "Xenoid Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 4694,
        "name": "Villain Portrait - H.R. Geiger",
        "rarity": 999
      },
      {
        "itemID": 4695,
        "name": "Villain Portrait - H.R. Geiger Seed",
        "rarity": 999
      },
      {
        "itemID": 4696,
        "name": "Superpower - Alien Egg",
        "rarity": 999
      },
      {
        "itemID": 4697,
        "name": "Superpower - Alien Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 4698,
        "name": "Locked Adventure Door",
        "rarity": 73
      },
      {
        "itemID": 4699,
        "name": "Locked Adventure Door Seed",
        "rarity": 73
      },
      {
        "itemID": 4700,
        "name": "Adventure Rope Piton",
        "rarity": 94
      },
      {
        "itemID": 4701,
        "name": "Adventure Rope Piton Seed",
        "rarity": 94
      },
      {
        "itemID": 4702,
        "name": "Ancient Block",
        "rarity": 21
      },
      {
        "itemID": 4703,
        "name": "Ancient Block Seed",
        "rarity": 21
      },
      {
        "itemID": 4704,
        "name": "Adventure Brazier",
        "rarity": 66
      },
      {
        "itemID": 4705,
        "name": "Adventure Brazier Seed",
        "rarity": 66
      },
      {
        "itemID": 4706,
        "name": "Adventure Barrier",
        "rarity": 52
      },
      {
        "itemID": 4707,
        "name": "Adventure Barrier Seed",
        "rarity": 52
      },
      {
        "itemID": 4708,
        "name": "Adventure Pedestal",
        "rarity": 70
      },
      {
        "itemID": 4709,
        "name": "Adventure Pedestal Seed",
        "rarity": 70
      },
      {
        "itemID": 4710,
        "name": "Adventure Idol Gate",
        "rarity": 63
      },
      {
        "itemID": 4711,
        "name": "Adventure Idol Gate Seed",
        "rarity": 63
      },
      {
        "itemID": 4712,
        "name": "Angry Adventure Gorilla",
        "rarity": 76
      },
      {
        "itemID": 4713,
        "name": "Angry Adventure Gorilla Seed",
        "rarity": 76
      },
      {
        "itemID": 4714,
        "name": "Minecart",
        "rarity": 999
      },
      {
        "itemID": 4715,
        "name": "Minecart Seed",
        "rarity": 999
      },
      {
        "itemID": 4716,
        "name": "Adventure Item - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 4717,
        "name": "Adventure Item - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 4718,
        "name": "Mystery Door",
        "rarity": 85
      },
      {
        "itemID": 4719,
        "name": "Mystery Door Seed",
        "rarity": 85
      },
      {
        "itemID": 4720,
        "name": "Adventure Checkpoint",
        "rarity": 45
      },
      {
        "itemID": 4721,
        "name": "Adventure Checkpoint Seed",
        "rarity": 45
      },
      {
        "itemID": 4722,
        "name": "The Adventure Begins",
        "rarity": 67
      },
      {
        "itemID": 4723,
        "name": "The Adventure Begins Seed",
        "rarity": 67
      },
      {
        "itemID": 4724,
        "name": "Mariachi Hat",
        "rarity": 999
      },
      {
        "itemID": 4725,
        "name": "Mariachi Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 4726,
        "name": "Mariachi Suit",
        "rarity": 999
      },
      {
        "itemID": 4727,
        "name": "Mariachi Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 4728,
        "name": "Mariachi Pants",
        "rarity": 999
      },
      {
        "itemID": 4729,
        "name": "Mariachi Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4730,
        "name": "Seductive Rose",
        "rarity": 999
      },
      {
        "itemID": 4731,
        "name": "Seductive Rose Seed",
        "rarity": 999
      },
      {
        "itemID": 4732,
        "name": "Red Brimmed Hat",
        "rarity": 107
      },
      {
        "itemID": 4733,
        "name": "Red Brimmed Hat Seed",
        "rarity": 107
      },
      {
        "itemID": 4734,
        "name": "Red Formal Dress",
        "rarity": 100
      },
      {
        "itemID": 4735,
        "name": "Red Formal Dress Seed",
        "rarity": 100
      },
      {
        "itemID": 4736,
        "name": "Luchador Announcer",
        "rarity": 999
      },
      {
        "itemID": 4737,
        "name": "Luchador Announcer Seed",
        "rarity": 999
      },
      {
        "itemID": 4738,
        "name": "Adventure Item - Crystal Goblet",
        "rarity": 62
      },
      {
        "itemID": 4739,
        "name": "Adventure Item - Crystal Goblet Seed",
        "rarity": 62
      },
      {
        "itemID": 4740,
        "name": "Adventure's End",
        "rarity": 78
      },
      {
        "itemID": 4741,
        "name": "Adventure's End Seed",
        "rarity": 78
      },
      {
        "itemID": 4742,
        "name": "Tomb Robber",
        "rarity": 999
      },
      {
        "itemID": 4743,
        "name": "Tomb Robber Seed",
        "rarity": 999
      },
      {
        "itemID": 4744,
        "name": "Adventure Tomb Gate",
        "rarity": 49
      },
      {
        "itemID": 4745,
        "name": "Adventure Tomb Gate Seed",
        "rarity": 49
      },
      {
        "itemID": 4746,
        "name": "Diamond Horn",
        "rarity": 999
      },
      {
        "itemID": 4747,
        "name": "Diamond Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 4748,
        "name": "Diamond Horns",
        "rarity": 999
      },
      {
        "itemID": 4749,
        "name": "Diamond Horns Seed",
        "rarity": 999
      },
      {
        "itemID": 4750,
        "name": "Diamond Devil Horns",
        "rarity": 999
      },
      {
        "itemID": 4751,
        "name": "Diamond Devil Horns Seed",
        "rarity": 999
      },
      {
        "itemID": 4752,
        "name": "Super Pineapple",
        "rarity": 999
      },
      {
        "itemID": 4753,
        "name": "Super Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 4754,
        "name": "Super Exploding Pineapple",
        "rarity": 999
      },
      {
        "itemID": 4755,
        "name": "Super Exploding Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 4756,
        "name": "Can Of Beans",
        "rarity": 999
      },
      {
        "itemID": 4757,
        "name": "Can Of Beans Seed",
        "rarity": 999
      },
      {
        "itemID": 4758,
        "name": "Mini-Mod",
        "rarity": 999
      },
      {
        "itemID": 4759,
        "name": "Mini-Mod Seed",
        "rarity": 999
      },
      {
        "itemID": 4760,
        "name": "Pet Frog",
        "rarity": 999
      },
      {
        "itemID": 4761,
        "name": "Pet Frog Seed",
        "rarity": 999
      },
      {
        "itemID": 4762,
        "name": "Amethyst Block",
        "rarity": 100
      },
      {
        "itemID": 4763,
        "name": "Amethyst Block Seed",
        "rarity": 100
      },
      {
        "itemID": 4764,
        "name": "Pineapple Slice",
        "rarity": 999
      },
      {
        "itemID": 4765,
        "name": "Pineapple Slice Seed",
        "rarity": 999
      },
      {
        "itemID": 4766,
        "name": "Cherry",
        "rarity": 23
      },
      {
        "itemID": 4767,
        "name": "Cherry Seed",
        "rarity": 23
      },
      {
        "itemID": 4768,
        "name": "Pineapple Turnover",
        "rarity": 999
      },
      {
        "itemID": 4769,
        "name": "Pineapple Turnover Seed",
        "rarity": 999
      },
      {
        "itemID": 4770,
        "name": "Pineapple Finger Ring",
        "rarity": 999
      },
      {
        "itemID": 4771,
        "name": "Pineapple Finger Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 4772,
        "name": "Pineapple Glasses",
        "rarity": 999
      },
      {
        "itemID": 4773,
        "name": "Pineapple Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 4774,
        "name": "Jungle Blast",
        "rarity": 999
      },
      {
        "itemID": 4775,
        "name": "Jungle Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 4776,
        "name": "Weather Machine - Jungle",
        "rarity": 999
      },
      {
        "itemID": 4777,
        "name": "Weather Machine - Jungle Seed",
        "rarity": 999
      },
      {
        "itemID": 4778,
        "name": "Adventurer's Whip",
        "rarity": 999
      },
      {
        "itemID": 4779,
        "name": "Adventurer's Whip Seed",
        "rarity": 999
      },
      {
        "itemID": 4780,
        "name": "Adventurer's Sling Bag",
        "rarity": 999
      },
      {
        "itemID": 4781,
        "name": "Adventurer's Sling Bag Seed",
        "rarity": 999
      },
      {
        "itemID": 4782,
        "name": "Jungle Fern",
        "rarity": 40
      },
      {
        "itemID": 4783,
        "name": "Jungle Fern Seed",
        "rarity": 40
      },
      {
        "itemID": 4784,
        "name": "Statue Block",
        "rarity": 36
      },
      {
        "itemID": 4785,
        "name": "Statue Block Seed",
        "rarity": 36
      },
      {
        "itemID": 4786,
        "name": "Statue Eye",
        "rarity": 36
      },
      {
        "itemID": 4787,
        "name": "Statue Eye Seed",
        "rarity": 36
      },
      {
        "itemID": 4788,
        "name": "Statue Headdress",
        "rarity": 36
      },
      {
        "itemID": 4789,
        "name": "Statue Headdress Seed",
        "rarity": 36
      },
      {
        "itemID": 4790,
        "name": "Statue Nose",
        "rarity": 36
      },
      {
        "itemID": 4791,
        "name": "Statue Nose Seed",
        "rarity": 36
      },
      {
        "itemID": 4792,
        "name": "Statue Mouth",
        "rarity": 78
      },
      {
        "itemID": 4793,
        "name": "Statue Mouth Seed",
        "rarity": 78
      },
      {
        "itemID": 4794,
        "name": "Rubble",
        "rarity": 21
      },
      {
        "itemID": 4795,
        "name": "Rubble Seed",
        "rarity": 21
      },
      {
        "itemID": 4796,
        "name": "Jungle Pillar",
        "rarity": 84
      },
      {
        "itemID": 4797,
        "name": "Jungle Pillar Seed",
        "rarity": 84
      },
      {
        "itemID": 4798,
        "name": "Overgrown Vines",
        "rarity": 42
      },
      {
        "itemID": 4799,
        "name": "Overgrown Vines Seed",
        "rarity": 42
      },
      {
        "itemID": 4800,
        "name": "Hanging Snake",
        "rarity": 83
      },
      {
        "itemID": 4801,
        "name": "Hanging Snake Seed",
        "rarity": 83
      },
      {
        "itemID": 4802,
        "name": "Royal Lock",
        "rarity": 999
      },
      {
        "itemID": 4803,
        "name": "Royal Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 4804,
        "name": "Silk Bolt - Floral",
        "rarity": 999
      },
      {
        "itemID": 4805,
        "name": "Silk Bolt - Floral Seed",
        "rarity": 999
      },
      {
        "itemID": 4806,
        "name": "Hula Skirt",
        "rarity": 999
      },
      {
        "itemID": 4807,
        "name": "Hula Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 4808,
        "name": "Floral Bikini Top",
        "rarity": 999
      },
      {
        "itemID": 4809,
        "name": "Floral Bikini Top Seed",
        "rarity": 999
      },
      {
        "itemID": 4810,
        "name": "Floral Lei",
        "rarity": 999
      },
      {
        "itemID": 4811,
        "name": "Floral Lei Seed",
        "rarity": 999
      },
      {
        "itemID": 4812,
        "name": "Zinc",
        "rarity": 999
      },
      {
        "itemID": 4813,
        "name": "Zinc Seed",
        "rarity": 999
      },
      {
        "itemID": 4814,
        "name": "Frangipani",
        "rarity": 999
      },
      {
        "itemID": 4815,
        "name": "Frangipani Seed",
        "rarity": 999
      },
      {
        "itemID": 4816,
        "name": "Short Surfer Hair",
        "rarity": 999
      },
      {
        "itemID": 4817,
        "name": "Short Surfer Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 4818,
        "name": "Long Surfer Hair",
        "rarity": 999
      },
      {
        "itemID": 4819,
        "name": "Long Surfer Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 4820,
        "name": "Phoenix Crown",
        "rarity": 999
      },
      {
        "itemID": 4821,
        "name": "Phoenix Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 4822,
        "name": "Surfboard",
        "rarity": 999
      },
      {
        "itemID": 4823,
        "name": "Surfboard Seed",
        "rarity": 999
      },
      {
        "itemID": 4824,
        "name": "Surfboard - Flame",
        "rarity": 999
      },
      {
        "itemID": 4825,
        "name": "Surfboard - Flame Seed",
        "rarity": 999
      },
      {
        "itemID": 4826,
        "name": "Surfboard - Wave",
        "rarity": 999
      },
      {
        "itemID": 4827,
        "name": "Surfboard - Wave Seed",
        "rarity": 999
      },
      {
        "itemID": 4828,
        "name": "Surfboard - Electric Green",
        "rarity": 999
      },
      {
        "itemID": 4829,
        "name": "Surfboard - Electric Green Seed",
        "rarity": 999
      },
      {
        "itemID": 4830,
        "name": "Balloon-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 4831,
        "name": "Balloon-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 4832,
        "name": "Destroyed Balloon-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 4833,
        "name": "Destroyed Balloon-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 4834,
        "name": "Team Entrance - Punch",
        "rarity": 999
      },
      {
        "itemID": 4835,
        "name": "Team Entrance - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4836,
        "name": "Team Entrance - Grow",
        "rarity": 999
      },
      {
        "itemID": 4837,
        "name": "Team Entrance - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4838,
        "name": "Team Entrance - Build",
        "rarity": 999
      },
      {
        "itemID": 4839,
        "name": "Team Entrance - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4840,
        "name": "Balloon Launcher",
        "rarity": 999
      },
      {
        "itemID": 4841,
        "name": "Balloon Launcher Seed",
        "rarity": 999
      },
      {
        "itemID": 4842,
        "name": "Balloon Repellent",
        "rarity": 999
      },
      {
        "itemID": 4843,
        "name": "Balloon Repellent Seed",
        "rarity": 999
      },
      {
        "itemID": 4844,
        "name": "Small War Balloon",
        "rarity": 999
      },
      {
        "itemID": 4845,
        "name": "Small War Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4846,
        "name": "Medium War Balloon",
        "rarity": 999
      },
      {
        "itemID": 4847,
        "name": "Medium War Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4848,
        "name": "Large War Balloon",
        "rarity": 999
      },
      {
        "itemID": 4849,
        "name": "Large War Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4850,
        "name": "Bucket of Small War Balloons",
        "rarity": 999
      },
      {
        "itemID": 4851,
        "name": "Bucket of Small War Balloons Seed",
        "rarity": 999
      },
      {
        "itemID": 4852,
        "name": "Bucket of Medium War Balloons",
        "rarity": 999
      },
      {
        "itemID": 4853,
        "name": "Bucket of Medium War Balloons Seed",
        "rarity": 999
      },
      {
        "itemID": 4854,
        "name": "Bucket of Large War Balloons",
        "rarity": 999
      },
      {
        "itemID": 4855,
        "name": "Bucket of Large War Balloons Seed",
        "rarity": 999
      },
      {
        "itemID": 4856,
        "name": "Balloon Warz Leaderboard",
        "rarity": 999
      },
      {
        "itemID": 4857,
        "name": "Balloon Warz Leaderboard Seed",
        "rarity": 999
      },
      {
        "itemID": 4858,
        "name": "Balloon Filling Station",
        "rarity": 999
      },
      {
        "itemID": 4859,
        "name": "Balloon Filling Station Seed",
        "rarity": 999
      },
      {
        "itemID": 4860,
        "name": "Team Shorts - Punch",
        "rarity": 999
      },
      {
        "itemID": 4861,
        "name": "Team Shorts - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4862,
        "name": "Team Shorts - Grow",
        "rarity": 999
      },
      {
        "itemID": 4863,
        "name": "Team Shorts - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4864,
        "name": "Team Shorts - Build",
        "rarity": 999
      },
      {
        "itemID": 4865,
        "name": "Team Shorts - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4866,
        "name": "Team Shirt - Punch",
        "rarity": 999
      },
      {
        "itemID": 4867,
        "name": "Team Shirt - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4868,
        "name": "Team Shirt - Grow",
        "rarity": 999
      },
      {
        "itemID": 4869,
        "name": "Team Shirt - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4870,
        "name": "Team Shirt - Build",
        "rarity": 999
      },
      {
        "itemID": 4871,
        "name": "Team Shirt - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4872,
        "name": "Team Pennant - Punch",
        "rarity": 999
      },
      {
        "itemID": 4873,
        "name": "Team Pennant - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4874,
        "name": "Team Pennant - Grow",
        "rarity": 999
      },
      {
        "itemID": 4875,
        "name": "Team Pennant - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4876,
        "name": "Team Pennant - Build",
        "rarity": 999
      },
      {
        "itemID": 4877,
        "name": "Team Pennant - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4878,
        "name": "Bouncy Balloon",
        "rarity": 999
      },
      {
        "itemID": 4879,
        "name": "Bouncy Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4880,
        "name": "Super Squirt Gun Jetpack",
        "rarity": 999
      },
      {
        "itemID": 4881,
        "name": "Super Squirt Gun Jetpack Seed",
        "rarity": 999
      },
      {
        "itemID": 4882,
        "name": "Towel Rack Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 4883,
        "name": "Towel Rack Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 4884,
        "name": "Balloon Jammer",
        "rarity": 999
      },
      {
        "itemID": 4885,
        "name": "Balloon Jammer Seed",
        "rarity": 999
      },
      {
        "itemID": 4886,
        "name": "Team Bunting - Punch",
        "rarity": 999
      },
      {
        "itemID": 4887,
        "name": "Team Bunting - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4888,
        "name": "Team Bunting - Grow",
        "rarity": 999
      },
      {
        "itemID": 4889,
        "name": "Team Bunting - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4890,
        "name": "Team Bunting - Build",
        "rarity": 999
      },
      {
        "itemID": 4891,
        "name": "Team Bunting - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4892,
        "name": "Weather Machine - Balloon Warz",
        "rarity": 999
      },
      {
        "itemID": 4893,
        "name": "Weather Machine - Balloon Warz Seed",
        "rarity": 999
      },
      {
        "itemID": 4894,
        "name": "Balloon Fragment",
        "rarity": 999
      },
      {
        "itemID": 4895,
        "name": "Balloon Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 4896,
        "name": "Balloon Warz Gold Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 4897,
        "name": "Balloon Warz Gold Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4898,
        "name": "Balloon Warz Silver Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 4899,
        "name": "Balloon Warz Silver Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4900,
        "name": "Balloon Warz Bronze Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 4901,
        "name": "Balloon Warz Bronze Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4902,
        "name": "Balloon Warz Gold Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 4903,
        "name": "Balloon Warz Gold Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4904,
        "name": "Balloon Warz Silver Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 4905,
        "name": "Balloon Warz Silver Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4906,
        "name": "Balloon Warz Bronze Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 4907,
        "name": "Balloon Warz Bronze Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4908,
        "name": "Balloon Warz Gold Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 4909,
        "name": "Balloon Warz Gold Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4910,
        "name": "Balloon Warz Silver Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 4911,
        "name": "Balloon Warz Silver Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4912,
        "name": "Balloon Warz Bronze Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 4913,
        "name": "Balloon Warz Bronze Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4914,
        "name": "Balloon Warz MVP Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 4915,
        "name": "Balloon Warz MVP Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4916,
        "name": "Balloon Warz MVP Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 4917,
        "name": "Balloon Warz MVP Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4918,
        "name": "Balloon Warz MVP Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 4919,
        "name": "Balloon Warz MVP Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4920,
        "name": "Balloon Throwing Stand",
        "rarity": 999
      },
      {
        "itemID": 4921,
        "name": "Balloon Throwing Stand Seed",
        "rarity": 999
      },
      {
        "itemID": 4922,
        "name": "Target",
        "rarity": 999
      },
      {
        "itemID": 4923,
        "name": "Target Seed",
        "rarity": 999
      },
      {
        "itemID": 4924,
        "name": "Team Headband - Punch",
        "rarity": 999
      },
      {
        "itemID": 4925,
        "name": "Team Headband - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 4926,
        "name": "Team Headband - Grow",
        "rarity": 999
      },
      {
        "itemID": 4927,
        "name": "Team Headband - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 4928,
        "name": "Team Headband - Build",
        "rarity": 999
      },
      {
        "itemID": 4929,
        "name": "Team Headband - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 4930,
        "name": "Red Facepaint",
        "rarity": 999
      },
      {
        "itemID": 4931,
        "name": "Red Facepaint Seed",
        "rarity": 999
      },
      {
        "itemID": 4932,
        "name": "Green Facepaint",
        "rarity": 999
      },
      {
        "itemID": 4933,
        "name": "Green Facepaint Seed",
        "rarity": 999
      },
      {
        "itemID": 4934,
        "name": "Blue Facepaint",
        "rarity": 999
      },
      {
        "itemID": 4935,
        "name": "Blue Facepaint Seed",
        "rarity": 999
      },
      {
        "itemID": 4936,
        "name": "Red Floaty Balloon",
        "rarity": 999
      },
      {
        "itemID": 4937,
        "name": "Red Floaty Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4938,
        "name": "Green Floaty Balloon",
        "rarity": 999
      },
      {
        "itemID": 4939,
        "name": "Green Floaty Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4940,
        "name": "Blue Floaty Balloon",
        "rarity": 999
      },
      {
        "itemID": 4941,
        "name": "Blue Floaty Balloon Seed",
        "rarity": 999
      },
      {
        "itemID": 4942,
        "name": "Dark Green Wallpaper",
        "rarity": 54
      },
      {
        "itemID": 4943,
        "name": "Dark Green Wallpaper Seed",
        "rarity": 54
      },
      {
        "itemID": 4944,
        "name": "Dark Blue Wallpaper",
        "rarity": 64
      },
      {
        "itemID": 4945,
        "name": "Dark Blue Wallpaper Seed",
        "rarity": 64
      },
      {
        "itemID": 4946,
        "name": "Super Squirt Gun Jetpack Pants",
        "rarity": 999
      },
      {
        "itemID": 4947,
        "name": "Super Squirt Gun Jetpack Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 4948,
        "name": "Solar Chariot",
        "rarity": 999
      },
      {
        "itemID": 4949,
        "name": "Solar Chariot Seed",
        "rarity": 999
      },
      {
        "itemID": 4950,
        "name": "Silk Corset",
        "rarity": 999
      },
      {
        "itemID": 4951,
        "name": "Silk Corset Seed",
        "rarity": 999
      },
      {
        "itemID": 4952,
        "name": "Gothic Corset",
        "rarity": 999
      },
      {
        "itemID": 4953,
        "name": "Gothic Corset Seed",
        "rarity": 999
      },
      {
        "itemID": 4954,
        "name": "Unicorn Hair",
        "rarity": 45
      },
      {
        "itemID": 4955,
        "name": "Unicorn Hair Seed",
        "rarity": 45
      },
      {
        "itemID": 4956,
        "name": "Emerald Pickaxe",
        "rarity": 999
      },
      {
        "itemID": 4957,
        "name": "Emerald Pickaxe Seed",
        "rarity": 999
      },
      {
        "itemID": 4958,
        "name": "Sand Shark",
        "rarity": 999
      },
      {
        "itemID": 4959,
        "name": "Sand Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 4960,
        "name": "Megalodon",
        "rarity": 999
      },
      {
        "itemID": 4961,
        "name": "Megalodon Seed",
        "rarity": 999
      },
      {
        "itemID": 4962,
        "name": "Beanbag",
        "rarity": 55
      },
      {
        "itemID": 4963,
        "name": "Beanbag Seed",
        "rarity": 55
      },
      {
        "itemID": 4964,
        "name": "Black Espadrille",
        "rarity": 44
      },
      {
        "itemID": 4965,
        "name": "Black Espadrille Seed",
        "rarity": 44
      },
      {
        "itemID": 4966,
        "name": "Checkered Espadrille",
        "rarity": 15
      },
      {
        "itemID": 4967,
        "name": "Checkered Espadrille Seed",
        "rarity": 15
      },
      {
        "itemID": 4968,
        "name": "Sports Bra",
        "rarity": 42
      },
      {
        "itemID": 4969,
        "name": "Sports Bra Seed",
        "rarity": 42
      },
      {
        "itemID": 4970,
        "name": "Pink Aura",
        "rarity": 999
      },
      {
        "itemID": 4971,
        "name": "Pink Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 4972,
        "name": "Blue Aura",
        "rarity": 999
      },
      {
        "itemID": 4973,
        "name": "Blue Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 4974,
        "name": "Wedding Headdress",
        "rarity": 57
      },
      {
        "itemID": 4975,
        "name": "Wedding Headdress Seed",
        "rarity": 57
      },
      {
        "itemID": 4976,
        "name": "Sarong",
        "rarity": 98
      },
      {
        "itemID": 4977,
        "name": "Sarong Seed",
        "rarity": 98
      },
      {
        "itemID": 4978,
        "name": "Dress with Smock",
        "rarity": 64
      },
      {
        "itemID": 4979,
        "name": "Dress with Smock Seed",
        "rarity": 64
      },
      {
        "itemID": 4980,
        "name": "Waistcoat and Jacket",
        "rarity": 84
      },
      {
        "itemID": 4981,
        "name": "Waistcoat and Jacket Seed",
        "rarity": 84
      },
      {
        "itemID": 4982,
        "name": "Orange",
        "rarity": 15
      },
      {
        "itemID": 4983,
        "name": "Orange Seed",
        "rarity": 15
      },
      {
        "itemID": 4984,
        "name": "Orange Juice",
        "rarity": 999
      },
      {
        "itemID": 4985,
        "name": "Orange Juice Seed",
        "rarity": 999
      },
      {
        "itemID": 4986,
        "name": "Inside-Out Devil Wings",
        "rarity": 999
      },
      {
        "itemID": 4987,
        "name": "Inside-Out Devil Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 4988,
        "name": "Speed Medallion",
        "rarity": 999
      },
      {
        "itemID": 4989,
        "name": "Speed Medallion Seed",
        "rarity": 999
      },
      {
        "itemID": 4990,
        "name": "Skateboard",
        "rarity": 999
      },
      {
        "itemID": 4991,
        "name": "Skateboard Seed",
        "rarity": 999
      },
      {
        "itemID": 4992,
        "name": "Antigravity Generator",
        "rarity": 999
      },
      {
        "itemID": 4993,
        "name": "Antigravity Generator Seed",
        "rarity": 999
      },
      {
        "itemID": 4994,
        "name": "Builder's Lock",
        "rarity": 999
      },
      {
        "itemID": 4995,
        "name": "Builder's Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 4996,
        "name": "Burning Hands",
        "rarity": 999
      },
      {
        "itemID": 4997,
        "name": "Burning Hands Seed",
        "rarity": 999
      },
      {
        "itemID": 4998,
        "name": "Riding Turtle",
        "rarity": 999
      },
      {
        "itemID": 4999,
        "name": "Riding Turtle Seed",
        "rarity": 999
      },
      {
        "itemID": 5000,
        "name": "Weather Machine - Background",
        "rarity": 999
      },
      {
        "itemID": 5001,
        "name": "Weather Machine - Background Seed",
        "rarity": 999
      },
      {
        "itemID": 5002,
        "name": "Playful Fire Sprite",
        "rarity": 999
      },
      {
        "itemID": 5003,
        "name": "Playful Fire Sprite Seed",
        "rarity": 999
      },
      {
        "itemID": 5004,
        "name": "Playful Wind Sprite",
        "rarity": 999
      },
      {
        "itemID": 5005,
        "name": "Playful Wind Sprite Seed",
        "rarity": 999
      },
      {
        "itemID": 5006,
        "name": "Playful Wood Sprite",
        "rarity": 999
      },
      {
        "itemID": 5007,
        "name": "Playful Wood Sprite Seed",
        "rarity": 999
      },
      {
        "itemID": 5008,
        "name": "Playful Water Sprite",
        "rarity": 999
      },
      {
        "itemID": 5009,
        "name": "Playful Water Sprite Seed",
        "rarity": 999
      },
      {
        "itemID": 5010,
        "name": "Plate Greaves",
        "rarity": 999
      },
      {
        "itemID": 5011,
        "name": "Plate Greaves Seed",
        "rarity": 999
      },
      {
        "itemID": 5012,
        "name": "Flaming Horsie",
        "rarity": 999
      },
      {
        "itemID": 5013,
        "name": "Flaming Horsie Seed",
        "rarity": 999
      },
      {
        "itemID": 5014,
        "name": "Flaming Horse Chunk",
        "rarity": 999
      },
      {
        "itemID": 5015,
        "name": "Flaming Horse Chunk Seed",
        "rarity": 999
      },
      {
        "itemID": 5016,
        "name": "Newspaper",
        "rarity": 58
      },
      {
        "itemID": 5017,
        "name": "Newspaper Seed",
        "rarity": 58
      },
      {
        "itemID": 5018,
        "name": "Riding Chicken",
        "rarity": 999
      },
      {
        "itemID": 5019,
        "name": "Riding Chicken Seed",
        "rarity": 999
      },
      {
        "itemID": 5020,
        "name": "Prismatic Aura",
        "rarity": 999
      },
      {
        "itemID": 5021,
        "name": "Prismatic Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 5022,
        "name": "Chicken Plow",
        "rarity": 999
      },
      {
        "itemID": 5023,
        "name": "Chicken Plow Seed",
        "rarity": 999
      },
      {
        "itemID": 5024,
        "name": "Fire Essence",
        "rarity": 999
      },
      {
        "itemID": 5025,
        "name": "Fire Essence Seed",
        "rarity": 999
      },
      {
        "itemID": 5026,
        "name": "Water Essence",
        "rarity": 999
      },
      {
        "itemID": 5027,
        "name": "Water Essence Seed",
        "rarity": 999
      },
      {
        "itemID": 5028,
        "name": "Earth Essence",
        "rarity": 999
      },
      {
        "itemID": 5029,
        "name": "Earth Essence Seed",
        "rarity": 999
      },
      {
        "itemID": 5030,
        "name": "Wind Essence",
        "rarity": 999
      },
      {
        "itemID": 5031,
        "name": "Wind Essence Seed",
        "rarity": 999
      },
      {
        "itemID": 5032,
        "name": "Fissure",
        "rarity": 15
      },
      {
        "itemID": 5033,
        "name": "Fissure Seed",
        "rarity": 15
      },
      {
        "itemID": 5034,
        "name": "Waterfall",
        "rarity": 15
      },
      {
        "itemID": 5035,
        "name": "Waterfall Seed",
        "rarity": 15
      },
      {
        "itemID": 5036,
        "name": "Hidden Door",
        "rarity": 15
      },
      {
        "itemID": 5037,
        "name": "Hidden Door Seed",
        "rarity": 15
      },
      {
        "itemID": 5038,
        "name": "Anemone",
        "rarity": 15
      },
      {
        "itemID": 5039,
        "name": "Anemone Seed",
        "rarity": 15
      },
      {
        "itemID": 5040,
        "name": "Aurora",
        "rarity": 15
      },
      {
        "itemID": 5041,
        "name": "Aurora Seed",
        "rarity": 15
      },
      {
        "itemID": 5042,
        "name": "Obsidian",
        "rarity": 15
      },
      {
        "itemID": 5043,
        "name": "Obsidian Seed",
        "rarity": 15
      },
      {
        "itemID": 5044,
        "name": "Lava Lamp",
        "rarity": 15
      },
      {
        "itemID": 5045,
        "name": "Lava Lamp Seed",
        "rarity": 15
      },
      {
        "itemID": 5046,
        "name": "Fire Asteroid",
        "rarity": 999
      },
      {
        "itemID": 5047,
        "name": "Fire Asteroid Seed",
        "rarity": 999
      },
      {
        "itemID": 5048,
        "name": "Water Asteroid",
        "rarity": 999
      },
      {
        "itemID": 5049,
        "name": "Water Asteroid Seed",
        "rarity": 999
      },
      {
        "itemID": 5050,
        "name": "Earth Asteroid",
        "rarity": 999
      },
      {
        "itemID": 5051,
        "name": "Earth Asteroid Seed",
        "rarity": 999
      },
      {
        "itemID": 5052,
        "name": "Wind Asteroid",
        "rarity": 999
      },
      {
        "itemID": 5053,
        "name": "Wind Asteroid Seed",
        "rarity": 999
      },
      {
        "itemID": 5054,
        "name": "Inferno Gate",
        "rarity": 999
      },
      {
        "itemID": 5055,
        "name": "Inferno Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 5056,
        "name": "Tidal Gate",
        "rarity": 999
      },
      {
        "itemID": 5057,
        "name": "Tidal Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 5058,
        "name": "Typhoon Gate",
        "rarity": 999
      },
      {
        "itemID": 5059,
        "name": "Typhoon Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 5060,
        "name": "Verdant Gate",
        "rarity": 999
      },
      {
        "itemID": 5061,
        "name": "Verdant Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 5062,
        "name": "Ancient Hinge",
        "rarity": 999
      },
      {
        "itemID": 5063,
        "name": "Ancient Hinge Seed",
        "rarity": 999
      },
      {
        "itemID": 5064,
        "name": "Ancient Pin",
        "rarity": 999
      },
      {
        "itemID": 5065,
        "name": "Ancient Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 5066,
        "name": "Ancient Bracket",
        "rarity": 999
      },
      {
        "itemID": 5067,
        "name": "Ancient Bracket Seed",
        "rarity": 999
      },
      {
        "itemID": 5068,
        "name": "Ancient Lens",
        "rarity": 999
      },
      {
        "itemID": 5069,
        "name": "Ancient Lens Seed",
        "rarity": 999
      },
      {
        "itemID": 5070,
        "name": "Crystallized Reality",
        "rarity": 999
      },
      {
        "itemID": 5071,
        "name": "Crystallized Reality Seed",
        "rarity": 999
      },
      {
        "itemID": 5072,
        "name": "Crystallized Wealth",
        "rarity": 999
      },
      {
        "itemID": 5073,
        "name": "Crystallized Wealth Seed",
        "rarity": 999
      },
      {
        "itemID": 5074,
        "name": "Crystallized Brilliance",
        "rarity": 999
      },
      {
        "itemID": 5075,
        "name": "Crystallized Brilliance Seed",
        "rarity": 999
      },
      {
        "itemID": 5076,
        "name": "Crystallized Nature",
        "rarity": 999
      },
      {
        "itemID": 5077,
        "name": "Crystallized Nature Seed",
        "rarity": 999
      },
      {
        "itemID": 5078,
        "name": "Ancestral Totem of Wisdom",
        "rarity": 999
      },
      {
        "itemID": 5079,
        "name": "Ancestral Totem of Wisdom Seed",
        "rarity": 999
      },
      {
        "itemID": 5080,
        "name": "Ancestral Tesseract of Dimensions",
        "rarity": 999
      },
      {
        "itemID": 5081,
        "name": "Ancestral Tesseract of Dimensions Seed",
        "rarity": 999
      },
      {
        "itemID": 5082,
        "name": "Ancestral Seed of Life",
        "rarity": 999
      },
      {
        "itemID": 5083,
        "name": "Ancestral Seed of Life Seed",
        "rarity": 999
      },
      {
        "itemID": 5084,
        "name": "Ancestral Lens of Riches",
        "rarity": 999
      },
      {
        "itemID": 5085,
        "name": "Ancestral Lens of Riches Seed",
        "rarity": 999
      },
      {
        "itemID": 5086,
        "name": "Ancient Altar",
        "rarity": 999
      },
      {
        "itemID": 5087,
        "name": "Ancient Altar Seed",
        "rarity": 999
      },
      {
        "itemID": 5088,
        "name": "Ghastly Robe",
        "rarity": 999
      },
      {
        "itemID": 5089,
        "name": "Ghastly Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 5090,
        "name": "Bonsai",
        "rarity": 999
      },
      {
        "itemID": 5091,
        "name": "Bonsai Seed",
        "rarity": 999
      },
      {
        "itemID": 5092,
        "name": "Acorn",
        "rarity": 18
      },
      {
        "itemID": 5093,
        "name": "Acorn Seed",
        "rarity": 18
      },
      {
        "itemID": 5094,
        "name": "Centerpiece",
        "rarity": 999
      },
      {
        "itemID": 5095,
        "name": "Centerpiece Seed",
        "rarity": 999
      },
      {
        "itemID": 5096,
        "name": "Maple Leaf",
        "rarity": 29
      },
      {
        "itemID": 5097,
        "name": "Maple Leaf Seed",
        "rarity": 29
      },
      {
        "itemID": 5098,
        "name": "Dragon Scales",
        "rarity": 999
      },
      {
        "itemID": 5099,
        "name": "Dragon Scales Seed",
        "rarity": 999
      },
      {
        "itemID": 5100,
        "name": "Koi Fish",
        "rarity": 999
      },
      {
        "itemID": 5101,
        "name": "Koi Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5102,
        "name": "Leaves",
        "rarity": 999
      },
      {
        "itemID": 5103,
        "name": "Leaves Seed",
        "rarity": 999
      },
      {
        "itemID": 5104,
        "name": "Celestial Kaleidoscope",
        "rarity": 999
      },
      {
        "itemID": 5105,
        "name": "Celestial Kaleidoscope Seed",
        "rarity": 999
      },
      {
        "itemID": 5106,
        "name": "Harmonic Chimes",
        "rarity": 999
      },
      {
        "itemID": 5107,
        "name": "Harmonic Chimes Seed",
        "rarity": 999
      },
      {
        "itemID": 5108,
        "name": "Hay",
        "rarity": 999
      },
      {
        "itemID": 5109,
        "name": "Hay Seed",
        "rarity": 999
      },
      {
        "itemID": 5110,
        "name": "Pinecone",
        "rarity": 22
      },
      {
        "itemID": 5111,
        "name": "Pinecone Seed",
        "rarity": 22
      },
      {
        "itemID": 5112,
        "name": "Weather Machine - Autumn",
        "rarity": 999
      },
      {
        "itemID": 5113,
        "name": "Weather Machine - Autumn Seed",
        "rarity": 999
      },
      {
        "itemID": 5114,
        "name": "Tea",
        "rarity": 999
      },
      {
        "itemID": 5115,
        "name": "Tea Seed",
        "rarity": 999
      },
      {
        "itemID": 5116,
        "name": "Tea Set",
        "rarity": 999
      },
      {
        "itemID": 5117,
        "name": "Tea Set Seed",
        "rarity": 999
      },
      {
        "itemID": 5118,
        "name": "Scarecrow Mask",
        "rarity": 999
      },
      {
        "itemID": 5119,
        "name": "Scarecrow Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 5120,
        "name": "Rake",
        "rarity": 999
      },
      {
        "itemID": 5121,
        "name": "Rake Seed",
        "rarity": 999
      },
      {
        "itemID": 5122,
        "name": "Cloud Rabbit",
        "rarity": 999
      },
      {
        "itemID": 5123,
        "name": "Cloud Rabbit Seed",
        "rarity": 999
      },
      {
        "itemID": 5124,
        "name": "Dryad",
        "rarity": 999
      },
      {
        "itemID": 5125,
        "name": "Dryad Seed",
        "rarity": 999
      },
      {
        "itemID": 5126,
        "name": "Ancestral Totem of Wisdom : Level 2",
        "rarity": 999
      },
      {
        "itemID": 5127,
        "name": "Ancestral Totem of Wisdom : Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5128,
        "name": "Ancestral Totem of Wisdom : Level 3",
        "rarity": 999
      },
      {
        "itemID": 5129,
        "name": "Ancestral Totem of Wisdom : Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5130,
        "name": "Ancestral Totem of Wisdom : Level 4",
        "rarity": 999
      },
      {
        "itemID": 5131,
        "name": "Ancestral Totem of Wisdom : Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5132,
        "name": "Ancestral Totem of Wisdom : Level 5",
        "rarity": 999
      },
      {
        "itemID": 5133,
        "name": "Ancestral Totem of Wisdom : Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 5134,
        "name": "Ancestral Totem of Wisdom : Level 6",
        "rarity": 999
      },
      {
        "itemID": 5135,
        "name": "Ancestral Totem of Wisdom : Level 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 5136,
        "name": "null_item5136",
        "rarity": 1
      },
      {
        "itemID": 5137,
        "name": "null_item5136 Seed",
        "rarity": 1
      },
      {
        "itemID": 5138,
        "name": "null_item5138",
        "rarity": 1
      },
      {
        "itemID": 5139,
        "name": "null_item5138 Seed",
        "rarity": 1
      },
      {
        "itemID": 5140,
        "name": "null_item5140",
        "rarity": 1
      },
      {
        "itemID": 5141,
        "name": "null_item5140 Seed",
        "rarity": 1
      },
      {
        "itemID": 5142,
        "name": "null_item5142",
        "rarity": 1
      },
      {
        "itemID": 5143,
        "name": "null_item5142 Seed",
        "rarity": 1
      },
      {
        "itemID": 5144,
        "name": "Ancestral Tesseract of Dimensions : Level 2",
        "rarity": 999
      },
      {
        "itemID": 5145,
        "name": "Ancestral Tesseract of Dimensions : Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5146,
        "name": "Ancestral Tesseract of Dimensions : Level 3",
        "rarity": 999
      },
      {
        "itemID": 5147,
        "name": "Ancestral Tesseract of Dimensions : Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5148,
        "name": "Ancestral Tesseract of Dimensions : Level 4",
        "rarity": 999
      },
      {
        "itemID": 5149,
        "name": "Ancestral Tesseract of Dimensions : Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5150,
        "name": "Ancestral Tesseract of Dimensions : Level 5",
        "rarity": 999
      },
      {
        "itemID": 5151,
        "name": "Ancestral Tesseract of Dimensions : Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 5152,
        "name": "Ancestral Tesseract of Dimensions : Level 6",
        "rarity": 999
      },
      {
        "itemID": 5153,
        "name": "Ancestral Tesseract of Dimensions : Level 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 5154,
        "name": "null_item5154",
        "rarity": 1
      },
      {
        "itemID": 5155,
        "name": "null_item5154 Seed",
        "rarity": 1
      },
      {
        "itemID": 5156,
        "name": "null_item5156",
        "rarity": 1
      },
      {
        "itemID": 5157,
        "name": "null_item5156 Seed",
        "rarity": 1
      },
      {
        "itemID": 5158,
        "name": "null_item5158",
        "rarity": 1
      },
      {
        "itemID": 5159,
        "name": "null_item5158 Seed",
        "rarity": 1
      },
      {
        "itemID": 5160,
        "name": "null_item5160",
        "rarity": 1
      },
      {
        "itemID": 5161,
        "name": "null_item5160 Seed",
        "rarity": 1
      },
      {
        "itemID": 5162,
        "name": "Ancestral Seed of Life : Level 2",
        "rarity": 999
      },
      {
        "itemID": 5163,
        "name": "Ancestral Seed of Life : Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5164,
        "name": "Ancestral Seed of Life : Level 3",
        "rarity": 999
      },
      {
        "itemID": 5165,
        "name": "Ancestral Seed of Life : Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5166,
        "name": "Ancestral Seed of Life : Level 4",
        "rarity": 999
      },
      {
        "itemID": 5167,
        "name": "Ancestral Seed of Life : Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5168,
        "name": "Ancestral Seed of Life : Level 5",
        "rarity": 999
      },
      {
        "itemID": 5169,
        "name": "Ancestral Seed of Life : Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 5170,
        "name": "Ancestral Seed of Life : Level 6",
        "rarity": 999
      },
      {
        "itemID": 5171,
        "name": "Ancestral Seed of Life : Level 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 5172,
        "name": "null_item5172",
        "rarity": 1
      },
      {
        "itemID": 5173,
        "name": "null_item5172 Seed",
        "rarity": 1
      },
      {
        "itemID": 5174,
        "name": "null_item5174",
        "rarity": 1
      },
      {
        "itemID": 5175,
        "name": "null_item5174 Seed",
        "rarity": 1
      },
      {
        "itemID": 5176,
        "name": "null_item5176",
        "rarity": 1
      },
      {
        "itemID": 5177,
        "name": "null_item5176 Seed",
        "rarity": 1
      },
      {
        "itemID": 5178,
        "name": "null_item5178",
        "rarity": 1
      },
      {
        "itemID": 5179,
        "name": "null_item5178 Seed",
        "rarity": 1
      },
      {
        "itemID": 5180,
        "name": "Ancestral Lens of Riches : Level 2",
        "rarity": 999
      },
      {
        "itemID": 5181,
        "name": "Ancestral Lens of Riches : Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5182,
        "name": "Ancestral Lens of Riches : Level 3",
        "rarity": 999
      },
      {
        "itemID": 5183,
        "name": "Ancestral Lens of Riches : Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5184,
        "name": "Ancestral Lens of Riches : Level 4",
        "rarity": 999
      },
      {
        "itemID": 5185,
        "name": "Ancestral Lens of Riches : Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5186,
        "name": "Ancestral Lens of Riches : Level 5",
        "rarity": 999
      },
      {
        "itemID": 5187,
        "name": "Ancestral Lens of Riches : Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 5188,
        "name": "Ancestral Lens of Riches : Level 6",
        "rarity": 999
      },
      {
        "itemID": 5189,
        "name": "Ancestral Lens of Riches : Level 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 5190,
        "name": "null_item5190",
        "rarity": 1
      },
      {
        "itemID": 5191,
        "name": "null_item5190 Seed",
        "rarity": 1
      },
      {
        "itemID": 5192,
        "name": "null_item5192",
        "rarity": 1
      },
      {
        "itemID": 5193,
        "name": "null_item5192 Seed",
        "rarity": 1
      },
      {
        "itemID": 5194,
        "name": "null_item5194",
        "rarity": 1
      },
      {
        "itemID": 5195,
        "name": "null_item5194 Seed",
        "rarity": 1
      },
      {
        "itemID": 5196,
        "name": "null_item5196",
        "rarity": 1
      },
      {
        "itemID": 5197,
        "name": "null_item5196 Seed",
        "rarity": 1
      },
      {
        "itemID": 5198,
        "name": "Zen Garden",
        "rarity": 999
      },
      {
        "itemID": 5199,
        "name": "Zen Garden Seed",
        "rarity": 999
      },
      {
        "itemID": 5200,
        "name": "Harvest Scarf",
        "rarity": 999
      },
      {
        "itemID": 5201,
        "name": "Harvest Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 5202,
        "name": "Soul Stone",
        "rarity": 999
      },
      {
        "itemID": 5203,
        "name": "Soul Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 5204,
        "name": "Plasma Globe",
        "rarity": 999
      },
      {
        "itemID": 5205,
        "name": "Plasma Globe Seed",
        "rarity": 999
      },
      {
        "itemID": 5206,
        "name": "Cloak of Falling Waters",
        "rarity": 999
      },
      {
        "itemID": 5207,
        "name": "Cloak of Falling Waters Seed",
        "rarity": 999
      },
      {
        "itemID": 5208,
        "name": "Demon Megalodon",
        "rarity": 999
      },
      {
        "itemID": 5209,
        "name": "Demon Megalodon Seed",
        "rarity": 999
      },
      {
        "itemID": 5210,
        "name": "El Pollo Diablo",
        "rarity": 999
      },
      {
        "itemID": 5211,
        "name": "El Pollo Diablo Seed",
        "rarity": 999
      },
      {
        "itemID": 5212,
        "name": "Doom Plow",
        "rarity": 999
      },
      {
        "itemID": 5213,
        "name": "Doom Plow Seed",
        "rarity": 999
      },
      {
        "itemID": 5214,
        "name": "Killer Doctor's Smock",
        "rarity": 999
      },
      {
        "itemID": 5215,
        "name": "Killer Doctor's Smock Seed",
        "rarity": 999
      },
      {
        "itemID": 5216,
        "name": "Killer Doctor's Cap",
        "rarity": 999
      },
      {
        "itemID": 5217,
        "name": "Killer Doctor's Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 5218,
        "name": "Killer Doctor's Face Mask",
        "rarity": 999
      },
      {
        "itemID": 5219,
        "name": "Killer Doctor's Face Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 5220,
        "name": "Killer Doctor's Pants",
        "rarity": 999
      },
      {
        "itemID": 5221,
        "name": "Killer Doctor's Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 5222,
        "name": "Demon Clown Mask",
        "rarity": 73
      },
      {
        "itemID": 5223,
        "name": "Demon Clown Mask Seed",
        "rarity": 73
      },
      {
        "itemID": 5224,
        "name": "Neon Voodoo Mask - Pure White",
        "rarity": 73
      },
      {
        "itemID": 5225,
        "name": "Neon Voodoo Mask - Pure White Seed",
        "rarity": 73
      },
      {
        "itemID": 5226,
        "name": "Neon Voodoo Mask - Electric Blue",
        "rarity": 73
      },
      {
        "itemID": 5227,
        "name": "Neon Voodoo Mask - Electric Blue Seed",
        "rarity": 73
      },
      {
        "itemID": 5228,
        "name": "Neon Voodoo Mask - Shocking Pink",
        "rarity": 73
      },
      {
        "itemID": 5229,
        "name": "Neon Voodoo Mask - Shocking Pink Seed",
        "rarity": 73
      },
      {
        "itemID": 5230,
        "name": "Neon Voodoo Mask - Plasma Green",
        "rarity": 73
      },
      {
        "itemID": 5231,
        "name": "Neon Voodoo Mask - Plasma Green Seed",
        "rarity": 73
      },
      {
        "itemID": 5232,
        "name": "Fish Monster Mask",
        "rarity": 73
      },
      {
        "itemID": 5233,
        "name": "Fish Monster Mask Seed",
        "rarity": 73
      },
      {
        "itemID": 5234,
        "name": "Demented Cowl",
        "rarity": 999
      },
      {
        "itemID": 5235,
        "name": "Demented Cowl Seed",
        "rarity": 999
      },
      {
        "itemID": 5236,
        "name": "Iron Maiden",
        "rarity": 999
      },
      {
        "itemID": 5237,
        "name": "Iron Maiden Seed",
        "rarity": 999
      },
      {
        "itemID": 5238,
        "name": "Looming Shadows",
        "rarity": 30
      },
      {
        "itemID": 5239,
        "name": "Looming Shadows Seed",
        "rarity": 30
      },
      {
        "itemID": 5240,
        "name": "Hanging Bats",
        "rarity": 25
      },
      {
        "itemID": 5241,
        "name": "Hanging Bats Seed",
        "rarity": 25
      },
      {
        "itemID": 5242,
        "name": "Death Metal Radio",
        "rarity": 999
      },
      {
        "itemID": 5243,
        "name": "Death Metal Radio Seed",
        "rarity": 999
      },
      {
        "itemID": 5244,
        "name": "Plastic Ghost",
        "rarity": 999
      },
      {
        "itemID": 5245,
        "name": "Plastic Ghost Seed",
        "rarity": 999
      },
      {
        "itemID": 5246,
        "name": "Totally Harmless Doll",
        "rarity": 999
      },
      {
        "itemID": 5247,
        "name": "Totally Harmless Doll Seed",
        "rarity": 999
      },
      {
        "itemID": 5248,
        "name": "Headsman's Hood",
        "rarity": 90
      },
      {
        "itemID": 5249,
        "name": "Headsman's Hood Seed",
        "rarity": 90
      },
      {
        "itemID": 5250,
        "name": "Doll Head Part",
        "rarity": 999
      },
      {
        "itemID": 5251,
        "name": "Doll Head Part Seed",
        "rarity": 999
      },
      {
        "itemID": 5252,
        "name": "Doll Torso Part",
        "rarity": 999
      },
      {
        "itemID": 5253,
        "name": "Doll Torso Part Seed",
        "rarity": 999
      },
      {
        "itemID": 5254,
        "name": "Doll Legs Part",
        "rarity": 999
      },
      {
        "itemID": 5255,
        "name": "Doll Legs Part Seed",
        "rarity": 999
      },
      {
        "itemID": 5256,
        "name": "Pumpkin Candy",
        "rarity": 5
      },
      {
        "itemID": 5257,
        "name": "Pumpkin Candy Seed",
        "rarity": 5
      },
      {
        "itemID": 5258,
        "name": "Chi Harmonizer",
        "rarity": 999
      },
      {
        "itemID": 5259,
        "name": "Chi Harmonizer Seed",
        "rarity": 999
      },
      {
        "itemID": 5260,
        "name": "Harmonic Lock",
        "rarity": 999
      },
      {
        "itemID": 5261,
        "name": "Harmonic Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 5262,
        "name": "Neon Gum",
        "rarity": 999
      },
      {
        "itemID": 5263,
        "name": "Neon Gum Seed",
        "rarity": 999
      },
      {
        "itemID": 5264,
        "name": "Neon Nerves",
        "rarity": 999
      },
      {
        "itemID": 5265,
        "name": "Neon Nerves Seed",
        "rarity": 999
      },
      {
        "itemID": 5266,
        "name": "Static Hair",
        "rarity": 999
      },
      {
        "itemID": 5267,
        "name": "Static Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 5268,
        "name": "Amethyst Choker",
        "rarity": 999
      },
      {
        "itemID": 5269,
        "name": "Amethyst Choker Seed",
        "rarity": 999
      },
      {
        "itemID": 5270,
        "name": "Opal Block",
        "rarity": 100
      },
      {
        "itemID": 5271,
        "name": "Opal Block Seed",
        "rarity": 100
      },
      {
        "itemID": 5272,
        "name": "Kaleidoscopic Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 5273,
        "name": "Kaleidoscopic Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 5274,
        "name": "Demon Crystal",
        "rarity": 999
      },
      {
        "itemID": 5275,
        "name": "Demon Crystal Seed",
        "rarity": 999
      },
      {
        "itemID": 5276,
        "name": "Celestial Lance",
        "rarity": 999
      },
      {
        "itemID": 5277,
        "name": "Celestial Lance Seed",
        "rarity": 999
      },
      {
        "itemID": 5278,
        "name": "Celestial Halo",
        "rarity": 999
      },
      {
        "itemID": 5279,
        "name": "Celestial Halo Seed",
        "rarity": 999
      },
      {
        "itemID": 5280,
        "name": "Celestial Frame",
        "rarity": 999
      },
      {
        "itemID": 5281,
        "name": "Celestial Frame Seed",
        "rarity": 999
      },
      {
        "itemID": 5282,
        "name": "Celestial Dust",
        "rarity": 999
      },
      {
        "itemID": 5283,
        "name": "Celestial Dust Seed",
        "rarity": 999
      },
      {
        "itemID": 5284,
        "name": "Celestial Blade",
        "rarity": 999
      },
      {
        "itemID": 5285,
        "name": "Celestial Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 5286,
        "name": "Turkey Onesie Hood",
        "rarity": 999
      },
      {
        "itemID": 5287,
        "name": "Turkey Onesie Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 5288,
        "name": "Turkey Onesie Body",
        "rarity": 999
      },
      {
        "itemID": 5289,
        "name": "Turkey Onesie Body Seed",
        "rarity": 999
      },
      {
        "itemID": 5290,
        "name": "Turkey Onesie Legs",
        "rarity": 999
      },
      {
        "itemID": 5291,
        "name": "Turkey Onesie Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 5292,
        "name": "Turkey Onesie Feet",
        "rarity": 999
      },
      {
        "itemID": 5293,
        "name": "Turkey Onesie Feet Seed",
        "rarity": 999
      },
      {
        "itemID": 5294,
        "name": "Turkey Carving Set",
        "rarity": 999
      },
      {
        "itemID": 5295,
        "name": "Turkey Carving Set Seed",
        "rarity": 999
      },
      {
        "itemID": 5296,
        "name": "Turkey Onesie Tail",
        "rarity": 999
      },
      {
        "itemID": 5297,
        "name": "Turkey Onesie Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 5298,
        "name": "Turkey Onesie Beak",
        "rarity": 999
      },
      {
        "itemID": 5299,
        "name": "Turkey Onesie Beak Seed",
        "rarity": 999
      },
      {
        "itemID": 5300,
        "name": "Thanksgiving Turkey Dinner - Bronze",
        "rarity": 999
      },
      {
        "itemID": 5301,
        "name": "Thanksgiving Turkey Dinner - Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 5302,
        "name": "Thanksgiving Turkey Dinner - Silver",
        "rarity": 999
      },
      {
        "itemID": 5303,
        "name": "Thanksgiving Turkey Dinner - Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 5304,
        "name": "Thanksgiving Turkey Dinner - Gold",
        "rarity": 999
      },
      {
        "itemID": 5305,
        "name": "Thanksgiving Turkey Dinner - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 5306,
        "name": "Black Friday Cart - Bronze",
        "rarity": 999
      },
      {
        "itemID": 5307,
        "name": "Black Friday Cart - Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 5308,
        "name": "Black Friday Cart - Silver",
        "rarity": 999
      },
      {
        "itemID": 5309,
        "name": "Black Friday Cart - Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 5310,
        "name": "Black Friday Cart - Gold",
        "rarity": 999
      },
      {
        "itemID": 5311,
        "name": "Black Friday Cart - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 5312,
        "name": "Cyber Monday Tablet - Bronze",
        "rarity": 999
      },
      {
        "itemID": 5313,
        "name": "Cyber Monday Tablet - Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 5314,
        "name": "Cyber Monday Tablet - Silver",
        "rarity": 999
      },
      {
        "itemID": 5315,
        "name": "Cyber Monday Tablet - Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 5316,
        "name": "Cyber Monday Tablet - Gold",
        "rarity": 999
      },
      {
        "itemID": 5317,
        "name": "Cyber Monday Tablet - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 5318,
        "name": "Winterfest Calendar - 2017",
        "rarity": 999
      },
      {
        "itemID": 5319,
        "name": "Winterfest Calendar - 2017 Seed",
        "rarity": 999
      },
      {
        "itemID": 5320,
        "name": "Used Winterfest Calendar - 2017",
        "rarity": 999
      },
      {
        "itemID": 5321,
        "name": "Used Winterfest Calendar - 2017 Seed",
        "rarity": 999
      },
      {
        "itemID": 5322,
        "name": "Zephyr Helm",
        "rarity": 999
      },
      {
        "itemID": 5323,
        "name": "Zephyr Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 5324,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 5325,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 5326,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 5327,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 5328,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 5329,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 5330,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 5331,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5332,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 5333,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5334,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 5335,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5336,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 5337,
        "name": "Balloon Warz Winter 2017 Gold Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 5338,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 5339,
        "name": "Balloon Warz Winter 2017 Silver Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 5340,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 5341,
        "name": "Balloon Warz Winter 2017 Bronze Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 5342,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 5343,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 5344,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 5345,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5346,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 5347,
        "name": "Balloon Warz Winter 2017 MVP Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 5348,
        "name": "Gingerbread Block",
        "rarity": 999
      },
      {
        "itemID": 5349,
        "name": "Gingerbread Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5350,
        "name": "Gingerbread House",
        "rarity": 999
      },
      {
        "itemID": 5351,
        "name": "Gingerbread House Seed",
        "rarity": 999
      },
      {
        "itemID": 5352,
        "name": "Gingerbread Roof",
        "rarity": 999
      },
      {
        "itemID": 5353,
        "name": "Gingerbread Roof Seed",
        "rarity": 999
      },
      {
        "itemID": 5354,
        "name": "Gingerbread Door",
        "rarity": 999
      },
      {
        "itemID": 5355,
        "name": "Gingerbread Door Seed",
        "rarity": 999
      },
      {
        "itemID": 5356,
        "name": "Holly",
        "rarity": 999
      },
      {
        "itemID": 5357,
        "name": "Holly Seed",
        "rarity": 999
      },
      {
        "itemID": 5358,
        "name": "Log Cabin",
        "rarity": 999
      },
      {
        "itemID": 5359,
        "name": "Log Cabin Seed",
        "rarity": 999
      },
      {
        "itemID": 5360,
        "name": "Log Cabin Roof",
        "rarity": 999
      },
      {
        "itemID": 5361,
        "name": "Log Cabin Roof Seed",
        "rarity": 999
      },
      {
        "itemID": 5362,
        "name": "Log Cabin Door",
        "rarity": 999
      },
      {
        "itemID": 5363,
        "name": "Log Cabin Door Seed",
        "rarity": 999
      },
      {
        "itemID": 5364,
        "name": "Jack-in-the-Box",
        "rarity": 999
      },
      {
        "itemID": 5365,
        "name": "Jack-in-the-Box Seed",
        "rarity": 999
      },
      {
        "itemID": 5366,
        "name": "Twinkling Lights",
        "rarity": 999
      },
      {
        "itemID": 5367,
        "name": "Twinkling Lights Seed",
        "rarity": 999
      },
      {
        "itemID": 5368,
        "name": "Small Icicles",
        "rarity": 999
      },
      {
        "itemID": 5369,
        "name": "Small Icicles Seed",
        "rarity": 999
      },
      {
        "itemID": 5370,
        "name": "Sheet Music: Winterfest",
        "rarity": 999
      },
      {
        "itemID": 5371,
        "name": "Sheet Music: Winterfest Seed",
        "rarity": 999
      },
      {
        "itemID": 5372,
        "name": "White Chocolate Block",
        "rarity": 40
      },
      {
        "itemID": 5373,
        "name": "White Chocolate Block Seed",
        "rarity": 40
      },
      {
        "itemID": 5374,
        "name": "Chocolate Swirl Block",
        "rarity": 60
      },
      {
        "itemID": 5375,
        "name": "Chocolate Swirl Block Seed",
        "rarity": 60
      },
      {
        "itemID": 5376,
        "name": "Chocolate Sprinkles Block",
        "rarity": 999
      },
      {
        "itemID": 5377,
        "name": "Chocolate Sprinkles Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5378,
        "name": "Chocolate Orange Block",
        "rarity": 35
      },
      {
        "itemID": 5379,
        "name": "Chocolate Orange Block Seed",
        "rarity": 35
      },
      {
        "itemID": 5380,
        "name": "Chocolate Cherry Block",
        "rarity": 73
      },
      {
        "itemID": 5381,
        "name": "Chocolate Cherry Block Seed",
        "rarity": 73
      },
      {
        "itemID": 5382,
        "name": "S'mores Block",
        "rarity": 999
      },
      {
        "itemID": 5383,
        "name": "S'mores Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5384,
        "name": "Cherry Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 5385,
        "name": "Cherry Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5386,
        "name": "Lime Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 5387,
        "name": "Lime Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5388,
        "name": "Blueberry Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 5389,
        "name": "Blueberry Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5390,
        "name": "Orange Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 5391,
        "name": "Orange Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5392,
        "name": "Lemon Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 5393,
        "name": "Lemon Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5394,
        "name": "A Row of Winterfest Socks",
        "rarity": 999
      },
      {
        "itemID": 5395,
        "name": "A Row of Winterfest Socks Seed",
        "rarity": 999
      },
      {
        "itemID": 5396,
        "name": "Snow Block",
        "rarity": 999
      },
      {
        "itemID": 5397,
        "name": "Snow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5398,
        "name": "Winterfest Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5399,
        "name": "Winterfest Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5400,
        "name": "Mistletoe",
        "rarity": 999
      },
      {
        "itemID": 5401,
        "name": "Mistletoe Seed",
        "rarity": 999
      },
      {
        "itemID": 5402,
        "name": "Winterfest Cracker",
        "rarity": 999
      },
      {
        "itemID": 5403,
        "name": "Winterfest Cracker Seed",
        "rarity": 999
      },
      {
        "itemID": 5404,
        "name": "Deluxe Winterfest Cracker",
        "rarity": 999
      },
      {
        "itemID": 5405,
        "name": "Deluxe Winterfest Cracker Seed",
        "rarity": 999
      },
      {
        "itemID": 5406,
        "name": "Winterfest Red Paper Crown",
        "rarity": 999
      },
      {
        "itemID": 5407,
        "name": "Winterfest Red Paper Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 5408,
        "name": "Winterfest Green Paper Crown",
        "rarity": 999
      },
      {
        "itemID": 5409,
        "name": "Winterfest Green Paper Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 5410,
        "name": "Winterfest Silver Paper Crown",
        "rarity": 999
      },
      {
        "itemID": 5411,
        "name": "Winterfest Silver Paper Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 5412,
        "name": "Winterfest Gold Paper Crown",
        "rarity": 999
      },
      {
        "itemID": 5413,
        "name": "Winterfest Gold Paper Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 5414,
        "name": "Gingerbread Man",
        "rarity": 999
      },
      {
        "itemID": 5415,
        "name": "Gingerbread Man Seed",
        "rarity": 999
      },
      {
        "itemID": 5416,
        "name": "Gingerbread Dough",
        "rarity": 999
      },
      {
        "itemID": 5417,
        "name": "Gingerbread Dough Seed",
        "rarity": 999
      },
      {
        "itemID": 5418,
        "name": "Ice Skates of Winter",
        "rarity": 999
      },
      {
        "itemID": 5419,
        "name": "Ice Skates of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 5420,
        "name": "Snowshoes",
        "rarity": 999
      },
      {
        "itemID": 5421,
        "name": "Snowshoes Seed",
        "rarity": 999
      },
      {
        "itemID": 5422,
        "name": "Sleigh of Winter",
        "rarity": 999
      },
      {
        "itemID": 5423,
        "name": "Sleigh of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 5424,
        "name": "Winter Frost Bow",
        "rarity": 999
      },
      {
        "itemID": 5425,
        "name": "Winter Frost Bow Seed",
        "rarity": 999
      },
      {
        "itemID": 5426,
        "name": "Ice Serpent Scarf",
        "rarity": 999
      },
      {
        "itemID": 5427,
        "name": "Ice Serpent Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 5428,
        "name": "Lumberjack Coat - Scarlet",
        "rarity": 999
      },
      {
        "itemID": 5429,
        "name": "Lumberjack Coat - Scarlet Seed",
        "rarity": 999
      },
      {
        "itemID": 5430,
        "name": "Lumberjack Coat - Olive",
        "rarity": 999
      },
      {
        "itemID": 5431,
        "name": "Lumberjack Coat - Olive Seed",
        "rarity": 999
      },
      {
        "itemID": 5432,
        "name": "Lumberjack Coat - Navy",
        "rarity": 999
      },
      {
        "itemID": 5433,
        "name": "Lumberjack Coat - Navy Seed",
        "rarity": 999
      },
      {
        "itemID": 5434,
        "name": "Lumberjack Coat - Midnight",
        "rarity": 999
      },
      {
        "itemID": 5435,
        "name": "Lumberjack Coat - Midnight Seed",
        "rarity": 999
      },
      {
        "itemID": 5436,
        "name": "Mountain Coat",
        "rarity": 999
      },
      {
        "itemID": 5437,
        "name": "Mountain Coat Seed",
        "rarity": 999
      },
      {
        "itemID": 5438,
        "name": "Mountain Cap",
        "rarity": 999
      },
      {
        "itemID": 5439,
        "name": "Mountain Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 5440,
        "name": "Mountain Boots",
        "rarity": 999
      },
      {
        "itemID": 5441,
        "name": "Mountain Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 5442,
        "name": "Parka Hood - Orange",
        "rarity": 999
      },
      {
        "itemID": 5443,
        "name": "Parka Hood - Orange Seed",
        "rarity": 999
      },
      {
        "itemID": 5444,
        "name": "Parka Hood - Blue",
        "rarity": 999
      },
      {
        "itemID": 5445,
        "name": "Parka Hood - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 5446,
        "name": "Puffy Blue Jacket",
        "rarity": 999
      },
      {
        "itemID": 5447,
        "name": "Puffy Blue Jacket Seed",
        "rarity": 999
      },
      {
        "itemID": 5448,
        "name": "Mr. Narwhal",
        "rarity": 999
      },
      {
        "itemID": 5449,
        "name": "Mr. Narwhal Seed",
        "rarity": 999
      },
      {
        "itemID": 5450,
        "name": "Glass Piglet Squid",
        "rarity": 999
      },
      {
        "itemID": 5451,
        "name": "Glass Piglet Squid Seed",
        "rarity": 999
      },
      {
        "itemID": 5452,
        "name": "Gingerbread Cookie",
        "rarity": 999
      },
      {
        "itemID": 5453,
        "name": "Gingerbread Cookie Seed",
        "rarity": 999
      },
      {
        "itemID": 5454,
        "name": "Gross Golden Holiday Sweater",
        "rarity": 999
      },
      {
        "itemID": 5455,
        "name": "Gross Golden Holiday Sweater Seed",
        "rarity": 999
      },
      {
        "itemID": 5456,
        "name": "Silverstar Bow",
        "rarity": 999
      },
      {
        "itemID": 5457,
        "name": "Silverstar Bow Seed",
        "rarity": 999
      },
      {
        "itemID": 5458,
        "name": "Red Eye Drops",
        "rarity": 36
      },
      {
        "itemID": 5459,
        "name": "Red Eye Drops Seed",
        "rarity": 36
      },
      {
        "itemID": 5460,
        "name": "Green Eye Drops",
        "rarity": 37
      },
      {
        "itemID": 5461,
        "name": "Green Eye Drops Seed",
        "rarity": 37
      },
      {
        "itemID": 5462,
        "name": "Blue Eye Drops",
        "rarity": 47
      },
      {
        "itemID": 5463,
        "name": "Blue Eye Drops Seed",
        "rarity": 47
      },
      {
        "itemID": 5464,
        "name": "Black Eye Drops",
        "rarity": 65
      },
      {
        "itemID": 5465,
        "name": "Black Eye Drops Seed",
        "rarity": 65
      },
      {
        "itemID": 5466,
        "name": "Eye Cleaning Solution",
        "rarity": 25
      },
      {
        "itemID": 5467,
        "name": "Eye Cleaning Solution Seed",
        "rarity": 25
      },
      {
        "itemID": 5468,
        "name": "Bathroom Mirror",
        "rarity": 999
      },
      {
        "itemID": 5469,
        "name": "Bathroom Mirror Seed",
        "rarity": 999
      },
      {
        "itemID": 5470,
        "name": "Sun Yellow Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5471,
        "name": "Sun Yellow Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5472,
        "name": "Hot Pink Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5473,
        "name": "Hot Pink Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5474,
        "name": "Bodacious Blue Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5475,
        "name": "Bodacious Blue Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5476,
        "name": "Groovy Green Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5477,
        "name": "Groovy Green Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5478,
        "name": "Raving Red Dancefloor",
        "rarity": 999
      },
      {
        "itemID": 5479,
        "name": "Raving Red Dancefloor Seed",
        "rarity": 999
      },
      {
        "itemID": 5480,
        "name": "Rayman's Fist",
        "rarity": 999
      },
      {
        "itemID": 5481,
        "name": "Rayman's Fist Seed",
        "rarity": 999
      },
      {
        "itemID": 5482,
        "name": "Rayman's Hair",
        "rarity": 999
      },
      {
        "itemID": 5483,
        "name": "Rayman's Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 5484,
        "name": "Rayman's Hoodie",
        "rarity": 999
      },
      {
        "itemID": 5485,
        "name": "Rayman's Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 5486,
        "name": "Rayman's Shoes",
        "rarity": 999
      },
      {
        "itemID": 5487,
        "name": "Rayman's Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 5488,
        "name": "Rayman's Nose",
        "rarity": 999
      },
      {
        "itemID": 5489,
        "name": "Rayman's Nose Seed",
        "rarity": 999
      },
      {
        "itemID": 5490,
        "name": "Equalizer Tee",
        "rarity": 999
      },
      {
        "itemID": 5491,
        "name": "Equalizer Tee Seed",
        "rarity": 999
      },
      {
        "itemID": 5492,
        "name": "Ultra Equalizer Tee",
        "rarity": 999
      },
      {
        "itemID": 5493,
        "name": "Ultra Equalizer Tee Seed",
        "rarity": 999
      },
      {
        "itemID": 5494,
        "name": "Rollback Plaque IV",
        "rarity": 1
      },
      {
        "itemID": 5495,
        "name": "Rollback Plaque IV Seed",
        "rarity": 1
      },
      {
        "itemID": 5496,
        "name": "Flame Tee",
        "rarity": 999
      },
      {
        "itemID": 5497,
        "name": "Flame Tee Seed",
        "rarity": 999
      },
      {
        "itemID": 5498,
        "name": "Ultra Flame Tee",
        "rarity": 999
      },
      {
        "itemID": 5499,
        "name": "Ultra Flame Tee Seed",
        "rarity": 999
      },
      {
        "itemID": 5500,
        "name": "Party Light Wave Vest",
        "rarity": 999
      },
      {
        "itemID": 5501,
        "name": "Party Light Wave Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 5502,
        "name": "Ultra Party Light Wave Vest",
        "rarity": 999
      },
      {
        "itemID": 5503,
        "name": "Ultra Party Light Wave Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 5504,
        "name": "Party Style Top Hat",
        "rarity": 999
      },
      {
        "itemID": 5505,
        "name": "Party Style Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 5506,
        "name": "Ultra Party Glow Top Hat",
        "rarity": 999
      },
      {
        "itemID": 5507,
        "name": "Ultra Party Glow Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 5508,
        "name": "Party Style Shades",
        "rarity": 999
      },
      {
        "itemID": 5509,
        "name": "Party Style Shades Seed",
        "rarity": 999
      },
      {
        "itemID": 5510,
        "name": "Ultra Party Glow Shades",
        "rarity": 999
      },
      {
        "itemID": 5511,
        "name": "Ultra Party Glow Shades Seed",
        "rarity": 999
      },
      {
        "itemID": 5512,
        "name": "Party Glow Sneakers",
        "rarity": 999
      },
      {
        "itemID": 5513,
        "name": "Party Glow Sneakers Seed",
        "rarity": 999
      },
      {
        "itemID": 5514,
        "name": "Party Style Scarf",
        "rarity": 999
      },
      {
        "itemID": 5515,
        "name": "Party Style Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 5516,
        "name": "Ultra Party Glow Scarf",
        "rarity": 999
      },
      {
        "itemID": 5517,
        "name": "Ultra Party Glow Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 5518,
        "name": "Megawatt Bass Speaker",
        "rarity": 999
      },
      {
        "itemID": 5519,
        "name": "Megawatt Bass Speaker Seed",
        "rarity": 999
      },
      {
        "itemID": 5520,
        "name": "5th Anniversary Block",
        "rarity": 999
      },
      {
        "itemID": 5521,
        "name": "5th Anniversary Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5522,
        "name": "Hand Drill",
        "rarity": 999
      },
      {
        "itemID": 5523,
        "name": "Hand Drill Seed",
        "rarity": 999
      },
      {
        "itemID": 5524,
        "name": "Nuclear Detonator",
        "rarity": 999
      },
      {
        "itemID": 5525,
        "name": "Nuclear Detonator Seed",
        "rarity": 999
      },
      {
        "itemID": 5526,
        "name": "Uranium Glowing Lure",
        "rarity": 999
      },
      {
        "itemID": 5527,
        "name": "Uranium Glowing Lure Seed",
        "rarity": 999
      },
      {
        "itemID": 5528,
        "name": "Mega-Pellet Bait",
        "rarity": 999
      },
      {
        "itemID": 5529,
        "name": "Mega-Pellet Bait Seed",
        "rarity": 999
      },
      {
        "itemID": 5530,
        "name": "Training Port",
        "rarity": 999
      },
      {
        "itemID": 5531,
        "name": "Training Port Seed",
        "rarity": 999
      },
      {
        "itemID": 5532,
        "name": "Fish Medicine",
        "rarity": 72
      },
      {
        "itemID": 5533,
        "name": "Fish Medicine Seed",
        "rarity": 72
      },
      {
        "itemID": 5534,
        "name": "Fish Reviver",
        "rarity": 999
      },
      {
        "itemID": 5535,
        "name": "Fish Reviver Seed",
        "rarity": 999
      },
      {
        "itemID": 5536,
        "name": "Fish Flakes",
        "rarity": 999
      },
      {
        "itemID": 5537,
        "name": "Fish Flakes Seed",
        "rarity": 999
      },
      {
        "itemID": 5538,
        "name": "Maidmare Fish",
        "rarity": 999
      },
      {
        "itemID": 5539,
        "name": "Maidmare Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5540,
        "name": "Maidmare",
        "rarity": 999
      },
      {
        "itemID": 5541,
        "name": "Maidmare Seed",
        "rarity": 999
      },
      {
        "itemID": 5542,
        "name": "Double-Headed Angel-Devil Fish",
        "rarity": 999
      },
      {
        "itemID": 5543,
        "name": "Double-Headed Angel-Devil Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5544,
        "name": "Riding Double-Headed Angel-Devil Fish",
        "rarity": 999
      },
      {
        "itemID": 5545,
        "name": "Riding Double-Headed Angel-Devil Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5546,
        "name": "Double-Headed Angel-Devil Fish Leash",
        "rarity": 999
      },
      {
        "itemID": 5547,
        "name": "Double-Headed Angel-Devil Fish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5548,
        "name": "Absolutely Real Elephant Fish",
        "rarity": 999
      },
      {
        "itemID": 5549,
        "name": "Absolutely Real Elephant Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5550,
        "name": "Absolutely Real Elephant Fish Leash",
        "rarity": 999
      },
      {
        "itemID": 5551,
        "name": "Absolutely Real Elephant Fish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5552,
        "name": "Cuttlefish",
        "rarity": 999
      },
      {
        "itemID": 5553,
        "name": "Cuttlefish Seed",
        "rarity": 999
      },
      {
        "itemID": 5554,
        "name": "Riding Cuttlefish",
        "rarity": 999
      },
      {
        "itemID": 5555,
        "name": "Riding Cuttlefish Seed",
        "rarity": 999
      },
      {
        "itemID": 5556,
        "name": "Cuttlefish Leash",
        "rarity": 999
      },
      {
        "itemID": 5557,
        "name": "Cuttlefish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5558,
        "name": "Riding Stonefish",
        "rarity": 999
      },
      {
        "itemID": 5559,
        "name": "Riding Stonefish Seed",
        "rarity": 999
      },
      {
        "itemID": 5560,
        "name": "Stonefish Leash",
        "rarity": 999
      },
      {
        "itemID": 5561,
        "name": "Stonefish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5562,
        "name": "Riding Sand Shark",
        "rarity": 999
      },
      {
        "itemID": 5563,
        "name": "Riding Sand Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 5564,
        "name": "Sand Shark Leash",
        "rarity": 999
      },
      {
        "itemID": 5565,
        "name": "Sand Shark Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5566,
        "name": "Riding Seahorse",
        "rarity": 999
      },
      {
        "itemID": 5567,
        "name": "Riding Seahorse Seed",
        "rarity": 999
      },
      {
        "itemID": 5568,
        "name": "Seahorse Leash",
        "rarity": 999
      },
      {
        "itemID": 5569,
        "name": "Seahorse Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5570,
        "name": "Battle Gar",
        "rarity": 999
      },
      {
        "itemID": 5571,
        "name": "Battle Gar Seed",
        "rarity": 999
      },
      {
        "itemID": 5572,
        "name": "Battle Mutant Fish",
        "rarity": 999
      },
      {
        "itemID": 5573,
        "name": "Battle Mutant Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5574,
        "name": "Alpha Great White Shark",
        "rarity": 999
      },
      {
        "itemID": 5575,
        "name": "Alpha Great White Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 5576,
        "name": "Riding Alpha Great White Shark",
        "rarity": 999
      },
      {
        "itemID": 5577,
        "name": "Riding Alpha Great White Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 5578,
        "name": "Alpha Great White Shark Leash",
        "rarity": 999
      },
      {
        "itemID": 5579,
        "name": "Alpha Great White Shark Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5580,
        "name": "Weird Manta Ray",
        "rarity": 999
      },
      {
        "itemID": 5581,
        "name": "Weird Manta Ray Seed",
        "rarity": 999
      },
      {
        "itemID": 5582,
        "name": "Riding Weird Manta Ray",
        "rarity": 999
      },
      {
        "itemID": 5583,
        "name": "Riding Weird Manta Ray Seed",
        "rarity": 999
      },
      {
        "itemID": 5584,
        "name": "Weird Manta Ray Leash",
        "rarity": 999
      },
      {
        "itemID": 5585,
        "name": "Weird Manta Ray Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5586,
        "name": "Goldfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5587,
        "name": "Goldfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5588,
        "name": "Catfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5589,
        "name": "Catfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5590,
        "name": "Sunfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5591,
        "name": "Sunfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5592,
        "name": "Bass Leash",
        "rarity": 999
      },
      {
        "itemID": 5593,
        "name": "Bass Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5594,
        "name": "Mahi Mahi Leash",
        "rarity": 999
      },
      {
        "itemID": 5595,
        "name": "Mahi Mahi Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5596,
        "name": "Dogfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5597,
        "name": "Dogfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5598,
        "name": "Whale Leash",
        "rarity": 999
      },
      {
        "itemID": 5599,
        "name": "Whale Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5600,
        "name": "Picasso Triggerfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5601,
        "name": "Picasso Triggerfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5602,
        "name": "Ice Crust Block",
        "rarity": 19
      },
      {
        "itemID": 5603,
        "name": "Ice Crust Block Seed",
        "rarity": 19
      },
      {
        "itemID": 5604,
        "name": "Goldfish Bowler Hat",
        "rarity": 999
      },
      {
        "itemID": 5605,
        "name": "Goldfish Bowler Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 5606,
        "name": "Catfish Slippers",
        "rarity": 999
      },
      {
        "itemID": 5607,
        "name": "Catfish Slippers Seed",
        "rarity": 999
      },
      {
        "itemID": 5608,
        "name": "Dogfish Slippers",
        "rarity": 999
      },
      {
        "itemID": 5609,
        "name": "Dogfish Slippers Seed",
        "rarity": 999
      },
      {
        "itemID": 5610,
        "name": "Picasso Face",
        "rarity": 999
      },
      {
        "itemID": 5611,
        "name": "Picasso Face Seed",
        "rarity": 999
      },
      {
        "itemID": 5612,
        "name": "Tentacle Beard",
        "rarity": 999
      },
      {
        "itemID": 5613,
        "name": "Tentacle Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 5614,
        "name": "Puffer Fish Block",
        "rarity": 999
      },
      {
        "itemID": 5615,
        "name": "Puffer Fish Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5616,
        "name": "Queen Conch Shell",
        "rarity": 999
      },
      {
        "itemID": 5617,
        "name": "Queen Conch Shell Seed",
        "rarity": 999
      },
      {
        "itemID": 5618,
        "name": "Davy Jones' Chest",
        "rarity": 999
      },
      {
        "itemID": 5619,
        "name": "Davy Jones' Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 5620,
        "name": "Radiation Block",
        "rarity": 999
      },
      {
        "itemID": 5621,
        "name": "Radiation Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5622,
        "name": "Radiation Sign",
        "rarity": 999
      },
      {
        "itemID": 5623,
        "name": "Radiation Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 5624,
        "name": "Fancy Fish Wall Mount",
        "rarity": 999
      },
      {
        "itemID": 5625,
        "name": "Fancy Fish Wall Mount Seed",
        "rarity": 999
      },
      {
        "itemID": 5626,
        "name": "Tiny Frozen Chunk",
        "rarity": 999
      },
      {
        "itemID": 5627,
        "name": "Tiny Frozen Chunk Seed",
        "rarity": 999
      },
      {
        "itemID": 5628,
        "name": "Small Frozen Chunk",
        "rarity": 999
      },
      {
        "itemID": 5629,
        "name": "Small Frozen Chunk Seed",
        "rarity": 999
      },
      {
        "itemID": 5630,
        "name": "Large Frozen Chunk",
        "rarity": 999
      },
      {
        "itemID": 5631,
        "name": "Large Frozen Chunk Seed",
        "rarity": 999
      },
      {
        "itemID": 5632,
        "name": "Tiny Radioactive Bit",
        "rarity": 999
      },
      {
        "itemID": 5633,
        "name": "Tiny Radioactive Bit Seed",
        "rarity": 999
      },
      {
        "itemID": 5634,
        "name": "Small Radioactive Bit",
        "rarity": 999
      },
      {
        "itemID": 5635,
        "name": "Small Radioactive Bit Seed",
        "rarity": 999
      },
      {
        "itemID": 5636,
        "name": "Large Radioactive Bit",
        "rarity": 999
      },
      {
        "itemID": 5637,
        "name": "Large Radioactive Bit Seed",
        "rarity": 999
      },
      {
        "itemID": 5638,
        "name": "MAGPLANT 5000",
        "rarity": 999
      },
      {
        "itemID": 5639,
        "name": "MAGPLANT 5000 Seed",
        "rarity": 999
      },
      {
        "itemID": 5640,
        "name": "MAGPLANT 5000 Remote",
        "rarity": 999
      },
      {
        "itemID": 5641,
        "name": "MAGPLANT 5000 Remote Seed",
        "rarity": 999
      },
      {
        "itemID": 5642,
        "name": "Cupid Leash",
        "rarity": 999
      },
      {
        "itemID": 5643,
        "name": "Cupid Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5644,
        "name": "Heart Shirt",
        "rarity": 999
      },
      {
        "itemID": 5645,
        "name": "Heart Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 5646,
        "name": "Golden Heart Shirt",
        "rarity": 999
      },
      {
        "itemID": 5647,
        "name": "Golden Heart Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 5648,
        "name": "USMom's Talaria",
        "rarity": 999
      },
      {
        "itemID": 5649,
        "name": "USMom's Talaria Seed",
        "rarity": 999
      },
      {
        "itemID": 5650,
        "name": "Golden Talaria",
        "rarity": 999
      },
      {
        "itemID": 5651,
        "name": "Golden Talaria Seed",
        "rarity": 999
      },
      {
        "itemID": 5652,
        "name": "Heart Necklace",
        "rarity": 999
      },
      {
        "itemID": 5653,
        "name": "Heart Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 5654,
        "name": "Weather Machine - Valentine's",
        "rarity": 999
      },
      {
        "itemID": 5655,
        "name": "Weather Machine - Valentine's Seed",
        "rarity": 999
      },
      {
        "itemID": 5656,
        "name": "Teddy Bear Block",
        "rarity": 999
      },
      {
        "itemID": 5657,
        "name": "Teddy Bear Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5658,
        "name": "Love Birds",
        "rarity": 999
      },
      {
        "itemID": 5659,
        "name": "Love Birds Seed",
        "rarity": 999
      },
      {
        "itemID": 5660,
        "name": "Love Curtain",
        "rarity": 999
      },
      {
        "itemID": 5661,
        "name": "Love Curtain Seed",
        "rarity": 999
      },
      {
        "itemID": 5662,
        "name": "Valentine's Dust",
        "rarity": 999
      },
      {
        "itemID": 5663,
        "name": "Valentine's Dust Seed",
        "rarity": 999
      },
      {
        "itemID": 5664,
        "name": "Valentine's Card",
        "rarity": 999
      },
      {
        "itemID": 5665,
        "name": "Valentine's Card Seed",
        "rarity": 999
      },
      {
        "itemID": 5666,
        "name": "Laser Grid",
        "rarity": 68
      },
      {
        "itemID": 5667,
        "name": "Laser Grid Seed",
        "rarity": 68
      },
      {
        "itemID": 5668,
        "name": "ShockBot - Level 1",
        "rarity": 999
      },
      {
        "itemID": 5669,
        "name": "ShockBot - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 5670,
        "name": "SpikeBot - Level 1",
        "rarity": 999
      },
      {
        "itemID": 5671,
        "name": "SpikeBot - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 5672,
        "name": "Command - Move Left",
        "rarity": 19
      },
      {
        "itemID": 5673,
        "name": "Command - Move Left Seed",
        "rarity": 19
      },
      {
        "itemID": 5674,
        "name": "Command - Move Right",
        "rarity": 19
      },
      {
        "itemID": 5675,
        "name": "Command - Move Right Seed",
        "rarity": 19
      },
      {
        "itemID": 5676,
        "name": "Command - Move Up",
        "rarity": 19
      },
      {
        "itemID": 5677,
        "name": "Command - Move Up Seed",
        "rarity": 19
      },
      {
        "itemID": 5678,
        "name": "Command - Move Down",
        "rarity": 19
      },
      {
        "itemID": 5679,
        "name": "Command - Move Down Seed",
        "rarity": 19
      },
      {
        "itemID": 5680,
        "name": "Command - Pause",
        "rarity": 19
      },
      {
        "itemID": 5681,
        "name": "Command - Pause Seed",
        "rarity": 19
      },
      {
        "itemID": 5682,
        "name": "Command - Basic Shot Left",
        "rarity": 24
      },
      {
        "itemID": 5683,
        "name": "Command - Basic Shot Left Seed",
        "rarity": 24
      },
      {
        "itemID": 5684,
        "name": "Command - Basic Shot Right",
        "rarity": 24
      },
      {
        "itemID": 5685,
        "name": "Command - Basic Shot Right Seed",
        "rarity": 24
      },
      {
        "itemID": 5686,
        "name": "Command - Basic Shot Up",
        "rarity": 24
      },
      {
        "itemID": 5687,
        "name": "Command - Basic Shot Up Seed",
        "rarity": 24
      },
      {
        "itemID": 5688,
        "name": "Command - Basic Shot Down",
        "rarity": 24
      },
      {
        "itemID": 5689,
        "name": "Command - Basic Shot Down Seed",
        "rarity": 24
      },
      {
        "itemID": 5690,
        "name": "Command - Improved Shot Left",
        "rarity": 75
      },
      {
        "itemID": 5691,
        "name": "Command - Improved Shot Left Seed",
        "rarity": 75
      },
      {
        "itemID": 5692,
        "name": "Command - Improved Shot Right",
        "rarity": 75
      },
      {
        "itemID": 5693,
        "name": "Command - Improved Shot Right Seed",
        "rarity": 75
      },
      {
        "itemID": 5694,
        "name": "Command - Improved Shot Up",
        "rarity": 75
      },
      {
        "itemID": 5695,
        "name": "Command - Improved Shot Up Seed",
        "rarity": 75
      },
      {
        "itemID": 5696,
        "name": "Command - Improved Shot Down",
        "rarity": 75
      },
      {
        "itemID": 5697,
        "name": "Command - Improved Shot Down Seed",
        "rarity": 75
      },
      {
        "itemID": 5698,
        "name": "Command - Long Shot Left",
        "rarity": 104
      },
      {
        "itemID": 5699,
        "name": "Command - Long Shot Left Seed",
        "rarity": 104
      },
      {
        "itemID": 5700,
        "name": "Command - Long Shot Right",
        "rarity": 104
      },
      {
        "itemID": 5701,
        "name": "Command - Long Shot Right Seed",
        "rarity": 104
      },
      {
        "itemID": 5702,
        "name": "Command - Long Shot Up",
        "rarity": 104
      },
      {
        "itemID": 5703,
        "name": "Command - Long Shot Up Seed",
        "rarity": 104
      },
      {
        "itemID": 5704,
        "name": "Command - Long Shot Down",
        "rarity": 104
      },
      {
        "itemID": 5705,
        "name": "Command - Long Shot Down Seed",
        "rarity": 104
      },
      {
        "itemID": 5706,
        "name": "Small Seed Pack",
        "rarity": 999
      },
      {
        "itemID": 5707,
        "name": "Small Seed Pack Seed",
        "rarity": 999
      },
      {
        "itemID": 5708,
        "name": "ShooterBot - Level 1",
        "rarity": 999
      },
      {
        "itemID": 5709,
        "name": "ShooterBot - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 5710,
        "name": "FlameBot - Level 1",
        "rarity": 999
      },
      {
        "itemID": 5711,
        "name": "FlameBot - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 5712,
        "name": "Will of the Wild",
        "rarity": 999
      },
      {
        "itemID": 5713,
        "name": "Will of the Wild Seed",
        "rarity": 999
      },
      {
        "itemID": 5714,
        "name": "Giant Pot O' Gold",
        "rarity": 999
      },
      {
        "itemID": 5715,
        "name": "Giant Pot O' Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 5716,
        "name": "Weather Machine - St. Paddy's Day",
        "rarity": 999
      },
      {
        "itemID": 5717,
        "name": "Weather Machine - St. Paddy's Day Seed",
        "rarity": 999
      },
      {
        "itemID": 5718,
        "name": "Drinks Hat",
        "rarity": 999
      },
      {
        "itemID": 5719,
        "name": "Drinks Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 5720,
        "name": "Faerie Face Paint ",
        "rarity": 999
      },
      {
        "itemID": 5721,
        "name": "Faerie Face Paint  Seed",
        "rarity": 999
      },
      {
        "itemID": 5722,
        "name": "Irish Dance Dress",
        "rarity": 999
      },
      {
        "itemID": 5723,
        "name": "Irish Dance Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 5724,
        "name": "Lucky Clover Background",
        "rarity": 999
      },
      {
        "itemID": 5725,
        "name": "Lucky Clover Background Seed",
        "rarity": 999
      },
      {
        "itemID": 5726,
        "name": "Sheet Music: Flute Note",
        "rarity": 18
      },
      {
        "itemID": 5727,
        "name": "Sheet Music: Flute Note Seed",
        "rarity": 18
      },
      {
        "itemID": 5728,
        "name": "Sheet Music: Sharp Flute",
        "rarity": 26
      },
      {
        "itemID": 5729,
        "name": "Sheet Music: Sharp Flute Seed",
        "rarity": 26
      },
      {
        "itemID": 5730,
        "name": "Sheet Music: Flat Flute",
        "rarity": 19
      },
      {
        "itemID": 5731,
        "name": "Sheet Music: Flat Flute Seed",
        "rarity": 19
      },
      {
        "itemID": 5732,
        "name": "Harp",
        "rarity": 999
      },
      {
        "itemID": 5733,
        "name": "Harp Seed",
        "rarity": 999
      },
      {
        "itemID": 5734,
        "name": "Giant's Causeway Block",
        "rarity": 999
      },
      {
        "itemID": 5735,
        "name": "Giant's Causeway Block Seed",
        "rarity": 999
      },
      {
        "itemID": 5736,
        "name": "Rainbowfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5737,
        "name": "Rainbowfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5738,
        "name": "Rainbow Cape",
        "rarity": 999
      },
      {
        "itemID": 5739,
        "name": "Rainbow Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 5740,
        "name": "Magical Rainbow Fishing Rod",
        "rarity": 999
      },
      {
        "itemID": 5741,
        "name": "Magical Rainbow Fishing Rod Seed",
        "rarity": 999
      },
      {
        "itemID": 5742,
        "name": "Paper Dividing Wall",
        "rarity": 20
      },
      {
        "itemID": 5743,
        "name": "Paper Dividing Wall Seed",
        "rarity": 20
      },
      {
        "itemID": 5744,
        "name": "Decorative Paper Wall",
        "rarity": 999
      },
      {
        "itemID": 5745,
        "name": "Decorative Paper Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 5746,
        "name": "Chinese Arch",
        "rarity": 25
      },
      {
        "itemID": 5747,
        "name": "Chinese Arch Seed",
        "rarity": 25
      },
      {
        "itemID": 5748,
        "name": "Coin Door",
        "rarity": 30
      },
      {
        "itemID": 5749,
        "name": "Coin Door Seed",
        "rarity": 30
      },
      {
        "itemID": 5750,
        "name": "Fortune Cookie",
        "rarity": 45
      },
      {
        "itemID": 5751,
        "name": "Fortune Cookie Seed",
        "rarity": 45
      },
      {
        "itemID": 5752,
        "name": "Lucky Token",
        "rarity": 1
      },
      {
        "itemID": 5753,
        "name": "Lucky Token Seed",
        "rarity": 1
      },
      {
        "itemID": 5754,
        "name": "Draconic Wings",
        "rarity": 999
      },
      {
        "itemID": 5755,
        "name": "Draconic Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 5756,
        "name": "Red Dragon Head",
        "rarity": 999
      },
      {
        "itemID": 5757,
        "name": "Red Dragon Head Seed",
        "rarity": 999
      },
      {
        "itemID": 5758,
        "name": "Red Dragon Body",
        "rarity": 999
      },
      {
        "itemID": 5759,
        "name": "Red Dragon Body Seed",
        "rarity": 999
      },
      {
        "itemID": 5760,
        "name": "Red Dragon Legs",
        "rarity": 999
      },
      {
        "itemID": 5761,
        "name": "Red Dragon Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 5762,
        "name": "Red Dragon Tail",
        "rarity": 999
      },
      {
        "itemID": 5763,
        "name": "Red Dragon Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 5764,
        "name": "Oriental Spice Spray",
        "rarity": 999
      },
      {
        "itemID": 5765,
        "name": "Oriental Spice Spray Seed",
        "rarity": 999
      },
      {
        "itemID": 5766,
        "name": "Chinese Fireworks",
        "rarity": 999
      },
      {
        "itemID": 5767,
        "name": "Chinese Fireworks Seed",
        "rarity": 999
      },
      {
        "itemID": 5768,
        "name": "Chinese Crackers",
        "rarity": 999
      },
      {
        "itemID": 5769,
        "name": "Chinese Crackers Seed",
        "rarity": 999
      },
      {
        "itemID": 5770,
        "name": "Growmoji World Lock",
        "rarity": 999
      },
      {
        "itemID": 5771,
        "name": "Growmoji World Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 5772,
        "name": "Growmoji Grow",
        "rarity": 999
      },
      {
        "itemID": 5773,
        "name": "Growmoji Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5774,
        "name": "Growmoji Gems",
        "rarity": 999
      },
      {
        "itemID": 5775,
        "name": "Growmoji Gems Seed",
        "rarity": 999
      },
      {
        "itemID": 5776,
        "name": "Growmoji Growtoken",
        "rarity": 999
      },
      {
        "itemID": 5777,
        "name": "Growmoji Growtoken Seed",
        "rarity": 999
      },
      {
        "itemID": 5778,
        "name": "Growmoji Vend",
        "rarity": 999
      },
      {
        "itemID": 5779,
        "name": "Growmoji Vend Seed",
        "rarity": 999
      },
      {
        "itemID": 5780,
        "name": "ShooterBot - Level 2",
        "rarity": 999
      },
      {
        "itemID": 5781,
        "name": "ShooterBot - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5782,
        "name": "ShooterBot - Level 3",
        "rarity": 999
      },
      {
        "itemID": 5783,
        "name": "ShooterBot - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5784,
        "name": "ShooterBot - Level 4",
        "rarity": 999
      },
      {
        "itemID": 5785,
        "name": "ShooterBot - Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5786,
        "name": "FlameBot - Level 2",
        "rarity": 999
      },
      {
        "itemID": 5787,
        "name": "FlameBot - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5788,
        "name": "FlameBot - Level 3",
        "rarity": 999
      },
      {
        "itemID": 5789,
        "name": "FlameBot - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5790,
        "name": "FlameBot - Level 4",
        "rarity": 999
      },
      {
        "itemID": 5791,
        "name": "FlameBot - Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5792,
        "name": "ShockBot - Level 2",
        "rarity": 999
      },
      {
        "itemID": 5793,
        "name": "ShockBot - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5794,
        "name": "ShockBot - Level 3",
        "rarity": 999
      },
      {
        "itemID": 5795,
        "name": "ShockBot - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5796,
        "name": "ShockBot - Level 4",
        "rarity": 999
      },
      {
        "itemID": 5797,
        "name": "ShockBot - Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5798,
        "name": "SpikeBot - Level 2",
        "rarity": 999
      },
      {
        "itemID": 5799,
        "name": "SpikeBot - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 5800,
        "name": "SpikeBot - Level 3",
        "rarity": 999
      },
      {
        "itemID": 5801,
        "name": "SpikeBot - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 5802,
        "name": "SpikeBot - Level 4",
        "rarity": 999
      },
      {
        "itemID": 5803,
        "name": "SpikeBot - Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 5804,
        "name": "Growmoji Oops",
        "rarity": 999
      },
      {
        "itemID": 5805,
        "name": "Growmoji Oops Seed",
        "rarity": 999
      },
      {
        "itemID": 5806,
        "name": "Growmoji Sleep",
        "rarity": 999
      },
      {
        "itemID": 5807,
        "name": "Growmoji Sleep Seed",
        "rarity": 999
      },
      {
        "itemID": 5808,
        "name": "Growmoji Punch",
        "rarity": 999
      },
      {
        "itemID": 5809,
        "name": "Growmoji Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 5810,
        "name": "Growmoji Broken Heart",
        "rarity": 999
      },
      {
        "itemID": 5811,
        "name": "Growmoji Broken Heart Seed",
        "rarity": 999
      },
      {
        "itemID": 5812,
        "name": "Growmoji Cry",
        "rarity": 999
      },
      {
        "itemID": 5813,
        "name": "Growmoji Cry Seed",
        "rarity": 999
      },
      {
        "itemID": 5814,
        "name": "Guild Lock",
        "rarity": 999
      },
      {
        "itemID": 5815,
        "name": "Guild Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 5816,
        "name": "Guild Key",
        "rarity": 999
      },
      {
        "itemID": 5817,
        "name": "Guild Key Seed",
        "rarity": 999
      },
      {
        "itemID": 5818,
        "name": "Guild Entrance - Normal",
        "rarity": 999
      },
      {
        "itemID": 5819,
        "name": "Guild Entrance - Normal Seed",
        "rarity": 999
      },
      {
        "itemID": 5820,
        "name": "Guild Entrance - Ornate",
        "rarity": 999
      },
      {
        "itemID": 5821,
        "name": "Guild Entrance - Ornate Seed",
        "rarity": 999
      },
      {
        "itemID": 5822,
        "name": "Guild Banner - Normal (Horizontal)",
        "rarity": 999
      },
      {
        "itemID": 5823,
        "name": "Guild Banner - Normal (Horizontal) Seed",
        "rarity": 999
      },
      {
        "itemID": 5824,
        "name": "Guild Banner - Ornate (Horizontal)",
        "rarity": 999
      },
      {
        "itemID": 5825,
        "name": "Guild Banner - Ornate (Horizontal) Seed",
        "rarity": 999
      },
      {
        "itemID": 5826,
        "name": "Guild Banner - Normal (Vertical)",
        "rarity": 999
      },
      {
        "itemID": 5827,
        "name": "Guild Banner - Normal (Vertical) Seed",
        "rarity": 999
      },
      {
        "itemID": 5828,
        "name": "Guild Banner - Ornate (Vertical)",
        "rarity": 999
      },
      {
        "itemID": 5829,
        "name": "Guild Banner - Ornate (Vertical) Seed",
        "rarity": 999
      },
      {
        "itemID": 5830,
        "name": "Guild Flag Pole - Spear",
        "rarity": 999
      },
      {
        "itemID": 5831,
        "name": "Guild Flag Pole - Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 5832,
        "name": "Guild Flag Pole - Wings",
        "rarity": 999
      },
      {
        "itemID": 5833,
        "name": "Guild Flag Pole - Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 5834,
        "name": "Guild Flag - Tatters",
        "rarity": 999
      },
      {
        "itemID": 5835,
        "name": "Guild Flag - Tatters Seed",
        "rarity": 999
      },
      {
        "itemID": 5836,
        "name": "Guild Flag - Tatters (Filigree)",
        "rarity": 999
      },
      {
        "itemID": 5837,
        "name": "Guild Flag - Tatters (Filigree) Seed",
        "rarity": 999
      },
      {
        "itemID": 5838,
        "name": "Guild Flag - Tatters (Harlequin)",
        "rarity": 999
      },
      {
        "itemID": 5839,
        "name": "Guild Flag - Tatters (Harlequin) Seed",
        "rarity": 999
      },
      {
        "itemID": 5840,
        "name": "Guild Flag - Tatters (Plaid)",
        "rarity": 999
      },
      {
        "itemID": 5841,
        "name": "Guild Flag - Tatters (Plaid) Seed",
        "rarity": 999
      },
      {
        "itemID": 5842,
        "name": "Guild Flag - Tatters (Cross)",
        "rarity": 999
      },
      {
        "itemID": 5843,
        "name": "Guild Flag - Tatters (Cross) Seed",
        "rarity": 999
      },
      {
        "itemID": 5844,
        "name": "Guild Flag - Tatters (Slant)",
        "rarity": 999
      },
      {
        "itemID": 5845,
        "name": "Guild Flag - Tatters (Slant) Seed",
        "rarity": 999
      },
      {
        "itemID": 5846,
        "name": "Guild Flag - Tatters (Panel)",
        "rarity": 999
      },
      {
        "itemID": 5847,
        "name": "Guild Flag - Tatters (Panel) Seed",
        "rarity": 999
      },
      {
        "itemID": 5848,
        "name": "Guild Flag - Tatters (Stripe)",
        "rarity": 999
      },
      {
        "itemID": 5849,
        "name": "Guild Flag - Tatters (Stripe) Seed",
        "rarity": 999
      },
      {
        "itemID": 5850,
        "name": "Guild Flag - Tatters (Flame)",
        "rarity": 999
      },
      {
        "itemID": 5851,
        "name": "Guild Flag - Tatters (Flame) Seed",
        "rarity": 999
      },
      {
        "itemID": 5852,
        "name": "Guild Flag - Tatters (Division)",
        "rarity": 999
      },
      {
        "itemID": 5853,
        "name": "Guild Flag - Tatters (Division) Seed",
        "rarity": 999
      },
      {
        "itemID": 5854,
        "name": "Guild Flag - Arrow",
        "rarity": 999
      },
      {
        "itemID": 5855,
        "name": "Guild Flag - Arrow Seed",
        "rarity": 999
      },
      {
        "itemID": 5856,
        "name": "Guild Flag - Arrow (Filigree)",
        "rarity": 999
      },
      {
        "itemID": 5857,
        "name": "Guild Flag - Arrow (Filigree) Seed",
        "rarity": 999
      },
      {
        "itemID": 5858,
        "name": "Guild Flag - Arrow (Harlequin)",
        "rarity": 999
      },
      {
        "itemID": 5859,
        "name": "Guild Flag - Arrow (Harlequin) Seed",
        "rarity": 999
      },
      {
        "itemID": 5860,
        "name": "Guild Flag - Arrow (Plaid)",
        "rarity": 999
      },
      {
        "itemID": 5861,
        "name": "Guild Flag - Arrow (Plaid) Seed",
        "rarity": 999
      },
      {
        "itemID": 5862,
        "name": "Guild Flag - Arrow (Cross)",
        "rarity": 999
      },
      {
        "itemID": 5863,
        "name": "Guild Flag - Arrow (Cross) Seed",
        "rarity": 999
      },
      {
        "itemID": 5864,
        "name": "Guild Flag - Arrow (Slant)",
        "rarity": 999
      },
      {
        "itemID": 5865,
        "name": "Guild Flag - Arrow (Slant) Seed",
        "rarity": 999
      },
      {
        "itemID": 5866,
        "name": "Guild Flag - Arrow (Panel)",
        "rarity": 999
      },
      {
        "itemID": 5867,
        "name": "Guild Flag - Arrow (Panel) Seed",
        "rarity": 999
      },
      {
        "itemID": 5868,
        "name": "Guild Flag - Arrow (Stripe)",
        "rarity": 999
      },
      {
        "itemID": 5869,
        "name": "Guild Flag - Arrow (Stripe) Seed",
        "rarity": 999
      },
      {
        "itemID": 5870,
        "name": "Guild Flag - Arrow (Flame)",
        "rarity": 999
      },
      {
        "itemID": 5871,
        "name": "Guild Flag - Arrow (Flame) Seed",
        "rarity": 999
      },
      {
        "itemID": 5872,
        "name": "Guild Flag - Arrow (Division)",
        "rarity": 999
      },
      {
        "itemID": 5873,
        "name": "Guild Flag - Arrow (Division) Seed",
        "rarity": 999
      },
      {
        "itemID": 5874,
        "name": "Guild Flag - Wave",
        "rarity": 999
      },
      {
        "itemID": 5875,
        "name": "Guild Flag - Wave Seed",
        "rarity": 999
      },
      {
        "itemID": 5876,
        "name": "Guild Flag - Wave (Filigree)",
        "rarity": 999
      },
      {
        "itemID": 5877,
        "name": "Guild Flag - Wave (Filigree) Seed",
        "rarity": 999
      },
      {
        "itemID": 5878,
        "name": "Guild Flag - Wave (Harlequin)",
        "rarity": 999
      },
      {
        "itemID": 5879,
        "name": "Guild Flag - Wave (Harlequin) Seed",
        "rarity": 999
      },
      {
        "itemID": 5880,
        "name": "Guild Flag - Wave (Plaid)",
        "rarity": 999
      },
      {
        "itemID": 5881,
        "name": "Guild Flag - Wave (Plaid) Seed",
        "rarity": 999
      },
      {
        "itemID": 5882,
        "name": "Guild Flag - Wave (Cross)",
        "rarity": 999
      },
      {
        "itemID": 5883,
        "name": "Guild Flag - Wave (Cross) Seed",
        "rarity": 999
      },
      {
        "itemID": 5884,
        "name": "Guild Flag - Wave (Slant)",
        "rarity": 999
      },
      {
        "itemID": 5885,
        "name": "Guild Flag - Wave (Slant) Seed",
        "rarity": 999
      },
      {
        "itemID": 5886,
        "name": "Guild Flag - Wave (Panel)",
        "rarity": 999
      },
      {
        "itemID": 5887,
        "name": "Guild Flag - Wave (Panel) Seed",
        "rarity": 999
      },
      {
        "itemID": 5888,
        "name": "Guild Flag - Wave (Stripe)",
        "rarity": 999
      },
      {
        "itemID": 5889,
        "name": "Guild Flag - Wave (Stripe) Seed",
        "rarity": 999
      },
      {
        "itemID": 5890,
        "name": "Guild Flag - Wave (Flame)",
        "rarity": 999
      },
      {
        "itemID": 5891,
        "name": "Guild Flag - Wave (Flame) Seed",
        "rarity": 999
      },
      {
        "itemID": 5892,
        "name": "Guild Flag - Wave (Division)",
        "rarity": 999
      },
      {
        "itemID": 5893,
        "name": "Guild Flag - Wave (Division) Seed",
        "rarity": 999
      },
      {
        "itemID": 5894,
        "name": "Guild Flag - Peak",
        "rarity": 999
      },
      {
        "itemID": 5895,
        "name": "Guild Flag - Peak Seed",
        "rarity": 999
      },
      {
        "itemID": 5896,
        "name": "Guild Flag - Peak (Filigree)",
        "rarity": 999
      },
      {
        "itemID": 5897,
        "name": "Guild Flag - Peak (Filigree) Seed",
        "rarity": 999
      },
      {
        "itemID": 5898,
        "name": "Guild Flag - Peak (Harlequin)",
        "rarity": 999
      },
      {
        "itemID": 5899,
        "name": "Guild Flag - Peak (Harlequin) Seed",
        "rarity": 999
      },
      {
        "itemID": 5900,
        "name": "Guild Flag - Peak (Plaid)",
        "rarity": 999
      },
      {
        "itemID": 5901,
        "name": "Guild Flag - Peak (Plaid) Seed",
        "rarity": 999
      },
      {
        "itemID": 5902,
        "name": "Guild Flag - Peak (Cross)",
        "rarity": 999
      },
      {
        "itemID": 5903,
        "name": "Guild Flag - Peak (Cross) Seed",
        "rarity": 999
      },
      {
        "itemID": 5904,
        "name": "Guild Flag - Peak (Slant)",
        "rarity": 999
      },
      {
        "itemID": 5905,
        "name": "Guild Flag - Peak (Slant) Seed",
        "rarity": 999
      },
      {
        "itemID": 5906,
        "name": "Guild Flag - Peak (Panel)",
        "rarity": 999
      },
      {
        "itemID": 5907,
        "name": "Guild Flag - Peak (Panel) Seed",
        "rarity": 999
      },
      {
        "itemID": 5908,
        "name": "Guild Flag - Peak (Stripe)",
        "rarity": 999
      },
      {
        "itemID": 5909,
        "name": "Guild Flag - Peak (Stripe) Seed",
        "rarity": 999
      },
      {
        "itemID": 5910,
        "name": "Guild Flag - Peak (Flame)",
        "rarity": 999
      },
      {
        "itemID": 5911,
        "name": "Guild Flag - Peak (Flame) Seed",
        "rarity": 999
      },
      {
        "itemID": 5912,
        "name": "Guild Flag - Peak (Division)",
        "rarity": 999
      },
      {
        "itemID": 5913,
        "name": "Guild Flag - Peak (Division) Seed",
        "rarity": 999
      },
      {
        "itemID": 5914,
        "name": "Guild Flag - Shield",
        "rarity": 999
      },
      {
        "itemID": 5915,
        "name": "Guild Flag - Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 5916,
        "name": "Guild Flag - Shield (Filigree)",
        "rarity": 999
      },
      {
        "itemID": 5917,
        "name": "Guild Flag - Shield (Filigree) Seed",
        "rarity": 999
      },
      {
        "itemID": 5918,
        "name": "Guild Flag - Shield (Harlequin)",
        "rarity": 999
      },
      {
        "itemID": 5919,
        "name": "Guild Flag - Shield (Harlequin) Seed",
        "rarity": 999
      },
      {
        "itemID": 5920,
        "name": "Guild Flag - Shield (Plaid)",
        "rarity": 999
      },
      {
        "itemID": 5921,
        "name": "Guild Flag - Shield (Plaid) Seed",
        "rarity": 999
      },
      {
        "itemID": 5922,
        "name": "Guild Flag - Shield (Cross)",
        "rarity": 999
      },
      {
        "itemID": 5923,
        "name": "Guild Flag - Shield (Cross) Seed",
        "rarity": 999
      },
      {
        "itemID": 5924,
        "name": "Guild Flag - Shield (Slant)",
        "rarity": 999
      },
      {
        "itemID": 5925,
        "name": "Guild Flag - Shield (Slant) Seed",
        "rarity": 999
      },
      {
        "itemID": 5926,
        "name": "Guild Flag - Shield (Panel)",
        "rarity": 999
      },
      {
        "itemID": 5927,
        "name": "Guild Flag - Shield (Panel) Seed",
        "rarity": 999
      },
      {
        "itemID": 5928,
        "name": "Guild Flag - Shield (Stripe)",
        "rarity": 999
      },
      {
        "itemID": 5929,
        "name": "Guild Flag - Shield (Stripe) Seed",
        "rarity": 999
      },
      {
        "itemID": 5930,
        "name": "Guild Flag - Shield (Flame)",
        "rarity": 999
      },
      {
        "itemID": 5931,
        "name": "Guild Flag - Shield (Flame) Seed",
        "rarity": 999
      },
      {
        "itemID": 5932,
        "name": "Guild Flag - Shield (Division)",
        "rarity": 999
      },
      {
        "itemID": 5933,
        "name": "Guild Flag - Shield (Division) Seed",
        "rarity": 999
      },
      {
        "itemID": 5934,
        "name": "Guild Potion - Geiger",
        "rarity": 999
      },
      {
        "itemID": 5935,
        "name": "Guild Potion - Geiger Seed",
        "rarity": 999
      },
      {
        "itemID": 5936,
        "name": "Guild Potion - Grow",
        "rarity": 999
      },
      {
        "itemID": 5937,
        "name": "Guild Potion - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 5938,
        "name": "Guild Potion - Gems",
        "rarity": 999
      },
      {
        "itemID": 5939,
        "name": "Guild Potion - Gems Seed",
        "rarity": 999
      },
      {
        "itemID": 5940,
        "name": "Guild Potion - Big Fish",
        "rarity": 999
      },
      {
        "itemID": 5941,
        "name": "Guild Potion - Big Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 5942,
        "name": "Guild Potion - Blocks",
        "rarity": 999
      },
      {
        "itemID": 5943,
        "name": "Guild Potion - Blocks Seed",
        "rarity": 999
      },
      {
        "itemID": 5944,
        "name": "Guild Potion: White Mixer",
        "rarity": 999
      },
      {
        "itemID": 5945,
        "name": "Guild Potion: White Mixer Seed",
        "rarity": 999
      },
      {
        "itemID": 5946,
        "name": "Guild Potion: Black Mixer",
        "rarity": 999
      },
      {
        "itemID": 5947,
        "name": "Guild Potion: Black Mixer Seed",
        "rarity": 999
      },
      {
        "itemID": 5948,
        "name": "Gold Guild Chest",
        "rarity": 999
      },
      {
        "itemID": 5949,
        "name": "Gold Guild Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 5950,
        "name": "Silver Guild Chest",
        "rarity": 999
      },
      {
        "itemID": 5951,
        "name": "Silver Guild Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 5952,
        "name": "Bronze Guild Chest",
        "rarity": 999
      },
      {
        "itemID": 5953,
        "name": "Bronze Guild Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 5954,
        "name": "Guild Chest",
        "rarity": 999
      },
      {
        "itemID": 5955,
        "name": "Guild Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 5956,
        "name": "Ubisoft",
        "rarity": 999
      },
      {
        "itemID": 5957,
        "name": "Ubisoft Seed",
        "rarity": 999
      },
      {
        "itemID": 5958,
        "name": "Epoch Machine",
        "rarity": 999
      },
      {
        "itemID": 5959,
        "name": "Epoch Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 5960,
        "name": "Bunny Toy",
        "rarity": 999
      },
      {
        "itemID": 5961,
        "name": "Bunny Toy Seed",
        "rarity": 999
      },
      {
        "itemID": 5962,
        "name": "Pastel Dress - Blue",
        "rarity": 18
      },
      {
        "itemID": 5963,
        "name": "Pastel Dress - Blue Seed",
        "rarity": 18
      },
      {
        "itemID": 5964,
        "name": "Pastel Dress - Pink",
        "rarity": 7
      },
      {
        "itemID": 5965,
        "name": "Pastel Dress - Pink Seed",
        "rarity": 7
      },
      {
        "itemID": 5966,
        "name": "Pastel Dress - Purple",
        "rarity": 22
      },
      {
        "itemID": 5967,
        "name": "Pastel Dress - Purple Seed",
        "rarity": 22
      },
      {
        "itemID": 5968,
        "name": "Pastel Dress - Orange",
        "rarity": 12
      },
      {
        "itemID": 5969,
        "name": "Pastel Dress - Orange Seed",
        "rarity": 12
      },
      {
        "itemID": 5970,
        "name": "Pastel Dress - Yellow",
        "rarity": 9
      },
      {
        "itemID": 5971,
        "name": "Pastel Dress - Yellow Seed",
        "rarity": 9
      },
      {
        "itemID": 5972,
        "name": "Pastel Dress - Aqua",
        "rarity": 8
      },
      {
        "itemID": 5973,
        "name": "Pastel Dress - Aqua Seed",
        "rarity": 8
      },
      {
        "itemID": 5974,
        "name": "Pastel Dress - Green",
        "rarity": 8
      },
      {
        "itemID": 5975,
        "name": "Pastel Dress - Green Seed",
        "rarity": 8
      },
      {
        "itemID": 5976,
        "name": "Pastel Tie",
        "rarity": 27
      },
      {
        "itemID": 5977,
        "name": "Pastel Tie Seed",
        "rarity": 27
      },
      {
        "itemID": 5978,
        "name": "Egg Shell Spikes",
        "rarity": 9
      },
      {
        "itemID": 5979,
        "name": "Egg Shell Spikes Seed",
        "rarity": 9
      },
      {
        "itemID": 5980,
        "name": "Bunny Lock",
        "rarity": 999
      },
      {
        "itemID": 5981,
        "name": "Bunny Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 5982,
        "name": "Hidden Eggs",
        "rarity": 21
      },
      {
        "itemID": 5983,
        "name": "Hidden Eggs Seed",
        "rarity": 21
      },
      {
        "itemID": 5984,
        "name": "Chocolate Bunny",
        "rarity": 999
      },
      {
        "itemID": 5985,
        "name": "Chocolate Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 5986,
        "name": "Totally Legit Bunnyfish Leash",
        "rarity": 999
      },
      {
        "itemID": 5987,
        "name": "Totally Legit Bunnyfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 5988,
        "name": "Totally Legit Bunny Ears",
        "rarity": 999
      },
      {
        "itemID": 5989,
        "name": "Totally Legit Bunny Ears Seed",
        "rarity": 999
      },
      {
        "itemID": 5990,
        "name": "Magic Bell",
        "rarity": 95
      },
      {
        "itemID": 5991,
        "name": "Magic Bell Seed",
        "rarity": 95
      },
      {
        "itemID": 5992,
        "name": "Game Egg",
        "rarity": 1
      },
      {
        "itemID": 5993,
        "name": "Game Egg Seed",
        "rarity": 1
      },
      {
        "itemID": 5994,
        "name": "Missing Game Egg",
        "rarity": 999
      },
      {
        "itemID": 5995,
        "name": "Missing Game Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 5996,
        "name": "Carried Game Egg",
        "rarity": 999
      },
      {
        "itemID": 5997,
        "name": "Carried Game Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 5998,
        "name": "Game Goal Egg Basket",
        "rarity": 999
      },
      {
        "itemID": 5999,
        "name": "Game Goal Egg Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 6000,
        "name": "Game Grave Egg",
        "rarity": 999
      },
      {
        "itemID": 6001,
        "name": "Game Grave Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 6002,
        "name": "Growmoji Bunny",
        "rarity": 999
      },
      {
        "itemID": 6003,
        "name": "Growmoji Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 6004,
        "name": "Bear Spirit",
        "rarity": 999
      },
      {
        "itemID": 6005,
        "name": "Bear Spirit Seed",
        "rarity": 999
      },
      {
        "itemID": 6006,
        "name": "Rainbow Hair",
        "rarity": 999
      },
      {
        "itemID": 6007,
        "name": "Rainbow Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 6008,
        "name": "Intergalactic Warrior Hair",
        "rarity": 999
      },
      {
        "itemID": 6009,
        "name": "Intergalactic Warrior Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 6010,
        "name": "Egg Rescue Ticket",
        "rarity": 999
      },
      {
        "itemID": 6011,
        "name": "Egg Rescue Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 6012,
        "name": "Dumb Leader",
        "rarity": 999
      },
      {
        "itemID": 6013,
        "name": "Dumb Leader Seed",
        "rarity": 999
      },
      {
        "itemID": 6014,
        "name": "WOTD Trophy 2018",
        "rarity": 999
      },
      {
        "itemID": 6015,
        "name": "WOTD Trophy 2018 Seed",
        "rarity": 999
      },
      {
        "itemID": 6016,
        "name": "GrowScan 9000",
        "rarity": 999
      },
      {
        "itemID": 6017,
        "name": "GrowScan 9000 Seed",
        "rarity": 999
      },
      {
        "itemID": 6018,
        "name": "Element - Earth",
        "rarity": 999
      },
      {
        "itemID": 6019,
        "name": "Element - Earth Seed",
        "rarity": 999
      },
      {
        "itemID": 6020,
        "name": "Element - Fire",
        "rarity": 999
      },
      {
        "itemID": 6021,
        "name": "Element - Fire Seed",
        "rarity": 999
      },
      {
        "itemID": 6022,
        "name": "Element - Wind",
        "rarity": 999
      },
      {
        "itemID": 6023,
        "name": "Element - Wind Seed",
        "rarity": 999
      },
      {
        "itemID": 6024,
        "name": "Element - Water",
        "rarity": 999
      },
      {
        "itemID": 6025,
        "name": "Element - Water Seed",
        "rarity": 999
      },
      {
        "itemID": 6026,
        "name": "Whip of Truth",
        "rarity": 999
      },
      {
        "itemID": 6027,
        "name": "Whip of Truth Seed",
        "rarity": 999
      },
      {
        "itemID": 6028,
        "name": "Ring Of Shrinking",
        "rarity": 999
      },
      {
        "itemID": 6029,
        "name": "Ring Of Shrinking Seed",
        "rarity": 999
      },
      {
        "itemID": 6030,
        "name": "Sheet Music: Spanish Guitar Note",
        "rarity": 18
      },
      {
        "itemID": 6031,
        "name": "Sheet Music: Spanish Guitar Note Seed",
        "rarity": 18
      },
      {
        "itemID": 6032,
        "name": "Sheet Music: Sharp Spanish Guitar",
        "rarity": 26
      },
      {
        "itemID": 6033,
        "name": "Sheet Music: Sharp Spanish Guitar Seed",
        "rarity": 26
      },
      {
        "itemID": 6034,
        "name": "Sheet Music: Flat Spanish Guitar",
        "rarity": 19
      },
      {
        "itemID": 6035,
        "name": "Sheet Music: Flat Spanish Guitar Seed",
        "rarity": 19
      },
      {
        "itemID": 6036,
        "name": "Axolotl Leash",
        "rarity": 999
      },
      {
        "itemID": 6037,
        "name": "Axolotl Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 6038,
        "name": "Riding Axolotl",
        "rarity": 999
      },
      {
        "itemID": 6039,
        "name": "Riding Axolotl Seed",
        "rarity": 999
      },
      {
        "itemID": 6040,
        "name": "Riding Fiesta Axolotl",
        "rarity": 999
      },
      {
        "itemID": 6041,
        "name": "Riding Fiesta Axolotl Seed",
        "rarity": 999
      },
      {
        "itemID": 6042,
        "name": "Feather Headdress",
        "rarity": 999
      },
      {
        "itemID": 6043,
        "name": "Feather Headdress Seed",
        "rarity": 999
      },
      {
        "itemID": 6044,
        "name": "Fiesta Mariachi Guitar",
        "rarity": 999
      },
      {
        "itemID": 6045,
        "name": "Fiesta Mariachi Guitar Seed",
        "rarity": 999
      },
      {
        "itemID": 6046,
        "name": "Magnifico Carne Guacamole - Bueno",
        "rarity": 999
      },
      {
        "itemID": 6047,
        "name": "Magnifico Carne Guacamole - Bueno Seed",
        "rarity": 999
      },
      {
        "itemID": 6048,
        "name": "Magnifico Carne Guacamole - Sabroso",
        "rarity": 999
      },
      {
        "itemID": 6049,
        "name": "Magnifico Carne Guacamole - Sabroso Seed",
        "rarity": 999
      },
      {
        "itemID": 6050,
        "name": "Magnifico Carne Guacamole - Perfecto",
        "rarity": 999
      },
      {
        "itemID": 6051,
        "name": "Magnifico Carne Guacamole - Perfecto Seed",
        "rarity": 999
      },
      {
        "itemID": 6052,
        "name": "Growmoji Cactus",
        "rarity": 999
      },
      {
        "itemID": 6053,
        "name": "Growmoji Cactus Seed",
        "rarity": 999
      },
      {
        "itemID": 6054,
        "name": "Pinata Lasso",
        "rarity": 999
      },
      {
        "itemID": 6055,
        "name": "Pinata Lasso Seed",
        "rarity": 999
      },
      {
        "itemID": 6056,
        "name": "Bandolier",
        "rarity": 999
      },
      {
        "itemID": 6057,
        "name": "Bandolier Seed",
        "rarity": 999
      },
      {
        "itemID": 6058,
        "name": "Dual Six-Shooters",
        "rarity": 999
      },
      {
        "itemID": 6059,
        "name": "Dual Six-Shooters Seed",
        "rarity": 999
      },
      {
        "itemID": 6060,
        "name": "Dark Spirit Board",
        "rarity": 999
      },
      {
        "itemID": 6061,
        "name": "Dark Spirit Board Seed",
        "rarity": 999
      },
      {
        "itemID": 6062,
        "name": "Spirit Board",
        "rarity": 53
      },
      {
        "itemID": 6063,
        "name": "Spirit Board Seed",
        "rarity": 53
      },
      {
        "itemID": 6064,
        "name": "Spirit Guide",
        "rarity": 999
      },
      {
        "itemID": 6065,
        "name": "Spirit Guide Seed",
        "rarity": 999
      },
      {
        "itemID": 6066,
        "name": "Ghost-Be-Gone",
        "rarity": 999
      },
      {
        "itemID": 6067,
        "name": "Ghost-Be-Gone Seed",
        "rarity": 999
      },
      {
        "itemID": 6068,
        "name": "Dumpster",
        "rarity": 999
      },
      {
        "itemID": 6069,
        "name": "Dumpster Seed",
        "rarity": 999
      },
      {
        "itemID": 6070,
        "name": "White Brick Wall",
        "rarity": 999
      },
      {
        "itemID": 6071,
        "name": "White Brick Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 6072,
        "name": "Fuse Box",
        "rarity": 999
      },
      {
        "itemID": 6073,
        "name": "Fuse Box Seed",
        "rarity": 999
      },
      {
        "itemID": 6074,
        "name": "Otherworldly Block",
        "rarity": 999
      },
      {
        "itemID": 6075,
        "name": "Otherworldly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6076,
        "name": "Otherworldly Warning Light",
        "rarity": 999
      },
      {
        "itemID": 6077,
        "name": "Otherworldly Warning Light Seed",
        "rarity": 999
      },
      {
        "itemID": 6078,
        "name": "Boss Goo",
        "rarity": 999
      },
      {
        "itemID": 6079,
        "name": "Boss Goo Seed",
        "rarity": 999
      },
      {
        "itemID": 6080,
        "name": "Mind-Ghost-In-A-Jar",
        "rarity": 999
      },
      {
        "itemID": 6081,
        "name": "Mind-Ghost-In-A-Jar Seed",
        "rarity": 999
      },
      {
        "itemID": 6082,
        "name": "Ghost Trap",
        "rarity": 74
      },
      {
        "itemID": 6083,
        "name": "Ghost Trap Seed",
        "rarity": 74
      },
      {
        "itemID": 6084,
        "name": "Containment Field Power Node",
        "rarity": 999
      },
      {
        "itemID": 6085,
        "name": "Containment Field Power Node Seed",
        "rarity": 999
      },
      {
        "itemID": 6086,
        "name": "Neutron Power Glove",
        "rarity": 999
      },
      {
        "itemID": 6087,
        "name": "Neutron Power Glove Seed",
        "rarity": 999
      },
      {
        "itemID": 6088,
        "name": "White Brick Pillar",
        "rarity": 999
      },
      {
        "itemID": 6089,
        "name": "White Brick Pillar Seed",
        "rarity": 999
      },
      {
        "itemID": 6090,
        "name": "Neutron Focus Core",
        "rarity": 999
      },
      {
        "itemID": 6091,
        "name": "Neutron Focus Core Seed",
        "rarity": 999
      },
      {
        "itemID": 6092,
        "name": "Foil Hat",
        "rarity": 999
      },
      {
        "itemID": 6093,
        "name": "Foil Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 6094,
        "name": "Summer Event Player Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 6095,
        "name": "Summer Event Player Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 6096,
        "name": "EctoJuicer",
        "rarity": 999
      },
      {
        "itemID": 6097,
        "name": "EctoJuicer Seed",
        "rarity": 999
      },
      {
        "itemID": 6098,
        "name": "Bamboo Frame",
        "rarity": 999
      },
      {
        "itemID": 6099,
        "name": "Bamboo Frame Seed",
        "rarity": 999
      },
      {
        "itemID": 6100,
        "name": "Pineapple Koa Lantern",
        "rarity": 999
      },
      {
        "itemID": 6101,
        "name": "Pineapple Koa Lantern Seed",
        "rarity": 999
      },
      {
        "itemID": 6102,
        "name": "Pineapple Sign",
        "rarity": 999
      },
      {
        "itemID": 6103,
        "name": "Pineapple Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 6104,
        "name": "Pineapple Tiki Door",
        "rarity": 999
      },
      {
        "itemID": 6105,
        "name": "Pineapple Tiki Door Seed",
        "rarity": 999
      },
      {
        "itemID": 6106,
        "name": "Pineapple Fish Leash",
        "rarity": 999
      },
      {
        "itemID": 6107,
        "name": "Pineapple Fish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 6108,
        "name": "Pineapple Tiki Mask",
        "rarity": 999
      },
      {
        "itemID": 6109,
        "name": "Pineapple Tiki Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 6110,
        "name": "Pineapple Spear",
        "rarity": 999
      },
      {
        "itemID": 6111,
        "name": "Pineapple Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 6112,
        "name": "Pine-ch Buggy",
        "rarity": 999
      },
      {
        "itemID": 6113,
        "name": "Pine-ch Buggy Seed",
        "rarity": 999
      },
      {
        "itemID": 6114,
        "name": "Pineapple Engine Part",
        "rarity": 999
      },
      {
        "itemID": 6115,
        "name": "Pineapple Engine Part Seed",
        "rarity": 999
      },
      {
        "itemID": 6116,
        "name": "Pineapple Wheel",
        "rarity": 999
      },
      {
        "itemID": 6117,
        "name": "Pineapple Wheel Seed",
        "rarity": 999
      },
      {
        "itemID": 6118,
        "name": "Pineapple Plating",
        "rarity": 999
      },
      {
        "itemID": 6119,
        "name": "Pineapple Plating Seed",
        "rarity": 999
      },
      {
        "itemID": 6120,
        "name": "Super Pineapple Guardian Charm",
        "rarity": 999
      },
      {
        "itemID": 6121,
        "name": "Super Pineapple Guardian Charm Seed",
        "rarity": 999
      },
      {
        "itemID": 6122,
        "name": "Growmoji Super Pineapple",
        "rarity": 999
      },
      {
        "itemID": 6123,
        "name": "Growmoji Super Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 6124,
        "name": "Dumb Question 1",
        "rarity": 999
      },
      {
        "itemID": 6125,
        "name": "Dumb Question 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 6126,
        "name": "Dumb Question 2",
        "rarity": 999
      },
      {
        "itemID": 6127,
        "name": "Dumb Question 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 6128,
        "name": "Dumb Question 3",
        "rarity": 999
      },
      {
        "itemID": 6129,
        "name": "Dumb Question 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 6130,
        "name": "Summer Event Player Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 6131,
        "name": "Summer Event Player Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 6132,
        "name": "Summer Event Player Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 6133,
        "name": "Summer Event Player Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 6134,
        "name": "Summer Event Guild Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 6135,
        "name": "Summer Event Guild Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 6136,
        "name": "Summer Event Guild Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 6137,
        "name": "Summer Event Guild Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 6138,
        "name": "Summer Event Guild Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 6139,
        "name": "Summer Event Guild Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 6140,
        "name": "Extract-O-Snap",
        "rarity": 999
      },
      {
        "itemID": 6141,
        "name": "Extract-O-Snap Seed",
        "rarity": 999
      },
      {
        "itemID": 6142,
        "name": "Extractor Dynamo",
        "rarity": 999
      },
      {
        "itemID": 6143,
        "name": "Extractor Dynamo Seed",
        "rarity": 999
      },
      {
        "itemID": 6144,
        "name": "Aurora Wings",
        "rarity": 999
      },
      {
        "itemID": 6145,
        "name": "Aurora Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 6146,
        "name": "SearBot - Level 1",
        "rarity": 999
      },
      {
        "itemID": 6147,
        "name": "SearBot - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 6148,
        "name": "SearBot - Level 2",
        "rarity": 999
      },
      {
        "itemID": 6149,
        "name": "SearBot - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 6150,
        "name": "SearBot - Level 3",
        "rarity": 999
      },
      {
        "itemID": 6151,
        "name": "SearBot - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 6152,
        "name": "SearBot - Level 4",
        "rarity": 999
      },
      {
        "itemID": 6153,
        "name": "SearBot - Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 6154,
        "name": "Deathtrap Wall",
        "rarity": 999
      },
      {
        "itemID": 6155,
        "name": "Deathtrap Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 6156,
        "name": "Dimension Block",
        "rarity": 999
      },
      {
        "itemID": 6157,
        "name": "Dimension Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6158,
        "name": "Royal Gilt Bathtub",
        "rarity": 999
      },
      {
        "itemID": 6159,
        "name": "Royal Gilt Bathtub Seed",
        "rarity": 999
      },
      {
        "itemID": 6160,
        "name": "Royal Canopy Bed",
        "rarity": 999
      },
      {
        "itemID": 6161,
        "name": "Royal Canopy Bed Seed",
        "rarity": 999
      },
      {
        "itemID": 6162,
        "name": "Throne",
        "rarity": 999
      },
      {
        "itemID": 6163,
        "name": "Throne Seed",
        "rarity": 999
      },
      {
        "itemID": 6164,
        "name": "Banquet Dining Chair",
        "rarity": 999
      },
      {
        "itemID": 6165,
        "name": "Banquet Dining Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 6166,
        "name": "Banquet Table",
        "rarity": 999
      },
      {
        "itemID": 6167,
        "name": "Banquet Table Seed",
        "rarity": 999
      },
      {
        "itemID": 6168,
        "name": "Castle Chandelier",
        "rarity": 999
      },
      {
        "itemID": 6169,
        "name": "Castle Chandelier Seed",
        "rarity": 999
      },
      {
        "itemID": 6170,
        "name": "Iron Torch",
        "rarity": 999
      },
      {
        "itemID": 6171,
        "name": "Iron Torch Seed",
        "rarity": 999
      },
      {
        "itemID": 6172,
        "name": "Suit of Armor",
        "rarity": 999
      },
      {
        "itemID": 6173,
        "name": "Suit of Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 6174,
        "name": "Bear Wall Mount",
        "rarity": 999
      },
      {
        "itemID": 6175,
        "name": "Bear Wall Mount Seed",
        "rarity": 999
      },
      {
        "itemID": 6176,
        "name": "Gibbet",
        "rarity": 999
      },
      {
        "itemID": 6177,
        "name": "Gibbet Seed",
        "rarity": 999
      },
      {
        "itemID": 6178,
        "name": "Castle Door",
        "rarity": 999
      },
      {
        "itemID": 6179,
        "name": "Castle Door Seed",
        "rarity": 999
      },
      {
        "itemID": 6180,
        "name": "Castle Stone",
        "rarity": 999
      },
      {
        "itemID": 6181,
        "name": "Castle Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6182,
        "name": "Castle Stone Background",
        "rarity": 999
      },
      {
        "itemID": 6183,
        "name": "Castle Stone Background Seed",
        "rarity": 999
      },
      {
        "itemID": 6184,
        "name": "Castle Turret",
        "rarity": 999
      },
      {
        "itemID": 6185,
        "name": "Castle Turret Seed",
        "rarity": 999
      },
      {
        "itemID": 6186,
        "name": "Castle Sewage Pipe",
        "rarity": 999
      },
      {
        "itemID": 6187,
        "name": "Castle Sewage Pipe Seed",
        "rarity": 999
      },
      {
        "itemID": 6188,
        "name": "Tunic - Royal Red",
        "rarity": 999
      },
      {
        "itemID": 6189,
        "name": "Tunic - Royal Red Seed",
        "rarity": 999
      },
      {
        "itemID": 6190,
        "name": "Tunic - Royal Blue",
        "rarity": 999
      },
      {
        "itemID": 6191,
        "name": "Tunic - Royal Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 6192,
        "name": "Tunic - Royal Green",
        "rarity": 999
      },
      {
        "itemID": 6193,
        "name": "Tunic - Royal Green Seed",
        "rarity": 999
      },
      {
        "itemID": 6194,
        "name": "Guild Steed",
        "rarity": 999
      },
      {
        "itemID": 6195,
        "name": "Guild Steed Seed",
        "rarity": 999
      },
      {
        "itemID": 6196,
        "name": "Guild Night Stallion",
        "rarity": 999
      },
      {
        "itemID": 6197,
        "name": "Guild Night Stallion Seed",
        "rarity": 999
      },
      {
        "itemID": 6198,
        "name": "Summer Token",
        "rarity": 999
      },
      {
        "itemID": 6199,
        "name": "Summer Token Seed",
        "rarity": 999
      },
      {
        "itemID": 6200,
        "name": "Gold Architect Chest",
        "rarity": 999
      },
      {
        "itemID": 6201,
        "name": "Gold Architect Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 6202,
        "name": "Silver Architect Chest",
        "rarity": 999
      },
      {
        "itemID": 6203,
        "name": "Silver Architect Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 6204,
        "name": "Bronze Architect Chest",
        "rarity": 999
      },
      {
        "itemID": 6205,
        "name": "Bronze Architect Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 6206,
        "name": "Overstuffed Vintage Leather Armchair",
        "rarity": 999
      },
      {
        "itemID": 6207,
        "name": "Overstuffed Vintage Leather Armchair Seed",
        "rarity": 999
      },
      {
        "itemID": 6208,
        "name": "Articulated Reading Lamp",
        "rarity": 999
      },
      {
        "itemID": 6209,
        "name": "Articulated Reading Lamp Seed",
        "rarity": 999
      },
      {
        "itemID": 6210,
        "name": "Castle Moat",
        "rarity": 999
      },
      {
        "itemID": 6211,
        "name": "Castle Moat Seed",
        "rarity": 999
      },
      {
        "itemID": 6212,
        "name": "Surgical Tool Bag",
        "rarity": 999
      },
      {
        "itemID": 6213,
        "name": "Surgical Tool Bag Seed",
        "rarity": 999
      },
      {
        "itemID": 6214,
        "name": "Holographic Mannequin",
        "rarity": 999
      },
      {
        "itemID": 6215,
        "name": "Holographic Mannequin Seed",
        "rarity": 999
      },
      {
        "itemID": 6216,
        "name": "Architect's Robes",
        "rarity": 999
      },
      {
        "itemID": 6217,
        "name": "Architect's Robes Seed",
        "rarity": 999
      },
      {
        "itemID": 6218,
        "name": "Architect's Compass",
        "rarity": 999
      },
      {
        "itemID": 6219,
        "name": "Architect's Compass Seed",
        "rarity": 999
      },
      {
        "itemID": 6220,
        "name": "Architect's Beret",
        "rarity": 999
      },
      {
        "itemID": 6221,
        "name": "Architect's Beret Seed",
        "rarity": 999
      },
      {
        "itemID": 6222,
        "name": "Architect's Beard",
        "rarity": 999
      },
      {
        "itemID": 6223,
        "name": "Architect's Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 6224,
        "name": "Architectural Diagrams",
        "rarity": 999
      },
      {
        "itemID": 6225,
        "name": "Architectural Diagrams Seed",
        "rarity": 999
      },
      {
        "itemID": 6226,
        "name": "Anatomical Diagrams",
        "rarity": 999
      },
      {
        "itemID": 6227,
        "name": "Anatomical Diagrams Seed",
        "rarity": 999
      },
      {
        "itemID": 6228,
        "name": "Biological Diagram - Fauna",
        "rarity": 999
      },
      {
        "itemID": 6229,
        "name": "Biological Diagram - Fauna Seed",
        "rarity": 999
      },
      {
        "itemID": 6230,
        "name": "Botanical Diagram - Flora",
        "rarity": 999
      },
      {
        "itemID": 6231,
        "name": "Botanical Diagram - Flora Seed",
        "rarity": 999
      },
      {
        "itemID": 6232,
        "name": "Drafting Table",
        "rarity": 999
      },
      {
        "itemID": 6233,
        "name": "Drafting Table Seed",
        "rarity": 999
      },
      {
        "itemID": 6234,
        "name": "Loaded Bookshelf",
        "rarity": 999
      },
      {
        "itemID": 6235,
        "name": "Loaded Bookshelf Seed",
        "rarity": 999
      },
      {
        "itemID": 6236,
        "name": "Anomalizing Reliable Hammer",
        "rarity": 999
      },
      {
        "itemID": 6237,
        "name": "Anomalizing Reliable Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 6238,
        "name": "Anomalizing Pristine Hammer",
        "rarity": 999
      },
      {
        "itemID": 6239,
        "name": "Anomalizing Pristine Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 6240,
        "name": "Exquisite Hammer",
        "rarity": 999
      },
      {
        "itemID": 6241,
        "name": "Exquisite Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 6242,
        "name": "Anomalizing Reliable Scythe",
        "rarity": 999
      },
      {
        "itemID": 6243,
        "name": "Anomalizing Reliable Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 6244,
        "name": "Anomalizing Pristine Scythe",
        "rarity": 999
      },
      {
        "itemID": 6245,
        "name": "Anomalizing Pristine Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 6246,
        "name": "Exquisite Scythe",
        "rarity": 999
      },
      {
        "itemID": 6247,
        "name": "Exquisite Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 6248,
        "name": "Anomalizing Reliable Bone Saw",
        "rarity": 999
      },
      {
        "itemID": 6249,
        "name": "Anomalizing Reliable Bone Saw Seed",
        "rarity": 999
      },
      {
        "itemID": 6250,
        "name": "Anomalizing Pristine Bone Saw",
        "rarity": 999
      },
      {
        "itemID": 6251,
        "name": "Anomalizing Pristine Bone Saw Seed",
        "rarity": 999
      },
      {
        "itemID": 6252,
        "name": "Exquisite Bone Saw",
        "rarity": 999
      },
      {
        "itemID": 6253,
        "name": "Exquisite Bone Saw Seed",
        "rarity": 999
      },
      {
        "itemID": 6254,
        "name": "Reliable Anomarod",
        "rarity": 999
      },
      {
        "itemID": 6255,
        "name": "Reliable Anomarod Seed",
        "rarity": 999
      },
      {
        "itemID": 6256,
        "name": "Pristine Anomarod",
        "rarity": 999
      },
      {
        "itemID": 6257,
        "name": "Pristine Anomarod Seed",
        "rarity": 999
      },
      {
        "itemID": 6258,
        "name": "Exquisite Anomarod",
        "rarity": 999
      },
      {
        "itemID": 6259,
        "name": "Exquisite Anomarod Seed",
        "rarity": 999
      },
      {
        "itemID": 6260,
        "name": "Amulet of Force",
        "rarity": 999
      },
      {
        "itemID": 6261,
        "name": "Amulet of Force Seed",
        "rarity": 999
      },
      {
        "itemID": 6262,
        "name": "Glove of the Giants",
        "rarity": 999
      },
      {
        "itemID": 6263,
        "name": "Glove of the Giants Seed",
        "rarity": 999
      },
      {
        "itemID": 6264,
        "name": "Summer Blaster Shirt",
        "rarity": 999
      },
      {
        "itemID": 6265,
        "name": "Summer Blaster Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 6266,
        "name": "Ultra Summer Blaster Shirt",
        "rarity": 999
      },
      {
        "itemID": 6267,
        "name": "Ultra Summer Blaster Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 6268,
        "name": "Summer Blaster Pants",
        "rarity": 999
      },
      {
        "itemID": 6269,
        "name": "Summer Blaster Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 6270,
        "name": "Ultra Summer Blaster Pants",
        "rarity": 999
      },
      {
        "itemID": 6271,
        "name": "Ultra Summer Blaster Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 6272,
        "name": "Growmoji Peace Sign",
        "rarity": 999
      },
      {
        "itemID": 6273,
        "name": "Growmoji Peace Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 6274,
        "name": "Growmoji Terrified Face",
        "rarity": 999
      },
      {
        "itemID": 6275,
        "name": "Growmoji Terrified Face Seed",
        "rarity": 999
      },
      {
        "itemID": 6276,
        "name": "Growmoji Trollface",
        "rarity": 999
      },
      {
        "itemID": 6277,
        "name": "Growmoji Trollface Seed",
        "rarity": 999
      },
      {
        "itemID": 6278,
        "name": "Growmoji Evil Devil",
        "rarity": 999
      },
      {
        "itemID": 6279,
        "name": "Growmoji Evil Devil Seed",
        "rarity": 999
      },
      {
        "itemID": 6280,
        "name": "Weather Machine - Guild",
        "rarity": 999
      },
      {
        "itemID": 6281,
        "name": "Weather Machine - Guild Seed",
        "rarity": 999
      },
      {
        "itemID": 6282,
        "name": "World Architect",
        "rarity": 999
      },
      {
        "itemID": 6283,
        "name": "World Architect Seed",
        "rarity": 999
      },
      {
        "itemID": 6284,
        "name": "Flaming Aura",
        "rarity": 999
      },
      {
        "itemID": 6285,
        "name": "Flaming Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 6286,
        "name": "Storage Box Xtreme - Level 1",
        "rarity": 999
      },
      {
        "itemID": 6287,
        "name": "Storage Box Xtreme - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 6288,
        "name": "Storage Box Xtreme - Level 2",
        "rarity": 999
      },
      {
        "itemID": 6289,
        "name": "Storage Box Xtreme - Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 6290,
        "name": "Storage Box Xtreme - Level 3",
        "rarity": 999
      },
      {
        "itemID": 6291,
        "name": "Storage Box Xtreme - Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 6292,
        "name": "Dumb Checkmark",
        "rarity": 999
      },
      {
        "itemID": 6293,
        "name": "Dumb Checkmark Seed",
        "rarity": 999
      },
      {
        "itemID": 6294,
        "name": "Raptor Legs",
        "rarity": 999
      },
      {
        "itemID": 6295,
        "name": "Raptor Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 6296,
        "name": "Mirage Platform",
        "rarity": 999
      },
      {
        "itemID": 6297,
        "name": "Mirage Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 6298,
        "name": "Smoog the Great Dragon",
        "rarity": 999
      },
      {
        "itemID": 6299,
        "name": "Smoog the Great Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 6300,
        "name": "Dancemaster's Crown",
        "rarity": 999
      },
      {
        "itemID": 6301,
        "name": "Dancemaster's Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 6302,
        "name": "Summer Blaster Glasses",
        "rarity": 999
      },
      {
        "itemID": 6303,
        "name": "Summer Blaster Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 6304,
        "name": "Ultra Summer Blaster Glasses",
        "rarity": 999
      },
      {
        "itemID": 6305,
        "name": "Ultra Summer Blaster Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 6306,
        "name": "Bubble Machine",
        "rarity": 999
      },
      {
        "itemID": 6307,
        "name": "Bubble Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 6308,
        "name": "Beach Ball",
        "rarity": 999
      },
      {
        "itemID": 6309,
        "name": "Beach Ball Seed",
        "rarity": 999
      },
      {
        "itemID": 6310,
        "name": "Watermelon",
        "rarity": 999
      },
      {
        "itemID": 6311,
        "name": "Watermelon Seed",
        "rarity": 999
      },
      {
        "itemID": 6312,
        "name": "Phoenix Sword",
        "rarity": 999
      },
      {
        "itemID": 6313,
        "name": "Phoenix Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 6314,
        "name": "Crushed Ice",
        "rarity": 999
      },
      {
        "itemID": 6315,
        "name": "Crushed Ice Seed",
        "rarity": 999
      },
      {
        "itemID": 6316,
        "name": "Deep-Fried Tropical Ice Cream",
        "rarity": 999
      },
      {
        "itemID": 6317,
        "name": "Deep-Fried Tropical Ice Cream Seed",
        "rarity": 999
      },
      {
        "itemID": 6318,
        "name": "Firefin Leash",
        "rarity": 999
      },
      {
        "itemID": 6319,
        "name": "Firefin Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 6320,
        "name": "Flaming Floaties",
        "rarity": 999
      },
      {
        "itemID": 6321,
        "name": "Flaming Floaties Seed",
        "rarity": 999
      },
      {
        "itemID": 6322,
        "name": "Growmoji Fireworks",
        "rarity": 999
      },
      {
        "itemID": 6323,
        "name": "Growmoji Fireworks Seed",
        "rarity": 999
      },
      {
        "itemID": 6324,
        "name": "Deck Chair",
        "rarity": 999
      },
      {
        "itemID": 6325,
        "name": "Deck Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 6326,
        "name": "Flying Disc",
        "rarity": 999
      },
      {
        "itemID": 6327,
        "name": "Flying Disc Seed",
        "rarity": 999
      },
      {
        "itemID": 6328,
        "name": "Crab Wall Mount",
        "rarity": 999
      },
      {
        "itemID": 6329,
        "name": "Crab Wall Mount Seed",
        "rarity": 999
      },
      {
        "itemID": 6330,
        "name": "Embers",
        "rarity": 999
      },
      {
        "itemID": 6331,
        "name": "Embers Seed",
        "rarity": 999
      },
      {
        "itemID": 6332,
        "name": "Flaming Feathers",
        "rarity": 999
      },
      {
        "itemID": 6333,
        "name": "Flaming Feathers Seed",
        "rarity": 999
      },
      {
        "itemID": 6334,
        "name": "Danieldd's Chimera Wings",
        "rarity": 999
      },
      {
        "itemID": 6335,
        "name": "Danieldd's Chimera Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 6336,
        "name": "Growpedia",
        "rarity": 999
      },
      {
        "itemID": 6337,
        "name": "Growpedia Seed",
        "rarity": 999
      },
      {
        "itemID": 6338,
        "name": "Mighty Tiger",
        "rarity": 999
      },
      {
        "itemID": 6339,
        "name": "Mighty Tiger Seed",
        "rarity": 999
      },
      {
        "itemID": 6340,
        "name": "Startopian Empire - Uniform Pants",
        "rarity": 999
      },
      {
        "itemID": 6341,
        "name": "Startopian Empire - Uniform Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 6342,
        "name": "Startopian Empire - Uniform Mini-Skirt",
        "rarity": 999
      },
      {
        "itemID": 6343,
        "name": "Startopian Empire - Uniform Mini-Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 6344,
        "name": "Startopian Empire - Command Class Uniform",
        "rarity": 999
      },
      {
        "itemID": 6345,
        "name": "Startopian Empire - Command Class Uniform Seed",
        "rarity": 999
      },
      {
        "itemID": 6346,
        "name": "Startopian Empire - Engineer Class Uniform",
        "rarity": 999
      },
      {
        "itemID": 6347,
        "name": "Startopian Empire - Engineer Class Uniform Seed",
        "rarity": 999
      },
      {
        "itemID": 6348,
        "name": "Startopian Empire - Medic Class Uniform",
        "rarity": 999
      },
      {
        "itemID": 6349,
        "name": "Startopian Empire - Medic Class Uniform Seed",
        "rarity": 999
      },
      {
        "itemID": 6350,
        "name": "Startopian Empire - Phase Blaster",
        "rarity": 999
      },
      {
        "itemID": 6351,
        "name": "Startopian Empire - Phase Blaster Seed",
        "rarity": 999
      },
      {
        "itemID": 6352,
        "name": "Startopian Empire - Combat Troop Mk.II Helmet",
        "rarity": 999
      },
      {
        "itemID": 6353,
        "name": "Startopian Empire - Combat Troop Mk.II Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 6354,
        "name": "Startopian Empire - Combat Troop Mk.II Body Armor",
        "rarity": 999
      },
      {
        "itemID": 6355,
        "name": "Startopian Empire - Combat Troop Mk.II Body Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 6356,
        "name": "Startopian Empire - Combat Troop Mk.II Leg Armor",
        "rarity": 999
      },
      {
        "itemID": 6357,
        "name": "Startopian Empire - Combat Troop Mk.II Leg Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 6358,
        "name": "Startopian Empire - Combat Rifle",
        "rarity": 999
      },
      {
        "itemID": 6359,
        "name": "Startopian Empire - Combat Rifle Seed",
        "rarity": 999
      },
      {
        "itemID": 6360,
        "name": "Greezak Horde - Warrior Helmet",
        "rarity": 999
      },
      {
        "itemID": 6361,
        "name": "Greezak Horde - Warrior Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 6362,
        "name": "Greezak Horde - Warrior Armor",
        "rarity": 999
      },
      {
        "itemID": 6363,
        "name": "Greezak Horde - Warrior Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 6364,
        "name": "Greezak Horde - Warrior Leg Armor",
        "rarity": 999
      },
      {
        "itemID": 6365,
        "name": "Greezak Horde - Warrior Leg Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 6366,
        "name": "Greezak Horde - Skull Necklace",
        "rarity": 999
      },
      {
        "itemID": 6367,
        "name": "Greezak Horde - Skull Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 6368,
        "name": "Greezak Horde - Shoulder Cannon",
        "rarity": 999
      },
      {
        "itemID": 6369,
        "name": "Greezak Horde - Shoulder Cannon Seed",
        "rarity": 999
      },
      {
        "itemID": 6370,
        "name": "LordStar Environment Mask",
        "rarity": 999
      },
      {
        "itemID": 6371,
        "name": "LordStar Environment Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 6372,
        "name": "Space Thruster Boost Boots",
        "rarity": 999
      },
      {
        "itemID": 6373,
        "name": "Space Thruster Boost Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 6374,
        "name": "Alien Mind Protector",
        "rarity": 999
      },
      {
        "itemID": 6375,
        "name": "Alien Mind Protector Seed",
        "rarity": 999
      },
      {
        "itemID": 6376,
        "name": "MagTron LightCycle",
        "rarity": 999
      },
      {
        "itemID": 6377,
        "name": "MagTron LightCycle Seed",
        "rarity": 999
      },
      {
        "itemID": 6378,
        "name": "Ferungi Ears",
        "rarity": 999
      },
      {
        "itemID": 6379,
        "name": "Ferungi Ears Seed",
        "rarity": 999
      },
      {
        "itemID": 6380,
        "name": "Volcanix Ears",
        "rarity": 999
      },
      {
        "itemID": 6381,
        "name": "Volcanix Ears Seed",
        "rarity": 999
      },
      {
        "itemID": 6382,
        "name": "Startopian Empire - Force Shield & Phase Blaster",
        "rarity": 999
      },
      {
        "itemID": 6383,
        "name": "Startopian Empire - Force Shield & Phase Blaster Seed",
        "rarity": 999
      },
      {
        "itemID": 6384,
        "name": "Robot Legs",
        "rarity": 999
      },
      {
        "itemID": 6385,
        "name": "Robot Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 6386,
        "name": "Starship Floor Tile",
        "rarity": 1
      },
      {
        "itemID": 6387,
        "name": "Starship Floor Tile Seed",
        "rarity": 1
      },
      {
        "itemID": 6388,
        "name": "Starship Wall",
        "rarity": 1
      },
      {
        "itemID": 6389,
        "name": "Starship Wall Seed",
        "rarity": 1
      },
      {
        "itemID": 6390,
        "name": "Starship Door",
        "rarity": 999
      },
      {
        "itemID": 6391,
        "name": "Starship Door Seed",
        "rarity": 999
      },
      {
        "itemID": 6392,
        "name": "Starship Transporter",
        "rarity": 999
      },
      {
        "itemID": 6393,
        "name": "Starship Transporter Seed",
        "rarity": 999
      },
      {
        "itemID": 6394,
        "name": "Starship Console Panel",
        "rarity": 83
      },
      {
        "itemID": 6395,
        "name": "Starship Console Panel Seed",
        "rarity": 83
      },
      {
        "itemID": 6396,
        "name": "Starship Porthole",
        "rarity": 50
      },
      {
        "itemID": 6397,
        "name": "Starship Porthole Seed",
        "rarity": 50
      },
      {
        "itemID": 6398,
        "name": "Starship Airlock",
        "rarity": 999
      },
      {
        "itemID": 6399,
        "name": "Starship Airlock Seed",
        "rarity": 999
      },
      {
        "itemID": 6400,
        "name": "Starship Deck Ladders",
        "rarity": 27
      },
      {
        "itemID": 6401,
        "name": "Starship Deck Ladders Seed",
        "rarity": 27
      },
      {
        "itemID": 6402,
        "name": "Looming Triffid",
        "rarity": 999
      },
      {
        "itemID": 6403,
        "name": "Looming Triffid Seed",
        "rarity": 999
      },
      {
        "itemID": 6404,
        "name": "Xenoid Acid Pool",
        "rarity": 999
      },
      {
        "itemID": 6405,
        "name": "Xenoid Acid Pool Seed",
        "rarity": 999
      },
      {
        "itemID": 6406,
        "name": "Greezak Hive Floor",
        "rarity": 999
      },
      {
        "itemID": 6407,
        "name": "Greezak Hive Floor Seed",
        "rarity": 999
      },
      {
        "itemID": 6408,
        "name": "Greezak Hive Wall",
        "rarity": 999
      },
      {
        "itemID": 6409,
        "name": "Greezak Hive Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 6410,
        "name": "The Varlaak",
        "rarity": 999
      },
      {
        "itemID": 6411,
        "name": "The Varlaak Seed",
        "rarity": 999
      },
      {
        "itemID": 6412,
        "name": "Replicator",
        "rarity": 999
      },
      {
        "itemID": 6413,
        "name": "Replicator Seed",
        "rarity": 999
      },
      {
        "itemID": 6414,
        "name": "Star Tool Droid",
        "rarity": 999
      },
      {
        "itemID": 6415,
        "name": "Star Tool Droid Seed",
        "rarity": 999
      },
      {
        "itemID": 6416,
        "name": "Star Fuel",
        "rarity": 999
      },
      {
        "itemID": 6417,
        "name": "Star Fuel Seed",
        "rarity": 999
      },
      {
        "itemID": 6418,
        "name": "Buckazoid",
        "rarity": 999
      },
      {
        "itemID": 6419,
        "name": "Buckazoid Seed",
        "rarity": 999
      },
      {
        "itemID": 6420,
        "name": "Imperial Starship Blast",
        "rarity": 999
      },
      {
        "itemID": 6421,
        "name": "Imperial Starship Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 6422,
        "name": "Stellarix Starship Blast",
        "rarity": 999
      },
      {
        "itemID": 6423,
        "name": "Stellarix Starship Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 6424,
        "name": "Greezak Starship Blast",
        "rarity": 999
      },
      {
        "itemID": 6425,
        "name": "Greezak Starship Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 6426,
        "name": "Starship Sickbay Bed",
        "rarity": 999
      },
      {
        "itemID": 6427,
        "name": "Starship Sickbay Bed Seed",
        "rarity": 999
      },
      {
        "itemID": 6428,
        "name": "Imperial Starship Helm - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6429,
        "name": "Imperial Starship Helm - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6430,
        "name": "Imperial Starship Helm - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6431,
        "name": "Imperial Starship Helm - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6432,
        "name": "Imperial Starship Helm - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6433,
        "name": "Imperial Starship Helm - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6434,
        "name": "Imperial Starship Reactor - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6435,
        "name": "Imperial Starship Reactor - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6436,
        "name": "Imperial Starship Reactor - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6437,
        "name": "Imperial Starship Reactor - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6438,
        "name": "Imperial Starship Reactor - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6439,
        "name": "Imperial Starship Reactor - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6440,
        "name": "Imperial Starship Viewscreen - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6441,
        "name": "Imperial Starship Viewscreen - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6442,
        "name": "Imperial Starship Viewscreen - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6443,
        "name": "Imperial Starship Viewscreen - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6444,
        "name": "Imperial Starship Viewscreen - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6445,
        "name": "Imperial Starship Viewscreen - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6446,
        "name": "Stellarix Union Starship Helm - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6447,
        "name": "Stellarix Union Starship Helm - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6448,
        "name": "Stellarix Union Starship Helm - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6449,
        "name": "Stellarix Union Starship Helm - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6450,
        "name": "Stellarix Union Starship Helm - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6451,
        "name": "Stellarix Union Starship Helm - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6452,
        "name": "Stellarix Union Starship Reactor - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6453,
        "name": "Stellarix Union Starship Reactor - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6454,
        "name": "Stellarix Union Starship Reactor - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6455,
        "name": "Stellarix Union Starship Reactor - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6456,
        "name": "Stellarix Union Starship Reactor - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6457,
        "name": "Stellarix Union Starship Reactor - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6458,
        "name": "Stellarix Union Starship Viewscreen - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6459,
        "name": "Stellarix Union Starship Viewscreen - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6460,
        "name": "Stellarix Union Starship Viewscreen - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6461,
        "name": "Stellarix Union Starship Viewscreen - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6462,
        "name": "Stellarix Union Starship Viewscreen - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6463,
        "name": "Stellarix Union Starship Viewscreen - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6464,
        "name": "Greezak Horde Starship Helm - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6465,
        "name": "Greezak Horde Starship Helm - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6466,
        "name": "Greezak Horde Starship Helm - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6467,
        "name": "Greezak Horde Starship Helm - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6468,
        "name": "Greezak Horde Starship Helm - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6469,
        "name": "Greezak Horde Starship Helm - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6470,
        "name": "Greezak Horde Starship Reactor - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6471,
        "name": "Greezak Horde Starship Reactor - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6472,
        "name": "Greezak Horde Starship Reactor - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6473,
        "name": "Greezak Horde Starship Reactor - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6474,
        "name": "Greezak Horde Starship Reactor - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6475,
        "name": "Greezak Horde Starship Reactor - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6476,
        "name": "Greezak Horde Starship Viewscreen - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6477,
        "name": "Greezak Horde Starship Viewscreen - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6478,
        "name": "Greezak Horde Starship Viewscreen - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6479,
        "name": "Greezak Horde Starship Viewscreen - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6480,
        "name": "Greezak Horde Starship Viewscreen - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6481,
        "name": "Greezak Horde Starship Viewscreen - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6482,
        "name": "HyperTech Starship Helm - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6483,
        "name": "HyperTech Starship Helm - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6484,
        "name": "HyperTech Starship Helm - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6485,
        "name": "HyperTech Starship Helm - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6486,
        "name": "HyperTech Starship Helm - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6487,
        "name": "HyperTech Starship Helm - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6488,
        "name": "HyperTech Starship Reactor - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6489,
        "name": "HyperTech Starship Reactor - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6490,
        "name": "HyperTech Starship Reactor - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6491,
        "name": "HyperTech Starship Reactor - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6492,
        "name": "HyperTech Starship Reactor - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6493,
        "name": "HyperTech Starship Reactor - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6494,
        "name": "HyperTech Starship Viewscreen - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6495,
        "name": "HyperTech Starship Viewscreen - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6496,
        "name": "HyperTech Starship Viewscreen - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6497,
        "name": "HyperTech Starship Viewscreen - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6498,
        "name": "HyperTech Starship Viewscreen - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6499,
        "name": "HyperTech Starship Viewscreen - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6500,
        "name": "Bastion Tactical Console - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6501,
        "name": "Bastion Tactical Console - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6502,
        "name": "Bastion Tactical Console - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6503,
        "name": "Bastion Tactical Console - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6504,
        "name": "Bastion Tactical Console - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6505,
        "name": "Bastion Tactical Console - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6506,
        "name": "Oracle Science Station - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6507,
        "name": "Oracle Science Station - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6508,
        "name": "Oracle Science Station - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6509,
        "name": "Oracle Science Station - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6510,
        "name": "Oracle Science Station - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6511,
        "name": "Oracle Science Station - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6512,
        "name": "Vitahope Life Support System - Mk.I",
        "rarity": 999
      },
      {
        "itemID": 6513,
        "name": "Vitahope Life Support System - Mk.I Seed",
        "rarity": 999
      },
      {
        "itemID": 6514,
        "name": "Vitahope Life Support System - Mk.II",
        "rarity": 999
      },
      {
        "itemID": 6515,
        "name": "Vitahope Life Support System - Mk.II Seed",
        "rarity": 999
      },
      {
        "itemID": 6516,
        "name": "Vitahope Life Support System - Mk.III",
        "rarity": 999
      },
      {
        "itemID": 6517,
        "name": "Vitahope Life Support System - Mk.III Seed",
        "rarity": 999
      },
      {
        "itemID": 6518,
        "name": "HyperShields",
        "rarity": 87
      },
      {
        "itemID": 6519,
        "name": "HyperShields Seed",
        "rarity": 87
      },
      {
        "itemID": 6520,
        "name": "AI Brain",
        "rarity": 87
      },
      {
        "itemID": 6521,
        "name": "AI Brain Seed",
        "rarity": 87
      },
      {
        "itemID": 6522,
        "name": "Galactibolt",
        "rarity": 87
      },
      {
        "itemID": 6523,
        "name": "Galactibolt Seed",
        "rarity": 87
      },
      {
        "itemID": 6524,
        "name": "Space Meds",
        "rarity": 87
      },
      {
        "itemID": 6525,
        "name": "Space Meds Seed",
        "rarity": 87
      },
      {
        "itemID": 6526,
        "name": "Teleporter Charge",
        "rarity": 87
      },
      {
        "itemID": 6527,
        "name": "Teleporter Charge Seed",
        "rarity": 87
      },
      {
        "itemID": 6528,
        "name": "Gigablaster",
        "rarity": 87
      },
      {
        "itemID": 6529,
        "name": "Gigablaster Seed",
        "rarity": 87
      },
      {
        "itemID": 6530,
        "name": "Quadriscanner",
        "rarity": 87
      },
      {
        "itemID": 6531,
        "name": "Quadriscanner Seed",
        "rarity": 87
      },
      {
        "itemID": 6532,
        "name": "Tactical Drone",
        "rarity": 87
      },
      {
        "itemID": 6533,
        "name": "Tactical Drone Seed",
        "rarity": 87
      },
      {
        "itemID": 6534,
        "name": "Stellar Documents",
        "rarity": 87
      },
      {
        "itemID": 6535,
        "name": "Stellar Documents Seed",
        "rarity": 87
      },
      {
        "itemID": 6536,
        "name": "Star Supplies",
        "rarity": 87
      },
      {
        "itemID": 6537,
        "name": "Star Supplies Seed",
        "rarity": 87
      },
      {
        "itemID": 6538,
        "name": "Cyborg Diplomat",
        "rarity": 87
      },
      {
        "itemID": 6539,
        "name": "Cyborg Diplomat Seed",
        "rarity": 87
      },
      {
        "itemID": 6540,
        "name": "Growton Torpedo",
        "rarity": 87
      },
      {
        "itemID": 6541,
        "name": "Growton Torpedo Seed",
        "rarity": 87
      },
      {
        "itemID": 6542,
        "name": "Starship Floor Grill",
        "rarity": 51
      },
      {
        "itemID": 6543,
        "name": "Starship Floor Grill Seed",
        "rarity": 51
      },
      {
        "itemID": 6544,
        "name": "Starship Light Wall",
        "rarity": 45
      },
      {
        "itemID": 6545,
        "name": "Starship Light Wall Seed",
        "rarity": 45
      },
      {
        "itemID": 6546,
        "name": "Data Starship Hull",
        "rarity": 1
      },
      {
        "itemID": 6547,
        "name": "Data Starship Hull Seed",
        "rarity": 1
      },
      {
        "itemID": 6548,
        "name": "Starship Main Door",
        "rarity": 1
      },
      {
        "itemID": 6549,
        "name": "Starship Main Door Seed",
        "rarity": 1
      },
      {
        "itemID": 6550,
        "name": "Starship Hull - INT Bottom",
        "rarity": 1
      },
      {
        "itemID": 6551,
        "name": "Starship Hull - INT Bottom Seed",
        "rarity": 1
      },
      {
        "itemID": 6552,
        "name": "Starship Hull - INT Top",
        "rarity": 1
      },
      {
        "itemID": 6553,
        "name": "Starship Hull - INT Top Seed",
        "rarity": 1
      },
      {
        "itemID": 6554,
        "name": "Starship Hull - INT Side",
        "rarity": 1
      },
      {
        "itemID": 6555,
        "name": "Starship Hull - INT Side Seed",
        "rarity": 1
      },
      {
        "itemID": 6556,
        "name": "Starship Hull - INT Bottom Outer Corner",
        "rarity": 1
      },
      {
        "itemID": 6557,
        "name": "Starship Hull - INT Bottom Outer Corner Seed",
        "rarity": 1
      },
      {
        "itemID": 6558,
        "name": "Starship Hull - INT Top Outer Corner",
        "rarity": 1
      },
      {
        "itemID": 6559,
        "name": "Starship Hull - INT Top Outer Corner Seed",
        "rarity": 1
      },
      {
        "itemID": 6560,
        "name": "Starship Hull - INT Bottom Inner Corner",
        "rarity": 1
      },
      {
        "itemID": 6561,
        "name": "Starship Hull - INT Bottom Inner Corner Seed",
        "rarity": 1
      },
      {
        "itemID": 6562,
        "name": "Starship Hull - INT Top Inner Corner",
        "rarity": 1
      },
      {
        "itemID": 6563,
        "name": "Starship Hull - INT Top Inner Corner Seed",
        "rarity": 1
      },
      {
        "itemID": 6564,
        "name": "Starship Hull - EXT Roof",
        "rarity": 1
      },
      {
        "itemID": 6565,
        "name": "Starship Hull - EXT Roof Seed",
        "rarity": 1
      },
      {
        "itemID": 6566,
        "name": "Starship Hull - EXT Roof Top Corner (R)",
        "rarity": 1
      },
      {
        "itemID": 6567,
        "name": "Starship Hull - EXT Roof Top Corner (R) Seed",
        "rarity": 1
      },
      {
        "itemID": 6568,
        "name": "Starship Hull - EXT Roof Bottom Corner (R)",
        "rarity": 1
      },
      {
        "itemID": 6569,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) Seed",
        "rarity": 1
      },
      {
        "itemID": 6570,
        "name": "Starship Hull - EXT Thrusters",
        "rarity": 1
      },
      {
        "itemID": 6571,
        "name": "Starship Hull - EXT Thrusters Seed",
        "rarity": 1
      },
      {
        "itemID": 6572,
        "name": "Starship Hull - EXT Top Thruster",
        "rarity": 1
      },
      {
        "itemID": 6573,
        "name": "Starship Hull - EXT Top Thruster Seed",
        "rarity": 1
      },
      {
        "itemID": 6574,
        "name": "Starship Hull - EXT Bottom Thruster",
        "rarity": 1
      },
      {
        "itemID": 6575,
        "name": "Starship Hull - EXT Bottom Thruster Seed",
        "rarity": 1
      },
      {
        "itemID": 6576,
        "name": "Starship Hull - EXT Wall",
        "rarity": 1
      },
      {
        "itemID": 6577,
        "name": "Starship Hull - EXT Wall Seed",
        "rarity": 1
      },
      {
        "itemID": 6578,
        "name": "Starship Hull - EXT Top Wall",
        "rarity": 1
      },
      {
        "itemID": 6579,
        "name": "Starship Hull - EXT Top Wall Seed",
        "rarity": 1
      },
      {
        "itemID": 6580,
        "name": "Starship Hull - EXT Bottom Wall",
        "rarity": 1
      },
      {
        "itemID": 6581,
        "name": "Starship Hull - EXT Bottom Wall Seed",
        "rarity": 1
      },
      {
        "itemID": 6582,
        "name": "Starship Hull - EXT Bottom Wall Corner (L)",
        "rarity": 1
      },
      {
        "itemID": 6583,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) Seed",
        "rarity": 1
      },
      {
        "itemID": 6584,
        "name": "Starship Hull - EXT Bottom Vent",
        "rarity": 1
      },
      {
        "itemID": 6585,
        "name": "Starship Hull - EXT Bottom Vent Seed",
        "rarity": 1
      },
      {
        "itemID": 6586,
        "name": "Starship Hull - EXT Bottom Detail",
        "rarity": 1
      },
      {
        "itemID": 6587,
        "name": "Starship Hull - EXT Bottom Detail Seed",
        "rarity": 1
      },
      {
        "itemID": 6588,
        "name": "Starship Hull - EXT Bottom",
        "rarity": 1
      },
      {
        "itemID": 6589,
        "name": "Starship Hull - EXT Bottom Seed",
        "rarity": 1
      },
      {
        "itemID": 6590,
        "name": "Starship Hull - EXT Bottom Wall Corner (R)",
        "rarity": 1
      },
      {
        "itemID": 6591,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) Seed",
        "rarity": 1
      },
      {
        "itemID": 6592,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R)",
        "rarity": 1
      },
      {
        "itemID": 6593,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) Seed",
        "rarity": 1
      },
      {
        "itemID": 6594,
        "name": "Starship Hull - EXT Cockpit",
        "rarity": 1
      },
      {
        "itemID": 6595,
        "name": "Starship Hull - EXT Cockpit Seed",
        "rarity": 1
      },
      {
        "itemID": 6596,
        "name": "Starship Hull - EXT Top Roof Corner (L)",
        "rarity": 1
      },
      {
        "itemID": 6597,
        "name": "Starship Hull - EXT Top Roof Corner (L) Seed",
        "rarity": 1
      },
      {
        "itemID": 6598,
        "name": "Starship Hull - EXT Roof (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6599,
        "name": "Starship Hull - EXT Roof (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6600,
        "name": "Starship Hull - EXT Roof Top Corner (R) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6601,
        "name": "Starship Hull - EXT Roof Top Corner (R) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6602,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6603,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6604,
        "name": "Starship Hull - EXT Thrusters (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6605,
        "name": "Starship Hull - EXT Thrusters (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6606,
        "name": "Starship Hull - EXT Top Thruster (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6607,
        "name": "Starship Hull - EXT Top Thruster (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6608,
        "name": "Starship Hull - EXT Bottom Thruster (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6609,
        "name": "Starship Hull - EXT Bottom Thruster (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6610,
        "name": "Starship Hull - EXT Wall (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6611,
        "name": "Starship Hull - EXT Wall (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6612,
        "name": "Starship Hull - EXT Top Wall (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6613,
        "name": "Starship Hull - EXT Top Wall (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6614,
        "name": "Starship Hull - EXT Bottom Wall (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6615,
        "name": "Starship Hull - EXT Bottom Wall (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6616,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6617,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6618,
        "name": "Starship Hull - EXT Bottom Vent (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6619,
        "name": "Starship Hull - EXT Bottom Vent (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6620,
        "name": "Starship Hull - EXT Bottom Detail (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6621,
        "name": "Starship Hull - EXT Bottom Detail (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6622,
        "name": "Starship Hull - EXT Bottom (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6623,
        "name": "Starship Hull - EXT Bottom (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6624,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6625,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6626,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6627,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6628,
        "name": "Starship Hull - EXT Cockpit (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6629,
        "name": "Starship Hull - EXT Cockpit (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6630,
        "name": "Starship Hull - EXT Top Roof Corner (L) (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6631,
        "name": "Starship Hull - EXT Top Roof Corner (L) (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6632,
        "name": "Starship Hull - EXT Roof (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6633,
        "name": "Starship Hull - EXT Roof (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6634,
        "name": "Starship Hull - EXT Roof Top Corner (R) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6635,
        "name": "Starship Hull - EXT Roof Top Corner (R) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6636,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6637,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6638,
        "name": "Starship Hull - EXT Thrusters (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6639,
        "name": "Starship Hull - EXT Thrusters (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6640,
        "name": "Starship Hull - EXT Top Thruster (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6641,
        "name": "Starship Hull - EXT Top Thruster (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6642,
        "name": "Starship Hull - EXT Bottom Thruster (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6643,
        "name": "Starship Hull - EXT Bottom Thruster (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6644,
        "name": "Starship Hull - EXT Wall (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6645,
        "name": "Starship Hull - EXT Wall (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6646,
        "name": "Starship Hull - EXT Top Wall (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6647,
        "name": "Starship Hull - EXT Top Wall (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6648,
        "name": "Starship Hull - EXT Bottom Wall (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6649,
        "name": "Starship Hull - EXT Bottom Wall (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6650,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6651,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6652,
        "name": "Starship Hull - EXT Bottom Vent (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6653,
        "name": "Starship Hull - EXT Bottom Vent (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6654,
        "name": "Starship Hull - EXT Bottom Detail (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6655,
        "name": "Starship Hull - EXT Bottom Detail (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6656,
        "name": "Starship Hull - EXT Bottom (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6657,
        "name": "Starship Hull - EXT Bottom (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6658,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6659,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6660,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6661,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6662,
        "name": "Starship Hull - EXT Cockpit (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6663,
        "name": "Starship Hull - EXT Cockpit (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6664,
        "name": "Starship Hull - EXT Top Roof Corner (L) (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6665,
        "name": "Starship Hull - EXT Top Roof Corner (L) (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6666,
        "name": "HyperTech Starship Blast",
        "rarity": 999
      },
      {
        "itemID": 6667,
        "name": "HyperTech Starship Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 6668,
        "name": "Field Grass",
        "rarity": 72
      },
      {
        "itemID": 6669,
        "name": "Field Grass Seed",
        "rarity": 72
      },
      {
        "itemID": 6670,
        "name": "World Cup Cleats",
        "rarity": 999
      },
      {
        "itemID": 6671,
        "name": "World Cup Cleats Seed",
        "rarity": 999
      },
      {
        "itemID": 6672,
        "name": "Growmoji Football",
        "rarity": 999
      },
      {
        "itemID": 6673,
        "name": "Growmoji Football Seed",
        "rarity": 999
      },
      {
        "itemID": 6674,
        "name": "Ref's Jersey",
        "rarity": 44
      },
      {
        "itemID": 6675,
        "name": "Ref's Jersey Seed",
        "rarity": 44
      },
      {
        "itemID": 6676,
        "name": "World Cup Winner's Jersey 2018",
        "rarity": 999
      },
      {
        "itemID": 6677,
        "name": "World Cup Winner's Jersey 2018 Seed",
        "rarity": 999
      },
      {
        "itemID": 6678,
        "name": "Super Utility Helmet - Red",
        "rarity": 88
      },
      {
        "itemID": 6679,
        "name": "Super Utility Helmet - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 6680,
        "name": "Super Utility Shirt - Red",
        "rarity": 88
      },
      {
        "itemID": 6681,
        "name": "Super Utility Shirt - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 6682,
        "name": "Super Utility Tights - Red",
        "rarity": 88
      },
      {
        "itemID": 6683,
        "name": "Super Utility Tights - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 6684,
        "name": "Super Utility Belt",
        "rarity": 999
      },
      {
        "itemID": 6685,
        "name": "Super Utility Belt Seed",
        "rarity": 999
      },
      {
        "itemID": 6686,
        "name": "Super Utility Boots - Red",
        "rarity": 88
      },
      {
        "itemID": 6687,
        "name": "Super Utility Boots - Red Seed",
        "rarity": 88
      },
      {
        "itemID": 6688,
        "name": "Super Utility Helmet - Yellow",
        "rarity": 88
      },
      {
        "itemID": 6689,
        "name": "Super Utility Helmet - Yellow Seed",
        "rarity": 88
      },
      {
        "itemID": 6690,
        "name": "Super Utility Shirt - Yellow",
        "rarity": 88
      },
      {
        "itemID": 6691,
        "name": "Super Utility Shirt - Yellow Seed",
        "rarity": 88
      },
      {
        "itemID": 6692,
        "name": "Super Utility Tights - Yellow",
        "rarity": 88
      },
      {
        "itemID": 6693,
        "name": "Super Utility Tights - Yellow Seed",
        "rarity": 88
      },
      {
        "itemID": 6694,
        "name": "Super Utility Wings",
        "rarity": 999
      },
      {
        "itemID": 6695,
        "name": "Super Utility Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 6696,
        "name": "Super Utility Boots - Yellow",
        "rarity": 88
      },
      {
        "itemID": 6697,
        "name": "Super Utility Boots - Yellow Seed",
        "rarity": 88
      },
      {
        "itemID": 6698,
        "name": "Starship Hull - EXT Roof (RED)",
        "rarity": 1
      },
      {
        "itemID": 6699,
        "name": "Starship Hull - EXT Roof (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6700,
        "name": "Starship Hull - EXT Roof Top Corner (R) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6701,
        "name": "Starship Hull - EXT Roof Top Corner (R) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6702,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6703,
        "name": "Starship Hull - EXT Roof Bottom Corner (R) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6704,
        "name": "Starship Hull - EXT Thrusters (RED)",
        "rarity": 1
      },
      {
        "itemID": 6705,
        "name": "Starship Hull - EXT Thrusters (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6706,
        "name": "Starship Hull - EXT Top Thruster (RED)",
        "rarity": 1
      },
      {
        "itemID": 6707,
        "name": "Starship Hull - EXT Top Thruster (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6708,
        "name": "Starship Hull - EXT Bottom Thruster (RED)",
        "rarity": 1
      },
      {
        "itemID": 6709,
        "name": "Starship Hull - EXT Bottom Thruster (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6710,
        "name": "Starship Hull - EXT Wall (RED)",
        "rarity": 1
      },
      {
        "itemID": 6711,
        "name": "Starship Hull - EXT Wall (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6712,
        "name": "Starship Hull - EXT Top Wall (RED)",
        "rarity": 1
      },
      {
        "itemID": 6713,
        "name": "Starship Hull - EXT Top Wall (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6714,
        "name": "Starship Hull - EXT Bottom Wall (RED)",
        "rarity": 1
      },
      {
        "itemID": 6715,
        "name": "Starship Hull - EXT Bottom Wall (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6716,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6717,
        "name": "Starship Hull - EXT Bottom Wall Corner (L) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6718,
        "name": "Starship Hull - EXT Bottom Vent (RED)",
        "rarity": 1
      },
      {
        "itemID": 6719,
        "name": "Starship Hull - EXT Bottom Vent (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6720,
        "name": "Starship Hull - EXT Bottom Detail (RED)",
        "rarity": 1
      },
      {
        "itemID": 6721,
        "name": "Starship Hull - EXT Bottom Detail (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6722,
        "name": "Starship Hull - EXT Bottom (RED)",
        "rarity": 1
      },
      {
        "itemID": 6723,
        "name": "Starship Hull - EXT Bottom (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6724,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6725,
        "name": "Starship Hull - EXT Bottom Wall Corner (R) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6726,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6727,
        "name": "Starship Hull - EXT Bottom Wall Inner Corner (R) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6728,
        "name": "Starship Hull - EXT Cockpit (RED)",
        "rarity": 1
      },
      {
        "itemID": 6729,
        "name": "Starship Hull - EXT Cockpit (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6730,
        "name": "Starship Hull - EXT Top Roof Corner (L) (RED)",
        "rarity": 1
      },
      {
        "itemID": 6731,
        "name": "Starship Hull - EXT Top Roof Corner (L) (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6732,
        "name": "Star Tool Background",
        "rarity": 999
      },
      {
        "itemID": 6733,
        "name": "Star Tool Background Seed",
        "rarity": 999
      },
      {
        "itemID": 6734,
        "name": "Mega Buckazoid",
        "rarity": 999
      },
      {
        "itemID": 6735,
        "name": "Mega Buckazoid Seed",
        "rarity": 999
      },
      {
        "itemID": 6736,
        "name": "Starship Hull - EXT Metal Panel",
        "rarity": 1
      },
      {
        "itemID": 6737,
        "name": "Starship Hull - EXT Metal Panel Seed",
        "rarity": 1
      },
      {
        "itemID": 6738,
        "name": "Starship Hull - EXT Metal Panel (GREEN)",
        "rarity": 1
      },
      {
        "itemID": 6739,
        "name": "Starship Hull - EXT Metal Panel (GREEN) Seed",
        "rarity": 1
      },
      {
        "itemID": 6740,
        "name": "Starship Hull - EXT Metal Panel (PURPLE)",
        "rarity": 1
      },
      {
        "itemID": 6741,
        "name": "Starship Hull - EXT Metal Panel (PURPLE) Seed",
        "rarity": 1
      },
      {
        "itemID": 6742,
        "name": "Starship Hull - EXT Metal Panel (RED)",
        "rarity": 1
      },
      {
        "itemID": 6743,
        "name": "Starship Hull - EXT Metal Panel (RED) Seed",
        "rarity": 1
      },
      {
        "itemID": 6744,
        "name": "Growmoji Alien",
        "rarity": 999
      },
      {
        "itemID": 6745,
        "name": "Growmoji Alien Seed",
        "rarity": 999
      },
      {
        "itemID": 6746,
        "name": "Space",
        "rarity": 1
      },
      {
        "itemID": 6747,
        "name": "Space Seed",
        "rarity": 1
      },
      {
        "itemID": 6748,
        "name": "HyperTech Antigravity Field",
        "rarity": 999
      },
      {
        "itemID": 6749,
        "name": "HyperTech Antigravity Field Seed",
        "rarity": 999
      },
      {
        "itemID": 6750,
        "name": "Summer Blaster Mohawk",
        "rarity": 999
      },
      {
        "itemID": 6751,
        "name": "Summer Blaster Mohawk Seed",
        "rarity": 999
      },
      {
        "itemID": 6752,
        "name": "Ultra Summer Blaster Mohawk",
        "rarity": 999
      },
      {
        "itemID": 6753,
        "name": "Ultra Summer Blaster Mohawk Seed",
        "rarity": 999
      },
      {
        "itemID": 6754,
        "name": "Squirrel King",
        "rarity": 999
      },
      {
        "itemID": 6755,
        "name": "Squirrel King Seed",
        "rarity": 999
      },
      {
        "itemID": 6756,
        "name": "Scepter of the Honor Guard",
        "rarity": 999
      },
      {
        "itemID": 6757,
        "name": "Scepter of the Honor Guard Seed",
        "rarity": 999
      },
      {
        "itemID": 6758,
        "name": "Cloak of Hoveration",
        "rarity": 999
      },
      {
        "itemID": 6759,
        "name": "Cloak of Hoveration Seed",
        "rarity": 999
      },
      {
        "itemID": 6760,
        "name": "Red Contact Lens",
        "rarity": 999
      },
      {
        "itemID": 6761,
        "name": "Red Contact Lens Seed",
        "rarity": 999
      },
      {
        "itemID": 6762,
        "name": "Green Contact Lens",
        "rarity": 999
      },
      {
        "itemID": 6763,
        "name": "Green Contact Lens Seed",
        "rarity": 999
      },
      {
        "itemID": 6764,
        "name": "Blue Contact Lens",
        "rarity": 999
      },
      {
        "itemID": 6765,
        "name": "Blue Contact Lens Seed",
        "rarity": 999
      },
      {
        "itemID": 6766,
        "name": "Black Contact Lens",
        "rarity": 999
      },
      {
        "itemID": 6767,
        "name": "Black Contact Lens Seed",
        "rarity": 999
      },
      {
        "itemID": 6768,
        "name": "Contact Lens Cleaning Solution",
        "rarity": 999
      },
      {
        "itemID": 6769,
        "name": "Contact Lens Cleaning Solution Seed",
        "rarity": 999
      },
      {
        "itemID": 6770,
        "name": "Rara Skirt",
        "rarity": 999
      },
      {
        "itemID": 6771,
        "name": "Rara Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 6772,
        "name": "Gravity Well",
        "rarity": 999
      },
      {
        "itemID": 6773,
        "name": "Gravity Well Seed",
        "rarity": 999
      },
      {
        "itemID": 6774,
        "name": "Little Red Hoodie",
        "rarity": 999
      },
      {
        "itemID": 6775,
        "name": "Little Red Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 6776,
        "name": "Big Bad Blue Hoodie",
        "rarity": 999
      },
      {
        "itemID": 6777,
        "name": "Big Bad Blue Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 6778,
        "name": "Punk Purple Hoodie",
        "rarity": 999
      },
      {
        "itemID": 6779,
        "name": "Punk Purple Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 6780,
        "name": "Dabstep Low Top Sneakers",
        "rarity": 999
      },
      {
        "itemID": 6781,
        "name": "Dabstep Low Top Sneakers Seed",
        "rarity": 999
      },
      {
        "itemID": 6782,
        "name": "Horns of Infinity",
        "rarity": 999
      },
      {
        "itemID": 6783,
        "name": "Horns of Infinity Seed",
        "rarity": 999
      },
      {
        "itemID": 6784,
        "name": "Rhinestone Evening Dress",
        "rarity": 65
      },
      {
        "itemID": 6785,
        "name": "Rhinestone Evening Dress Seed",
        "rarity": 65
      },
      {
        "itemID": 6786,
        "name": "Plaid Skirt",
        "rarity": 999
      },
      {
        "itemID": 6787,
        "name": "Plaid Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 6788,
        "name": "Peplum Top",
        "rarity": 27
      },
      {
        "itemID": 6789,
        "name": "Peplum Top Seed",
        "rarity": 27
      },
      {
        "itemID": 6790,
        "name": "Stripy Jumpsuit",
        "rarity": 999
      },
      {
        "itemID": 6791,
        "name": "Stripy Jumpsuit Seed",
        "rarity": 999
      },
      {
        "itemID": 6792,
        "name": "French Maid's Dress",
        "rarity": 999
      },
      {
        "itemID": 6793,
        "name": "French Maid's Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 6794,
        "name": "Twintail Hair",
        "rarity": 999
      },
      {
        "itemID": 6795,
        "name": "Twintail Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 6796,
        "name": "Braided Hair",
        "rarity": 44
      },
      {
        "itemID": 6797,
        "name": "Braided Hair Seed",
        "rarity": 44
      },
      {
        "itemID": 6798,
        "name": "Growmoji Face Mask",
        "rarity": 999
      },
      {
        "itemID": 6799,
        "name": "Growmoji Face Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 6800,
        "name": "Pet Rock",
        "rarity": 999
      },
      {
        "itemID": 6801,
        "name": "Pet Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 6802,
        "name": "Mega Growtoken",
        "rarity": 999
      },
      {
        "itemID": 6803,
        "name": "Mega Growtoken Seed",
        "rarity": 999
      },
      {
        "itemID": 6804,
        "name": "Bubble Gun",
        "rarity": 999
      },
      {
        "itemID": 6805,
        "name": "Bubble Gun Seed",
        "rarity": 999
      },
      {
        "itemID": 6806,
        "name": "Oink-Oink Nose",
        "rarity": 999
      },
      {
        "itemID": 6807,
        "name": "Oink-Oink Nose Seed",
        "rarity": 999
      },
      {
        "itemID": 6808,
        "name": "Sheet Music: Violin Note",
        "rarity": 18
      },
      {
        "itemID": 6809,
        "name": "Sheet Music: Violin Note Seed",
        "rarity": 18
      },
      {
        "itemID": 6810,
        "name": "Sheet Music: Sharp Violin",
        "rarity": 26
      },
      {
        "itemID": 6811,
        "name": "Sheet Music: Sharp Violin Seed",
        "rarity": 26
      },
      {
        "itemID": 6812,
        "name": "Sheet Music: Flat Violin",
        "rarity": 19
      },
      {
        "itemID": 6813,
        "name": "Sheet Music: Flat Violin Seed",
        "rarity": 19
      },
      {
        "itemID": 6814,
        "name": "Bubblicious Hair",
        "rarity": 999
      },
      {
        "itemID": 6815,
        "name": "Bubblicious Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 6816,
        "name": "Fire Punk Hair",
        "rarity": 999
      },
      {
        "itemID": 6817,
        "name": "Fire Punk Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 6818,
        "name": "Nightwings",
        "rarity": 999
      },
      {
        "itemID": 6819,
        "name": "Nightwings Seed",
        "rarity": 999
      },
      {
        "itemID": 6820,
        "name": "Crystal Shard Necklace",
        "rarity": 999
      },
      {
        "itemID": 6821,
        "name": "Crystal Shard Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 6822,
        "name": "Growmoji Party",
        "rarity": 999
      },
      {
        "itemID": 6823,
        "name": "Growmoji Party Seed",
        "rarity": 999
      },
      {
        "itemID": 6824,
        "name": "Growmoji Pizza",
        "rarity": 999
      },
      {
        "itemID": 6825,
        "name": "Growmoji Pizza Seed",
        "rarity": 999
      },
      {
        "itemID": 6826,
        "name": "Anomalizing Reliable Trowel",
        "rarity": 999
      },
      {
        "itemID": 6827,
        "name": "Anomalizing Reliable Trowel Seed",
        "rarity": 999
      },
      {
        "itemID": 6828,
        "name": "Anomalizing Pristine Trowel",
        "rarity": 999
      },
      {
        "itemID": 6829,
        "name": "Anomalizing Pristine Trowel Seed",
        "rarity": 999
      },
      {
        "itemID": 6830,
        "name": "Exquisite Trowel",
        "rarity": 999
      },
      {
        "itemID": 6831,
        "name": "Exquisite Trowel Seed",
        "rarity": 999
      },
      {
        "itemID": 6832,
        "name": "Anomalizing Reliable Cultivator",
        "rarity": 999
      },
      {
        "itemID": 6833,
        "name": "Anomalizing Reliable Cultivator Seed",
        "rarity": 999
      },
      {
        "itemID": 6834,
        "name": "Anomalizing Pristine Cultivator",
        "rarity": 999
      },
      {
        "itemID": 6835,
        "name": "Anomalizing Pristine Cultivator Seed",
        "rarity": 999
      },
      {
        "itemID": 6836,
        "name": "Exquisite Cultivator",
        "rarity": 999
      },
      {
        "itemID": 6837,
        "name": "Exquisite Cultivator Seed",
        "rarity": 999
      },
      {
        "itemID": 6838,
        "name": "Amber Resin",
        "rarity": 999
      },
      {
        "itemID": 6839,
        "name": "Amber Resin Seed",
        "rarity": 999
      },
      {
        "itemID": 6840,
        "name": "Dreamcatcher Staff",
        "rarity": 999
      },
      {
        "itemID": 6841,
        "name": "Dreamcatcher Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 6842,
        "name": "Raven Wings",
        "rarity": 999
      },
      {
        "itemID": 6843,
        "name": "Raven Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 6844,
        "name": "Amber Necklace",
        "rarity": 999
      },
      {
        "itemID": 6845,
        "name": "Amber Necklace Seed",
        "rarity": 999
      },
      {
        "itemID": 6846,
        "name": "Ring of Nature",
        "rarity": 999
      },
      {
        "itemID": 6847,
        "name": "Ring of Nature Seed",
        "rarity": 999
      },
      {
        "itemID": 6848,
        "name": "Luminous Eyes",
        "rarity": 999
      },
      {
        "itemID": 6849,
        "name": "Luminous Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 6850,
        "name": "Tutorial Exit Door",
        "rarity": 1
      },
      {
        "itemID": 6851,
        "name": "Tutorial Exit Door Seed",
        "rarity": 1
      },
      {
        "itemID": 6852,
        "name": "Tutorial Regen Block",
        "rarity": 1
      },
      {
        "itemID": 6853,
        "name": "Tutorial Regen Block Seed",
        "rarity": 1
      },
      {
        "itemID": 6854,
        "name": "Weather Machine - Digital Rain",
        "rarity": 999
      },
      {
        "itemID": 6855,
        "name": "Weather Machine - Digital Rain Seed",
        "rarity": 999
      },
      {
        "itemID": 6856,
        "name": "3-Day Free Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 6857,
        "name": "3-Day Free Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 6858,
        "name": "14-Day Free Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 6859,
        "name": "14-Day Free Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 6860,
        "name": "30-Day Premium Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 6861,
        "name": "30-Day Premium Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 6862,
        "name": "365-Day Premium Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 6863,
        "name": "365-Day Premium Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 6864,
        "name": "Tutorial Regen BG",
        "rarity": 1
      },
      {
        "itemID": 6865,
        "name": "Tutorial Regen BG Seed",
        "rarity": 1
      },
      {
        "itemID": 6866,
        "name": "Raw Gauntlet of Elements",
        "rarity": 999
      },
      {
        "itemID": 6867,
        "name": "Raw Gauntlet of Elements Seed",
        "rarity": 999
      },
      {
        "itemID": 6868,
        "name": "Gauntlet of Elements - Tier I",
        "rarity": 999
      },
      {
        "itemID": 6869,
        "name": "Gauntlet of Elements - Tier I Seed",
        "rarity": 999
      },
      {
        "itemID": 6870,
        "name": "Gauntlet of Elements - Tier II",
        "rarity": 999
      },
      {
        "itemID": 6871,
        "name": "Gauntlet of Elements - Tier II Seed",
        "rarity": 999
      },
      {
        "itemID": 6872,
        "name": "Gauntlet of Elements - Tier III",
        "rarity": 999
      },
      {
        "itemID": 6873,
        "name": "Gauntlet of Elements - Tier III Seed",
        "rarity": 999
      },
      {
        "itemID": 6874,
        "name": "Gauntlet of Elements - Tier IV",
        "rarity": 999
      },
      {
        "itemID": 6875,
        "name": "Gauntlet of Elements - Tier IV Seed",
        "rarity": 999
      },
      {
        "itemID": 6876,
        "name": "Gauntlet of Elements - Tier V",
        "rarity": 999
      },
      {
        "itemID": 6877,
        "name": "Gauntlet of Elements - Tier V Seed",
        "rarity": 999
      },
      {
        "itemID": 6878,
        "name": "Exquisite Gauntlet of Elements",
        "rarity": 999
      },
      {
        "itemID": 6879,
        "name": "Exquisite Gauntlet of Elements Seed",
        "rarity": 999
      },
      {
        "itemID": 6880,
        "name": "Life Stone",
        "rarity": 999
      },
      {
        "itemID": 6881,
        "name": "Life Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6882,
        "name": "Wind Stone",
        "rarity": 999
      },
      {
        "itemID": 6883,
        "name": "Wind Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6884,
        "name": "Death Stone",
        "rarity": 999
      },
      {
        "itemID": 6885,
        "name": "Death Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6886,
        "name": "Fire Stone",
        "rarity": 999
      },
      {
        "itemID": 6887,
        "name": "Fire Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6888,
        "name": "Water Stone",
        "rarity": 999
      },
      {
        "itemID": 6889,
        "name": "Water Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6890,
        "name": "Earth Stone",
        "rarity": 999
      },
      {
        "itemID": 6891,
        "name": "Earth Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6892,
        "name": "Sorcerer's Tunic of Mystery",
        "rarity": 999
      },
      {
        "itemID": 6893,
        "name": "Sorcerer's Tunic of Mystery Seed",
        "rarity": 999
      },
      {
        "itemID": 6894,
        "name": "Growmoji Clapping Hands",
        "rarity": 999
      },
      {
        "itemID": 6895,
        "name": "Growmoji Clapping Hands Seed",
        "rarity": 999
      },
      {
        "itemID": 6896,
        "name": "Yellow Hardhat",
        "rarity": 999
      },
      {
        "itemID": 6897,
        "name": "Yellow Hardhat Seed",
        "rarity": 999
      },
      {
        "itemID": 6898,
        "name": "Munchin' Straw",
        "rarity": 999
      },
      {
        "itemID": 6899,
        "name": "Munchin' Straw Seed",
        "rarity": 999
      },
      {
        "itemID": 6900,
        "name": "EMT Jumpsuit",
        "rarity": 999
      },
      {
        "itemID": 6901,
        "name": "EMT Jumpsuit Seed",
        "rarity": 999
      },
      {
        "itemID": 6902,
        "name": "Fishing Wader Boots",
        "rarity": 999
      },
      {
        "itemID": 6903,
        "name": "Fishing Wader Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 6904,
        "name": "Star Captain's Hat",
        "rarity": 999
      },
      {
        "itemID": 6905,
        "name": "Star Captain's Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 6906,
        "name": "Composer's Cookie",
        "rarity": 999
      },
      {
        "itemID": 6907,
        "name": "Composer's Cookie Seed",
        "rarity": 999
      },
      {
        "itemID": 6908,
        "name": "Glutton's Gazpacho",
        "rarity": 999
      },
      {
        "itemID": 6909,
        "name": "Glutton's Gazpacho Seed",
        "rarity": 999
      },
      {
        "itemID": 6910,
        "name": "Growlectables",
        "rarity": 999
      },
      {
        "itemID": 6911,
        "name": "Growlectables Seed",
        "rarity": 999
      },
      {
        "itemID": 6912,
        "name": "Skill Spice",
        "rarity": 999
      },
      {
        "itemID": 6913,
        "name": "Skill Spice Seed",
        "rarity": 999
      },
      {
        "itemID": 6914,
        "name": "Gemonade",
        "rarity": 999
      },
      {
        "itemID": 6915,
        "name": "Gemonade Seed",
        "rarity": 999
      },
      {
        "itemID": 6916,
        "name": "Flashback Flan",
        "rarity": 999
      },
      {
        "itemID": 6917,
        "name": "Flashback Flan Seed",
        "rarity": 999
      },
      {
        "itemID": 6918,
        "name": "Delicate Potion",
        "rarity": 999
      },
      {
        "itemID": 6919,
        "name": "Delicate Potion Seed",
        "rarity": 999
      },
      {
        "itemID": 6920,
        "name": "Pristine Potion",
        "rarity": 999
      },
      {
        "itemID": 6921,
        "name": "Pristine Potion Seed",
        "rarity": 999
      },
      {
        "itemID": 6922,
        "name": "Elegant Potion",
        "rarity": 999
      },
      {
        "itemID": 6923,
        "name": "Elegant Potion Seed",
        "rarity": 999
      },
      {
        "itemID": 6924,
        "name": "Exquisite Potion",
        "rarity": 999
      },
      {
        "itemID": 6925,
        "name": "Exquisite Potion Seed",
        "rarity": 999
      },
      {
        "itemID": 6926,
        "name": "Anomalizing Elegant Hammer",
        "rarity": 999
      },
      {
        "itemID": 6927,
        "name": "Anomalizing Elegant Hammer Seed",
        "rarity": 999
      },
      {
        "itemID": 6928,
        "name": "Anomalizing Elegant Scythe",
        "rarity": 999
      },
      {
        "itemID": 6929,
        "name": "Anomalizing Elegant Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 6930,
        "name": "Anomalizing Elegant Bone Saw",
        "rarity": 999
      },
      {
        "itemID": 6931,
        "name": "Anomalizing Elegant Bone Saw Seed",
        "rarity": 999
      },
      {
        "itemID": 6932,
        "name": "Elegant Anomarod",
        "rarity": 999
      },
      {
        "itemID": 6933,
        "name": "Elegant Anomarod Seed",
        "rarity": 999
      },
      {
        "itemID": 6934,
        "name": "Anomalizing Elegant Trowel",
        "rarity": 999
      },
      {
        "itemID": 6935,
        "name": "Anomalizing Elegant Trowel Seed",
        "rarity": 999
      },
      {
        "itemID": 6936,
        "name": "Anomalizing Elegant Cultivator",
        "rarity": 999
      },
      {
        "itemID": 6937,
        "name": "Anomalizing Elegant Cultivator Seed",
        "rarity": 999
      },
      {
        "itemID": 6938,
        "name": "Anomalizing Reliable Scanner",
        "rarity": 999
      },
      {
        "itemID": 6939,
        "name": "Anomalizing Reliable Scanner Seed",
        "rarity": 999
      },
      {
        "itemID": 6940,
        "name": "Anomalizing Pristine Scanner",
        "rarity": 999
      },
      {
        "itemID": 6941,
        "name": "Anomalizing Pristine Scanner Seed",
        "rarity": 999
      },
      {
        "itemID": 6942,
        "name": "Exquisite Scanner",
        "rarity": 999
      },
      {
        "itemID": 6943,
        "name": "Exquisite Scanner Seed",
        "rarity": 999
      },
      {
        "itemID": 6944,
        "name": "Anomalizing Elegant Scanner",
        "rarity": 999
      },
      {
        "itemID": 6945,
        "name": "Anomalizing Elegant Scanner Seed",
        "rarity": 999
      },
      {
        "itemID": 6946,
        "name": "Gaia's Beacon",
        "rarity": 999
      },
      {
        "itemID": 6947,
        "name": "Gaia's Beacon Seed",
        "rarity": 999
      },
      {
        "itemID": 6948,
        "name": "Unstable Tesseract",
        "rarity": 999
      },
      {
        "itemID": 6949,
        "name": "Unstable Tesseract Seed",
        "rarity": 999
      },
      {
        "itemID": 6950,
        "name": "Heart of Gaia",
        "rarity": 999
      },
      {
        "itemID": 6951,
        "name": "Heart of Gaia Seed",
        "rarity": 999
      },
      {
        "itemID": 6952,
        "name": "Tesseract Manipulator",
        "rarity": 999
      },
      {
        "itemID": 6953,
        "name": "Tesseract Manipulator Seed",
        "rarity": 999
      },
      {
        "itemID": 6954,
        "name": "Techno-Organic Engine",
        "rarity": 999
      },
      {
        "itemID": 6955,
        "name": "Techno-Organic Engine Seed",
        "rarity": 999
      },
      {
        "itemID": 6956,
        "name": "Beat-root Block",
        "rarity": 999
      },
      {
        "itemID": 6957,
        "name": "Beat-root Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6958,
        "name": "Beat-root Puree",
        "rarity": 999
      },
      {
        "itemID": 6959,
        "name": "Beat-root Puree Seed",
        "rarity": 999
      },
      {
        "itemID": 6960,
        "name": "Carrot Block",
        "rarity": 999
      },
      {
        "itemID": 6961,
        "name": "Carrot Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6962,
        "name": "Bloccoli Mini-Tree",
        "rarity": 999
      },
      {
        "itemID": 6963,
        "name": "Bloccoli Mini-Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 6964,
        "name": "Strawberry Block",
        "rarity": 999
      },
      {
        "itemID": 6965,
        "name": "Strawberry Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6966,
        "name": "Riding Bull",
        "rarity": 999
      },
      {
        "itemID": 6967,
        "name": "Riding Bull Seed",
        "rarity": 999
      },
      {
        "itemID": 6968,
        "name": "Saffron Crocus Flower",
        "rarity": 999
      },
      {
        "itemID": 6969,
        "name": "Saffron Crocus Flower Seed",
        "rarity": 999
      },
      {
        "itemID": 6970,
        "name": "Bio-Waste",
        "rarity": 999
      },
      {
        "itemID": 6971,
        "name": "Bio-Waste Seed",
        "rarity": 999
      },
      {
        "itemID": 6972,
        "name": "Toffee Block",
        "rarity": 999
      },
      {
        "itemID": 6973,
        "name": "Toffee Block Seed",
        "rarity": 999
      },
      {
        "itemID": 6974,
        "name": "Caramel",
        "rarity": 999
      },
      {
        "itemID": 6975,
        "name": "Caramel Seed",
        "rarity": 999
      },
      {
        "itemID": 6976,
        "name": "Electrical Power Cube",
        "rarity": 999
      },
      {
        "itemID": 6977,
        "name": "Electrical Power Cube Seed",
        "rarity": 999
      },
      {
        "itemID": 6978,
        "name": "Operating Theater Lamp",
        "rarity": 999
      },
      {
        "itemID": 6979,
        "name": "Operating Theater Lamp Seed",
        "rarity": 999
      },
      {
        "itemID": 6980,
        "name": "Tiled Staircase",
        "rarity": 999
      },
      {
        "itemID": 6981,
        "name": "Tiled Staircase Seed",
        "rarity": 999
      },
      {
        "itemID": 6982,
        "name": "Wheelchair Speedster",
        "rarity": 999
      },
      {
        "itemID": 6983,
        "name": "Wheelchair Speedster Seed",
        "rarity": 999
      },
      {
        "itemID": 6984,
        "name": "Slip 'n' Slide Slime Floor",
        "rarity": 999
      },
      {
        "itemID": 6985,
        "name": "Slip 'n' Slide Slime Floor Seed",
        "rarity": 999
      },
      {
        "itemID": 6986,
        "name": "Aquamarine Stone",
        "rarity": 999
      },
      {
        "itemID": 6987,
        "name": "Aquamarine Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 6988,
        "name": "Primordial Ooze",
        "rarity": 999
      },
      {
        "itemID": 6989,
        "name": "Primordial Ooze Seed",
        "rarity": 999
      },
      {
        "itemID": 6990,
        "name": "Primordial Soup",
        "rarity": 999
      },
      {
        "itemID": 6991,
        "name": "Primordial Soup Seed",
        "rarity": 999
      },
      {
        "itemID": 6992,
        "name": "Sea Sponge",
        "rarity": 999
      },
      {
        "itemID": 6993,
        "name": "Sea Sponge Seed",
        "rarity": 999
      },
      {
        "itemID": 6994,
        "name": "Naval Mine",
        "rarity": 999
      },
      {
        "itemID": 6995,
        "name": "Naval Mine Seed",
        "rarity": 999
      },
      {
        "itemID": 6996,
        "name": "Fishing Dinghy",
        "rarity": 999
      },
      {
        "itemID": 6997,
        "name": "Fishing Dinghy Seed",
        "rarity": 999
      },
      {
        "itemID": 6998,
        "name": "Mint",
        "rarity": 999
      },
      {
        "itemID": 6999,
        "name": "Mint Seed",
        "rarity": 999
      },
      {
        "itemID": 7000,
        "name": "Sprig of Mint",
        "rarity": 999
      },
      {
        "itemID": 7001,
        "name": "Sprig of Mint Seed",
        "rarity": 999
      },
      {
        "itemID": 7002,
        "name": "Quantum Starfish",
        "rarity": 999
      },
      {
        "itemID": 7003,
        "name": "Quantum Starfish Seed",
        "rarity": 999
      },
      {
        "itemID": 7004,
        "name": "Chrono-Luminescent Liquid",
        "rarity": 999
      },
      {
        "itemID": 7005,
        "name": "Chrono-Luminescent Liquid Seed",
        "rarity": 999
      },
      {
        "itemID": 7006,
        "name": "Space Rock",
        "rarity": 999
      },
      {
        "itemID": 7007,
        "name": "Space Rock Seed",
        "rarity": 999
      },
      {
        "itemID": 7008,
        "name": "Star Tool Nanoforge",
        "rarity": 999
      },
      {
        "itemID": 7009,
        "name": "Star Tool Nanoforge Seed",
        "rarity": 999
      },
      {
        "itemID": 7010,
        "name": "Starship Packing Crate",
        "rarity": 999
      },
      {
        "itemID": 7011,
        "name": "Starship Packing Crate Seed",
        "rarity": 999
      },
      {
        "itemID": 7012,
        "name": "Encapsulated Galaxy",
        "rarity": 999
      },
      {
        "itemID": 7013,
        "name": "Encapsulated Galaxy Seed",
        "rarity": 999
      },
      {
        "itemID": 7014,
        "name": "Cosmic 5-Spice Star",
        "rarity": 999
      },
      {
        "itemID": 7015,
        "name": "Cosmic 5-Spice Star Seed",
        "rarity": 999
      },
      {
        "itemID": 7016,
        "name": "Energy Capsule",
        "rarity": 999
      },
      {
        "itemID": 7017,
        "name": "Energy Capsule Seed",
        "rarity": 999
      },
      {
        "itemID": 7018,
        "name": "Starship Turbo Fan",
        "rarity": 999
      },
      {
        "itemID": 7019,
        "name": "Starship Turbo Fan Seed",
        "rarity": 999
      },
      {
        "itemID": 7020,
        "name": "Cupcake Apron",
        "rarity": 999
      },
      {
        "itemID": 7021,
        "name": "Cupcake Apron Seed",
        "rarity": 999
      },
      {
        "itemID": 7022,
        "name": "Mengu Koi Samurai Facial Armor",
        "rarity": 999
      },
      {
        "itemID": 7023,
        "name": "Mengu Koi Samurai Facial Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 7024,
        "name": "Geta",
        "rarity": 999
      },
      {
        "itemID": 7025,
        "name": "Geta Seed",
        "rarity": 999
      },
      {
        "itemID": 7026,
        "name": "Pink Kimono",
        "rarity": 999
      },
      {
        "itemID": 7027,
        "name": "Pink Kimono Seed",
        "rarity": 999
      },
      {
        "itemID": 7028,
        "name": "Blue Kimono",
        "rarity": 999
      },
      {
        "itemID": 7029,
        "name": "Blue Kimono Seed",
        "rarity": 999
      },
      {
        "itemID": 7030,
        "name": "Orange Kimono",
        "rarity": 999
      },
      {
        "itemID": 7031,
        "name": "Orange Kimono Seed",
        "rarity": 999
      },
      {
        "itemID": 7032,
        "name": "Ornamental Hair Fan & Chopsticks",
        "rarity": 999
      },
      {
        "itemID": 7033,
        "name": "Ornamental Hair Fan & Chopsticks Seed",
        "rarity": 999
      },
      {
        "itemID": 7034,
        "name": "Oil-paper Umbrella",
        "rarity": 999
      },
      {
        "itemID": 7035,
        "name": "Oil-paper Umbrella Seed",
        "rarity": 999
      },
      {
        "itemID": 7036,
        "name": "Geisha Makeup",
        "rarity": 999
      },
      {
        "itemID": 7037,
        "name": "Geisha Makeup Seed",
        "rarity": 999
      },
      {
        "itemID": 7038,
        "name": "Panda Mask",
        "rarity": 999
      },
      {
        "itemID": 7039,
        "name": "Panda Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7040,
        "name": "Panda Suit",
        "rarity": 999
      },
      {
        "itemID": 7041,
        "name": "Panda Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7042,
        "name": "Master Sensei's White Eyebrows",
        "rarity": 999
      },
      {
        "itemID": 7043,
        "name": "Master Sensei's White Eyebrows Seed",
        "rarity": 999
      },
      {
        "itemID": 7044,
        "name": "Jade Crescent Axe",
        "rarity": 999
      },
      {
        "itemID": 7045,
        "name": "Jade Crescent Axe Seed",
        "rarity": 999
      },
      {
        "itemID": 7046,
        "name": "Cherry Blossom Tree",
        "rarity": 28
      },
      {
        "itemID": 7047,
        "name": "Cherry Blossom Tree Seed",
        "rarity": 28
      },
      {
        "itemID": 7048,
        "name": "Jade Spikes",
        "rarity": 20
      },
      {
        "itemID": 7049,
        "name": "Jade Spikes Seed",
        "rarity": 20
      },
      {
        "itemID": 7050,
        "name": "Coconut",
        "rarity": 999
      },
      {
        "itemID": 7051,
        "name": "Coconut Seed",
        "rarity": 999
      },
      {
        "itemID": 7052,
        "name": "Coconut Water",
        "rarity": 999
      },
      {
        "itemID": 7053,
        "name": "Coconut Water Seed",
        "rarity": 999
      },
      {
        "itemID": 7054,
        "name": "Coconut Milk",
        "rarity": 999
      },
      {
        "itemID": 7055,
        "name": "Coconut Milk Seed",
        "rarity": 999
      },
      {
        "itemID": 7056,
        "name": "Coconut Tart",
        "rarity": 999
      },
      {
        "itemID": 7057,
        "name": "Coconut Tart Seed",
        "rarity": 999
      },
      {
        "itemID": 7058,
        "name": "Purity Mooncake",
        "rarity": 999
      },
      {
        "itemID": 7059,
        "name": "Purity Mooncake Seed",
        "rarity": 999
      },
      {
        "itemID": 7060,
        "name": "Koi Fish Leash",
        "rarity": 999
      },
      {
        "itemID": 7061,
        "name": "Koi Fish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 7062,
        "name": "Growmoji Songpyeon",
        "rarity": 999
      },
      {
        "itemID": 7063,
        "name": "Growmoji Songpyeon Seed",
        "rarity": 999
      },
      {
        "itemID": 7064,
        "name": "Dumb Farmer",
        "rarity": 999
      },
      {
        "itemID": 7065,
        "name": "Dumb Farmer Seed",
        "rarity": 999
      },
      {
        "itemID": 7066,
        "name": "Growtorial Entrance",
        "rarity": 1
      },
      {
        "itemID": 7067,
        "name": "Growtorial Entrance Seed",
        "rarity": 1
      },
      {
        "itemID": 7068,
        "name": "Dumb Surgeon",
        "rarity": 999
      },
      {
        "itemID": 7069,
        "name": "Dumb Surgeon Seed",
        "rarity": 999
      },
      {
        "itemID": 7070,
        "name": "Dumb Builder",
        "rarity": 999
      },
      {
        "itemID": 7071,
        "name": "Dumb Builder Seed",
        "rarity": 999
      },
      {
        "itemID": 7072,
        "name": "Dumb Fisher",
        "rarity": 999
      },
      {
        "itemID": 7073,
        "name": "Dumb Fisher Seed",
        "rarity": 999
      },
      {
        "itemID": 7074,
        "name": "Dumb Star Captain",
        "rarity": 999
      },
      {
        "itemID": 7075,
        "name": "Dumb Star Captain Seed",
        "rarity": 999
      },
      {
        "itemID": 7076,
        "name": "Dumb Cook",
        "rarity": 999
      },
      {
        "itemID": 7077,
        "name": "Dumb Cook Seed",
        "rarity": 999
      },
      {
        "itemID": 7078,
        "name": "Legendary Clash Key & Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 7079,
        "name": "Legendary Clash Key & Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 7080,
        "name": "Ezio's Hood",
        "rarity": 999
      },
      {
        "itemID": 7081,
        "name": "Ezio's Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 7082,
        "name": "Ezio's Vest",
        "rarity": 999
      },
      {
        "itemID": 7083,
        "name": "Ezio's Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 7084,
        "name": "Ezio's Cape",
        "rarity": 999
      },
      {
        "itemID": 7085,
        "name": "Ezio's Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 7086,
        "name": "Ezio's Trousers",
        "rarity": 999
      },
      {
        "itemID": 7087,
        "name": "Ezio's Trousers Seed",
        "rarity": 999
      },
      {
        "itemID": 7088,
        "name": "Ezio's Armguards",
        "rarity": 999
      },
      {
        "itemID": 7089,
        "name": "Ezio's Armguards Seed",
        "rarity": 999
      },
      {
        "itemID": 7090,
        "name": "Ezio's Beard",
        "rarity": 999
      },
      {
        "itemID": 7091,
        "name": "Ezio's Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 7092,
        "name": "Ezio's Hair",
        "rarity": 999
      },
      {
        "itemID": 7093,
        "name": "Ezio's Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 7094,
        "name": "Ezio's Boots",
        "rarity": 999
      },
      {
        "itemID": 7095,
        "name": "Ezio's Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 7096,
        "name": "Hay Cart",
        "rarity": 999
      },
      {
        "itemID": 7097,
        "name": "Hay Cart Seed",
        "rarity": 999
      },
      {
        "itemID": 7098,
        "name": "Apocalypse Scythe",
        "rarity": 999
      },
      {
        "itemID": 7099,
        "name": "Apocalypse Scythe Seed",
        "rarity": 999
      },
      {
        "itemID": 7100,
        "name": "Famine's Steed",
        "rarity": 999
      },
      {
        "itemID": 7101,
        "name": "Famine's Steed Seed",
        "rarity": 999
      },
      {
        "itemID": 7102,
        "name": "Conquest's Helm",
        "rarity": 999
      },
      {
        "itemID": 7103,
        "name": "Conquest's Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 7104,
        "name": "Dark Aurora Wings",
        "rarity": 999
      },
      {
        "itemID": 7105,
        "name": "Dark Aurora Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7106,
        "name": "Cat Eyes",
        "rarity": 999
      },
      {
        "itemID": 7107,
        "name": "Cat Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 7108,
        "name": "Knife Head",
        "rarity": 55
      },
      {
        "itemID": 7109,
        "name": "Knife Head Seed",
        "rarity": 55
      },
      {
        "itemID": 7110,
        "name": "Evil Grin",
        "rarity": 70
      },
      {
        "itemID": 7111,
        "name": "Evil Grin Seed",
        "rarity": 70
      },
      {
        "itemID": 7112,
        "name": "Vampiress Dress",
        "rarity": 90
      },
      {
        "itemID": 7113,
        "name": "Vampiress Dress Seed",
        "rarity": 90
      },
      {
        "itemID": 7114,
        "name": "Nightmare Vampiress Dress",
        "rarity": 90
      },
      {
        "itemID": 7115,
        "name": "Nightmare Vampiress Dress Seed",
        "rarity": 90
      },
      {
        "itemID": 7116,
        "name": "Vapor Vent",
        "rarity": 30
      },
      {
        "itemID": 7117,
        "name": "Vapor Vent Seed",
        "rarity": 30
      },
      {
        "itemID": 7118,
        "name": "Riding Skeletal Shark",
        "rarity": 999
      },
      {
        "itemID": 7119,
        "name": "Riding Skeletal Shark Seed",
        "rarity": 999
      },
      {
        "itemID": 7120,
        "name": "Angler Mask",
        "rarity": 999
      },
      {
        "itemID": 7121,
        "name": "Angler Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7122,
        "name": "Demon Plague Doctor Mask",
        "rarity": 999
      },
      {
        "itemID": 7123,
        "name": "Demon Plague Doctor Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7124,
        "name": "Vampire Hunter Hat",
        "rarity": 107
      },
      {
        "itemID": 7125,
        "name": "Vampire Hunter Hat Seed",
        "rarity": 107
      },
      {
        "itemID": 7126,
        "name": "Tragicomic Mask",
        "rarity": 999
      },
      {
        "itemID": 7127,
        "name": "Tragicomic Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7128,
        "name": "Creepy Baby Head Mask",
        "rarity": 73
      },
      {
        "itemID": 7129,
        "name": "Creepy Baby Head Mask Seed",
        "rarity": 73
      },
      {
        "itemID": 7130,
        "name": "Growmoji Ghost",
        "rarity": 100
      },
      {
        "itemID": 7131,
        "name": "Growmoji Ghost Seed",
        "rarity": 100
      },
      {
        "itemID": 7132,
        "name": "Demon Angler Leash",
        "rarity": 999
      },
      {
        "itemID": 7133,
        "name": "Demon Angler Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 7134,
        "name": "Skeletal Shark Leash",
        "rarity": 999
      },
      {
        "itemID": 7135,
        "name": "Skeletal Shark Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 7136,
        "name": "Ethereal Rainbow Dragon",
        "rarity": 999
      },
      {
        "itemID": 7137,
        "name": "Ethereal Rainbow Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 7138,
        "name": "Heroic Tights of Prevention",
        "rarity": 999
      },
      {
        "itemID": 7139,
        "name": "Heroic Tights of Prevention Seed",
        "rarity": 999
      },
      {
        "itemID": 7140,
        "name": "Wriggling Tentacle",
        "rarity": 999
      },
      {
        "itemID": 7141,
        "name": "Wriggling Tentacle Seed",
        "rarity": 999
      },
      {
        "itemID": 7142,
        "name": "Tamed Looming Triffid",
        "rarity": 999
      },
      {
        "itemID": 7143,
        "name": "Tamed Looming Triffid Seed",
        "rarity": 999
      },
      {
        "itemID": 7144,
        "name": "Magic Carpet",
        "rarity": 999
      },
      {
        "itemID": 7145,
        "name": "Magic Carpet Seed",
        "rarity": 999
      },
      {
        "itemID": 7146,
        "name": "Mountain Dire Wolf",
        "rarity": 999
      },
      {
        "itemID": 7147,
        "name": "Mountain Dire Wolf Seed",
        "rarity": 999
      },
      {
        "itemID": 7148,
        "name": "Super Logo - Fist",
        "rarity": 999
      },
      {
        "itemID": 7149,
        "name": "Super Logo - Fist Seed",
        "rarity": 999
      },
      {
        "itemID": 7150,
        "name": "Stone Gargoyle Wings",
        "rarity": 999
      },
      {
        "itemID": 7151,
        "name": "Stone Gargoyle Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7152,
        "name": "Plasma Hair",
        "rarity": 999
      },
      {
        "itemID": 7153,
        "name": "Plasma Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 7154,
        "name": "Tiled Hospital Wall",
        "rarity": 999
      },
      {
        "itemID": 7155,
        "name": "Tiled Hospital Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 7156,
        "name": "Fallen Pillar",
        "rarity": 999
      },
      {
        "itemID": 7157,
        "name": "Fallen Pillar Seed",
        "rarity": 999
      },
      {
        "itemID": 7158,
        "name": "Oil Slick",
        "rarity": 999
      },
      {
        "itemID": 7159,
        "name": "Oil Slick Seed",
        "rarity": 999
      },
      {
        "itemID": 7160,
        "name": "HyperTech Multi-Jet Energy Pulser",
        "rarity": 999
      },
      {
        "itemID": 7161,
        "name": "HyperTech Multi-Jet Energy Pulser Seed",
        "rarity": 999
      },
      {
        "itemID": 7162,
        "name": "Hour Glass",
        "rarity": 15
      },
      {
        "itemID": 7163,
        "name": "Hour Glass Seed",
        "rarity": 15
      },
      {
        "itemID": 7164,
        "name": "Red House Entrance",
        "rarity": 15
      },
      {
        "itemID": 7165,
        "name": "Red House Entrance Seed",
        "rarity": 15
      },
      {
        "itemID": 7166,
        "name": "Ancestral Orb of Time",
        "rarity": 999
      },
      {
        "itemID": 7167,
        "name": "Ancestral Orb of Time Seed",
        "rarity": 999
      },
      {
        "itemID": 7168,
        "name": "Ancestral Orb of Time : Level 2",
        "rarity": 999
      },
      {
        "itemID": 7169,
        "name": "Ancestral Orb of Time : Level 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 7170,
        "name": "Ancestral Orb of Time : Level 3",
        "rarity": 999
      },
      {
        "itemID": 7171,
        "name": "Ancestral Orb of Time : Level 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 7172,
        "name": "Ancestral Orb of Time : Level 4",
        "rarity": 999
      },
      {
        "itemID": 7173,
        "name": "Ancestral Orb of Time : Level 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 7174,
        "name": "Ancestral Orb of Time : Level 5",
        "rarity": 999
      },
      {
        "itemID": 7175,
        "name": "Ancestral Orb of Time : Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 7176,
        "name": "Dragon Block",
        "rarity": 999
      },
      {
        "itemID": 7177,
        "name": "Dragon Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7178,
        "name": "Carnival Ladders",
        "rarity": 999
      },
      {
        "itemID": 7179,
        "name": "Carnival Ladders Seed",
        "rarity": 999
      },
      {
        "itemID": 7180,
        "name": "Carnival Creep Platform",
        "rarity": 999
      },
      {
        "itemID": 7181,
        "name": "Carnival Creep Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 7182,
        "name": "Disabled Carnival Creep Platform",
        "rarity": 999
      },
      {
        "itemID": 7183,
        "name": "Disabled Carnival Creep Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 7184,
        "name": "Atomic Gate",
        "rarity": 999
      },
      {
        "itemID": 7185,
        "name": "Atomic Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 7186,
        "name": "Crystallized Time",
        "rarity": 999
      },
      {
        "itemID": 7187,
        "name": "Crystallized Time Seed",
        "rarity": 999
      },
      {
        "itemID": 7188,
        "name": "Blue Gem Lock",
        "rarity": 999
      },
      {
        "itemID": 7189,
        "name": "Blue Gem Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 7190,
        "name": "Guild Name Changer",
        "rarity": 999
      },
      {
        "itemID": 7191,
        "name": "Guild Name Changer Seed",
        "rarity": 999
      },
      {
        "itemID": 7192,
        "name": "Shadow Spirit of the Underworld",
        "rarity": 999
      },
      {
        "itemID": 7193,
        "name": "Shadow Spirit of the Underworld Seed",
        "rarity": 999
      },
      {
        "itemID": 7194,
        "name": "Hacker's Dialog",
        "rarity": 999
      },
      {
        "itemID": 7195,
        "name": "Hacker's Dialog Seed",
        "rarity": 999
      },
      {
        "itemID": 7196,
        "name": "Monarch Butterfly Wings",
        "rarity": 999
      },
      {
        "itemID": 7197,
        "name": "Monarch Butterfly Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7198,
        "name": "Winter Freezer Hood",
        "rarity": 999
      },
      {
        "itemID": 7199,
        "name": "Winter Freezer Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 7200,
        "name": "Ultra Winter Freezer Hood",
        "rarity": 999
      },
      {
        "itemID": 7201,
        "name": "Ultra Winter Freezer Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 7202,
        "name": "Storm Cloud",
        "rarity": 999
      },
      {
        "itemID": 7203,
        "name": "Storm Cloud Seed",
        "rarity": 999
      },
      {
        "itemID": 7204,
        "name": "Supplier's Cape",
        "rarity": 999
      },
      {
        "itemID": 7205,
        "name": "Supplier's Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 7206,
        "name": "The Great Chameleon: Master of Disguise",
        "rarity": 999
      },
      {
        "itemID": 7207,
        "name": "The Great Chameleon: Master of Disguise Seed",
        "rarity": 999
      },
      {
        "itemID": 7208,
        "name": "Winter Freezer Robe",
        "rarity": 999
      },
      {
        "itemID": 7209,
        "name": "Winter Freezer Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 7210,
        "name": "Ultra Winter Freezer Robe",
        "rarity": 999
      },
      {
        "itemID": 7211,
        "name": "Ultra Winter Freezer Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 7212,
        "name": "Lunar Crater",
        "rarity": 999
      },
      {
        "itemID": 7213,
        "name": "Lunar Crater Seed",
        "rarity": 999
      },
      {
        "itemID": 7214,
        "name": "Crafter's Cape",
        "rarity": 999
      },
      {
        "itemID": 7215,
        "name": "Crafter's Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 7216,
        "name": "Mad Hatter",
        "rarity": 999
      },
      {
        "itemID": 7217,
        "name": "Mad Hatter Seed",
        "rarity": 999
      },
      {
        "itemID": 7218,
        "name": "Sheet Music: Lyre Note",
        "rarity": 18
      },
      {
        "itemID": 7219,
        "name": "Sheet Music: Lyre Note Seed",
        "rarity": 18
      },
      {
        "itemID": 7220,
        "name": "Sheet Music: Sharp Lyre",
        "rarity": 26
      },
      {
        "itemID": 7221,
        "name": "Sheet Music: Sharp Lyre Seed",
        "rarity": 26
      },
      {
        "itemID": 7222,
        "name": "Sheet Music: Flat Lyre",
        "rarity": 19
      },
      {
        "itemID": 7223,
        "name": "Sheet Music: Flat Lyre Seed",
        "rarity": 19
      },
      {
        "itemID": 7224,
        "name": "Oak Tree",
        "rarity": 999
      },
      {
        "itemID": 7225,
        "name": "Oak Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 7226,
        "name": "Winter Foliage",
        "rarity": 999
      },
      {
        "itemID": 7227,
        "name": "Winter Foliage Seed",
        "rarity": 999
      },
      {
        "itemID": 7228,
        "name": "Galleon's Mast",
        "rarity": 999
      },
      {
        "itemID": 7229,
        "name": "Galleon's Mast Seed",
        "rarity": 999
      },
      {
        "itemID": 7230,
        "name": "Winter Hedge",
        "rarity": 999
      },
      {
        "itemID": 7231,
        "name": "Winter Hedge Seed",
        "rarity": 999
      },
      {
        "itemID": 7232,
        "name": "Growmoji Halo",
        "rarity": 999
      },
      {
        "itemID": 7233,
        "name": "Growmoji Halo Seed",
        "rarity": 999
      },
      {
        "itemID": 7234,
        "name": "Growmoji Nuke",
        "rarity": 999
      },
      {
        "itemID": 7235,
        "name": "Growmoji Nuke Seed",
        "rarity": 999
      },
      {
        "itemID": 7236,
        "name": "Sunset Clouds",
        "rarity": 999
      },
      {
        "itemID": 7237,
        "name": "Sunset Clouds Seed",
        "rarity": 999
      },
      {
        "itemID": 7238,
        "name": "Sunset Clouds Background",
        "rarity": 999
      },
      {
        "itemID": 7239,
        "name": "Sunset Clouds Background Seed",
        "rarity": 999
      },
      {
        "itemID": 7240,
        "name": "Galleon's Ratlines",
        "rarity": 999
      },
      {
        "itemID": 7241,
        "name": "Galleon's Ratlines Seed",
        "rarity": 999
      },
      {
        "itemID": 7242,
        "name": "Galleon Hull",
        "rarity": 999
      },
      {
        "itemID": 7243,
        "name": "Galleon Hull Seed",
        "rarity": 999
      },
      {
        "itemID": 7244,
        "name": "Galleon's Crow's Nest",
        "rarity": 999
      },
      {
        "itemID": 7245,
        "name": "Galleon's Crow's Nest Seed",
        "rarity": 999
      },
      {
        "itemID": 7246,
        "name": "Lyre",
        "rarity": 999
      },
      {
        "itemID": 7247,
        "name": "Lyre Seed",
        "rarity": 999
      },
      {
        "itemID": 7248,
        "name": "Weapons Rack",
        "rarity": 999
      },
      {
        "itemID": 7249,
        "name": "Weapons Rack Seed",
        "rarity": 999
      },
      {
        "itemID": 7250,
        "name": "Jack's Shoes",
        "rarity": 999
      },
      {
        "itemID": 7251,
        "name": "Jack's Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 7252,
        "name": "Jack's Jeans",
        "rarity": 999
      },
      {
        "itemID": 7253,
        "name": "Jack's Jeans Seed",
        "rarity": 999
      },
      {
        "itemID": 7254,
        "name": "Jack's Vest",
        "rarity": 999
      },
      {
        "itemID": 7255,
        "name": "Jack's Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 7256,
        "name": "Jack's Hat",
        "rarity": 999
      },
      {
        "itemID": 7257,
        "name": "Jack's Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7258,
        "name": "Future Perfect Chip",
        "rarity": 999
      },
      {
        "itemID": 7259,
        "name": "Future Perfect Chip Seed",
        "rarity": 999
      },
      {
        "itemID": 7260,
        "name": "Swirling Rainbow Eyes",
        "rarity": 999
      },
      {
        "itemID": 7261,
        "name": "Swirling Rainbow Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 7262,
        "name": "Knight's Chainmail - Sun",
        "rarity": 999
      },
      {
        "itemID": 7263,
        "name": "Knight's Chainmail - Sun Seed",
        "rarity": 999
      },
      {
        "itemID": 7264,
        "name": "Knight's Chainmail - Lion",
        "rarity": 999
      },
      {
        "itemID": 7265,
        "name": "Knight's Chainmail - Lion Seed",
        "rarity": 999
      },
      {
        "itemID": 7266,
        "name": "Knight's Chainmail - Crown",
        "rarity": 999
      },
      {
        "itemID": 7267,
        "name": "Knight's Chainmail - Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 7268,
        "name": "Tapestry",
        "rarity": 999
      },
      {
        "itemID": 7269,
        "name": "Tapestry Seed",
        "rarity": 999
      },
      {
        "itemID": 7270,
        "name": "Peasant Fence",
        "rarity": 999
      },
      {
        "itemID": 7271,
        "name": "Peasant Fence Seed",
        "rarity": 999
      },
      {
        "itemID": 7272,
        "name": "Nobleman's House",
        "rarity": 999
      },
      {
        "itemID": 7273,
        "name": "Nobleman's House Seed",
        "rarity": 999
      },
      {
        "itemID": 7274,
        "name": "Rotten Woodland Tree",
        "rarity": 999
      },
      {
        "itemID": 7275,
        "name": "Rotten Woodland Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 7276,
        "name": "Knight's Great Helm - Golden",
        "rarity": 999
      },
      {
        "itemID": 7277,
        "name": "Knight's Great Helm - Golden Seed",
        "rarity": 999
      },
      {
        "itemID": 7278,
        "name": "Knight's Helm - Crusader",
        "rarity": 999
      },
      {
        "itemID": 7279,
        "name": "Knight's Helm - Crusader Seed",
        "rarity": 999
      },
      {
        "itemID": 7280,
        "name": "Knight's Helm - Antlers",
        "rarity": 999
      },
      {
        "itemID": 7281,
        "name": "Knight's Helm - Antlers Seed",
        "rarity": 999
      },
      {
        "itemID": 7282,
        "name": "Weather Vane",
        "rarity": 999
      },
      {
        "itemID": 7283,
        "name": "Weather Vane Seed",
        "rarity": 999
      },
      {
        "itemID": 7284,
        "name": "Stables",
        "rarity": 999
      },
      {
        "itemID": 7285,
        "name": "Stables Seed",
        "rarity": 999
      },
      {
        "itemID": 7286,
        "name": "Murder Hole - Hot Liquid Tar",
        "rarity": 999
      },
      {
        "itemID": 7287,
        "name": "Murder Hole - Hot Liquid Tar Seed",
        "rarity": 999
      },
      {
        "itemID": 7288,
        "name": "Cheval de Frise (Siege Barrier)",
        "rarity": 999
      },
      {
        "itemID": 7289,
        "name": "Cheval de Frise (Siege Barrier) Seed",
        "rarity": 999
      },
      {
        "itemID": 7290,
        "name": "Royal Carpet",
        "rarity": 999
      },
      {
        "itemID": 7291,
        "name": "Royal Carpet Seed",
        "rarity": 999
      },
      {
        "itemID": 7292,
        "name": "Wooden Guard Tower",
        "rarity": 999
      },
      {
        "itemID": 7293,
        "name": "Wooden Guard Tower Seed",
        "rarity": 999
      },
      {
        "itemID": 7294,
        "name": "The 'Other' Royal Throne",
        "rarity": 999
      },
      {
        "itemID": 7295,
        "name": "The 'Other' Royal Throne Seed",
        "rarity": 999
      },
      {
        "itemID": 7296,
        "name": "Scavenger Wheels",
        "rarity": 999
      },
      {
        "itemID": 7297,
        "name": "Scavenger Wheels Seed",
        "rarity": 999
      },
      {
        "itemID": 7298,
        "name": "Scavenger Lord's Wheels",
        "rarity": 999
      },
      {
        "itemID": 7299,
        "name": "Scavenger Lord's Wheels Seed",
        "rarity": 999
      },
      {
        "itemID": 7300,
        "name": "2-Face",
        "rarity": 999
      },
      {
        "itemID": 7301,
        "name": "2-Face Seed",
        "rarity": 999
      },
      {
        "itemID": 7302,
        "name": "Golden Midas Masterpants",
        "rarity": 999
      },
      {
        "itemID": 7303,
        "name": "Golden Midas Masterpants Seed",
        "rarity": 999
      },
      {
        "itemID": 7304,
        "name": "Tiger Spirit",
        "rarity": 999
      },
      {
        "itemID": 7305,
        "name": "Tiger Spirit Seed",
        "rarity": 999
      },
      {
        "itemID": 7306,
        "name": "Anomalizing Reliable Rolling Pin",
        "rarity": 999
      },
      {
        "itemID": 7307,
        "name": "Anomalizing Reliable Rolling Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 7308,
        "name": "Anomalizing Pristine Rolling Pin",
        "rarity": 999
      },
      {
        "itemID": 7309,
        "name": "Anomalizing Pristine Rolling Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 7310,
        "name": "Exquisite Rolling Pin",
        "rarity": 999
      },
      {
        "itemID": 7311,
        "name": "Exquisite Rolling Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 7312,
        "name": "Anomalizing Elegant Rolling Pin",
        "rarity": 999
      },
      {
        "itemID": 7313,
        "name": "Anomalizing Elegant Rolling Pin Seed",
        "rarity": 999
      },
      {
        "itemID": 7314,
        "name": "Mad Hat 1",
        "rarity": 999
      },
      {
        "itemID": 7315,
        "name": "Mad Hat 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 7316,
        "name": "Mad Hat 2",
        "rarity": 999
      },
      {
        "itemID": 7317,
        "name": "Mad Hat 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 7318,
        "name": "Mad Hat 3",
        "rarity": 999
      },
      {
        "itemID": 7319,
        "name": "Mad Hat 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 7320,
        "name": "Nobleman's House Roof",
        "rarity": 999
      },
      {
        "itemID": 7321,
        "name": "Nobleman's House Roof Seed",
        "rarity": 999
      },
      {
        "itemID": 7322,
        "name": "Nobleman's House Door",
        "rarity": 999
      },
      {
        "itemID": 7323,
        "name": "Nobleman's House Door Seed",
        "rarity": 999
      },
      {
        "itemID": 7324,
        "name": "Stable Roof",
        "rarity": 999
      },
      {
        "itemID": 7325,
        "name": "Stable Roof Seed",
        "rarity": 999
      },
      {
        "itemID": 7326,
        "name": "Stable Background",
        "rarity": 999
      },
      {
        "itemID": 7327,
        "name": "Stable Background Seed",
        "rarity": 999
      },
      {
        "itemID": 7328,
        "name": "Winter Token",
        "rarity": 999
      },
      {
        "itemID": 7329,
        "name": "Winter Token Seed",
        "rarity": 999
      },
      {
        "itemID": 7330,
        "name": "Winter Event Player Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 7331,
        "name": "Winter Event Player Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 7332,
        "name": "Winter Event Player Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 7333,
        "name": "Winter Event Player Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 7334,
        "name": "Winter Event Player Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 7335,
        "name": "Winter Event Player Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 7336,
        "name": "Winter Event Guild Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 7337,
        "name": "Winter Event Guild Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 7338,
        "name": "Winter Event Guild Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 7339,
        "name": "Winter Event Guild Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 7340,
        "name": "Winter Event Guild Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 7341,
        "name": "Winter Event Guild Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 7342,
        "name": "Thanksgiving Bell",
        "rarity": 999
      },
      {
        "itemID": 7343,
        "name": "Thanksgiving Bell Seed",
        "rarity": 999
      },
      {
        "itemID": 7344,
        "name": "Dead Thanksgiving Turkey",
        "rarity": 999
      },
      {
        "itemID": 7345,
        "name": "Dead Thanksgiving Turkey Seed",
        "rarity": 999
      },
      {
        "itemID": 7346,
        "name": "Roasted Turkey",
        "rarity": 999
      },
      {
        "itemID": 7347,
        "name": "Roasted Turkey Seed",
        "rarity": 999
      },
      {
        "itemID": 7348,
        "name": "Riding Turkey",
        "rarity": 999
      },
      {
        "itemID": 7349,
        "name": "Riding Turkey Seed",
        "rarity": 999
      },
      {
        "itemID": 7350,
        "name": "Turkey Wings",
        "rarity": 999
      },
      {
        "itemID": 7351,
        "name": "Turkey Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7352,
        "name": "Pilgrim's Hat",
        "rarity": 999
      },
      {
        "itemID": 7353,
        "name": "Pilgrim's Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7354,
        "name": "Pilgrim's Coat",
        "rarity": 999
      },
      {
        "itemID": 7355,
        "name": "Pilgrim's Coat Seed",
        "rarity": 999
      },
      {
        "itemID": 7356,
        "name": "Pilgrim's Shoes",
        "rarity": 999
      },
      {
        "itemID": 7357,
        "name": "Pilgrim's Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 7358,
        "name": "Pilgrim's Bonnet",
        "rarity": 999
      },
      {
        "itemID": 7359,
        "name": "Pilgrim's Bonnet Seed",
        "rarity": 999
      },
      {
        "itemID": 7360,
        "name": "Pilgrim's Dress",
        "rarity": 999
      },
      {
        "itemID": 7361,
        "name": "Pilgrim's Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 7362,
        "name": "Colonization Wagon Base",
        "rarity": 999
      },
      {
        "itemID": 7363,
        "name": "Colonization Wagon Base Seed",
        "rarity": 999
      },
      {
        "itemID": 7364,
        "name": "Colonization Wagon Canopy",
        "rarity": 999
      },
      {
        "itemID": 7365,
        "name": "Colonization Wagon Canopy Seed",
        "rarity": 999
      },
      {
        "itemID": 7366,
        "name": "Wagon Wheel",
        "rarity": 999
      },
      {
        "itemID": 7367,
        "name": "Wagon Wheel Seed",
        "rarity": 999
      },
      {
        "itemID": 7368,
        "name": "Thanksgiving Turkey",
        "rarity": 999
      },
      {
        "itemID": 7369,
        "name": "Thanksgiving Turkey Seed",
        "rarity": 999
      },
      {
        "itemID": 7370,
        "name": "Growmoji Turkey",
        "rarity": 999
      },
      {
        "itemID": 7371,
        "name": "Growmoji Turkey Seed",
        "rarity": 999
      },
      {
        "itemID": 7372,
        "name": "Monochromatic Bedrock",
        "rarity": 1
      },
      {
        "itemID": 7373,
        "name": "Monochromatic Bedrock Seed",
        "rarity": 1
      },
      {
        "itemID": 7374,
        "name": "Monochromatic Dirt",
        "rarity": 1
      },
      {
        "itemID": 7375,
        "name": "Monochromatic Dirt Seed",
        "rarity": 1
      },
      {
        "itemID": 7376,
        "name": "Monochromatic Lava",
        "rarity": 1
      },
      {
        "itemID": 7377,
        "name": "Monochromatic Lava Seed",
        "rarity": 1
      },
      {
        "itemID": 7378,
        "name": "Monochromatic Cave Background",
        "rarity": 1
      },
      {
        "itemID": 7379,
        "name": "Monochromatic Cave Background Seed",
        "rarity": 1
      },
      {
        "itemID": 7380,
        "name": "Monochrome Blast",
        "rarity": 999
      },
      {
        "itemID": 7381,
        "name": "Monochrome Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 7382,
        "name": "Onyx Block",
        "rarity": 100
      },
      {
        "itemID": 7383,
        "name": "Onyx Block Seed",
        "rarity": 100
      },
      {
        "itemID": 7384,
        "name": "Go-Go-Growformer!",
        "rarity": 999
      },
      {
        "itemID": 7385,
        "name": "Go-Go-Growformer! Seed",
        "rarity": 999
      },
      {
        "itemID": 7386,
        "name": "Ultra Winter Freezer Teddy Suit",
        "rarity": 999
      },
      {
        "itemID": 7387,
        "name": "Ultra Winter Freezer Teddy Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7388,
        "name": "Winter Freezer Teddy Mask",
        "rarity": 999
      },
      {
        "itemID": 7389,
        "name": "Winter Freezer Teddy Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7390,
        "name": "Crown of Duplication",
        "rarity": 999
      },
      {
        "itemID": 7391,
        "name": "Crown of Duplication Seed",
        "rarity": 999
      },
      {
        "itemID": 7392,
        "name": "Mage's Orb",
        "rarity": 999
      },
      {
        "itemID": 7393,
        "name": "Mage's Orb Seed",
        "rarity": 999
      },
      {
        "itemID": 7394,
        "name": "Cracked Stone Slab",
        "rarity": 999
      },
      {
        "itemID": 7395,
        "name": "Cracked Stone Slab Seed",
        "rarity": 999
      },
      {
        "itemID": 7396,
        "name": "Snowflake Eyes",
        "rarity": 999
      },
      {
        "itemID": 7397,
        "name": "Snowflake Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 7398,
        "name": "Rugged Winter Beard",
        "rarity": 999
      },
      {
        "itemID": 7399,
        "name": "Rugged Winter Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 7400,
        "name": "Ice Queen Winter Makeup",
        "rarity": 999
      },
      {
        "itemID": 7401,
        "name": "Ice Queen Winter Makeup Seed",
        "rarity": 999
      },
      {
        "itemID": 7402,
        "name": "Snowflake Eyes with Rugged Winter Beard",
        "rarity": 999
      },
      {
        "itemID": 7403,
        "name": "Snowflake Eyes with Rugged Winter Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 7404,
        "name": "Snowflake Eyes with Ice Queen Winter Makeup",
        "rarity": 999
      },
      {
        "itemID": 7405,
        "name": "Snowflake Eyes with Ice Queen Winter Makeup Seed",
        "rarity": 999
      },
      {
        "itemID": 7406,
        "name": "Super Snowball Launcher",
        "rarity": 999
      },
      {
        "itemID": 7407,
        "name": "Super Snowball Launcher Seed",
        "rarity": 999
      },
      {
        "itemID": 7408,
        "name": "Abominable Snowman Suit",
        "rarity": 999
      },
      {
        "itemID": 7409,
        "name": "Abominable Snowman Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7410,
        "name": "Abominable Snowman Mask",
        "rarity": 999
      },
      {
        "itemID": 7411,
        "name": "Abominable Snowman Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7412,
        "name": "Snowflake Wings of Winter",
        "rarity": 999
      },
      {
        "itemID": 7413,
        "name": "Snowflake Wings of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 7414,
        "name": "Chipmunk",
        "rarity": 999
      },
      {
        "itemID": 7415,
        "name": "Chipmunk Seed",
        "rarity": 999
      },
      {
        "itemID": 7416,
        "name": "Snow Leopard Tail",
        "rarity": 999
      },
      {
        "itemID": 7417,
        "name": "Snow Leopard Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 7418,
        "name": "Snowfrost's Top Hat",
        "rarity": 999
      },
      {
        "itemID": 7419,
        "name": "Snowfrost's Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7420,
        "name": "Snowfrost's Mask",
        "rarity": 999
      },
      {
        "itemID": 7421,
        "name": "Snowfrost's Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7422,
        "name": "Snowfrost's Suit",
        "rarity": 999
      },
      {
        "itemID": 7423,
        "name": "Snowfrost's Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7424,
        "name": "Snowfrost's Candy Cane Blade",
        "rarity": 999
      },
      {
        "itemID": 7425,
        "name": "Snowfrost's Candy Cane Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 7426,
        "name": "The Horrible Holiday Hoodie",
        "rarity": 999
      },
      {
        "itemID": 7427,
        "name": "The Horrible Holiday Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 7428,
        "name": "Slime Green Hoodie",
        "rarity": 999
      },
      {
        "itemID": 7429,
        "name": "Slime Green Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 7430,
        "name": "Snow Husky",
        "rarity": 999
      },
      {
        "itemID": 7431,
        "name": "Snow Husky Seed",
        "rarity": 999
      },
      {
        "itemID": 7432,
        "name": "Snow Husky Sledge",
        "rarity": 999
      },
      {
        "itemID": 7433,
        "name": "Snow Husky Sledge Seed",
        "rarity": 999
      },
      {
        "itemID": 7434,
        "name": "Poseidon's Digger's Trident",
        "rarity": 999
      },
      {
        "itemID": 7435,
        "name": "Poseidon's Digger's Trident Seed",
        "rarity": 999
      },
      {
        "itemID": 7436,
        "name": "Long Tree Log",
        "rarity": 999
      },
      {
        "itemID": 7437,
        "name": "Long Tree Log Seed",
        "rarity": 999
      },
      {
        "itemID": 7438,
        "name": "Tall Tree Log",
        "rarity": 999
      },
      {
        "itemID": 7439,
        "name": "Tall Tree Log Seed",
        "rarity": 999
      },
      {
        "itemID": 7440,
        "name": "White Grape Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 7441,
        "name": "White Grape Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7442,
        "name": "Cranberry Jelly Block",
        "rarity": 999
      },
      {
        "itemID": 7443,
        "name": "Cranberry Jelly Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7444,
        "name": "Snow Crust Block",
        "rarity": 61
      },
      {
        "itemID": 7445,
        "name": "Snow Crust Block Seed",
        "rarity": 61
      },
      {
        "itemID": 7446,
        "name": "Winterfest Tree",
        "rarity": 999
      },
      {
        "itemID": 7447,
        "name": "Winterfest Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 7448,
        "name": "Winterfest Wonderland Foliage",
        "rarity": 999
      },
      {
        "itemID": 7449,
        "name": "Winterfest Wonderland Foliage Seed",
        "rarity": 999
      },
      {
        "itemID": 7450,
        "name": "Candy Cane Streetlamp",
        "rarity": 68
      },
      {
        "itemID": 7451,
        "name": "Candy Cane Streetlamp Seed",
        "rarity": 68
      },
      {
        "itemID": 7452,
        "name": "Snowy Rocks Platform",
        "rarity": 92
      },
      {
        "itemID": 7453,
        "name": "Snowy Rocks Platform Seed",
        "rarity": 92
      },
      {
        "itemID": 7454,
        "name": "Icy Igloo",
        "rarity": 999
      },
      {
        "itemID": 7455,
        "name": "Icy Igloo Seed",
        "rarity": 999
      },
      {
        "itemID": 7456,
        "name": "Winterfest Sign",
        "rarity": 999
      },
      {
        "itemID": 7457,
        "name": "Winterfest Sign Seed",
        "rarity": 999
      },
      {
        "itemID": 7458,
        "name": "Dark Snowy Cave Background",
        "rarity": 999
      },
      {
        "itemID": 7459,
        "name": "Dark Snowy Cave Background Seed",
        "rarity": 999
      },
      {
        "itemID": 7460,
        "name": "Nutmeg Block",
        "rarity": 999
      },
      {
        "itemID": 7461,
        "name": "Nutmeg Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7462,
        "name": "Ground Nutmeg",
        "rarity": 999
      },
      {
        "itemID": 7463,
        "name": "Ground Nutmeg Seed",
        "rarity": 999
      },
      {
        "itemID": 7464,
        "name": "Pumpkin Pie",
        "rarity": 999
      },
      {
        "itemID": 7465,
        "name": "Pumpkin Pie Seed",
        "rarity": 999
      },
      {
        "itemID": 7466,
        "name": "Eggnog",
        "rarity": 999
      },
      {
        "itemID": 7467,
        "name": "Eggnog Seed",
        "rarity": 999
      },
      {
        "itemID": 7468,
        "name": "Mr. Narwhal Leash",
        "rarity": 999
      },
      {
        "itemID": 7469,
        "name": "Mr. Narwhal Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 7470,
        "name": "Narwhal Tusk Staff",
        "rarity": 999
      },
      {
        "itemID": 7471,
        "name": "Narwhal Tusk Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 7472,
        "name": "Bandaged Mr. Narwhal",
        "rarity": 999
      },
      {
        "itemID": 7473,
        "name": "Bandaged Mr. Narwhal Seed",
        "rarity": 999
      },
      {
        "itemID": 7474,
        "name": "Growmoji Gift",
        "rarity": 999
      },
      {
        "itemID": 7475,
        "name": "Growmoji Gift Seed",
        "rarity": 999
      },
      {
        "itemID": 7476,
        "name": "Winterfest Calendar - 2018",
        "rarity": 999
      },
      {
        "itemID": 7477,
        "name": "Winterfest Calendar - 2018 Seed",
        "rarity": 999
      },
      {
        "itemID": 7478,
        "name": "Used Winterfest Calendar - 2018",
        "rarity": 999
      },
      {
        "itemID": 7479,
        "name": "Used Winterfest Calendar - 2018 Seed",
        "rarity": 999
      },
      {
        "itemID": 7480,
        "name": "Growformer PowerKey",
        "rarity": 999
      },
      {
        "itemID": 7481,
        "name": "Growformer PowerKey Seed",
        "rarity": 999
      },
      {
        "itemID": 7482,
        "name": "Nutcracker",
        "rarity": 999
      },
      {
        "itemID": 7483,
        "name": "Nutcracker Seed",
        "rarity": 999
      },
      {
        "itemID": 7484,
        "name": "Winter Chest",
        "rarity": 999
      },
      {
        "itemID": 7485,
        "name": "Winter Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 7486,
        "name": "Galleon's Mast - Crossbeam",
        "rarity": 999
      },
      {
        "itemID": 7487,
        "name": "Galleon's Mast - Crossbeam Seed",
        "rarity": 999
      },
      {
        "itemID": 7488,
        "name": "SLaminator's Boomerang",
        "rarity": 999
      },
      {
        "itemID": 7489,
        "name": "SLaminator's Boomerang Seed",
        "rarity": 999
      },
      {
        "itemID": 7490,
        "name": "Nutcracker Hat",
        "rarity": 999
      },
      {
        "itemID": 7491,
        "name": "Nutcracker Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7492,
        "name": "Nutcracker Mask",
        "rarity": 999
      },
      {
        "itemID": 7493,
        "name": "Nutcracker Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7494,
        "name": "Nutcracker Coat",
        "rarity": 999
      },
      {
        "itemID": 7495,
        "name": "Nutcracker Coat Seed",
        "rarity": 999
      },
      {
        "itemID": 7496,
        "name": "Nutcracker Pants",
        "rarity": 999
      },
      {
        "itemID": 7497,
        "name": "Nutcracker Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 7498,
        "name": "Nutcracker Boots",
        "rarity": 999
      },
      {
        "itemID": 7499,
        "name": "Nutcracker Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 7500,
        "name": "Nutcracker Saber",
        "rarity": 999
      },
      {
        "itemID": 7501,
        "name": "Nutcracker Saber Seed",
        "rarity": 999
      },
      {
        "itemID": 7502,
        "name": "OVEROLL's Wings",
        "rarity": 999
      },
      {
        "itemID": 7503,
        "name": "OVEROLL's Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7504,
        "name": "Super Squirt Rifle 500",
        "rarity": 999
      },
      {
        "itemID": 7505,
        "name": "Super Squirt Rifle 500 Seed",
        "rarity": 999
      },
      {
        "itemID": 7506,
        "name": "Men's Board Shorts - Ocean Wave",
        "rarity": 999
      },
      {
        "itemID": 7507,
        "name": "Men's Board Shorts - Ocean Wave Seed",
        "rarity": 999
      },
      {
        "itemID": 7508,
        "name": "Men's Board Shorts - Checkered",
        "rarity": 999
      },
      {
        "itemID": 7509,
        "name": "Men's Board Shorts - Checkered Seed",
        "rarity": 999
      },
      {
        "itemID": 7510,
        "name": "Women's Swimsuit - Deep Ocean Blue",
        "rarity": 999
      },
      {
        "itemID": 7511,
        "name": "Women's Swimsuit - Deep Ocean Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 7512,
        "name": "Women's Swimsuit - Coral Pink",
        "rarity": 999
      },
      {
        "itemID": 7513,
        "name": "Women's Swimsuit - Coral Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 7514,
        "name": "Wet Hair",
        "rarity": 999
      },
      {
        "itemID": 7515,
        "name": "Wet Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 7516,
        "name": "Unicorn Floatie",
        "rarity": 999
      },
      {
        "itemID": 7517,
        "name": "Unicorn Floatie Seed",
        "rarity": 999
      },
      {
        "itemID": 7518,
        "name": "Jet Ski",
        "rarity": 999
      },
      {
        "itemID": 7519,
        "name": "Jet Ski Seed",
        "rarity": 999
      },
      {
        "itemID": 7520,
        "name": "Waterslide Strut",
        "rarity": 999
      },
      {
        "itemID": 7521,
        "name": "Waterslide Strut Seed",
        "rarity": 999
      },
      {
        "itemID": 7522,
        "name": "Waterslide",
        "rarity": 999
      },
      {
        "itemID": 7523,
        "name": "Waterslide Seed",
        "rarity": 999
      },
      {
        "itemID": 7524,
        "name": "Dunking Bucket",
        "rarity": 999
      },
      {
        "itemID": 7525,
        "name": "Dunking Bucket Seed",
        "rarity": 999
      },
      {
        "itemID": 7526,
        "name": "Inflatable Ring",
        "rarity": 999
      },
      {
        "itemID": 7527,
        "name": "Inflatable Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 7528,
        "name": "Kiddie Pool",
        "rarity": 999
      },
      {
        "itemID": 7529,
        "name": "Kiddie Pool Seed",
        "rarity": 999
      },
      {
        "itemID": 7530,
        "name": "Golden Jet Ski",
        "rarity": 999
      },
      {
        "itemID": 7531,
        "name": "Golden Jet Ski Seed",
        "rarity": 999
      },
      {
        "itemID": 7532,
        "name": "Balloon-Frosting War Glove",
        "rarity": 999
      },
      {
        "itemID": 7533,
        "name": "Balloon-Frosting War Glove Seed",
        "rarity": 999
      },
      {
        "itemID": 7534,
        "name": "Balloon Warz Winter Gold Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 7535,
        "name": "Balloon Warz Winter Gold Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 7536,
        "name": "Balloon Warz Winter Silver Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 7537,
        "name": "Balloon Warz Winter Silver Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 7538,
        "name": "Balloon Warz Winter Bronze Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 7539,
        "name": "Balloon Warz Winter Bronze Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 7540,
        "name": "Balloon Warz Winter Gold Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 7541,
        "name": "Balloon Warz Winter Gold Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 7542,
        "name": "Balloon Warz Winter Silver Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 7543,
        "name": "Balloon Warz Winter Silver Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 7544,
        "name": "Balloon Warz Winter Bronze Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 7545,
        "name": "Balloon Warz Winter Bronze Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 7546,
        "name": "Balloon Warz Winter Gold Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 7547,
        "name": "Balloon Warz Winter Gold Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 7548,
        "name": "Balloon Warz Winter Silver Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 7549,
        "name": "Balloon Warz Winter Silver Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 7550,
        "name": "Balloon Warz Winter Bronze Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 7551,
        "name": "Balloon Warz Winter Bronze Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 7552,
        "name": "Balloon Warz Winter MVP Trophy - Punch",
        "rarity": 999
      },
      {
        "itemID": 7553,
        "name": "Balloon Warz Winter MVP Trophy - Punch Seed",
        "rarity": 999
      },
      {
        "itemID": 7554,
        "name": "Balloon Warz Winter MVP Trophy - Grow",
        "rarity": 999
      },
      {
        "itemID": 7555,
        "name": "Balloon Warz Winter MVP Trophy - Grow Seed",
        "rarity": 999
      },
      {
        "itemID": 7556,
        "name": "Balloon Warz Winter MVP Trophy - Build",
        "rarity": 999
      },
      {
        "itemID": 7557,
        "name": "Balloon Warz Winter MVP Trophy - Build Seed",
        "rarity": 999
      },
      {
        "itemID": 7558,
        "name": "Plunger",
        "rarity": 999
      },
      {
        "itemID": 7559,
        "name": "Plunger Seed",
        "rarity": 999
      },
      {
        "itemID": 7560,
        "name": "The Brother Hood",
        "rarity": 999
      },
      {
        "itemID": 7561,
        "name": "The Brother Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 7562,
        "name": "Unicorn",
        "rarity": 999
      },
      {
        "itemID": 7563,
        "name": "Unicorn Seed",
        "rarity": 999
      },
      {
        "itemID": 7564,
        "name": "Glowing Shirt",
        "rarity": 999
      },
      {
        "itemID": 7565,
        "name": "Glowing Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 7566,
        "name": "Foppy 4.0",
        "rarity": 999
      },
      {
        "itemID": 7567,
        "name": "Foppy 4.0 Seed",
        "rarity": 999
      },
      {
        "itemID": 7568,
        "name": "Hovernator Drone - White",
        "rarity": 999
      },
      {
        "itemID": 7569,
        "name": "Hovernator Drone - White Seed",
        "rarity": 999
      },
      {
        "itemID": 7570,
        "name": "Hovernator Drone - Black",
        "rarity": 999
      },
      {
        "itemID": 7571,
        "name": "Hovernator Drone - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 7572,
        "name": "Hovernator Drone - Red",
        "rarity": 999
      },
      {
        "itemID": 7573,
        "name": "Hovernator Drone - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 7574,
        "name": "Hovernator Drone - Golden",
        "rarity": 999
      },
      {
        "itemID": 7575,
        "name": "Hovernator Drone - Golden Seed",
        "rarity": 999
      },
      {
        "itemID": 7576,
        "name": "Winter Freezer Cuddly Fox Scarf",
        "rarity": 999
      },
      {
        "itemID": 7577,
        "name": "Winter Freezer Cuddly Fox Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 7578,
        "name": "Ultra Winter Freezer Cuddly Fox Scarf",
        "rarity": 999
      },
      {
        "itemID": 7579,
        "name": "Ultra Winter Freezer Cuddly Fox Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 7580,
        "name": "Doppelganger Projector",
        "rarity": 999
      },
      {
        "itemID": 7581,
        "name": "Doppelganger Projector Seed",
        "rarity": 999
      },
      {
        "itemID": 7582,
        "name": "Robotic MK.IV Wings",
        "rarity": 999
      },
      {
        "itemID": 7583,
        "name": "Robotic MK.IV Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7584,
        "name": "Sprite's Robe",
        "rarity": 999
      },
      {
        "itemID": 7585,
        "name": "Sprite's Robe Seed",
        "rarity": 999
      },
      {
        "itemID": 7586,
        "name": "Sonic Buster Sword",
        "rarity": 999
      },
      {
        "itemID": 7587,
        "name": "Sonic Buster Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 7588,
        "name": "Treasure Blast",
        "rarity": 999
      },
      {
        "itemID": 7589,
        "name": "Treasure Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 7590,
        "name": "Map Fragment",
        "rarity": 999
      },
      {
        "itemID": 7591,
        "name": "Map Fragment Seed",
        "rarity": 999
      },
      {
        "itemID": 7592,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7593,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7594,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7595,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7596,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7597,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7598,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7599,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7600,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7601,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7602,
        "name": "Treasure Map",
        "rarity": 999
      },
      {
        "itemID": 7603,
        "name": "Treasure Map Seed",
        "rarity": 999
      },
      {
        "itemID": 7604,
        "name": "Map of Tyr",
        "rarity": 999
      },
      {
        "itemID": 7605,
        "name": "Map of Tyr Seed",
        "rarity": 999
      },
      {
        "itemID": 7606,
        "name": "Map of Odin",
        "rarity": 999
      },
      {
        "itemID": 7607,
        "name": "Map of Odin Seed",
        "rarity": 999
      },
      {
        "itemID": 7608,
        "name": "Map of Thor",
        "rarity": 999
      },
      {
        "itemID": 7609,
        "name": "Map of Thor Seed",
        "rarity": 999
      },
      {
        "itemID": 7610,
        "name": "Map of Frigg",
        "rarity": 999
      },
      {
        "itemID": 7611,
        "name": "Map of Frigg Seed",
        "rarity": 999
      },
      {
        "itemID": 7612,
        "name": "Legendary Map - Untouched",
        "rarity": 999
      },
      {
        "itemID": 7613,
        "name": "Legendary Map - Untouched Seed",
        "rarity": 999
      },
      {
        "itemID": 7614,
        "name": "Legendary Map - Scanned",
        "rarity": 999
      },
      {
        "itemID": 7615,
        "name": "Legendary Map - Scanned Seed",
        "rarity": 999
      },
      {
        "itemID": 7616,
        "name": "Legendary Map - Magnified",
        "rarity": 999
      },
      {
        "itemID": 7617,
        "name": "Legendary Map - Magnified Seed",
        "rarity": 999
      },
      {
        "itemID": 7618,
        "name": "Legendary Map - Deciphered",
        "rarity": 999
      },
      {
        "itemID": 7619,
        "name": "Legendary Map - Deciphered Seed",
        "rarity": 999
      },
      {
        "itemID": 7620,
        "name": "Frozen Stone Cliffs",
        "rarity": 1
      },
      {
        "itemID": 7621,
        "name": "Frozen Stone Cliffs Seed",
        "rarity": 1
      },
      {
        "itemID": 7622,
        "name": "Glacier Background",
        "rarity": 1
      },
      {
        "itemID": 7623,
        "name": "Glacier Background Seed",
        "rarity": 1
      },
      {
        "itemID": 7624,
        "name": "Rune Stone",
        "rarity": 50
      },
      {
        "itemID": 7625,
        "name": "Rune Stone Seed",
        "rarity": 50
      },
      {
        "itemID": 7626,
        "name": "Altar",
        "rarity": 50
      },
      {
        "itemID": 7627,
        "name": "Altar Seed",
        "rarity": 50
      },
      {
        "itemID": 7628,
        "name": "Hidden Treasure",
        "rarity": 100
      },
      {
        "itemID": 7629,
        "name": "Hidden Treasure Seed",
        "rarity": 100
      },
      {
        "itemID": 7630,
        "name": "Rune Carved Stone Pillar",
        "rarity": 9
      },
      {
        "itemID": 7631,
        "name": "Rune Carved Stone Pillar Seed",
        "rarity": 9
      },
      {
        "itemID": 7632,
        "name": "Long Boat",
        "rarity": 999
      },
      {
        "itemID": 7633,
        "name": "Long Boat Seed",
        "rarity": 999
      },
      {
        "itemID": 7634,
        "name": "Round Shield",
        "rarity": 999
      },
      {
        "itemID": 7635,
        "name": "Round Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 7636,
        "name": "Frigg's Belt",
        "rarity": 999
      },
      {
        "itemID": 7637,
        "name": "Frigg's Belt Seed",
        "rarity": 999
      },
      {
        "itemID": 7638,
        "name": "Meat",
        "rarity": 999
      },
      {
        "itemID": 7639,
        "name": "Meat Seed",
        "rarity": 999
      },
      {
        "itemID": 7640,
        "name": "Battle Boar",
        "rarity": 999
      },
      {
        "itemID": 7641,
        "name": "Battle Boar Seed",
        "rarity": 999
      },
      {
        "itemID": 7642,
        "name": "Golden Battle Boar",
        "rarity": 999
      },
      {
        "itemID": 7643,
        "name": "Golden Battle Boar Seed",
        "rarity": 999
      },
      {
        "itemID": 7644,
        "name": "Weather Machine - Frozen Cliffs",
        "rarity": 999
      },
      {
        "itemID": 7645,
        "name": "Weather Machine - Frozen Cliffs Seed",
        "rarity": 999
      },
      {
        "itemID": 7646,
        "name": "Tyr's Spear",
        "rarity": 999
      },
      {
        "itemID": 7647,
        "name": "Tyr's Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 7648,
        "name": "Huginn and Muninn - Odin's Ravens",
        "rarity": 999
      },
      {
        "itemID": 7649,
        "name": "Huginn and Muninn - Odin's Ravens Seed",
        "rarity": 999
      },
      {
        "itemID": 7650,
        "name": "Mjolnir",
        "rarity": 999
      },
      {
        "itemID": 7651,
        "name": "Mjolnir Seed",
        "rarity": 999
      },
      {
        "itemID": 7652,
        "name": "Eir's Healing Rune",
        "rarity": 999
      },
      {
        "itemID": 7653,
        "name": "Eir's Healing Rune Seed",
        "rarity": 999
      },
      {
        "itemID": 7654,
        "name": "Thor's Chariot",
        "rarity": 999
      },
      {
        "itemID": 7655,
        "name": "Thor's Chariot Seed",
        "rarity": 999
      },
      {
        "itemID": 7656,
        "name": "Growmoji Cake",
        "rarity": 999
      },
      {
        "itemID": 7657,
        "name": "Growmoji Cake Seed",
        "rarity": 999
      },
      {
        "itemID": 7658,
        "name": "The Amazing Hexagon - 6th Anniversary Block",
        "rarity": 999
      },
      {
        "itemID": 7659,
        "name": "The Amazing Hexagon - 6th Anniversary Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7660,
        "name": "Super Party Launcher",
        "rarity": 999
      },
      {
        "itemID": 7661,
        "name": "Super Party Launcher Seed",
        "rarity": 999
      },
      {
        "itemID": 7662,
        "name": "Black Party Table",
        "rarity": 999
      },
      {
        "itemID": 7663,
        "name": "Black Party Table Seed",
        "rarity": 999
      },
      {
        "itemID": 7664,
        "name": "Party Punch Bowl",
        "rarity": 999
      },
      {
        "itemID": 7665,
        "name": "Party Punch Bowl Seed",
        "rarity": 999
      },
      {
        "itemID": 7666,
        "name": "Balloon Decoration",
        "rarity": 999
      },
      {
        "itemID": 7667,
        "name": "Balloon Decoration Seed",
        "rarity": 999
      },
      {
        "itemID": 7668,
        "name": "Air Horn",
        "rarity": 999
      },
      {
        "itemID": 7669,
        "name": "Air Horn Seed",
        "rarity": 999
      },
      {
        "itemID": 7670,
        "name": "Floating Speakers",
        "rarity": 999
      },
      {
        "itemID": 7671,
        "name": "Floating Speakers Seed",
        "rarity": 999
      },
      {
        "itemID": 7672,
        "name": "Golden Party-In-A-Box",
        "rarity": 999
      },
      {
        "itemID": 7673,
        "name": "Golden Party-In-A-Box Seed",
        "rarity": 999
      },
      {
        "itemID": 7674,
        "name": "Goat Leash",
        "rarity": 999
      },
      {
        "itemID": 7675,
        "name": "Goat Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 7676,
        "name": "Dragon Warrior's Shield - Crimson",
        "rarity": 999
      },
      {
        "itemID": 7677,
        "name": "Dragon Warrior's Shield - Crimson Seed",
        "rarity": 999
      },
      {
        "itemID": 7678,
        "name": "Dragon Warrior's Shield - Purple",
        "rarity": 999
      },
      {
        "itemID": 7679,
        "name": "Dragon Warrior's Shield - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 7680,
        "name": "Dragon Warrior's Shield - Silver",
        "rarity": 999
      },
      {
        "itemID": 7681,
        "name": "Dragon Warrior's Shield - Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 7682,
        "name": "Dragon Warrior's Shield - Diamond",
        "rarity": 999
      },
      {
        "itemID": 7683,
        "name": "Dragon Warrior's Shield - Diamond Seed",
        "rarity": 999
      },
      {
        "itemID": 7684,
        "name": "Growmoji Heart with Arrow",
        "rarity": 999
      },
      {
        "itemID": 7685,
        "name": "Growmoji Heart with Arrow Seed",
        "rarity": 999
      },
      {
        "itemID": 7686,
        "name": "Chinese Temple Pillar",
        "rarity": 999
      },
      {
        "itemID": 7687,
        "name": "Chinese Temple Pillar Seed",
        "rarity": 999
      },
      {
        "itemID": 7688,
        "name": "Chinese Prayer Wheel",
        "rarity": 999
      },
      {
        "itemID": 7689,
        "name": "Chinese Prayer Wheel Seed",
        "rarity": 999
      },
      {
        "itemID": 7690,
        "name": "Chinese Temple Background",
        "rarity": 999
      },
      {
        "itemID": 7691,
        "name": "Chinese Temple Background Seed",
        "rarity": 999
      },
      {
        "itemID": 7692,
        "name": "Chinese Temple Awning",
        "rarity": 999
      },
      {
        "itemID": 7693,
        "name": "Chinese Temple Awning Seed",
        "rarity": 999
      },
      {
        "itemID": 7694,
        "name": "Incense Urn",
        "rarity": 999
      },
      {
        "itemID": 7695,
        "name": "Incense Urn Seed",
        "rarity": 999
      },
      {
        "itemID": 7696,
        "name": "Draconic Rocket Parasol",
        "rarity": 999
      },
      {
        "itemID": 7697,
        "name": "Draconic Rocket Parasol Seed",
        "rarity": 999
      },
      {
        "itemID": 7698,
        "name": "Growmoji Lucky Token",
        "rarity": 999
      },
      {
        "itemID": 7699,
        "name": "Growmoji Lucky Token Seed",
        "rarity": 999
      },
      {
        "itemID": 7700,
        "name": "Year of the Pig Lucky Token",
        "rarity": 1
      },
      {
        "itemID": 7701,
        "name": "Year of the Pig Lucky Token Seed",
        "rarity": 1
      },
      {
        "itemID": 7702,
        "name": "Dragon Glass",
        "rarity": 999
      },
      {
        "itemID": 7703,
        "name": "Dragon Glass Seed",
        "rarity": 999
      },
      {
        "itemID": 7704,
        "name": "Toasted Village Wall",
        "rarity": 80
      },
      {
        "itemID": 7705,
        "name": "Toasted Village Wall Seed",
        "rarity": 80
      },
      {
        "itemID": 7706,
        "name": "Toasted Village Background",
        "rarity": 81
      },
      {
        "itemID": 7707,
        "name": "Toasted Village Background Seed",
        "rarity": 81
      },
      {
        "itemID": 7708,
        "name": "Toasted Village Door",
        "rarity": 82
      },
      {
        "itemID": 7709,
        "name": "Toasted Village Door Seed",
        "rarity": 82
      },
      {
        "itemID": 7710,
        "name": "Toasted Village Roof",
        "rarity": 77
      },
      {
        "itemID": 7711,
        "name": "Toasted Village Roof Seed",
        "rarity": 77
      },
      {
        "itemID": 7712,
        "name": "Toasted Village Window",
        "rarity": 83
      },
      {
        "itemID": 7713,
        "name": "Toasted Village Window Seed",
        "rarity": 83
      },
      {
        "itemID": 7714,
        "name": "Toasted Village Fence",
        "rarity": 93
      },
      {
        "itemID": 7715,
        "name": "Toasted Village Fence Seed",
        "rarity": 93
      },
      {
        "itemID": 7716,
        "name": "Toasted Villager Shirt",
        "rarity": 76
      },
      {
        "itemID": 7717,
        "name": "Toasted Villager Shirt Seed",
        "rarity": 76
      },
      {
        "itemID": 7718,
        "name": "Toasted Villager Hat",
        "rarity": 76
      },
      {
        "itemID": 7719,
        "name": "Toasted Villager Hat Seed",
        "rarity": 76
      },
      {
        "itemID": 7720,
        "name": "Toasted Villager Pants",
        "rarity": 76
      },
      {
        "itemID": 7721,
        "name": "Toasted Villager Pants Seed",
        "rarity": 76
      },
      {
        "itemID": 7722,
        "name": "Toasted Villager Shoes",
        "rarity": 76
      },
      {
        "itemID": 7723,
        "name": "Toasted Villager Shoes Seed",
        "rarity": 76
      },
      {
        "itemID": 7724,
        "name": "Toasted Face Smudges",
        "rarity": 77
      },
      {
        "itemID": 7725,
        "name": "Toasted Face Smudges Seed",
        "rarity": 77
      },
      {
        "itemID": 7726,
        "name": "Dragon Knight's Helm",
        "rarity": 999
      },
      {
        "itemID": 7727,
        "name": "Dragon Knight's Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 7728,
        "name": "Dragon Knight's Chestplate",
        "rarity": 999
      },
      {
        "itemID": 7729,
        "name": "Dragon Knight's Chestplate Seed",
        "rarity": 999
      },
      {
        "itemID": 7730,
        "name": "Dragon Knight's Greaves",
        "rarity": 999
      },
      {
        "itemID": 7731,
        "name": "Dragon Knight's Greaves Seed",
        "rarity": 999
      },
      {
        "itemID": 7732,
        "name": "Dragon Knight's Sabatons",
        "rarity": 999
      },
      {
        "itemID": 7733,
        "name": "Dragon Knight's Sabatons Seed",
        "rarity": 999
      },
      {
        "itemID": 7734,
        "name": "Legendary Dragon Knight's Wings",
        "rarity": 999
      },
      {
        "itemID": 7735,
        "name": "Legendary Dragon Knight's Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7736,
        "name": "Dragon Knight's Spear",
        "rarity": 999
      },
      {
        "itemID": 7737,
        "name": "Dragon Knight's Spear Seed",
        "rarity": 999
      },
      {
        "itemID": 7738,
        "name": "Dragon Throne",
        "rarity": 999
      },
      {
        "itemID": 7739,
        "name": "Dragon Throne Seed",
        "rarity": 999
      },
      {
        "itemID": 7740,
        "name": "Dragon Mirror",
        "rarity": 999
      },
      {
        "itemID": 7741,
        "name": "Dragon Mirror Seed",
        "rarity": 999
      },
      {
        "itemID": 7742,
        "name": "Dragon Lamp",
        "rarity": 999
      },
      {
        "itemID": 7743,
        "name": "Dragon Lamp Seed",
        "rarity": 999
      },
      {
        "itemID": 7744,
        "name": "Dragon Turtle",
        "rarity": 999
      },
      {
        "itemID": 7745,
        "name": "Dragon Turtle Seed",
        "rarity": 999
      },
      {
        "itemID": 7746,
        "name": "Dragon Turtle Charm",
        "rarity": 999
      },
      {
        "itemID": 7747,
        "name": "Dragon Turtle Charm Seed",
        "rarity": 999
      },
      {
        "itemID": 7748,
        "name": "Super-Dragon Mask",
        "rarity": 999
      },
      {
        "itemID": 7749,
        "name": "Super-Dragon Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7750,
        "name": "Ghost Dragon Charm",
        "rarity": 999
      },
      {
        "itemID": 7751,
        "name": "Ghost Dragon Charm Seed",
        "rarity": 999
      },
      {
        "itemID": 7752,
        "name": "Gourmet Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 7753,
        "name": "Gourmet Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 7754,
        "name": "Emergency Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 7755,
        "name": "Emergency Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 7756,
        "name": "Jormungandr",
        "rarity": 999
      },
      {
        "itemID": 7757,
        "name": "Jormungandr Seed",
        "rarity": 999
      },
      {
        "itemID": 7758,
        "name": "Prehistoric Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 7759,
        "name": "Prehistoric Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 7760,
        "name": "Star Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 7761,
        "name": "Star Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 7762,
        "name": "Chaos Dragon",
        "rarity": 999
      },
      {
        "itemID": 7763,
        "name": "Chaos Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 7764,
        "name": "Stone Egg",
        "rarity": 999
      },
      {
        "itemID": 7765,
        "name": "Stone Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7766,
        "name": "Hatching Stone Egg",
        "rarity": 999
      },
      {
        "itemID": 7767,
        "name": "Hatching Stone Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7768,
        "name": "Ghost Egg",
        "rarity": 999
      },
      {
        "itemID": 7769,
        "name": "Ghost Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7770,
        "name": "Hatching Ghost Egg",
        "rarity": 999
      },
      {
        "itemID": 7771,
        "name": "Hatching Ghost Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7772,
        "name": "Water Egg",
        "rarity": 999
      },
      {
        "itemID": 7773,
        "name": "Water Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7774,
        "name": "Hatching Water Egg",
        "rarity": 999
      },
      {
        "itemID": 7775,
        "name": "Hatching Water Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7776,
        "name": "Void Egg",
        "rarity": 999
      },
      {
        "itemID": 7777,
        "name": "Void Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7778,
        "name": "Hatching Void Egg",
        "rarity": 999
      },
      {
        "itemID": 7779,
        "name": "Hatching Void Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 7780,
        "name": "Dragon Soul",
        "rarity": 999
      },
      {
        "itemID": 7781,
        "name": "Dragon Soul Seed",
        "rarity": 999
      },
      {
        "itemID": 7782,
        "name": "null_item7782",
        "rarity": 1
      },
      {
        "itemID": 7783,
        "name": "null_item7782 Seed",
        "rarity": 1
      },
      {
        "itemID": 7784,
        "name": "null_item7784",
        "rarity": 1
      },
      {
        "itemID": 7785,
        "name": "null_item7784 Seed",
        "rarity": 1
      },
      {
        "itemID": 7786,
        "name": "Mentorship Certificate",
        "rarity": 999
      },
      {
        "itemID": 7787,
        "name": "Mentorship Certificate Seed",
        "rarity": 999
      },
      {
        "itemID": 7788,
        "name": "Apprentice Ticket - Level 1",
        "rarity": 999
      },
      {
        "itemID": 7789,
        "name": "Apprentice Ticket - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 7790,
        "name": "Apprentice Ticket - Level 5",
        "rarity": 999
      },
      {
        "itemID": 7791,
        "name": "Apprentice Ticket - Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 7792,
        "name": "Apprentice Ticket - Level 10",
        "rarity": 999
      },
      {
        "itemID": 7793,
        "name": "Apprentice Ticket - Level 10 Seed",
        "rarity": 999
      },
      {
        "itemID": 7794,
        "name": "Apprentice Ticket - Level 20",
        "rarity": 999
      },
      {
        "itemID": 7795,
        "name": "Apprentice Ticket - Level 20 Seed",
        "rarity": 999
      },
      {
        "itemID": 7796,
        "name": "Apprentice Ticket - Level 30",
        "rarity": 999
      },
      {
        "itemID": 7797,
        "name": "Apprentice Ticket - Level 30 Seed",
        "rarity": 999
      },
      {
        "itemID": 7798,
        "name": "Mentor Ticket - Level 1",
        "rarity": 999
      },
      {
        "itemID": 7799,
        "name": "Mentor Ticket - Level 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 7800,
        "name": "Mentor Ticket - Level 5",
        "rarity": 999
      },
      {
        "itemID": 7801,
        "name": "Mentor Ticket - Level 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 7802,
        "name": "Mentor Ticket - Level 10",
        "rarity": 999
      },
      {
        "itemID": 7803,
        "name": "Mentor Ticket - Level 10 Seed",
        "rarity": 999
      },
      {
        "itemID": 7804,
        "name": "Mentor Ticket - Level 20",
        "rarity": 999
      },
      {
        "itemID": 7805,
        "name": "Mentor Ticket - Level 20 Seed",
        "rarity": 999
      },
      {
        "itemID": 7806,
        "name": "Mentor Ticket - Level 30",
        "rarity": 999
      },
      {
        "itemID": 7807,
        "name": "Mentor Ticket - Level 30 Seed",
        "rarity": 999
      },
      {
        "itemID": 7808,
        "name": "Heartcastle Stone",
        "rarity": 10
      },
      {
        "itemID": 7809,
        "name": "Heartcastle Stone Seed",
        "rarity": 10
      },
      {
        "itemID": 7810,
        "name": "Heartcastle Stone Background",
        "rarity": 10
      },
      {
        "itemID": 7811,
        "name": "Heartcastle Stone Background Seed",
        "rarity": 10
      },
      {
        "itemID": 7812,
        "name": "Heartcastle Gate",
        "rarity": 73
      },
      {
        "itemID": 7813,
        "name": "Heartcastle Gate Seed",
        "rarity": 73
      },
      {
        "itemID": 7814,
        "name": "Heartcastle Turret",
        "rarity": 20
      },
      {
        "itemID": 7815,
        "name": "Heartcastle Turret Seed",
        "rarity": 20
      },
      {
        "itemID": 7816,
        "name": "Heartcastle Column",
        "rarity": 19
      },
      {
        "itemID": 7817,
        "name": "Heartcastle Column Seed",
        "rarity": 19
      },
      {
        "itemID": 7818,
        "name": "Heartking's Crown",
        "rarity": 999
      },
      {
        "itemID": 7819,
        "name": "Heartking's Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 7820,
        "name": "Heartking's Robes",
        "rarity": 999
      },
      {
        "itemID": 7821,
        "name": "Heartking's Robes Seed",
        "rarity": 999
      },
      {
        "itemID": 7822,
        "name": "Heartqueen's Crown",
        "rarity": 999
      },
      {
        "itemID": 7823,
        "name": "Heartqueen's Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 7824,
        "name": "Heartqueen's Robes",
        "rarity": 999
      },
      {
        "itemID": 7825,
        "name": "Heartqueen's Robes Seed",
        "rarity": 999
      },
      {
        "itemID": 7826,
        "name": "Heartstaff",
        "rarity": 999
      },
      {
        "itemID": 7827,
        "name": "Heartstaff Seed",
        "rarity": 999
      },
      {
        "itemID": 7828,
        "name": "Golden Heartstaff",
        "rarity": 999
      },
      {
        "itemID": 7829,
        "name": "Golden Heartstaff Seed",
        "rarity": 999
      },
      {
        "itemID": 7830,
        "name": "Heartsword",
        "rarity": 999
      },
      {
        "itemID": 7831,
        "name": "Heartsword Seed",
        "rarity": 999
      },
      {
        "itemID": 7832,
        "name": "Golden Heartsword",
        "rarity": 999
      },
      {
        "itemID": 7833,
        "name": "Golden Heartsword Seed",
        "rarity": 999
      },
      {
        "itemID": 7834,
        "name": "Stained Glass Heartwings",
        "rarity": 999
      },
      {
        "itemID": 7835,
        "name": "Stained Glass Heartwings Seed",
        "rarity": 999
      },
      {
        "itemID": 7836,
        "name": "Morty the Gray Elephant",
        "rarity": 999
      },
      {
        "itemID": 7837,
        "name": "Morty the Gray Elephant Seed",
        "rarity": 999
      },
      {
        "itemID": 7838,
        "name": "Morty the Orange Elephant",
        "rarity": 999
      },
      {
        "itemID": 7839,
        "name": "Morty the Orange Elephant Seed",
        "rarity": 999
      },
      {
        "itemID": 7840,
        "name": "Morty the Pink Elephant",
        "rarity": 999
      },
      {
        "itemID": 7841,
        "name": "Morty the Pink Elephant Seed",
        "rarity": 999
      },
      {
        "itemID": 7842,
        "name": "Morty the Diamond Elephant",
        "rarity": 999
      },
      {
        "itemID": 7843,
        "name": "Morty the Diamond Elephant Seed",
        "rarity": 999
      },
      {
        "itemID": 7844,
        "name": "Spring Token",
        "rarity": 999
      },
      {
        "itemID": 7845,
        "name": "Spring Token Seed",
        "rarity": 999
      },
      {
        "itemID": 7846,
        "name": "Manor House Sandstone",
        "rarity": 999
      },
      {
        "itemID": 7847,
        "name": "Manor House Sandstone Seed",
        "rarity": 999
      },
      {
        "itemID": 7848,
        "name": "Manor House Sandstone Background",
        "rarity": 999
      },
      {
        "itemID": 7849,
        "name": "Manor House Sandstone Background Seed",
        "rarity": 999
      },
      {
        "itemID": 7850,
        "name": "Manor House Door",
        "rarity": 999
      },
      {
        "itemID": 7851,
        "name": "Manor House Door Seed",
        "rarity": 999
      },
      {
        "itemID": 7852,
        "name": "Manor House Sandstone Steps",
        "rarity": 999
      },
      {
        "itemID": 7853,
        "name": "Manor House Sandstone Steps Seed",
        "rarity": 999
      },
      {
        "itemID": 7854,
        "name": "Manor House Red Striped Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 7855,
        "name": "Manor House Red Striped Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 7856,
        "name": "Gilt Inlaid Ceiling",
        "rarity": 999
      },
      {
        "itemID": 7857,
        "name": "Gilt Inlaid Ceiling Seed",
        "rarity": 999
      },
      {
        "itemID": 7858,
        "name": "Baroque Iron Fence",
        "rarity": 999
      },
      {
        "itemID": 7859,
        "name": "Baroque Iron Fence Seed",
        "rarity": 999
      },
      {
        "itemID": 7860,
        "name": "Baroque Iron Gate",
        "rarity": 999
      },
      {
        "itemID": 7861,
        "name": "Baroque Iron Gate Seed",
        "rarity": 999
      },
      {
        "itemID": 7862,
        "name": "Candle Wall Sconce",
        "rarity": 999
      },
      {
        "itemID": 7863,
        "name": "Candle Wall Sconce Seed",
        "rarity": 999
      },
      {
        "itemID": 7864,
        "name": "Luxurious Wall Clock",
        "rarity": 999
      },
      {
        "itemID": 7865,
        "name": "Luxurious Wall Clock Seed",
        "rarity": 999
      },
      {
        "itemID": 7866,
        "name": "Topiary Hedge",
        "rarity": 999
      },
      {
        "itemID": 7867,
        "name": "Topiary Hedge Seed",
        "rarity": 999
      },
      {
        "itemID": 7868,
        "name": "Statue Pillar",
        "rarity": 999
      },
      {
        "itemID": 7869,
        "name": "Statue Pillar Seed",
        "rarity": 999
      },
      {
        "itemID": 7870,
        "name": "Sandstone Fireplace",
        "rarity": 999
      },
      {
        "itemID": 7871,
        "name": "Sandstone Fireplace Seed",
        "rarity": 999
      },
      {
        "itemID": 7872,
        "name": "Garden Trellis Tunnel",
        "rarity": 999
      },
      {
        "itemID": 7873,
        "name": "Garden Trellis Tunnel Seed",
        "rarity": 999
      },
      {
        "itemID": 7874,
        "name": "Hibiscus",
        "rarity": 999
      },
      {
        "itemID": 7875,
        "name": "Hibiscus Seed",
        "rarity": 999
      },
      {
        "itemID": 7876,
        "name": "Lavender",
        "rarity": 999
      },
      {
        "itemID": 7877,
        "name": "Lavender Seed",
        "rarity": 999
      },
      {
        "itemID": 7878,
        "name": "Garden Planter",
        "rarity": 999
      },
      {
        "itemID": 7879,
        "name": "Garden Planter Seed",
        "rarity": 999
      },
      {
        "itemID": 7880,
        "name": "Armillary Sundial",
        "rarity": 999
      },
      {
        "itemID": 7881,
        "name": "Armillary Sundial Seed",
        "rarity": 999
      },
      {
        "itemID": 7882,
        "name": "Baroque Fountain",
        "rarity": 999
      },
      {
        "itemID": 7883,
        "name": "Baroque Fountain Seed",
        "rarity": 999
      },
      {
        "itemID": 7884,
        "name": "Greenhouse",
        "rarity": 999
      },
      {
        "itemID": 7885,
        "name": "Greenhouse Seed",
        "rarity": 999
      },
      {
        "itemID": 7886,
        "name": "Garden Bird House",
        "rarity": 999
      },
      {
        "itemID": 7887,
        "name": "Garden Bird House Seed",
        "rarity": 999
      },
      {
        "itemID": 7888,
        "name": "Garden Bench",
        "rarity": 999
      },
      {
        "itemID": 7889,
        "name": "Garden Bench Seed",
        "rarity": 999
      },
      {
        "itemID": 7890,
        "name": "Garden Shears",
        "rarity": 999
      },
      {
        "itemID": 7891,
        "name": "Garden Shears Seed",
        "rarity": 999
      },
      {
        "itemID": 7892,
        "name": "Country Tweed Waistcoat & Tie",
        "rarity": 999
      },
      {
        "itemID": 7893,
        "name": "Country Tweed Waistcoat & Tie Seed",
        "rarity": 999
      },
      {
        "itemID": 7894,
        "name": "Country Tweed Open Jacket",
        "rarity": 999
      },
      {
        "itemID": 7895,
        "name": "Country Tweed Open Jacket Seed",
        "rarity": 999
      },
      {
        "itemID": 7896,
        "name": "Country Tweed Trousers",
        "rarity": 999
      },
      {
        "itemID": 7897,
        "name": "Country Tweed Trousers Seed",
        "rarity": 999
      },
      {
        "itemID": 7898,
        "name": "Country Tweed Flat Cap",
        "rarity": 999
      },
      {
        "itemID": 7899,
        "name": "Country Tweed Flat Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 7900,
        "name": "Country Tweed Jacket & Yellow Tie",
        "rarity": 999
      },
      {
        "itemID": 7901,
        "name": "Country Tweed Jacket & Yellow Tie Seed",
        "rarity": 999
      },
      {
        "itemID": 7902,
        "name": "Country Riding Breeches",
        "rarity": 999
      },
      {
        "itemID": 7903,
        "name": "Country Riding Breeches Seed",
        "rarity": 999
      },
      {
        "itemID": 7904,
        "name": "Country Riding Hat",
        "rarity": 999
      },
      {
        "itemID": 7905,
        "name": "Country Riding Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7906,
        "name": "Guild Show Horse",
        "rarity": 999
      },
      {
        "itemID": 7907,
        "name": "Guild Show Horse Seed",
        "rarity": 999
      },
      {
        "itemID": 7908,
        "name": "Guild Noble's Carriage",
        "rarity": 999
      },
      {
        "itemID": 7909,
        "name": "Guild Noble's Carriage Seed",
        "rarity": 999
      },
      {
        "itemID": 7910,
        "name": "Eagle Spirit",
        "rarity": 999
      },
      {
        "itemID": 7911,
        "name": "Eagle Spirit Seed",
        "rarity": 999
      },
      {
        "itemID": 7912,
        "name": "War Hammers of Darkness",
        "rarity": 999
      },
      {
        "itemID": 7913,
        "name": "War Hammers of Darkness Seed",
        "rarity": 999
      },
      {
        "itemID": 7914,
        "name": "Condor Wings",
        "rarity": 999
      },
      {
        "itemID": 7915,
        "name": "Condor Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7916,
        "name": "Airplane Wings",
        "rarity": 999
      },
      {
        "itemID": 7917,
        "name": "Airplane Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 7918,
        "name": "Sturdy Crackfire Fighter",
        "rarity": 999
      },
      {
        "itemID": 7919,
        "name": "Sturdy Crackfire Fighter Seed",
        "rarity": 999
      },
      {
        "itemID": 7920,
        "name": "Cardboard Sky Starter",
        "rarity": 999
      },
      {
        "itemID": 7921,
        "name": "Cardboard Sky Starter Seed",
        "rarity": 999
      },
      {
        "itemID": 7922,
        "name": "Aviator Scarf",
        "rarity": 999
      },
      {
        "itemID": 7923,
        "name": "Aviator Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 7924,
        "name": "Aviator Jacket",
        "rarity": 999
      },
      {
        "itemID": 7925,
        "name": "Aviator Jacket Seed",
        "rarity": 999
      },
      {
        "itemID": 7926,
        "name": "Aviator Glasses",
        "rarity": 999
      },
      {
        "itemID": 7927,
        "name": "Aviator Glasses Seed",
        "rarity": 999
      },
      {
        "itemID": 7928,
        "name": "Aviator Fighter Pilot Hat",
        "rarity": 999
      },
      {
        "itemID": 7929,
        "name": "Aviator Fighter Pilot Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 7930,
        "name": "Air Force Flight Suit",
        "rarity": 999
      },
      {
        "itemID": 7931,
        "name": "Air Force Flight Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7932,
        "name": "Growmoji Shamrock",
        "rarity": 999
      },
      {
        "itemID": 7933,
        "name": "Growmoji Shamrock Seed",
        "rarity": 999
      },
      {
        "itemID": 7934,
        "name": "Spring Flinger Frog Mask",
        "rarity": 999
      },
      {
        "itemID": 7935,
        "name": "Spring Flinger Frog Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7936,
        "name": "Ultra Spring Flinger Frog Mask",
        "rarity": 999
      },
      {
        "itemID": 7937,
        "name": "Ultra Spring Flinger Frog Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 7938,
        "name": "Paintball Power Popper",
        "rarity": 999
      },
      {
        "itemID": 7939,
        "name": "Paintball Power Popper Seed",
        "rarity": 999
      },
      {
        "itemID": 7940,
        "name": "Flaming Boxing Gloves",
        "rarity": 999
      },
      {
        "itemID": 7941,
        "name": "Flaming Boxing Gloves Seed",
        "rarity": 999
      },
      {
        "itemID": 7942,
        "name": "Up, Up, and Away Block",
        "rarity": 999
      },
      {
        "itemID": 7943,
        "name": "Up, Up, and Away Block Seed",
        "rarity": 999
      },
      {
        "itemID": 7944,
        "name": "Spring Flinger Frog Suit",
        "rarity": 999
      },
      {
        "itemID": 7945,
        "name": "Spring Flinger Frog Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7946,
        "name": "Ultra Spring Flinger Frog Suit",
        "rarity": 999
      },
      {
        "itemID": 7947,
        "name": "Ultra Spring Flinger Frog Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 7948,
        "name": "Forged Iron Skin",
        "rarity": 999
      },
      {
        "itemID": 7949,
        "name": "Forged Iron Skin Seed",
        "rarity": 999
      },
      {
        "itemID": 7950,
        "name": "Ionic Pulse Cannon Tank",
        "rarity": 999
      },
      {
        "itemID": 7951,
        "name": "Ionic Pulse Cannon Tank Seed",
        "rarity": 999
      },
      {
        "itemID": 7952,
        "name": "Slippery Flag Pole",
        "rarity": 999
      },
      {
        "itemID": 7953,
        "name": "Slippery Flag Pole Seed",
        "rarity": 999
      },
      {
        "itemID": 7954,
        "name": "Spring Chest",
        "rarity": 999
      },
      {
        "itemID": 7955,
        "name": "Spring Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 7956,
        "name": "Burnished Sword",
        "rarity": 999
      },
      {
        "itemID": 7957,
        "name": "Burnished Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 7958,
        "name": "GrowCon Plaque",
        "rarity": 999
      },
      {
        "itemID": 7959,
        "name": "GrowCon Plaque Seed",
        "rarity": 999
      },
      {
        "itemID": 7960,
        "name": "null_item7960",
        "rarity": 1
      },
      {
        "itemID": 7961,
        "name": "null_item7960 Seed",
        "rarity": 1
      },
      {
        "itemID": 7962,
        "name": "null_item7962",
        "rarity": 1
      },
      {
        "itemID": 7963,
        "name": "null_item7962 Seed",
        "rarity": 1
      },
      {
        "itemID": 7964,
        "name": "Spring Event Player Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 7965,
        "name": "Spring Event Player Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 7966,
        "name": "Spring Event Player Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 7967,
        "name": "Spring Event Player Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 7968,
        "name": "Spring Event Player Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 7969,
        "name": "Spring Event Player Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 7970,
        "name": "Spring Event Guild Medal: Bronze",
        "rarity": 999
      },
      {
        "itemID": 7971,
        "name": "Spring Event Guild Medal: Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 7972,
        "name": "Spring Event Guild Medal: Silver",
        "rarity": 999
      },
      {
        "itemID": 7973,
        "name": "Spring Event Guild Medal: Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 7974,
        "name": "Spring Event Guild Medal: Gold",
        "rarity": 999
      },
      {
        "itemID": 7975,
        "name": "Spring Event Guild Medal: Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 7976,
        "name": "Kairos' Apollo",
        "rarity": 999
      },
      {
        "itemID": 7977,
        "name": "Kairos' Apollo Seed",
        "rarity": 999
      },
      {
        "itemID": 7978,
        "name": "Celtic Cross",
        "rarity": 999
      },
      {
        "itemID": 7979,
        "name": "Celtic Cross Seed",
        "rarity": 999
      },
      {
        "itemID": 7980,
        "name": "Minilith Stone",
        "rarity": 999
      },
      {
        "itemID": 7981,
        "name": "Minilith Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 7982,
        "name": "Faerie Lanterns",
        "rarity": 999
      },
      {
        "itemID": 7983,
        "name": "Faerie Lanterns Seed",
        "rarity": 999
      },
      {
        "itemID": 7984,
        "name": "Heather Bush",
        "rarity": 999
      },
      {
        "itemID": 7985,
        "name": "Heather Bush Seed",
        "rarity": 999
      },
      {
        "itemID": 7986,
        "name": "Lucky Chair",
        "rarity": 999
      },
      {
        "itemID": 7987,
        "name": "Lucky Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 7988,
        "name": "Moss-Covered Stone",
        "rarity": 999
      },
      {
        "itemID": 7989,
        "name": "Moss-Covered Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 7990,
        "name": "Money Tree",
        "rarity": 999
      },
      {
        "itemID": 7991,
        "name": "Money Tree Seed",
        "rarity": 999
      },
      {
        "itemID": 7992,
        "name": "Four-Leaf Clover Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 7993,
        "name": "Four-Leaf Clover Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 7994,
        "name": "Kelpie",
        "rarity": 999
      },
      {
        "itemID": 7995,
        "name": "Kelpie Seed",
        "rarity": 999
      },
      {
        "itemID": 7996,
        "name": "Bagpipes",
        "rarity": 999
      },
      {
        "itemID": 7997,
        "name": "Bagpipes Seed",
        "rarity": 999
      },
      {
        "itemID": 7998,
        "name": "Fairy",
        "rarity": 999
      },
      {
        "itemID": 7999,
        "name": "Fairy Seed",
        "rarity": 999
      },
      {
        "itemID": 8000,
        "name": "Lucky Broach",
        "rarity": 999
      },
      {
        "itemID": 8001,
        "name": "Lucky Broach Seed",
        "rarity": 999
      },
      {
        "itemID": 8002,
        "name": "Money Gun",
        "rarity": 999
      },
      {
        "itemID": 8003,
        "name": "Money Gun Seed",
        "rarity": 999
      },
      {
        "itemID": 8004,
        "name": "Rollback Plaque V",
        "rarity": 1
      },
      {
        "itemID": 8005,
        "name": "Rollback Plaque V Seed",
        "rarity": 1
      },
      {
        "itemID": 8006,
        "name": "Hellfire Horns - Black",
        "rarity": 999
      },
      {
        "itemID": 8007,
        "name": "Hellfire Horns - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 8008,
        "name": "Hellfire Horns - Blue",
        "rarity": 999
      },
      {
        "itemID": 8009,
        "name": "Hellfire Horns - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8010,
        "name": "Hellfire Horns - Orange",
        "rarity": 999
      },
      {
        "itemID": 8011,
        "name": "Hellfire Horns - Orange Seed",
        "rarity": 999
      },
      {
        "itemID": 8012,
        "name": "Hellfire Horns - Ruby",
        "rarity": 999
      },
      {
        "itemID": 8013,
        "name": "Hellfire Horns - Ruby Seed",
        "rarity": 999
      },
      {
        "itemID": 8014,
        "name": "Spring Flinger Shoes",
        "rarity": 999
      },
      {
        "itemID": 8015,
        "name": "Spring Flinger Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 8016,
        "name": "Ultra Spring Flinger Shoes",
        "rarity": 999
      },
      {
        "itemID": 8017,
        "name": "Ultra Spring Flinger Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 8018,
        "name": "S.P.I.D.E.R. Legs",
        "rarity": 999
      },
      {
        "itemID": 8019,
        "name": "S.P.I.D.E.R. Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 8020,
        "name": "Trickster",
        "rarity": 999
      },
      {
        "itemID": 8021,
        "name": "Trickster Seed",
        "rarity": 999
      },
      {
        "itemID": 8022,
        "name": "Junk Cannon",
        "rarity": 999
      },
      {
        "itemID": 8023,
        "name": "Junk Cannon Seed",
        "rarity": 999
      },
      {
        "itemID": 8024,
        "name": "Purple Aura",
        "rarity": 999
      },
      {
        "itemID": 8025,
        "name": "Purple Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 8026,
        "name": "Green Aura",
        "rarity": 999
      },
      {
        "itemID": 8027,
        "name": "Green Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 8028,
        "name": "Growmoji Grin",
        "rarity": 999
      },
      {
        "itemID": 8029,
        "name": "Growmoji Grin Seed",
        "rarity": 999
      },
      {
        "itemID": 8030,
        "name": "NekoRei's Fluffy Micio",
        "rarity": 999
      },
      {
        "itemID": 8031,
        "name": "NekoRei's Fluffy Micio Seed",
        "rarity": 999
      },
      {
        "itemID": 8032,
        "name": "NekoRei's Fluffy Tail",
        "rarity": 999
      },
      {
        "itemID": 8033,
        "name": "NekoRei's Fluffy Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 8034,
        "name": "WOTD Trophy 2019",
        "rarity": 999
      },
      {
        "itemID": 8035,
        "name": "WOTD Trophy 2019 Seed",
        "rarity": 999
      },
      {
        "itemID": 8036,
        "name": "Balloon Bunny",
        "rarity": 999
      },
      {
        "itemID": 8037,
        "name": "Balloon Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 8038,
        "name": "Pet Egg",
        "rarity": 999
      },
      {
        "itemID": 8039,
        "name": "Pet Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 8040,
        "name": "Big Goofy Teeth",
        "rarity": 999
      },
      {
        "itemID": 8041,
        "name": "Big Goofy Teeth Seed",
        "rarity": 999
      },
      {
        "itemID": 8042,
        "name": "Claws of Barko",
        "rarity": 999
      },
      {
        "itemID": 8043,
        "name": "Claws of Barko Seed",
        "rarity": 999
      },
      {
        "itemID": 8044,
        "name": "Bowler Bunny Hat",
        "rarity": 999
      },
      {
        "itemID": 8045,
        "name": "Bowler Bunny Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 8046,
        "name": "Drabbit's Foot",
        "rarity": 999
      },
      {
        "itemID": 8047,
        "name": "Drabbit's Foot Seed",
        "rarity": 999
      },
      {
        "itemID": 8048,
        "name": "Easter Egg",
        "rarity": 999
      },
      {
        "itemID": 8049,
        "name": "Easter Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 8050,
        "name": "Hatching Easter Egg",
        "rarity": 999
      },
      {
        "itemID": 8051,
        "name": "Hatching Easter Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 8052,
        "name": "Psychotic Bunny Mask",
        "rarity": 999
      },
      {
        "itemID": 8053,
        "name": "Psychotic Bunny Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8054,
        "name": "Riding Bunny",
        "rarity": 999
      },
      {
        "itemID": 8055,
        "name": "Riding Bunny Seed",
        "rarity": 999
      },
      {
        "itemID": 8056,
        "name": "Easter Egg Cannon",
        "rarity": 999
      },
      {
        "itemID": 8057,
        "name": "Easter Egg Cannon Seed",
        "rarity": 999
      },
      {
        "itemID": 8058,
        "name": "Easter Island Head",
        "rarity": 999
      },
      {
        "itemID": 8059,
        "name": "Easter Island Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8060,
        "name": "Flower Pinwheel",
        "rarity": 999
      },
      {
        "itemID": 8061,
        "name": "Flower Pinwheel Seed",
        "rarity": 999
      },
      {
        "itemID": 8062,
        "name": "Easter Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 8063,
        "name": "Easter Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 8064,
        "name": "Easter Egg - Growtopia",
        "rarity": 999
      },
      {
        "itemID": 8065,
        "name": "Easter Egg - Growtopia Seed",
        "rarity": 999
      },
      {
        "itemID": 8066,
        "name": "Easter Egg - Ghost",
        "rarity": 999
      },
      {
        "itemID": 8067,
        "name": "Easter Egg - Ghost Seed",
        "rarity": 999
      },
      {
        "itemID": 8068,
        "name": "Easter Egg - Pineapple",
        "rarity": 999
      },
      {
        "itemID": 8069,
        "name": "Easter Egg - Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 8070,
        "name": "Bunny Balloon Hat 1",
        "rarity": 999
      },
      {
        "itemID": 8071,
        "name": "Bunny Balloon Hat 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 8072,
        "name": "Bunny Balloon Hat 2",
        "rarity": 999
      },
      {
        "itemID": 8073,
        "name": "Bunny Balloon Hat 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 8074,
        "name": "Bunny Balloon Hat 3",
        "rarity": 999
      },
      {
        "itemID": 8075,
        "name": "Bunny Balloon Hat 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 8076,
        "name": "Keenan GT's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8077,
        "name": "Keenan GT's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8078,
        "name": "Keenan GT's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8079,
        "name": "Keenan GT's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8080,
        "name": "Keenan GT's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8081,
        "name": "Keenan GT's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8082,
        "name": "Keenan GT's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8083,
        "name": "Keenan GT's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8084,
        "name": "Keenan GT's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8085,
        "name": "Keenan GT's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8086,
        "name": "Keenan GT's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8087,
        "name": "Keenan GT's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8088,
        "name": "VenomST's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8089,
        "name": "VenomST's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8090,
        "name": "VenomST's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8091,
        "name": "VenomST's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8092,
        "name": "VenomST's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8093,
        "name": "VenomST's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8094,
        "name": "VenomST's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8095,
        "name": "VenomST's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8096,
        "name": "VenomST's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8097,
        "name": "VenomST's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8098,
        "name": "VenomST's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8099,
        "name": "VenomST's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8100,
        "name": "LinkTrader GT's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8101,
        "name": "LinkTrader GT's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8102,
        "name": "LinkTrader GT's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8103,
        "name": "LinkTrader GT's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8104,
        "name": "LinkTrader GT's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8105,
        "name": "LinkTrader GT's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8106,
        "name": "LinkTrader GT's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8107,
        "name": "LinkTrader GT's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8108,
        "name": "LinkTrader GT's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8109,
        "name": "LinkTrader GT's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8110,
        "name": "LinkTrader GT's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8111,
        "name": "LinkTrader GT's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8112,
        "name": "Tery's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8113,
        "name": "Tery's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8114,
        "name": "Tery's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8115,
        "name": "Tery's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8116,
        "name": "Tery's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8117,
        "name": "Tery's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8118,
        "name": "Tery's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8119,
        "name": "Tery's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8120,
        "name": "Tery's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8121,
        "name": "Tery's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8122,
        "name": "Tery's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8123,
        "name": "Tery's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8124,
        "name": "evets_gt's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8125,
        "name": "evets_gt's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8126,
        "name": "evets_gt's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8127,
        "name": "evets_gt's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8128,
        "name": "evets_gt's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8129,
        "name": "evets_gt's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8130,
        "name": "evets_gt's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8131,
        "name": "evets_gt's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8132,
        "name": "evets_gt's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8133,
        "name": "evets_gt's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8134,
        "name": "evets_gt's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8135,
        "name": "evets_gt's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8136,
        "name": "BenBarrage's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8137,
        "name": "BenBarrage's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8138,
        "name": "BenBarrage's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8139,
        "name": "BenBarrage's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8140,
        "name": "BenBarrage's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8141,
        "name": "BenBarrage's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8142,
        "name": "BenBarrage's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8143,
        "name": "BenBarrage's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8144,
        "name": "BenBarrage's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8145,
        "name": "BenBarrage's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8146,
        "name": "BenBarrage's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8147,
        "name": "BenBarrage's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8148,
        "name": "MrSongo GT's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8149,
        "name": "MrSongo GT's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8150,
        "name": "MrSongo GT's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8151,
        "name": "MrSongo GT's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8152,
        "name": "MrSongo GT's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8153,
        "name": "MrSongo GT's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8154,
        "name": "MrSongo GT's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8155,
        "name": "MrSongo GT's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8156,
        "name": "MrSongo GT's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8157,
        "name": "MrSongo GT's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8158,
        "name": "MrSongo GT's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8159,
        "name": "MrSongo GT's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8160,
        "name": "OldGertie's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8161,
        "name": "OldGertie's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8162,
        "name": "OldGertie's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8163,
        "name": "OldGertie's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8164,
        "name": "OldGertie's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8165,
        "name": "OldGertie's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8166,
        "name": "OldGertie's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8167,
        "name": "OldGertie's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8168,
        "name": "OldGertie's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8169,
        "name": "OldGertie's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8170,
        "name": "OldGertie's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8171,
        "name": "OldGertie's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8172,
        "name": "macproof_gt's Awesome Item-O-Matic",
        "rarity": 999
      },
      {
        "itemID": 8173,
        "name": "macproof_gt's Awesome Item-O-Matic Seed",
        "rarity": 999
      },
      {
        "itemID": 8174,
        "name": "macproof_gt's Red Block",
        "rarity": 999
      },
      {
        "itemID": 8175,
        "name": "macproof_gt's Red Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8176,
        "name": "macproof_gt's Green Block",
        "rarity": 999
      },
      {
        "itemID": 8177,
        "name": "macproof_gt's Green Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8178,
        "name": "macproof_gt's Blue Block",
        "rarity": 999
      },
      {
        "itemID": 8179,
        "name": "macproof_gt's Blue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8180,
        "name": "macproof_gt's Yellow Block",
        "rarity": 999
      },
      {
        "itemID": 8181,
        "name": "macproof_gt's Yellow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8182,
        "name": "macproof_gt's Ruby Block",
        "rarity": 999
      },
      {
        "itemID": 8183,
        "name": "macproof_gt's Ruby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8184,
        "name": "Mah-Kah-Ron Hat",
        "rarity": 999
      },
      {
        "itemID": 8185,
        "name": "Mah-Kah-Ron Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 8186,
        "name": "30-Day Premium Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 8187,
        "name": "30-Day Premium Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 8188,
        "name": "1-Year Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 8189,
        "name": "1-Year Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 8190,
        "name": "Holy Jeans",
        "rarity": 999
      },
      {
        "itemID": 8191,
        "name": "Holy Jeans Seed",
        "rarity": 999
      },
      {
        "itemID": 8192,
        "name": "Buddy's Block Head",
        "rarity": 999
      },
      {
        "itemID": 8193,
        "name": "Buddy's Block Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8194,
        "name": "Glowy Cape",
        "rarity": 999
      },
      {
        "itemID": 8195,
        "name": "Glowy Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 8196,
        "name": "Building Blocks Machine",
        "rarity": 999
      },
      {
        "itemID": 8197,
        "name": "Building Blocks Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 8198,
        "name": "Used Building Blocks Machine",
        "rarity": 999
      },
      {
        "itemID": 8199,
        "name": "Used Building Blocks Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 8200,
        "name": "Creepy Baby Block",
        "rarity": 999
      },
      {
        "itemID": 8201,
        "name": "Creepy Baby Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8202,
        "name": "Digital Dirt",
        "rarity": 999
      },
      {
        "itemID": 8203,
        "name": "Digital Dirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8204,
        "name": "Granite Column",
        "rarity": 999
      },
      {
        "itemID": 8205,
        "name": "Granite Column Seed",
        "rarity": 999
      },
      {
        "itemID": 8206,
        "name": "Clouds Wallpaper",
        "rarity": 147
      },
      {
        "itemID": 8207,
        "name": "Clouds Wallpaper Seed",
        "rarity": 147
      },
      {
        "itemID": 8208,
        "name": "Skull Wallpaper",
        "rarity": 156
      },
      {
        "itemID": 8209,
        "name": "Skull Wallpaper Seed",
        "rarity": 156
      },
      {
        "itemID": 8210,
        "name": "Dinosaur Wallpaper",
        "rarity": 99
      },
      {
        "itemID": 8211,
        "name": "Dinosaur Wallpaper Seed",
        "rarity": 99
      },
      {
        "itemID": 8212,
        "name": "Lava Falls",
        "rarity": 999
      },
      {
        "itemID": 8213,
        "name": "Lava Falls Seed",
        "rarity": 999
      },
      {
        "itemID": 8214,
        "name": "Clouds Background",
        "rarity": 119
      },
      {
        "itemID": 8215,
        "name": "Clouds Background Seed",
        "rarity": 119
      },
      {
        "itemID": 8216,
        "name": "Dark Walnut Block",
        "rarity": 95
      },
      {
        "itemID": 8217,
        "name": "Dark Walnut Block Seed",
        "rarity": 95
      },
      {
        "itemID": 8218,
        "name": "Dark Walnut Wall",
        "rarity": 92
      },
      {
        "itemID": 8219,
        "name": "Dark Walnut Wall Seed",
        "rarity": 92
      },
      {
        "itemID": 8220,
        "name": "Dark Walnut Ladders",
        "rarity": 111
      },
      {
        "itemID": 8221,
        "name": "Dark Walnut Ladders Seed",
        "rarity": 111
      },
      {
        "itemID": 8222,
        "name": "Rickety Ladders",
        "rarity": 999
      },
      {
        "itemID": 8223,
        "name": "Rickety Ladders Seed",
        "rarity": 999
      },
      {
        "itemID": 8224,
        "name": "Growmoji Smile Block",
        "rarity": 999
      },
      {
        "itemID": 8225,
        "name": "Growmoji Smile Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8226,
        "name": "Growmoji Wow Block",
        "rarity": 999
      },
      {
        "itemID": 8227,
        "name": "Growmoji Wow Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8228,
        "name": "Dark Aqua Wallpaper",
        "rarity": 85
      },
      {
        "itemID": 8229,
        "name": "Dark Aqua Wallpaper Seed",
        "rarity": 85
      },
      {
        "itemID": 8230,
        "name": "Dark Yellow Wallpaper",
        "rarity": 86
      },
      {
        "itemID": 8231,
        "name": "Dark Yellow Wallpaper Seed",
        "rarity": 86
      },
      {
        "itemID": 8232,
        "name": "Dark Purple Wallpaper",
        "rarity": 99
      },
      {
        "itemID": 8233,
        "name": "Dark Purple Wallpaper Seed",
        "rarity": 99
      },
      {
        "itemID": 8234,
        "name": "Dark Orange Wallpaper",
        "rarity": 89
      },
      {
        "itemID": 8235,
        "name": "Dark Orange Wallpaper Seed",
        "rarity": 89
      },
      {
        "itemID": 8236,
        "name": "Dark Brown Wallpaper",
        "rarity": 84
      },
      {
        "itemID": 8237,
        "name": "Dark Brown Wallpaper Seed",
        "rarity": 84
      },
      {
        "itemID": 8238,
        "name": "Dark Grey Wallpaper",
        "rarity": 84
      },
      {
        "itemID": 8239,
        "name": "Dark Grey Wallpaper Seed",
        "rarity": 84
      },
      {
        "itemID": 8240,
        "name": "Water Dispenser",
        "rarity": 999
      },
      {
        "itemID": 8241,
        "name": "Water Dispenser Seed",
        "rarity": 999
      },
      {
        "itemID": 8242,
        "name": "Waiting Room Chair",
        "rarity": 999
      },
      {
        "itemID": 8243,
        "name": "Waiting Room Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 8244,
        "name": "Ceiling Fan",
        "rarity": 999
      },
      {
        "itemID": 8245,
        "name": "Ceiling Fan Seed",
        "rarity": 999
      },
      {
        "itemID": 8246,
        "name": "Starship Security Camera",
        "rarity": 999
      },
      {
        "itemID": 8247,
        "name": "Starship Security Camera Seed",
        "rarity": 999
      },
      {
        "itemID": 8248,
        "name": "Starship Mess Hall Table",
        "rarity": 130
      },
      {
        "itemID": 8249,
        "name": "Starship Mess Hall Table Seed",
        "rarity": 130
      },
      {
        "itemID": 8250,
        "name": "Starship Mess Hall Stool",
        "rarity": 86
      },
      {
        "itemID": 8251,
        "name": "Starship Mess Hall Stool Seed",
        "rarity": 86
      },
      {
        "itemID": 8252,
        "name": "Sea Urchin",
        "rarity": 999
      },
      {
        "itemID": 8253,
        "name": "Sea Urchin Seed",
        "rarity": 999
      },
      {
        "itemID": 8254,
        "name": "Copper Block",
        "rarity": 999
      },
      {
        "itemID": 8255,
        "name": "Copper Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8256,
        "name": "Sea Lantern",
        "rarity": 999
      },
      {
        "itemID": 8257,
        "name": "Sea Lantern Seed",
        "rarity": 999
      },
      {
        "itemID": 8258,
        "name": "Bubble Block",
        "rarity": 999
      },
      {
        "itemID": 8259,
        "name": "Bubble Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8260,
        "name": "Manhole Cover",
        "rarity": 999
      },
      {
        "itemID": 8261,
        "name": "Manhole Cover Seed",
        "rarity": 999
      },
      {
        "itemID": 8262,
        "name": "Dark Castle Stone",
        "rarity": 999
      },
      {
        "itemID": 8263,
        "name": "Dark Castle Stone Seed",
        "rarity": 999
      },
      {
        "itemID": 8264,
        "name": "Dark Castle Stone Background",
        "rarity": 999
      },
      {
        "itemID": 8265,
        "name": "Dark Castle Stone Background Seed",
        "rarity": 999
      },
      {
        "itemID": 8266,
        "name": "Dark Castle Door",
        "rarity": 999
      },
      {
        "itemID": 8267,
        "name": "Dark Castle Door Seed",
        "rarity": 999
      },
      {
        "itemID": 8268,
        "name": "Dark Castle Turret",
        "rarity": 999
      },
      {
        "itemID": 8269,
        "name": "Dark Castle Turret Seed",
        "rarity": 999
      },
      {
        "itemID": 8270,
        "name": "Red Stuff",
        "rarity": 36
      },
      {
        "itemID": 8271,
        "name": "Red Stuff Seed",
        "rarity": 36
      },
      {
        "itemID": 8272,
        "name": "White Stuff",
        "rarity": 36
      },
      {
        "itemID": 8273,
        "name": "White Stuff Seed",
        "rarity": 36
      },
      {
        "itemID": 8274,
        "name": "Black Stuff",
        "rarity": 36
      },
      {
        "itemID": 8275,
        "name": "Black Stuff Seed",
        "rarity": 36
      },
      {
        "itemID": 8276,
        "name": "Heavy Chains",
        "rarity": 999
      },
      {
        "itemID": 8277,
        "name": "Heavy Chains Seed",
        "rarity": 999
      },
      {
        "itemID": 8278,
        "name": "Doggy Block",
        "rarity": 999
      },
      {
        "itemID": 8279,
        "name": "Doggy Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8280,
        "name": "Kitty Block",
        "rarity": 999
      },
      {
        "itemID": 8281,
        "name": "Kitty Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8282,
        "name": "Dumb Billboard",
        "rarity": 999
      },
      {
        "itemID": 8283,
        "name": "Dumb Billboard Seed",
        "rarity": 999
      },
      {
        "itemID": 8284,
        "name": "Thingamabob",
        "rarity": 999
      },
      {
        "itemID": 8285,
        "name": "Thingamabob Seed",
        "rarity": 999
      },
      {
        "itemID": 8286,
        "name": "Da Vinci Wings",
        "rarity": 999
      },
      {
        "itemID": 8287,
        "name": "Da Vinci Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8288,
        "name": "Genie's Lamp - Green",
        "rarity": 999
      },
      {
        "itemID": 8289,
        "name": "Genie's Lamp - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 8290,
        "name": "Genie's Lamp - Yellow",
        "rarity": 999
      },
      {
        "itemID": 8291,
        "name": "Genie's Lamp - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 8292,
        "name": "Genie's Lamp - Red",
        "rarity": 999
      },
      {
        "itemID": 8293,
        "name": "Genie's Lamp - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 8294,
        "name": "Genie's Lamp - Blue",
        "rarity": 999
      },
      {
        "itemID": 8295,
        "name": "Genie's Lamp - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8296,
        "name": "Spring Flinger Squirrel Mask",
        "rarity": 999
      },
      {
        "itemID": 8297,
        "name": "Spring Flinger Squirrel Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8298,
        "name": "Ultra Spring Flinger Squirrel Suit",
        "rarity": 999
      },
      {
        "itemID": 8299,
        "name": "Ultra Spring Flinger Squirrel Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 8300,
        "name": "Mud Puddle",
        "rarity": 999
      },
      {
        "itemID": 8301,
        "name": "Mud Puddle Seed",
        "rarity": 999
      },
      {
        "itemID": 8302,
        "name": "Steampunk Wings",
        "rarity": 999
      },
      {
        "itemID": 8303,
        "name": "Steampunk Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8304,
        "name": "Magic Magnet",
        "rarity": 999
      },
      {
        "itemID": 8305,
        "name": "Magic Magnet Seed",
        "rarity": 999
      },
      {
        "itemID": 8306,
        "name": "Legendary Comet Hair",
        "rarity": 999
      },
      {
        "itemID": 8307,
        "name": "Legendary Comet Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 8308,
        "name": "Reg4shi's Archangel Wings",
        "rarity": 999
      },
      {
        "itemID": 8309,
        "name": "Reg4shi's Archangel Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8310,
        "name": "Coati Scarf",
        "rarity": 999
      },
      {
        "itemID": 8311,
        "name": "Coati Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 8312,
        "name": "Fiesta Coati Scarf",
        "rarity": 999
      },
      {
        "itemID": 8313,
        "name": "Fiesta Coati Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 8314,
        "name": "Riding Llama",
        "rarity": 999
      },
      {
        "itemID": 8315,
        "name": "Riding Llama Seed",
        "rarity": 999
      },
      {
        "itemID": 8316,
        "name": "Pueblock",
        "rarity": 999
      },
      {
        "itemID": 8317,
        "name": "Pueblock Seed",
        "rarity": 999
      },
      {
        "itemID": 8318,
        "name": "Pueblock Window",
        "rarity": 999
      },
      {
        "itemID": 8319,
        "name": "Pueblock Window Seed",
        "rarity": 999
      },
      {
        "itemID": 8320,
        "name": "Pueblock Door",
        "rarity": 999
      },
      {
        "itemID": 8321,
        "name": "Pueblock Door Seed",
        "rarity": 999
      },
      {
        "itemID": 8322,
        "name": "Pueblock Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 8323,
        "name": "Pueblock Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 8324,
        "name": "Colored Corn",
        "rarity": 999
      },
      {
        "itemID": 8325,
        "name": "Colored Corn Seed",
        "rarity": 999
      },
      {
        "itemID": 8326,
        "name": "Saguaro Cactus",
        "rarity": 999
      },
      {
        "itemID": 8327,
        "name": "Saguaro Cactus Seed",
        "rarity": 999
      },
      {
        "itemID": 8328,
        "name": "Scarfy-Scarf",
        "rarity": 999
      },
      {
        "itemID": 8329,
        "name": "Scarfy-Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 8330,
        "name": "Wriggling Maggots",
        "rarity": 999
      },
      {
        "itemID": 8331,
        "name": "Wriggling Maggots Seed",
        "rarity": 999
      },
      {
        "itemID": 8332,
        "name": "Bed Bugs",
        "rarity": 999
      },
      {
        "itemID": 8333,
        "name": "Bed Bugs Seed",
        "rarity": 999
      },
      {
        "itemID": 8334,
        "name": "Worm",
        "rarity": 999
      },
      {
        "itemID": 8335,
        "name": "Worm Seed",
        "rarity": 999
      },
      {
        "itemID": 8336,
        "name": "Brain Block",
        "rarity": 999
      },
      {
        "itemID": 8337,
        "name": "Brain Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8338,
        "name": "Insect Glue Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 8339,
        "name": "Insect Glue Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 8340,
        "name": "Hairy Arm",
        "rarity": 999
      },
      {
        "itemID": 8341,
        "name": "Hairy Arm Seed",
        "rarity": 999
      },
      {
        "itemID": 8342,
        "name": "Hairy Leg",
        "rarity": 999
      },
      {
        "itemID": 8343,
        "name": "Hairy Leg Seed",
        "rarity": 999
      },
      {
        "itemID": 8344,
        "name": "Pillar of the Dead",
        "rarity": 999
      },
      {
        "itemID": 8345,
        "name": "Pillar of the Dead Seed",
        "rarity": 999
      },
      {
        "itemID": 8346,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Eyed Wall",
        "rarity": 999
      },
      {
        "itemID": 8347,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Eyed Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 8348,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Eye",
        "rarity": 999
      },
      {
        "itemID": 8349,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Eye Seed",
        "rarity": 999
      },
      {
        "itemID": 8350,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Teeth",
        "rarity": 999
      },
      {
        "itemID": 8351,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Fleshy Teeth Seed",
        "rarity": 999
      },
      {
        "itemID": 8352,
        "name": "Hairy Legs",
        "rarity": 999
      },
      {
        "itemID": 8353,
        "name": "Hairy Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 8354,
        "name": "Eyes on Stalks",
        "rarity": 999
      },
      {
        "itemID": 8355,
        "name": "Eyes on Stalks Seed",
        "rarity": 999
      },
      {
        "itemID": 8356,
        "name": "Riding Poop",
        "rarity": 999
      },
      {
        "itemID": 8357,
        "name": "Riding Poop Seed",
        "rarity": 999
      },
      {
        "itemID": 8358,
        "name": "The Beast with a Thousand Eyes Mask",
        "rarity": 999
      },
      {
        "itemID": 8359,
        "name": "The Beast with a Thousand Eyes Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8360,
        "name": "Puggly",
        "rarity": 999
      },
      {
        "itemID": 8361,
        "name": "Puggly Seed",
        "rarity": 999
      },
      {
        "itemID": 8362,
        "name": "The Fly",
        "rarity": 999
      },
      {
        "itemID": 8363,
        "name": "The Fly Seed",
        "rarity": 999
      },
      {
        "itemID": 8364,
        "name": "Horrid Snotty Face",
        "rarity": 999
      },
      {
        "itemID": 8365,
        "name": "Horrid Snotty Face Seed",
        "rarity": 999
      },
      {
        "itemID": 8366,
        "name": "Extra Undead Arms",
        "rarity": 999
      },
      {
        "itemID": 8367,
        "name": "Extra Undead Arms Seed",
        "rarity": 999
      },
      {
        "itemID": 8368,
        "name": "Riding 'roach",
        "rarity": 999
      },
      {
        "itemID": 8369,
        "name": "Riding 'roach Seed",
        "rarity": 999
      },
      {
        "itemID": 8370,
        "name": "Undead Slippers",
        "rarity": 999
      },
      {
        "itemID": 8371,
        "name": "Undead Slippers Seed",
        "rarity": 999
      },
      {
        "itemID": 8372,
        "name": "Giant Eye Head",
        "rarity": 999
      },
      {
        "itemID": 8373,
        "name": "Giant Eye Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8374,
        "name": "Bob The Gross Blob",
        "rarity": 999
      },
      {
        "itemID": 8375,
        "name": "Bob The Gross Blob Seed",
        "rarity": 999
      },
      {
        "itemID": 8376,
        "name": "Fatberg Block",
        "rarity": 999
      },
      {
        "itemID": 8377,
        "name": "Fatberg Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8378,
        "name": "Flaming Pepper Gross Bean",
        "rarity": 999
      },
      {
        "itemID": 8379,
        "name": "Flaming Pepper Gross Bean Seed",
        "rarity": 999
      },
      {
        "itemID": 8380,
        "name": "Rotten Egg Gross Bean",
        "rarity": 999
      },
      {
        "itemID": 8381,
        "name": "Rotten Egg Gross Bean Seed",
        "rarity": 999
      },
      {
        "itemID": 8382,
        "name": "Dirt Gross Bean",
        "rarity": 999
      },
      {
        "itemID": 8383,
        "name": "Dirt Gross Bean Seed",
        "rarity": 999
      },
      {
        "itemID": 8384,
        "name": "Booger Gross Bean",
        "rarity": 999
      },
      {
        "itemID": 8385,
        "name": "Booger Gross Bean Seed",
        "rarity": 999
      },
      {
        "itemID": 8386,
        "name": "Barf Gross Bean",
        "rarity": 999
      },
      {
        "itemID": 8387,
        "name": "Barf Gross Bean Seed",
        "rarity": 999
      },
      {
        "itemID": 8388,
        "name": "Disgusting Mess Block",
        "rarity": 999
      },
      {
        "itemID": 8389,
        "name": "Disgusting Mess Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8390,
        "name": "Strawberry Slime Block",
        "rarity": 999
      },
      {
        "itemID": 8391,
        "name": "Strawberry Slime Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8392,
        "name": "Rotting Sea Goo",
        "rarity": 57
      },
      {
        "itemID": 8393,
        "name": "Rotting Sea Goo Seed",
        "rarity": 57
      },
      {
        "itemID": 8394,
        "name": "Space Poop",
        "rarity": 57
      },
      {
        "itemID": 8395,
        "name": "Space Poop Seed",
        "rarity": 57
      },
      {
        "itemID": 8396,
        "name": "Burnt Slime",
        "rarity": 57
      },
      {
        "itemID": 8397,
        "name": "Burnt Slime Seed",
        "rarity": 57
      },
      {
        "itemID": 8398,
        "name": "Putrid Gas",
        "rarity": 57
      },
      {
        "itemID": 8399,
        "name": "Putrid Gas Seed",
        "rarity": 57
      },
      {
        "itemID": 8400,
        "name": "Festering Urchin & Poop Pie",
        "rarity": 999
      },
      {
        "itemID": 8401,
        "name": "Festering Urchin & Poop Pie Seed",
        "rarity": 999
      },
      {
        "itemID": 8402,
        "name": "Putrid Gas Filled Blood Maggot Crepes",
        "rarity": 999
      },
      {
        "itemID": 8403,
        "name": "Putrid Gas Filled Blood Maggot Crepes Seed",
        "rarity": 999
      },
      {
        "itemID": 8404,
        "name": "Alien Bloodied Brains Strudel",
        "rarity": 999
      },
      {
        "itemID": 8405,
        "name": "Alien Bloodied Brains Strudel Seed",
        "rarity": 999
      },
      {
        "itemID": 8406,
        "name": "Rotting Fish Guts Club Sandwich",
        "rarity": 999
      },
      {
        "itemID": 8407,
        "name": "Rotting Fish Guts Club Sandwich Seed",
        "rarity": 999
      },
      {
        "itemID": 8408,
        "name": "Festering Fish Guts Taco",
        "rarity": 999
      },
      {
        "itemID": 8409,
        "name": "Festering Fish Guts Taco Seed",
        "rarity": 999
      },
      {
        "itemID": 8410,
        "name": "Alien Brains Strudel",
        "rarity": 999
      },
      {
        "itemID": 8411,
        "name": "Alien Brains Strudel Seed",
        "rarity": 999
      },
      {
        "itemID": 8412,
        "name": "Maggot-Slathered Fish & Sticks",
        "rarity": 999
      },
      {
        "itemID": 8413,
        "name": "Maggot-Slathered Fish & Sticks Seed",
        "rarity": 999
      },
      {
        "itemID": 8414,
        "name": "Blood Filled Crepes",
        "rarity": 999
      },
      {
        "itemID": 8415,
        "name": "Blood Filled Crepes Seed",
        "rarity": 999
      },
      {
        "itemID": 8416,
        "name": "Growmoji Ill",
        "rarity": 999
      },
      {
        "itemID": 8417,
        "name": "Growmoji Ill Seed",
        "rarity": 999
      },
      {
        "itemID": 8418,
        "name": "Webbed Hand",
        "rarity": 999
      },
      {
        "itemID": 8419,
        "name": "Webbed Hand Seed",
        "rarity": 999
      },
      {
        "itemID": 8420,
        "name": "Blob of Goop",
        "rarity": 1
      },
      {
        "itemID": 8421,
        "name": "Blob of Goop Seed",
        "rarity": 1
      },
      {
        "itemID": 8422,
        "name": "Inflamed Nose",
        "rarity": 1
      },
      {
        "itemID": 8423,
        "name": "Inflamed Nose Seed",
        "rarity": 1
      },
      {
        "itemID": 8424,
        "name": "Dirt Grass Hair",
        "rarity": 1
      },
      {
        "itemID": 8425,
        "name": "Dirt Grass Hair Seed",
        "rarity": 1
      },
      {
        "itemID": 8426,
        "name": "Easter Crate",
        "rarity": 999
      },
      {
        "itemID": 8427,
        "name": "Easter Crate Seed",
        "rarity": 999
      },
      {
        "itemID": 8428,
        "name": "null_item8428",
        "rarity": 1
      },
      {
        "itemID": 8429,
        "name": "null_item8428 Seed",
        "rarity": 1
      },
      {
        "itemID": 8430,
        "name": "null_item8430",
        "rarity": 1
      },
      {
        "itemID": 8431,
        "name": "null_item8430 Seed",
        "rarity": 1
      },
      {
        "itemID": 8432,
        "name": "Galactic Destructor - Green",
        "rarity": 999
      },
      {
        "itemID": 8433,
        "name": "Galactic Destructor - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 8434,
        "name": "Galactic Destructor - Purple",
        "rarity": 999
      },
      {
        "itemID": 8435,
        "name": "Galactic Destructor - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 8436,
        "name": "Galactic Destructor - Red",
        "rarity": 999
      },
      {
        "itemID": 8437,
        "name": "Galactic Destructor - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 8438,
        "name": "Galactic Destructor - Blue",
        "rarity": 999
      },
      {
        "itemID": 8439,
        "name": "Galactic Destructor - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8440,
        "name": "null_item8440",
        "rarity": 1
      },
      {
        "itemID": 8441,
        "name": "null_item8440 Seed",
        "rarity": 1
      },
      {
        "itemID": 8442,
        "name": "Doctor's Blingin' Cross",
        "rarity": 999
      },
      {
        "itemID": 8443,
        "name": "Doctor's Blingin' Cross Seed",
        "rarity": 999
      },
      {
        "itemID": 8444,
        "name": "Doctor's Blingin' Cap",
        "rarity": 999
      },
      {
        "itemID": 8445,
        "name": "Doctor's Blingin' Cap Seed",
        "rarity": 999
      },
      {
        "itemID": 8446,
        "name": "Doctor's Blingin' Mask",
        "rarity": 999
      },
      {
        "itemID": 8447,
        "name": "Doctor's Blingin' Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8448,
        "name": "Doctor's Blingin' Top",
        "rarity": 999
      },
      {
        "itemID": 8449,
        "name": "Doctor's Blingin' Top Seed",
        "rarity": 999
      },
      {
        "itemID": 8450,
        "name": "Doctor's Blingin' Pants",
        "rarity": 999
      },
      {
        "itemID": 8451,
        "name": "Doctor's Blingin' Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 8452,
        "name": "Hands of the Void",
        "rarity": 999
      },
      {
        "itemID": 8453,
        "name": "Hands of the Void Seed",
        "rarity": 999
      },
      {
        "itemID": 8454,
        "name": "Feet of the Void",
        "rarity": 999
      },
      {
        "itemID": 8455,
        "name": "Feet of the Void Seed",
        "rarity": 999
      },
      {
        "itemID": 8456,
        "name": "Gut Buster",
        "rarity": 999
      },
      {
        "itemID": 8457,
        "name": "Gut Buster Seed",
        "rarity": 999
      },
      {
        "itemID": 8458,
        "name": "Stitchlips",
        "rarity": 999
      },
      {
        "itemID": 8459,
        "name": "Stitchlips Seed",
        "rarity": 999
      },
      {
        "itemID": 8460,
        "name": "Clockwork Fish",
        "rarity": 999
      },
      {
        "itemID": 8461,
        "name": "Clockwork Fish Seed",
        "rarity": 999
      },
      {
        "itemID": 8462,
        "name": "Clockwork Fish Leash",
        "rarity": 999
      },
      {
        "itemID": 8463,
        "name": "Clockwork Fish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 8464,
        "name": "Clockwork Eyes",
        "rarity": 999
      },
      {
        "itemID": 8465,
        "name": "Clockwork Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 8466,
        "name": "Mean Wolf Block",
        "rarity": 999
      },
      {
        "itemID": 8467,
        "name": "Mean Wolf Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8468,
        "name": "Howly Hat",
        "rarity": 999
      },
      {
        "itemID": 8469,
        "name": "Howly Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 8470,
        "name": "Ecto-Lock",
        "rarity": 999
      },
      {
        "itemID": 8471,
        "name": "Ecto-Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 8472,
        "name": "Steppin' Ghost",
        "rarity": 999
      },
      {
        "itemID": 8473,
        "name": "Steppin' Ghost Seed",
        "rarity": 999
      },
      {
        "itemID": 8474,
        "name": "Cupcake Hat",
        "rarity": 999
      },
      {
        "itemID": 8475,
        "name": "Cupcake Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 8476,
        "name": "Big Belly",
        "rarity": 999
      },
      {
        "itemID": 8477,
        "name": "Big Belly Seed",
        "rarity": 999
      },
      {
        "itemID": 8478,
        "name": "Punchy Fist",
        "rarity": 999
      },
      {
        "itemID": 8479,
        "name": "Punchy Fist Seed",
        "rarity": 999
      },
      {
        "itemID": 8480,
        "name": "Gem Hair",
        "rarity": 999
      },
      {
        "itemID": 8481,
        "name": "Gem Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 8482,
        "name": "Chicken Feet",
        "rarity": 999
      },
      {
        "itemID": 8483,
        "name": "Chicken Feet Seed",
        "rarity": 999
      },
      {
        "itemID": 8484,
        "name": "Terrifying Toothface",
        "rarity": 999
      },
      {
        "itemID": 8485,
        "name": "Terrifying Toothface Seed",
        "rarity": 999
      },
      {
        "itemID": 8486,
        "name": "Loving Halo",
        "rarity": 999
      },
      {
        "itemID": 8487,
        "name": "Loving Halo Seed",
        "rarity": 999
      },
      {
        "itemID": 8488,
        "name": "Chaos Corruption",
        "rarity": 999
      },
      {
        "itemID": 8489,
        "name": "Chaos Corruption Seed",
        "rarity": 999
      },
      {
        "itemID": 8490,
        "name": "Block o' Barf",
        "rarity": 999
      },
      {
        "itemID": 8491,
        "name": "Block o' Barf Seed",
        "rarity": 999
      },
      {
        "itemID": 8492,
        "name": "Wormtouch",
        "rarity": 999
      },
      {
        "itemID": 8493,
        "name": "Wormtouch Seed",
        "rarity": 999
      },
      {
        "itemID": 8494,
        "name": "Snakewolf",
        "rarity": 999
      },
      {
        "itemID": 8495,
        "name": "Snakewolf Seed",
        "rarity": 999
      },
      {
        "itemID": 8496,
        "name": "Ghostking's Glory",
        "rarity": 999
      },
      {
        "itemID": 8497,
        "name": "Ghostking's Glory Seed",
        "rarity": 999
      },
      {
        "itemID": 8498,
        "name": "The Fattenator",
        "rarity": 999
      },
      {
        "itemID": 8499,
        "name": "The Fattenator Seed",
        "rarity": 999
      },
      {
        "itemID": 8500,
        "name": "Med-A-Check",
        "rarity": 63
      },
      {
        "itemID": 8501,
        "name": "Med-A-Check Seed",
        "rarity": 63
      },
      {
        "itemID": 8502,
        "name": "Dummy Item for Surgical Maladies",
        "rarity": 999
      },
      {
        "itemID": 8503,
        "name": "Dummy Item for Surgical Maladies Seed",
        "rarity": 999
      },
      {
        "itemID": 8504,
        "name": "Legendary Clash Key - Series 2",
        "rarity": 999
      },
      {
        "itemID": 8505,
        "name": "Legendary Clash Key - Series 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 8506,
        "name": "Darkening Hood",
        "rarity": 999
      },
      {
        "itemID": 8507,
        "name": "Darkening Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 8508,
        "name": "Pineapple Checkpoint Totem",
        "rarity": 999
      },
      {
        "itemID": 8509,
        "name": "Pineapple Checkpoint Totem Seed",
        "rarity": 999
      },
      {
        "itemID": 8510,
        "name": "Grumpy Pet Pineapple",
        "rarity": 999
      },
      {
        "itemID": 8511,
        "name": "Grumpy Pet Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 8512,
        "name": "Slippery Pineapple Squishers",
        "rarity": 999
      },
      {
        "itemID": 8513,
        "name": "Slippery Pineapple Squishers Seed",
        "rarity": 999
      },
      {
        "itemID": 8514,
        "name": "Pineapple Skin Shirt",
        "rarity": 999
      },
      {
        "itemID": 8515,
        "name": "Pineapple Skin Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8516,
        "name": "Howling Pineapple Crown",
        "rarity": 999
      },
      {
        "itemID": 8517,
        "name": "Howling Pineapple Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 8518,
        "name": "Dangerous Pineapple Juice Backpack",
        "rarity": 999
      },
      {
        "itemID": 8519,
        "name": "Dangerous Pineapple Juice Backpack Seed",
        "rarity": 999
      },
      {
        "itemID": 8520,
        "name": "Dangerous Pineapple",
        "rarity": 999
      },
      {
        "itemID": 8521,
        "name": "Dangerous Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 8522,
        "name": "Super Pineapple Party Crate",
        "rarity": 999
      },
      {
        "itemID": 8523,
        "name": "Super Pineapple Party Crate Seed",
        "rarity": 999
      },
      {
        "itemID": 8524,
        "name": "Pinedelier",
        "rarity": 999
      },
      {
        "itemID": 8525,
        "name": "Pinedelier Seed",
        "rarity": 999
      },
      {
        "itemID": 8526,
        "name": "Looming Pineapple",
        "rarity": 999
      },
      {
        "itemID": 8527,
        "name": "Looming Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 8528,
        "name": "Prickly Pineapple",
        "rarity": 999
      },
      {
        "itemID": 8529,
        "name": "Prickly Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 8530,
        "name": "null_item8530",
        "rarity": 1
      },
      {
        "itemID": 8531,
        "name": "null_item8530 Seed",
        "rarity": 1
      },
      {
        "itemID": 8532,
        "name": "null_item8532",
        "rarity": 1
      },
      {
        "itemID": 8533,
        "name": "null_item8532 Seed",
        "rarity": 1
      },
      {
        "itemID": 8534,
        "name": "Vaccine Drop",
        "rarity": 999
      },
      {
        "itemID": 8535,
        "name": "Vaccine Drop Seed",
        "rarity": 999
      },
      {
        "itemID": 8536,
        "name": "UV Vaccine",
        "rarity": 999
      },
      {
        "itemID": 8537,
        "name": "UV Vaccine Seed",
        "rarity": 999
      },
      {
        "itemID": 8538,
        "name": "Vile Vial - Chaos Infection",
        "rarity": 999
      },
      {
        "itemID": 8539,
        "name": "Vile Vial - Chaos Infection Seed",
        "rarity": 999
      },
      {
        "itemID": 8540,
        "name": "Vile Vial - Moldy Guts",
        "rarity": 999
      },
      {
        "itemID": 8541,
        "name": "Vile Vial - Moldy Guts Seed",
        "rarity": 999
      },
      {
        "itemID": 8542,
        "name": "Vile Vial - Brainworms",
        "rarity": 999
      },
      {
        "itemID": 8543,
        "name": "Vile Vial - Brainworms Seed",
        "rarity": 999
      },
      {
        "itemID": 8544,
        "name": "Vile Vial - Lupus",
        "rarity": 999
      },
      {
        "itemID": 8545,
        "name": "Vile Vial - Lupus Seed",
        "rarity": 999
      },
      {
        "itemID": 8546,
        "name": "Vile Vial - Ecto-Bones",
        "rarity": 999
      },
      {
        "itemID": 8547,
        "name": "Vile Vial - Ecto-Bones Seed",
        "rarity": 999
      },
      {
        "itemID": 8548,
        "name": "Vile Vial - Fatty Liver",
        "rarity": 999
      },
      {
        "itemID": 8549,
        "name": "Vile Vial - Fatty Liver Seed",
        "rarity": 999
      },
      {
        "itemID": 8550,
        "name": "Doctor's Blingin' Booties",
        "rarity": 999
      },
      {
        "itemID": 8551,
        "name": "Doctor's Blingin' Booties Seed",
        "rarity": 999
      },
      {
        "itemID": 8552,
        "name": "Angel of Mercy's Wings",
        "rarity": 999
      },
      {
        "itemID": 8553,
        "name": "Angel of Mercy's Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8554,
        "name": "Caduceaxe",
        "rarity": 999
      },
      {
        "itemID": 8555,
        "name": "Caduceaxe Seed",
        "rarity": 999
      },
      {
        "itemID": 8556,
        "name": "SurgWorld Blast",
        "rarity": 999
      },
      {
        "itemID": 8557,
        "name": "SurgWorld Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 8558,
        "name": "Train-E",
        "rarity": 999
      },
      {
        "itemID": 8559,
        "name": "Train-E Seed",
        "rarity": 999
      },
      {
        "itemID": 8560,
        "name": "Surgical Block",
        "rarity": 1
      },
      {
        "itemID": 8561,
        "name": "Surgical Block Seed",
        "rarity": 1
      },
      {
        "itemID": 8562,
        "name": "Surgical Background",
        "rarity": 1
      },
      {
        "itemID": 8563,
        "name": "Surgical Background Seed",
        "rarity": 1
      },
      {
        "itemID": 8564,
        "name": "Surgical Waste",
        "rarity": 1
      },
      {
        "itemID": 8565,
        "name": "Surgical Waste Seed",
        "rarity": 1
      },
      {
        "itemID": 8566,
        "name": "Aggregate Concrete",
        "rarity": 1
      },
      {
        "itemID": 8567,
        "name": "Aggregate Concrete Seed",
        "rarity": 1
      },
      {
        "itemID": 8568,
        "name": "Rotten Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 8569,
        "name": "Rotten Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8570,
        "name": "Sourloaf Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 8571,
        "name": "Sourloaf Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8572,
        "name": "Dangerous Pineapple Block",
        "rarity": 999
      },
      {
        "itemID": 8573,
        "name": "Dangerous Pineapple Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8574,
        "name": "Dangerous Pineapple Fan Shirt",
        "rarity": 999
      },
      {
        "itemID": 8575,
        "name": "Dangerous Pineapple Fan Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8576,
        "name": "Nightking's Cape - Dark Red",
        "rarity": 999
      },
      {
        "itemID": 8577,
        "name": "Nightking's Cape - Dark Red Seed",
        "rarity": 999
      },
      {
        "itemID": 8578,
        "name": "Nightking's Cape - Dark Purple",
        "rarity": 999
      },
      {
        "itemID": 8579,
        "name": "Nightking's Cape - Dark Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 8580,
        "name": "Nightking's Cape - Black",
        "rarity": 999
      },
      {
        "itemID": 8581,
        "name": "Nightking's Cape - Black Seed",
        "rarity": 999
      },
      {
        "itemID": 8582,
        "name": "Nightking's Cape - Midnight Blue",
        "rarity": 999
      },
      {
        "itemID": 8583,
        "name": "Nightking's Cape - Midnight Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8584,
        "name": "Executioner's Axe",
        "rarity": 999
      },
      {
        "itemID": 8585,
        "name": "Executioner's Axe Seed",
        "rarity": 999
      },
      {
        "itemID": 8586,
        "name": "EzCookOven's Robotic Tentacles",
        "rarity": 999
      },
      {
        "itemID": 8587,
        "name": "EzCookOven's Robotic Tentacles Seed",
        "rarity": 999
      },
      {
        "itemID": 8588,
        "name": "Phoenix Hair",
        "rarity": 999
      },
      {
        "itemID": 8589,
        "name": "Phoenix Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 8590,
        "name": "Pet Toucan",
        "rarity": 999
      },
      {
        "itemID": 8591,
        "name": "Pet Toucan Seed",
        "rarity": 999
      },
      {
        "itemID": 8592,
        "name": "Polo Shirt - Blue",
        "rarity": 999
      },
      {
        "itemID": 8593,
        "name": "Polo Shirt - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8594,
        "name": "Polo Shirt - Pink",
        "rarity": 999
      },
      {
        "itemID": 8595,
        "name": "Polo Shirt - Pink Seed",
        "rarity": 999
      },
      {
        "itemID": 8596,
        "name": "Aloha Floral Shirt",
        "rarity": 999
      },
      {
        "itemID": 8597,
        "name": "Aloha Floral Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8598,
        "name": "Aloha Floral Blouse",
        "rarity": 999
      },
      {
        "itemID": 8599,
        "name": "Aloha Floral Blouse Seed",
        "rarity": 999
      },
      {
        "itemID": 8600,
        "name": "Chinos - Pastel Orange",
        "rarity": 999
      },
      {
        "itemID": 8601,
        "name": "Chinos - Pastel Orange Seed",
        "rarity": 999
      },
      {
        "itemID": 8602,
        "name": "Chinos - Pastel Blue",
        "rarity": 999
      },
      {
        "itemID": 8603,
        "name": "Chinos - Pastel Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 8604,
        "name": "Crab Claw & Shield",
        "rarity": 999
      },
      {
        "itemID": 8605,
        "name": "Crab Claw & Shield Seed",
        "rarity": 999
      },
      {
        "itemID": 8606,
        "name": "Dungeonist Crab Leash",
        "rarity": 999
      },
      {
        "itemID": 8607,
        "name": "Dungeonist Crab Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 8608,
        "name": "Riding Flamingo",
        "rarity": 999
      },
      {
        "itemID": 8609,
        "name": "Riding Flamingo Seed",
        "rarity": 999
      },
      {
        "itemID": 8610,
        "name": "Straw Fedora",
        "rarity": 999
      },
      {
        "itemID": 8611,
        "name": "Straw Fedora Seed",
        "rarity": 999
      },
      {
        "itemID": 8612,
        "name": "Floppy Straw Sun Hat",
        "rarity": 999
      },
      {
        "itemID": 8613,
        "name": "Floppy Straw Sun Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 8614,
        "name": "Pet Turtle",
        "rarity": 999
      },
      {
        "itemID": 8615,
        "name": "Pet Turtle Seed",
        "rarity": 999
      },
      {
        "itemID": 8616,
        "name": "Shark Suit",
        "rarity": 999
      },
      {
        "itemID": 8617,
        "name": "Shark Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 8618,
        "name": "Shark Head",
        "rarity": 999
      },
      {
        "itemID": 8619,
        "name": "Shark Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8620,
        "name": "Munnin's Unity Wings",
        "rarity": 999
      },
      {
        "itemID": 8621,
        "name": "Munnin's Unity Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8622,
        "name": "Bountiful Flowering Lattice",
        "rarity": 10
      },
      {
        "itemID": 8623,
        "name": "Bountiful Flowering Lattice Seed",
        "rarity": 10
      },
      {
        "itemID": 8624,
        "name": "Bountiful Flowering Lattice Roots",
        "rarity": 1
      },
      {
        "itemID": 8625,
        "name": "Bountiful Flowering Lattice Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8626,
        "name": "Bountiful Flowering Lattice Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8627,
        "name": "Bountiful Flowering Lattice Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8628,
        "name": "Bountiful Climbing Hydrangea Lattice",
        "rarity": 20
      },
      {
        "itemID": 8629,
        "name": "Bountiful Climbing Hydrangea Lattice Seed",
        "rarity": 20
      },
      {
        "itemID": 8630,
        "name": "Bountiful Climbing Hydrangea Lattice Roots",
        "rarity": 1
      },
      {
        "itemID": 8631,
        "name": "Bountiful Climbing Hydrangea Lattice Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8632,
        "name": "Bountiful Climbing Hydrangea Lattice Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8633,
        "name": "Bountiful Climbing Hydrangea Lattice Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8634,
        "name": "Bountiful Flowering Garland",
        "rarity": 31
      },
      {
        "itemID": 8635,
        "name": "Bountiful Flowering Garland Seed",
        "rarity": 31
      },
      {
        "itemID": 8636,
        "name": "Bountiful Flowering Garland Roots",
        "rarity": 1
      },
      {
        "itemID": 8637,
        "name": "Bountiful Flowering Garland Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8638,
        "name": "Bountiful Flowering Garland Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8639,
        "name": "Bountiful Flowering Garland Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8640,
        "name": "Bountiful Lattice Fence",
        "rarity": 47
      },
      {
        "itemID": 8641,
        "name": "Bountiful Lattice Fence Seed",
        "rarity": 47
      },
      {
        "itemID": 8642,
        "name": "Bountiful Lattice Fence Roots",
        "rarity": 1
      },
      {
        "itemID": 8643,
        "name": "Bountiful Lattice Fence Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8644,
        "name": "Bountiful Lattice Fence Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8645,
        "name": "Bountiful Lattice Fence Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8646,
        "name": "Bountiful Jungle Temple",
        "rarity": 12
      },
      {
        "itemID": 8647,
        "name": "Bountiful Jungle Temple Seed",
        "rarity": 12
      },
      {
        "itemID": 8648,
        "name": "Bountiful Jungle Temple Roots",
        "rarity": 1
      },
      {
        "itemID": 8649,
        "name": "Bountiful Jungle Temple Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8650,
        "name": "Bountiful Jungle Temple Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8651,
        "name": "Bountiful Jungle Temple Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8652,
        "name": "Bountiful Jungle Temple Background",
        "rarity": 22
      },
      {
        "itemID": 8653,
        "name": "Bountiful Jungle Temple Background Seed",
        "rarity": 22
      },
      {
        "itemID": 8654,
        "name": "Bountiful Jungle Temple Background Roots",
        "rarity": 1
      },
      {
        "itemID": 8655,
        "name": "Bountiful Jungle Temple Background Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8656,
        "name": "Bountiful Jungle Temple Background Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8657,
        "name": "Bountiful Jungle Temple Background Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8658,
        "name": "Bountiful Jungle Temple Door",
        "rarity": 32
      },
      {
        "itemID": 8659,
        "name": "Bountiful Jungle Temple Door Seed",
        "rarity": 32
      },
      {
        "itemID": 8660,
        "name": "Bountiful Jungle Temple Door Roots",
        "rarity": 1
      },
      {
        "itemID": 8661,
        "name": "Bountiful Jungle Temple Door Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8662,
        "name": "Bountiful Jungle Temple Door Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8663,
        "name": "Bountiful Jungle Temple Door Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8664,
        "name": "Bountiful Jungle Temple Pillar",
        "rarity": 55
      },
      {
        "itemID": 8665,
        "name": "Bountiful Jungle Temple Pillar Seed",
        "rarity": 55
      },
      {
        "itemID": 8666,
        "name": "Bountiful Jungle Temple Pillar Roots",
        "rarity": 1
      },
      {
        "itemID": 8667,
        "name": "Bountiful Jungle Temple Pillar Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8668,
        "name": "Bountiful Jungle Temple Pillar Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8669,
        "name": "Bountiful Jungle Temple Pillar Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8670,
        "name": "Bountiful Bamboo Background",
        "rarity": 15
      },
      {
        "itemID": 8671,
        "name": "Bountiful Bamboo Background Seed",
        "rarity": 15
      },
      {
        "itemID": 8672,
        "name": "Bountiful Bamboo Background Roots",
        "rarity": 1
      },
      {
        "itemID": 8673,
        "name": "Bountiful Bamboo Background Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8674,
        "name": "Bountiful Bamboo Background Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8675,
        "name": "Bountiful Bamboo Background Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8676,
        "name": "Bountiful Bamboo Platform",
        "rarity": 25
      },
      {
        "itemID": 8677,
        "name": "Bountiful Bamboo Platform Seed",
        "rarity": 25
      },
      {
        "itemID": 8678,
        "name": "Bountiful Bamboo Platform Roots",
        "rarity": 1
      },
      {
        "itemID": 8679,
        "name": "Bountiful Bamboo Platform Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8680,
        "name": "Bountiful Bamboo Platform Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8681,
        "name": "Bountiful Bamboo Platform Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8682,
        "name": "Bountiful Bamboo Ladder",
        "rarity": 42
      },
      {
        "itemID": 8683,
        "name": "Bountiful Bamboo Ladder Seed",
        "rarity": 42
      },
      {
        "itemID": 8684,
        "name": "Bountiful Bamboo Ladder Roots",
        "rarity": 1
      },
      {
        "itemID": 8685,
        "name": "Bountiful Bamboo Ladder Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8686,
        "name": "Bountiful Bamboo Ladder Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8687,
        "name": "Bountiful Bamboo Ladder Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8688,
        "name": "Bountiful Bamboo Spikes",
        "rarity": 58
      },
      {
        "itemID": 8689,
        "name": "Bountiful Bamboo Spikes Seed",
        "rarity": 58
      },
      {
        "itemID": 8690,
        "name": "Bountiful Bamboo Spikes Roots",
        "rarity": 1
      },
      {
        "itemID": 8691,
        "name": "Bountiful Bamboo Spikes Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8692,
        "name": "Bountiful Bamboo Spikes Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8693,
        "name": "Bountiful Bamboo Spikes Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8694,
        "name": "Bountiful White Doll's Eyes",
        "rarity": 19
      },
      {
        "itemID": 8695,
        "name": "Bountiful White Doll's Eyes Seed",
        "rarity": 19
      },
      {
        "itemID": 8696,
        "name": "Bountiful White Doll's Eyes Roots",
        "rarity": 1
      },
      {
        "itemID": 8697,
        "name": "Bountiful White Doll's Eyes Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8698,
        "name": "Bountiful White Doll's Eyes Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8699,
        "name": "Bountiful White Doll's Eyes Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8700,
        "name": "Bountiful Monkshood",
        "rarity": 30
      },
      {
        "itemID": 8701,
        "name": "Bountiful Monkshood Seed",
        "rarity": 30
      },
      {
        "itemID": 8702,
        "name": "Bountiful Monkshood Roots",
        "rarity": 1
      },
      {
        "itemID": 8703,
        "name": "Bountiful Monkshood Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8704,
        "name": "Bountiful Monkshood Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8705,
        "name": "Bountiful Monkshood Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8706,
        "name": "Bountiful Corpse Flower",
        "rarity": 42
      },
      {
        "itemID": 8707,
        "name": "Bountiful Corpse Flower Seed",
        "rarity": 42
      },
      {
        "itemID": 8708,
        "name": "Bountiful Corpse Flower Roots",
        "rarity": 1
      },
      {
        "itemID": 8709,
        "name": "Bountiful Corpse Flower Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8710,
        "name": "Bountiful Corpse Flower Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8711,
        "name": "Bountiful Corpse Flower Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8712,
        "name": "Bountiful Growtopian-Eating Looming Plant",
        "rarity": 68
      },
      {
        "itemID": 8713,
        "name": "Bountiful Growtopian-Eating Looming Plant Seed",
        "rarity": 68
      },
      {
        "itemID": 8714,
        "name": "Bountiful Growtopian-Eating Looming Plant Roots",
        "rarity": 1
      },
      {
        "itemID": 8715,
        "name": "Bountiful Growtopian-Eating Looming Plant Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8716,
        "name": "Bountiful Growtopian-Eating Looming Plant Mature Roots",
        "rarity": 1
      },
      {
        "itemID": 8717,
        "name": "Bountiful Growtopian-Eating Looming Plant Mature Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 8718,
        "name": "Porcelain Doll's Head",
        "rarity": 999
      },
      {
        "itemID": 8719,
        "name": "Porcelain Doll's Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8720,
        "name": "Bamboo Pipe",
        "rarity": 999
      },
      {
        "itemID": 8721,
        "name": "Bamboo Pipe Seed",
        "rarity": 999
      },
      {
        "itemID": 8722,
        "name": "Flower Headband",
        "rarity": 999
      },
      {
        "itemID": 8723,
        "name": "Flower Headband Seed",
        "rarity": 999
      },
      {
        "itemID": 8724,
        "name": "Lattice Dress",
        "rarity": 999
      },
      {
        "itemID": 8725,
        "name": "Lattice Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 8726,
        "name": "Serpent Headdress",
        "rarity": 999
      },
      {
        "itemID": 8727,
        "name": "Serpent Headdress Seed",
        "rarity": 999
      },
      {
        "itemID": 8728,
        "name": "Monk's Hood",
        "rarity": 999
      },
      {
        "itemID": 8729,
        "name": "Monk's Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 8730,
        "name": "Bamboo Armor",
        "rarity": 999
      },
      {
        "itemID": 8731,
        "name": "Bamboo Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 8732,
        "name": "Bamboo Sword",
        "rarity": 999
      },
      {
        "itemID": 8733,
        "name": "Bamboo Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 8734,
        "name": "Temple Robes",
        "rarity": 999
      },
      {
        "itemID": 8735,
        "name": "Temple Robes Seed",
        "rarity": 999
      },
      {
        "itemID": 8736,
        "name": "Obsidian Axe",
        "rarity": 999
      },
      {
        "itemID": 8737,
        "name": "Obsidian Axe Seed",
        "rarity": 999
      },
      {
        "itemID": 8738,
        "name": "Bountiful Blast",
        "rarity": 999
      },
      {
        "itemID": 8739,
        "name": "Bountiful Blast Seed",
        "rarity": 999
      },
      {
        "itemID": 8740,
        "name": "Bountiful Flowering Lattice Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8741,
        "name": "Bountiful Flowering Lattice Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8742,
        "name": "Bountiful Climbing Hydrangea Lattice Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8743,
        "name": "Bountiful Climbing Hydrangea Lattice Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8744,
        "name": "Bountiful Flowering Garland Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8745,
        "name": "Bountiful Flowering Garland Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8746,
        "name": "Bountiful Lattice Fence Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8747,
        "name": "Bountiful Lattice Fence Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8748,
        "name": "Bountiful Jungle Temple Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8749,
        "name": "Bountiful Jungle Temple Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8750,
        "name": "Bountiful Jungle Temple Background Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8751,
        "name": "Bountiful Jungle Temple Background Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8752,
        "name": "Bountiful Jungle Temple Door Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8753,
        "name": "Bountiful Jungle Temple Door Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8754,
        "name": "Bountiful Jungle Temple Pillar Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8755,
        "name": "Bountiful Jungle Temple Pillar Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8756,
        "name": "Bountiful Bamboo Background Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8757,
        "name": "Bountiful Bamboo Background Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8758,
        "name": "Bountiful Bamboo Platform Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8759,
        "name": "Bountiful Bamboo Platform Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8760,
        "name": "Bountiful Bamboo Ladder Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8761,
        "name": "Bountiful Bamboo Ladder Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8762,
        "name": "Bountiful Bamboo Spikes Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8763,
        "name": "Bountiful Bamboo Spikes Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8764,
        "name": "Bountiful White Doll's Eyes Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8765,
        "name": "Bountiful White Doll's Eyes Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8766,
        "name": "Bountiful Monkshood Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8767,
        "name": "Bountiful Monkshood Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8768,
        "name": "Bountiful Corpse Flower Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8769,
        "name": "Bountiful Corpse Flower Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8770,
        "name": "Bountiful Growtopian-Eating Looming Plant Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 8771,
        "name": "Bountiful Growtopian-Eating Looming Plant Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 8772,
        "name": "Fertile Soil Block",
        "rarity": 10
      },
      {
        "itemID": 8773,
        "name": "Fertile Soil Block Seed",
        "rarity": 10
      },
      {
        "itemID": 8774,
        "name": "Summer Clash Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 8775,
        "name": "Summer Clash Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 8776,
        "name": "Finale Claim 1",
        "rarity": 999
      },
      {
        "itemID": 8777,
        "name": "Finale Claim 1 Seed",
        "rarity": 999
      },
      {
        "itemID": 8778,
        "name": "Finale Claim 2",
        "rarity": 999
      },
      {
        "itemID": 8779,
        "name": "Finale Claim 2 Seed",
        "rarity": 999
      },
      {
        "itemID": 8780,
        "name": "Finale Claim 3",
        "rarity": 999
      },
      {
        "itemID": 8781,
        "name": "Finale Claim 3 Seed",
        "rarity": 999
      },
      {
        "itemID": 8782,
        "name": "Finale Claim 4",
        "rarity": 999
      },
      {
        "itemID": 8783,
        "name": "Finale Claim 4 Seed",
        "rarity": 999
      },
      {
        "itemID": 8784,
        "name": "Finale Claim 5",
        "rarity": 999
      },
      {
        "itemID": 8785,
        "name": "Finale Claim 5 Seed",
        "rarity": 999
      },
      {
        "itemID": 8786,
        "name": "Finale Claim 6",
        "rarity": 999
      },
      {
        "itemID": 8787,
        "name": "Finale Claim 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 8788,
        "name": "Finale Claim 7",
        "rarity": 999
      },
      {
        "itemID": 8789,
        "name": "Finale Claim 7 Seed",
        "rarity": 999
      },
      {
        "itemID": 8790,
        "name": "Finale Claim 8",
        "rarity": 999
      },
      {
        "itemID": 8791,
        "name": "Finale Claim 8 Seed",
        "rarity": 999
      },
      {
        "itemID": 8792,
        "name": "Finale Claim 9",
        "rarity": 999
      },
      {
        "itemID": 8793,
        "name": "Finale Claim 9 Seed",
        "rarity": 999
      },
      {
        "itemID": 8794,
        "name": "Mutated Virus",
        "rarity": 999
      },
      {
        "itemID": 8795,
        "name": "Mutated Virus Seed",
        "rarity": 999
      },
      {
        "itemID": 8796,
        "name": "Mutated Bones",
        "rarity": 999
      },
      {
        "itemID": 8797,
        "name": "Mutated Bones Seed",
        "rarity": 999
      },
      {
        "itemID": 8798,
        "name": "Neon Green Mutation Layer",
        "rarity": 999
      },
      {
        "itemID": 8799,
        "name": "Neon Green Mutation Layer Seed",
        "rarity": 999
      },
      {
        "itemID": 8800,
        "name": "Horizontacles",
        "rarity": 999
      },
      {
        "itemID": 8801,
        "name": "Horizontacles Seed",
        "rarity": 999
      },
      {
        "itemID": 8802,
        "name": "Vertentacles",
        "rarity": 999
      },
      {
        "itemID": 8803,
        "name": "Vertentacles Seed",
        "rarity": 999
      },
      {
        "itemID": 8804,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Eyed Wall",
        "rarity": 999
      },
      {
        "itemID": 8805,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Eyed Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 8806,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Eye",
        "rarity": 999
      },
      {
        "itemID": 8807,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Eye Seed",
        "rarity": 999
      },
      {
        "itemID": 8808,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Teeth",
        "rarity": 999
      },
      {
        "itemID": 8809,
        "name": "Googly-Woogly Glooberhellifreakilisticexpialigrossness Verdant Teeth Seed",
        "rarity": 999
      },
      {
        "itemID": 8810,
        "name": "Cute Bulb Mask",
        "rarity": 999
      },
      {
        "itemID": 8811,
        "name": "Cute Bulb Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8812,
        "name": "Riding Firefly",
        "rarity": 999
      },
      {
        "itemID": 8813,
        "name": "Riding Firefly Seed",
        "rarity": 999
      },
      {
        "itemID": 8814,
        "name": "Slithering Serpent Hair",
        "rarity": 999
      },
      {
        "itemID": 8815,
        "name": "Slithering Serpent Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 8816,
        "name": "Astro Shades - Red",
        "rarity": 999
      },
      {
        "itemID": 8817,
        "name": "Astro Shades - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 8818,
        "name": "Astro Shades - Orange",
        "rarity": 999
      },
      {
        "itemID": 8819,
        "name": "Astro Shades - Orange Seed",
        "rarity": 999
      },
      {
        "itemID": 8820,
        "name": "Astro Shades - Purple",
        "rarity": 999
      },
      {
        "itemID": 8821,
        "name": "Astro Shades - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 8822,
        "name": "Astro Shades - Green",
        "rarity": 999
      },
      {
        "itemID": 8823,
        "name": "Astro Shades - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 8824,
        "name": "Shining Block - Red",
        "rarity": 999
      },
      {
        "itemID": 8825,
        "name": "Shining Block - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 8826,
        "name": "Shining Block - Yellow",
        "rarity": 999
      },
      {
        "itemID": 8827,
        "name": "Shining Block - Yellow Seed",
        "rarity": 999
      },
      {
        "itemID": 8828,
        "name": "Shining Block - Purple",
        "rarity": 999
      },
      {
        "itemID": 8829,
        "name": "Shining Block - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 8830,
        "name": "Black Shoes",
        "rarity": 999
      },
      {
        "itemID": 8831,
        "name": "Black Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 8832,
        "name": "Growmoji Tongue Block",
        "rarity": 999
      },
      {
        "itemID": 8833,
        "name": "Growmoji Tongue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8834,
        "name": "TK69's Mystical Etherboard",
        "rarity": 999
      },
      {
        "itemID": 8835,
        "name": "TK69's Mystical Etherboard Seed",
        "rarity": 999
      },
      {
        "itemID": 8836,
        "name": "Weather Machine - Stargazing",
        "rarity": 999
      },
      {
        "itemID": 8837,
        "name": "Weather Machine - Stargazing Seed",
        "rarity": 999
      },
      {
        "itemID": 8838,
        "name": "Rainbow Scarf",
        "rarity": 999
      },
      {
        "itemID": 8839,
        "name": "Rainbow Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 8840,
        "name": "Black Cat Ears",
        "rarity": 999
      },
      {
        "itemID": 8841,
        "name": "Black Cat Ears Seed",
        "rarity": 999
      },
      {
        "itemID": 8842,
        "name": "Toucan's Bill",
        "rarity": 999
      },
      {
        "itemID": 8843,
        "name": "Toucan's Bill Seed",
        "rarity": 999
      },
      {
        "itemID": 8844,
        "name": "Chic White Dress",
        "rarity": 999
      },
      {
        "itemID": 8845,
        "name": "Chic White Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 8846,
        "name": "Lace A-Line Dress",
        "rarity": 999
      },
      {
        "itemID": 8847,
        "name": "Lace A-Line Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 8848,
        "name": "White Tuxedo",
        "rarity": 999
      },
      {
        "itemID": 8849,
        "name": "White Tuxedo Seed",
        "rarity": 999
      },
      {
        "itemID": 8850,
        "name": "Blue and Black Tuxedo",
        "rarity": 999
      },
      {
        "itemID": 8851,
        "name": "Blue and Black Tuxedo Seed",
        "rarity": 999
      },
      {
        "itemID": 8852,
        "name": "Samurai's Do Armor",
        "rarity": 999
      },
      {
        "itemID": 8853,
        "name": "Samurai's Do Armor Seed",
        "rarity": 999
      },
      {
        "itemID": 8854,
        "name": "Samurai's Kabuto",
        "rarity": 999
      },
      {
        "itemID": 8855,
        "name": "Samurai's Kabuto Seed",
        "rarity": 999
      },
      {
        "itemID": 8856,
        "name": "Samurai's Waraji",
        "rarity": 999
      },
      {
        "itemID": 8857,
        "name": "Samurai's Waraji Seed",
        "rarity": 999
      },
      {
        "itemID": 8858,
        "name": "Samurai's Suneate & Leggings",
        "rarity": 999
      },
      {
        "itemID": 8859,
        "name": "Samurai's Suneate & Leggings Seed",
        "rarity": 999
      },
      {
        "itemID": 8860,
        "name": "Valkyrie's Cuirass",
        "rarity": 999
      },
      {
        "itemID": 8861,
        "name": "Valkyrie's Cuirass Seed",
        "rarity": 999
      },
      {
        "itemID": 8862,
        "name": "Valkyrie's Wings",
        "rarity": 999
      },
      {
        "itemID": 8863,
        "name": "Valkyrie's Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8864,
        "name": "Valkyrie's Helm",
        "rarity": 999
      },
      {
        "itemID": 8865,
        "name": "Valkyrie's Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 8866,
        "name": "Valkyrie's Sandals",
        "rarity": 999
      },
      {
        "itemID": 8867,
        "name": "Valkyrie's Sandals Seed",
        "rarity": 999
      },
      {
        "itemID": 8868,
        "name": "Map of Loki",
        "rarity": 999
      },
      {
        "itemID": 8869,
        "name": "Map of Loki Seed",
        "rarity": 999
      },
      {
        "itemID": 8870,
        "name": "Boy's School Uniform Shirt",
        "rarity": 999
      },
      {
        "itemID": 8871,
        "name": "Boy's School Uniform Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8872,
        "name": "Boy's School Uniform Pants",
        "rarity": 999
      },
      {
        "itemID": 8873,
        "name": "Boy's School Uniform Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 8874,
        "name": "Girls's School Uniform Shirt",
        "rarity": 999
      },
      {
        "itemID": 8875,
        "name": "Girls's School Uniform Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8876,
        "name": "Girls's School Uniform Skirt",
        "rarity": 999
      },
      {
        "itemID": 8877,
        "name": "Girls's School Uniform Skirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8878,
        "name": "Safe Vault",
        "rarity": 999
      },
      {
        "itemID": 8879,
        "name": "Safe Vault Seed",
        "rarity": 999
      },
      {
        "itemID": 8880,
        "name": "Messy Braid",
        "rarity": 999
      },
      {
        "itemID": 8881,
        "name": "Messy Braid Seed",
        "rarity": 999
      },
      {
        "itemID": 8882,
        "name": "Messy Bun",
        "rarity": 999
      },
      {
        "itemID": 8883,
        "name": "Messy Bun Seed",
        "rarity": 999
      },
      {
        "itemID": 8884,
        "name": "Long Full Bangs",
        "rarity": 37
      },
      {
        "itemID": 8885,
        "name": "Long Full Bangs Seed",
        "rarity": 37
      },
      {
        "itemID": 8886,
        "name": "Hipster Beard",
        "rarity": 999
      },
      {
        "itemID": 8887,
        "name": "Hipster Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 8888,
        "name": "Man Bun",
        "rarity": 999
      },
      {
        "itemID": 8889,
        "name": "Man Bun Seed",
        "rarity": 999
      },
      {
        "itemID": 8890,
        "name": "Bed Head",
        "rarity": 999
      },
      {
        "itemID": 8891,
        "name": "Bed Head Seed",
        "rarity": 999
      },
      {
        "itemID": 8892,
        "name": "Raccoon Leash",
        "rarity": 999
      },
      {
        "itemID": 8893,
        "name": "Raccoon Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 8894,
        "name": "Panda Leash",
        "rarity": 999
      },
      {
        "itemID": 8895,
        "name": "Panda Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 8896,
        "name": "Weather Machine - Meteor Shower",
        "rarity": 145
      },
      {
        "itemID": 8897,
        "name": "Weather Machine - Meteor Shower Seed",
        "rarity": 145
      },
      {
        "itemID": 8898,
        "name": "Riding World Lock - Green Light",
        "rarity": 999
      },
      {
        "itemID": 8899,
        "name": "Riding World Lock - Green Light Seed",
        "rarity": 999
      },
      {
        "itemID": 8900,
        "name": "Riding World Lock - Purple Light",
        "rarity": 999
      },
      {
        "itemID": 8901,
        "name": "Riding World Lock - Purple Light Seed",
        "rarity": 999
      },
      {
        "itemID": 8902,
        "name": "Riding World Lock - White Light",
        "rarity": 999
      },
      {
        "itemID": 8903,
        "name": "Riding World Lock - White Light Seed",
        "rarity": 999
      },
      {
        "itemID": 8904,
        "name": "Riding World Lock - Yellow Light",
        "rarity": 999
      },
      {
        "itemID": 8905,
        "name": "Riding World Lock - Yellow Light Seed",
        "rarity": 999
      },
      {
        "itemID": 8906,
        "name": "Masquerade Ball Mask",
        "rarity": 999
      },
      {
        "itemID": 8907,
        "name": "Masquerade Ball Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8908,
        "name": "Tea Basket",
        "rarity": 999
      },
      {
        "itemID": 8909,
        "name": "Tea Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 8910,
        "name": "Leaf Blower",
        "rarity": 999
      },
      {
        "itemID": 8911,
        "name": "Leaf Blower Seed",
        "rarity": 999
      },
      {
        "itemID": 8912,
        "name": "Scarecrow Pet",
        "rarity": 999
      },
      {
        "itemID": 8913,
        "name": "Scarecrow Pet Seed",
        "rarity": 999
      },
      {
        "itemID": 8914,
        "name": "Mosquito King's Wings",
        "rarity": 999
      },
      {
        "itemID": 8915,
        "name": "Mosquito King's Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 8916,
        "name": "Ladakh Mask",
        "rarity": 999
      },
      {
        "itemID": 8917,
        "name": "Ladakh Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8918,
        "name": "Ladakh Shirt",
        "rarity": 999
      },
      {
        "itemID": 8919,
        "name": "Ladakh Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 8920,
        "name": "Ladakh Pants",
        "rarity": 999
      },
      {
        "itemID": 8921,
        "name": "Ladakh Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 8922,
        "name": "Ladakh Shoes",
        "rarity": 999
      },
      {
        "itemID": 8923,
        "name": "Ladakh Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 8924,
        "name": "Harvest Moon Charm",
        "rarity": 999
      },
      {
        "itemID": 8925,
        "name": "Harvest Moon Charm Seed",
        "rarity": 999
      },
      {
        "itemID": 8926,
        "name": "Chopping Wood Block",
        "rarity": 999
      },
      {
        "itemID": 8927,
        "name": "Chopping Wood Block Seed",
        "rarity": 999
      },
      {
        "itemID": 8928,
        "name": "Weeping Willow",
        "rarity": 52
      },
      {
        "itemID": 8929,
        "name": "Weeping Willow Seed",
        "rarity": 52
      },
      {
        "itemID": 8930,
        "name": "Weeping Willow Branch",
        "rarity": 20
      },
      {
        "itemID": 8931,
        "name": "Weeping Willow Branch Seed",
        "rarity": 20
      },
      {
        "itemID": 8932,
        "name": "Weeping Willow Foliage",
        "rarity": 20
      },
      {
        "itemID": 8933,
        "name": "Weeping Willow Foliage Seed",
        "rarity": 20
      },
      {
        "itemID": 8934,
        "name": "Weeping Willow Streamers",
        "rarity": 40
      },
      {
        "itemID": 8935,
        "name": "Weeping Willow Streamers Seed",
        "rarity": 40
      },
      {
        "itemID": 8936,
        "name": "Wood Chips",
        "rarity": 999
      },
      {
        "itemID": 8937,
        "name": "Wood Chips Seed",
        "rarity": 999
      },
      {
        "itemID": 8938,
        "name": "Woven Wood Bolt",
        "rarity": 999
      },
      {
        "itemID": 8939,
        "name": "Woven Wood Bolt Seed",
        "rarity": 999
      },
      {
        "itemID": 8940,
        "name": "Broken Tea Basket",
        "rarity": 999
      },
      {
        "itemID": 8941,
        "name": "Broken Tea Basket Seed",
        "rarity": 999
      },
      {
        "itemID": 8942,
        "name": "Dual Crescent Blade",
        "rarity": 999
      },
      {
        "itemID": 8943,
        "name": "Dual Crescent Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 8944,
        "name": "Sun Blade",
        "rarity": 999
      },
      {
        "itemID": 8945,
        "name": "Sun Blade Seed",
        "rarity": 999
      },
      {
        "itemID": 8946,
        "name": "Storm Breaker",
        "rarity": 999
      },
      {
        "itemID": 8947,
        "name": "Storm Breaker Seed",
        "rarity": 999
      },
      {
        "itemID": 8948,
        "name": "Speeder",
        "rarity": 999
      },
      {
        "itemID": 8949,
        "name": "Speeder Seed",
        "rarity": 999
      },
      {
        "itemID": 8950,
        "name": "Sniper Rifle",
        "rarity": 999
      },
      {
        "itemID": 8951,
        "name": "Sniper Rifle Seed",
        "rarity": 999
      },
      {
        "itemID": 8952,
        "name": "Monster Truck",
        "rarity": 110
      },
      {
        "itemID": 8953,
        "name": "Monster Truck Seed",
        "rarity": 110
      },
      {
        "itemID": 8954,
        "name": "Healing Tome",
        "rarity": 999
      },
      {
        "itemID": 8955,
        "name": "Healing Tome Seed",
        "rarity": 999
      },
      {
        "itemID": 8956,
        "name": "Ghost Mobile",
        "rarity": 999
      },
      {
        "itemID": 8957,
        "name": "Ghost Mobile Seed",
        "rarity": 999
      },
      {
        "itemID": 8958,
        "name": "Ghost Rider Bike",
        "rarity": 999
      },
      {
        "itemID": 8959,
        "name": "Ghost Rider Bike Seed",
        "rarity": 999
      },
      {
        "itemID": 8960,
        "name": "Spring-Loaded Fists",
        "rarity": 999
      },
      {
        "itemID": 8961,
        "name": "Spring-Loaded Fists Seed",
        "rarity": 999
      },
      {
        "itemID": 8962,
        "name": "Ring of Night",
        "rarity": 999
      },
      {
        "itemID": 8963,
        "name": "Ring of Night Seed",
        "rarity": 999
      },
      {
        "itemID": 8964,
        "name": "Fish Landing Platform",
        "rarity": 999
      },
      {
        "itemID": 8965,
        "name": "Fish Landing Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 8966,
        "name": "Fishing Stool",
        "rarity": 999
      },
      {
        "itemID": 8967,
        "name": "Fishing Stool Seed",
        "rarity": 999
      },
      {
        "itemID": 8968,
        "name": "Cooler Box",
        "rarity": 999
      },
      {
        "itemID": 8969,
        "name": "Cooler Box Seed",
        "rarity": 999
      },
      {
        "itemID": 8970,
        "name": "Bountiful Seed Pack",
        "rarity": 999
      },
      {
        "itemID": 8971,
        "name": "Bountiful Seed Pack Seed",
        "rarity": 999
      },
      {
        "itemID": 8972,
        "name": "Steampunk Goggles",
        "rarity": 196
      },
      {
        "itemID": 8973,
        "name": "Steampunk Goggles Seed",
        "rarity": 196
      },
      {
        "itemID": 8974,
        "name": "Colored Round Glasses",
        "rarity": 117
      },
      {
        "itemID": 8975,
        "name": "Colored Round Glasses Seed",
        "rarity": 117
      },
      {
        "itemID": 8976,
        "name": "Droid Pet",
        "rarity": 999
      },
      {
        "itemID": 8977,
        "name": "Droid Pet Seed",
        "rarity": 999
      },
      {
        "itemID": 8978,
        "name": "Ruined Bricks",
        "rarity": 21
      },
      {
        "itemID": 8979,
        "name": "Ruined Bricks Seed",
        "rarity": 21
      },
      {
        "itemID": 8980,
        "name": "Barbed Wire Barrier",
        "rarity": 999
      },
      {
        "itemID": 8981,
        "name": "Barbed Wire Barrier Seed",
        "rarity": 999
      },
      {
        "itemID": 8982,
        "name": "Sandbag Wall",
        "rarity": 999
      },
      {
        "itemID": 8983,
        "name": "Sandbag Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 8984,
        "name": "Regal Stairs",
        "rarity": 999
      },
      {
        "itemID": 8985,
        "name": "Regal Stairs Seed",
        "rarity": 999
      },
      {
        "itemID": 8986,
        "name": "Regal Bannister",
        "rarity": 999
      },
      {
        "itemID": 8987,
        "name": "Regal Bannister Seed",
        "rarity": 999
      },
      {
        "itemID": 8988,
        "name": "Mahogany Frame",
        "rarity": 999
      },
      {
        "itemID": 8989,
        "name": "Mahogany Frame Seed",
        "rarity": 999
      },
      {
        "itemID": 8990,
        "name": "Chimney",
        "rarity": 999
      },
      {
        "itemID": 8991,
        "name": "Chimney Seed",
        "rarity": 999
      },
      {
        "itemID": 8992,
        "name": "Grimstone Background",
        "rarity": 999
      },
      {
        "itemID": 8993,
        "name": "Grimstone Background Seed",
        "rarity": 999
      },
      {
        "itemID": 8994,
        "name": "Black Leather Couch",
        "rarity": 999
      },
      {
        "itemID": 8995,
        "name": "Black Leather Couch Seed",
        "rarity": 999
      },
      {
        "itemID": 8996,
        "name": "Anubis Mask",
        "rarity": 999
      },
      {
        "itemID": 8997,
        "name": "Anubis Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 8998,
        "name": "Anubis Seal",
        "rarity": 999
      },
      {
        "itemID": 8999,
        "name": "Anubis Seal Seed",
        "rarity": 999
      },
      {
        "itemID": 9000,
        "name": "Anubis Mail",
        "rarity": 999
      },
      {
        "itemID": 9001,
        "name": "Anubis Mail Seed",
        "rarity": 999
      },
      {
        "itemID": 9002,
        "name": "Anubis Greaves",
        "rarity": 999
      },
      {
        "itemID": 9003,
        "name": "Anubis Greaves Seed",
        "rarity": 999
      },
      {
        "itemID": 9004,
        "name": "Anubis Boots",
        "rarity": 999
      },
      {
        "itemID": 9005,
        "name": "Anubis Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 9006,
        "name": "Spirit of Anubis",
        "rarity": 999
      },
      {
        "itemID": 9007,
        "name": "Spirit of Anubis Seed",
        "rarity": 999
      },
      {
        "itemID": 9008,
        "name": "Cursed Spirit Pendant - Red",
        "rarity": 999
      },
      {
        "itemID": 9009,
        "name": "Cursed Spirit Pendant - Red Seed",
        "rarity": 999
      },
      {
        "itemID": 9010,
        "name": "Cursed Spirit Pendant - Green",
        "rarity": 999
      },
      {
        "itemID": 9011,
        "name": "Cursed Spirit Pendant - Green Seed",
        "rarity": 999
      },
      {
        "itemID": 9012,
        "name": "Cursed Spirit Pendant - Purple",
        "rarity": 999
      },
      {
        "itemID": 9013,
        "name": "Cursed Spirit Pendant - Purple Seed",
        "rarity": 999
      },
      {
        "itemID": 9014,
        "name": "Cursed Spirit Pendant - Blue",
        "rarity": 999
      },
      {
        "itemID": 9015,
        "name": "Cursed Spirit Pendant - Blue Seed",
        "rarity": 999
      },
      {
        "itemID": 9016,
        "name": "Superfly Hat",
        "rarity": 999
      },
      {
        "itemID": 9017,
        "name": "Superfly Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 9018,
        "name": "Dark Ticket",
        "rarity": 999
      },
      {
        "itemID": 9019,
        "name": "Dark Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 9020,
        "name": "Sacrificial Well",
        "rarity": 999
      },
      {
        "itemID": 9021,
        "name": "Sacrificial Well Seed",
        "rarity": 999
      },
      {
        "itemID": 9022,
        "name": "Ultimate Corruption Altar",
        "rarity": 999
      },
      {
        "itemID": 9023,
        "name": "Ultimate Corruption Altar Seed",
        "rarity": 999
      },
      {
        "itemID": 9024,
        "name": "Bone Fence",
        "rarity": 999
      },
      {
        "itemID": 9025,
        "name": "Bone Fence Seed",
        "rarity": 999
      },
      {
        "itemID": 9026,
        "name": "Bone Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 9027,
        "name": "Bone Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 9028,
        "name": "Bone Platform",
        "rarity": 999
      },
      {
        "itemID": 9029,
        "name": "Bone Platform Seed",
        "rarity": 999
      },
      {
        "itemID": 9030,
        "name": "Spooky Bunting",
        "rarity": 999
      },
      {
        "itemID": 9031,
        "name": "Spooky Bunting Seed",
        "rarity": 999
      },
      {
        "itemID": 9032,
        "name": "Scythe of the Underworld",
        "rarity": 999
      },
      {
        "itemID": 9033,
        "name": "Scythe of the Underworld Seed",
        "rarity": 999
      },
      {
        "itemID": 9034,
        "name": "Tarantula Legs",
        "rarity": 999
      },
      {
        "itemID": 9035,
        "name": "Tarantula Legs Seed",
        "rarity": 999
      },
      {
        "itemID": 9036,
        "name": "Horns of Growganoth",
        "rarity": 999
      },
      {
        "itemID": 9037,
        "name": "Horns of Growganoth Seed",
        "rarity": 999
      },
      {
        "itemID": 9038,
        "name": "Supernaturally Speedy Black High Heels",
        "rarity": 999
      },
      {
        "itemID": 9039,
        "name": "Supernaturally Speedy Black High Heels Seed",
        "rarity": 999
      },
      {
        "itemID": 9040,
        "name": "Spooky Bed",
        "rarity": 999
      },
      {
        "itemID": 9041,
        "name": "Spooky Bed Seed",
        "rarity": 999
      },
      {
        "itemID": 9042,
        "name": "Creepy Caged Doll",
        "rarity": 999
      },
      {
        "itemID": 9043,
        "name": "Creepy Caged Doll Seed",
        "rarity": 999
      },
      {
        "itemID": 9044,
        "name": "Demon Cow Cube",
        "rarity": 35
      },
      {
        "itemID": 9045,
        "name": "Demon Cow Cube Seed",
        "rarity": 35
      },
      {
        "itemID": 9046,
        "name": "Eldritch Flame Wall Torch",
        "rarity": 65
      },
      {
        "itemID": 9047,
        "name": "Eldritch Flame Wall Torch Seed",
        "rarity": 65
      },
      {
        "itemID": 9048,
        "name": "Dark Fairy Pendant",
        "rarity": 999
      },
      {
        "itemID": 9049,
        "name": "Dark Fairy Pendant Seed",
        "rarity": 999
      },
      {
        "itemID": 9050,
        "name": "Totally Harmless Doll Head",
        "rarity": 999
      },
      {
        "itemID": 9051,
        "name": "Totally Harmless Doll Head Seed",
        "rarity": 999
      },
      {
        "itemID": 9052,
        "name": "Totally Harmless Doll Shirt",
        "rarity": 999
      },
      {
        "itemID": 9053,
        "name": "Totally Harmless Doll Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 9054,
        "name": "Totally Harmless Doll Pants",
        "rarity": 999
      },
      {
        "itemID": 9055,
        "name": "Totally Harmless Doll Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 9056,
        "name": "Demon Night Stallion",
        "rarity": 999
      },
      {
        "itemID": 9057,
        "name": "Demon Night Stallion Seed",
        "rarity": 999
      },
      {
        "itemID": 9058,
        "name": "Cursed Katana",
        "rarity": 999
      },
      {
        "itemID": 9059,
        "name": "Cursed Katana Seed",
        "rarity": 999
      },
      {
        "itemID": 9060,
        "name": "Hilarious Honker",
        "rarity": 999
      },
      {
        "itemID": 9061,
        "name": "Hilarious Honker Seed",
        "rarity": 999
      },
      {
        "itemID": 9062,
        "name": "Chimera's Call",
        "rarity": 999
      },
      {
        "itemID": 9063,
        "name": "Chimera's Call Seed",
        "rarity": 999
      },
      {
        "itemID": 9064,
        "name": "Rainbow Crystal Cloak",
        "rarity": 999
      },
      {
        "itemID": 9065,
        "name": "Rainbow Crystal Cloak Seed",
        "rarity": 999
      },
      {
        "itemID": 9066,
        "name": "Claw Of Growganoth",
        "rarity": 999
      },
      {
        "itemID": 9067,
        "name": "Claw Of Growganoth Seed",
        "rarity": 999
      },
      {
        "itemID": 9068,
        "name": "Nano Nurse Bot",
        "rarity": 999
      },
      {
        "itemID": 9069,
        "name": "Nano Nurse Bot Seed",
        "rarity": 999
      },
      {
        "itemID": 9070,
        "name": "Battle Boots",
        "rarity": 999
      },
      {
        "itemID": 9071,
        "name": "Battle Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 9072,
        "name": "Alpha's Shawl",
        "rarity": 999
      },
      {
        "itemID": 9073,
        "name": "Alpha's Shawl Seed",
        "rarity": 999
      },
      {
        "itemID": 9074,
        "name": "Mega-Hooky Vest",
        "rarity": 999
      },
      {
        "itemID": 9075,
        "name": "Mega-Hooky Vest Seed",
        "rarity": 999
      },
      {
        "itemID": 9076,
        "name": "Superb Chef's Super Spatula",
        "rarity": 999
      },
      {
        "itemID": 9077,
        "name": "Superb Chef's Super Spatula Seed",
        "rarity": 999
      },
      {
        "itemID": 9078,
        "name": "Slippery Chemical Coat",
        "rarity": 999
      },
      {
        "itemID": 9079,
        "name": "Slippery Chemical Coat Seed",
        "rarity": 999
      },
      {
        "itemID": 9080,
        "name": "Uranium Chair",
        "rarity": 999
      },
      {
        "itemID": 9081,
        "name": "Uranium Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 9082,
        "name": "Rocket-Powered Warhammer",
        "rarity": 999
      },
      {
        "itemID": 9083,
        "name": "Rocket-Powered Warhammer Seed",
        "rarity": 999
      },
      {
        "itemID": 9084,
        "name": "Tainted Cheese",
        "rarity": 999
      },
      {
        "itemID": 9085,
        "name": "Tainted Cheese Seed",
        "rarity": 999
      },
      {
        "itemID": 9086,
        "name": "Friendship Dragon Claw",
        "rarity": 999
      },
      {
        "itemID": 9087,
        "name": "Friendship Dragon Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 9088,
        "name": "Spectral Mantle",
        "rarity": 999
      },
      {
        "itemID": 9089,
        "name": "Spectral Mantle Seed",
        "rarity": 999
      },
      {
        "itemID": 9090,
        "name": "Challenge Ledger",
        "rarity": 999
      },
      {
        "itemID": 9091,
        "name": "Challenge Ledger Seed",
        "rarity": 999
      },
      {
        "itemID": 9092,
        "name": "Captain's Log",
        "rarity": 999
      },
      {
        "itemID": 9093,
        "name": "Captain's Log Seed",
        "rarity": 999
      },
      {
        "itemID": 9094,
        "name": "Dark Doctor's Cloak",
        "rarity": 999
      },
      {
        "itemID": 9095,
        "name": "Dark Doctor's Cloak Seed",
        "rarity": 999
      },
      {
        "itemID": 9096,
        "name": "Loot Detector",
        "rarity": 999
      },
      {
        "itemID": 9097,
        "name": "Loot Detector Seed",
        "rarity": 999
      },
      {
        "itemID": 9098,
        "name": "Ghostking's Command",
        "rarity": 999
      },
      {
        "itemID": 9099,
        "name": "Ghostking's Command Seed",
        "rarity": 999
      },
      {
        "itemID": 9100,
        "name": "Guild Challenge Crown",
        "rarity": 999
      },
      {
        "itemID": 9101,
        "name": "Guild Challenge Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 9102,
        "name": "Cooking Recipe - Putrid Gas Filled Blood Maggot Crepes",
        "rarity": 999
      },
      {
        "itemID": 9103,
        "name": "Cooking Recipe - Putrid Gas Filled Blood Maggot Crepes Seed",
        "rarity": 999
      },
      {
        "itemID": 9104,
        "name": "Cooking Recipe - Alien Bloodied Brains Strudel",
        "rarity": 999
      },
      {
        "itemID": 9105,
        "name": "Cooking Recipe - Alien Bloodied Brains Strudel Seed",
        "rarity": 999
      },
      {
        "itemID": 9106,
        "name": "Cooking Recipe - Rotting Fish Guts Club Sandwich",
        "rarity": 999
      },
      {
        "itemID": 9107,
        "name": "Cooking Recipe - Rotting Fish Guts Club Sandwich Seed",
        "rarity": 999
      },
      {
        "itemID": 9108,
        "name": "Cooking Recipe - Festering Urchin & Poop Pie",
        "rarity": 999
      },
      {
        "itemID": 9109,
        "name": "Cooking Recipe - Festering Urchin & Poop Pie Seed",
        "rarity": 999
      },
      {
        "itemID": 9110,
        "name": "Dumb Tomb of Growganoth",
        "rarity": 999
      },
      {
        "itemID": 9111,
        "name": "Dumb Tomb of Growganoth Seed",
        "rarity": 999
      },
      {
        "itemID": 9112,
        "name": "Dumb Tomb of Growganoth Claimed",
        "rarity": 999
      },
      {
        "itemID": 9113,
        "name": "Dumb Tomb of Growganoth Claimed Seed",
        "rarity": 999
      },
      {
        "itemID": 9114,
        "name": "Nightmare Teeny Devil Wings",
        "rarity": 999
      },
      {
        "itemID": 9115,
        "name": "Nightmare Teeny Devil Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9116,
        "name": "Red Laser Scimitar",
        "rarity": 999
      },
      {
        "itemID": 9117,
        "name": "Red Laser Scimitar Seed",
        "rarity": 999
      },
      {
        "itemID": 9118,
        "name": "Green Laser Scimitar",
        "rarity": 999
      },
      {
        "itemID": 9119,
        "name": "Green Laser Scimitar Seed",
        "rarity": 999
      },
      {
        "itemID": 9120,
        "name": "Blue Laser Scimitar",
        "rarity": 999
      },
      {
        "itemID": 9121,
        "name": "Blue Laser Scimitar Seed",
        "rarity": 999
      },
      {
        "itemID": 9122,
        "name": "Purple Laser Scimitar",
        "rarity": 999
      },
      {
        "itemID": 9123,
        "name": "Purple Laser Scimitar Seed",
        "rarity": 999
      },
      {
        "itemID": 9124,
        "name": "Wolfy Tank Top",
        "rarity": 999
      },
      {
        "itemID": 9125,
        "name": "Wolfy Tank Top Seed",
        "rarity": 999
      },
      {
        "itemID": 9126,
        "name": "Dinner Bell",
        "rarity": 999
      },
      {
        "itemID": 9127,
        "name": "Dinner Bell Seed",
        "rarity": 999
      },
      {
        "itemID": 9128,
        "name": "Hay Chair",
        "rarity": 999
      },
      {
        "itemID": 9129,
        "name": "Hay Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 9130,
        "name": "Thanksgiving Frame",
        "rarity": 999
      },
      {
        "itemID": 9131,
        "name": "Thanksgiving Frame Seed",
        "rarity": 999
      },
      {
        "itemID": 9132,
        "name": "Turkey Hat",
        "rarity": 999
      },
      {
        "itemID": 9133,
        "name": "Turkey Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 9134,
        "name": "Riding Bell",
        "rarity": 999
      },
      {
        "itemID": 9135,
        "name": "Riding Bell Seed",
        "rarity": 999
      },
      {
        "itemID": 9136,
        "name": "Dueling Star Fighter - Rebel Raider",
        "rarity": 999
      },
      {
        "itemID": 9137,
        "name": "Dueling Star Fighter - Rebel Raider Seed",
        "rarity": 999
      },
      {
        "itemID": 9138,
        "name": "Dueling Star Fighter - Imperial Enforcer",
        "rarity": 999
      },
      {
        "itemID": 9139,
        "name": "Dueling Star Fighter - Imperial Enforcer Seed",
        "rarity": 999
      },
      {
        "itemID": 9140,
        "name": "Rebel Raider Droid",
        "rarity": 999
      },
      {
        "itemID": 9141,
        "name": "Rebel Raider Droid Seed",
        "rarity": 999
      },
      {
        "itemID": 9142,
        "name": "Imperial Enforcer Droid",
        "rarity": 999
      },
      {
        "itemID": 9143,
        "name": "Imperial Enforcer Droid Seed",
        "rarity": 999
      },
      {
        "itemID": 9144,
        "name": "Defiant Jester's Mask",
        "rarity": 999
      },
      {
        "itemID": 9145,
        "name": "Defiant Jester's Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 9146,
        "name": "null_item9146",
        "rarity": 1
      },
      {
        "itemID": 9147,
        "name": "null_item9146 Seed",
        "rarity": 1
      },
      {
        "itemID": 9148,
        "name": "null_item9148",
        "rarity": 1
      },
      {
        "itemID": 9149,
        "name": "null_item9148 Seed",
        "rarity": 1
      },
      {
        "itemID": 9150,
        "name": "null_item9150",
        "rarity": 1
      },
      {
        "itemID": 9151,
        "name": "null_item9150 Seed",
        "rarity": 1
      },
      {
        "itemID": 9152,
        "name": "null_item9152",
        "rarity": 1
      },
      {
        "itemID": 9153,
        "name": "null_item9152 Seed",
        "rarity": 1
      },
      {
        "itemID": 9154,
        "name": "null_item9154",
        "rarity": 1
      },
      {
        "itemID": 9155,
        "name": "null_item9154 Seed",
        "rarity": 1
      },
      {
        "itemID": 9156,
        "name": "null_item9156",
        "rarity": 1
      },
      {
        "itemID": 9157,
        "name": "null_item9156 Seed",
        "rarity": 1
      },
      {
        "itemID": 9158,
        "name": "null_item9158",
        "rarity": 1
      },
      {
        "itemID": 9159,
        "name": "null_item9158 Seed",
        "rarity": 1
      },
      {
        "itemID": 9160,
        "name": "null_item9160",
        "rarity": 1
      },
      {
        "itemID": 9161,
        "name": "null_item9160 Seed",
        "rarity": 1
      },
      {
        "itemID": 9162,
        "name": "null_item9162",
        "rarity": 1
      },
      {
        "itemID": 9163,
        "name": "null_item9162 Seed",
        "rarity": 1
      },
      {
        "itemID": 9164,
        "name": "null_item9164",
        "rarity": 1
      },
      {
        "itemID": 9165,
        "name": "null_item9164 Seed",
        "rarity": 1
      },
      {
        "itemID": 9166,
        "name": "null_item9166",
        "rarity": 1
      },
      {
        "itemID": 9167,
        "name": "null_item9166 Seed",
        "rarity": 1
      },
      {
        "itemID": 9168,
        "name": "null_item9168",
        "rarity": 1
      },
      {
        "itemID": 9169,
        "name": "null_item9168 Seed",
        "rarity": 1
      },
      {
        "itemID": 9170,
        "name": "Transmutabooth",
        "rarity": 999
      },
      {
        "itemID": 9171,
        "name": "Transmutabooth Seed",
        "rarity": 999
      },
      {
        "itemID": 9172,
        "name": "Armored WinterBot - Back",
        "rarity": 999
      },
      {
        "itemID": 9173,
        "name": "Armored WinterBot - Back Seed",
        "rarity": 999
      },
      {
        "itemID": 9174,
        "name": "Armored WinterBot - Feet",
        "rarity": 999
      },
      {
        "itemID": 9175,
        "name": "Armored WinterBot - Feet Seed",
        "rarity": 999
      },
      {
        "itemID": 9176,
        "name": "Armored WinterBot - Fists",
        "rarity": 999
      },
      {
        "itemID": 9177,
        "name": "Armored WinterBot - Fists Seed",
        "rarity": 999
      },
      {
        "itemID": 9178,
        "name": "Armored WinterBot - Mail",
        "rarity": 999
      },
      {
        "itemID": 9179,
        "name": "Armored WinterBot - Mail Seed",
        "rarity": 999
      },
      {
        "itemID": 9180,
        "name": "Armored WinterBot - Greaves",
        "rarity": 999
      },
      {
        "itemID": 9181,
        "name": "Armored WinterBot - Greaves Seed",
        "rarity": 999
      },
      {
        "itemID": 9182,
        "name": "Frosty Wings",
        "rarity": 999
      },
      {
        "itemID": 9183,
        "name": "Frosty Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9184,
        "name": "Riding Eagle Owl",
        "rarity": 999
      },
      {
        "itemID": 9185,
        "name": "Riding Eagle Owl Seed",
        "rarity": 999
      },
      {
        "itemID": 9186,
        "name": "Royal Winter Seal",
        "rarity": 999
      },
      {
        "itemID": 9187,
        "name": "Royal Winter Seal Seed",
        "rarity": 999
      },
      {
        "itemID": 9188,
        "name": "Elf Hoodie",
        "rarity": 999
      },
      {
        "itemID": 9189,
        "name": "Elf Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 9190,
        "name": "Cloak of Fire and Ice",
        "rarity": 999
      },
      {
        "itemID": 9191,
        "name": "Cloak of Fire and Ice Seed",
        "rarity": 999
      },
      {
        "itemID": 9192,
        "name": "Yeti Leash",
        "rarity": 999
      },
      {
        "itemID": 9193,
        "name": "Yeti Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 9194,
        "name": "Hammer Of Winter",
        "rarity": 999
      },
      {
        "itemID": 9195,
        "name": "Hammer Of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 9196,
        "name": "Ice Throne of Winter",
        "rarity": 999
      },
      {
        "itemID": 9197,
        "name": "Ice Throne of Winter Seed",
        "rarity": 999
      },
      {
        "itemID": 9198,
        "name": "Winterfest Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 9199,
        "name": "Winterfest Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 9200,
        "name": "Ice Sculptures",
        "rarity": 999
      },
      {
        "itemID": 9201,
        "name": "Ice Sculptures Seed",
        "rarity": 999
      },
      {
        "itemID": 9202,
        "name": "Snowtopian",
        "rarity": 999
      },
      {
        "itemID": 9203,
        "name": "Snowtopian Seed",
        "rarity": 999
      },
      {
        "itemID": 9204,
        "name": "Decorative Propane",
        "rarity": 999
      },
      {
        "itemID": 9205,
        "name": "Decorative Propane Seed",
        "rarity": 999
      },
      {
        "itemID": 9206,
        "name": "Tacky Holiday Hair",
        "rarity": 999
      },
      {
        "itemID": 9207,
        "name": "Tacky Holiday Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9208,
        "name": "Cute Riding Polar Bear",
        "rarity": 999
      },
      {
        "itemID": 9209,
        "name": "Cute Riding Polar Bear Seed",
        "rarity": 999
      },
      {
        "itemID": 9210,
        "name": "Winter Radiance Aura",
        "rarity": 999
      },
      {
        "itemID": 9211,
        "name": "Winter Radiance Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 9212,
        "name": "Ancestral Orb of Time : Level 6",
        "rarity": 999
      },
      {
        "itemID": 9213,
        "name": "Ancestral Orb of Time : Level 6 Seed",
        "rarity": 999
      },
      {
        "itemID": 9214,
        "name": "Legendary Clash Key & Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 9215,
        "name": "Legendary Clash Key & Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 9216,
        "name": "Winter Clash Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 9217,
        "name": "Winter Clash Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 9218,
        "name": "Legendary Clash Key & Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 9219,
        "name": "Legendary Clash Key & Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 9220,
        "name": "Spring Clash Finale Ticket",
        "rarity": 999
      },
      {
        "itemID": 9221,
        "name": "Spring Clash Finale Ticket Seed",
        "rarity": 999
      },
      {
        "itemID": 9222,
        "name": "Dumb Pass Icon",
        "rarity": 999
      },
      {
        "itemID": 9223,
        "name": "Dumb Pass Icon Seed",
        "rarity": 999
      },
      {
        "itemID": 9224,
        "name": "Winterfest Calendar - 2019",
        "rarity": 999
      },
      {
        "itemID": 9225,
        "name": "Winterfest Calendar - 2019 Seed",
        "rarity": 999
      },
      {
        "itemID": 9226,
        "name": "Used Winterfest Calendar - 2019",
        "rarity": 999
      },
      {
        "itemID": 9227,
        "name": "Used Winterfest Calendar - 2019 Seed",
        "rarity": 999
      },
      {
        "itemID": 9228,
        "name": "Dummy Item for VIP Effect",
        "rarity": 999
      },
      {
        "itemID": 9229,
        "name": "Dummy Item for VIP Effect Seed",
        "rarity": 999
      },
      {
        "itemID": 9230,
        "name": "Dummy Transmutation Icon",
        "rarity": 999
      },
      {
        "itemID": 9231,
        "name": "Dummy Transmutation Icon Seed",
        "rarity": 999
      },
      {
        "itemID": 9232,
        "name": "Dummy Transmutation Temp Icon",
        "rarity": 999
      },
      {
        "itemID": 9233,
        "name": "Dummy Transmutation Temp Icon Seed",
        "rarity": 999
      },
      {
        "itemID": 9234,
        "name": "Balloon Target",
        "rarity": 1
      },
      {
        "itemID": 9235,
        "name": "Balloon Target Seed",
        "rarity": 1
      },
      {
        "itemID": 9236,
        "name": "Ancient Shards",
        "rarity": 999
      },
      {
        "itemID": 9237,
        "name": "Ancient Shards Seed",
        "rarity": 999
      },
      {
        "itemID": 9238,
        "name": "Flower Pot",
        "rarity": 999
      },
      {
        "itemID": 9239,
        "name": "Flower Pot Seed",
        "rarity": 999
      },
      {
        "itemID": 9240,
        "name": "Coin: 7th Anniversary Block",
        "rarity": 999
      },
      {
        "itemID": 9241,
        "name": "Coin: 7th Anniversary Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9242,
        "name": "Rave Haze Light",
        "rarity": 999
      },
      {
        "itemID": 9243,
        "name": "Rave Haze Light Seed",
        "rarity": 999
      },
      {
        "itemID": 9244,
        "name": "Rave Hall Wall",
        "rarity": 999
      },
      {
        "itemID": 9245,
        "name": "Rave Hall Wall Seed",
        "rarity": 999
      },
      {
        "itemID": 9246,
        "name": "Rave Hall Floor",
        "rarity": 999
      },
      {
        "itemID": 9247,
        "name": "Rave Hall Floor Seed",
        "rarity": 999
      },
      {
        "itemID": 9248,
        "name": "Rave Stage",
        "rarity": 999
      },
      {
        "itemID": 9249,
        "name": "Rave Stage Seed",
        "rarity": 999
      },
      {
        "itemID": 9250,
        "name": "Superstar Shades",
        "rarity": 999
      },
      {
        "itemID": 9251,
        "name": "Superstar Shades Seed",
        "rarity": 999
      },
      {
        "itemID": 9252,
        "name": "Confetti Rocket Shoes",
        "rarity": 999
      },
      {
        "itemID": 9253,
        "name": "Confetti Rocket Shoes Seed",
        "rarity": 999
      },
      {
        "itemID": 9254,
        "name": "Euphoric Dragon",
        "rarity": 999
      },
      {
        "itemID": 9255,
        "name": "Euphoric Dragon Seed",
        "rarity": 999
      },
      {
        "itemID": 9256,
        "name": "Party Bubble Blaster",
        "rarity": 999
      },
      {
        "itemID": 9257,
        "name": "Party Bubble Blaster Seed",
        "rarity": 999
      },
      {
        "itemID": 9258,
        "name": "Raver Hoodie",
        "rarity": 999
      },
      {
        "itemID": 9259,
        "name": "Raver Hoodie Seed",
        "rarity": 999
      },
      {
        "itemID": 9260,
        "name": "Raver Pants",
        "rarity": 999
      },
      {
        "itemID": 9261,
        "name": "Raver Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 9262,
        "name": "Raver Hair",
        "rarity": 999
      },
      {
        "itemID": 9263,
        "name": "Raver Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9264,
        "name": "Anniversary Skyrocket",
        "rarity": 999
      },
      {
        "itemID": 9265,
        "name": "Anniversary Skyrocket Seed",
        "rarity": 999
      },
      {
        "itemID": 9266,
        "name": "1-Day Free Subscription Token",
        "rarity": 999
      },
      {
        "itemID": 9267,
        "name": "1-Day Free Subscription Token Seed",
        "rarity": 999
      },
      {
        "itemID": 9268,
        "name": "DigiVend Machine",
        "rarity": 999
      },
      {
        "itemID": 9269,
        "name": "DigiVend Machine Seed",
        "rarity": 999
      },
      {
        "itemID": 9270,
        "name": "Vending Hub - Checkout Counter",
        "rarity": 999
      },
      {
        "itemID": 9271,
        "name": "Vending Hub - Checkout Counter Seed",
        "rarity": 999
      },
      {
        "itemID": 9272,
        "name": "Draconic Claw",
        "rarity": 999
      },
      {
        "itemID": 9273,
        "name": "Draconic Claw Seed",
        "rarity": 999
      },
      {
        "itemID": 9274,
        "name": "Black Friday 2019 Cart - Bronze",
        "rarity": 999
      },
      {
        "itemID": 9275,
        "name": "Black Friday 2019 Cart - Bronze Seed",
        "rarity": 999
      },
      {
        "itemID": 9276,
        "name": "Black Friday 2019 Cart - Silver",
        "rarity": 999
      },
      {
        "itemID": 9277,
        "name": "Black Friday 2019 Cart - Silver Seed",
        "rarity": 999
      },
      {
        "itemID": 9278,
        "name": "Black Friday 2019 Cart - Gold",
        "rarity": 999
      },
      {
        "itemID": 9279,
        "name": "Black Friday 2019 Cart - Gold Seed",
        "rarity": 999
      },
      {
        "itemID": 9280,
        "name": "Jin Chan Leash",
        "rarity": 999
      },
      {
        "itemID": 9281,
        "name": "Jin Chan Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 9282,
        "name": "Huli Jing Scarf",
        "rarity": 999
      },
      {
        "itemID": 9283,
        "name": "Huli Jing Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 9284,
        "name": "Year of The Rat Statue",
        "rarity": 999
      },
      {
        "itemID": 9285,
        "name": "Year of The Rat Statue Seed",
        "rarity": 999
      },
      {
        "itemID": 9286,
        "name": "Lucky Fortune Cookie",
        "rarity": 45
      },
      {
        "itemID": 9287,
        "name": "Lucky Fortune Cookie Seed",
        "rarity": 45
      },
      {
        "itemID": 9288,
        "name": "Year of the Rat Lucky Token",
        "rarity": 1
      },
      {
        "itemID": 9289,
        "name": "Year of the Rat Lucky Token Seed",
        "rarity": 1
      },
      {
        "itemID": 9290,
        "name": "Red Coin Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 9291,
        "name": "Red Coin Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 9292,
        "name": "Year of the Rat Mask",
        "rarity": 999
      },
      {
        "itemID": 9293,
        "name": "Year of the Rat Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 9294,
        "name": "Emperor's Jacket",
        "rarity": 999
      },
      {
        "itemID": 9295,
        "name": "Emperor's Jacket Seed",
        "rarity": 999
      },
      {
        "itemID": 9296,
        "name": "Dummy Item for Checkout Counter Dialog",
        "rarity": 999
      },
      {
        "itemID": 9297,
        "name": "Dummy Item for Checkout Counter Dialog Seed",
        "rarity": 999
      },
      {
        "itemID": 9298,
        "name": "WOTD Trophy 2020",
        "rarity": 999
      },
      {
        "itemID": 9299,
        "name": "WOTD Trophy 2020 Seed",
        "rarity": 999
      },
      {
        "itemID": 9300,
        "name": "Euphoric Dragon Egg",
        "rarity": 999
      },
      {
        "itemID": 9301,
        "name": "Euphoric Dragon Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 9302,
        "name": "Hatching Euphoric Dragon Egg",
        "rarity": 999
      },
      {
        "itemID": 9303,
        "name": "Hatching Euphoric Dragon Egg Seed",
        "rarity": 999
      },
      {
        "itemID": 9304,
        "name": "Brutal Hand Fans",
        "rarity": 999
      },
      {
        "itemID": 9305,
        "name": "Brutal Hand Fans Seed",
        "rarity": 999
      },
      {
        "itemID": 9306,
        "name": "Lovewillow",
        "rarity": 30
      },
      {
        "itemID": 9307,
        "name": "Lovewillow Seed",
        "rarity": 30
      },
      {
        "itemID": 9308,
        "name": "Lovewillow's Lace",
        "rarity": 42
      },
      {
        "itemID": 9309,
        "name": "Lovewillow's Lace Seed",
        "rarity": 42
      },
      {
        "itemID": 9310,
        "name": "Surgical Love Mallet",
        "rarity": 83
      },
      {
        "itemID": 9311,
        "name": "Surgical Love Mallet Seed",
        "rarity": 83
      },
      {
        "itemID": 9312,
        "name": "Love Lips",
        "rarity": 999
      },
      {
        "itemID": 9313,
        "name": "Love Lips Seed",
        "rarity": 999
      },
      {
        "itemID": 9314,
        "name": "Charmer Smile",
        "rarity": 999
      },
      {
        "itemID": 9315,
        "name": "Charmer Smile Seed",
        "rarity": 999
      },
      {
        "itemID": 9316,
        "name": "Beefy Biceps",
        "rarity": 999
      },
      {
        "itemID": 9317,
        "name": "Beefy Biceps Seed",
        "rarity": 999
      },
      {
        "itemID": 9318,
        "name": "Snuggly Kitty Scarf",
        "rarity": 999
      },
      {
        "itemID": 9319,
        "name": "Snuggly Kitty Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 9320,
        "name": "Cloud Nine Cape",
        "rarity": 999
      },
      {
        "itemID": 9321,
        "name": "Cloud Nine Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 9322,
        "name": "Golden Sunset Cape",
        "rarity": 999
      },
      {
        "itemID": 9323,
        "name": "Golden Sunset Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 9324,
        "name": "Heartthrob Helm",
        "rarity": 999
      },
      {
        "itemID": 9325,
        "name": "Heartthrob Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 9326,
        "name": "Golden Heartthrob Helm",
        "rarity": 999
      },
      {
        "itemID": 9327,
        "name": "Golden Heartthrob Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 9328,
        "name": "Lovely Dinner Light",
        "rarity": 999
      },
      {
        "itemID": 9329,
        "name": "Lovely Dinner Light Seed",
        "rarity": 999
      },
      {
        "itemID": 9330,
        "name": "Romantic Bushes",
        "rarity": 12
      },
      {
        "itemID": 9331,
        "name": "Romantic Bushes Seed",
        "rarity": 12
      },
      {
        "itemID": 9332,
        "name": "Dating Dandy's Suit",
        "rarity": 999
      },
      {
        "itemID": 9333,
        "name": "Dating Dandy's Suit Seed",
        "rarity": 999
      },
      {
        "itemID": 9334,
        "name": "Dating Dandy's Hair",
        "rarity": 999
      },
      {
        "itemID": 9335,
        "name": "Dating Dandy's Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9336,
        "name": "Dating Vixen's Dress",
        "rarity": 999
      },
      {
        "itemID": 9337,
        "name": "Dating Vixen's Dress Seed",
        "rarity": 999
      },
      {
        "itemID": 9338,
        "name": "Dating Vixen's Hair",
        "rarity": 999
      },
      {
        "itemID": 9339,
        "name": "Dating Vixen's Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9340,
        "name": "Datemaster's Rose",
        "rarity": 999
      },
      {
        "itemID": 9341,
        "name": "Datemaster's Rose Seed",
        "rarity": 999
      },
      {
        "itemID": 9342,
        "name": "Datemaster's Bling",
        "rarity": 999
      },
      {
        "itemID": 9343,
        "name": "Datemaster's Bling Seed",
        "rarity": 999
      },
      {
        "itemID": 9344,
        "name": "Datemaster's Heart Locket",
        "rarity": 999
      },
      {
        "itemID": 9345,
        "name": "Datemaster's Heart Locket Seed",
        "rarity": 999
      },
      {
        "itemID": 9346,
        "name": "Angelic Counting Cloud",
        "rarity": 999
      },
      {
        "itemID": 9347,
        "name": "Angelic Counting Cloud Seed",
        "rarity": 999
      },
      {
        "itemID": 9348,
        "name": "Medusa's Crown",
        "rarity": 999
      },
      {
        "itemID": 9349,
        "name": "Medusa's Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 9350,
        "name": "Super Golden Booty Chest",
        "rarity": 999
      },
      {
        "itemID": 9351,
        "name": "Super Golden Booty Chest Seed",
        "rarity": 999
      },
      {
        "itemID": 9352,
        "name": "Pink Teeny Angel Wings",
        "rarity": 999
      },
      {
        "itemID": 9353,
        "name": "Pink Teeny Angel Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9354,
        "name": "Walking Cane",
        "rarity": 999
      },
      {
        "itemID": 9355,
        "name": "Walking Cane Seed",
        "rarity": 999
      },
      {
        "itemID": 9356,
        "name": "Magic Stones",
        "rarity": 51
      },
      {
        "itemID": 9357,
        "name": "Magic Stones Seed",
        "rarity": 51
      },
      {
        "itemID": 9358,
        "name": "Rune Carved Door",
        "rarity": 999
      },
      {
        "itemID": 9359,
        "name": "Rune Carved Door Seed",
        "rarity": 999
      },
      {
        "itemID": 9360,
        "name": "Armored Riding Troll",
        "rarity": 999
      },
      {
        "itemID": 9361,
        "name": "Armored Riding Troll Seed",
        "rarity": 999
      },
      {
        "itemID": 9362,
        "name": "Dwarven Beard",
        "rarity": 999
      },
      {
        "itemID": 9363,
        "name": "Dwarven Beard Seed",
        "rarity": 999
      },
      {
        "itemID": 9364,
        "name": "Dwarven Mining Helm",
        "rarity": 999
      },
      {
        "itemID": 9365,
        "name": "Dwarven Mining Helm Seed",
        "rarity": 999
      },
      {
        "itemID": 9366,
        "name": "Shield of Mining",
        "rarity": 999
      },
      {
        "itemID": 9367,
        "name": "Shield of Mining Seed",
        "rarity": 999
      },
      {
        "itemID": 9368,
        "name": "Mining Explosives",
        "rarity": 999
      },
      {
        "itemID": 9369,
        "name": "Mining Explosives Seed",
        "rarity": 999
      },
      {
        "itemID": 9370,
        "name": "Strange Eyes",
        "rarity": 999
      },
      {
        "itemID": 9371,
        "name": "Strange Eyes Seed",
        "rarity": 999
      },
      {
        "itemID": 9372,
        "name": "Mining Pauldrons",
        "rarity": 999
      },
      {
        "itemID": 9373,
        "name": "Mining Pauldrons Seed",
        "rarity": 999
      },
      {
        "itemID": 9374,
        "name": "Mining Chestplate",
        "rarity": 999
      },
      {
        "itemID": 9375,
        "name": "Mining Chestplate Seed",
        "rarity": 999
      },
      {
        "itemID": 9376,
        "name": "Mining Mech",
        "rarity": 999
      },
      {
        "itemID": 9377,
        "name": "Mining Mech Seed",
        "rarity": 999
      },
      {
        "itemID": 9378,
        "name": "Lightning Gauntlets",
        "rarity": 999
      },
      {
        "itemID": 9379,
        "name": "Lightning Gauntlets Seed",
        "rarity": 999
      },
      {
        "itemID": 9380,
        "name": "Magic Infused Stone",
        "rarity": 1
      },
      {
        "itemID": 9381,
        "name": "Magic Infused Stone Seed",
        "rarity": 1
      },
      {
        "itemID": 9382,
        "name": "Magic Infused Stone Background",
        "rarity": 1
      },
      {
        "itemID": 9383,
        "name": "Magic Infused Stone Background Seed",
        "rarity": 1
      },
      {
        "itemID": 9384,
        "name": "Magic Infused Vein",
        "rarity": 50
      },
      {
        "itemID": 9385,
        "name": "Magic Infused Vein Seed",
        "rarity": 50
      },
      {
        "itemID": 9386,
        "name": "Pure Magic Ore",
        "rarity": 100
      },
      {
        "itemID": 9387,
        "name": "Pure Magic Ore Seed",
        "rarity": 100
      },
      {
        "itemID": 9388,
        "name": "Dwarven Wall",
        "rarity": 24
      },
      {
        "itemID": 9389,
        "name": "Dwarven Wall Seed",
        "rarity": 24
      },
      {
        "itemID": 9390,
        "name": "Dwarven Background",
        "rarity": 41
      },
      {
        "itemID": 9391,
        "name": "Dwarven Background Seed",
        "rarity": 41
      },
      {
        "itemID": 9392,
        "name": "Dwarven Column",
        "rarity": 10
      },
      {
        "itemID": 9393,
        "name": "Dwarven Column Seed",
        "rarity": 10
      },
      {
        "itemID": 9394,
        "name": "Balrog Wings",
        "rarity": 999
      },
      {
        "itemID": 9395,
        "name": "Balrog Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9396,
        "name": "Balrog's Tail",
        "rarity": 999
      },
      {
        "itemID": 9397,
        "name": "Balrog's Tail Seed",
        "rarity": 999
      },
      {
        "itemID": 9398,
        "name": "Angelic Heart Cloud",
        "rarity": 999
      },
      {
        "itemID": 9399,
        "name": "Angelic Heart Cloud Seed",
        "rarity": 999
      },
      {
        "itemID": 9400,
        "name": "Magic Ore",
        "rarity": 999
      },
      {
        "itemID": 9401,
        "name": "Magic Ore Seed",
        "rarity": 999
      },
      {
        "itemID": 9402,
        "name": "Magic Ingot",
        "rarity": 999
      },
      {
        "itemID": 9403,
        "name": "Magic Ingot Seed",
        "rarity": 999
      },
      {
        "itemID": 9404,
        "name": "Magic Armor Plate",
        "rarity": 999
      },
      {
        "itemID": 9405,
        "name": "Magic Armor Plate Seed",
        "rarity": 999
      },
      {
        "itemID": 9406,
        "name": "Magic Armor Plate Design",
        "rarity": 999
      },
      {
        "itemID": 9407,
        "name": "Magic Armor Plate Design Seed",
        "rarity": 999
      },
      {
        "itemID": 9408,
        "name": "Galaxy Aura",
        "rarity": 999
      },
      {
        "itemID": 9409,
        "name": "Galaxy Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 9410,
        "name": "Radiant Doom Staff",
        "rarity": 999
      },
      {
        "itemID": 9411,
        "name": "Radiant Doom Staff Seed",
        "rarity": 999
      },
      {
        "itemID": 9412,
        "name": "Increase Backpack",
        "rarity": 999
      },
      {
        "itemID": 9413,
        "name": "Increase Backpack Seed",
        "rarity": 999
      },
      {
        "itemID": 9414,
        "name": "Shamrock Shades",
        "rarity": 999
      },
      {
        "itemID": 9415,
        "name": "Shamrock Shades Seed",
        "rarity": 999
      },
      {
        "itemID": 9416,
        "name": "Irish Top Hat",
        "rarity": 999
      },
      {
        "itemID": 9417,
        "name": "Irish Top Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 9418,
        "name": "Green Trenchcoat",
        "rarity": 999
      },
      {
        "itemID": 9419,
        "name": "Green Trenchcoat Seed",
        "rarity": 999
      },
      {
        "itemID": 9420,
        "name": "Slithering Slippers",
        "rarity": 999
      },
      {
        "itemID": 9421,
        "name": "Slithering Slippers Seed",
        "rarity": 999
      },
      {
        "itemID": 9422,
        "name": "Shamrock Wings",
        "rarity": 999
      },
      {
        "itemID": 9423,
        "name": "Shamrock Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9424,
        "name": "Giant Falling Shamrock",
        "rarity": 999
      },
      {
        "itemID": 9425,
        "name": "Giant Falling Shamrock Seed",
        "rarity": 999
      },
      {
        "itemID": 9426,
        "name": "Dala Horsie",
        "rarity": 999
      },
      {
        "itemID": 9427,
        "name": "Dala Horsie Seed",
        "rarity": 999
      },
      {
        "itemID": 9428,
        "name": "Money Aura",
        "rarity": 999
      },
      {
        "itemID": 9429,
        "name": "Money Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 9430,
        "name": "Pooka Hood",
        "rarity": 999
      },
      {
        "itemID": 9431,
        "name": "Pooka Hood Seed",
        "rarity": 999
      },
      {
        "itemID": 9432,
        "name": "King Cobra Chair",
        "rarity": 999
      },
      {
        "itemID": 9433,
        "name": "King Cobra Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 9434,
        "name": "Mobility Scooter",
        "rarity": 999
      },
      {
        "itemID": 9435,
        "name": "Mobility Scooter Seed",
        "rarity": 999
      },
      {
        "itemID": 9436,
        "name": "Dumb Glory",
        "rarity": 999
      },
      {
        "itemID": 9437,
        "name": "Dumb Glory Seed",
        "rarity": 999
      },
      {
        "itemID": 9438,
        "name": "Dumb Gem",
        "rarity": 999
      },
      {
        "itemID": 9439,
        "name": "Dumb Gem Seed",
        "rarity": 999
      },
      {
        "itemID": 9440,
        "name": "Basket Chair",
        "rarity": 999
      },
      {
        "itemID": 9441,
        "name": "Basket Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 9442,
        "name": "Chick Tricycle",
        "rarity": 999
      },
      {
        "itemID": 9443,
        "name": "Chick Tricycle Seed",
        "rarity": 999
      },
      {
        "itemID": 9444,
        "name": "Nest Hat",
        "rarity": 999
      },
      {
        "itemID": 9445,
        "name": "Nest Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 9446,
        "name": "Egg Champion Cape",
        "rarity": 999
      },
      {
        "itemID": 9447,
        "name": "Egg Champion Cape Seed",
        "rarity": 999
      },
      {
        "itemID": 9448,
        "name": "Egg Ammo Belt",
        "rarity": 999
      },
      {
        "itemID": 9449,
        "name": "Egg Ammo Belt Seed",
        "rarity": 999
      },
      {
        "itemID": 9450,
        "name": "Hot Cross Bun Launcher",
        "rarity": 999
      },
      {
        "itemID": 9451,
        "name": "Hot Cross Bun Launcher Seed",
        "rarity": 999
      },
      {
        "itemID": 9452,
        "name": "Loafers",
        "rarity": 999
      },
      {
        "itemID": 9453,
        "name": "Loafers Seed",
        "rarity": 999
      },
      {
        "itemID": 9454,
        "name": "Carrot on a Stick",
        "rarity": 999
      },
      {
        "itemID": 9455,
        "name": "Carrot on a Stick Seed",
        "rarity": 999
      },
      {
        "itemID": 9456,
        "name": "Chocolate Easter Bilby",
        "rarity": 999
      },
      {
        "itemID": 9457,
        "name": "Chocolate Easter Bilby Seed",
        "rarity": 999
      },
      {
        "itemID": 9458,
        "name": "Egg Wreath",
        "rarity": 999
      },
      {
        "itemID": 9459,
        "name": "Egg Wreath Seed",
        "rarity": 999
      },
      {
        "itemID": 9460,
        "name": "Easter Egg - Dark",
        "rarity": 999
      },
      {
        "itemID": 9461,
        "name": "Easter Egg - Dark Seed",
        "rarity": 999
      },
      {
        "itemID": 9462,
        "name": "Boastful Brawler Hair",
        "rarity": 999
      },
      {
        "itemID": 9463,
        "name": "Boastful Brawler Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9464,
        "name": "Powerful Ponytail Hair",
        "rarity": 999
      },
      {
        "itemID": 9465,
        "name": "Powerful Ponytail Hair Seed",
        "rarity": 999
      },
      {
        "itemID": 9466,
        "name": "GrowShow TV",
        "rarity": 999
      },
      {
        "itemID": 9467,
        "name": "GrowShow TV Seed",
        "rarity": 999
      },
      {
        "itemID": 9468,
        "name": "Cooking Recipe - Chocolate Easter Bilby",
        "rarity": 999
      },
      {
        "itemID": 9469,
        "name": "Cooking Recipe - Chocolate Easter Bilby Seed",
        "rarity": 999
      },
      {
        "itemID": 9470,
        "name": "Wacky Rocket Sled",
        "rarity": 999
      },
      {
        "itemID": 9471,
        "name": "Wacky Rocket Sled Seed",
        "rarity": 999
      },
      {
        "itemID": 9472,
        "name": "Dumb Mentor Title",
        "rarity": 999
      },
      {
        "itemID": 9473,
        "name": "Dumb Mentor Title Seed",
        "rarity": 999
      },
      {
        "itemID": 9474,
        "name": "Dumb Player Tribute",
        "rarity": 999
      },
      {
        "itemID": 9475,
        "name": "Dumb Player Tribute Seed",
        "rarity": 999
      },
      {
        "itemID": 9476,
        "name": "Dumb Meet the DEVS",
        "rarity": 999
      },
      {
        "itemID": 9477,
        "name": "Dumb Meet the DEVS Seed",
        "rarity": 999
      },
      {
        "itemID": 9478,
        "name": "Chilled Smile Mask",
        "rarity": 999
      },
      {
        "itemID": 9479,
        "name": "Chilled Smile Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 9480,
        "name": "Pastel Checkered Wallpaper",
        "rarity": 42
      },
      {
        "itemID": 9481,
        "name": "Pastel Checkered Wallpaper Seed",
        "rarity": 42
      },
      {
        "itemID": 9482,
        "name": "Pastel Bunny Block",
        "rarity": 36
      },
      {
        "itemID": 9483,
        "name": "Pastel Bunny Block Seed",
        "rarity": 36
      },
      {
        "itemID": 9484,
        "name": "Pastel Mondrian Block",
        "rarity": 8
      },
      {
        "itemID": 9485,
        "name": "Pastel Mondrian Block Seed",
        "rarity": 8
      },
      {
        "itemID": 9486,
        "name": "Pastel Bricks",
        "rarity": 4
      },
      {
        "itemID": 9487,
        "name": "Pastel Bricks Seed",
        "rarity": 4
      },
      {
        "itemID": 9488,
        "name": "null_item9488",
        "rarity": 1
      },
      {
        "itemID": 9489,
        "name": "null_item9488 Seed",
        "rarity": 1
      },
      {
        "itemID": 9490,
        "name": "null_item9490",
        "rarity": 1
      },
      {
        "itemID": 9491,
        "name": "null_item9490 Seed",
        "rarity": 1
      },
      {
        "itemID": 9492,
        "name": "null_item9492",
        "rarity": 1
      },
      {
        "itemID": 9493,
        "name": "null_item9492 Seed",
        "rarity": 1
      },
      {
        "itemID": 9494,
        "name": "null_item9494",
        "rarity": 1
      },
      {
        "itemID": 9495,
        "name": "null_item9494 Seed",
        "rarity": 1
      },
      {
        "itemID": 9496,
        "name": "null_item9496",
        "rarity": 1
      },
      {
        "itemID": 9497,
        "name": "null_item9496 Seed",
        "rarity": 1
      },
      {
        "itemID": 9498,
        "name": "null_item9498",
        "rarity": 1
      },
      {
        "itemID": 9499,
        "name": "null_item9498 Seed",
        "rarity": 1
      },
      {
        "itemID": 9500,
        "name": "null_item9500",
        "rarity": 1
      },
      {
        "itemID": 9501,
        "name": "null_item9500 Seed",
        "rarity": 1
      },
      {
        "itemID": 9502,
        "name": "null_item9502",
        "rarity": 1
      },
      {
        "itemID": 9503,
        "name": "null_item9502 Seed",
        "rarity": 1
      },
      {
        "itemID": 9504,
        "name": "null_item9504",
        "rarity": 1
      },
      {
        "itemID": 9505,
        "name": "null_item9504 Seed",
        "rarity": 1
      },
      {
        "itemID": 9506,
        "name": "null_item9506",
        "rarity": 1
      },
      {
        "itemID": 9507,
        "name": "null_item9506 Seed",
        "rarity": 1
      },
      {
        "itemID": 9508,
        "name": "null_item9508",
        "rarity": 1
      },
      {
        "itemID": 9509,
        "name": "null_item9508 Seed",
        "rarity": 1
      },
      {
        "itemID": 9510,
        "name": "null_item9510",
        "rarity": 1
      },
      {
        "itemID": 9511,
        "name": "null_item9510 Seed",
        "rarity": 1
      },
      {
        "itemID": 9512,
        "name": "null_item9512",
        "rarity": 1
      },
      {
        "itemID": 9513,
        "name": "null_item9512 Seed",
        "rarity": 1
      },
      {
        "itemID": 9514,
        "name": "null_item9514",
        "rarity": 1
      },
      {
        "itemID": 9515,
        "name": "null_item9514 Seed",
        "rarity": 1
      },
      {
        "itemID": 9516,
        "name": "null_item9516",
        "rarity": 1
      },
      {
        "itemID": 9517,
        "name": "null_item9516 Seed",
        "rarity": 1
      },
      {
        "itemID": 9518,
        "name": "null_item9518",
        "rarity": 1
      },
      {
        "itemID": 9519,
        "name": "null_item9518 Seed",
        "rarity": 1
      },
      {
        "itemID": 9520,
        "name": "null_item9520",
        "rarity": 1
      },
      {
        "itemID": 9521,
        "name": "null_item9520 Seed",
        "rarity": 1
      },
      {
        "itemID": 9522,
        "name": "null_item9522",
        "rarity": 1
      },
      {
        "itemID": 9523,
        "name": "null_item9522 Seed",
        "rarity": 1
      },
      {
        "itemID": 9524,
        "name": "null_item9524",
        "rarity": 1
      },
      {
        "itemID": 9525,
        "name": "null_item9524 Seed",
        "rarity": 1
      },
      {
        "itemID": 9526,
        "name": "null_item9526",
        "rarity": 1
      },
      {
        "itemID": 9527,
        "name": "null_item9526 Seed",
        "rarity": 1
      },
      {
        "itemID": 9528,
        "name": "null_item9528",
        "rarity": 1
      },
      {
        "itemID": 9529,
        "name": "null_item9528 Seed",
        "rarity": 1
      },
      {
        "itemID": 9530,
        "name": "null_item9530",
        "rarity": 1
      },
      {
        "itemID": 9531,
        "name": "null_item9530 Seed",
        "rarity": 1
      },
      {
        "itemID": 9532,
        "name": "null_item9532",
        "rarity": 1
      },
      {
        "itemID": 9533,
        "name": "null_item9532 Seed",
        "rarity": 1
      },
      {
        "itemID": 9534,
        "name": "null_item9534",
        "rarity": 1
      },
      {
        "itemID": 9535,
        "name": "null_item9534 Seed",
        "rarity": 1
      },
      {
        "itemID": 9536,
        "name": "null_item9536",
        "rarity": 1
      },
      {
        "itemID": 9537,
        "name": "null_item9536 Seed",
        "rarity": 1
      },
      {
        "itemID": 9538,
        "name": "null_item9538",
        "rarity": 1
      },
      {
        "itemID": 9539,
        "name": "null_item9538 Seed",
        "rarity": 1
      },
      {
        "itemID": 9540,
        "name": "null_item9540",
        "rarity": 1
      },
      {
        "itemID": 9541,
        "name": "null_item9540 Seed",
        "rarity": 1
      },
      {
        "itemID": 9542,
        "name": "null_item9542",
        "rarity": 1
      },
      {
        "itemID": 9543,
        "name": "null_item9542 Seed",
        "rarity": 1
      },
      {
        "itemID": 9544,
        "name": "null_item9544",
        "rarity": 1
      },
      {
        "itemID": 9545,
        "name": "null_item9544 Seed",
        "rarity": 1
      },
      {
        "itemID": 9546,
        "name": "null_item9546",
        "rarity": 1
      },
      {
        "itemID": 9547,
        "name": "null_item9546 Seed",
        "rarity": 1
      },
      {
        "itemID": 9548,
        "name": "null_item9548",
        "rarity": 1
      },
      {
        "itemID": 9549,
        "name": "null_item9548 Seed",
        "rarity": 1
      },
      {
        "itemID": 9550,
        "name": "null_item9550",
        "rarity": 1
      },
      {
        "itemID": 9551,
        "name": "null_item9550 Seed",
        "rarity": 1
      },
      {
        "itemID": 9552,
        "name": "null_item9552",
        "rarity": 1
      },
      {
        "itemID": 9553,
        "name": "null_item9552 Seed",
        "rarity": 1
      },
      {
        "itemID": 9554,
        "name": "null_item9554",
        "rarity": 1
      },
      {
        "itemID": 9555,
        "name": "null_item9554 Seed",
        "rarity": 1
      },
      {
        "itemID": 9556,
        "name": "null_item9556",
        "rarity": 1
      },
      {
        "itemID": 9557,
        "name": "null_item9556 Seed",
        "rarity": 1
      },
      {
        "itemID": 9558,
        "name": "null_item9558",
        "rarity": 1
      },
      {
        "itemID": 9559,
        "name": "null_item9558 Seed",
        "rarity": 1
      },
      {
        "itemID": 9560,
        "name": "null_item9560",
        "rarity": 1
      },
      {
        "itemID": 9561,
        "name": "null_item9560 Seed",
        "rarity": 1
      },
      {
        "itemID": 9562,
        "name": "null_item9562",
        "rarity": 1
      },
      {
        "itemID": 9563,
        "name": "null_item9562 Seed",
        "rarity": 1
      },
      {
        "itemID": 9564,
        "name": "null_item9564",
        "rarity": 1
      },
      {
        "itemID": 9565,
        "name": "null_item9564 Seed",
        "rarity": 1
      },
      {
        "itemID": 9566,
        "name": "null_item9566",
        "rarity": 1
      },
      {
        "itemID": 9567,
        "name": "null_item9566 Seed",
        "rarity": 1
      },
      {
        "itemID": 9568,
        "name": "null_item9568",
        "rarity": 1
      },
      {
        "itemID": 9569,
        "name": "null_item9568 Seed",
        "rarity": 1
      },
      {
        "itemID": 9570,
        "name": "null_item9570",
        "rarity": 1
      },
      {
        "itemID": 9571,
        "name": "null_item9570 Seed",
        "rarity": 1
      },
      {
        "itemID": 9572,
        "name": "null_item9572",
        "rarity": 1
      },
      {
        "itemID": 9573,
        "name": "null_item9572 Seed",
        "rarity": 1
      },
      {
        "itemID": 9574,
        "name": "null_item9574",
        "rarity": 1
      },
      {
        "itemID": 9575,
        "name": "null_item9574 Seed",
        "rarity": 1
      },
      {
        "itemID": 9576,
        "name": "null_item9576",
        "rarity": 1
      },
      {
        "itemID": 9577,
        "name": "null_item9576 Seed",
        "rarity": 1
      },
      {
        "itemID": 9578,
        "name": "null_item9578",
        "rarity": 1
      },
      {
        "itemID": 9579,
        "name": "null_item9578 Seed",
        "rarity": 1
      },
      {
        "itemID": 9580,
        "name": "null_item9580",
        "rarity": 1
      },
      {
        "itemID": 9581,
        "name": "null_item9580 Seed",
        "rarity": 1
      },
      {
        "itemID": 9582,
        "name": "null_item9582",
        "rarity": 1
      },
      {
        "itemID": 9583,
        "name": "null_item9582 Seed",
        "rarity": 1
      },
      {
        "itemID": 9584,
        "name": "null_item9584",
        "rarity": 1
      },
      {
        "itemID": 9585,
        "name": "null_item9584 Seed",
        "rarity": 1
      },
      {
        "itemID": 9586,
        "name": "null_item9586",
        "rarity": 1
      },
      {
        "itemID": 9587,
        "name": "null_item9586 Seed",
        "rarity": 1
      },
      {
        "itemID": 9588,
        "name": "null_item9588",
        "rarity": 1
      },
      {
        "itemID": 9589,
        "name": "null_item9588 Seed",
        "rarity": 1
      },
      {
        "itemID": 9590,
        "name": "null_item9590",
        "rarity": 1
      },
      {
        "itemID": 9591,
        "name": "null_item9590 Seed",
        "rarity": 1
      },
      {
        "itemID": 9592,
        "name": "null_item9592",
        "rarity": 1
      },
      {
        "itemID": 9593,
        "name": "null_item9592 Seed",
        "rarity": 1
      },
      {
        "itemID": 9594,
        "name": "null_item9594",
        "rarity": 1
      },
      {
        "itemID": 9595,
        "name": "null_item9594 Seed",
        "rarity": 1
      },
      {
        "itemID": 9596,
        "name": "null_item9596",
        "rarity": 1
      },
      {
        "itemID": 9597,
        "name": "null_item9596 Seed",
        "rarity": 1
      },
      {
        "itemID": 9598,
        "name": "null_item9598",
        "rarity": 1
      },
      {
        "itemID": 9599,
        "name": "null_item9598 Seed",
        "rarity": 1
      },
      {
        "itemID": 9600,
        "name": "null_item9600",
        "rarity": 1
      },
      {
        "itemID": 9601,
        "name": "null_item9600 Seed",
        "rarity": 1
      },
      {
        "itemID": 9602,
        "name": "null_item9602",
        "rarity": 1
      },
      {
        "itemID": 9603,
        "name": "null_item9602 Seed",
        "rarity": 1
      },
      {
        "itemID": 9604,
        "name": "null_item9604",
        "rarity": 1
      },
      {
        "itemID": 9605,
        "name": "null_item9604 Seed",
        "rarity": 1
      },
      {
        "itemID": 9606,
        "name": "Doomsday Warhammer",
        "rarity": 999
      },
      {
        "itemID": 9607,
        "name": "Doomsday Warhammer Seed",
        "rarity": 999
      },
      {
        "itemID": 9608,
        "name": "Chip-and-Dip",
        "rarity": 999
      },
      {
        "itemID": 9609,
        "name": "Chip-and-Dip Seed",
        "rarity": 999
      },
      {
        "itemID": 9610,
        "name": "Mexican Hot Sauce Rocket Pack",
        "rarity": 999
      },
      {
        "itemID": 9611,
        "name": "Mexican Hot Sauce Rocket Pack Seed",
        "rarity": 999
      },
      {
        "itemID": 9612,
        "name": "Mexican Pointy Boots",
        "rarity": 999
      },
      {
        "itemID": 9613,
        "name": "Mexican Pointy Boots Seed",
        "rarity": 999
      },
      {
        "itemID": 9614,
        "name": "Burrito Broncho Chair",
        "rarity": 999
      },
      {
        "itemID": 9615,
        "name": "Burrito Broncho Chair Seed",
        "rarity": 999
      },
      {
        "itemID": 9616,
        "name": "Block De Mayo Block",
        "rarity": 999
      },
      {
        "itemID": 9617,
        "name": "Block De Mayo Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9618,
        "name": "Bongo Drum",
        "rarity": 999
      },
      {
        "itemID": 9619,
        "name": "Bongo Drum Seed",
        "rarity": 999
      },
      {
        "itemID": 9620,
        "name": "Trumpet",
        "rarity": 999
      },
      {
        "itemID": 9621,
        "name": "Trumpet Seed",
        "rarity": 999
      },
      {
        "itemID": 9622,
        "name": "Llama Lights",
        "rarity": 999
      },
      {
        "itemID": 9623,
        "name": "Llama Lights Seed",
        "rarity": 999
      },
      {
        "itemID": 9624,
        "name": "Fiesta Block",
        "rarity": 999
      },
      {
        "itemID": 9625,
        "name": "Fiesta Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9626,
        "name": "Fiesta Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 9627,
        "name": "Fiesta Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 9628,
        "name": "Mariachi Bobble Head",
        "rarity": 999
      },
      {
        "itemID": 9629,
        "name": "Mariachi Bobble Head Seed",
        "rarity": 999
      },
      {
        "itemID": 9630,
        "name": "Mexican Spinning Top",
        "rarity": 999
      },
      {
        "itemID": 9631,
        "name": "Mexican Spinning Top Seed",
        "rarity": 999
      },
      {
        "itemID": 9632,
        "name": "Chichen-Itza Shirt",
        "rarity": 999
      },
      {
        "itemID": 9633,
        "name": "Chichen-Itza Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 9634,
        "name": "Chichen-Itza Hat",
        "rarity": 999
      },
      {
        "itemID": 9635,
        "name": "Chichen-Itza Hat Seed",
        "rarity": 999
      },
      {
        "itemID": 9636,
        "name": "null_item9636",
        "rarity": 1
      },
      {
        "itemID": 9637,
        "name": "null_item9636 Seed",
        "rarity": 1
      },
      {
        "itemID": 9638,
        "name": "null_item9638",
        "rarity": 1
      },
      {
        "itemID": 9639,
        "name": "null_item9638 Seed",
        "rarity": 1
      },
      {
        "itemID": 9640,
        "name": "My First World Lock",
        "rarity": 999
      },
      {
        "itemID": 9641,
        "name": "My First World Lock Seed",
        "rarity": 999
      },
      {
        "itemID": 9642,
        "name": "Rose Hairpin",
        "rarity": 999
      },
      {
        "itemID": 9643,
        "name": "Rose Hairpin Seed",
        "rarity": 999
      },
      {
        "itemID": 9644,
        "name": "Surgery Gatcha",
        "rarity": 999
      },
      {
        "itemID": 9645,
        "name": "Surgery Gatcha Seed",
        "rarity": 999
      },
      {
        "itemID": 9646,
        "name": "Locked and Loaded Gatcha",
        "rarity": 999
      },
      {
        "itemID": 9647,
        "name": "Locked and Loaded Gatcha Seed",
        "rarity": 999
      },
      {
        "itemID": 9648,
        "name": "Go Anywhere Surfboard",
        "rarity": 999
      },
      {
        "itemID": 9649,
        "name": "Go Anywhere Surfboard Seed",
        "rarity": 999
      },
      {
        "itemID": 9650,
        "name": "Pineapple Plough",
        "rarity": 999
      },
      {
        "itemID": 9651,
        "name": "Pineapple Plough Seed",
        "rarity": 999
      },
      {
        "itemID": 9652,
        "name": "Pineapple Robes",
        "rarity": 999
      },
      {
        "itemID": 9653,
        "name": "Pineapple Robes Seed",
        "rarity": 999
      },
      {
        "itemID": 9654,
        "name": "Pineapple Superhero",
        "rarity": 999
      },
      {
        "itemID": 9655,
        "name": "Pineapple Superhero Seed",
        "rarity": 999
      },
      {
        "itemID": 9656,
        "name": "Pineapple Coronet",
        "rarity": 999
      },
      {
        "itemID": 9657,
        "name": "Pineapple Coronet Seed",
        "rarity": 999
      },
      {
        "itemID": 9658,
        "name": "Stone Pineapple",
        "rarity": 999
      },
      {
        "itemID": 9659,
        "name": "Stone Pineapple Seed",
        "rarity": 999
      },
      {
        "itemID": 9660,
        "name": "Pineapple Headphones",
        "rarity": 999
      },
      {
        "itemID": 9661,
        "name": "Pineapple Headphones Seed",
        "rarity": 999
      },
      {
        "itemID": 9662,
        "name": "Pineapple Door",
        "rarity": 999
      },
      {
        "itemID": 9663,
        "name": "Pineapple Door Seed",
        "rarity": 999
      },
      {
        "itemID": 9664,
        "name": "Pineapple Pennant",
        "rarity": 999
      },
      {
        "itemID": 9665,
        "name": "Pineapple Pennant Seed",
        "rarity": 999
      },
      {
        "itemID": 9666,
        "name": "Pineapple Lamp",
        "rarity": 999
      },
      {
        "itemID": 9667,
        "name": "Pineapple Lamp Seed",
        "rarity": 999
      },
      {
        "itemID": 9668,
        "name": "Pineapple Wallpaper",
        "rarity": 999
      },
      {
        "itemID": 9669,
        "name": "Pineapple Wallpaper Seed",
        "rarity": 999
      },
      {
        "itemID": 9670,
        "name": "Pineapple Boardshorts",
        "rarity": 999
      },
      {
        "itemID": 9671,
        "name": "Pineapple Boardshorts Seed",
        "rarity": 999
      },
      {
        "itemID": 9672,
        "name": "Pineapple Trooper Helmet",
        "rarity": 999
      },
      {
        "itemID": 9673,
        "name": "Pineapple Trooper Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 9674,
        "name": "Mature Pineapple Roots",
        "rarity": 1
      },
      {
        "itemID": 9675,
        "name": "Mature Pineapple Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 9676,
        "name": "Mature Super Pineapple Roots",
        "rarity": 1
      },
      {
        "itemID": 9677,
        "name": "Mature Super Pineapple Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 9678,
        "name": "Mature Rotten Pineapple Roots",
        "rarity": 1
      },
      {
        "itemID": 9679,
        "name": "Mature Rotten Pineapple Roots Seed",
        "rarity": 1
      },
      {
        "itemID": 9680,
        "name": "Pineapple Gift Box",
        "rarity": 999
      },
      {
        "itemID": 9681,
        "name": "Pineapple Gift Box Seed",
        "rarity": 999
      },
      {
        "itemID": 9682,
        "name": "Pineapple Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 9683,
        "name": "Pineapple Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 9684,
        "name": "Super Pineapple Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 9685,
        "name": "Super Pineapple Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 9686,
        "name": "Dangerous Pineapple Root Cutting",
        "rarity": 999
      },
      {
        "itemID": 9687,
        "name": "Dangerous Pineapple Root Cutting Seed",
        "rarity": 999
      },
      {
        "itemID": 9688,
        "name": "Moon Lamp",
        "rarity": 999
      },
      {
        "itemID": 9689,
        "name": "Moon Lamp Seed",
        "rarity": 999
      },
      {
        "itemID": 9690,
        "name": "Crystalized Star Fragment Block",
        "rarity": 999
      },
      {
        "itemID": 9691,
        "name": "Crystalized Star Fragment Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9692,
        "name": "Exo Suit Helmet",
        "rarity": 999
      },
      {
        "itemID": 9693,
        "name": "Exo Suit Helmet Seed",
        "rarity": 999
      },
      {
        "itemID": 9694,
        "name": "Exo Suit Body",
        "rarity": 999
      },
      {
        "itemID": 9695,
        "name": "Exo Suit Body Seed",
        "rarity": 999
      },
      {
        "itemID": 9696,
        "name": "Exo Suit Pants",
        "rarity": 999
      },
      {
        "itemID": 9697,
        "name": "Exo Suit Pants Seed",
        "rarity": 999
      },
      {
        "itemID": 9698,
        "name": "Arm Blaster",
        "rarity": 999
      },
      {
        "itemID": 9699,
        "name": "Arm Blaster Seed",
        "rarity": 999
      },
      {
        "itemID": 9700,
        "name": "Decayed Statue Block",
        "rarity": 999
      },
      {
        "itemID": 9701,
        "name": "Decayed Statue Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9702,
        "name": "Escapee's Collar",
        "rarity": 999
      },
      {
        "itemID": 9703,
        "name": "Escapee's Collar Seed",
        "rarity": 999
      },
      {
        "itemID": 9704,
        "name": "Hikers Dressing Gown",
        "rarity": 999
      },
      {
        "itemID": 9705,
        "name": "Hikers Dressing Gown Seed",
        "rarity": 999
      },
      {
        "itemID": 9706,
        "name": "Space Opera Mask",
        "rarity": 999
      },
      {
        "itemID": 9707,
        "name": "Space Opera Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 9708,
        "name": "Space Junk Block",
        "rarity": 999
      },
      {
        "itemID": 9709,
        "name": "Space Junk Block Seed",
        "rarity": 999
      },
      {
        "itemID": 9710,
        "name": "Space Tattoo",
        "rarity": 999
      },
      {
        "itemID": 9711,
        "name": "Space Tattoo Seed",
        "rarity": 999
      },
      {
        "itemID": 9712,
        "name": "Crystal Aura",
        "rarity": 999
      },
      {
        "itemID": 9713,
        "name": "Crystal Aura Seed",
        "rarity": 999
      },
      {
        "itemID": 9714,
        "name": "My Pet Sputnik",
        "rarity": 999
      },
      {
        "itemID": 9715,
        "name": "My Pet Sputnik Seed",
        "rarity": 999
      },
      {
        "itemID": 9716,
        "name": "Crystal Infused Sword",
        "rarity": 999
      },
      {
        "itemID": 9717,
        "name": "Crystal Infused Sword Seed",
        "rarity": 999
      },
      {
        "itemID": 9718,
        "name": "Space Dirt",
        "rarity": 1
      },
      {
        "itemID": 9719,
        "name": "Space Dirt Seed",
        "rarity": 1
      },
      {
        "itemID": 9720,
        "name": "Space Junk Dirt",
        "rarity": 1
      },
      {
        "itemID": 9721,
        "name": "Space Junk Dirt Seed",
        "rarity": 1
      },
      {
        "itemID": 9722,
        "name": "Space Dirt Background",
        "rarity": 1
      },
      {
        "itemID": 9723,
        "name": "Space Dirt Background Seed",
        "rarity": 1
      },
      {
        "itemID": 9724,
        "name": "Space Junk Background",
        "rarity": 1
      },
      {
        "itemID": 9725,
        "name": "Space Junk Background Seed",
        "rarity": 1
      },
      {
        "itemID": 9726,
        "name": "null_item9726",
        "rarity": 1
      },
      {
        "itemID": 9727,
        "name": "null_item9726 Seed",
        "rarity": 1
      },
      {
        "itemID": 9728,
        "name": "Dark Watcher's Mask",
        "rarity": 999
      },
      {
        "itemID": 9729,
        "name": "Dark Watcher's Mask Seed",
        "rarity": 999
      },
      {
        "itemID": 9730,
        "name": "Phoenix Scarf",
        "rarity": 999
      },
      {
        "itemID": 9731,
        "name": "Phoenix Scarf Seed",
        "rarity": 999
      },
      {
        "itemID": 9732,
        "name": "Greg, The Octopus",
        "rarity": 999
      },
      {
        "itemID": 9733,
        "name": "Greg, The Octopus Seed",
        "rarity": 999
      },
      {
        "itemID": 9734,
        "name": "Starfish Leash",
        "rarity": 999
      },
      {
        "itemID": 9735,
        "name": "Starfish Leash Seed",
        "rarity": 999
      },
      {
        "itemID": 9736,
        "name": "Floatie Crown",
        "rarity": 999
      },
      {
        "itemID": 9737,
        "name": "Floatie Crown Seed",
        "rarity": 999
      },
      {
        "itemID": 9738,
        "name": "Staff of the Deep",
        "rarity": 999
      },
      {
        "itemID": 9739,
        "name": "Staff of the Deep Seed",
        "rarity": 999
      },
      {
        "itemID": 9740,
        "name": "Summer Checkpoint",
        "rarity": 999
      },
      {
        "itemID": 9741,
        "name": "Summer Checkpoint Seed",
        "rarity": 999
      },
      {
        "itemID": 9742,
        "name": "Flamingo Wings",
        "rarity": 999
      },
      {
        "itemID": 9743,
        "name": "Flamingo Wings Seed",
        "rarity": 999
      },
      {
        "itemID": 9744,
        "name": "Fruity Trousers",
        "rarity": 999
      },
      {
        "itemID": 9745,
        "name": "Fruity Trousers Seed",
        "rarity": 999
      },
      {
        "itemID": 9746,
        "name": "Clownfish Shirt",
        "rarity": 999
      },
      {
        "itemID": 9747,
        "name": "Clownfish Shirt Seed",
        "rarity": 999
      },
      {
        "itemID": 9748,
        "name": "Life Ring",
        "rarity": 999
      },
      {
        "itemID": 9749,
        "name": "Life Ring Seed",
        "rarity": 999
      },
      {
        "itemID": 9750,
        "name": "Friendly Coconut",
        "rarity": 999
      },
      {
        "itemID": 9751,
        "name": "Friendly Coconut Seed",
        "rarity": 999
      },
      {
        "itemID": 9752,
        "rarity": 999