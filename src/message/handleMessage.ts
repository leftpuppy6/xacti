import {Message} from "discord.js"

import {help} from "./help"
import {prefix} from "../env"

export function handleMessage(message:Message):void {
  if(message.content === `${prefix} help`) {
    help(message)
  }
}