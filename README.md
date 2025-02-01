
## Descrição
Este projeto implementa GraphQL no NestJS, explorando consultas (queries), mutações (mutations).

Neste projeto criei exemplos apenas utilizando o playground do graphQL.

## O que é GraphQL
GraphQL é uma linguagem de consulta para APIs e um runtime para executar essas consultas. Criado pelo Facebook, ele permite que os clientes obtenham exatamente os dados que precisam, de forma eficiente. Muito útil em ambientes com largura de banda limitada.

Principais vantagens:
- Busca eficiente – Retorna apenas os dados solicitados
- Esquema fortemente tipado – Define um contrato entre cliente e servidor
- Reduz custo de transferência de dados
- Tempo de resposta mais rápido

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
