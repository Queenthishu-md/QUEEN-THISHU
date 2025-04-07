const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~3F8gzTKR#IW8dR79jcNsyv0frIALblbftx6_bJDiMyD7yh7tnAQQ",
  MONGODB: process.env.MONGODB || "mongodb+srv://queenthishu:s0rb2Eirgl24YY0v@cluster0.bzmsfob.mongodb.net/",
  OWNER_NUM: process.env.OWNER_NUM || "94761480834",
};
