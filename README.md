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