FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build -- -o storybook-static

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/storybook-static .
ENTRYPOINT ["nginx", "-g", "daemon off;"]