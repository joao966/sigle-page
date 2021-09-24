import React, { useContext } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Corporation } from "./stepForm/Corporation";
import { Personal } from "./stepForm/Personal";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import context from '../context/contex';

const defaultData = {
  cnpj: "",
  nome_empresa: "  ",
  razao_social: " ",
  cep: "",
  endereco: "  ",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: "",
  nome: "",
  sobrenome: "",
  telefone: "",
  email: "",
  senha: ""
};

const steps = [
  { id: "dados empresariais" },
  { id: "dados pessoais" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const { setdata } = useContext(context)
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  
  
  const props = { formData, setForm, navigation };
  setdata(formData);

  switch (step.id) {
    case "dados empresariais":
      return <Corporation {...props} />;
    case "dados pessoais":
      return <Personal {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Ops...Algo deu errado</h1>
    </div>
  );
};
