import React from 'react';
import NavbarMozo from './NavbarMozo';
import SidebarMesas from './SidebarMesas';
import '../styles/main.scss';

const MozoPanel = () => {
  return (
    <div className="mozo-panel">
      <NavbarMozo />
      <div className="d-flex">
        <SidebarMesas />
        <div className=" m-10 p-5 flex-grow-1">
          {/* Acá se renderizaría la vista del modal o el menú según la acción */}
          <p>Selecciona una mesa del sidebar</p>
        </div>
      </div>
    </div>
  );
};

export default MozoPanel;
