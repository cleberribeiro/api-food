
FROM node:12.19.0-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache coreutils

WORKDIR /api

COPY docker/entrypoint.sh .
COPY docker/wait-for-it.sh .
RUN chmod +x wait-for-it.sh
RUN ls -l -a

COPY package.json /api
COPY package-lock.json /api
RUN ls -l -a
RUN npm install 

COPY docker /api/.docker
COPY src /api/src
COPY .dockerignore .eslintignore .eslintrc.json .gitignore babel.config.json jest.config.js tsconfig.json /api/
RUN ls -l -a

RUN npm run-script build

# ENTRYPOINT [ "node", "dist/server.js" ]
