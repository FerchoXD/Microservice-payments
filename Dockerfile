FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
COPY src ./src

RUN npm install
RUN npm install -g ts-node-dev

EXPOSE 8080

CMD ["tsnd","--respawn" ,"src/app.ts"]