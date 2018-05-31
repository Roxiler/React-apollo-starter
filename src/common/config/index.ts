const obj = {
    API_SERVER_URL : process.env.REACT_APP_ENV === 'production' ? 'http://YOUR_PRODUCTION_SERVER_URL/' : 'http://localhost:5000/',
};

export default obj;