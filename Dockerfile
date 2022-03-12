FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn install
ADD . .
ENV NODE_ENV production
RUN yarn run build
CMD ["yarn", "start"]
EXPOSE 3000
# запуск билда в докере
# docker build -t my-first-app .
# имя можно задать любое
# точка - это путь до докерфайла, в нашем случае - текущая папка
