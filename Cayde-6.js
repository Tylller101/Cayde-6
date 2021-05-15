require("dotenv").config(); //library to ready caydes token from .env

const Discord = require("discord.js"); 
const cayde = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const random = require("random"); //gen random numbers
const jsonfile = require("jsonfile"); //use jsonfiles
const prefix = "!$#"; //my prefix
const featureFiles = fs.readdirSync("./BotFeatures/").filter(file => file.endsWith(".js"));
const games = fs.readdirSync("./BotGames/").filter(file => file.endsWith(".js"));
const serverid = "837067148123177001"; //tylller101s server id right now

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
    let welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === "welcome");
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
        + `To gain access to class & gaming categories or channels go to ${classes} & ${gaming}.`); 
    
    console.log("-\n" + newMember.user.username + " has joined the server.");
});

cayde.on("guildMemberRemove", leavingMember => {
    let goodbyeChannel = leavingMember.guild.channels.cache.find(channel => channel.name === "welcome");

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
    if(!msg.content.startsWith(prefix) && !msg.author.bot){
        cayde.BotFeatures.get("leveler").execute(msg, fs, random, jsonfile);
        return;
    }
    if(msg.content.startsWith(prefix)){
        const args = msg.content.slice(prefix.length).split(/ +/);
        const BotCommand = args.shift().toLowerCase();

        if(BotCommand === "addclasses"){ //adds classes embed
            cayde.BotFeatures.get("addclasses").execute(msg, Discord, cayde);
        }
        if(BotCommand === "addgaming"){ //adds gaming embed
            cayde.BotFeatures.get("addgaming").execute(msg, Discord, cayde)
        }
    }
});

cayde.login(process.env.CAYDE_TOKEN); //caydes token access