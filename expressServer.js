const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','HOME.html')));
			this.app.get('/HOME', (req, res) => res.sendFile(path.join(__dirname,'html','HOME.html')));
			this.app.get('/HOME/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HOME.html')));
			this.app.get('/DESIGN', (req, res) => res.sendFile(path.join(__dirname,'html','DESIGN.html')));
			this.app.get('/DESIGN/:id', (req, res) => res.sendFile(path.join(__dirname,'html','DESIGN.html')));
			this.app.get('/DEVELOPMENT', (req, res) => res.sendFile(path.join(__dirname,'html','DEVELOPMENT.html')));
			this.app.get('/DEVELOPMENT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','DEVELOPMENT.html')));
			this.app.get('/LANGUAGES', (req, res) => res.sendFile(path.join(__dirname,'html','LANGUAGES.html')));
			this.app.get('/LANGUAGES/:id', (req, res) => res.sendFile(path.join(__dirname,'html','LANGUAGES.html')));
			this.app.get('/GAME', (req, res) => res.sendFile(path.join(__dirname,'html','GAME.html')));
			this.app.get('/GAME/:id', (req, res) => res.sendFile(path.join(__dirname,'html','GAME.html')));
			this.app.get('/IT', (req, res) => res.sendFile(path.join(__dirname,'html','IT.html')));
			this.app.get('/IT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','IT.html')));
			this.app.get('/ACADEMICS', (req, res) => res.sendFile(path.join(__dirname,'html','ACADEMICS.html')));
			this.app.get('/ACADEMICS/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ACADEMICS.html')));
			this.app.get('/CONTACT', (req, res) => res.sendFile(path.join(__dirname,'html','CONTACT.html')));
			this.app.get('/CONTACT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','CONTACT.html')));
			this.app.get('/ABOUT', (req, res) => res.sendFile(path.join(__dirname,'html','ABOUT.html')));
			this.app.get('/ABOUT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ABOUT.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;