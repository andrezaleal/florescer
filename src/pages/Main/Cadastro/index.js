import React from "react";

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
import './styles.css'
import "antd/dist/antd.css";
import "../../../fonts/HKGrotesk-Bold.otf";
import "../../../fonts/HKGrotesk-Regular.otf";
import "../../../fonts/HKGrotesk-Medium.otf";


const { Title, Text } = Typography;
const { Content } = Layout;
const Cadastro = () => {
return(
    <Layout className="layout">
        <Title level={2} className='titulo'>Junte-se ao aplicativo mais completo sobre plantas!</Title>
        <Content className="site-layout-content">
            <div>
                <Row className='container_step'>
                    <Row className='container_item' style={{ justifyContent: 'flex-start', padding: '0 5.5vw' }}>
                        <Col>
                            <Link to="/login">
                                <Button
                                    type="link"
                                    className='button-login'
                                    style={{
                                        borderBottom: 'solid 3px #6D7970',
                                        color: '#6D7970',
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button
                                className='button-login'
                                type="link"
                                style={{


                                    borderBottom: 'solid 3px #8AB77B',
                                    color: '#8AB77B',

                                }}
                            >
                                Cadastro
                            </Button>
                        </Col>
                    </Row>
                    <form>
                    <div className='container_item'>
                        <Col>
                            <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Nome</Text><br />
                            <Input type="text" 
                            size="large" style={{ width: '85vw', color: '#6D7970', borderRadius: '16px', border: '1px solid #6D7970' }}/>
                        </Col>
                    </div>
                    <div className='container_item'>
                        <Col>
                            <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Email</Text><br />
                            <Input type="email" 
                            placeholder="exempland@exemple.com" style={{ width: '85vw', color: '#6D7970' }} prefix={<UserOutlined />} />
                        </Col>
                    </div>
                    <div className='container_item' style={{ marginBottom: '2rem' }}>
                        <Col>
                            <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Senha</Text><br />
                            <Input.Password 
                            size="large" style={{ width: '85vw' }} />
                        </Col>
                    </div>
                    <div className='container_item' >
                        <Col>
                            <button
                                type="submit"
                                style={{
                                    background: '#EA7E84',
                                    border: 'none',
                                    borderRadius: '16px',
                                    width: '44vw',
                                    height: '3rem',
                                    boxShadow: '1px 3px 3px 1px #EA7E84',
                                    fontSize: '1.2rem',
                                    color: 'white',
                                }}
                            >
                                Cadastrar
                            </button>
                        </Col>
                    </div>
                    </form>
                    <Row className='container_item' >
                        <Col>
                            <Text style={{ fontSize: '1rem', fontWeight: 'ligther', color: '#6D7970' }}>Já tem uma conta?</Text>
                            <Link to='/login'>
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
                                    Faça Login
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Row>
            </div>
        </Content>


    </Layout >
    );
};


export default Cadastro;

