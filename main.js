var blockFirst = document.querySelector(".block.first");
var container = document.querySelector(".container");

blockFirst.addEventListener("click", function () {
    container.innerHTML = "";
        var clothingData = [
          {
            image: "images/AW23-POD00G-01X_F1.webp",
            description: "Лонгслів Tommy Hilfiger жіночий колір бежевий"
          },
          {
            image: "images/AW23-TSD14J-80X_F1.webp",
            description: "Бавовняна футболка Tommy Hilfiger"
          },
          {
            image:  "images/AW23-KZD05E-01X_F1.webp",
            description: "Піджак United Colors of Benetton"
          },
          {
            image:  "images/AW23-SJD0BF-55X_F1.webp",
            description: "Джинси Pepe Jeans жіночі висока посадка"
          },
          {
            image:  "images/AW23-SWD18E-33X_F1.webp",
            description: "Кофта Polo Ralph Lauren жіночий колір червоний однотонна"
          },
          {
            image: "images/AW23-SWD123-09X_F1.webp",
            description: "Светр з домішкою вовни Trussardi жіночий колір сірий легкий гольф"
          },
          {
            image: "images/AW23-SWD18D-01X_F1.webp",
            description: "Вовняний светр Polo Ralph Lauren жіночий колір бежевий"
          },
          {
            image:    "images/AW23-SUD1N2-33X_F1.webp",
            description: "Сукня Gestuz колір червоний maxi облягаюча"
          },
          {
            image: "images/AW23-KZD03Y-79X_F1.webp",
            description: "Піджак Marella колір сірий однобортний візерунок"
          },
          {
            image:  "images/AW23-SWD1FB-90X_F1.webp",
            description: "Вовняний светр Marella жіночий колір сірий"
          },
          {
            image:  "images/AW23-TSD1AT-50X_F1.webp",
            description: "Бавовняна футболка Calvin Klein Jeans 2-pack"
          },
          {
            image:   "images/AW23-SUD1IY-80X_F1.webp",
            description: "Сукня з домішкою вовни Morgan колір бежевий mini облягаюча"
          },
        ];
  
        for (const { image, description } of clothingData) {
            const clothingItem = document.createElement("div");
            clothingItem.className = "clothing-item";
        
            clothingItem.innerHTML = `
                <img class="clothing-image" src="${image}" alt="Clothing Image">
                <p class="clothing-description">${description}</p>`;
        
            container.appendChild(clothingItem);
        }
    });
