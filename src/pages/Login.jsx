import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import styles from "../css/Global.module.css";

const Login = () => {
  const navigate = useNavigate();

  const UserPermission  = {
    user: "admin",
    passwordUser: "4321",
  };

  const [namePermission, setNamePermission] = useState("");
  const [passwordPermission, setPasswordPermission] = useState("");


  const handleBtnLogin = (e) => {
    e.preventDefault();

    if (!namePermission || !passwordPermission) {
      alert("Preencha todos os campos!");
      return;
    }

    if (
      namePermission === UserPermission.user &&
      passwordPermission === UserPermission.passwordUser
    ) {
      navigate("/Produtos");
    } else {
      alert("Usuário ou senha inválido");
    }
  };

  return (
    <div className={styles.divGlobal}>
      <body className={styles.BodyLogin}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o Usuário"
            name="namePermission"
            id="namePermission"
            value={namePermission}
            onChange={(e) => setNamePermission(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe a senha"
            name="passwordPermission"
            id="passwordPermission"
            value={passwordPermission}
            onChange={(e) => setPasswordPermission(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleBtnLogin}>
          Entrar
        </Button>
      </Form>
      </body>
    </div>
  );
};

export default Login;
