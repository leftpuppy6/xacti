import {getCommands} from "./utils/getCommands"
import {CommandObject} from "./types/xacti"

import { setup } from "./setup"
import { prefix } from './env'

const client = setup()

client.on('message', async message => {
  // TODO Pack these return statements.
  if (/[가-힣]/u.test(message.content)) {
    message.channel.send("このサーバーは韓国語禁止です。\nKorean is NOT allowed in this server.")
    return
  } 
  if (message.author.bot) {
    return
  }
  if (!message.content.startsWith(prefix)) {
    return
  }

  const commands = await Promise.all(await getCommands())
  const commandName = message.content.slice(prefix.length + 1).toLowerCase()
  const command = commands.filter((command) => command.name === commandName)[0]

  command?.execute(message)
})
