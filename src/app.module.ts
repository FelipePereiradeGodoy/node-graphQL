import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import CategoryModule from './categories/category.module';
import CourseModule from './courses/course.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //gerar o schema automaticamente
      playground: true,
    }),
    CategoryModule,
    CourseModule,
  ],
})
export class AppModule {}
