const express = require('express');
const app = express();
const port = 3000;

const citations = [
    "La vie est ce qui se passe quand on est occupé à faire d'autres projets. - John Lennon",
    "L’avenir appartient à ceux qui croient à la beauté de leurs rêves. - Eleanor Roosevelt",
    "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
    "Soyez vous-même; tous les autres sont déjà pris. - Oscar Wilde",
    "La seule façon de faire du bon travail est d’aimer ce que vous faites. - Steve Jobs",
    "Le succès, c’est se promener d’échecs en échecs tout en restant motivé. - Winston Churchill",
    "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi. - Georges Clémenceau",
    "Croyez en vous et tout devient possible. - Anonyme",
    "Fais de ta vie un rêve, et d’un rêve, une réalité. - Antoine de Saint-Exupéry",
    "Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles. - Sénèque",
    "N’attendez pas. Le moment ne sera jamais 'juste bon'. - Napoleon Hill",
    "Commencez là où vous êtes. Utilisez ce que vous avez. Faites ce que vous pouvez. - Arthur Ashe",
    "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions. - Dalaï Lama",
    "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu’un d’autre. - Steve Jobs",
    "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
    "La meilleure façon de prédire l’avenir, c’est de le créer. - Peter Drucker",
    "Rêve grand. Commence petit. Agis maintenant. - Robin Sharma",
    "Tomber est permis. Se relever est ordonné. - Proverbe russe",
    "Il n’y a pas d’ascenseur vers le succès, vous devez prendre les escaliers. - Zig Ziglar",
    "Le seul endroit où le succès vient avant le travail, c’est dans le dictionnaire. - Vidal Sassoon",
    "N’attendez pas le moment parfait, prenez un moment et rendez-le parfait. - Zoey Sayward",
    "Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve. - Antoine de Saint-Exupéry",
    "Rien de grand ne s’est accompli sans passion. - Hegel",
    "L’obstination est le chemin de la réussite. - Charlie Chaplin",
    "Tout semble impossible jusqu’à ce que ce soit fait. - Nelson Mandela",
    "Ce que vous faites aujourd’hui peut améliorer tous vos lendemains. - Ralph Marston",
    "Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte. - Paulo Coelho",
    "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours. - Gandhi",
    "C’est dans l’effort que l’on trouve la satisfaction et non dans la réussite. Un plein effort est une pleine victoire. - Gandhi",
    "Agis comme s’il était impossible d’échouer. - Winston Churchill",
    "Chaque jour est une chance de changer ta vie. - Anonyme",
    "Rêver, c’est déjà planifier. - Gloria Steinem",
    "Le futur appartient à ceux qui prennent des risques aujourd’hui. - Anonyme",
    "Sois le changement que tu veux voir dans le monde. - Gandhi",
    "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes. - Edmund Hillary",
    "Il n’est jamais trop tard pour devenir ce que vous auriez pu être. - George Eliot",
    "Il faut toujours viser la lune, car même en cas d’échec, on atterrit dans les étoiles. - Oscar Wilde",
    "Faites chaque jour quelque chose qui vous fait peur. - Eleanor Roosevelt",
    "Personne ne peut vous faire sentir inférieur sans votre consentement. - Eleanor Roosevelt",
    "Visez le progrès, pas la perfection. - Anonyme"
];


app.get('/citation', (req, res) => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    const randomCitation = citations[randomIndex];
    res.json({ citation: randomCitation });
});

app.listen(port, () => {
    console.log(`API de citation écoute sur http://localhost:${port}`);
});
