puts "⚔️ Seeding data..."

puts "🧝🏻‍♂️ Seeding players..."

user1 = Player.create(
    avatar: "",
    alias:"PickleTickle",
    username:"pickle123",
    password:"why",
    level: rand(1..80)
)
user2 = Player.create(
    avatar: "",
    alias:"UnicornDust",
    username:"dustybum",
    password:"please",
    level: rand(1..80)
)
user3 = Player.create(
    avatar: "",
    alias:"Degoon",
    username:"Degoon100",
    password:"NeverFold",
    level: rand(1..80)
)
user4 = Player.create(
    avatar: "",
    alias:"MartyMart",
    username:"MartyMarty",
    password:"riick",
    level: rand(1..80)
)
user5 = Player.create(
    avatar: "",
    alias:"HolyBunz",
    username:"BunzOfSteel",
    password:"yams",
    level: rand(1..80)
)


puts "🎮 Seeding games..."
Game.create(
    title:"Lost Ark",
    content:"",
    image: "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/06/10/975b51a0/lostark.jpg"
)
Game.create(
    title: "Guild Wars 2",
    content:"",
    image: "https://assets-prd.ignimgs.com/2022/09/28/guildwars2-1664403614907.jpg?width=300"
)

Game.create(
    title: "Valorant",
    content:"",
    image: "https://assets-prd.ignimgs.com/2021/12/21/valorant-1640045685890.jpg?width=300"
)
Game.create(
    title:"Naraka:Bladepoint",
    content:"",
    image:"https://assets1.ignimgs.com/2019/12/13/naraka---button-00-1576208838937.jpg?width=300"
)
Game.create(
    title:"Overwatch 2",
    content:"",
    image:"https://assets-prd.ignimgs.com/2022/06/23/overwatch-2-button-fin-1656022954568.jpg?width=300"
)

puts "📜 Seeding missions..."

lostArk = Mission.create(
    title: "Lost Ark Brelshaza Raid Run ",
    description: "On gate 3 of raid PLS be know mechanics ",
    game_id: Game.all.sample.id
)
overwatch = Mission.create(
    title: "Ranked Grind Overwatch 2",
    description: "Need healer for ranked grind",
    game_id: Game.all.sample.id
)
naraka = Mission.create(
    title: "Blades n Chill Naraka:Bladepoint",
    description:"Looking for new people to play with..becuz my friends are trash",
    game_id: Game.all.sample.id
)
 gw2 = Mission.create(
    title:"Fractal runs for gold Guild Wars 2",
    description:" Will carry through fractals 1-5 ",
    game_id: Game.all.sample.id
)
valorant = Mission.create(
    title: "Valorant ranked grind",
    description:"I CANNOT pug this game PLSSSS help",
    game_id: Game.all.sample.id
)

puts "Seeding posts..."

Post.create(
    content:"",
    game_id: Game.all.sample.id,
    player_id: Player.all.sample.id
)

puts "Seeding mission party..."
MissionParty.create(
    player_id: user5.id,
    mission_id: naraka.id
)

MissionParty.create(
    player_id: user2.id ,
    mission_id: valorant.id
)

MissionParty.create(
    player_id: user3.id ,
    mission_id: gw2.id
)

MissionParty.create(
    player_id: user2.id ,
    mission_id: lostArk.id
)

puts "Seeding Comments..."

Comment.create(
    player_id: user1.id,
    mission_id:naraka.id,
    content:"Test comment"
)

Comment.create(
    player_id: user3.id,
    mission_id:overwatch.id,
    content:"Nerd talk"
)
Comment.create(
    player_id: user1.id,
    mission_id:valorant.id,
    content:"Please help"
)

puts "Done seeding hopefully..."
