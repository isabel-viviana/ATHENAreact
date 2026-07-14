#CONSTRUCCION EN BUILD
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la

#CONTENERIZACION EN SERVIDOR DE PRODUCCION
FROM nginx:1.25-alpine
#COPIA DE ARCHIVOS ESTATICOS DEL PROYECTO
COPY --from=builder /app/dist /usr/share/nginx/html
#PUERTO ESTANDAR
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
