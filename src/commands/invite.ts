import { Message } from "discord.js";

export = {
  name: "invite",
  description: "Sends an invitation link of xacti.",
  execute(message: Message) {
    message.channel.send(
      "https://discord.com/api/oauth2/authorize?client_id=792416136318287882&permissions=8&scope=bot",
    );
  },
};
