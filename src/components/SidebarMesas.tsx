import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SidebarMesas = () => {
  const mesas = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4'];

  return (
    <div  className="sidebar p-3" style={{ width: '250px', marginTop: '56px' }}>
      <h5 className="mb-3">Mesas</h5>
      <ListGroup>
        {mesas.map((mesa, index) => (
          <ListGroup.Item action key={index}>
            {mesa}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SidebarMesas;
