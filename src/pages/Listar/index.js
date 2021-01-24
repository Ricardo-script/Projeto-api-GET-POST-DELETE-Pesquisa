import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import load from '../../assets/loading.gif';

import axios from 'axios';

function Listar(){

    const [dados, setDados] = useState(['']);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState('');

    useEffect( () => {
        async function lerDados(){
            const response = await api.get('');
            setDados(response.data);
            setLoading(false)
            console.log(response.data);
        }

        lerDados();

    },[]);

    function excluir(){      
        axios
        .delete(`http://localhost:3006/posts/${id}`);

        alert('O Item ' + id + ' foi excluído!');
        setDados(dados.filter(exc => exc.id !== JSON.parse(id)));//convertido para objeto pois o id pego do input era objeto
        
    }

    function excluirLinha(itemId){ //itemId = item.id dentro de onClick
        axios
        .delete(`http://localhost:3006/posts/${itemId}`);

        alert('O Item ' + itemId + ' foi excluído!');
        setDados(dados.filter(excluido => excluido.id !== itemId));//o navegador nao atualiza a pagina, então se filtra
    }


    if(loading){
        return(
            <img src={load} alt="" style={{ margin: '2% 0 0 20%'}}/>
        );
    }


  return (
      
      <Container>
          <Scroll>
            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Profissão</th>
                    <th>Experiência</th>
                    <th>Sobre</th>
                    <th>Excluir</th>
                    </tr>	
                </thead>
                <tbody>
                    {dados.map( item =>{
                        return(
                            <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.nome}</td>
                            <td>{item.profissao}</td>
                            <td>{item.anos}</td>
                            <td>{item.sobre}</td>
                            <td onClick={() => excluirLinha(item.id)}>X</td>
                        </tr>  
                        );
                    })}
                </tbody>
            </Table>
        </Scroll>
        <span>Excluir Id:</span>
        <input type="text" onChange={(e) => setId(e.target.value)}/>
        <button onClick={excluir}>Excluir</button>
    </Container>
  );
}

export default Listar;
