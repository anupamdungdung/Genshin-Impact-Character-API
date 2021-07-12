const data = [
    {
        "id": 1,
        "name": "Albedo",
        "title":"Kreideprinz",
        "slug": "albedo",
        "description": "An alchemist based in Mondstadt, in the service of the Knights of Favonius.",
        "gender": "Male",
        "birthday": "September 13th",
        "rarity": 5,
        "vision": "Geo",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Albedo_Card.png"
    },
    {
        "id": 2,
        "name": "Amber",
        "title":"Gliding Champion",
        "slug": "amber",
        "description": "Always energetic and full of life, Ambers the best - albeit only - Outrider of the Knights of Favonius.",
        "gender": "Female",
        "birthday": "August 24th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Bow",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg"
    },
    {
        "id": 3,
        "name": "Barbara",
        "title":"Shining Idol",
        "slug": "barbara",
        "description": "The Deaconess of the Favonius Church and a shining starlet adored by all. Although the concept of a starlet is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.",
        "gender": "Female",
        "birthday": "July 5th",
        "rarity": 4,
        "vision": "Hydro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/9/93/Character_Barbara_Card.jpg"
    },
    {
        "id": 4,
        "name": "Beidou",
        "title":"Uncrowned Lord of the Ocean",
        "slug": "beidou",
        "description": "Beidou is the leader of the Crux an armed fleet based in Liyue Harbor. An armed fleet means exactly what it sounds like: a fleet of ships armed to the teeth.",
        "gender": "Female",
        "birthday": "February 14th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/8/84/Character_Beidou_Card.jpg"
    },
    {
        "id": 5,
        "name": "Bennett",
        "title":"Trial by Fire",
        "slug": "bennett",
        "description": "A righteous and good-natured adventurer from Mondstadt whos unfortunately extremely unlucky.",
        "gender": "Male",
        "birthday": "February 29th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Character_Bennett_Card.jpg"
    },
    {
        "id": 6,
        "name": "Chongyun",
        "title":"Frozen Ardor",
        "slug": "chongyun",
        "description": "A young exortcist from a family of exorcists. He does everything he can to suppress his pure positive energy.",
        "gender": "Male",
        "birthday": "September 7th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Character_Chongyun_Card.jpg"
    },
    {
        "id": 7,
        "name": "Diluc",
        "title":"The Dark Side of Dawn",
        "slug": "diluc",
        "description": "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
        "gender": "Male",
        "birthday": "April 30th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/45/Character_Diluc_Card.jpg"
    },
    {
        "id": 8,
        "name": "Diona",
        "title":"Kätzlein Cocktail",
        "slug": "diona",
        "description": "A young lady who has inherited trace amounts of non-human blood. She is the incredible popular bartender of the Cats Tail tavern.",
        "gender": "Female",
        "birthday": "January 18th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/0/08/Character_Diona_Card.png"
    },
    {
        "id": 9,
        "name": "Eula",
        "title":"Dance of the Shimmering Wave",
        "slug": "eula",
        "description": "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company.",
        "gender": "Female",
        "birthday": "October 25th",
        "rarity": 5,
        "vision": "Cryo",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png"
    },
    {
        "id": 10,
        "name": "Fischl",
        "title":"Prinzessin der Verurteilung",
        "slug": "fischl",
        "description": "A mysterious girl who calls herself Prinzessia der Verurteilung and travels with a night raven named Oz.",
        "gender": "Female",
        "birthday": "May 27th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/48/Character_Fischl_Card.jpg"
    },
    {
        "id": 11,
        "name": "Ganyu",
        "title":"Plenilune Gaze",
        "slug": "ganyu",
        "description": "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
        "gender": "Female",
        "birthday": "December 2nd",
        "rarity": 5,
        "vision": "Cryo",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Ganyu_Card.png"
    },
    {
        "id": 12,
        "name": "Hu Tao",
        "title":"Fragrance in Thaw",
        "slug": "hu tao",
        "description": "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
        "gender": "Female",
        "birthday": "Julyy 15th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg"
    },
    {
        "id": 13,
        "name": "Jean",
        "title":"Dandelion Knight",
        "slug": "jean",
        "description": "The righteous and rigorous Dandelion Knight, and Acting Grand Master of the Knights of Favonius of Mondstadt.",
        "gender": "Female",
        "birthday": "March 14th",
        "rarity": 5,
        "vision": "Anemo",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Character_Jean_Card.jpg"
    },
    {
        "id": 14,
        "name": "Kaedehara Kazuha",
        "title":"Scarlet Leaves Pursue Wild Waves",
        "slug": "keadeharaKazuha",
        "description": "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet.",
        "gender": "Male",
        "birthday": "October 29th",
        "rarity": 5,
        "vision": "Anemo",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png"
    },
    {
        "id": 15,
        "name": "Kaeya",
        "title":"Frostwind Swordsman",
        "slug": "kaeya",
        "description": "A thinker in the Knights of Favonius with a somewhat exotic appearance.",
        "gender": "Male",
        "birthday": "November 30th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Sword",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/64/Character_Kaeya_Card.jpg"
    },
    {
        "id": 16,
        "name": "Keqing",
        "title":"Driving Thunder",
        "slug": "keqing",
        "description": "The Yuheng of the Liyue Qixing. Has much to say about Rex Lapis unilateral approach to policymaking in Liyue - but in truth, gods admire skeptics such as her quite a lot.",
        "gender": "Female",
        "birthday": "November 20th",
        "rarity": 5,
        "vision": "Electro",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg"
    },
    {
        "id": 17,
        "name": "Klee",
        "title":"Fleeing Sunlight",
        "slug": "klee",
        "description": "An explosives expert and a regular at the Knights of Favonius\r\n confinement room. Also known as Fleeing Sunlight.",
        "gender": "Female",
        "birthday": "July 27th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg"
    },
    {
        "id": 18,
        "name": "Lisa",
        "title":"Witch of Purple Rose",
        "slug": "lisa",
        "description": "The languid but knowledgeable Librarian of the Knights of Favonius.",
        "gender": "Female",
        "birthday": "June 9th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Catalyst",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Character_Lisa_Card.jpg"
    },
    {
        "id": 19,
        "name": "Mona",
        "title":"Astral Reflection",
        "slug": "mona",
        "description": "A mysterious young astrologer who proclaims herself to be Astrologist Mona Megistus,  and who possesses abilities to match the title.",
        "gender": "Female",
        "birthday": "August 31st",
        "rarity": 5,
        "vision": "Hydro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg"
    },
    {
        "id": 20,
        "name": "Ningguang",
        "title":"Eclipsing Star",
        "slug": "ningguang",
        "description": "The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
        "gender": "Female",
        "birthday": "August 26th",
        "rarity": 4,
        "vision": "Geo",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Character_Ningguang_Card.jpg"
    },
    {
        "id": 21,
        "name": "Noelle",
        "title":"Chivalric Blossom",
        "slug": "noelle",
        "description": "A maid in the service of the Knights of Favonius that dreams of joining their ranks someday.",
        "gender": "Female",
        "birthday": "March 21st",
        "rarity": 4,
        "vision": "Geo",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/9/92/Character_Noelle_Card.jpg"
    },
    {
        "id": 22,
        "name": "Qiqi",
        "title":"Icy Resurrection",
        "slug": "qiqi",
        "description": "An apprentice and herb-picker Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
        "gender": "Female",
        "birthday": "March 3rd",
        "rarity": 5,
        "vision": "Cryo",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Qiqi_Card.jpg"
    },
    {
        "id": 23,
        "name": "Razor",
        "title":"Wolf Boy",
        "slug": "razor",
        "description": "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        "gender": "Male",
        "birthday": "September 9th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/68/Character_Razor_Card.jpg"
    },
    {
        "id": 24,
        "name": "Rosaria",
        "title":"Thorny Benevolence",
        "slug": "rosaria",
        "description": "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
        "gender": "Female",
        "birthday": "January 24th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/6d/Character_Rosaria_Card.png"
    },
    {
        "id": 25,
        "name": "Sucrose",
        "title":"Harmless Sweetie",
        "slug": "sucrose",
        "description": "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
        "gender": "Male",
        "birthday": "May 11th",
        "rarity": 4,
        "vision": "Anemo",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Sucrose_Card.jpg"
    },
    {
        "id": 26,
        "name": "Tartaglia",
        "title":"Childe",
        "slug": "tartaglia",
        "description": "Cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.",
        "gender": "Male",
        "birthday": "Julyy 20th",
        "rarity": 5,
        "vision": "Hydro",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png"
    },
    {
        "id": 27,
        "name": "Traveler",
        "title":"Outlander",
        "slug": "traveler",
        "description": "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
        "gender": "Player's Choice",
        "birthday": "Player's Choice",
        "rarity": 5,
        "vision": "Adaptive",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Traveler_Male_Card.jpg"
    },
    {
        "id": 28,
        "name": "Venti",
        "title":"Windborne Bard",
        "slug": "venti",
        "description": "One of the many bards of Mondstadt, who freely wanders the citys streets and alleys.",
        "gender": "Male",
        "birthday": "June 16th",
        "rarity": 5,
        "vision": "Anemo",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg"
    },
    {
        "id": 29,
        "name": "Xiangling",
        "title":"Exquisite Delicacy",
        "slug": "xiangling",
        "description": "A renowned chef from Liyue. Shes extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        "gender": "Female",
        "birthday": "November 2nd",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Character_Xiangling_Card.jpg"
    },
    {
        "id": 30,
        "name": "Xiao",
        "title":"Vigilant Yaksha",
        "slug": "xiao",
        "description": "A yaksha adeptus that defends Liyue. Also heralded as the Conqueror of Demons or Vigilant Yaksha.",
        "gender": "Male",
        "birthday": "April 17th",
        "rarity": 5,
        "vision": "Anemo",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/8/88/Character_Xiao_Card.jpg"
    },
    {
        "id": 31,
        "name": "Xingqiu",
        "title":"Juvenile Galant",
        "slug": "xingqiu",
        "description": "A young man carrying a longSword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
        "gender": "Male",
        "birthday": "Oct 9th",
        "rarity": 4,
        "vision": "Hydro",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Xingqiu_Card.jpg"
    },   
    {
        "id": 32,
        "name": "Xinyan",
        "title":"Blazing Riff",
        "slug": "xinyan",
        "description": "Liyues sole Rock 'n' Roll musician. She rebels against ossified prejudices using her music and passionate singing.",
        "gender": "Female",
        "birthday": "November 4th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Xinyan_Card.jpeg"
    },
    {
        "id": 33,
        "name": "Yanfei",
        "title":"Wise Innocence",
        "slug": "yanfei",
        "description": "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
        "gender": "Female",
        "birthday": "Julyy 28th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Character_Yanfei_Card.png"
    },
    {
        "id": 34,
        "name": "Zhongli",
        "title":"Vago Mundo",
        "slug": "zhongli",
        "description": "A mysterious guest invited by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        "gender": "Male",
        "birthday": "December 31st",
        "rarity": 5,
        "vision": "Geo",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png"
    }
    
]

module.exports = data;