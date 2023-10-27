import React from 'react'
import {
    Layout,
    Typography,
    Card,
    Row,
    Col,
    Image,
} from 'antd';
import { Link } from 'react-router-dom';
import cardRosa from "../../../assets/card-rosa.png";
import cardverde from "../../../assets/card-verde.png";
import cardVerdeMini3 from "../../../assets/card-mini-verde3.png";
import cardVerdeMini4 from "../../../assets/card-mini-verde4.png";
import cardVerdeMini1 from "../../../assets/card-mini-verde1.png";
import cardVerdemini2 from "../../../assets/card-mini-verde2.png";
import catalogoIcon from "../../../assets/catalogo-icon.svg";
import minhasPlantasIcon from "../../../assets/minhas-plantas-icon.svg";
import quizIcon from "../../../assets/quiz-icon.svg";
import logoutIcon from "../../../assets/logout-icon.svg";
import './styles.css'
import MenuComponent from '../../../components/MenuComponent';

import { useAuthValue } from '../../../context/AuthContext';
import { useAuthentication } from '../../../hooks/useAuthentication';

const { Title, Text } = Typography;
const { Content } = Layout;

const PaginaInicial = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    console.log(user)

    return (
    <Layout className="layout">
        <Link to='/login'>
            <Image
                src={logoutIcon}
                preview={false}
                className='icon-card'
                style={{ width: '1.5rem' }} onClick={logout}
            />
        </Link>
        <Title className='titulo'>Florescer</Title>
        <Content className="site-layout-content">
            <div>
                <Row className='container_step'>
                    <Row className='container_item'>
                        <Col>
                            <div className="site-card-border-less-wrapper">
                                <Link to='/catalogo'>
                                    <Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardRosa})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>
                                        <Image
                                            src={catalogoIcon}
                                            preview={false}
                                            className='icon-card'
                                        />
                                        <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Catálogo</Title>
                                        <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Vasculhe alguns tipos de plantas</Text>
                                    </Card>
                                </Link>
                                <Link to='/minhas plantas'><Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardverde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>
                                    <Image
                                        src={minhasPlantasIcon}
                                        preview={false}
                                        className='icon-card'
                                    />
                                    <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Minhas Plantas</Title>
                                    <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Cuide, analise e conheça mais suas plantas</Text>
                                </Card></Link>

                            </div>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo' style={{ textAlign: "left", marginLeft: '2rem', marginBottom: '1rem' }}>Plantas Mais Comuns</Title>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdeMini3})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdeMini4})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdeMini3})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-mini-legenda" >
                                <Text style={{ color: '#6D7970' }}>Planta 1</Text>
                            </Card>

                            <Card className="card-mini-legenda">
                                <Text style={{ color: '#6D7970' }}>Planta 2</Text>
                            </Card>

                            <Card className="card-mini-legenda">
                                <Text style={{ color: '#6D7970' }}>Planta 3</Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0', marginBottom: '1rem' }}>
                        <Col>
                            <div className="site-card-border-less-wrapper">
                                <Link to="/quiz"><Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardRosa})`, color: "FFFFFF" }}>
                                    <Image
                                        src={quizIcon}
                                        preview={false}
                                        className='icon-card'
                                    />
                                    <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Quiz</Title>
                                    <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Descubra qual a melhor planta para a sua casa</Text>
                                </Card></Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0', justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo' style={{ marginLeft: '2rem' }}>Plantas Favoritas</Title>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdeMini1})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdemini2})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                            <Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${cardVerdeMini1})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }}>
                                <br />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-mini-legenda">
                                <Text style={{ color: '#6D7970' }}>Planta 1</Text>
                            </Card>

                            <Card className="card-mini-legenda">
                                <Text style={{ color: '#6D7970' }}>Planta 2</Text>
                            </Card>

                            <Card className="card-mini-legenda">
                                <Text style={{ color: '#6D7970' }}>Planta 3</Text>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </div>
            <MenuComponent/>
        </Content>


    </Layout >
)};


export default PaginaInicial;