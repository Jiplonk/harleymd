const moment = require("moment-timezone");
const fs = require("fs");
const speed = require("performance-now");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

const timestamp = speed();
const latensi = speed() - timestamp

exports.allmenu = (ucapanWaktu, mundur, sender, prefix, jam, tanggal, runtime, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
    return`${ucapanWaktu} ${pushname} ✨

Hitung Mundur Hari Raya Idul Fitri
${mundur.data.result}

👑 Creator : ${setting.ownerName}
🤖 Bot Name : ${setting.botName}
✍ Prefix : ⟨ ${prefix} ⟩
🌎 Language : Javascript
🗄️ Lib : Baileys-Md
✉ Email : lyliachan45@gmail.com
💌 Email2 : lionsuzune99@gmail.com
⌚ Time : ${jam}
📆 Date : ${tanggal}
📶 Speed : ${latensi.toFixed(4)}
⏳ Runtime :
${runtime(process.uptime())}

*「 Info User 」*
✘ Name : ${pushname}
✘ Nomor : ${sender.split('@')[0]}
✘ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
✘ Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
✘ Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
✘ Balance : $${toCommas(getBalance(sender, balance))}

*「 Main Menu 」*
✄ cekprefix
✄ ${prefix}menu
✄ ${prefix}donasi
✄ ${prefix}rules
✄ ${prefix}owner
✄ ${prefix}speed
✄ ${prefix}runtime
✄ ${prefix}cekpremium
✄ ${prefix}listpremium
✄ ${prefix}fadly
✄ ${prefix}simi
✄ ${prefix}cekapikey

*「 Store Menu 」*
✄ ${prefix}list
✄ ${prefix}addlist
✄ ${prefix}dellist
✄ ${prefix}update

*「 Tools Menu 」*
✄ ${prefix}attp
✄ ${prefix}sticker
✄ ${prefix}toimg
✄ ${prefix}tovideo
✄ ${prefix}nulis

*「 Downloads Menu 」*
✄ ${prefix}play
✄ ${prefix}ytmp3
✄ ${prefix}ytmp4
✄ ${prefix}getmusic
✄ ${prefix}getvideo
✄ ${prefix}tiktok
✄ ${prefix}instagram
✄ ${prefix}facebook

*「 Search Menu 」*
✄ ${prefix}ytsearch
✄ ${prefix}lirik
✄ ${prefix}lirik2
✄ ${prefix}groupwa
✄ ${prefix}pinterest
✄ ${prefix}wikipedia
✄ ${prefix}nickff
✄ ${prefix}nickml
✄ ${prefix}nickpubg
✄ ${prefix}nickdomino
✄ ${prefix}nickcod
✄ ${prefix}nickaov
✄ ${prefix}nickpb

*「 Group Menu 」*
✄ ${prefix}welcome
✄ ${prefix}linkgc
✄ ${prefix}setppgc
✄ ${prefix}setnamegc
✄ ${prefix}setdesc
✄ ${prefix}group
✄ ${prefix}revoke
✄ ${prefix}hidetag
✄ ${prefix}add
✄ ${prefix}kick

*「 Fun Menu 」*
✄ ${prefix}suit
✄ ${prefix}slot
✄ ${prefix}tictactoe
✄ ${prefix}delttc
✄ ${prefix}tebakgambar
✄ ${prefix}apakah
✄ ${prefix}bisakah
✄ ${prefix}kapankah
✄ ${prefix}bagaimanakah
✄ ${prefix}rate
✄ ${prefix}gantengcek
✄ ${prefix}cantikcek
✄ ${prefix}sangecek
✄ ${prefix}gaycek
✄ ${prefix}lesbicek

*「 Balance Menu 」*
✄ ${prefix}limit
✄ ${prefix}balance
✄ ${prefix}transfer
✄ ${prefix}buylimit
✄ ${prefix}buyglimit
✄ ${prefix}topglobal
✄ ${prefix}toplocal

*「 Maker Menu 」*
✄ ${prefix}pornhub
✄ ${prefix}grafity-text
✄ ${prefix}grafity-text2
✄ ${prefix}logo-wolf
✄ ${prefix}logo-wolf2
✄ ${prefix}black-pink
✄ ${prefix}magma
✄ ${prefix}neon-light
✄ ${prefix}water-color
✄ ${prefix}larva

*「 Other Menu 」*
✄ ${prefix}ssweb
✄ ${prefix}kalkulator
✄ ${prefix}readmore

*「 Owners Menu 」*
✄ >
✄ x
✄ $
✄ ${prefix}join
✄ ${prefix}leave
✄ ${prefix}broadcast
✄ ${prefix}setpp
✄ ${prefix}exif
✄ ${prefix}addpremium
✄ ${prefix}delpremium

*「 Thanks To 」*
✄ X-None Team
✄ Fadly ID
✄ Rtwone
✄ Foxteam
✄ SashaChan
✄ Aqulzz
✄ Ramlan ID
✄ Penyedia Api & Module
✄ Adiwajshing/Baileys
`
}

exports.tos = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 085795586847 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}

exports.rules = (prefix) => {
    return`Syarat & Ketentuan *HarleyMd*

•  Harley bot  *Jangan Spam bot*
•  Harley bot *Jangan Call/Telepon*
•  Harley bot *Jangan Masukin bot! Syaratnya Harus Izin Ke Owner*
•  Harley bot *Apabila Ada Masalah Atau Fitur bot nya Silakan Beritahuan Ke Owner Saya*
•  Harley bot *Jika kmu Chat Owner Atau Sv Owner Jangan Ketik p Harus BeriSalam*
•  Harley bot *Jangan Ngejek bot*

• Grup Gc Harley-bot
Group Harley 1
https://bit.ly/3xtdwn3

_Created By : SashaSamiya_`
}
