FROM        node:alpine

LABEL       author="Brian Yap"

WORKDIR     /app
COPY        . ./
RUN         npm install

CMD         ["npm", "start"]