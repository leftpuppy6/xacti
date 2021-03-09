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
