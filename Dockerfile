FROM node:22.14-alpine
LABEL authors="jknap"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "node", "build" ]