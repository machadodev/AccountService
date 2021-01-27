FROM node:latest

WORKDIR "/application"

RUN apt-get update \
    && apt-get -y --no-install-recommends install netcat \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*


COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s /usr/local/bin/docker-entrypoint.sh / # backwards compat

ENTRYPOINT ["docker-entrypoint.sh"]
