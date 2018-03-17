const packageName = 'adobe-script-runner';
const defaultSettings = atom.config.defaultSettings[packageName];

function getConfig(key) {
	return atom.config.get(`${packageName}.${key}`);
}

function update() {
	const userSettings = {};

	for (let propertyName in defaultSettings) {
		if (!defaultSettings.hasOwnProperty(propertyName)) continue;
		userSettings[propertyName] = getConfig(propertyName);
	}
                                 
	return userSettings;
}

module.exports.update = update;