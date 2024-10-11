import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarra = () => {


  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Produtos">Produtos</Nav.Link>
            <Nav.Link href="/CadastroProdutos">Cadastrar Produto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarra