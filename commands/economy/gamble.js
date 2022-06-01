module.exports = {
  name: "gamble",
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionEdit[;$nonEscape[$if[$randomText[success;fail;fail;fail;success]==success;{newEmbed:
    {title:G-gambling 👉👈}
    {description:$customEmoji[kaeruNumbers] You've won $customEmoji[kaeruToken] **$numberSeparator[$slashOption[amount]] tokens!**}
    {field: **$random[0;100]%** win chance, amazing!:>>> Rolled \`$random[6;10]\`﹒$username[$authorID]
Rolled \`$random[1;5]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:$slashOption[amount] tokens claimed (｡ﾉωﾉ)}
  };{newEmbed:
    {title:uh, ごめんなさい...}
    {description:$customEmoji[kaeruNumbers] I take your $customEmoji[kaeruToken] **$numberSeparator[$slashOption[amount]] tokens...** (*´꒳\`*)}
    {field: **$random[0;100]%** win chance thou, but you lost..:>>> Rolled \`$random[1;5]\`﹒$username[$authorID]
Rolled \`$random[6;10]\`﹒$username[$clientID]}
    {color:$getVar[pinkHex]}
    {footer:-$slashOption[amount] tokens lost}
  }]]]
  $wait[100ms]
  $interactionEdit[$customEmoji[kaeruLoading] *rolling...*]
	$wait[200ms]
	$interactionEdit[$customEmoji[kaeruLoading] *rolling..*]
	$wait[200ms]
	$interactionReply[$customEmoji[kaeruLoading] *rolling.*]
	
  $setGlobalUserVar[token;$sum[$getGlobalUserVar[token];$if[$randomText[success;fail;fail;fail;success]==success;$slashOption[amount];-$slashOption[amount]]]]
	
  $onlyIf[$slashOption[amount]<=$getUserVar[token];{"content": "$nonEscape[$customEmoji[kaeruAlert]] You don't have enough __tokens__ $nonEscape[:(]","ephemeral": "true", "options": {"interaction": true}}]

  $onlyIf[$slashOption[amount]>0;{"content": "$nonEscape[ ehehe :) my smart cutie :*]","ephemeral": "true", "options": {"interaction": true}}]
  
  $cooldown[30s;{"content":"$nonEscape[$customEmoji[kaeruAlert] Uh  etto 👉👈 wait __%time-s%__","ephemeral" : true,"options" : {"interaction" : true}}]

  $log[— $userTag, used Gamble Slash Interaction :3
୨୧・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・┈┈・୨୧]
  `
}
