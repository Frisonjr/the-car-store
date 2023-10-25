import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  const car = data[carID]; // Get the car data for the specified carID
  return (
    <>
      <div key={carID} className="box-cars">
        {/* car */}
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}
          <img
            style={{ display: carLoad ? "none" : "block" }}
            src={car.img}
            alt="car_img"
            onLoad={() => setCarLoad(false)}
          />
        </div>
        {/* description */}
        <div className="pick-description">
          <div className="pick-description__price">
            <span>R${car.price}</span>/ por dia
          </div>
          <div className="pick-description__table">
            <div className="pick-description__table__col">
              <span>Modelo</span>
              <span>{car.model}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Marca</span>
              <span>{car.mark}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Ano</span>
              <span>{car.year}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Portas</span>
              <span>{car.doors}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Ar cond.</span>
              <span>{car.air}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Transmissão</span>
              <span>{car.transmission}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Combustível</span>
              <span>{car.fuel}</span>
            </div>
          </div>
          {/* btn cta */}
          <a className="cta-btn" href="#booking-section">
            Faça sua reserva
          </a>
        </div>
      </div>
    </>
  );
}

export default CarBox;
