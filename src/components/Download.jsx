import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Faça o download do nosso app</h2>
            <p>
              Para ficar dentro de novos veículos e ofertas, utilize nosso app e
              tenha acesso a tudo. Navegue de maneira fácil e rápida, e tenha
              acesso a tudo que você precisa na palma da sua mão.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
