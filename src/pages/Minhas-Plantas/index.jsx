import React from 'react'
import {
    Layout,
    Typography,
    Input,
    Row,
    Col,
    Button,
    Image,
    Card,
    Tooltip,
} from 'antd';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import { ArrowLeftOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import cactus from "../../assets/cacto.png";
import cardVerde from "../../assets/crad-medio-verde.png";
import minhasPlantasIcon from "../../assets/minhas-plantas-icon.svg";
import "antd/dist/antd.css";

const { Title, Text } = Typography;
const { Content } = Layout;

const MinhasPlantas = () => {
    const history = useHistory();
    return (
        <Layout className="layout" >
            <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '3rem'}}>
                <Col span={6}>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
                <Col span={18}>
                    <Title className='titulo'  style={{ margin: "0", display: 'flex' }}>Minhas Plantas</Title>
                </Col>
            </Row>
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
                    <Row className='container_step'>
                        <Row className='container_item' style={{ alignContent: 'center' }}>
                            <Col>
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
                    <Tooltip title="add">
                        <Link to="/adicionar planta">
                            <Button className='button-add' type="primary" size="large" shape="circle" icon={<PlusOutlined className='icon-add' />} />
                        </Link>
                    </Tooltip>

                </Row>

            </Content >


        </Layout >
    );
};


export default MinhasPlantas;

