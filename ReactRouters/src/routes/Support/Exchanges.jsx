import React from "react";
import "../../styles/Support/Exchanges.css";
import { Link } from "react-router-dom";

const Exchanges = () => {
  return (
    <div className="main">
    <header className="main-header">
    <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
          <a>
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
        </div>
      </header>

      <div className= "title">
       <h4>MareMansa Kids | Trocas e Devoluções</h4>
      </div>
  
      <hr size="1" />

      <div className="about">
    <div classname="empresa">
      <img src="src/assets/empresa.png" />
    </div>
  </div>

        <hr size="1" />


      <div className="history">
        <div className="maremansa">
          <h5>Política de Trocas e Devoluções</h5><br></br>
            <h6>1. Prazo para Trocas e Devoluções:</h6>
            <p>• Você pode solicitar uma troca ou devolução no prazo de 30 dias a partir da data de recebimento do seu pedido. </p><br></br>
            
            <h6>2. Condições para Trocas e Devoluções:</h6>
            <p>• O item deve estar em perfeitas condições, não usado, não lavado e com todas as etiquetas e embalagens originais intactas.</p>
            <p>• Itens personalizados não são elegíveis para trocas ou devoluções, a menos que haja defeito de fabricação. </p><br></br>
            
            <h6>3. Processo de Solicitação:</h6>
            <p>• Para iniciar o processo de troca ou devolução, entre em contato com nosso serviço de atendimento ao cliente através do nosso WhatsApp, informando o número do seu pedido e o motivo da solicitação.</p>
            <p>• Nossa equipe de atendimento ao cliente fornecerá a você um código de autorização e instruções sobre como proceder.
            </p><br></br>

            <h6>4. Trocas:</h6>
            <p>• Após a aprovação da solicitação de troca, você poderá escolher um item alternativo de nosso catálogo de produtos. </p>
            <p>• Se o valor do novo item for diferente do item original, ajustaremos o pagamento de acordo.</p>
            <p>• Assim que recebermos o item original de volta, enviaremos o novo item escolhido.</p><br></br>

            <h6>5. Devoluções:</h6>
            <p>• Após a aprovação da solicitação de devolução, você receberá instruções sobre como embalar e enviar o item de volta para nós.</p>
            <p>• Assim que recebermos o item devolvido e verificarmos que está em conformidade com nossas políticas de trocas e devoluções, iniciaremos o processo de reembolso.</p>
            <p>O reembolso será feito na forma de pagamento original e pode levar alguns dias úteis para ser processado.</p><br></br>

            <h6>6. Itens com Defeito:</h6>
            <p>• Se você receber um item com defeito, entre em contato conosco imediatamente.</p>
            <p>• Nós providenciaremos a troca ou reembolso do item defeituoso, incluindo os custos de envio.</p><br></br>

            <h6>7. Informações Adicionais:</h6>
            <p>• Quaisquer custos de envio associados a trocas ou devoluções serão de responsabilidade do cliente, a menos que o motivo seja um defeito de fabricação.</p>
            <p>• Recomendamos que você use um método de envio rastreável ao devolver itens para garantir a entrega segura.
      A equipe da MareMansa Kids está sempre à disposição para ajudar com suas necessidades de trocas e devoluções. Queremos que você tenha uma experiência de compra positiva e sem preocupações.</p><br></br>
            
            <p>Agradecemos por escolher MareMansa Kids e estamos comprometidos em fornecer produtos de alta qualidade e um excelente atendimento ao cliente. </p><br></br>
            
            <p>Última atualização: 23/08/2021</p><br></br>

            <p>Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em nos contatar. Estamos aqui para ajudar.</p><br></br>
        </div>
      </div>

      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="src/assets/baleia.png" />
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
              <Link to="#"><i className="fa fa-whatsapp"></i></Link>
              <Link to="#"><i className="fa fa-google"></i></Link>
              <Link to="#"><i className="fa fa-instagram"></i></Link>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Exchanges;
