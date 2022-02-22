FROM node:latest

WORKDIR /cypress_backend

# Quando o agent for um linux:
#RUN apt-get update && apt-get install --yes libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8089

ENTRYPOINT [ "npm", "run", "cy:tags", "TAGS=${tags}" ]
