import CourseService from "src/courses/course.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import CourseGraphQLEntity from "./course-graphql.entity";
import CreateCourseGraphQLInput from "./create-course-graphql.input";

@Resolver(() => CourseGraphQLEntity)
export default class CourseGraphQLResolver {
    constructor(@Inject()private readonly courseService: CourseService) {}

    @Query(() => [CourseGraphQLEntity])
    getAllCourses(): CourseGraphQLEntity[] {
        return this.courseService.findAll();
    }

    @Mutation(() => CourseGraphQLEntity)
    createCourse(@Args('input') input: CreateCourseGraphQLInput): CourseGraphQLEntity {
        return this.courseService.create(input);
    }
}