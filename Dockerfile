FROM node:18-alpine

WORKDIR /app
COPY . .

EXPOSE 80 3000