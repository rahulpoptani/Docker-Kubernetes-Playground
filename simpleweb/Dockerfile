FROM node:alpine
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
# The below line would copy whatever files are remaining
COPY ./ ./
CMD ["npm", "start"]