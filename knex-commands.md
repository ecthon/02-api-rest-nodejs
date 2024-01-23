# Knex

### Criar migration
```bash
$ npm run knex -- migrate:make name-migration
```

### Criar tabela
```bash
$ npm run knex -- migrate:latest
```

### Desfazer migration
Somente no caso de eu não ter subido.

```bash
$ npm run knex -- migrate:rollback