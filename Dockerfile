FROM node:alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--openssl-legacy-provider

ARG VITE_NETWORK_ENV
ARG VITE_NODE_ENV

ENV VITE_NETWORK_ENV=$VITE_NETWORK_ENV
ENV VITE_NODE_ENV=$VITE_NODE_ENV

# COPY .npmrc ./
COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]