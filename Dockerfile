FROM node:18-slim as base
WORKDIR /webapps

FROM base AS builder
COPY package.json /webapps
RUN yarn install
ADD . .
# RUN yarn build:$env
RUN yarn build

FROM base AS runner
WORKDIR /webapps
COPY --from=builder /webapps .