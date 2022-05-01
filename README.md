# ServiceNet-API

API Rest desenvolvida como desafio do processo seletivo da empresa ServiceNet, disponibilizando endpoints para CRUD de usuários.

### Regras de Negócio:
- Estrutura do usuário: Matrícula(gerada pelo sistema), Nome, Data de Nascimento, E-mail, Senha.
- Endpoints: Cadastro, Atualização, Remoção, Listagem(deve permitir filtrar por nome).
- Senha deve conter algum tipo de segurança em sua persistência.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e testes.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[MongoDB](https://www.mongodb.com/), [Node.js](https://nodejs.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔧 Instalação

Clonar o repositório utilizando o seguinte código:

```
git clone git@github.com:dieanderson/servicenet-api.git
```

Acessar a pasta do projeto:

```
cd servicenet-api
```

Instalar as dependências:

```
npm install
```

Após as dependências instaladas, iniciar o servidor:

```
npm run dev
```

## Métodos
Requisições para a API devem ser enviadas para http://localhost:8080/api/users e seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna lista de usuários cadastrados(parâmetro nome opcional). |
| `POST` | Utilizado para criar um novo usuário. |
| `PUT` | Atualiza dados de um usuário(parâmetro Id obrigatório). |
| `DELETE` | Remove um usuário(parâmetro Id obrigatório). |

### GET
| Parâmetro | Descrição |
|---|---|
| `sem parâmetro` | Retorna a lista de todos os usuários cadastrados. |
| `/name` | Retorna a lista dos usuários com atributo name correspondente ao parâmetro. |

### POST
Deve ser enviado um objeto no formato JSON no corpo da requisição com os atributos do usuário:
| Atributo | Descrição |
|---|---|
| `id` | Não enviar o id(Matricula), será gerado automáticamente pelo MongoDB. |
| `name` | Nome do usuário (String). |
| `birthDate` | Data de nascimento do usuário (Date). |
| `password` | Senha do usuário (será criptografada antes de ser gravada no BD) (String). |

+ Exemplo:

    + body
        ```
        {
            "name": "Maria",
            "birthDate": "2000-01-01",
            "email": "maria@teste.com.br",
            "password": "123456"
        }
        ```

Em caso de sucesso retorna o seguinte JSON ```{ message: 'success' }```.

### PUT
Deve ser enviado o parâmetro /id(matrícula do usuário que deseja modificar) e no corpo da requisição um objeto no formato JSON com os atributos a serem modificados e seu conteúdo. Em caso de sucesso retorna um objeto com o próprio usuário modificado e a mensagem JSON ```{ message: 'success' }```.

+ Exemplo de requisição:

    + Body
        ```
        {
            "name": "Maria da Silva",
            "email": "maria_da_silva@teste.com.br",
        }
        ```

+ Exemplo de retorno:

    + Body
        ```
        {
            "message": "success",
            "user": {
                "_id": "626d78e498f064846f1c095e",
                "name": "Maria da Silva",
                "birthDate": "2000-01-01T00:00:00.000Z",
                "email": "maria_da_silva@teste.com.br",
                "password": "$2b$10$KUUlXJuC5A9LJr7B63gJhekXHP2JFdu2uSlfOpRdIOO.T7dcxKiIK",
                "__v": 0
            }
        }
        ```

### DELETE
Deve ser enviado o parâmetro /id(matrícula do usuário que deseja excluir), em caso de sucesso retorna o JSON ```{ message: 'success' }``` e em caso de erro ```{ message: 'error' }```.

## 🛠️ Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
