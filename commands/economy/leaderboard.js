module.exports = {
	name: "leaderboard",
	type: 'interaction',
	prototype: 'slash',
	code: `
	$interactionReply[;{newEmbed:{description:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userLeaderboard[$guildID;blackhole;asc;-{top}-︱{tag} — {value}];-1-;🥇];-2-;🥈];-3-;🥉];-4-;4];-5-;5];-6-;6];-7-;7];-8-;8];-9-;9];-10-;10]}{color:$getVar[redHex]}}]
	`
}