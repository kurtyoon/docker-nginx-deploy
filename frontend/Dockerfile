FROM node:21.1.0-alpine3.18 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen=-lockfile
COPY . .
RUN yarn build

FROM node:21.1.0-alpine3.18
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

EXPOSE 5173
CMD ["yarn", "start"]