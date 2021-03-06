# DO WHILE 2021
NLW heat fullstack project with 
- [Nodejs](https://nodejs.org/en/) as the backend
- [Elixir](https://elixir-lang.org/) as the backend fro tag counting
- [Reactjs](https://reactjs.org/)  as the website
- [React native](https://reactnative.dev/) as the phone app

# Nodejs
- [Express](https://expressjs.com/) as the web framework
    - Middlewares can check auth before doing anything
- [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres) as the hyped ORM
    - `npx prisma migrate` -> Create and migrate
    - `npx prisma studio` -> Check what you db contains
- [PostgreSQL](https://www.postgresql.org/docs/current/intro-whatis.html) as the open source database
- [Typescript](https://www.typescriptlang.org/) the Javascript superset
    - [ts-node-dev](https://github.com/wclr/ts-node-dev) for hot-reload when changes are made during development
- [Github authentication](https://github.com/settings/developers)
    - Simple and powerful
- [Socket.IO](https://github.com/socketio/socket.io) for websockets and realtime messages

# Reactjs
- [Figma layout](https://www.figma.com/community/file/1031699316177416916?preview=fullscreen)
- [Vite](https://vitejs.dev/guide/) as the fast build tool with hot reloads
- [Sass](https://sass-lang.com/guide) as making css more robust and awsome with nesting and other stuff
- [react-icons](https://github.com/react-icons/react-icons) for cool icons
- [socket-client](https://github.com/socketio/socket.io-client) for recieving websocket events from node backend

# React Native
- [Expo](https://docs.expo.dev/) the universal react app building framework
- [Typescript](https://www.typescriptlang.org/) the Javascript superset

# Elixir
- [Phoenix](https://hexdocs.pm/phoenix/overview.html) as the hyper responsive MVC web framework
- [Ecto](https://hexdocs.pm/ecto/getting-started.html) as not your typical ORM
- [PostgreSQL](https://www.postgresql.org/docs/current/intro-whatis.html) as the open source database
- [Quantum](https://hexdocs.pm/quantum/readme.html) for running jobs periodically
- Challenges!!
    - Read all unique emails
    - Send the daily tags report with [Bamboo](https://hexdocs.pm/bamboo/readme.html)
    - Save the report on the database
    - Add fallback controllers and error validation
