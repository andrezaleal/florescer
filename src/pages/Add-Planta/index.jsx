import React from 'react'
import {
    Layout,
    Typography,
    Row,
    Col,
    Button,
    Image,
    Input,
    DatePicker,
} from 'antd';
import { useHistory } from 'react-router-dom';
import locale from 'antd/es/date-picker/locale/pt_BR';
import './styles.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../components/MenuComponent';
import cacto from "../../assets/cacto.png";

const { Title, Text } = Typography;
const { Content } = Layout;

const AddPlanta = () => {
    const history = useHistory();
    return (
        <Layout className="layout margin-page-add-planta" >
            <Row className='container_item' style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: "0" }}>
                <Col span={6}>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
                <Col span={18}>
                    <Title className='titulo' style={{ margin: "0", display: 'flex' }}>Adicionar Planta</Title>
                </Col>
            </Row>

            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item'>
                    <Col>
                        <Image
                            src={cacto}
                            preview={false}
                            className='planta'
                        />
                    </Col>
                </Row>
                <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start', borderBottom: 'solid #75B47B' }}>
                    <Col>
                        <Text className='informações'>Informações</Text>
                    </Col>
                </Row>
                <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start' }}>
                    <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Nome</Text><br />
                    <Input type="text"
                        size="large"
                        placeholder='Abigail'
                        style={{
                            width: '85vw',
                            color: '#6D7970',
                            borderRadius: '16px',
                            border: '1px solid #6D7970'
                        }}
                    />
                </Row>
                <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start' }}>
                    <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Idade</Text><br />
                    <DatePicker
                        size="large"
                        placeholder='Selecione uma data'
                        locale={locale}
                        moment={'DD-MM-YYYY'}
                        style={{
                            width: '85vw',
                            color: '#6D7970',
                            borderRadius: '16px',
                            border: '1px solid #6D7970',
                            backgroundColor: 'transparent'
                        }}
                    />
                </Row>
                <Row className='container-item' style={{ marginTop: '2rem', justifyContent: 'center' }}>
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
                            Adicionar
                        </button>
                    </Col>

                </Row>

            </Content>
            <MenuComponent />
        </Layout >
    );
};


export default AddPlanta;

