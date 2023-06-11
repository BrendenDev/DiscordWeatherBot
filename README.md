#### Updating the bot
Be sure to node deploy-commands.js to update commands to the server. Be aware, this is for my test server, and does not affect servers the bot is in globally

You can implement global deployment with this snippet: 
```js
await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);
```