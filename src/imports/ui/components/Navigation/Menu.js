import { NavLink } from 'react-router-dom';
import { push as MenuContainer } from 'react-burger-menu';

import Dropzone from './Dropzone';

const Menu = props =>
  <MenuContainer id={'scaleDown'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
    <div key="1" className="logo">
      <img src={'./assets/img/logo-w.png'} alt="" />
    </div>
    <Dropzone handleFile={props.handleFile} />
  </MenuContainer>;

export default Menu;
