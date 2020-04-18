import 'reflect-metadata'
import express from 'express';
import config from './config'
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Users } from './entity/user';
import { UsersResolver } from './resolvers/user';

async function bootstrap() {
    await createConnection({
        type: "mongodb",
        host: config.mongo.host,
        port: config.mongo.port,
        database: config.mongo.database,
        entities: [Users],
        synchronize: true
    });

    const app = express();
    const server = new ApolloServer({ 
        schema: await buildSchema({
            validate: false,
            resolvers: [UsersResolver]
        }),
        context: ({req, res}) => ({req, res})
    });

    server.applyMiddleware({ app });

    app.listen({ port: config.server.port }, () => console.log('Now browse to http://localhost:' + config.server.port + server.graphqlPath))
}

bootstrap()