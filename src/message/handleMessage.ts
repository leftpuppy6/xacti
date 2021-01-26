import {Message} from "discord.js"

import {help} from "./help"
import {createInvite} from "./invite"
import {sendError} from "./sendError"
import {prefix} from "../env"

export function handleMessage(message:Message):void {
  if (message.content === `${prefix} help`) {
    help(message)
  } else if (message.content === `${prefix} invite`) {
    createInvite(message)
  }
}