"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
function handleLoginError(err) {
    console.error(err);
    throw new Error("Unfortunately, Login failed. This might be because of the Discord key.");
}
function login(client) {
    if (process.env.NODE_ENV !== "production") {
        client.login(process.env.DISCORD_BOT_DEV_KEY).catch(handleLoginError);
    }
    else {
        client.login(process.env.DISCORD_BOT_KEY).catch(handleLoginError);
    }
}
function setup() {
    const client = new discord_js_1.default.Client();
    login(client);
    client.on('ready', () => {
        if (client.user !== null) {
            console.log(`${client.user.username} is on.`);
        }
        else {
            throw new Error("The user is not found.");
        }
    });
    return client;
}
exports.setup = setup;
