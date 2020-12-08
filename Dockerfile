FROM node:alpine

ADD . /app
RUN cd /app && npm install --prod
ENV NODE_ENV production
ENV PORT 8080

EXPOSE  8080

CMD ["node", "/app/server.js"]