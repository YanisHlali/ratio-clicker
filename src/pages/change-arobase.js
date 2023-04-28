// Importation des dépendances
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";

// Composant NewGame
export default function NewGame() {
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Récupérer la valeur de l'élément HTML avec l'ID "arobase" et enregistrer dans un cookie
    setCookie("arobase", document.querySelector("#arobase").value, {
      path: "/",
    });
    // Récupérer la valeur de l'élément HTML avec l'ID "arobase2" et enregistrer dans un cookie
    setCookie("arobase2", document.querySelector("#arobase2").value, {
      path: "/",
    });
    // Rediriger l'utilisateur vers la page d'accueil
    window.location.href = "/";
  };

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="form">
            <input type="text" id="arobase" />
          </div>
          <br />
          <br />
          <div className="form">
            <input type="text" id="arobase2" />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <input
            type="submit"
            className="submit"
            value="Valider"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </>
  );
}
