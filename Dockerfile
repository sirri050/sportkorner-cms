# Use official Node.js 20 (Alpine for smaller size)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies needed for Strapi (sharp, etc.)
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package files first (better caching)
COPY package*.json ./

# Install production deps only
RUN npm ci --production --frozen-lockfile

# Copy the rest of your Strapi project
COPY . .

# Build admin panel with expanded RAM allocation
RUN NODE_OPTIONS="--max-old-space-size=2048" npm run build

# Build admin panel
#RUN npm run build

# Expose Strapi port
EXPOSE 1337

# Start in production mode
CMD ["npm", "run", "start"]
