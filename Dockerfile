FROM node:16-alpine
WORKDIR /app
copy . /app
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
