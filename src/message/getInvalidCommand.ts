import { Message } from "discord.js"

export function getInvalidCommand(message: Message): void {
  message.channel.send("Xacti doesn't have the command you typed.");
}
