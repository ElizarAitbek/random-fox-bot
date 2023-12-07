const { bot } = require("../settings/bot");
const { getRandomFoxImage } = require("../api/getPhoto.js");

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Chillisten'дин ботуна welcome!`);
  bot.sendMessage(
    chatId,
    `/random_fox = деген команданы жаз дагы, ар кандай түлкүлөрдүн сүрөтүл ал`
  );
});

bot.onText(/\/random_fox/, async (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Бираз кое тур, кочуруп алайын суротту! 🚀✨");
  try {
    const foxImageUrl = await getRandomFoxImage();

    bot.sendPhoto(
      chatId,
      foxImageUrl,
      { caption: "мына сага 🦊" },
      function (err, data) {
        if (err) {
          console.error("Error sending photo:", err);
          bot.sendMessage(chatId, "Произошла ошибка при отправке фото.");
        } else {
          console.log("Photo sent:", data);
        }
      }
    );
    bot.sendMessage(
      chatId,
      "Кайра жазсан болот, башка эч нерсе кылганды билбейм 🤷🏻‍♂️"
    );
  } catch (error) {
    console.error("Error fetching fox image:", error);
    bot.sendMessage(chatId, "Произошла ошибка при получении изображения лисы.");
  }
});
