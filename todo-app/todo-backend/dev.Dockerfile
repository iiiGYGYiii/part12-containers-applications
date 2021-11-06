FROM node:16

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm i

CMD ["npm", "run", "dev"]
