FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
COPY src ./src

RUN npm install

EXPOSE 8080

CMD ["npm","run" ,"dev"]