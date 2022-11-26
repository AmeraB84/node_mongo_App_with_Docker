FROM node:14 

#Container dev
WORKDIR /app
COPY ./package.json . 
ARG NODE_ENV

RUN if [ NODE_ENV = "developpement" ]; \
    then npm install;\
    else npm install --only=production; \
    fi 
COPY . .
ENV PORT=3000
EXPOSE ${PORT}
#Exécuter la node app
CMD ["npm","run","start-dev"]