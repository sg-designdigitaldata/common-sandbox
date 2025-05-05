const { defineConfig } = require('@vue/cli-service')
const path = require('path');
// vue.config.js
module.exports = {
  //...
  devServer: {
    
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 8080,        // Codespaces forwards port 8080 by default
    allowedHosts: 'all', // Allow any host (important for Codespaces' URL)
    client: {
      webSocketURL: 'auto://0.0.0.0/ws', // Enable auto websocket config
    },
    compress: true,
    allowedHosts: 'all',
  }
};



