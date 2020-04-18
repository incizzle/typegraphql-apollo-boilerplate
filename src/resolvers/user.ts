import { Resolver, Query } from "type-graphql";
import { Users } from "../entity/user";

@Resolver(Users)
export class UsersResolver {
    @Query(() => String)
    async helloWorld() {
        return 'Hello World!'
    }
}