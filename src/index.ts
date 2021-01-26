import {Message} from "discord.js"

import {setup} from "./setup"
import { handleMessage } from "./message";

const client = setup()

client.on("message", async (message:Message):Promise<void> => {
    handleMessage(message)
})
