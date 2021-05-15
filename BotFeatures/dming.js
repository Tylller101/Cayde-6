module.exports = {
    name: "dming", 
    description: "actions when dming the bot including games",
    async execute(msg, fs, guild, jsonfile, features, games){
        const greeting = msg.content.toLowerCase();
        const reply = msg.author;

        if(msg.channel.type === "dm" ){
            if(greeting === "hi" || greeting === "hello"){
                reply.send("Hello! Im Cayde-6 the Official bot of the CSE & Gaming server.");
                return;
            }
            if(greeting === "ping" || greeting === "ping!"){
                reply.send("Pong!");
                return;
            }
            if(greeting === "pong" || greeting === "pong!"){
                reply.send("Ping!");
                return;
            }

            if(greeting === "server"){
                reply.send("**I am currently programed to asist in the following on the CSE & Gameing server:**\n"
                    + "Embeding class and gaming role choice messages.\n" 
                    + "Tracking and awarding XP, Levels, Game Tokens and exclusive roles for participating on the server.\n"
                    + "Sending animated emojis for users that dont have nitro.\n\n"
                    
                    + "**I am also programmed to conduct the following in DMs:**\n" 
                    + "Facilitate PvP, PvE or PvPvE games(if you dont know what those mean just type it in the chat)\n"
                    + "Inform users of there server stats or game stats(if applicable)");
                    return;
            }
            if(greeting === "pvp"){
                reply.send("PvP stands for Player Vs. Player.");
                return;
            }
            if(greeting === "pve"){
                reply.send("PvE stands for Player Vs. Environment(aka me Cayde-6)");
                return;
            }
            if(greeting === "pvpve"){
                reply.send("PvPvE stands for Player Vs. Player Vs. Environment(aka me Cayde-6)");
                return;
            }
            if(greeting === "games"){
                reply.send("I am currently programed to play or facilitate the following games:\n"
                    + "**Card Games:**\n"
                    + "sorry no card games are coded at the moment\n"
                    //+ "21\n"
                    //+ "Durak\n"
                    //+ "Egyptian War\n"
                    //+ "Go Fish\n"
                    //+ "Old Maid\n"
                    //+ "Slap Jack\n"
                    //+ "UNO\n"
                    //+ "War\n\n"

                    + "**Dice Games:**\n"
                    + "sorry no dice games are coded at the moment\n"
                    //+ "Bar Dice(Ship, Captain, Crew)\n"
                    //+ "Farkle\n"
                    //+ "Yacht\n"
                    //+ "Yahtzee\n\n"
                    
                    + "**Text RPG Games:**\n"
                    + "sorry no RPG games are coded at the moment\n"
                    //+ "Dungeon delve\n"
                    //+ "Castle climb\n"
                    //+ ""
                    );

                return;
            }
            if(greeting === "war"){
                games.get("war").execute(msg, fs, random, jsonfile);
                return;
            }
            if(greeting === "stats"){
                features.get("getstats").execute(msg, guild, fs, jsonfile);
                return;
            }
            if(greeting === "help"){
                reply.send("If you want to know what I contribute to the server just type \"server\"\n" 
                    + "If you want to play a game just type \"games\"\n" 
                    + "If you would like to view your stats for the CSE & Gaming server type \"stats\"");
                    return;
            }
            else{
                msg.author.send("Sorry i do not know that command check your spelling or try using \"help\" ");
            }
        }
    }
}