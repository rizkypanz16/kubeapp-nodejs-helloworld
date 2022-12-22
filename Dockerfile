FROM node:16
MAINTAINER rizkypanz

WORKDIR /app
COPY server.js /app
CMD ["node", "server.js"]
EXPOSE 3000
