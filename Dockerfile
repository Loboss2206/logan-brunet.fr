FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN cp .env.production .env

ARG EMAIL_SERVICE_ID
ARG EMAIL_TEMPLATE_ID
ARG EMAIL_USER_ID

RUN cat <<EOF > src/emailjs-id.jsx
export const emailServiceId = '${EMAIL_SERVICE_ID}';
export const emailTemplateId = '${EMAIL_TEMPLATE_ID}';
export const emailUserId = '${EMAIL_USER_ID}';
EOF

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
