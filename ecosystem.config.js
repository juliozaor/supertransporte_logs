module.exports = {
  deploy : {
    production : {
      user : 'root',
      host : 'supertransporte_backend_logs_prod',
      ref  : 'origin/main',
      repo : 'https://github.com/juliozaor/supertransporte_logs.git',
      path : '/var/pesvsisi',
      'post-deploy': 'npm install && npm run build && cp .env build/.env && cd build && npm ci --production && pm2 restart archivos',
    }
  }
};
