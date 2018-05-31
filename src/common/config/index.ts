const obj = {
    API_SERVER_URL : process.env.REACT_APP_ENV === 'production' ? 'http://52.168.122.114:5000/' : 'http://192.168.0.112:5000/',
};

export default obj;