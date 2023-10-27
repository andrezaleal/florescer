import React from 'react'
import {
    Layout,
    Typography,
    Input,
    Row,
    Col,
    Button,
    Image,
    Card
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import cactus from "../../../assets/cacto.png";
import cardVerde from "../../../assets/crad-medio-verde.png";
import minhasPlantasIcon from "../../../assets/minhas-plantas-icon.svg";
import "antd/dist/antd.css";

const { Title, Text } = Typography;
const { Content } = Layout;

const Catalogo = () => {
    const history = useHistory();
    return (
        <Layout className="layout" >
            <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                <Col>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
            </Row>
            <Title className='titulo'>Catálogo</Title>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item'>
                    <Col>
                        <Input
                            placeholder="Pesquisar"
                            style={{
                                width: '85vw',
                                background: 'none',
                            }}
                            suffix={<SearchOutlined />}
                            size="large"
                        />
                    </Col>
                </Row>
                <Row className='container_step'>
                    <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo-categoria' style={{ textAlign: "left" }}>Fácil Cuidado</Title>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col>
                            <Link to='/planta'>
                                <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>

                                <Image
                                    src={minhasPlantasIcon}
                                    preview={false}
                                    className='icon-catalogo'
                                />
                                <Image
                                    src={cactus}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                            </Link>
                            <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>
                                <Image
                                    src={minhasPlantasIcon}
                                    preview={false}
                                    className='icon-catalogo'
                                />
                                <Image
                                    src={cactus}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                            <Card className="card-categoria" >
                                <Text style={{ color: '#6D7970' }}>Cacto juliette</Text>
                            </Card>

                            <Card className="card-categoria">
                                <Text style={{ color: '#6D7970' }}>Cacto juliette</Text>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Content>


        </Layout >
    );
};


export default Catalogo;

