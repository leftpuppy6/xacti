import Discord from "discord.js"

export function setup(): Discord.Client {
  const client = new Discord.Client()
  client.login(process.env.DISCORD_BOT_KEY).catch(err => {
    throw new Error("Login failed.")
  })
  client.on('ready', () => {
    if(client.user !== null) {
      console.log(`${client.user.username} is on.`)
    } else {
      throw new Error("The user is not found.")
    }
  })

  return client
}