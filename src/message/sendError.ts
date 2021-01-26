import {Message} from "discord.js"

export function sendError(message:Message):void {
  if (message.author.bot) {
    return;
  } else {
    message.channel.send("xacti doesn't have the command you typed.");
  }
}