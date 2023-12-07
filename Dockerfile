FROM node:current-alpine3.18
WORKDIR /app
ENV PORT=3000
COPY . .
RUN npm i
EXPOSE $PORT
CMD ["node", "index.js"]
