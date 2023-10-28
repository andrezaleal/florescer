import React from 'react';
import {Link} from 'react-router-dom'
// testando a branch
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
    };
    const divStyle = {
        marginTop: '10%',
    }
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
    
    
    
    const MenuComponent = () => 
        <div style={divStyle}>
            <footer style={footerStyle}>
                    <Link to ='/pagina inicial'><img src='./HomeIcon.svg' style={icon1} alt='oi'/></Link>
                    <Link to ='/catalogo'><img src='./CatalogoIcon.svg' style={icon2} alt='oi'/></Link>
                    <Link to ='minhas plantas'><img src='./FolhaIcon.svg' style={icon2} alt='oi'/></Link>
                        </footer>
      </div>
    export default MenuComponent;