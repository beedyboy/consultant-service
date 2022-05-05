FROM node:14

WORKDIR /spec-consultant-service

COPY package.json .

RUN npm install 

COPY . /spec-consultant-service

EXPOSE 3000

CMD ["node", "server.js"]