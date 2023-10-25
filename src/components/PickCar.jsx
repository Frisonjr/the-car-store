import { CAR_DATA } from "./CarData";
import { useState } from "react";
import CarBox from "./CarBox";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Nossos modelos</h3>
              <h2>Conheça nossa frota</h2>
              <p>
                Escolha entre uma variedade de modelos e preços para encontrar o
                carro perfeito para você e sua viagem.
              </p>
            </div>
            <div className="pick-container__car-content">
              <div className="pick-box">
                {CAR_DATA.map((car, index) => (
                  <button
                    key={index}
                    className={`${coloringButton(`btn${index + 1}`)}`}
                    onClick={() => {
                      setActive(`Car${index}`);
                      btnID(`btn${index + 1}`);
                    }}
                  >
                    {car.name}
                  </button>
                ))}
              </div>

              {CAR_DATA.map(
                (car, index) =>
                  active === `Car${index}` && (
                    <CarBox data={CAR_DATA} carID={index} />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
