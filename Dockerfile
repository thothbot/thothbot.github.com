FROM node:24-alpine

WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Default command: dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
