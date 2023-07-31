FROM node:20 as node

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

ENV NODE_ENV=production

COPY . ./postanu
WORKDIR /postanu

RUN pnpm build


FROM nginx:alpine

RUN rm -R /etc/nginx/conf.d
COPY --from=node /postanu/nginx.conf /etc/nginx/nginx.conf

COPY --from=node /postanu/dist/ /var/www/

CMD nginx
