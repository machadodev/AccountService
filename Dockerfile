FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
