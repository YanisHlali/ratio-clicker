// Importation de la bibliothèque Twit
import Twit from "twit";

// Fonction asynchrone pour récupérer les informations utilisateur sur Twitter
async function getUser(name) {
  // Création d'une instance de Twit avec les clés d'API et jetons d'accès
  const bot = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: 60 * 1000,
  });

  // Requête pour obtenir les informations utilisateur à partir du nom d'utilisateur
  const result = await bot.get("users/show", {
    screen_name: name,
  });
  return result;
}

// Fonction de gestionnaire pour traiter les requêtes et les réponses
export default async function handler(req, res) {
  // Appeler la fonction getUser avec le nom d'utilisateur passé en paramètre
  getUser(req.query.name).then((result) => {
    // Extraire l'URL de l'image de profil à partir des données reçues
    let imageURL = result.data.profile_image_url_https;
    // Remplacer la version normale de l'image par la version 400x400
    imageURL = imageURL.replace("_normal", "_400x400");
    // Renvoyer l'URL de l'image de profil avec un statut HTTP 200 (OK)
    res.status(200).json(imageURL);
  });
}
