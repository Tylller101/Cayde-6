module.exports = {
    name: "timeout", 
    description: "timeout users", 
    execute(msg, commandChannel, cayde){
        let filter = m => m.author.id === msg.author.id
        let botMsg = commandChannel.send("Who would you like to timeout");
        msg.channel.awaitMessages(filter, {max: 1, time: 5000, errors: ['time']})
            .then(message => {message = message.first()
                let member = client.users.find(message);
                
            }).catch(collected => {
                timeoutMsg = msg.channel.send("Timeout");
            });
            
    }
}