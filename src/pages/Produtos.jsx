import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const url = "http://localhost:5000/product";

const Produtos = () => {
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    async function fecthDB() {
      try {
        const res = await fetch(url);
        const produtos = await res.json();
        setProduct(produtos);
      } catch (error) {
        console.error(error.message)
      }
    }
    fecthDB();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Categotia</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {product.map((produtos) => (
            <tr key={produtos.id}>
              <td>{produtos.id}</td>
              <td>{produtos.nameProduct}</td>
              <td>{produtos.categoryProduct}</td>
              <td>{produtos.amountProduct}</td>
              <td>
              <ButtonGroup size="sm">
                <Button
                  variant="danger"
                  onClick={async () => {
                    const res = await fetch(
                      `http://localhost:5000/product/${produtos.id}`,
                      {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                    const productDeleted = await res.json();
                    alert(`O produto ${productDeleted.nameProduct} foi removido!`);
                  }}
                >
                  Excluir
                </Button>
              </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Produtos;
