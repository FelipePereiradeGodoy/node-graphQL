import { Inject, Injectable } from "@nestjs/common";
import CategoryService from "src/categories/category.service";
import CourseGraphQLEntity from "./graphQL/course-graphql.entity";
import CreateCourseGraphQLInput from "./graphQL/create-course-graphql.input";
import { randomInt } from "crypto";
import CategoryGraphQLEntity from "src/categories/graphQL/category-graphql.entity";

@Injectable()
export default class CourseService {
    private courses: CourseGraphQLEntity[] = [
        { id: 1, description: 'NestJS Avançado', categories: [] },
        { id: 2, description: 'Introdução ao GraphQL', categories: [] },
        { id: 3, description: 'Design de Interiores', categories: [] },
    ];

    constructor(
        @Inject()
        private readonly categoryService: CategoryService
    ) {
        const technologyCategories = this.categoryService.findById(1);
        const graphQLCategories = this.categoryService.findById(2);

        if(technologyCategories) {
            this.courses[0].categories.push(technologyCategories);
            this.courses[1].categories.push(technologyCategories);
        }

        if(graphQLCategories) {
            this.courses[1].categories.push(graphQLCategories);
        }
    }

    findAll(): CourseGraphQLEntity[] {
        return this.courses;
    }

    create(input: CreateCourseGraphQLInput): CourseGraphQLEntity {
        let categories = input.categoriesIds.map((categoryId) => {
            return this.categoryService.findById(categoryId);
        })

        const newCourse: CourseGraphQLEntity = {
            id: randomInt(4, 100),
            description: input.description,
            categories: categories as CategoryGraphQLEntity[],
        };

        this.courses.push(newCourse);
        return newCourse;
    }
}