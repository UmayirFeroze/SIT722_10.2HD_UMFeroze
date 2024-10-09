FROM node:14-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD [ "node", "src/app.js" ]
