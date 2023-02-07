const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    port: env.PORT || 8081,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};