#!/bin/bash

# O loop abaixo "resolve" o problema de dependência
# entre a aplicação e o banco de dados.
# Esse workaround é sugerido (de maneira parecida) na documentação
# oficial do docker
# https://docs.docker.com/compose/startup-order/
while ! nc -z postgres 5432; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1;
done;

npm install

npm run dev