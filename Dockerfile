FROM node 

WORKDIR /script.js

COPY . . 

RUN npm install 

CMD ["node","server.js"]

EXPOSE 5050 