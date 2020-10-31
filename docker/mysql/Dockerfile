FROM mysql:5.7.32

ENV MYSQL_DATABASE=api_food
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=root

RUN usermod -u 1000 mysql

COPY setup.sql /docker-entrypoint-initdb.d