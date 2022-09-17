module.exports = {
    name: "addclasses",
    description: "sets up reaction role message for classes",
    async execute(msg, Discord, cayde){
        const classes = msg.guild.channels.cache.find(channel => channel.name === "choose-classes");

        const math021 = msg.guild.roles.cache.find(role => role.name === "MATH021");
        const math022 = msg.guild.roles.cache.find(role => role.name === "MATH022");
        const math023 = msg.guild.roles.cache.find(role => role.name === "MATH023");
        const math024 = msg.guild.roles.cache.find(role => role.name === "MATH024");
        const math032 = msg.guild.roles.cache.find(role => role.name === "MATH032");

        const math131 = msg.guild.roles.cache.find(role => role.name === "MATH131");
        const math141 = msg.guild.roles.cache.find(role => role.name === "MATH141");

        const phys008 = msg.guild.roles.cache.find(role => role.name === "PHYS008");
        const phys009 = msg.guild.roles.cache.find(role => role.name === "PHYS009");

        const engr065 = msg.guild.roles.cache.find(role => role.name === "ENGR065");
        const engr191 = msg.guild.roles.cache.find(role => role.name === "ENGR191");

        const cse005 = msg.guild.roles.cache.find(role => role.name === "CSE005");
        const cse015 = msg.guild.roles.cache.find(role => role.name === "CSE015");
        const cse019 = msg.guild.roles.cache.find(role => role.name === "CSE019");
        const cse022 = msg.guild.roles.cache.find(role => role.name === "CSE022");
        const cse024 = msg.guild.roles.cache.find(role => role.name === "CSE024");
        const cse030 = msg.guild.roles.cache.find(role => role.name === "CSE030");
        const cse031 = msg.guild.roles.cache.find(role => role.name === "CSE031");
        const cse100 = msg.guild.roles.cache.find(role => role.name === "CSE100");
        const cse120 = msg.guild.roles.cache.find(role => role.name === "CSE120");

        const cse106 = msg.guild.roles.cache.find(role => role.name === "CSE106");
        const cse107 = msg.guild.roles.cache.find(role => role.name === "CSE107");
        const cse111 = msg.guild.roles.cache.find(role => role.name === "CSE111");
        const cse140 = msg.guild.roles.cache.find(role => role.name === "CSE140");
        const cse150 = msg.guild.roles.cache.find(role => role.name === "CSE150");
        const cse155 = msg.guild.roles.cache.find(role => role.name === "CSE155");
        const cse160 = msg.guild.roles.cache.find(role => role.name === "CSE160");
        const cse162 = msg.guild.roles.cache.find(role => role.name === "CSE162");
        const cse165 = msg.guild.roles.cache.find(role => role.name === "CSE165");
        const cse168 = msg.guild.roles.cache.find(role => role.name === "CSE168");
        const cse170 = msg.guild.roles.cache.find(role => role.name === "CSE170");
        const cse171 = msg.guild.roles.cache.find(role => role.name === "CSE171");
        const cse173 = msg.guild.roles.cache.find(role => role.name === "CSE173");
        const cse175 = msg.guild.roles.cache.find(role => role.name === "CSE175");
        const cse176 = msg.guild.roles.cache.find(role => role.name === "CSE176");
        const cse177 = msg.guild.roles.cache.find(role => role.name === "CSE177");
        const cse178 = msg.guild.roles.cache.find(role => role.name === "CSE178");
        const cse179 = msg.guild.roles.cache.find(role => role.name === "CSE179");
        const cse185 = msg.guild.roles.cache.find(role => role.name === "CSE185");

        const engr057 = msg.guild.roles.cache.find(role => role.name === "ENGR057");
        const engr120 = msg.guild.roles.cache.find(role => role.name === "ENGR120");
        const engr151 = msg.guild.roles.cache.find(role => role.name === "ENGR151");
        const engr155 = msg.guild.roles.cache.find(role => role.name === "ENGR155");
        const engr170 = msg.guild.roles.cache.find(role => role.name === "ENGR170");
        const engr180 = msg.guild.roles.cache.find(role => role.name === "ENGR180");

        const math021Emoji = "🇲";
        const math022Emoji = "🇦";
        const math023Emoji = "🇹";
        const math024Emoji = "🇭";
        const math032Emoji = "🤮";

        const math131Emoji = "🤓";
        const math141Emoji = "🧐";
        
        const phys008Emoji = "📡";
        const phys009Emoji = "🔋";

        const engr065Emoji = "🦾";
        const engr191Emoji = "🧑‍🏫";

        const cse005Emoji = "😋";
        const cse015Emoji = "👶";
        const cse019Emoji = "🤒";
        const cse022Emoji = "🧒";
        const cse024Emoji = "👧";
        const cse030Emoji = "👨";
        const cse031Emoji = "😢";
        const cse100Emoji = "💩";
        const cse120Emoji = "⌨️";

        const cse106Emoji = "🗺️";
        const cse107Emoji = "📷";
        const cse111Emoji = "🎛️";
        const cse140Emoji = "🖥️";
        const cse150Emoji = "🪟";
        const cse155Emoji = "🤖";
        const cse160Emoji = "🖱️";
        const cse162Emoji = "📱";
        const cse165Emoji = "💯";
        const cse168Emoji = "🛰️";
        const cse170Emoji = "🖼️";
        const cse171Emoji = "🕹️";
        const cse173Emoji = "🧠";
        const cse175Emoji = "📜";
        const cse176Emoji = "🖨️";
        const cse177Emoji = "🔢";
        const cse178Emoji = "👮";
        const cse179Emoji = "⛓️";
        const cse185Emoji = "👁️";

        const engr057Emoji = "💥";
        const engr120Emoji = "🌊";
        const engr151Emoji = "🦍";
        const engr155Emoji = "💰";
        const engr170Emoji = "🔬";
        const engr180Emoji = "🏔️";

        let embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Choose your classes")
        .setDescription("Choose classes you are taking, have taken, or plan on taking "
        + "and would like to view and interact with on the server.\n\n"

        + "**Required Math classes:\n**"
            + `${math021Emoji} for MATH021: Calculus I\n`
            + `${math022Emoji} for MATH022: Calculus II\n`
            + `${math023Emoji} for MATH023: Vector Calculus \n`
            + `${math024Emoji} for MATH024: Linear Algebra & Differential Equations\n`
            + `${math032Emoji} for MATH032: Probability & Statistics\n\n`

        + "**Popular Math classes:\n**"
            + `${math131Emoji} for MATH131: Numerical Methods for Scientists and Engineers\n`
            + `${math141Emoji} for MATH141: Linear Analysis I\n\n`

        + "**Required Physics classes:**\n"
            + `${phys008Emoji} for PHYS008: Introductory Physics I\n`
            + `${phys009Emoji} for PHYS009: Introductory Physics II\n\n`
            
        + "**Required Engineering classes:**\n"
            + `${engr065Emoji} for ENGR065: Circuit Theory\n`
            + `${engr191Emoji} for ENGR191: Professional Seminar\n\n`

        + "**Required Computer Science Classes:**\n"
            + `${cse005Emoji} for CSE005: Introduction to Computer Applications\n`
            + `${cse015Emoji} for CSE015: Discrete Mathematics\n`
            + `${cse019Emoji} for CSE019: Introduction to Computing\n`
            + `${cse022Emoji} for CSE022: Intro to Programming\n`
            + `${cse024Emoji} for CSE024: Advanced Programming\n`
            + `${cse030Emoji} for CSE030: Data Structures\n`
            + `${cse031Emoji} for CSE031: Computer Organization & Assemply Language\n`
            + `${cse100Emoji} for CSE100: Algorithm Design & Analysis\n`
            + `${cse120Emoji} for CSE120: Software Engineering\n\n`);
            
        let embed2 = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Choose your classes")
        .setDescription("Choose classes you are taking, have taken, or plan on taking "
        + "and would like to view and interact with on the server.\n\n"
            
        +"**Popular Computer Science Classes:**\n"
            + `${cse106Emoji} for CSE106: Exploratory Computing\n`
            + `${cse107Emoji} for CSE107: Introduction to Digital Image Process\n`
            + `${cse111Emoji} for CSE111: Database Systems\n`
            + `${cse140Emoji} for CSE140: Computer Architecture\n`
            + `${cse150Emoji} for CSE150: Operating Systems\n`
            + `${cse155Emoji} for CSE155: Introduction to Human Computer Interaction\n`
            + `${cse160Emoji} for CSE160: Computer Networks\n`
            + `${cse162Emoji} for CSE162: Mobile Computing\n`
            + `${cse165Emoji} for CSE165: Introduction to Object Oriented Programming\n`
            + `${cse168Emoji} for CSE168: Distributed Software Systems\n`
            + `${cse170Emoji} for CSE170: Computer Graphics\n`
            + `${cse171Emoji} for CSE171: Game programing\n`
            + `${cse173Emoji} for CSE173: Computational Cognitive Neuroscience\n`
            + `${cse175Emoji} for CSE175: Introduction to Artificial Intelligence\n`
            + `${cse176Emoji} for CSE176: Introduction to Machine Learning\n`
            + `${cse177Emoji} for CSE177: Database System Implementation\n`
            + `${cse178Emoji} for CSE178: Computers & Networks Security\n`
            + `${cse179Emoji} for CSE179: Introduction to Parallel Computing\n`
            + `${cse185Emoji} for CSE185: Introduction to Computer Vision`);
        
        let embed3 = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Choose your classes")
        .setDescription("Choose classes you are taking, have taken, or plan on taking "
        + "and would like to view and interact with on the server.\n\n"

        +"**Popular Engineering Classes:**\n"
            + `${engr057Emoji} for ENGR057: Statics and Dynamics\n`
            + `${engr120Emoji} for ENGR120: Fluid Mechanics\n`
            + `${engr151Emoji} for ENGR151: Strength of Materials\n`
            + `${engr155Emoji} for ENGR155: Engineering Economic Analysis\n`
            + `${engr170Emoji} for ENGR170: Introduction to Electron Microscopy\n`
            + `${engr180Emoji} for ENGR180: Spatial Analysis & Modeling\n`

        );

        let msgEmbed = await classes.send(embed);
        msgEmbed.react(math021Emoji);
        msgEmbed.react(math022Emoji);
        msgEmbed.react(math023Emoji);
        msgEmbed.react(math024Emoji);
        msgEmbed.react(math032Emoji);

        msgEmbed.react(math131Emoji);
        msgEmbed.react(math141Emoji);

        msgEmbed.react(phys008Emoji);
        msgEmbed.react(phys009Emoji);

        msgEmbed.react(engr065Emoji);
        msgEmbed.react(engr191Emoji);

        msgEmbed.react(cse005Emoji);
        msgEmbed.react(cse015Emoji);
        msgEmbed.react(cse019Emoji);
        msgEmbed.react(cse022Emoji);
        msgEmbed.react(cse024Emoji);
        msgEmbed.react(cse030Emoji);
        msgEmbed.react(cse031Emoji);
        msgEmbed.react(cse100Emoji);
        msgEmbed.react(cse120Emoji);

        let msgEmbed2 = await classes.send(embed2);

        msgEmbed2.react(cse106Emoji);
        msgEmbed2.react(cse107Emoji);
        msgEmbed2.react(cse111Emoji);
        msgEmbed2.react(cse140Emoji);
        msgEmbed2.react(cse150Emoji);
        msgEmbed2.react(cse155Emoji);
        msgEmbed2.react(cse160Emoji);
        msgEmbed2.react(cse162Emoji);
        msgEmbed2.react(cse165Emoji);
        msgEmbed2.react(cse168Emoji);
        msgEmbed2.react(cse170Emoji);
        msgEmbed2.react(cse171Emoji);
        msgEmbed2.react(cse173Emoji);
        msgEmbed2.react(cse175Emoji);
        msgEmbed2.react(cse176Emoji);
        msgEmbed2.react(cse177Emoji);
        msgEmbed2.react(cse178Emoji);
        msgEmbed2.react(cse179Emoji);
        msgEmbed2.react(cse185Emoji);

        let msgEmbed3 = await classes.send(embed3);

        msgEmbed3.react(engr057Emoji);
        msgEmbed3.react(engr120Emoji);
        msgEmbed3.react(engr151Emoji);
        msgEmbed3.react(engr155Emoji);
        msgEmbed3.react(engr170Emoji);
        msgEmbed3.react(engr180Emoji);

        cayde.on("messageReactionAdd", async (reaction, user) =>{
            if(reaction.message.partial && reaction.message.channel.id == classes){
                await reaction.message.fetch();
            }
            if(reaction.partial && reaction.message.channel.id == classes){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }

            const classAdd = await reaction.message.guild.members.cache.get(user.id).roles;
            if(reaction.message.channel.id == classes){
                if(reaction.emoji.name === math021Emoji){
                    classAdd.add(math021);
                    console.log("-\n" + user.username + " added math021");
                    save += "-\n" + user.username + " added math021 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math022Emoji){
                    classAdd.add(math022);
                    console.log("-\n" + user.username + " added math022");
                    save += "-\n" + user.username + " added math022 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math023Emoji){
                    classAdd.add(math023);
                    console.log("-\n" + user.username + " added math023");
                    save += "-\n" + user.username + " added math023 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math024Emoji){
                    classAdd.add(math024);
                    console.log("-\n" + user.username + " added math024");
                    save += "-\n" + user.username + " added math024 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math032Emoji){
                    classAdd.add(math032);
                    console.log("-\n" + user.username + " added math032");
                    save += "-\n" + user.username + " added math032 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === math131Emoji){
                    classAdd.add(math131);
                    console.log("-\n" + user.username + " added math131");
                    save += "-\n" + user.username + " added math131 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math141Emoji){
                    classAdd.add(math141);
                    console.log("-\n" + user.username + " added math141");
                    save += "-\n" + user.username + " added math141 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === phys008Emoji){
                    classAdd.add(phys008);
                    console.log("-\n" + user.username + " added phys008");
                    save += "-\n" + user.username + " added phys008 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === phys009Emoji){
                    classAdd.add(phys009);
                    console.log("-\n" + user.username + " added phys009");
                    save += "-\n" + user.username + " added phys009 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === engr065Emoji){
                    classAdd.add(engr065);
                    console.log("-\n" + user.username + " added engr065");
                    save += "-\n" + user.username + " added engr065 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr191Emoji){
                    classAdd.add(engr191);
                    console.log("-\n" + user.username + " added engr191");
                    save += "-\n" + user.username + " added engr191 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === cse005Emoji){
                    classAdd.add(cse005);
                    console.log("-\n" + user.username + " added cse005");
                    save += "-\n" + user.username + " added cse005 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse015Emoji){
                    classAdd.add(cse015);
                    console.log("-\n" + user.username + " added cse015");
                    save += "-\n" + user.username + " added cse015 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse019Emoji){
                    classAdd.add(cse019);
                    console.log("-\n" + user.username + " added cse019");
                    save += "-\n" + user.username + " added cse019 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse022Emoji){
                    classAdd.add(cse022);
                    console.log("-\n" + user.username + " added cse022");
                    save += "-\n" + user.username + " added cse022 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse024Emoji){
                    classAdd.add(cse024);
                    console.log("-\n" + user.username + " added cse024");
                    save += "-\n" + user.username + " added cse024 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse030Emoji){
                    classAdd.add(cse030);
                    console.log("-\n" + user.username + " added cse030");
                    save += "-\n" + user.username + " added cse030 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse031Emoji){
                    classAdd.add(cse031);
                    console.log("-\n" + user.username + " added cse031");
                    save += "-\n" + user.username + " added cse031 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse100Emoji){
                    classAdd.add(cse100);
                    console.log("-\n" + user.username + " added cse100");
                    save += "-\n" + user.username + " added cse100 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse120Emoji){
                    classAdd.add(cse120);
                    console.log("-\n" + user.username + " added cse120");
                    save += "-\n" + user.username + " added cse120 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === cse106Emoji){
                    classAdd.add(cse106);
                    console.log("-\n" + user.username + " added cse106");
                    save += "-\n" + user.username + " added cse106 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse107Emoji){
                    classAdd.add(cse107);
                    console.log("-\n" + user.username + " added cse107");
                    save += "-\n" + user.username + " added cse107 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse111Emoji){
                    classAdd.add(cse111);
                    console.log("-\n" + user.username + " added cse111");
                    save += "-\n" + user.username + " added cse111 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse140Emoji){
                    classAdd.add(cse140);
                    console.log("-\n" + user.username + " added cse140");
                    save += "-\n" + user.username + " added cse140 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse150Emoji){
                    classAdd.add(cse150);
                    console.log("-\n" + user.username + " added cse150");
                    save += "-\n" + user.username + " added cse150 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse155Emoji){
                    classAdd.add(cse155);
                    console.log("-\n" + user.username + " added cse155");
                    save += "-\n" + user.username + " added cse155 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse160Emoji){
                    classAdd.add(cse160);
                    console.log("-\n" + user.username + " added cse160");
                    save += "-\n" + user.username + " added cse160 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse162Emoji){
                    classAdd.add(cse162);
                    console.log("-\n" + user.username + " added cse162");
                    save += "-\n" + user.username + " added cse162 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse165Emoji){
                    classAdd.add(cse165);
                    console.log("-\n" + user.username + " added cse165");
                    save += "-\n" + user.username + " added cse165 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse168Emoji){
                    classAdd.add(cse168);
                    console.log("-\n" + user.username + " added cse168");
                    save += "-\n" + user.username + " added cse168 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse170Emoji){
                    classAdd.add(cse170);
                    console.log("-\n" + user.username + " added cse170");
                    save += "-\n" + user.username + " added cse170 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse171Emoji){
                    classAdd.add(cse171);
                    console.log("-\n" + user.username + " added cse171");
                    save += "-\n" + user.username + " added cse171 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse173Emoji){
                    classAdd.add(cse173);
                    console.log("-\n" + user.username + " added cse173");
                    save += "-\n" + user.username + " added cse173 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse175Emoji){
                    classAdd.add(cse175);
                    console.log("-\n" + user.username + " added cse175");
                    save += "-\n" + user.username + " added cse175 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse176Emoji){
                    classAdd.add(cse176);
                    console.log("-\n" + user.username + " added cse176");
                    save += "-\n" + user.username + " added cse176 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse177Emoji){
                    classAdd.add(cse177);
                    console.log("-\n" + user.username + " added cse177");
                    save += "-\n" + user.username + " added cse177 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse178Emoji){
                    classAdd.add(cse178);
                    console.log("-\n" + user.username + " added cse178");
                    save += "-\n" + user.username + " added cse178 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse179Emoji){
                    classAdd.add(cse179);
                    console.log("-\n" + user.username + " added cse179");
                    save += "-\n" + user.username + " added cse179 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse185Emoji){
                    classAdd.add(cse185);
                    console.log("-\n" + user.username + " added cse185");
                    save += "-\n" + user.username + " added cse185 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === engr057Emoji){
                    classAdd.add(engr057);
                    console.log("-\n" + user.username + " added engr057");
                    save += "-\n" + user.username + " added engr057 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr120Emoji){
                    classAdd.add(engr120);
                    console.log("-\n" + user.username + " added engr120");
                    save += "-\n" + user.username + " added engr120 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr151Emoji){
                    classAdd.add(engr151);
                    console.log("-\n" + user.username + " added engr151");
                    save += "-\n" + user.username + " added engr151 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr155Emoji){
                    classAdd.add(engr155);
                    console.log("-\n" + user.username + " added engr155");
                    save += "-\n" + user.username + " added engr155 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr170Emoji){
                    classAdd.add(engr170);
                    console.log("-\n" + user.username + " added engr170");
                    save += "-\n" + user.username + " added engr170 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr180Emoji){
                    classAdd.add(engr180);
                    console.log("-\n" + user.username + " added engr180");
                    save += "-\n" + user.username + " added engr180 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
            }
            else{
                return;
            }
        });

        cayde.on("messageReactionRemove", async (reaction, user) =>{
            if(reaction.message.partial && reaction.message.channel.id == classes){
                await reaction.message.fetch();
            }
            if(reaction.partial && reaction.message.channel.id == classes){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }

            const classRemove = await reaction.message.guild.members.cache.get(user.id).roles;
            if(reaction.message.channel.id == classes){
                if(reaction.emoji.name === math021Emoji){
                    classRemove.remove(math021);
                    console.log("-\n" + user.username + " removed math021");
                    save += "-\n" + user.username + " removed math021 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math022Emoji){
                    classRemove.remove(math022);
                    console.log("-\n" + user.username + " removed math022");
                    save += "-\n" + user.username + " removed math022 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math023Emoji){
                    classRemove.remove(math023);
                    console.log("-\n" + user.username + " removed math023");
                    save += "-\n" + user.username + " removed math023 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math024Emoji){
                    classRemove.remove(math024);
                    console.log("-\n" + user.username + " removed math024");
                    save += "-\n" + user.username + " removed math024 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math032Emoji){
                    classRemove.remove(math032);
                    console.log("-\n" + user.username + " removed math032");
                    save += "-\n" + user.username + " removed math032 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === math131Emoji){
                    classRemove.remove(math131);
                    console.log("-\n" + user.username + " removed math131");
                    save += "-\n" + user.username + " removed math131 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === math141Emoji){
                    classRemove.remove(math141);
                    console.log("-\n" + user.username + " removed math141");
                    save += "-\n" + user.username + " removed math141 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === phys008Emoji){
                    classRemove.remove(phys008);
                    console.log("-\n" + user.username + " removed phys008");
                    save += "-\n" + user.username + " removed phys008 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === phys009Emoji){
                    classRemove.remove(phys009);
                    console.log("-\n" + user.username + " removed phys009");
                    save += "-\n" + user.username + " removed phys009 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === engr065Emoji){
                    classRemove.remove(engr065);
                    console.log("-\n" + user.username + " removed engr065");
                    save += "-\n" + user.username + " removed engr065 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr191Emoji){
                    classRemove.remove(engr191);
                    console.log("-\n" + user.username + " removed engr191");
                    save += "-\n" + user.username + " removed engr191 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === cse005Emoji){
                    classRemove.remove(cse005);
                    console.log("-\n" + user.username + " removed cse005");
                    save += "-\n" + user.username + " removed cse005 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse015Emoji){
                    classRemove.remove(cse015);
                    console.log("-\n" + user.username + " removed cse015");
                    save += "-\n" + user.username + " removed cse015 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse019Emoji){
                    classRemove.remove(cse019);
                    console.log("-\n" + user.username + " removed cse019");
                    save += "-\n" + user.username + " removed cse019 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse022Emoji){
                    classRemove.remove(cse022);
                    console.log("-\n" + user.username + " removed cse022");
                    save += "-\n" + user.username + " removed cse022 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse024Emoji){
                    classRemove.remove(cse024);
                    console.log("-\n" + user.username + " removed cse024");
                    save += "-\n" + user.username + " removed cse024 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse030Emoji){
                    classRemove.remove(cse030);
                    console.log("-\n" + user.username + " removed cse030");
                    save += "-\n" + user.username + " removed cse030 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse031Emoji){
                    classRemove.remove(cse031);
                    console.log("-\n" + user.username + " removed cse031");
                    save += "-\n" + user.username + " removed cse031 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse100Emoji){
                    classRemove.remove(cse100);
                    console.log("-\n" + user.username + " removed cse100");
                    save += "-\n" + user.username + " removed cse100 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse120Emoji){
                    classRemove.remove(cse120);
                    console.log("-\n" + user.username + " removed cse120");
                    save += "-\n" + user.username + " removed cse120 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                
                if(reaction.emoji.name === cse106Emoji){
                    classRemove.remove(cse106);
                    console.log("-\n" + user.username + " removed cse106");
                    save += "-\n" + user.username + " removed cse106 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse107Emoji){
                    classRemove.remove(cse107);
                    console.log("-\n" + user.username + " removed cse107");
                    save += "-\n" + user.username + " removed cse107 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse111Emoji){
                    classRemove.remove(cse111);
                    console.log("-\n" + user.username + " removed cse111");
                    save += "-\n" + user.username + " removed cse111 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse140Emoji){
                    classRemove.remove(cse140);
                    console.log("-\n" + user.username + " removed cse140");
                    save += "-\n" + user.username + " removed cse140 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse150Emoji){
                    classRemove.remove(cse150);
                    console.log("-\n" + user.username + " removed cse150");
                    save += "-\n" + user.username + " removed cse150 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse155Emoji){
                    classRemove.remove(cse155);
                    console.log("-\n" + user.username + " removed cse155");
                    save += "-\n" + user.username + " removed cse155 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse160Emoji){
                    classRemove.remove(cse160);
                    console.log("-\n" + user.username + " removed cse160");
                    save += "-\n" + user.username + " removed cse160 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse162Emoji){
                    classRemove.remove(cse162);
                    console.log("-\n" + user.username + " removed cse162");
                    save += "-\n" + user.username + " removed cse162 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse165Emoji){
                    classRemove.remove(cse165);
                    console.log("-\n" + user.username + " removed cse165");
                    save += "-\n" + user.username + " removed cse165 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse168Emoji){
                    classRemove.remove(cse168);
                    console.log("-\n" + user.username + " removed cse168");
                    save += "-\n" + user.username + " removed cse168 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse170Emoji){
                    classRemove.remove(cse170);
                    console.log("-\n" + user.username + " removed cse170");
                    save += "-\n" + user.username + " removed cse170 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse171Emoji){
                    classRemove.remove(cse171);
                    console.log("-\n" + user.username + " removed cse171");
                    save += "-\n" + user.username + " removed cse171 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse173Emoji){
                    classRemove.remove(cse173);
                    console.log("-\n" + user.username + " removed cse173");
                    save += "-\n" + user.username + " removed cse173 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse175Emoji){
                    classRemove.remove(cse175);
                    console.log("-\n" + user.username + " removed cse175");
                    save += "-\n" + user.username + " removed cse175 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse176Emoji){
                    classRemove.remove(cse176);
                    console.log("-\n" + user.username + " removed cse176");
                    save += "-\n" + user.username + " removed cse176 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse177Emoji){
                    classRemove.remove(cse177);
                    console.log("-\n" + user.username + " removed cse177");
                    save += "-\n" + user.username + " removed cse177 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse178Emoji){
                    classRemove.remove(cse178);
                    console.log("-\n" + user.username + " removed cse178");
                    save += "-\n" + user.username + " removed cse178 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse179Emoji){
                    classRemove.remove(cse179);
                    console.log("-\n" + user.username + " removed cse179");
                    save += "-\n" + user.username + " removed cse179 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === cse185Emoji){
                    classRemove.remove(cse185);
                    console.log("-\n" + user.username + " removed cse185");
                    save += "-\n" + user.username + " removed cse185 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }

                if(reaction.emoji.name === engr057Emoji){
                    classRemove.remove(engr057);
                    console.log("-\n" + user.username + " removed engr057");
                    save += "-\n" + user.username + " removed engr057 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr120Emoji){
                    classRemove.remove(engr120);
                    console.log("-\n" + user.username + " removed engr120");
                    save += "-\n" + user.username + " removed engr120 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr151Emoji){
                    classRemove.remove(engr151);
                    console.log("-\n" + user.username + " removed engr151");
                    save += "-\n" + user.username + " removed engr151 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr155Emoji){
                    classRemove.remove(engr155);
                    console.log("-\n" + user.username + " removed engr155");
                    save += "-\n" + user.username + " removed engr155 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr170Emoji){
                    classRemove.remove(engr170);
                    console.log("-\n" + user.username + " removed engr170");
                    save += "-\n" + user.username + " removed engr170 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
                if(reaction.emoji.name === engr180Emoji){
                    classRemove.remove(engr180);
                    console.log("-\n" + user.username + " removed engr180");
                    save += "-\n" + user.username + " removed engr180 " + time() + "\n";
                    saveToFile(fs, save, filepath);
                    return;
                }
            }
            else{
                return;
            }
        });
    }
}

function saveToFile(fs, save, filepath){
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