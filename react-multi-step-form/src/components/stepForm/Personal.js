import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Personal = ({ formData, setForm, navigation }) => {
  const { nome, sobrenome, telefone, email, senha } = formData;

  const handleClick = () => {
    const emailIsValid = email.match(/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i);
    if(!nome, !sobrenome, !telefone, !email, !senha) {
      return toast.error('preencha todos os campos');
    }

    if(!emailIsValid) {
      return toast.error('email invalid');
    }

    return navigation.next();
  }
  
  return (
    <Container maxWidth="xs">
      <h3>DADOS DA PESSOA</h3>
      <TextField
        label="nome"
        name="nome"
        value={nome}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="sobrenome"
        name="sobrenome"
        value={sobrenome}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <InputMask
        mask="+99-(99) 99999-9999"
        label="telefone"
        name="telefone"
        value={telefone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="email"
        name="email"
        type="text"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
      type="password"
        label="senha"
        name="senha"
        value={senha}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
