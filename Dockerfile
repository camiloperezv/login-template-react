FROM node:8.5
RUN yarn global add react-scripts
WORKDIR /tmp
COPY package.json .
RUN yarn install

WORKDIR /app
RUN mv /tmp/node_modules .
COPY . /app