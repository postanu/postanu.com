FROM registry.digitalocean.com/postanu/web:latest AS root

ENV NODE_ENV=production

WORKDIR /postanu
RUN pnpm build

FROM nginx:alpine

RUN rm -R /etc/nginx/conf.d
COPY --from=root /postanu/nginx.conf /etc/nginx/nginx.conf

COPY --from=root /postanu/dist/ /var/www/

CMD nginx
