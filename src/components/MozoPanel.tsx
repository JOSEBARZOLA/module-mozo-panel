import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function MozoPanel() {
  return (
    <Container className="text-center mt-5">
      <h1>Panel del Mozo</h1>
      <Button variant="primary">Tomar Pedido</Button>
    </Container>
  );
}
