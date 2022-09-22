require("dotenv").config(); //library to ready caydes token from .env

const Discord = require("discord.js"); 
const cayde = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const random = require("random"); //gen random numbers
const jsonfile = require("jsonfile"); //use jsonfiles
const prefix = "!$#"; //my prefix
const featureFiles = fs.readdirSync("./BotFeatures/").filter(file => file.endsWith(".js"));
const games = fs.readdirSync("./BotGames/").filter(file => file.endsWith(".js"));
const serverid = "750030845078798406"; //CSE & Gaming id

cayde.BotFeatures = new Discord.Collection();
cayde.BotGames = new Discord.Collection();

for(const file of featureFiles){
    const BotFeat = require(`./BotFeatures/${file}`);

    cayde.BotFeatures.set(BotFeat.name, BotFeat);
}

for(const file of games){
    const BotGame = require(`./BotGames/${file}`);

    cayde.BotGames.set(BotGame.name, BotGame);
}

cayde.on("ready", () =>{ //cayde is online
    console.log("Reporting for Duty");
  });

cayde.on("guildMemberAdd", newMember =>{ //when a person enters the server
    let welcome = newMember.guild.roles.cache.find(role => role.name === "Peon"); //newest members
    let welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === "welcome-portal");
    let rulesChannel = newMember.guild.channels.cache.find(channel => channel.name === "rules-and-regs");
    let tocChannel = newMember.guild.channels.cache.find(channel => channel.name === "server-contents");
    let discordChannel = newMember.guild.channels.cache.find(channel => channel.name === "discord-features");
    let classes = newMember.guild.channels.cache.find(channel => channel.name === "choose-classes");
    let gaming = newMember.guild.channels.cache.find(channel => channel.name === "choose-gaming");

    newMember.roles.add(welcome); //assign first role
    welcomeChannel.send(`Welcome <@${newMember.user.id}> to CSE & Gaming.\n`
        + `Please visit ${rulesChannel} and get familiar with the rules of the server.\n`
        + `Also make sure to visit ${tocChannel} to get familiar with all the server has to offer.\n`
        + `To get more familiar with Discord itself visit ${discordChannel} for tips, tricks and easter eggs.\n`
        + `To gain access to classes & gaming categories or channels go to ${classes} & ${gaming}.`); 
    
    console.log("-\n" + newMember.user.username + " has joined the server.");
});

cayde.on("guildMemberRemove", leavingMember => {
    let goodbyeChannel = leavingMember.guild.channels.cache.find(channel => channel.name === "welcome-portal");

    goodbyeChannel.send(`Farewell <@${leavingMember.user.id}> we will miss you.`);

    console.log("-\n" + leavingMember.user.username + " has left the server.");
});

cayde.on("message", msg =>{ //detects command messages 
    
    if(msg.channel.type === "dm" && !msg.author.bot){
        cayde.BotFeatures.get("dming").execute(msg, serverid, fs, jsonfile, cayde.BotFeatures, cayde.BotGames);
        return;
    }
    if(msg.content.startsWith(":") && msg.content.endsWith(":")){
        const args = msg.content.slice(1, -1);

        cayde.BotFeatures.get("uselockedemojis").execute(msg, args);
    }
    if(!msg.content.startsWith(prefix) && !msg.author.bot){ //old member getting peon role if has no ranking role
        const peon = msg.guild.roles.cache.find(role => role.name === "Peon");
        const findpeon = msg.member.roles.cache.some(role => role.name === "Peon"); 
        const findapprentice = msg.member.roles.cache.some(role => role.name === "Apprentice");
        const findjourneyman = msg.member.roles.cache.some(role => role.name ==="Journeyman");
        const findmaster = msg.member.roles.cache.some(role => role.name === "Master");
        const findgrandmaster = msg.member.roles.cache.some(role => role.name === "GrandMaster");

        if(!findpeon && !findapprentice && !findjourneyman && !findmaster && !findgrandmaster){
            msg.member.roles.add(peon);
        }
        cayde.BotFeatures.get("leveler").execute(msg, fs, random, jsonfile);
        return;
    }

    if(msg.content.startsWith(prefix) && !msg.author.bot){
        let commandChannel = msg.guild.channels.cache.find(channel => channel.name === "bot-commands");

        if(msg.channel === commandChannel){
            const args = msg.content.slice(prefix.length).split(/ +/);
            const BotCommand = args.shift().toLowerCase();

            if(BotCommand === "addclasses"){ //adds classes embed
                cayde.BotFeatures.get("addclasses").execute(msg, Discord, cayde);
                msg.delete();
            }
            if(BotCommand === "addgaming"){ //adds gaming embed
                cayde.BotFeatures.get("addgaming").execute(msg, fs, Discord, cayde);
                msg.delete();
            }
            if(BotCommand === "timeout"){
                cayde.BotFeatures.get("timeout").execute(msg, commandChannel,cayde);
                msg.delete();
            }
        }
    }
});

function saveToFile(save, filepath){
    fs.open(filepath, "a", function(err){
        if(err){
            console.log("failed to open " + filepath);
        }
        else{
            fs.appendFile(filepath, save, (err) => {
                if(err){
                    console.log("failed to write to " + filepath);
                }
                else{
                    console.log("interaction saved to " + filepath);
                }
            });
        }
    });
};

function time(){
    var timestamp = Date.now();
    var dateObject = new Date(timestamp);
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;
    var year = dateObject.getFullYear();
    var hour = dateObject.getHours();
    var min = dateObject.getMinutes();
    var sec = dateObject.getSeconds();
    return (day + "/" + month + "/" + year + "  " + hour + ":" + min + ":" + sec);
}

cayde.login(process.env.CAYDE_TOKEN); //caydes token access