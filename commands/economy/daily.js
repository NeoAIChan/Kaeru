module.exports = {
  name: "daily", 
  type: 'interaction', 
  prototype: 'slash',
  code: `
	
  $setUserVar[dailyMultiplier;$sum[$getUserVar[dailyMultiplier];1]]
	
  $setUserVar[token;$math[$getUserVar[token]+(100*$getUserVar[dailyMultiplier])]]
	
  $setGlobalUserVar[cube;$sum[$getGlobalUserVar[cube];1]]
	
  $interactionEdit[;{newEmbed:{title:$customEmoji[mnsBookmark] Signed-in successfully}{field:꒷꒦ received:➜ $customEmoji[mnsToken] × \`$abbreviate[$multi[1000;$getGlobalUserVar[dailyMultiplier]];1]\` Rubies 
➜ $customEmoji[mnsCube] × \`1\` IPack}{color:$getVar[invisibleHex]}{thumbnail:$authorAvatar}{footer:🝩 You can sign-in next day 🙌}}]
  
  $wait[$random[2500;3500]ms]
  $interactionEdit[100% ✱✱✱✱✱✱✱✱✱✱ 100%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[81;99]% ✱✱✱✱✲✲✱✱✱✱ $random[81;99]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[41;60]% ✱✱✱✲✲✲✲✱✱✱ $random[41;60]%]
  $wait[$random[1000;1500]ms]
  $interactionEdit[$random[21;40]% ✱✱✲✲✲✲✲✲✱✱ $random[21;40]%]
  $wait[$random[1000;1500]ms]

  $interactionReply[$random[1;20]% ✱✲✲✲✲✲✲✲✲✱ $random[1;20]%]

  $cooldown[24h;{"embeds":"{newEmbed:{description:$nonEscape[$customEmoji[git_alert] Not available at the moment~\\n>>> \\n**Available in: %time%**}{color:$getVar[gitHex]}{thumbnail:https://media.discordapp.net/attachments/987355726257201204/987402539899187250/Balksz22_20220617163459.png}","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[⊢ $userTag, used daily command.]
	`
}
