# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Cypress dependencies
#RUN npx cypress install

# Run Cypress tests
#CMD ["npx", "cypress", "run"]
