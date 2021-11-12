FROM getstrong/powerliftingtracker AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build frontend ${BUILD_FLAG}

FROM nginx:1.19.2

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/frontend ./
COPY --from=builder /app/builder/apps/frontend/nginx.conf /etc/nginx/nginx.conf

RUN echo "frontend is running at http://localhost:4900/"
