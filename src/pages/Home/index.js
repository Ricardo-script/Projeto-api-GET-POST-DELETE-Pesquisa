import React,{ useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from './styles';
import usePost from '../../hooks/usePost';


function Home() {

    const [nome, setNome] = useState('');
    const [profissao, setProfissao] = useState('');
    const [anos, setAnos] = useState('');
    const [sobre, setSobre] = useState('');

    const { loading, execute } = usePost();

    function salvarDados(e){
        e.preventDefault();
        execute({ data :{ nome, profissao, anos, sobre } });
    }

  return (
    
    <Container>
        <Form>
            <FormGroup>
                <Label for="text">Nome</Label>
                <Input type="text" name="nome" 
                    id="nome" placeholder="Digite o nome" 
                    onChange={(e)=> setNome(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="profissao">Profissão</Label>
                <Input type="text" name="profissao" 
                    placeholder="Digite sua profissão"
                    onChange={(e)=> setProfissao(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="anos">Quantos anos de experiência</Label>
                <Input type="select" name="experiencia" id="anos"
                    onChange={(e) => setAnos(e.target.value)}
                >
                <option value="">Escolha</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Mais de 5">Mais de 5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="sobre">Fale sobre você</Label>
                <Input type="textarea" name="text" id="exampleText"
                    onChange={(e) => setSobre(e.target.value)}
                />
            </FormGroup>
            <Button onClick={salvarDados} disabled={loading}>{ loading ? 'Salvando dados...' : 'Enviar'}</Button>
        </Form>
    </Container>
  );
}

export default Home;