import Discord, { Message } from 'discord.js';
const client = new Discord.Client();

client.login("NzkyNDE2MTM2MzE4Mjg3ODgy.X-dZCQ.NoISVTuQwsTu5P5HxlfqRJ84khU");

client.on('ready',()=>{
	if(client.user) {
		console.log(`${client.user.username}でログインしています。`)
	} else {
		throw new Error('client is not defined.');
	}
})

let id = "<@339754401566818314>";

client.on('message',async (msg)=>{
    if(msg.content === 'a'){
				msg.channel.send(id)
            }
    if(msg.content === 'woods'){
				msg.channel.send('', {files:[`${process.cwd()}/img/WOODS.jpg`]})
    }
    if(msg.content === 'shoreline'){
                msg.channel.send('', {files:[`${process.cwd()}/img/Shoreline.jpg`]})
                msg.channel.send('', {files:[`${process.cwd()}/img/resort.png`]})
    }
    if(msg.content === 'i'){
				msg.channel.send('i',{tts:true})
    }
    if(msg.content.includes("*")) {
        let str = "*"
        for(let i = 0; i < 100; i=(i+1)|0) {
            str += " *"
        }
        setTimeout(() => {
          msg.channel.send(str, { tts: true });
          msg.channel.send(id,{tts:true})
        },1000)
    }
});

client.on('message', (msg)=>{
    if(msg.content.startsWith('aa')){
        msg.delete();
        msg.channel.send(msg.content.slice(5,msg.content.length));
    }
});