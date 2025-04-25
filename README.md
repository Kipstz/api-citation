# 📜 API de Citations - Express.js

Une petite API construite avec **Node.js** et **Express.js** qui renvoie une citation aléatoire à chaque requête.

## 🚀 Fonctionnalités

- 🔁 Retourne une citation aléatoire au format JSON
- 🔥 Super légère et facile à déployer

## 📦 Installation

1. Clone ce dépôt :

```bash
git clone https://github.com/Kipstz/api-citation.git
cd api-citation
```

2. Installe les dépendances :

```bash
npm install
```

3. Démarre le serveur :

```bash
node index.js
```

> 💡 Le serveur démarre sur `http://localhost:3000`

## 📡 Utilisation

Accède à l'URL suivante pour obtenir une citation aléatoire :

```
GET http://localhost:3000/citation
```

### Exemple de réponse

```json
{
  "citation": "La vie est ce qui se passe quand on est occupé à faire d'autres projets. - John Lennon"
}
```

## 🛠 Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## 📁 Structure du projet

```
api-citation/
├── index.js        # Code source principal
├── package.json    # Dépendances et scripts npm
└── README.md       # Ce fichier
```

## 📌 Améliorations possibles

- Ajouter une base de données pour stocker les citations
- Créer une interface web simple pour voir les citations
- Ajouter des routes pour ajouter ou supprimer des citations

## 🧑‍💻 Auteur

Développé avec ❤️ par [Kipstz](https://github.com/Kipstz)
