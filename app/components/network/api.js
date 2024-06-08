import { Platform } from "react-native";

export const Api = () => {
    const platform = Platform.OS;
    // const serverHost = 'http://192.168.43.63:8000';
    const serverHost = 'http://172.20.10.2:8000';
    // const serverHost = 'http://192.168.0.4:8000';
    // const serverHost = 'http://192.168.0.3:8000';
    const clientHost = 'http://localhost:8081';

    // var serverHost = platform == 'web' ? '' : `${host}`;

    return { serverHost, clientHost }
}
