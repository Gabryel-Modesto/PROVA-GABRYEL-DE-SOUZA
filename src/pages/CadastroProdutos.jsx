import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import styles from "../css/Global.module.css";

const CadastroProdutos = () => {
  const url = "http://localhost:5000/product";

  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [amountProduct, setAmountProduct] = useState("");

  const handleBtnRegister = async (e) => {
    e.preventDefault();

    if (nameProduct != "" && categoryProduct != "" && amountProduct != "") {
      const produto = { nameProduct, categoryProduct, amountProduct };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });

      setNameProduct("");
      setCategoryProduct("");
      setAmountProduct("");
      alert("Cadastrado com sucesso!");
      return;
    }
  };

  return (
    <div>
        <Form className={styles.GlobalForm}>
          <Form.Group className="mb-3 mt-5">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Informe o nome do produto"
              name="nameProduct"
              id="nameProduct"
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoria do produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Informe a categoria"
              name="categoryProduct"
              id="categoryProduct"
              value={categoryProduct}
              onChange={(e) => setCategoryProduct(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Valor do produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Informe o valor"
              name="amountProduct"
              id="amountProduct"
              value={amountProduct}
              onChange={(e) => setAmountProduct(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleBtnRegister}>
            Cadastrar
          </Button>
        </Form>
    </div>
  );
};

export default CadastroProdutos;
