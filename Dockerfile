# Use node alpine image as the base image
FROM node:20-alpine3.18 as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# INFO(ab), workaround until proper CA certs are included on Jenkins
RUN npm config set strict-ssl false

# Install all the dependencies and generate the build of the application
RUN npm install && npm run build

# Use nginx alpine as app server
FROM nginx:stable-alpine

# Copy custome nginx cofig oved the default one
COPY docker/.nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html
