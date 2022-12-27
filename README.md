# Notifications Service
### Microsserviço desenvolvido no Ignite Lab da Rocketseat


## Stack utilizada

**Back-end:** Node, NestJS


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:omarcolombari/notifications-service.git
```

Entre no diretório do projeto

```bash
  cd notifications-service
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start:dev
```

Rode as migrations

```bash
  npx prisma migrate dev
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Documentação da API

#### Envia uma notificação

```http
  POST /notifications/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |
| `content` | `string` | **Obrigatório**. O conteúdo da notificação. |
| `category` | `string` | **Obrigatório**. A categoria da notificação. |

#### Marca notificação como lida

```http
  PATCH /notifications/id:/unread
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |

#### Marca uma notificação como não lida

```http
  PATCH /notifications/id:/read
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |

#### Cancela uma notificação enviada

```http
  PATCH /notifications/id:/cancel
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |


#### Retorna as notificações enviadas para um recebedor

```http
  GET /notifications/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |

#### Retorna a quantidade de notificações de um único recebedor

```http
  GET /notifications/count/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |


## Aprendizados

Neste projeto foi treinado os conceitos do **SOLID** e **Clean Code**.
Por mais que seja um serviço simples, ele teve a intenção de aprender
a construir um projeto mais escalavel, independente e com fácil manunteção.
Embora não tenha encontrado problemas em relação à logica, aplicar o conceito de 
*Dependency Inversion Principle* no código me tirou da zona de conforto e pensar
sobre o motivo daquilo estar sendo feito daquela forma. No fim do projeto
estava sem nenhum problema e com entendimento sobre o que estava acontencendo e o porque
daquilo estar daquela forma.
