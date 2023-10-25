import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Perguntas Frequentes</h2>
              <p>
                Perguntas Frequentes sobre o Processo de Reserva de Aluguel de
                Carros em Nosso Site: Respostas para Dúvidas e Perguntas Comuns.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>
                    1. O que é especial nas ofertas de aluguel dos nossos
                    carros?
                  </p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Temos os melhores preços de aluguel de carros. Nossas ofertas
                  de aluguel de carros são incomparáveis e garantimos que você
                  não encontrará melhores preços em nenhum outro lugar.
                  Oferecemos uma ampla gama de veículos para atender às suas
                  necessidades e orçamento. Nossos veículos são mantidos em
                  ótimas condições e são regularmente inspecionados para
                  garantir que você tenha uma experiência de condução segura e
                  agradável.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Como encontro pontos de retirada e devolução?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Você pode encontrar pontos de retirada e devolução em nosso
                  site, aplicativo móvel ou entrando em contato com nossa equipe
                  de atendimento ao cliente.{" "}
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Como sei qual o melhor carro?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Escolha aquele que melhor se adapta às suas necessidades e
                  requisitos. Se você estiver viajando com sua família, um carro
                  espaçoso será uma boa opção. Se você estiver viajando sozinho,
                  um carro pequeno será suficiente.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
