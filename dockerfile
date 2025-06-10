# Dockerfile

# 1. Choisir une image de base Node.js officielle et légère
FROM node:18-alpine

# 2. Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances pour profiter du cache Docker
COPY package*.json ./

# 4. Installer les dépendances du projet
RUN npm install

# 5. Copier le reste du code source de l'application
COPY . .

# 6. Exposer le port que notre application utilise
EXPOSE 3000

# 7. Définir la commande pour lancer l'application au démarrage du conteneur
CMD [ "npm", "start" ]
