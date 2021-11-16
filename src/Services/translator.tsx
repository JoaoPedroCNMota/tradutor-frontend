import api from "./api";

export const sendCodeToApi = (code : string) => api.post('/translate/codeToPseudocode', code)