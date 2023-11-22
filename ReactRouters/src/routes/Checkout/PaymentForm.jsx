import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../styles/PaymentForm.css";

const PaymentForm = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [total, setTotal] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState("");
  const [resumoPedido, setResumoPedido] = useState({
    total: total, // Substitua por seu valor real
    itens: [cartItems], // Substitua por seus itens reais
    endereco: "Rua das Carnaúbas, 123", // Substitua por seu endereço real
  });

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.preço * item.quantidade;
    }
    return total.toFixed(2);
  };

  useEffect(() => {
    setTotal(calculateTotal());
    // Salva os itens do carrinho no localStorage sempre que o cartItems for modificado
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [dadosPagamento, setDadosPagamento] = useState({
    numeroCartao: "",
    validade: "",
    cvv: "",
    titularCartao: "",
    numeroCartaoDebito: "",
    titularCartaoDebito: "",
  });

  const [imagemCartao, setImagemCartao] = useState("");

  const handleFormaPagamentoChange = (forma) => {
    setFormaPagamento(forma);
  };

  const handleDadosPagamentoChange = (campo, valor) => {
    setDadosPagamento({ ...dadosPagamento, [campo]: valor });
    if (campo === "numeroCartao") {
      determinarImagemCartao(valor);
    }
  };

  const determinarImagemCartao = (numeroCartao) => {
    // Lógica para determinar a imagem com base nos primeiros dígitos
    // Substitua a lógica abaixo pelo método real de determinação da imagem do cartão
    if (numeroCartao.startsWith("4")) {
      setImagemCartao("visa.png");
    } else if (numeroCartao.startsWith("5")) {
      setImagemCartao("mastercard.png");
    } else {
      setImagemCartao(""); // Caso não haja correspondência, pode definir uma imagem padrão
    }
  };

  const renderOpcoesPagamento = () => {
    const opcoes = [
      { valor: "cartao-de-credito", titulo: "Cartão de Crédito", imagem: "/assets/cartao1.png" },
      { valor: "debito", titulo: "Débito", imagem: "/assets/cartao1.png" },
      { valor: "pix", titulo: "PIX", imagem: "/assets/pix.png" },
      { valor: "boleto", titulo: "Boleto", imagem: "/assetsboleto.png" },
    ];
  
    return opcoes.map((opcao) => (
      <div key={opcao.valor} className="opcao-pagamento">
        <div className="opcao-titulo">{opcao.titulo}</div>
        <div className="opcao-linha"></div>
        <label>
          <input
            type="radio"
            value={opcao.valor}
            checked={formaPagamento === opcao.valor}
            onChange={() => handleFormaPagamentoChange(opcao.valor)}
          />
          {opcao.imagem ? (
            <img src={opcao.imagem} alt={opcao.titulo} className="opcao-imagem" />
          ) : (
            opcao.titulo
          )}
        </label>
        {formaPagamento === opcao.valor && (
          <div id={`form-${opcao.valor}`} className="opcao-pagamento">
            {renderCamposPagamento()}
          </div>
        )}
      </div>
    ));
  };
  

  const renderCamposPagamento = () => {
    const numeroCartaoErro =
    dadosPagamento.numeroCartao.length > 0 &&
    (!/^\d+$/.test(dadosPagamento.numeroCartao) || dadosPagamento.numeroCartao.length !== 16);
    const titularCartaoErro = dadosPagamento.titularCartao.length > 0 && !/^[A-Za-z\s]+$/.test(dadosPagamento.titularCartao);
    const validadeErro = dadosPagamento.validade.length > 0 && !/^\d{2}\/\d{2}$/.test(dadosPagamento.validade);
    const cvvErro = dadosPagamento.cvv.length > 0 && 
    (!/^\d+$/.test(dadosPagamento.cvv) || dadosPagamento.cvv.length !== 4);
  
    switch (formaPagamento) {
      case "cartao-de-credito":
        return (
          <div className="campos">
            {imagemCartao && <img src={imagemCartao} alt="Cartão" className="cartao-imagem" />}
            <div className="campo">
              <label htmlFor="numeroCartao">Número do cartão</label>
              <div className={`input-container ${numeroCartaoErro ? 'erro' : ''}`}>
                <input
                  type="text"
                  id="numeroCartao"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={dadosPagamento.numeroCartao}
                  onChange={(e) => handleDadosPagamentoChange("numeroCartao", e.target.value)}
                />
                {numeroCartaoErro && (
                  <span className="erro-mensagem">Número do cartão inválido</span>
                )}
              </div>
            </div>
            <div className="campo">
              <label htmlFor="titularCartao">Titular do Cartão</label>
              <div className={`input-container ${titularCartaoErro ? 'erro' : ''}`}>
                <input
                  type="text"
                  id="titularCartao"
                  placeholder="ABC"
                  value={dadosPagamento.titularCartao}
                  onChange={(e) => handleDadosPagamentoChange("titularCartao", e.target.value)}
                />
                {titularCartaoErro && (
                  <span className="erro-mensagem">Informe um titular do cartão válido</span>
                )}
              </div>
            </div>
            <div className="campo">
              <label htmlFor="validade">Validade</label>
              <div className={`input-container ${validadeErro ? 'erro' : ''}`}>
                <input
                  type="text"
                  id="validade"
                  placeholder="(MM/AA)"
                  value={dadosPagamento.validade}
                  onChange={(e) => handleDadosPagamentoChange("validade", e.target.value)}
                />
                {validadeErro && (
                  <span className="erro-mensagem">Formato de validade inválido (MM/AA)</span>
                )}
              </div>
            </div>
            <div className="campo">
              <label htmlFor="cvv">CVV</label>
              <div className={`input-container ${cvvErro ? 'erro' : ''}`}>
                <input
                  type="text"
                  id="cvv"
                  placeholder="XXXX"
                  value={dadosPagamento.cvv}
                  onChange={(e) => handleDadosPagamentoChange("cvv", e.target.value)}
                />
                {cvvErro && (
                  <span className="erro-mensagem">CVV deve ter 4 dígitos</span>
                )}
              </div>
            </div>
          </div>
        );
      case "debito":
        return (
          <div className="campos">
            <div className="campo">
              <label>Número do cartão de débito</label>
              <input
                type="text"
                placeholder="Número do cartão de débito"
                value={dadosPagamento.numeroCartaoDebito}
                onChange={(e) => handleDadosPagamentoChange("numeroCartaoDebito", e.target.value)}
              />
            </div>
            <div className="campo">
              <label>Titular do Cartão de Débito</label>
              <input
                type="text"
                placeholder="Titular do Cartão de Débito"
                value={dadosPagamento.titularCartaoDebito}
                onChange={(e) => handleDadosPagamentoChange("titularCartaoDebito", e.target.value)}
              />
            </div>
          </div>
        );
      // Restante do código...
      default:
        return null;
    }
  };

  const concluirPagamento = () => {
    // Adicione lógica de validação e conclusão do pagamento aqui
    console.log("Concluir pagamento");
  };

  return (
    <div className="main">
    <header className="main-header">
      <div className="search-container-header">
        <input
          type="text"
          className="search-bar-header"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button-header" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>
      <div className="logo">
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="header-logo-center"
          />
        </Link>
      </div>
      <div className="icons">
        <Link to="/requests">
          <i className="bx bx-user bt-header" style={{ color: "#ffffff" }}></i>
        </Link>
        <Link to="/wishlist">
          <i
            className="bx bx-heart bt-header"
            style={{ color: "#ffffff" }}
          ></i>
        </Link>
        <Link to="/cart">
          <i className="bx bx-cart bt-header" style={{ color: "#ffffff" }}></i>
        </Link>
      </div>
    </header>

    <div className="payment-container">
      <div className="payment-header">
        <h1 className="payment-title">Finalizar Pagamento</h1>
        <div id="resumo-pedido" className="resumo-pedido">
          <h2>Resumo do Pedido</h2>
          <p>Total: R$ $ {total} </p>

          <p>Itens no Carrinho:
             <ul>
    {cartItems.map((item, index) => (
      <li key={index}>
        {item.quantidade}x {item.nome_prop} - R$ {item.preço.toFixed(2)}
      </li>
    ))}
  </ul>
          </p>
  
          <p>Endereço de entrega: {resumoPedido.endereco}</p>
        </div>
      </div>

      <div id="opcoes-pagamento" className="opcoes-pagamento">
        {renderOpcoesPagamento()}
      </div>

      {formaPagamento && (
        <div>
          <button className="concluir-btn" onClick={concluirPagamento}>
            Concluir Pagamento
          </button>
        </div>
      )}
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
    </div>
  );
};






export default PaymentForm;
