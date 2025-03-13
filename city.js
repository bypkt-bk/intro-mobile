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

function setCity(cityName) {
  document.getElementById("description").innerHTML = cities[cityName][language];
  document.getElementById("title").innerHTML = cityName;
  return cityName;
}
function toggleLanguage() {
  language = language === "en" ? "th" : "en"; // Toggle language
  document.getElementById("language").innerText = language === "en" ? "th" : "en"; // Update button text
  setCity(selectedCity); // Update city description with the new language
}

setCity(selectedCity);
