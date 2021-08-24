module.exports = {
    name: "drawcard", 
    description: "draw a card", 
    async execute(msg, fs, random, jsonfile){ 
        var user = {};
        var cards = {};

        if(fs.existsSync("./BotStorage/Games/drawcards.json")){
            user = jsonfile.readFileSync("./BotStorage/Games/drawcards.json");
        }
    
        if(msg.author.id in user === false){
            user[msg.author.id] = {
                name: msg.author.username,
                decks: 1,
                drawncards: 0,
            };
        }
        const usercards = user[msg.author.id];

        if(cards in usercards === false && usercards.decks !== 0 || (usercards.decks * 13) !== usercards[cards].hearts.length){
            usercards[cards] ={
                hearts: [],
                spades: [],
                diamonds: [],
                clubs: [],
            };
            for(let i = 0; i < (usercards.decks * 13); i++){
                usercards[cards].hearts.push(0);
                usercards[cards].spades.push(0);
                usercards[cards].diamonds.push(0);
                usercards[cards].clubs.push(0);
            }
        }
        //hearts, spades, diamonds, clubs, ace, two, three, four, five, six
                //seven, eight, nine, ten, jack, queen, king
        //const userstats = guildstats[msg.author.id];

        jsonfile.writeFileSync("./Botstorage/Games/drawcards.json", user);

    }
}