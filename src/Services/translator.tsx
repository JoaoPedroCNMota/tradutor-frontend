import { Code } from "@material-ui/icons";
import api from "./api";

interface Code {
    data : string;
}

export const sendCode = (code : Code) => api.post<Code>('/translate', code)