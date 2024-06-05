FROM node:14 AS ui-builder

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

FROM rust:latest AS backend-builder

WORKDIR /usr/src/app

COPY backend/Cargo.toml backend/Cargo.lock ./
COPY backend/src ./src

RUN cargo build --release

FROM nginx:alpine

COPY --from=ui-builder /app/build /usr/share/nginx/html

COPY --from=backend-builder /usr/src/app/target/release/your_binary_name /usr/bin/your_binary_name

# Configure NGINX
RUN echo 'daemon off;' >> /etc/nginx/nginx.conf
RUN echo 'server {\n\
    listen 80;\n\
    location /api {\n\
        proxy_pass http://localhost:8000;\n\
        proxy_set_header Host $host;\n\
        proxy_set_header X-Real-IP $remote_addr;\n\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\
        proxy_set_header X-Forwarded-Proto $scheme;\n\
    }\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        try_files $uri /index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["sh", "-c", "/usr/bin/your_binary_name & nginx"]
