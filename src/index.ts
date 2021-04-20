import { readdirSync } from 'fs'
import { CommandObject } from './types/xacti'

import { setup } from "./setup"
import { prefix } from './env'

const client = setup()

const commands = new Map<string, CommandObject>()

readdirSync(`${__dirname}/commands`)
  .filter(file => file.endsWith('.ts'))
  .flatMap(async file => {
    const command = await import(`./commands/${file}`)
    commands.set(command.name, command)
  })

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

  const commandName = message.content.slice(prefix.length + 1).toLowerCase()
  const command = commands.get(commandName)

  command?.execute(message)
})
