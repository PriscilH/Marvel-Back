# Marvel App – Backend

Backend de l’application **Marvel**, développé avec **Node.js / Express** et connecté à une base **MongoDB**.  
Il expose des endpoints API pour la gestion des utilisateurs et l’accès aux données Marvel, consommés par le frontend [Marvel-Front](https://github.com/PriscilH/Marvel-Front).  

---

## 🚀 Fonctionnalités

- 🔐 **Authentification des utilisateurs** (inscription, connexion, gestion sécurisée des tokens).  
- 📚 **API Comics & Personnages** : récupération des données depuis l’API Marvel via **Axios**.  
- 🔍 **Recherche et pagination** pour naviguer efficacement dans les résultats.  
- 🛡 **Sécurité** :  
  - `crypto-js` pour le chiffrement  
  - `uid2` pour la génération de tokens sécurisés  
  - variables sensibles protégées via `.env`.  
- 🌐 **CORS activé** pour la communication avec le frontend.  

---

## 🛠️ Technologies utilisées

- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose** (gestion des utilisateurs et données persistantes)  
- **Axios** (requêtes vers l’API Marvel)  
- **Dotenv** (variables d’environnement)  
- **Crypto-js & uid2** (sécurité et génération de tokens)  
- **CORS** (communication cross-origin)  

---

## ⚙️ Installation et démarrage

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/PriscilH/Marvel-Back.git
   cd Marvel-Back
   ```

2. **Installer les dépendances**

    ```bash
     npm install
    ```

3. **Configurer les variables d'environnement**

Créer un fichier .env à la racine avec par exemple :

    ```bash
    PORT=5000
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/marvel
    MARVEL_PUBLIC_KEY=ta_cle_publique
    MARVEL_PRIVATE_KEY=ta_cle_privee
    ```

4. **Lancer le serveur**

Par défaut le serveur tourne sur http://localhost:5000.

    ```bash
     npm start
    ```
