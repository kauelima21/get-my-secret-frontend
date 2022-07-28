# GetMySecret FRONTEND

> Frontend da aplicação feita para a criação de informações que serão acessadas atráves de um link apenas uma vez!

## Como colocar para funcionar?

Faça o clone do repositório e depois siga estes passos:

entre na pasta do projeto, abra um terminal e instale os pacotes necessários
```
  cd get-my-secret-frontend/

  yarn
```
 caso utilize npm o comando é:
```
  npm i
```

faça funcionar!
```
  yarn dev
```

Caso você não queira utilizar a api que já vem por padrão, você pode [seguir estes passos](https://github.com/kauelima21/get-my-secret-backend) e criar a sua própria.
Se optar por criar sua própria api, lembre-se de ir no arquivo [global.js](src/utils/global.js) e alterar a url da mesma.

## Como funciona?

O usuário tem um input onde pode adicionar um texto e, caso queira, adicionar também uma senha.

Será gerado um link o  qual o usuário poderá acessar / compartilhar e então acessar o segredo.

Após vizualizado, o segredo se autodestrói. Se não houver acesso, dentro de 7 dias o segredo também será destruído.

## Tecnologias utilizadas

- [React Js](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Api Serverless](https://github.com/kauelima21/get-my-secret-backend)
