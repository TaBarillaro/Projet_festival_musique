# On utilise une image de base avec Nginx
FROM nginx:alpine

# Copie des fichiers créés par la build Angular dans le dossier utilisé par nginx
COPY ./dist/projet-festival-musique /usr/share/nginx/html

# on utilise le port 80
EXPOSE 80

# Démarrage nginx
CMD ["nginx", "-g", "daemon off;"]