import React, {useContext} from "react";
import context from '../../context/contex';

export const Table = (_props) => {
  const { data } = useContext(context);
  return (
    <div className="table">
      <table >
      <thead>
          <tr>
            <th>CNPJ</th>
            <th>NOME EMPRESA</th>
            <th>RAZÂO SOCIAL</th>
            <th>CEP</th>
            <th>ENDEREÇO</th>
            <th>NÚMERO</th>
            <th>COMPLEMENTO</th>
            <th>BAIRRO</th>
            <th>CIDADE</th>
            <th>UF</th>
            <th>NOME</th>
            <th>SOBRENOME</th>
            <th>TELEFONE</th>
            <th>EMAIL</th>
            <th>SENHA</th>
          </tr>
        </thead>
          <tbody>
            <tr>
            <th>{data.cnpj}</th>
            <td>{data.nome_empresa}</td>
            <td>{data.razao_social}</td>
            <td>{data.cep}</td>
            <td>{data.endereco}</td>
            <td>{data.numero}</td>
            <td>{data.complemento}</td>
            <td>{data.bairro}</td>
            <td>{data.cidade}</td>
            <td>{data.uf}</td>
            <td>{data.nome}</td>
            <td>{data.sobrenome}</td>
            <td>{data.telefone}</td>
            <td>{data.email}</td>
            <td>{data.senha}</td>
            </tr>
          </tbody>
        </table>  
    </div>
  )
}
