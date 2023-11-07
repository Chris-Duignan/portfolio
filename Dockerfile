FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci

USER node

COPY --chown=node:node .next .next
COPY --chown=node:node public public

CMD [ "npm", "start" ]