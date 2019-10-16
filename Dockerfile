FROM node:latest

# app directory
WORKDIR /home/node/app

# install application dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

# bind application to port 5000
EXPOSE 5000

CMD [ "npm", "start" ]

