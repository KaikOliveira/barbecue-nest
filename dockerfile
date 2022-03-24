# Docker Multistage construction 

### DEV Environmental Science  ###
FROM node:lts-alpine

#  Navigate to the container working directory 
WORKDIR /usr/src/app
#  Copy package.json
COPY package*.json ./

RUN yarn

COPY . .
RUN yarn build


