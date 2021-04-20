import {readdirSync} from "fs"
import {CommandObject} from "../types/xacti"

export function getCommands(): Map<string, CommandObject> {
    const commands = new Map<string, CommandObject>()

readdirSync(`${process.cwd()}/src/commands`)
  .filter(file => file.endsWith('.ts'))
  .flatMap(async file => {
    const command = await import(`../commands/${file}`)
    commands.set(command.name, command)
  })

  return commands
}
