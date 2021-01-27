import Discord, { Client } from "discord.js"

function handleLoginError(err: Error): void {
  throw new Error("Unfortunately, Login failed. This might be because of the Discord key.")
}

function login(client: Client): void {
  if (process.env.NODE_ENV !== "production") {
    client.login(process.env.DISCORD_BOT_DEV_KEY).catch(handleLoginError)
  } else {
    client.login(process.env.DISCORD_BOT_KEY).catch(handleLoginError)
  }
}

export function setup(): Discord.Client {
  const client = new Discord.Client()

  login(client)

  client.on('ready', (): void => {
    if (client.user !== null) {
      console.log(`${client.user.username} is on.`)
    } else {
      throw new Error("The user is not found.")
    }
  })

  return client
}
