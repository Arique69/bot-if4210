const {Client, MessageAttachment} = require('discord.js');
const bot = new Client();
const token = 'NzAzMjQ5MzgyNjk4Mzg1NDE4.XrQOag.SkHlaI3QfuCrOqmPPPK6ySTKuiM';

const PREFIX = '$';


bot.on('ready', () =>{
    console.log('This BOT Online');
})

bot.on('message', message=>{

        let args = message.content.substring(PREFIX.length).split(" ");

        switch(args[0]){
            case 'yanto':
                const attachment = new MessageAttachment("./1.jpg");
                message.channel.send(attachment)
            break;
            case 'goblok':
                const attachment2 = new MessageAttachment("https://miro.medium.com/max/3804/1*AU9IikCSfcYw8VPirKCWBQ.jpeg");
                Message.channel.send(attachment);
            break;
        }
})

bot.login(token);
