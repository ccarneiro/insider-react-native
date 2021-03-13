import axios from 'axios';

// https://api.hgbrasil.com/weather?key=SUA-CHAVE&lat=-23.682&lon=-46.875

export const key = '60b0f0b4';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com',
});

export default api;
