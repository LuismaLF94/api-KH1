import mongoose from 'mongoose';

export default function(config){
    mongoose.connect(config.url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
        
    });

};