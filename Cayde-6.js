require("dotenv").config(); //library to ready caydes token from .env

const Discord = require("discord.js"); 
const cayde = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const random = require("random"); //gen random numbers
const jsonFile = require("jsonfile"); //use jsonfiles
const adminPrefix = "!$#"; //my prefix

cayde.on("ready", () =>{ //cayde is online
    console.log("Reporting for Duty");
  });

cayde.on("guildMemberAdd", guildMember =>{ //when a person enters the server
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "peon");

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get("814303986491588661").send(`welcome <@${guildMember.user.id}> to the server`); //welcome message

});

cayde.login(process.env.CAYDE_TOKEN); //cayds token access