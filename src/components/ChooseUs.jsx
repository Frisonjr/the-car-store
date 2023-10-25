import MainImg from "../images/chooseUs/tst.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Por que nos escolher?</h4>
                <h2>Não há outra locadora igual</h2>
                <p>
                  Descobra o melhor de todos os mundos. Um serviço de aluguel de
                  carros que combina a conveniência de um carro com a qualidade
                  de um carro novo.
                </p>
                <a href="#home">
                  Mais detalhes &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Serviço mundial</h4>
                    <p>Veículos ao redor do mundo a sua disposição.</p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Preços imperdíveis</h4>
                    <p>
                      Obtenha tudo o que você precisa a um preço conveniente e
                      transparente com nossa política de preços tudo incluído.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Sem taxas adicionais</h4>
                    <p>
                      Aproveite a tranquilidade com nossa política de sem taxas
                      ocultas. Acreditamos em preços transparentes e honestos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
