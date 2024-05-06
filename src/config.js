import 'dotenv/config';

const config = {
    port: process.env.PORT || 8080,
    app: {
        secretKey:process.env.SECRET_KEY
    },
    db: {
        url: process.env.DB_URL
    }
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
