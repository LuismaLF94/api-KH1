import bcrypt from 'bcrypt';
import { HttpStatusError } from 'common-errors';
import jwt from 'jsonwebtoken';

import config from '../config.js';

export function login(req, res, next){
    const { username, password } = req.body;

    //const user = findUser(username);
    const user = username === 'Luis' && {
        id: 1,
        username: 'Luis',
        password: '$2b$10$7YgXlR8YpgPckzFxTSaNoeUnwg5ZCrJVlmx45fGf5cFu4wAzGtFsm',
    }

    if(user){
        console.log(password, user.password);
        if(bcrypt.compareSync(password, user.password)){
            const userInfo = { id: user.id, name: user.name };
            const jwtConfig = { expiresIn: 1*60*60*24 };
            const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
            return res.send({token});
        }
    }

    throw new HttpStatusError(401, 'Invalid credentials');
}









