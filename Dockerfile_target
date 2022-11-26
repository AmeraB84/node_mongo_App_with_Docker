FROM node:14 AS base

#Container dev

FROM base AS developpement
WORKDIR /app
COPY ./package.json . 
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE ${PORT}
#Exécuter la node app
CMD ["npm","start"]

#container production

FROM base AS production
WORKDIR /app
#Copier tt les fichiers de mon app et installer les dépendances / Comme le workdir est spécifier je n'ai pas besoin de le respécifier pour la copy
COPY ./package.json . 
#Installer les dépendances du nodejs app et création de node_modules folder
RUN npm install --production
COPY . .
ENV PORT=4000
EXPOSE ${PORT}
#Exécuter la node app
CMD ["npm","run","start-dev"]