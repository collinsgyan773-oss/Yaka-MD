
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "233559033516";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb://<db_username>:OWdh6owsFn5tPXwj@ac-swpbjsy-shard-00-00.ra4acrx.mongodb.net:27017,ac-swpbjsy-shard-00-01.ra4acrx.mongodb.net:27017,ac-swpbjsy-shard-00-02.ra4acrx.mongodb.net:27017/?ssl=true&replicaSet=atlas-xzn6vs-shard-0&authSource=admin&compressors=zlib"; // paste your own MongoDB url..
global.sessionId = process.env.SESSION_ID || "ghsbxjhskj63863ndndihemidhdjskne123778";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AQ.Ab8RN6I5HqRSkA-foM2O4b5IPpUl5YzwaxMVgKyiDQaBP4PbKw"; // paste Your own Api Key..
global.packname = process.env.PACKNAME || `👹𝕐𝕒𝕜𝕒ᵐᵈ`;
global.author = process.env.AUTHOR || "by: 𝖄𝖆𝖐𝖆𝖘𝖍𝖎";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

