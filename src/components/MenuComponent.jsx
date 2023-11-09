import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '6%',
  background: '#8AB77B',
  marginTop: '55%!important',
  paddingTop: '2%!important',
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
  boxShadow: '0px 4px 10px green',
  minHeight: '50px',
  overflowX: 'hidden',
};

const divStyle = {
  marginTop: '10%',
};

const icon1 = {
  height: '50%',
  minHeight: '29px',
  marginLeft: '25%',
  marginTop: '2%',
};

const icon2 = {
  height: '50%',
  minHeight: '29px',
  marginLeft: '15%',
  marginTop: '2%',
};

const MenuComponent = () => {
  const route = useLocation();

  return (
    <div style={divStyle}>
      <footer style={footerStyle}>
        <Link to='/pagina inicial'>
          <img
            src={route.pathname ==='/pagina inicial' ? '/HomeIconSelected.svg' : '/HomeIcon.svg'}
            style={icon1}
            alt='Home Icon'
          />
        </Link>
        <Link to='/catalogo'>
          <img
            src={route.pathname ==='/catalogo' ? '/CatalogoIconSelected.svg' : '/CatalogoIcon.svg'}
            style={icon2}
            alt='Catalogo Icon'
          />
        </Link>
        <Link to='/minhas plantas'>
          <img
            src={route.pathname ==='/minhas plantas' ? '/FolhaIconSelected.svg' : '/FolhaIcon.svg'}
            style={icon2}
            alt='Folha Icon'
          />
        </Link>
      </footer>
    </div>
  );
};

export default MenuComponent;
