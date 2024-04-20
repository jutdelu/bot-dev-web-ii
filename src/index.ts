import TelegramBot from "node-telegram-bot-api";
import { controller } from "./controller";

declare var email: any
require('dotenv/config');

const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error('BOT_TOKEN não encontrado.');

const bot = new TelegramBot(token, {polling: true});

const msgData = (msg: TelegramBot.Message) => {
    const [chatId, telegramId, text, name] = [msg.chat.id, msg.from?.id.toString(), msg.text, `${msg.from?.first_name} ${msg.from?.last_name}`];
    return {
        telegramId,
        text,
        name,
        async SendMessage(msgText: string): Promise<void> {
            await bot.sendMessage(chatId, msgText);
        }  
    }
}

//// Matches "/echo [whatever]"
//bot.onText(/\/echo (.+)/, (msg, match) => {
//    // 'msg' is the received Message from Telegram
//    // 'match' is the result of executing the regexp above on the text content
//    // of the message
//  
//    const chatId = msg.chat.id;
//    const resp = match[1]; // the captured "whatever"
//  
//    // send back the matched "whatever" to the chat
//    bot.sendMessage(chatId, resp);
//  });
  
  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', async (msg) => {
    const {telegramId, name} = msgData(msg);
    if (telegramId) {
        await controller.registerUser(telegramId, name);
    }

  });