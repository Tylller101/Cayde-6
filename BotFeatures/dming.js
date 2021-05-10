module.exports = {
    name: "dming", 
    description: "actions when dming the bot including games",
    async execute(msg, random){
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

            if(greeting === "help"){
                reply.send("");
            }
            else{
                msg.author.send("Sorry i do not know that command try using \"help\" ");
            }
        }
    }
}