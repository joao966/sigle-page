import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Corporation = ({ formData, setForm, navigation }) => {
  const { cnpj,
    nome_empresa,
    razao_social,
    cep, endereco,
    numero,
    complemento,
    bairro,
    cidade,
    uf } = formData;

  const handleClick = () => {
    if(!cnpj,
      !cep,
      !uf,
      !nome_empresa,
      !razao_social,
      !endereco,
      !numero,
      !complemento,
      !bairro,
      !cidade) {
      return toast.error('preencha todos os campos');
    }

    if(cnpj.length !== 14) {
      return toast.error('cnpj inválido')
    }

    if(cep.length !== 8) {
      return toast.error('cep inválido')
    }

    if(uf.length !== 2) {
      return toast.error('uf inválido')
    }

    return navigation.next();
  }
  
  return (
    <Container maxWidth="xs">
      <h3>Dados da Empresa</h3>
      <TextField
        label="cnpj"
        name="cnpj"
        value={cnpj}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="nome_empresa"
        name="nome_empresa"
        value={nome_empresa}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="razao_social Name"
        name="razao_social"
        value={razao_social}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="cep"
        name="cep"
        value={cep}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="endereco"
        name="endereco"
        value={endereco}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="numero"
        name="numero"
        value={numero}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="complemento"
        name="complemento"
        value={complemento}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="bairro"
        name="bairro"
        value={bairro}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="cidade"
        name="cidade"
        value={cidade}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="uf"
        name="uf"
        value={uf}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleClick}
      >
        Next
      </Button>
    </Container>
  );
};

