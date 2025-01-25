import { Field, ID, ObjectType } from "@nestjs/graphql";
import CategoryGraphQLEntity from "src/categories/graphQL/category-graphql.entity";

@ObjectType()
export default class CourseGraphQLEntity {
    @Field(() => ID)
    id: number;

    @Field()
    description: string;

    @Field(() => [CategoryGraphQLEntity])
    categories: CategoryGraphQLEntity[];
}