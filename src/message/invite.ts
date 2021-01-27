import { Message } from "discord.js"

export function invite(message: Message): void {
  if (message.author.bot) {
    return
  } else {
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=792416136318287882&permissions=8&scope=bot");
  }
}
