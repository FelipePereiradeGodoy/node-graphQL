import { Query, Resolver } from "@nestjs/graphql";
import CategoryService from "src/categories/category.service";
import { Inject } from "@nestjs/common";
import CategoryGraphQLEntity from "./category-graphql.entity";

@Resolver(() => CategoryGraphQLEntity)
export default class CategoryGraphQLResolver {
    constructor(
        @Inject()
        private readonly categoryService: CategoryService
    ) {}

    @Query(() => [CategoryGraphQLEntity])
    getAllCategories(): CategoryGraphQLEntity[] {
        return this.categoryService.findAll();
    }
}