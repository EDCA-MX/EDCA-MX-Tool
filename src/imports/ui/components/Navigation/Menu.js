import { NavLink } from 'react-router-dom';
import { push as MenuContainer } from 'react-burger-menu';

const Menu = () =>
  <MenuContainer id={'scaleDown'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
    <NavLink id="dashboard" className="menu-item" replace to="/">
      Convertir <br />xlsx - json
    </NavLink>
    <NavLink id="map" className="menu-item" replace to="/saveRecord">
      Nuevo Registro
    </NavLink>
    <NavLink id="map" className="menu-item" replace to="/updateRecord">
      Actualizar Registro
    </NavLink>
    <NavLink id="map" className="menu-item" replace to="/consultRecords">
      Consultar Registros
    </NavLink>
  </MenuContainer>;

export default Menu;
