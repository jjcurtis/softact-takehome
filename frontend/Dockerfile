FROM node:alpine

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

ENTRYPOINT [ "npx", "vite", "preview", "--port", "5173", "--host" ]
