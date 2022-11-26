FROM node:14 

#Container dev
WORKDIR /app
COPY ./package.json . 
ARG NODE_ENV

RUN if [ "$NODE_ENV" = "developpement" ]; \
    then npm install;\
    else npm install --production; \
    fi 


COPY . .
ENV PORT=4000
EXPOSE ${PORT}
#Exécuter la node app
CMD ["npm","run","start-dev"]