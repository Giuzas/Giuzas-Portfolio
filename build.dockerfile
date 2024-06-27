# Usa un'immagine base di Node.js per costruire l'applicazione
FROM node:14

# Imposta la directory di lavoro
WORKDIR /app    

# Copia i file di configurazione e le dipendenze del progetto
COPY package*.json ./

# Installa le dipendenze del progetto
RUN npm install
 
# Copia tutto il codice sorgente
COPY . .

# Costruisci l'applicazione per la produzione
RUN npm run build

# Installa `serve` globalmente
RUN npm install -g serve

# Espone la porta 5000
EXPOSE 5000
 
# Comando di avvio per `serve`
CMD ["serve", "-s", "dist", "-l", "5000"]
