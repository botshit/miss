const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { return`        π΅ππ ππππΈππππ πΌππΉπ

β¨οΈππ΄π  ππΈ πΆππΏππΆπ΄π πΈπ πΊπππππ ππΈπ½πΈπΌππ π΄ π΅πΏππΎ
β¨οΈππ΄π πΏπΌπΊπ΄π πππΊπΈπΌππ π΄ π΅πΏππΎ 
β¨οΈππππΌπ΅πΌπ·π πΆπ»π΄ππ΄ ππ ππ π·π π΅ππ 
β¨οΈππ΄ππ΄ π·πππΌπ·π΄π πΈ π΅ππΊπ πΈππππ΄ πΈπ πΆππ πΆππ ππΈπ π·πππ
β¨οΈππΌππΌ ππππΈππππ  Wa.me/+5519999516507
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// info bot 
const bottt = (prefix) => {
return `
ππ΄ππ΄ πππ΄π π ππΈπ π΅ππ πΈππππ΄ ππ ππΈπ πΊππππ π·π ππ»π΄ππ

https://chat.whatsapp.com/J1ChP0au4pu0gLcFg8GiSP
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
β­ββββββγ *_α΄α΄Ι΄α΄κ±Ιͺ_* γ
β΄
ββ α΄α΄Κκ±α΄ : 08572709134555558924
ββ κ±α΄α΄‘α΄ΚΙͺα΄ : https://saweria.co/denisputra
β
β\`\`\`α΄α΄Κκ±α΄\`\`\`
β 5α΄ ΙͺΙ΄α΄ Ιͺα΄α΄ Κα΄α΄ α΄α΄ Ι’Κα΄α΄ κ±α΄Κα΄α΄α΄ 1 Κα΄Κα΄Ι΄
β¬
β°ββββββγ *_α΄Ι΄κ±Κα΄α΄_* γ
`
}
exports.donasi = donasi
// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*α΄α΄α΄? ${pushname2} ΚΙͺα΄Ιͺα΄ Κα΄ΚΙͺ ΙͺΙ΄Ιͺ Κα΄ΚΙͺκ±*\Ι΄*ΚΙͺα΄Ιͺα΄ α΄Ιͺ Κα΄κ±α΄α΄ κ±α΄α΄Ιͺα΄α΄ α΄α΄α΄ 12:00 α΄‘ΙͺΚ α΄α΄Ι΄Ι’α΄Κ α΄α΄Κα΄α΄*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount