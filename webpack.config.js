const path = require('path');

module.exports = {
  entry: {
	'HOME' : './javascript/HOME.js',
	'DESIGN' : './javascript/DESIGN.js',
	'DEVELOPMENT' : './javascript/DEVELOPMENT.js',
	'LANGUAGES' : './javascript/LANGUAGES.js',
	'GAME' : './javascript/GAME.js',
	'IT' : './javascript/IT.js',
	'ACADEMICS' : './javascript/ACADEMICS.js',
	'CONTACT' : './javascript/CONTACT.js',
	'ABOUT' : './javascript/ABOUT.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};