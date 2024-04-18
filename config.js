const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="nathara,colombo,Sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IKZ1RdE9UC5CHI27MFsX0G";
global.website=process.env.GURL || "https://chat.whatsapp.com/IKZ1RdE9UC5CHI27MFsX0G" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94772108460" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94772108460";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772108460";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_28_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkQk8xNHRRWlB0ZTRUd2F2N3E5R0VOZ083MExERzJMZU5Qd1NhbVdYL0xFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1NElxc1dSU1JBT2U5aWFFelNOZzdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlYmY0N2UyLTc1MWEtNGU0My1iNDI4LWJhMjM2NzIxNjcyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICA4OSxcbiAgICAgIDQ1LFxuICAgICAgMTYzLFxuICAgICAgMTQ0LFxuICAgICAgMTgwLFxuICAgICAgNjQsXG4gICAgICA1NyxcbiAgICAgIDIzMSxcbiAgICAgIDIyNCxcbiAgICAgIDI5LFxuICAgICAgNDUsXG4gICAgICAxNTgsXG4gICAgICA5MSxcbiAgICAgIDIwNyxcbiAgICAgIDEzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE2NixcbiAgICAgIDIxMixcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyMjcsXG4gICAgICAyMjQsXG4gICAgICA4NSxcbiAgICAgIDE2MSxcbiAgICAgIDQ0LFxuICAgICAgNTYsXG4gICAgICA4MixcbiAgICAgIDIxNyxcbiAgICAgIDEyMyxcbiAgICAgIDE4MSxcbiAgICAgIDE5OSxcbiAgICAgIDE2NyxcbiAgICAgIDgwLFxuICAgICAgNjUsXG4gICAgICA3NCxcbiAgICAgIDEyLFxuICAgICAgMTMzLFxuICAgICAgMjEsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqcHdaTUVFUCsvaExFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN3Q0ZjJvMTAwOGY5K21KRWRqeit6YkthOWI0cTdFK1FiNyt4N0x6NHFUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDczFsTkV4YkhyVktKWmJFNVlrTS9CTmR6Ukttd3dURUNXdk5SZWIvZnpHMzh2NXBndDBpc3NyWkc4djhENW5BSjF1S29vSy9sQ0E3NHFVRUlSY1NBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmOHZIQVl1b0J6VXp3V2FQeTBGaTN3TS85VGt1cHluQ0pBS2FwM3QwSlpJYTk1VFVXR05nWUU4QmZmUVN1MTcyRnRYUW1INXR5SGd0OGJSYjdyT2dCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ2MDc1MTU4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzEyOTczNjgzOTE5Mjc6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3Rhw6tsIERlcmlzbcOp8J+OufCfjrlcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ2MDc1MTU4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM0NDY5MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFbmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVuYS5qc29uIjogIntcImtleURhdGFcIjpcInpndEFNZzFSMytBUHZXV1N2R0IyN2tlZ0ZFbW9MN0ozTi9CWXBVKzF3d009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExNDY2NjE2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEzNDQ2OTE4MzcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©KUSHAN²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DARK SHAN",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DARK SHAN YT",
  ownername:process.env.OWNER_NAME|| "KUSHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
