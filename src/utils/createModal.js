function newElement(typeElement, className, idName, content) {
     if (typeElement === "div") {
          let div = document.createElement("div");
          div.className = className;
          return div;
     } else if (typeElement === "p") {
          let p = document.createElement("p");
          p.className = className;
          p.innerHTML = content;
          return p;
     } else if (typeElement === "button") {
          let button = document.createElement("button");
          button.className = className;
          button.id = idName;
          button.innerHTML = content;
          return button;
     }
}

export default function createModal() {
     let modal = document.createElement("div");

     let divModalOverlay = newElement("div", "modal-overlay", "", "");
     let divModalContent = newElement("div", "modal-content", "", "");
     let pModalContent = newElement(
          "p",
          "",
          "",
          "Voulez-vous créer une nouvelle partie ?"
     );
     let buttonConfirm = newElement(
          "button",
          "",
          "confirm-button",
          "Confirmer"
     );
     let buttonCancel = newElement("button", "", "cancel-button", "Annuler");

     divModalContent.appendChild(pModalContent);
     divModalContent.appendChild(buttonConfirm);
     divModalContent.appendChild(buttonCancel);

     divModalOverlay.appendChild(divModalContent);

     modal.appendChild(divModalOverlay);

     modal.style.display = "block";
     document.body.appendChild(modal);

     document
          .querySelector(".modal-overlay")
          .addEventListener("click", function (event) {
               if (event.target === this) {
                    document.querySelector(".modal-overlay").remove();
               }
          });

     document
          .querySelector("#confirm-button")
          .addEventListener("click", function () {
               document.querySelector(".modal-overlay").remove();
               // Redirect to new-change-arobase page
               window.location.href = "/change-arobase";
          });

     document
          .querySelector("#cancel-button")
          .addEventListener("click", function () {
               document.querySelector(".modal-overlay").remove();
          });
}
