FROM node:14.12.0-alpine3.12

WORKDIR /home/app

COPY package.json yarn.lock /home/app/

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]