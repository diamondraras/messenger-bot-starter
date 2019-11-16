FROM node:10-alpine

WORKDIR /app

# Copy package.json for caching node_modules 
COPY package.json /app/package.json 

# Copy yarn.lock for packages consistency
COPY yarn.lock /app/

# Install packages
RUN yarn

# Copy source files
COPY . /app

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]