// Importation des dépendances et utilitaires
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Image from "next/image";
import getCurrentDate from "@/utils/getCurrentDate";
import createModal from "@/utils/createModal";

// Liste des insultes
let insultes = [
  "Je te baise ta mère sale fdp",
  "Bobo va",
  "WALLAH T TROP CON WALLAH",
  "TROU DBALL",
  "ESPECE DE SALE FILS DE PUTE",
  "WALLAH T TEOP CON FRER",
  "ferme ta gueule je suis à genou fermé ta geule",
  "Mais la vraiment t un trou du cul",
  "Teoudball va",
];

// Composant principal Home
export default function Home() {
  // Déclaration des hooks d'état
  const [tweet, setTweet] = useState("");
  const [date, setDate] = useState("");

  const [cookieLike, setCookieLike] = useCookies(["like"]);
  const [like, setLike] = useState(0);

  const [userName, setUserName] = useState("");
  const [userNameRatio, setUserNameRatio] = useState("");

  const [arobase, setArobase] = useState("");
  const [arobaseRatio, setArobaseRatio] = useState("");

  // Gestion des cookies
  const [cookieArobase, setCookieArobase] = useCookies(["arobase", "arobase2"]);

  const [profilePic, setProfilePic] = useState(
    "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
  );
  const [profilePicRatio, setProfilePicRatio] = useState(
    "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
  );

  // Récupération des informations utilisateur et mise à jour du profil
  useEffect(() => {
    // Choix aléatoire d'une insulte dans la liste
    const nombreAleatoire = Math.floor(Math.random() * insultes.length);
    setTweet(insultes[nombreAleatoire]);

    // Fonction pour récupérer le nom d'utilisateur
    const fetchUserName = async () => {
      const response = await fetch(
        `${window.location.href}/api/username/${
          cookieArobase.arobase || "Arkunir"
        }`
      );
      const data = await response.json();
      setUserName(data);
    };
    // Fonction pour récupérer le nom d'utilisateur du ratio
    const fetchUserNameRatio = async () => {
      const response = await fetch(
        `${window.location.href}/api/username/${
          cookieArobase.arobase2 || "elonmusk"
        }`
      );
      const data = await response.json();
      setUserNameRatio(data);
    };

    // Fonction pour récupérer l'image de profil
    const fetchProfilePic = async () => {
      const response = await fetch(
        `${window.location.href}/api/profil/${
          cookieArobase.arobase || "Arkunir"
        }`
      );
      const data = await response.json();
      setProfilePic(data);
    };

    // Fonction pour récupérer l'image de profil du ratio
    const fetchProfilePicRatio = async () => {
      const response = await fetch(
        `${window.location.href}/api/profil/${
          cookieArobase.arobase2 || "elonmusk"
        }`
      );
      const data = await response.json();
      setProfilePicRatio(data);
    };

    // Appel des fonctions pour récupérer les données
    fetchUserName();
    fetchUserNameRatio();
    fetchProfilePic();
    fetchProfilePicRatio();

    // Mise à jour de la date toutes les secondes
    const interval = setInterval(() => {
      setDate(getCurrentDate());
    }, 1000);
    return () => clearInterval(interval);
  }, [cookieArobase]);

  // Mise à jour du nombre de likes
  useEffect(() => {
    let like = cookieLike.like ? cookieLike.like : 0;
    setLike(like);
  }, [cookieLike, like]);

  // Mise à jour des valeurs arobase
  useEffect(() => {
    setArobase(cookieArobase.arobase || "Arkunir");
    setArobaseRatio(cookieArobase.arobase2 || "elonmusk");
  }, [cookieArobase]);

  // Fonction pour formater le nombre de likes
  const formatLike = () => {
    if (like < 1000) {
      return like;
    } else if (like < 1000000) {
      return (like / 1000).toFixed(1) + "k";
    } else if (like < 1000000000) {
      return (like / 1000000).toFixed(1) + "m";
    }
  };

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="header">
            <Image
              src="/images/croix.png"
              alt="images"
              width={24}
              height={24}
            />
          </div>
          <div className="initial_tweet">
            <div className="profil_pic">
              <Image src={profilePic} alt="images" width={50} height={50} />
            </div>
            <div className="tweet_content">
              <div className="tweet_header">
                <p className="username">{userName}</p>
                <p className="arobase">@{arobase}</p>
                <p className="date">· 4 janv.</p>
              </div>
              <div className="tweet_text">
                <p>
                  {tweet} <span>@{arobaseRatio}</span>
                </p>
              </div>
              <div className="tweet_footer">
                <div className="tweet_stats">
                  <svg viewBox="0 0 24 24">
                    <g>
                      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                    </g>
                  </svg>
                  <p>616</p>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                    </g>
                  </svg>
                  <p>0</p>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                    </g>
                  </svg>
                  <p>0</p>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </g>
                  </svg>
                  <p>0</p>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="reply_tweet">
            <div className="infos">
              <div className="profil_pic">
                <Image
                  src={profilePicRatio}
                  alt="images"
                  width={50}
                  height={50}
                />
              </div>
              <div className="tweet_header">
                <p className="username">{userNameRatio}</p>
                <p className="arobase">@{arobaseRatio}</p>
              </div>
            </div>
            <div className="tweet_content">
              <p className="reply_text">
                En réponse à<span> @{arobase}</span>
              </p>
              <div className="tweet_text">
                <p className="tweet_text_content">Ratio</p>
                <br />
                <p className="tweet_text_date">{date}</p>
              </div>
              <div className="tweet_footer">
                <p>
                  <b>1</b> vues
                </p>
                <p>
                  <b>{formatLike(like)}</b> Jaime
                </p>
              </div>
              <div className="tweet_stats_footer">
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
                  >
                    <g>
                      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                    </g>
                  </svg>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                    </g>
                  </svg>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    onClick={() => {
                      setCookieLike("like", Number(like) + 1, {
                        path: "/",
                      });
                    }}
                  >
                    <g>
                      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </g>
                  </svg>
                </div>
                <div className="tweet_stats">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="buttons">
            <button
              className="reset_button"
              onClick={() => {
                createModal();
              }}
            >
              <strong>Changer arobase</strong>
            </button>
            <button
              className="reset_button"
              onClick={() => {
                setCookieLike("like", 0, {
                  path: "/",
                });
              }}
            >
              <strong>Reset</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
