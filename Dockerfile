FROM node:14.12.0-alpine3.12 as github_followers

WORKDIR /home/app

COPY package.json yarn.lock /home/app/

RUN yarn install

COPY . .

RUN cd frontend && yarn install && yarn build

RUN cd ..

CMD ["yarn", "start"]