FROM node:10

# app directory
WORKDIR /home/node/app

# install application dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .
RUN npm run tsc
# bind application to port 9000
EXPOSE 5000

CMD [ "npm", "start" ]