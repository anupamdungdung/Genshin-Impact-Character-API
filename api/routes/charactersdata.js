const data = [
    {
        "id": 1,
        "name": "Albedo",
        "slug": "albedo",
        "description": "Albedo — an alchemist based in Mondstadt, in the service of the Knights of Favonius.",
        "gender": "Male",
        "birthday": "September 13th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Bow",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/23/Character_Albedo_Portrait.png"
    },
    {
        "id": 2,
        "name": "Amber",
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
        "slug": "barbara",
        "description": "The Deaconess of the Favonius Church and a shining starlet adored by all. Although the concept of a starlet is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.",
        "gender": "Female",
        "birthday": "Jul 5th",
        "rarity": 4,
        "vision": "Hydro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/9/93/Character_Barbara_Card.jpg"
    },
    {
        "id": 4,
        "name": "Beidou",
        "slug": "beidou",
        "description": "Beidou is the leader of the Crux an armed fleet based in Liyue Harbor. An armed fleet means exactly what it sounds like: a fleet of ships armed to the teeth.",
        "gender": "Female",
        "birthday": "Feb 14th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/8/84/Character_Beidou_Card.jpg"
    },
    {
        "id": 5,
        "name": "Bennett",
        "slug": "bennett",
        "description": "A righteous and good-natured adventurer from Mondstadt whos unfortunately extremely unlucky.",
        "gender": "Male",
        "birthday": "Feb 29th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Character_Bennett_Card.jpg"
    },
    {
        "id": 6,
        "name": "Chongyun",
        "slug": "chongyun",
        "description": "A young exortcist from a family of exorcists. He does everything he can to suppress his pure positive energy.",
        "gender": "Male",
        "birthday": "Sep 7th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Character_Chongyun_Card.jpg"
    },
    {
        "id": 7,
        "name": "Diluc",
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
        "slug": "eula",
        "description": "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.",
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
        "slug": "hu tao",
        "description": "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
        "gender": "Female",
        "birthday": "July 15th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Hu_Tao_Card.jpg"
    },
    {
        "id": 13,
        "name": "Jean",
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
        "name": "Kaeya",
        "slug": "kaeya",
        "description": "A thinker in the Knights of Favonius with a somewhat exotic appearance.",
        "gender": "Male",
        "birthday": "Nov 30th",
        "rarity": 4,
        "vision": "Cryo",
        "weapon": "Sword",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/64/Character_Kaeya_Card.jpg"
    },
    {
        "id": 15,
        "name": "Keqing",
        "slug": "keqing",
        "description": "The Yuheng of the Liyue Qixing. Has much to say about Rex Lapis unilateral approach to policymaking in Liyue - but in truth, gods admire skeptics such as her quite a lot.",
        "gender": "Female",
        "birthday": "Nov 20th",
        "rarity": 5,
        "vision": "Electro",
        "weapon": "Sword",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Character_Keqing_Card.jpg"
    },
    {
        "id": 16,
        "name": "Klee",
        "slug": "klee",
        "description": "An explosives expert and a regular at the Knights of Favonius\r\n confinement room. Also known as Fleeing Sunlight.",
        "gender": "Female",
        "birthday": "Jul 27th",
        "rarity": 5,
        "vision": "Pyro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/78/Character_Klee_Card.jpg"
    },
    {
        "id": 17,
        "name": "Lisa",
        "slug": "lisa",
        "description": "The languid but knowledgeable Librarian of the Knights of Favonius who was deemed by Sumeru Academia to be their most distinguised graduate in the past two centuries.",
        "gender": "Female",
        "birthday": "Jun 9th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Catalyst",
        "obtain": "Quest",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Character_Lisa_Card.jpg"
    },
    {
        "id": 18,
        "name": "Mona",
        "slug": "mona",
        "description": "A mysterious young astrologer who proclaims herself to be Astrologist Mona Megistus,  and who possesses abilities to match the title.",
        "gender": "Female",
        "birthday": "August 31st",
        "rarity": 5,
        "vision": "Hydro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/69/Character_Mona_Card.jpg/revision/latest?cb=20210323193416"
    },
    {
        "id": 19,
        "name": "Ningguang",
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
        "id": 20,
        "name": "Noelle",
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
        "id": 21,
        "name": "Qiqi",
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
        "id": 22,
        "name": "Razor",
        "slug": "razor",
        "description": "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
        "gender": "Male",
        "birthday": "Sep 9th",
        "rarity": 4,
        "vision": "Electro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/6/68/Character_Razor_Card.jpg"
    },
    {
        "id": 23,
        "name": "Rosaria",
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
        "id": 24,
        "name": "Sucrose",
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
        "id": 25,
        "name": "Tartaglia",
        "slug": "tartaglia",
        "description": "Cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.",
        "gender": "Male",
        "birthday": "July 20th",
        "rarity": 5,
        "vision": "Hydro",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png"
    },
    {
        "id": 26,
        "name": "Traveler",
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
        "id": 27,
        "name": "Venti",
        "slug": "venti",
        "description": "One of the many bards of Mondstadt, who freely wanders the citys streets and alleys.",
        "gender": "Male",
        "birthday": "Jun 16th",
        "rarity": 5,
        "vision": "Anemo",
        "weapon": "Bow",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Venti_Card.jpg"
    },
    {
        "id": 28,
        "name": "Xiangling",
        "slug": "xiangling",
        "description": "A renowned chef from Liyue. Shes extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
        "gender": "Female",
        "birthday": "Nov 2nd",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Character_Xiangling_Card.jpg"
    },
    {
        "id": 29,
        "name": "Xiao",
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
        "id": 30,
        "name": "Xingqiu",
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
        "id": 31,
        "name": "Xinyan",
        "slug": "xinyan",
        "description": "Liyues sole Rock 'n' Roll musician. She rebels against ossified prejudices using her music and passionate singing.",
        "gender": "Female",
        "birthday": "Nov 4th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Claymore",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Xinyan_Card.jpeg"
    },
    {
        "id": 32,
        "name": "Yanfei",
        "slug": "yanfei",
        "description": "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
        "gender": "Female",
        "birthday": "July 28th",
        "rarity": 4,
        "vision": "Pyro",
        "weapon": "Catalyst",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Character_Yanfei_Card.png"
    },
    {
        "id": 33,
        "name": "Zhongli",
        "slug": "zhongli",
        "description": "A mysterious guest invited by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
        "gender": "Male",
        "birthday": "Dec 31st",
        "rarity": 5,
        "vision": "Geo",
        "weapon": "Polearm",
        "obtain": "Wish",
        "imageUrl":"https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png"
    }
]

module.exports = data;