import {getCommands} from "./getCommands"
import {readdir} from "fs/promises"

describe("getCommands", () => {
    it("pass", async () => {
      const commands = await Promise.all(await getCommands())
      const expected = await Promise.all(await readdir(`src/commands`).then(async (files) => {
        return files.flatMap(async (file) => {
          const command = await import(`../commands/${file}`)
          return command
        })
    }))
      expect(commands).toMatchObject(expected)
    })
})