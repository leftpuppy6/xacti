import {readdir} from "fs/promises"
import {CommandObject} from "../types/xacti"

export async function getCommands() {
    const commands = await readdir(`${__dirname}/../commands`).then(async (files) => {
        return files.flatMap(async (file) => {
          const command: CommandObject = await import(`../commands/${file}`)
          return command
        })
    })

    return commands
}
