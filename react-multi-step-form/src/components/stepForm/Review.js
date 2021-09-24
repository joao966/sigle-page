import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    cnpj, nome_empresa, razao_social, cep, endereco, numero, complemento, bairro, cidade, uf,nome, sobrenome, telefone, email, senha
  } = formData;

  return (
    <div className="form-reviw">
      <Container maxWidth='sm'>
        <h3>Review</h3>
        <RenderAccordion summary="dados empresariais" go={ go } details={[
          { 'CNPJ': cnpj },
          { 'NOME EMPRESA': nome_empresa },
          { 'RAZÂO SOCIAL': razao_social},
          { 'CEP ': cep },
          { 'ENDEREÇO': endereco },
          { 'NUMERO': numero },
          { 'COMPLEMENTO': complemento },
          { 'BAIRRO': bairro },
          { 'CIDADE': cidade },
          { 'UF': uf }
        ]} />
        <RenderAccordion summary="dados pessoais" go={ go } details={[
          { 'NOME': nome },
          { 'SOBRENOME': sobrenome },
          { 'TELEFONE': telefone },
          { 'EMAIL': email },
          { 'SENHA': senha },
        ]} />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: '1.5rem' }}
          onClick={() => go('submit')}
        >
          Submit
        </Button>

      </Container>
    </div>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
