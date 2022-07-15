import React, { useState } from 'react'
import {
    Layout,
    Typography,
    Image,
    Row,
    Col,
    Button,
} from 'antd';
import { Link } from 'react-router-dom';
import './styles.css'
import { ArrowRightOutlined, ArrowLeftOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import personagemFrame1 from "../../../assets/imagem-personagem1.png";
import personagemFrame2 from "../../../assets/imagem-personagem2.png";
import samambaia from "../../../assets/samambaia.png";
import pacova from "../../../assets/pacova.png";
import orquidea from "../../../assets/orquidea.png";

const { Title, Text } = Typography;
const { Content } = Layout;
const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [current2, setCurrent2] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const prox = () => {
        setCurrent2(current2 + 1);
    };

    const ant = () => {
        setCurrent2(current2 - 1);
    };
    const steps_resultado = [
        {
            title: 'primeiro',
            content:
                <Row className='container_item'>
                    <Col style={{ display: 'table' }}>
                        <LeftOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} />
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Link to='/Planta'>
                            <Image
                                src={samambaia}
                                preview={false}
                                className='img-personagem'
                            />
                        </Link>
                    </Col >
                    <Col style={{ display: 'table' }}>
                        <RightOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} onClick={() => prox()} />
                    </Col>
                    <Row className='container_item'>
                        <Title level={3}>Samambaia</Title>
                    </Row>
                    <Row className='container_item'>
                        <Text className='text-quiz' style={{textAlign:'justify', padding:'10px'}}>Conhecida por sua ancestralidade, a samambaia é uma das plantas mais antigas do planeta: ela surgiu há mais de 360 milhões de anos, antes mesmo dos próprios dinossauros. Sua exuberância é capaz de tornar qualquer ambiente mais alegre e elegante, podendo ser alavancada pelo uso de vasos suspensos ou mesmo jardins verticais.</Text>

                    </Row>
                    
                </Row>

        }, {
            title: 'segundo',
            content:
                <Row className='container_item'>
                    <Col style={{ display: 'table' }}>
                        <LeftOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} onClick={() => ant()} />
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Link to='/Planta'>
                            <Image
                                src={pacova}
                                preview={false}
                                className='img-personagem'
                            />
                        </Link>
                    </Col >
                    <Col style={{ display: 'table' }}>
                        <RightOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} onClick={() => prox()} />
                    </Col>
                    <Row className='container_item'>
                        <Title level={3}>Pacová</Title>
                    </Row>
                    <Row className='container_item'>
                        <Text className='text-quiz' style={{textAlign:'justify', padding:'10px'}}>Originário da Mata Atlântica, o Pacová é uma planta nativa das florestas brasileiras. Suas longas folhas de um verde vibrante refletem sua natureza viva, capaz de iluminar e animar qualquer ambiente. A planta não é exigente, o que a torna ideal para iniciantes e para a decoração de espaços internos.</Text>

                    </Row>
                </Row>

        }, {
            title: 'terceiro',
            content:
                <Row className='container_item'>
                    <Col style={{ display: 'table' }}>
                        <LeftOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} onClick={() => ant()} />
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <Link to='/Planta'>
                            <Image
                                src={orquidea}
                                preview={false}
                                className='img-personagem'
                            />
                        </Link>
                    </Col >
                    <Col style={{ display: 'table' }}>
                        <RightOutlined style={{ fontSize: '27px', display: 'table-cell', verticalAlign: 'middle' }} />
                    </Col>
                    <Row className='container_item'>
                        <Title level={3}>Orquídea Borboleta</Title>
                    </Row>
                    <Row className='container_item'>
                        <Text className='text-quiz' style={{textAlign:'justify', padding:'10px'}}>Capazes de elevar a estética de qualquer ambiente, as orquídeas são plantas sofisticadas e elegantes, podendo ser adotadas em ambientes domésticos ou mesmo profissionais. Por serem plantas epífitas, as orquídeas borboleta necessitam de cuidados simples - porém específicos - para se desenvolverem com saúde e vivacidade.</Text>

                    </Row>
                </Row>

        }
    ]
    const steps = [
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
        {
            title: 'Third',
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
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text className='text-quiz'>1. Qual nível de dificuldade você busca em sua planta?</Text>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Fáceis de cuidar e que não necessitem de manutenção constante.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Simples de serem cultivadas, embora possam exigir cuidados específicos.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Desafiadoras e atípicas.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Não tenho preferências com relação à dificuldade de cultivo.
                        </Button>
                    </Row>

                </Row>
            ,
        },
        {
            title: 'Fourth',
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
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text className='text-quiz'>2. O clima da sua região é…</Text>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Equatorial (Quente e úmido)
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Semiárido (Quente e seco)
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Tropical (Quente e úmido ou quente e seco conforme a mudança da estação)
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Subtropical (Baixas temperaturas)
                        </Button>
                    </Row>

                </Row>
            ,
        },
        {
            title: 'fifth',
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
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text className='text-quiz'>3. Você tem preferência por plantas que sejam de que tamanho?</Text>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            De pequeno porte
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            De pequeno ou médio porte
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            De grande porte
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Não tenho preferências com relação ao porte da planta
                        </Button>
                    </Row>

                </Row>
            ,
        },
        {
            title: 'Sixty',
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
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text className='text-quiz'>4. Com qual intensidade seu ambiente possui exposição ao sol?</Text>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Luz solar direta durante pelo menos seis horas.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Luz solar direta durante uma fração do dia, seguida de luz solar indireta com boa claridade.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Boa claridade de luz solar indireta durante o dia.
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Pouca luz solar direta ou indireta.
                        </Button>
                    </Row>

                </Row>
            ,
        },
        {
            title: 'Seventh',
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
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                        <Col>
                            <Text className='text-quiz'>5. Você tem preferência por plantas de aparência…</Text>
                        </Col>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Sofisticada
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Exuberante
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Florida
                        </Button>
                    </Row>
                    <Row className='container_item'>
                        <Button className='card-opcoes'>
                            Herbal
                        </Button>
                    </Row>

                </Row>
            ,
        },
        {
            title: 'Last',
            content:
                <Row className='container_step'>
                    <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                        <Col>
                            <Button type='link' style={{ color: '#6D7970' }} onClick={() => prev()}>
                                <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                            </Button>
                        </Col>
                    </Row>
                    <Title className='titulo'>Resultados</Title>
                    <Row className='container_step' style={{ padding: '0 15px', textAlign: 'center' }}>
                        <Col>
                            <Text className='text-quiz'>Essas são as plantinhas mais adequadas para o seu perfil:</Text>
                        </Col>
                    </Row>
                    <Row className='container_step' style={{ alignContent: 'center' }}>
                        {steps_resultado[current2].content}
                    </Row>
                </Row>
            ,
        },
    ];

    return (
        <Layout className="layout" >

            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                {steps[current].content}
                <div>

                    {current < steps.length - 1 && current !== 1 && (
                        <Row className='container_step' style={{ alignContent: 'end' }}>
                            <Col>
                                <Button type='link' style={{ color: '#74934D', fontSize: '1rem' }} onClick={() => next()}>
                                    Avançar
                                    <ArrowRightOutlined />
                                </Button>

                            </Col>
                        </Row>
                    )}
                    {current === steps.length - 1 && (
                        <Row className='container_step' style={{ alignContent: 'center', marginBottom:'20px' }}>
                            <Col>
                                <Link to='/catalogo'><Button
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
                                >
                                    Ir para o Catálogo
                                </Button></Link>
                            </Col>
                        </Row>
                    )}
                    {current > 1 && current !== steps.length - 1 && (
                        <Row className='container_step' style={{ alignContent: 'start', position: 'absolute', marginTop: '-11%', width: '50%' }}>
                            <Col>
                                <Button type='link' style={{ color: '#74934D', fontSize: '1rem' }} onClick={() => prev()}>
                                    <ArrowLeftOutlined />
                                    Voltar
                                </Button>

                            </Col>
                        </Row>
                    )}
                </div>
            </Content>


        </Layout >
    );
};


export default Quiz;

