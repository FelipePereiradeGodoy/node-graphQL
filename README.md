
## Descrição
Projeto para utilizar a tecnologia GraphQL.

## Executar
```bash
$ npm run start
```

## Playground
http://localhost:3000/graphql

## Querys
```
query {
  getAllCategories {
    id
    description
  }
}
```

```
query {
  getAllCourses {
    id
    description
    categories {
      id
      description
    }
  }
}
```

## Mutation

```
mutation {
  createCourse(input: { description: "Curso de Marketing Digital", categoriesIds: [3] }) {
    id
    description
    categories {
      id
      description
    }
  }
}

```