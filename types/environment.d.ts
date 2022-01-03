declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EMAIL_API_KEY: string;
            YOUTUBE_API_KEY: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }
}

export {}