import {Message} from "discord.js"

export function help(msg: Message) {
  msg.channel.send("help")
}