const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `
*╭─〔 𝗤𝘶𝘦𝘦𝘯ₓ* ```THISHU``` *-𝗠𝗗 V1.0*
*╰──────────────*
𝙃𝙀𝙇𝙇𝙊𝙒...👋
𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴 𝙼𝚈 𝙱𝙾𝚈...🫂🙏
╭━━❰ 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ❱━━╮
┃ ◈.🖥️ Bot Name: 𝗤𝗨𝗘𝗘𝗡 ```THISHU```-𝗠𝗗 V1.0
┃ ◈. 🚀 Version: ```V1.0```
┃ ◈. 😈 Owner: Chamod Mihiranga
┃ ◈. 👤 User : ${pushname}
╰━━━━━━━━━━━━━━━━━╯
╭━━━❮❮ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃👻 ❯❯━━
┣ .ᴀʟʟɪᴠᴇ
┣ .ᴍᴇɴᴜ
╰━━━━━━━━━━━━━━━━━━━━━━
╭━━━❮❮❯❯━━━
┣ .restart
┣ .update
╰━━━━━━━━━━━━━━━━━━━━━━━
╭━━━━━━❰ ＯＷＮＥＲ 👑😈 ❱━━━━━━╮
┃ ◈. 😈 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺: ᴄʜᴀᴍᴏᴅ ᴍɪʜɪʀᴀɴɢᴀ (𝗞ιηg ᗪ乇_𝗩𝗜𝗟
━━━❮☎️❯━━━ 
┏ ◈.𝘊𝘰𝘯𝘵𝘢𝘤𝘵
┣ +94761480836
┣cmihiranga@gmail.com
╰━━━━━━━━━━━━━━━━━╯
> Qᴜᴇᴇɴ 𝗧𝗛𝗜𝗦𝗛𝗨-爪ᗪ 🧚‍♂️
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://ibb.co/mrKXJ2mL",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
