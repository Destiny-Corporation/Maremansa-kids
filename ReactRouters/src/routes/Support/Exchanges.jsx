import React from "react";
import "../../styles/Support/Exchanges.css";
import { Link } from "react-router-dom";

const Exchanges = () => {
  return (
    <><div className="main">
 <header className="main-header">
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
        </div>
      </header>

      <div className="search-container-about">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="title-section">
      <h1 className="general-title">MAREMANSA | TROCAS E DEVOLUÇÕES</h1>
      <hr className="hr-sections"></hr>
      </div>

      <div className="about">
    <div className="company">
      <img src="/assets/banner-maremansa.png" />
    </div>
  </div>

  <hr className="hr-sections"></hr>


      <div className="history">
        <div className="maremansa">
          <h3 className="general-subtitle-h3">Política de Trocas e Devoluções</h3><br></br>
            <h6 className="general-title-h6">1 | Prazo para Trocas e Devoluções:</h6>
            <p className="about-text">• Você pode solicitar uma troca ou devolução no prazo de 30 dias a partir da data de recebimento do seu pedido. </p><br></br>
            
            <h6 className="general-title-h6">2 | Condições para Trocas e Devoluções:</h6>
            <p className="about-text">• O item deve estar em perfeitas condições, não usado, não lavado e com todas as etiquetas e embalagens originais intactas.</p>
            <p className="about-text">• Itens personalizados não são elegíveis para trocas ou devoluções, a menos que haja defeito de fabricação. </p><br></br>
            
            <h6 className="general-title-h6">3 | Processo de Solicitação:</h6>
            <p className="about-text">• Para iniciar o processo de troca ou devolução, entre em contato com nosso serviço de atendimento ao cliente através do nosso WhatsApp, informando o número do seu pedido e o motivo da solicitação.</p>
            <p className="about-text">• Nossa equipe de atendimento ao cliente fornecerá a você um código de autorização e instruções sobre como proceder.
            </p><br></br>

            <h6 className="general-title-h6">4 | Trocas:</h6>
            <p className="about-text">• Após a aprovação da solicitação de troca, você poderá escolher um item alternativo de nosso catálogo de produtos. </p>
            <p className="about-text">• Se o valor do novo item for diferente do item original, ajustaremos o pagamento de acordo.</p>
            <p className="about-text">• Assim que recebermos o item original de volta, enviaremos o novo item escolhido.</p><br></br>

            <h6 className="general-title-h6">5 | Devoluções:</h6>
            <p className="about-text">• Após a aprovação da solicitação de devolução, você receberá instruções sobre como embalar e enviar o item de volta para nós.</p>
            <p className="about-text">• Assim que recebermos o item devolvido e verificarmos que está em conformidade com nossas políticas de trocas e devoluções, iniciaremos o processo de reembolso.</p>
            <p className="about-text">O reembolso será feito na forma de pagamento original e pode levar alguns dias úteis para ser processado.</p><br></br>

            <h6 className="general-title-h6">6 | Itens com Defeito:</h6>
            <p className="about-text">• Se você receber um item com defeito, entre em contato conosco imediatamente.</p>
            <p className="about-text">• Nós providenciaremos a troca ou reembolso do item defeituoso, incluindo os custos de envio.</p><br></br>

            <h6 className="general-title-h6">7 | Informações Adicionais:</h6>
            <p className="about-text">• Quaisquer custos de envio associados a trocas ou devoluções serão de responsabilidade do cliente, a menos que o motivo seja um defeito de fabricação.</p>
            <p className="about-text">• Recomendamos que você use um método de envio rastreável ao devolver itens para garantir a entrega segura.
      A equipe da MareMansa Kids está sempre à disposição para ajudar com suas necessidades de trocas e devoluções. Queremos que você tenha uma experiência de compra positiva e sem preocupações.</p><br></br>
            
            <p className="about-text">Agradecemos por escolher MareMansa Kids e estamos comprometidos em fornecer produtos de alta qualidade e um excelente atendimento ao cliente. </p><br></br>
            
            <p className="about-text">Última atualização: 23/08/2021<br></br>
            Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em nos contatar. Estamos aqui para ajudar.</p>
        </div>
      </div>

      </div>

      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="/assets/whale.png" />
          </div>

          <div className="footer-section-div">
            <h3>SOBRE NÓS</h3>
            <li>
              <Link to="/company">A EMPRESA</Link>
            </li>
            <li>
              <Link to="/physicalstore">CONHEÇA NOSSA LOJA FÍSICA</Link>
            </li>
            <li>
              <Link to="/partners">NOSSOS PARCEIROS</Link>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>SUPORTE</h3>
            <li>
              <Link to="/services">ATENDIMENTO</Link>
            </li>
            <li>
              <Link to="/exchanges">TROCAS E DEVOLUÇÕES</Link>
            </li>
            <li>
              <Link to="/sitemap">MAPA DO SITE</Link>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>CONTATOS</h3>
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </>
  );
};

export default Exchanges;
