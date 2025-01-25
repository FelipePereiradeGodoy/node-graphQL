import { Module } from "@nestjs/common";
import CategoryModule from "src/categories/category.module";
import CourseService from "./course.service";
import CourseGraphQLResolver from "./graphQL/course-graphql.resolver";

@Module({
    imports: [CategoryModule],
    providers: [CourseGraphQLResolver, CourseService]
})
export default class CourseModule {}