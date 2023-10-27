import React from 'react'
import { Link } from 'react-router-dom';

import {
    Layout,
    Typography,
    Row,
    Col,
    Button,
    Image,
    Input,
    DatePicker,
    Select,
} from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../../components/MenuComponent';
import cacto from "../../../assets/cacto.png";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

const Planta = () => {
    const history = useHistory();
    return (
        <Layout className="layout" >
            <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: "0" }}>
                <Col style={{ width: '100%' }}>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                </Col>
            </Row>
            <Row className='container_item'>
                <Title className='titulo' style={{ marginTop: "0" }}>Adicionar Planta</Title>
            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
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
                        style={{
                            width: '85vw',
                            color: '#6D7970',
                            borderRadius: '16px',
                            border: '1px solid #6D7970'
                        }}
                    />
                </Row>

                <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start' }}>
                    <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Espécie</Text><br />
                    <Select
                        showSearch
                        size="large"
                        style={{
                            width: '85vw',
                            color: '#6D7970',
                            borderRadius: '16px',
                            border: '1px solid #6D7970'
                        }}
                        bordered={false}
                        placeholder="Selecione uma espécie"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                      >
                        <Option value="1">Amor-Perfeito</Option>
                        <Option value="2">Cactus</Option>
                        <Option value="3">Espada-de-São-Jorge</Option>
                        <Option value="4">Lavanda</Option>
                        <Option value="5">Manjericão</Option>
                        <Option value="6">Orquídea Borboleta</Option>
                        <Option value="7">Pacová</Option>
                        <Option value="8">Planta Carnívora</Option>
                        <Option value="9">Rosa do Deserto</Option>
                        <Option value="10">Samambaia</Option>

                      </Select>
                </Row>


                <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start' }}>
                    <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Idade</Text><br />
                    <DatePicker
                        size="large"
                        placeholder='Selecione uma data'
                        locale="pt"
                        dateFormat="dd/MM/yyyy"
                        style={{
                            width: '85vw',
                            color: '#6D7970',
                            borderRadius: '16px',
                            border: '1px solid #6D7970',
                            backgroundColor: 'transparent'
                        }}
                    />
                </Row>
                <Row className='container-item' style={{ marginTop:'2rem', justifyContent: 'center' }}>
                    <Col>
                    <Link to='/plantinhas'>
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
                        </Link>
                    </Col>

                </Row>

            </Content>
            <MenuComponent />
        </Layout >
    );
};


export default Planta;

