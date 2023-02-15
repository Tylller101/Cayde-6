module.exports = {
    name: "muteSpam", 
    description: "mutes spam", 
    execute(msg, fs, jsonfile){
        var owner = "356928159113019402";
        var watchfile = {};
        if(fs.existsSync("./BotStorage/Server/msgwatch.json")){
            watchfile = jsonfile.readFileSync("./BotStorage/Server/msgwatch.json");
        }
        
        if(msg.guild.id in watchfile === false){
            watchfile[msg.guild.id] = {};
        }

        const msgtime = watchfile[msg.guild.id];

        if(msg.author.id in msgtime === false){
            msgtime[msg.author.id] = {
                name: msg.author.username,
                content: "null",
                last_msg: Date.now(), 
                strike1: false,
                strike1id: "null",
                chan1id: "null",
                strike2: false,
                strike2id: "null",
                chan2id: "null",
                strike3: false,
                strike3id: "null",
                chan3id: "null",
                sent: false,
            };
        }   

        const usermsgtime = msgtime[msg.author.id];
        
        if((Date.now() - usermsgtime.last_msg) <= 10000){
            usermsgtime.last_msg = Date.now();
            if(msg.content.includes("https://discord.gg")){
                usermsgtime.content = msg.content;
                if(usermsgtime.strike1 === true && usermsgtime.content === msg.content){
                    if(usermsgtime.strike2 === true){
                        if(usermsgtime.strike3 === false){
                            usermsgtime.strike3id = msg.id;
                            usermsgtime.chan3id = msg.channel.id;
                        }
                        usermsgtime.strike3 = true;
                    }
                    if(usermsgtime.strike2 === false){
                        usermsgtime.strike2id = msg.id;
                        usermsgtime.chan2id = msg.channel.id;
                    }
                    usermsgtime.strike2 = true;
                    
                }
                if(usermsgtime.strike3 === true){ 
                    msg.client.users.fetch(owner).then(owneralert => {
                        owneralert.send("user " + msg.author.username + " was kicked for spamming a link");
                    });
                    if(usermsgtime.sent === false){
                        msg.author.send("you have been **kicked** from the **CSE & Gaming server** for **24hr** "
                        + "for spam if you were hacked you should change your password and enact duel authentication "
                        + "if you need assistance or believe this was done in error please contact **@Tyller101#7136**,  "
                        + "**@Icywind56#5656**, **@kirpy#5766**, **@Luna-bun#4262**, **@Mad#4042**, **@Ty'Quandre Jackson#4778**, "
                        + "**@Gipsy#4094**, or **@BlackMakret#6680**");
                        usermsgtime.sent = true;
                    }
                    msg.client.channels.fetch(usermsgtime.chan1id).then(channel => {
                        channel.messages.delete(usermsgtime.strike1id);
                    });
                    msg.client.channels.fetch(usermsgtime.chan2id).then(channel => {
                        channel.messages.delete(usermsgtime.strike2id);
                    });
                    msg.client.channels.fetch(usermsgtime.chan3id).then(channel => {
                        channel.messages.delete(usermsgtime.strike3id);
                    });

                }
                if(usermsgtime.strike1 === false){
                    usermsgtime.strike1id = msg.id;
                    usermsgtime.chan1id = msg.channel.id;
                }
                usermsgtime.strike1 = true;
                
            }
            else{
                usermsgtime.content = "null";
                usermsgtime.strike1id = "null";
                usermsgtime.strike2id = "null";
                usermsgtime.strike3id = "null";
                usermsgtime.chan1id = "null";
                usermsgtime.chan2id = "null";
                usermsgtime.chan3id = "null";
                usermsgtime.strike1 = false;
                usermsgtime.strike2 = false;
                usermsgtime.strike3 = false;
                usermsgtime.sent = false;
            }

        }
        else{
            usermsgtime.last_msg = Date.now()
            usermsgtime.content = "null";
            usermsgtime.strike1id = "null";
            usermsgtime.strike2id = "null";
            usermsgtime.strike3id = "null";
            usermsgtime.chan1id = "null";
            usermsgtime.chan2id = "null";
            usermsgtime.chan3id = "null";
            usermsgtime.strike1 = false;
            usermsgtime.strike2 = false;
            usermsgtime.strike3 = false; 
            usermsgtime.sent = false;
        }
        if(usermsgtime.sent === true){
            msg.member.kick();
            usermsgtime.strike1 = false;
            usermsgtime.strike2 = false;
            usermsgtime.strike3 = false;
            usermsgtime.sent = false;
        }
        jsonfile.writeFileSync("./Botstorage/Server/msgwatch.json", watchfile);    
    }
}