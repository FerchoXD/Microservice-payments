FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@10.3.0
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "dev" ]