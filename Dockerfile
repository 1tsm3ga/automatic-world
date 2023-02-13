FROM node:18 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "run", "dev"]

docker build -t willthiswork .

docker run -p 3000:3001 willthiswork
