FROM cypress/base:node14.17.0

RUN mkdir /usr/src/e2e

WORKDIR /usr/src/e2e

COPY package*.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npm", "run", "cy:tags", "TAGS=${tags}" ]

CMD [""]