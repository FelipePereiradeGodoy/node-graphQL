import { Injectable } from "@nestjs/common";
import CategoryGraphQLEntity from "./graphQL/category-graphql.entity";

@Injectable()
export default class CategoryService {
    private categories: CategoryGraphQLEntity[] = [
        { id: 1 , description: 'Tecnologia' },
        { id: 2 , description: 'Programação' },
        { id: 3 , description: 'Marketing' },
    ];

    findAll(): CategoryGraphQLEntity[] {
        return this.categories;
    }

    findById(id: number): CategoryGraphQLEntity | undefined {
        const category = this.categories.find((category) => category.id == id);
        
        return category;
    }
}