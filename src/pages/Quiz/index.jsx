import React, { useState } from 'react'
import {
 Layout,
 Typography,
 Image,
 Row,
 Col,
 Button,
} from 'antd';
import { Link } from 'react-router-dom';
import './styles.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import personagemFrame1 from "../../assets/imagem-personagem1.png";
import personagemFrame2 from "../../assets/imagem-personagem2.png";

const { Title, Text } = Typography;
const { Content } = Layout;
const Quiz = () => {
 const [current, setCurrent] = useState(0);

 const next = () => {
  setCurrent(current + 1);
 };

 const prev = () => {
  setCurrent(current - 1);
 };
 const steps = [
  {
   title: 'First',
   content:

    <Row className='container_step'>
     <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
      <Col>
       <Link to="/pagina inicial">
        <Button type='link' style={{ color: '#6D7970' }} onClick={() => prev()}>
         <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
        </Button>
       </Link>
      </Col>
     </Row>
     <Title className='titulo'>Quiz</Title>
     <Row className='container_item'>
      <Col>
       <Image
        src={personagemFrame1}
        preview={false}
        className='img-personagem'
       />
      </Col>
     </Row>
     <Row className='container_step' style={{ alignContent: 'center' }}>
      <Col>
       <Text>Olá, eu sou a especialista Flora.</Text>
      </Col>
     </Row>
     <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
      <Col>
       <Text>Sei que existem inúmeras espécies de plantas disponíveis para cultivo e por isso pode ser complicado saber quais são as mais apropriadas para o seu perfil.</Text>
      </Col>
     </Row>

    </Row>,
  },
  {
   title: 'Second',
   content:
    <Row className='container_step'>
     <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
      <Col>
       <Button type='link' style={{ color: '#6D7970' }} onClick={() => prev()}>
        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
       </Button>
      </Col>
     </Row>
     <Title className='titulo'>Quiz</Title>
     <Row className='container_item'>
      <Col>
       <Image
        src={personagemFrame2}
        preview={false}
        className='img-personagem'
       />
      </Col>
     </Row>
     <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
      <Col>
       <Text>E para te ajudar, desenvolvi esse quiz que te apresenta as plantinhas perfeitas para você, independente da sua realidade. Curioso para conhecê-las?</Text>
      </Col>
     </Row>

    </Row>
   ,
  },
 ];

 return (
  <Layout className="layout" >

   <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
    {steps[current].content}
    <div>

     {current < steps.length - 1 && (
      <Row className='container_step' style={{ alignContent: 'end' }}>
       <Col>
        <Button type='link' style={{ color: '#6D7970', fontSize: '1rem' }} onClick={() => pre()}>
         Avançar
         <ArrowRightOutlined />
        </Button>

       </Col>
      </Row>
     )}
     {current === steps.length - 1 && (
      <Row className='container_step' style={{ alignContent: 'center' }}>
       <Col>
        <Button
         type="primary"
         style={{
          background: '#EA7E84',
          border: 'none',
          borderRadius: '16px',
          width: '13rem',
          height: '3rem',
          boxShadow: '1px 3px 3px 1px #EA7E84',
          fontSize: '1.2rem',
         }}
        >
         Começar Quiz
        </Button>
       </Col>
      </Row>
     )}
    </div>
   </Content>


  </Layout >
 );
};


export default Quiz;

