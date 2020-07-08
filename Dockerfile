FROM node:12-alpine

ENV HOST 0.0.0.0
ENV PORT 3000

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
