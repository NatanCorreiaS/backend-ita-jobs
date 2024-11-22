<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# DOCUMENTAÇÃO PARA CONSUMO DA API
Há três tabelas no banco de dados, `users`, `enterprises` e `users-job`(Na API é `user-job`).
## Tabela Users
A tabela `users` é onde ficam armazenados os dados individuais de cada usuário registrado, possui as seguintes propriedades:
`id,name, email, age, password e gender[male, female ou non-specified]`.(ID, Nome, Email, Idade, Senha e Gênero).
### Consumo da API Users
1. Para consumir uma API utiliza-se o link com o endereço no seguinte formato: `https://example/api/users/` mais o verbo/método HTTP(GET, POST, PATCH E DELETE).
2. LISTAR TODOS OS USUÁRIOS, `https://example/api/users/` com o método GET sem o ID.
3. LISTAR DADOS DE APENAS UM USUÁRIO, `https://example/api/users/{id}`, substitua o {id} pelo número do id do usuário e irá retornar somente as informações de tal usuário, utilize o método GET.
4. CRIAR UM USUÁRIO, `https://example/api/users/` com o método POST, o corpo da requisição deve estar no seguinte formato:
```json
"name": "Nome do usuário",
"password": "Senha do usuário",
"email": "Email do usuário",
"age": "Idade do usuário",
"gender": "Gênero só pode escolher um desses três: male(Homem), female(Mulher) ou non-specified(Não-especificado)"
```
caso retorne os dados digitados, o usuário foi criado com sucesso.
5. ATUALIZAR UM USUÁRIO `https://example/api/users/{id}` com o método PATCH, substitua {id} pelo número do id do usuário e envie o corpo da requisição com as possíveis propriedades:
```json
// Não é necessário preencher todos os campos, apenas os que o usuário vai atualizar, caso só envie um corpo com a propriedade name preenchida por exemplo, apenas tal propriedade será atualizada.
"name": "Possível novo nome do usuário",
"password": "Possível nova senha do usuário",
"email": "Possível novo email do usuário",
"age": "Possível nova idade do usuário",
"gender": "Possível novo gênero do usuário, lembrando a regra rígida que esse campo tem [female/male/non-specified]"
```
Caso retorne os dados atualizados, a requisição foi feita com sucesso.
6. DELETAR UM USUÁRIO `https://example/api/users/{id}` com o método DELETE, apenas substitua {id} pelo número do usuário.
Caso retorne o usuário, a requisição foi feita com sucesso.
## Tabela Enterprises
A tabela `enterprises` é onde se localizam as informações das empresas, é nela que são feitas as operações relacionadas a oferta do trabalho, a imagem, o email e etc.
A tabela enterprises possui os seguintes parâmetros:
`id, name, jobTitle,description, email e imgURL`, respectivamente identificador, nome, nome da vaga, descrição, email e o endereço da imagem da empresa.
1. LISTAR TODAS AS EMPRESAS, https://example/api/enterprises com o método GET.
2. CONSULTAR APENAS UMA EMPRESA, https://example/api/enterprises/{id} com o método GET, substitua {id} pelo número identificador da empresa.
3. CRIAR UMA EMPRESA, https://example/api/enterprises com o método POST, o body deve ter: 
```json
"name": "Nome do empresa",
"email": "Email da empresa",
"jobTitle": "Nome da vaga",
"description": "Descrição da vaga"
"imgURL": "Endereço de imagem da empresa",
```
4. ATUALIZAR UMA EMPRESA, https://example/api/enterprises/{id} com o método PATCH, substitua {id} pelo identificador da empresa e no body deve ter os seguintes campos opcionais:
```json
"name": "Nome do empresa",
"email": "Email da empresa",
"jobTitle": "Nome da vaga",
"description": "Descrição da vaga"
"imgURL": "Endereço de imagem da empresa",
```
5. DELETAR UMA EMPRESA, https://example/api/enterprises/{id} com o método DELETE, substitua {id} pelo identificador da empresa.

## User-job
Essa tabela estabelece a relação entre a tabela de `users`com `enterprises`, ou seja é a tabela responsável por determinar que vaga tal usuário está se candidatando.
Essa tabela possui 3 parâmetros:
`id, userId, jobId`, identificador da linha, identificador do usuário e identificador da empresa/vaga, userId e jobId devem obrigatoriamente ser o `id` do usuário e da vaga respectivamente ou a tabela irá rejeitar.
1. LISTANDO TODAS AS RELAÇÕES, https://example/api/user-job com o método GET.
2. SELECIONANDO APENAS UMA RELAÇÃO, https://example/api/user-job/{id}, com o método GET, substitua {id} pelo número da relação.
3. CRIANDO UMA RELAÇÃO, https://example/api/user-job/, com o método POST, o body deve ter os seguintes campos:
```json
"userId": "Identificador do usuário na tabela users",
"jobId ": "Identificador da vaga na tabela enterprises"
```
4. ATUALIZANDO UMA RELAÇÃO, https://example/api/user-job/{id}, com o método PATCH, substitua {id} pelo identificador da relação, o body deve ter os seguintes campos opcionais:
```json
"userId": "Identificador do usuário na tabela users",
"jobId ": "Identificador da vaga na tabela enterprises"
```
5. DELETANDO UMA RELAÇÃO, https://example/api/user-job/{id}, com o método DELETE, substitua {id} pelo identificador da relação. 