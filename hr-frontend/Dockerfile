# Use Node.js as the base environment
FROM node:20-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your frontend code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the Vite server and expose it to the local network
CMD ["npm", "run", "dev", "--", "--host"]