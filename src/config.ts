export default {
    mongo: {
        host: process.env.MONGO_HOST || "localhost",
        port: process.env.MONGO_PORT as any || 27017,
        database: process.env.MONGO_DATABASE || "GraphQLBoilerPlate"
    },
    server: {
        port: 4000
    }
}