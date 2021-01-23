import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Container, Scroll } from './styles';
import axios from 'axios';

function Pesquisar(){

    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState(['']);
    const [id, setId ] = useState('');

    async function pesquisa(){
        setLoading(true);
        
        axios
        .get(`http://localhost:3006/posts/${id}`)
        .then( response => {
            setLoading(false);
            setDados(response.data);
            console.log(response.data);
            setLoading(false)
        })
        .catch(err => {
            setLoading(false);
            setDados(err);
            alert('ID não encontrado, por favor tente novamente');
        })
        
    }

    if(loading){
        return(
            <span>Carregando...</span>
        );
    }

    return(
        <Container>
            <input type="text" onChange={(e) => setId(e.target.value)}/>
            <button onClick={pesquisa}>Pesquisar</button>

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
                        <tr key={dados.id}>
                        <th scope="row">{dados.id}</th>
                        <td>{dados.nome}</td>
                        <td>{dados.profissao}</td>
                        <td>{dados.anos}</td>
                        <td>{dados.sobre}</td>
                        <td>{dados.id}</td>
                        </tr>  
                    </tbody>
                </Table>
            </Scroll>
        </Container>
    );
}

export default Pesquisar;