import { readdirSync } from 'fs'
import { Message } from "discord.js"
import { CommandObject } from './types/xacti'

import { setup } from "./setup"
import { prefix } from './env'

const client = setup()

const commands = new Map<string, CommandObject>()

readdirSync(`${__dirname}/commands`)
  .filter(file => file.endsWith('.ts'))
  .flatMap(file => {
    const command = require(`./commands/${file}`)
    commands.set(command.default.name, command.default)
  })

client.on('message', async message => {
  if (message.author.bot) {
    return
  }
  if (!message.content.startsWith(prefix)) {
    return
  }
  const arg = message.content.slice(prefix.length + 1)
  const commandName = arg.toLowerCase()
  const command = commands.get(commandName)

  command?.execute(message)
})
