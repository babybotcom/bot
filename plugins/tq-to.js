let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
โงใ *๐๐๐ฅ๐๐๐๐๐ก ๐๐๐๐ฃ๐ ๐จ ๐๐ค๐ง* ใ

- Allah SWT
- My parents
- All Friends
- All Contributors
- All Creator Bot
- Okta
- SaXia Team
- Adiwajshing
- Nurutomo
- BochilGaming
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/b413995afdd30d6abbc72.jpg', [`Dแดษดแดsษช`, '.donasi'],m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i

handler.register = true
export default handler