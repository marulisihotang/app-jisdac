# Use official Node.js image
FROM node:lts-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port (adjust if your app runs on another port)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]