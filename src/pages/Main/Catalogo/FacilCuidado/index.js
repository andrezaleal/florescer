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
import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import cactus from "../../../../assets/cacto.png";
import espada from "../../../../assets/espadadesao.png";

import cardVerde from "../../../../assets/cardverdeplantas.png";
import "antd/dist/antd.css";
import MenuComponent from '../../../../components/MenuComponent';

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

                <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                        <Col>
                            <Title level={2} className='titulo-categoria' style={{ textAlign: "left" }}>Fácil Cuidado</Title>
                        </Col>
                    </Row>


                <Row className='container_step'>
                    <Row className='container_item' style={{ alignContent: 'center' }}>
                        <Col>
                        <Link to ='/cactus'>
                            <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>

                               
                                <Image
                                    src={cactus}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                            </Link>
                            <Link to ='/cactus'>
                            <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF", margin: '10px 0px 0px 0' }}>
                                
                                <Image
                                    src={espada}
                                    preview={false}
                                    className='img-catalogo'
                                />
                            </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row className='container_item' style={{ margin: '0' }}>
                        <Col>
                        <Link to ='/cactus'>
                            <Card className="card-categoria" >
                                <Text style={{ color: '#6D7970' }}>Cactus</Text>
                            </Card>
</Link>
<Link to ='/espada'>
                            <Card className="card-categoria">
                                <Text style={{ color: '#6D7970' }}>Espada-de-São-Jorge</Text>
                            </Card>
                            </Link>
                        </Col>
                    </Row>
                </Row>

                <MenuComponent/>
            </Content>


        </Layout >
    );
};


export default Catalogo;

