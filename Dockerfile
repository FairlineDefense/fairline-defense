FROM node:16.15-bullseye

RUN apt update

WORKDIR /project

COPY . .

RUN npm install

EXPOSE 8080/tcp

CMD npm start