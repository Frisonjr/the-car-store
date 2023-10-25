import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Planeje sua viagem</h3>
              <h2>De maneira fácil e rápida com nossos carros</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Escolha um carro</h3>
                <p>
                  Ampla gama de veículos para todas as suas necessidades de
                  direção. Temos o carro perfeito para atender às suas
                  necessidades.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contate nossos atendentes</h3>
                <p>
                  Nossos operadores experientes e amigáveis estão sempre prontos
                  para ajudar com quaisquer perguntas ou preocupações.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Mão na roda</h3>
                <p>
                  Quer você esteja pegando a estrada aberta ou as ruas da
                  cidade, estamos prontos para atendê-lo com nossa ampla
                  variedade de carros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
