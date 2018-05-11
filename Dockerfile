FROM node:8.11
# Install dependencies to run react app
RUN yarn global add react-scripts@1.1.4 serve && mkdir /tmp/client

# define envirnment variables
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# expose port to run it
ARG PORT=4000
ENV PORT $PORT
EXPOSE $PORT

# Install node modules and add them to the PATH and Node Path
WORKDIR /opt
COPY package.json yarn.lock ./
RUN yarn install --silent --production=true
ENV PATH /opt/node_modules/.bin:$PATH
ENV NODE_PATH /opt/node_modules/:$NODE_PATH

# Define variable to check if build is required
ARG ENVIRONMENT=$ENVIRONMENT

ENV NPM_CONFIG_LOGLEVEL warn

# Copy project
WORKDIR /app
COPY . /app

# Run the build if the build-arg ENVIRONMENT is production
RUN if [ $ENVIRONMENT="production" ] ; then echo BUILD $ENVIRONMENT && yarn run build ; else echo DEVELOPMENT BUILD; fi

# CMD "serve --ssl build"
