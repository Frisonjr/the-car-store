import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                The <span>CAR</span> Store
              </li>
              <li>Infinidade de veículos que você jamais sonhou!</li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; (62) 12345-6789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carstore@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Empresa</li>
              <li>
                <a href="#home">The car store</a>
              </li>
              <li>
                <a href="#home">Carros</a>
              </li>
              <li>
                <a href="#home">Aplicativo</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Faça parte da nossa equipe</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Suporte para todas suas necessidades</li>
              <li>Trabalhamos 24/7</li>
              <li>Atendimendo 24hrs</li>
            </ul>

            <ul className="footer-content__2">
              <li>Assinatura</li>
              <li>
                <p>Faça sua assinatura para ficar por dentro das ultimas atualizações e pormoções.</p>
              </li>
              <li>
                <input type="email" placeholder="Coloque seu email"></input>
              </li>
              <li>
                <button className="submit-email">Enviar</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
