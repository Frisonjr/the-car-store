import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/test1.webp";
import Img3 from "../images/testimonials/test2.webp";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Avaliado por Pessoas</h4>
              <h2>Depoimentos dos Clientes</h2>
              <p>
                Descubra o impacto positivo que causamos em nossos clientes
                lendo os depoimentos deles. Nossos clientes experimentaram nosso
                serviço e resultados, e estão ansiosos para compartilhar suas
                experiências positivas com você.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "Nunca me senti tão bem com um carro alugado. O carro parecia
                  ter saido direto de um filme de tão bonito que era. Recomendo
                  muito!""
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Marcos Jeeves</h4>
                      <p>Mach 5</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "Não acredito que eu consegui alugar um carro tão bom por um
                  preço tão baixo. Só cuidado com os fantasmas que aparecem no
                  banco de trás."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Fred</h4>
                      <p>Máquina de mistério</p>
                    </span>
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

export default Testimonials;
