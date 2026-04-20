FROM node:latest

WORKDIR /app

COPY . . 

RUN npm i express

RUN npm i -G nodemon

EXPOSE 3000

CMD [ "npm" , "start" ]