'use babel';

const buildCommand = require('./static/buildCommand.js');
const hostApps = require('./static/hostApps.js');

export default {
	activate(state) {
		const atomCommands = {};
		hostApps.forEach(hostApp => {
			atomCommands[`adobe-script-runner:${hostApp.appName}`] = () => buildCommand(hostApp);
		});

		atom.commands.add('atom-workspace', atomCommands);
	}
};