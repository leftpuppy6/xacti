import {Message} from "discord.js"

export function help(message: Message):void {
  if(message.author.bot) {
    return 
  } else {
    message.channel.send("help")
  }
}