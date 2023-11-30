import { useState } from "react";
import "./App.css";

function App() {
  const [arrayNum, setArrayNum] = useState(0);

  const imagesURL = [
    "https://t3.ftcdn.net/jpg/05/55/82/46/360_F_555824600_OvpqblejjhjExcDDulsWkY3RxDrAr2hF.jpg",
    "https://t3.ftcdn.net/jpg/05/28/86/66/240_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/41/76/36/1000_F_441763693_PEd1bAxdYJwzqhC9FwTFM5x2FIO9J1Fb.jpg",
  ];
  console.log("array num = ", arrayNum);
  const handlePrevious = () => {
    arrayNum <= 0 ? setArrayNum(2) : setArrayNum(arrayNum - 1);
  };

  const handleNext = () => {
    arrayNum >= imagesURL.length - 1
      ? setArrayNum(0)
      : setArrayNum(arrayNum + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        objectFit: "cover",
      }}
    >
      <button onClick={handlePrevious}>Previous</button>
      {imagesURL.map((url, i) => {
        return (
          <img
            key={i}
            src={url}
            id="image"
            alt="images"
            style={{
              alignItems: "center",
              height: "500px",
              width: "500px",
              position: "relative",
              top: "40",
            }}
          />
        );
      })}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
