# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue app
RUN npm run build

# Expose the desired port (4000 as specified in vue.config.js)
EXPOSE 4000

# Start the application
CMD ["npm", "run", "serve"]
