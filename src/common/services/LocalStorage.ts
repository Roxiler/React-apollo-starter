import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';
const SECRET_KEY = 'my secret key';
 
const secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
        key = CryptoJS.SHA256(key, SECRET_KEY);
 
        return key.toString();
    },
    encrypt: function encrypt(data: any) {
        data = CryptoJS.AES.encrypt(data, SECRET_KEY);
 
        data = data.toString();
 
        return data;
    },
    decrypt: function decrypt(data: any) {
        try {
            data = CryptoJS.AES.decrypt(data, SECRET_KEY);
 
            return data.toString(CryptoJS.enc.Utf8);    
        } catch (error) {
            return '';
        }
    }
});

export default secureStorage;