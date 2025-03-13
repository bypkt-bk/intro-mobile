document.addEventListener("DOMContentLoaded", function () {
  const cities = {
    London: {
      en: "London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.",
      th: "ลอนดอนเป็นเมืองหลวงของอังกฤษ เป็นเมืองที่มีประชากรมากที่สุดในสหราชอาณาจักร มีประชากรกว่า 13 ล้านคนในเขตเมือง"
    },
    Paris: {
      en: "Paris is the capital of France. It is known for its art, fashion, gastronomy, and culture.",
      th: "ปารีสเป็นเมืองหลวงของฝรั่งเศส มีชื่อเสียงด้านศิลปะ แฟชั่น อาหาร และวัฒนธรรม"
    },
    Tokyo: {
      en: "Tokyo is the capital of Japan. It is a bustling metropolis blending modern and traditional elements.",
      th: "โตเกียวเป็นเมืองหลวงของญี่ปุ่น เป็นมหานครที่ผสมผสานระหว่างความทันสมัยและวัฒนธรรมดั้งเดิม"
    }
  };

  let selectedCity = "London";
  let language = "en";

  const container = document.querySelector(".container");
  const header = container.querySelector("header");
  const content = container.querySelector(".content");
  const main = content.querySelector("main");
  const nav = content.querySelector("nav");

  const updateUI = () => {
    header.querySelector("h1").textContent = language === "en" ? "Cities" : "เมือง";
    header.querySelector("button").textContent = language === "en" ? "th" : "en";
    main.querySelector("h2").textContent = selectedCity;
    main.querySelector("p").textContent = cities[selectedCity][language];

    nav.innerHTML = "";
    Object.keys(cities).forEach((city) => {
      const button = document.createElement("button");
      button.textContent = city;
      button.onclick = () => {
        selectedCity = city;
        updateUI();
      };
      if (city === selectedCity) {
        button.style.backgroundColor = "white";
        button.style.boxShadow = "0px 0px 8px 6px rgba(255, 255, 255, 0.25)";
      }
      nav.appendChild(button);
    });
  };

  header.querySelector("button").onclick = () => {
    language = language === "en" ? "th" : "en";
    updateUI();
  };

  updateUI();

});
