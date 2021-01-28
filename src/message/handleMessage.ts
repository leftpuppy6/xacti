import { Message } from "discord.js"

import { commands } from "../commands"
import { help } from "./help"
import { invite } from "./invite"
import { getInvalidCommand } from "./getInvalidCommand";
import { prefix } from "../env"

export function handleMessage(message: Message): void {
  switch (message.content) {
    case `${prefix} ${commands.help}`:
      help(message)
      break;
    case `${prefix} ${commands.invite}`:
      invite(message)
      break;
    case `${prefix}`:
      const isInvalid = [...Object.keys(commands)].some((command) => {
        return message.content.slice(6) !== command
      })
      if (isInvalid) {
        getInvalidCommand(message)
        break
      }
      message.channel.send("Xacti needs a command. You can see the commands with `xacti help`")
      break;
    default:
      break;
  }
}
