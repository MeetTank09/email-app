# FROM node 

# WORKDIR /script.js

# COPY . . 

# RUN npm install 

# CMD ["node","server.js"]

# EXPOSE 5050 
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD ["node", "server.js"]