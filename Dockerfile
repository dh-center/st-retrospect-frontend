# Build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

# Install project dependencies
COPY package.json yarn.lock ./

RUN yarn install

# Build project
COPY . .

RUN yarn build --prod

# production environment
FROM nginx:1.17.3-alpine

# Copy build result from previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Pass new nginx config
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
