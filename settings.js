

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/mood.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//mood menu video
global.vv = './XeonMedia/mood.mp4'
global.vv1 = './XeonMedia/mood1.mp4'
global.vv2 = './XeonMedia/mood2.mp4'
global.vv3 = './XeonMedia/mood3.mp4'
global.vv4 = './XeonMedia/mood4.mp4'
global.vv5 = './XeonMedia/mood5.mp4'
global.vv6 = './XeonMedia/mood6.mp4'

//owmner v card
global.vcardowner = ['94768553870'] //ur owner number
global.ownername = "MOOD Bot.Inc" //ur owner name
global.ytname = "YT: MOOD" //ur yt chanel name
global.socialm = "GitHub: MOOD" //ur github or insta name
global.location = "srilanka, srilanka, srilanka" //ur location

//bot bomdy 
global.owner = ['94768553870']
global.ownertag = '94768553870' //ur tag number
global.botname = 'MOOD Bot.Inc' //ur bot name
global.linkz = "https://youtu.be/mood" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/mood" //ur website to be displayed
global.websitex2 = "https://www.instagram.com/anolronex" //ur website to be displayed2
global.botscript = 'https://github.com/Mood-0/NgrokRDP' //script link
global.reactmoji = "😜" //ur menu react emoji
global.reactmoji2 = "🙄" //ur menu react emoji2
global.themeemoji = "*⪼*" //ur theme emoji
global.packname = "MOOD Bot.Inc" //ur sticker watermark packname
global.author = "MOOD Bot.Inc" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/mood.png") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/mood.png") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/mood.png") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/mood.png") //ur thumb pic
global.mood = fs.readFileSync("./XeonMedia/mood.mp4")
//damtabase
global.premium = ['94768553870'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/moods.png')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
