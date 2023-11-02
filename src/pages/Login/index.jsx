import React, { useEffect, useState, useContext } from "react";
import {
 Layout,
 Typography,
 Row,
 Col,
 Input,
 Button,
 Image
} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './styles.css';
import "antd/dist/antd.css";
import "../../assets/fonts/HKGrotesk-Bold.otf";
import "../../assets/fonts/HKGrotesk-Regular.otf";
import "../../assets/fonts/HKGrotesk-Medium.otf";
import logo from "../../assets/logo.svg";

import { AuthContext } from "../../services/auth";

const { Title, Text } = Typography;
const { Content } = Layout;

const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const {signIn, loadingAuth} = useContext(AuthContext);


 async function handleSignIn(e){
  e.preventDefault();
  if(email !=='' && password!==''){
    await signIn(email,password);
  }
 }

 return (
  <Layout className="layout">
    <Image
     src={logo}
     preview={false}
     className='logo-login'
    />
   <Title className='titulo-inicio'>Bem-vindo ao Florescer</Title>
   <Content className="site-layout-content">
    <div>
     <Row className='container_step'>
      <Row className='container_item' style={{ justifyContent: 'flex-start', padding: '0 5.5vw' }}>
       <Col>
        <Button
         type="link"
         className='button-login'
         style={{
          borderBottom: 'solid 3px #8AB77B',
          color: '#8AB77B',
         }}
        >
         Login
        </Button>
       </Col>
       <Col>
        <Link to='/cadastro'>
         <Button
          className='button-login'
          type="link"
          style={{
           borderBottom: 'solid 3px #6D7970',
           color: '#6D7970',
          }}
         >
          Cadastro
         </Button>
        </Link>
       </Col>
      </Row>
      <form onSubmit={handleSignIn}>
       <div className='container_item'>
        <Col>
         <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Email</Text><br />
         <Input type="email" name="email" size="large" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="exempland@exemple.com" style={{ width: '85vw', color: '#6D7970' }} prefix={<UserOutlined />} />
        </Col>
       </div>
       <div className='container_item' style={{ marginBottom: '2rem' }}>
        <Col>
         <Text style={{ fontSize: '1rem', color: '#6D7970' }}>
          Senha
         </Text>
         <br />
         <Input.Password name="password" required value={password} onChange={(e) => setPassword(e.target.value)}
          size="large" style={{ width: '85vw' }} />
        </Col>
       </div>
       <div className='container_item' >
        <Col>
         <button type="submit" className="button-submit">
          {loadingAuth ? 'Carregando...' : 'Entrar'}
         </button>
        </Col>
       </div>
      </form>
      <Row className='container_item' >
       <Col>
        <Text style={{ fontSize: '1rem', fontWeight: 'ligther', color: '#6D7970' }}>
         Não tem uma conta?
        </Text>
        <Link to='/cadastro'>
         <Button
          type="link"
          style={{
           padding: '2px',
           borderBottom: 'solid 1px #6D7970',
           color: '#6D7970',
           fontWeight: 'bold',
           height: '24px',
          }}
         >
          Clique Aqui
         </Button>
        </Link>
       </Col>
      </Row>
     </Row>
    </div>
   </Content>
  </Layout >
 )
};

export default Login;

