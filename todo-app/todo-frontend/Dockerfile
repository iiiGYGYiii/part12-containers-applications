FROM node:16 AS build-stage
WORKDIR /usr/src/app

FROM build-stage as test
COPY . .
RUN npm ci
RUN CI=true npm run test

FROM build-stage as prod
COPY . .
RUN npm ci --production-only
ENV REACT_APP_BACKEND_URL=/api
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=prod /usr/src/app/build /usr/share/nginx/html
