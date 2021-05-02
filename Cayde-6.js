require("dotenv").config(); //library to ready caydes token from .env

const Discord = require("discord.js"); 
const cayde = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const random = require("random"); //gen random numbers
const jsonFile = require("jsonfile"); //use jsonfiles
const prefix = "!$#"; //my prefix
const featureFiles = fs.readdirSync("./BotFeatures/").filter(file => file.endsWith(".js"));
const games = fs.readdirSync("./BotGames/").filter(file => file.endsWith(".js"));

cayde.BotFeatures = new Discord.Collection();

for(const file of featureFiles){
    const BotFeat = require(`./BotFeatures/${file}`);

    cayde.BotFeatures.set(BotFeat.name,BotFeat)
}


cayde.on("ready", () =>{ //cayde is online
    console.log("Reporting for Duty");
  });

cayde.on("guildMemberAdd", newMember =>{ //when a person enters the server
    let welcome = newMember.guild.roles.cache.find(role => role.name === "peon"); //newest members

    newMember.roles.add(welcome); //assign first role
    newMember.guild.channels.cache.get("814303986491588661").send(`welcome <@${newMember.user.id}> to the server`); //welcome message

});

cayde.on("message", msg =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot){
        return;
    }
    const args = msg.content.slice(prefix.length).split(/ +/);
    const BotCommand = args.shift().toLowerCase();

    if(BotCommand === "addclasses"){
        cayde.BotFeatures.get("addclasses").execute(msg, Discord, cayde);
    }
});

cayde.login(process.env.CAYDE_TOKEN); //cayds token access