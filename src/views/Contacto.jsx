import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Contact() {
  return (
    <Form className='containerForm'>
        <h1>Cuentanos, en que te podemos ayudar?</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='descripcion'>Correo:</Form.Label>
        <input type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label className='descripcion'>Descripcion:</Form.Label>
        <input className='textDescription' type="text" placeholder="" />
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