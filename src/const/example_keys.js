const keys = {
  production: {
    dbApiHost: '',
    dbApiAuth: '',
    paypal: {
      clientId: '',
      secret: ''
    }
  },
  development: {
    dbApiHost: '',
    dbApiAuth: '',
    paypal: {
      clientId: '',
      secret: ''
    }
  }
};

module.exports.get = () => {
  if (process.env.NODE_ENV == 'production')
    return keys.production;
  else
    return keys.development;
}
