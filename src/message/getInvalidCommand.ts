import { Message } from "discord.js"

export function getInvalidCommand(message: Message): void {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("Xacti doesn't have the command you typed.");
  }
}
