import { useState } from "react";
import "./city.css";

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

function City() {
  const [selectedCity, setSelectedCity] = useState("London");
  const [language, setLanguage] = useState("en");
  return (
    <div className="container">
      <header>
        <h1>{language === "en" ? "Cities" : "เมือง"}</h1>
        <button onClick={() => setLanguage(language === "en" ? "th" : "en")}>
          {language === "en" ? "th" : "en"}
        </button>
      </header>
      <div className="content">
        <nav>
          {Object.keys(cities).map((city) => (
            <button key={city} onClick={() => setSelectedCity(city)}
              style={city === selectedCity ? { backgroundColor: "white", boxShadow: "0px 0px 8px 6px rgba(255, 255, 255, 0.25)" } : undefined}>
              {city}
            </button>
          ))}
        </nav>
        <main>
          <h2>{selectedCity}</h2>
          <p>{cities[selectedCity][language]}</p>
        </main>
      </div>
      <footer>
        <h1>Footer</h1>
        <a href="/blackwhite">
  <button>Next</button>
</a>
      </footer>
    </div>
  );
}

export default City;