import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class CreateCourseGraphQLInput {
    @Field()
    description: string;

    @Field(() => [Number])
    categoriesIds: number[];
}