import React from 'react'
import {
    Layout,
    Typography,
    Row,
    Col,
    Input,
    Button
} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './styles.css';
import "antd/dist/antd.css";
import "../../../fonts/HKGrotesk-Bold.otf";
import "../../../fonts/HKGrotesk-Regular.otf";
import "../../../fonts/HKGrotesk-Medium.otf";

const { Title, Text } = Typography;
const { Content } = Layout;

const PaginaInicial = () => (
    <Layout className="layout">
        <Title level={2} className='titulo'>Bem-vindo ao Florescer</Title>
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
                    <Row className='container_item'>
                        <Col>
                            <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Email</Text><br />
                            <Input size="large" placeholder="exemple@exemple.com" style={{ width: '85vw', color: '#6D7970' }} prefix={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ marginBottom: '2rem' }}>
                        <Col>
                            <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Senha</Text><br />
                            <Input.Password size="large" style={{ width: '85vw' }} />
                        </Col>
                    </Row>
                    <Row className='container_item' >
                        <Col>
                            <Button
                                type="primary"
                                style={{
                                    background: '#EA7E84',
                                    border: 'none',
                                    borderRadius: '16px',
                                    width: '44vw',
                                    height: '3rem',
                                    boxShadow: '1px 3px 3px 1px #EA7E84',
                                    fontSize: '1.2rem',
                                }}
                            >
                                Entrar
                            </Button>
                        </Col>
                    </Row>
                    <Row className='container_item' >
                        <Col>
                            <Text style={{ fontSize: '1rem', fontWeight: 'ligther', color: '#6D7970' }}>Não tem uma conta?</Text>
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
);


export default PaginaInicial;

