import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik, Field } from 'formik';
import { useState } from "react";
import * as yup from "yup";
import { shades } from "./theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate } from 'react-router-dom';


const stripePromise = loadStripe(
  "pk_test_51LgU7yConHioZHhlAcZdfDAnV9643a7N1CMpxlKtzI1AUWLsRyrord79GYzZQ6m8RzVnVQaHsgbvN1qSpiDegoPi006QkO0Mlc"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const navigation = useNavigate()
  const [billingStreet1, setBillingStreet1] = useState("");

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // this copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };
  
    const response = await fetch("http://localhost:5173/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  
    // Redirecionamento para /payment após o pagamento completo
    window.location.href = "/payment";
  }

  return (
    <>
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

      <div className="container-subheader">
        <div className="container-wishlist">
          <i className="bx bx-map bt-header"></i>
          <h6>| Endereço</h6>
        </div>
      </div>

      <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
          <Step>
            <StepLabel>Endereço</StepLabel>
          </Step>
          <Step>
            <StepLabel>Pagamento</StepLabel>
          </Step>
        </Stepper>
        <Box>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema[activeStep]}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {isFirstStep && (
                  <Shipping
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {isSecondStep && (
                  <Payment
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {/* Adicione o campo street1 aqui */}
                <Box display="flex" justifyContent="space-between" gap="50px">
                  {!isFirstStep && (
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      sx={{
                        backgroundColor: shades.primary[200],
                        boxShadow: "none",
                        color: "white",
                        borderRadius: 0,
                        padding: "15px 40px",
                      }}
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Voltar
                    </Button>
                  )}
                 <Button
  fullWidth
  type="submit"
  color="primary"
  variant="contained"
  sx={{
    backgroundColor: '#48A3A9',
    boxShadow: "none",
    color: "white",
    borderRadius: 0,
    padding: "15px 40px",
  }}
  onClick={() => {
    if (!isSecondStep) {
      setActiveStep(activeStep + 1);
    } else {
      // Aqui você pode armazenar o valor da rua no estado
      setBillingStreet1(values.billingAddress.street1);
      console.log('Formik Values:', values);

      makePayment(values);
      // Redirecionar para /payment após o pagamento completo
     // window.location.href = "/payment"
     navigation('/payment', { state: { billingStreet1: values.billingAddress.street1 } });


    }
  }}
>
                  
                    {!isSecondStep ? "Próximo" : "Próximo"}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>

     
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

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("obrigatório"),
      lastName: yup.string().required("obrigatório"),
      country: yup.string().required("obrigatório"),
      street1: yup.string().required("obrigatório"),
      street2: yup.string(),
      city: yup.string().required("obrigatório"),
      state: yup.string().required("obrigatório"),
      zipCode: yup.string().required("obrigatório"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("obrigatório"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("obrigatório"),
    phoneNumber: yup.string().required("obrigatório"),
  }),
];


export default Checkout;