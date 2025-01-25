import { Module } from "@nestjs/common";
import CategoryService from "./category.service";
import CategoryGraphQLResolver from "./graphQL/category-graphql.resolver";

@Module({
    providers: [CategoryGraphQLResolver, CategoryService],
    exports: [CategoryService],
})
export default class CategoryModule {}