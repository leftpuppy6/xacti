import { Message } from "discord.js"

export function help(message: Message): void {
  message.channel.send("help")
}
