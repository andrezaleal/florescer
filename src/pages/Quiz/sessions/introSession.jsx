
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Image, Typography, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import personagemFrame1 from "../../../assets/imagem-personagem1.png";
import personagemFrame2 from "../../../assets/imagem-personagem2.png";
import MenuComponent from '../../../components/MenuComponent';

const IntroSession = () => {

  const { Title, Text } = Typography;
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const { Content } = Layout;

  const next = () => {
    setCurrent(current + 1);

  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const initialSteps = [
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
              <Text className='text-quiz'>Olá, eu sou a especialista Flora.</Text>
            </Col>
          </Row>
          <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
            <Col>
              <Text className='text-quiz'>Sei que existem inúmeras espécies de plantas disponíveis para cultivo e por isso pode ser complicado saber quais são as mais apropriadas para o seu perfil.</Text>
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
              <Text className='text-quiz'>E para te ajudar, desenvolvi esse quiz que te apresenta as plantinhas perfeitas para você, independente da sua realidade. Curioso para conhecê-las?</Text>
            </Col>
          </Row>
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
                onClick={() => next()}
              >
                Começar Quiz
              </Button>
            </Col>
          </Row>

        </Row>
      ,
    },
  ];

  return (
    <Layout className="layout margin-page-quiz" >
      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        {current >= initialSteps.length ? history.push('/quiz') : initialSteps[current].content}
        <div>
          {current < initialSteps.length - 1 && (
            <Row className='container_step' style={{ alignContent: 'end' }}>
              <Col>
                <Button type='link' style={{ color: '#74934D', fontSize: '1rem' }} onClick={current >= initialSteps.length ? history.push('/quiz') : () => next()}>
                  Avançar
                  <ArrowRightOutlined />
                </Button>
              </Col>
            </Row>
          )}
        </div>
        <MenuComponent />
      </Content>
    </Layout >
  );

};
export default IntroSession;


