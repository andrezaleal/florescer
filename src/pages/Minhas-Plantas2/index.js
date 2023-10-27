import React from 'react'
import { Link } from 'react-router-dom';

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
import { useHistory } from 'react-router-dom';
import './styles.css';
import { ArrowLeftOutlined, SearchOutlined} from '@ant-design/icons';
import card_add from "../../../assets/add.png";
import card_oval from "../../../assets/card-oval.png";
import "antd/dist/antd.css";
import MenuComponent from '../../../components/MenuComponent';

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
            <Title className='titulo'>Minhas Plantas</Title>
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
                    <Row className='container_step' >
                        <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
                            <Col>
                                <Title level={2} className='titulo-categoria' style={{ textAlign: "left" }}>Minhas Plantas</Title>
                            </Col>
                        </Row>
                        <Row className='container_item' style={{ alignContent: 'center', margin:0 }}>
                            <Link to ='/adicionar planta'>
                            <Col>
                                <Image
                                    src={card_add}
                                    preview={false}
                                    className='card-oval'
                                />
                            </Col>
                            </Link>
                            <Col>
                                <Image
                                    src={card_oval}
                                    preview={false}
                                    className='card-oval'
                                />
                            </Col>
                        </Row>
                        <Row className='container_item' style={{ margin: '0' }}>
                            <Col>
                                <Card className="card-categoria" >
                                    <Text style={{ color: '#6D7970' }}></Text>
                                </Card>

                                <Card className="card-categoria">
                                    <Text style={{ color: '#6D7970' }}>Cacto juliette</Text>
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </Row>
<MenuComponent />
            </Content >


        </Layout >
    );
};


export default Catalogo;

