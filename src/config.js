import 'dotenv/config';

const config = {
    port: process.env.PORT || 8080,
    app: {
        secretKey:process.env.SECRET_KEY
    }
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
