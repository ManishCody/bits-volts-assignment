# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Serve the app using `serve`
FROM node:20-alpine

WORKDIR /app

RUN yarn global add serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
