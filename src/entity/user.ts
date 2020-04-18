import { ObjectType, Field, ID } from "type-graphql";
import { Entity, BaseEntity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
@ObjectType()
export class Users extends BaseEntity {
    @ObjectIdColumn()
    @Field(() => ID)
    id: ObjectID

    @Column()
    @Field()
    name: String
    
    @Column()
    @Field()
    lastname: String
}