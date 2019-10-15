import * as config from 'config';
import app from './app/app';

const server = {
    port: config.get('server.default.port'),
    name: config.get('server.default.name')
}

const api = app.listen(server.port, () => {
    console.log(`${server.name} is listening on port: ${server.port}`);
})