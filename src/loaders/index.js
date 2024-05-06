import expressLoader from './express-loader.js';
import mongodbLoaders from './mongodb-loaders.js';

export function init(server, config){
    expressLoader(server);
    mongodbLoaders(config.db);
}
