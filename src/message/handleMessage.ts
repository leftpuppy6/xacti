import {Message} from "discord.js"

import {help} from "./help"
import {createInvite} from "./invite"
import {prefix} from "../env"

export function handleMessage(message:Message):void {
  switch (message.content) {
    case `${prefix} help`:
      help(message)
      break;
    case `${prefix} invite`:
      createInvite(message)
      break;
    default:
      message.channel.send("xacti doesn't have the command you typed.")
      break;
  }
}