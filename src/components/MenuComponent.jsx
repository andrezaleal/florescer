import React from 'react';
// testando a branch
const footerStyle = {
    position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '8%',
      background: '#8AB77B',
      marginTop: '45%',
      borderTopLeftRadius: '30px',
      borderTopRightRadius: '30px',
      boxShadow: '0px 4px 10px green',
      minHeight: '64px',
      display: 'flex',
      alignItems: 'flex-start',
    };
    const divStyle = {
        marginTop: '15%',
    }
    const icon1 = {
        height: '50%',
        minHeight: '29px',
        marginLeft: '25%',
        marginTop: '4%',
    };
    
    const icon2 = {
        height: '50%',
        minHeight: '29px',
        marginLeft: '15%',
        marginTop: '4%',
    };
    
    
    
    const MenuComponent = () => 
        <div style={divStyle}>
            <footer style={footerStyle}>
                    <img src='./HomeIcon.svg' style={icon1} alt='oi'/>
                    <img src='./CatalogoIcon.svg' style={icon2} alt='oi'/>
                    <img src='./FolhaIcon.svg' style={icon2} alt='oi'/>
                        </footer>
      </div>
    export default MenuComponent;
    