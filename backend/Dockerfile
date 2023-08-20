FROM node:16-alpine3.15

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080
CMD [ "node", "index.js"]