import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class CategoryGraphQLEntity {
    @Field(() => ID)
    id: number;

    @Field()
    description: string;
}