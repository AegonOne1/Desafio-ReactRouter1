import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Contact() {
  return (
    <Form>
        <h1>Cuentanos, en que te podemos ayudar?</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contact