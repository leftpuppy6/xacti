import Discord, { Message } from 'discord.js';
const client = new Discord.Client();

client.login('NzkyNDE2MTM2MzE4Mjg3ODgy.X-dZCQ.Ipes1wVu5OA8tREHj4RQUbErK_U')

client.on('ready',()=>{
	if(client.user) {
		console.log(`${client.user.username}でログインしています。`)
	} else {
		throw new Error('client is not defined.');
	}
})

client.on('message',async (msg)=>{
    if(msg.content === 'a'){
				msg.channel.send('HI', {files:[`${process.cwd()}/img/doggydogg.jpg`]})
    }
    if(msg.content === 'woods'){
				msg.channel.send('', {files:[`${process.cwd()}/img/WOODS.jpg`]})
    }
    if(msg.content === 'shoreline'){
                msg.channel.send('', {files:[`${process.cwd()}/img/Shoreline.jpg`]})
                msg.channel.send('', {files:[`${process.cwd()}/img/resort.png`]})
    }
});

client.on('message', (msg)=>{
    if(msg.content.startsWith('aa')){
        msg.delete();
        msg.channel.send(msg.content.slice(5,msg.content.length));
    }
});