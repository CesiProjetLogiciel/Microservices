# syntax=docker/dockerfile:1

FROM node:16.15-slim
ENV NODE_ENV=production

WORKDIR ./

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --omit=dev

COPY . .

EXPOSE 8080/tcp

CMD [ "node", "index.js" ]