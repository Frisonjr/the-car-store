import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contato" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Entre em contato conosco</h2>
              <p>
                Em caso de dúvidas ou sugestões, entre em contato conosco
                preenchendo o formulário abaixo. Responderemos o mais breve
                possível.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; +55 (62) 12345-6789
              </a>
              <a href="/">
                <IconMail /> &nbsp; car-rents@gmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Brasil
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nome completo <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Adalberto Gomes"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="email@exemplo.com"></input>

                <label>
                  Fale conosco <b>*</b>
                </label>
                <textarea placeholder="Escreva aqui.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>
                Alugue um carro <span>nesse instante</span>
              </h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(62) 12345-6789</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
