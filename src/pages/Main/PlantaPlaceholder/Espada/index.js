import React from 'react'
import {
    Layout,
    Typography,
    Row,
    Col,
    Button,
    Image,
    Card,
    Collapse,
} from 'antd';
import { useHistory } from 'react-router-dom';

import './styles.css'
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import planta from "../../../../assets/espada.png";
import calendar from "../../../../assets/calendar_icon.svg";
import adubagem from "../../../../assets/adubagem_icon.svg";
import vasos from "../../../../assets/vasos_icon.svg";
import clima from "../../../../assets/clima_icon.svg";
import "antd/dist/antd.css";
import MenuComponent from '../../../../components/MenuComponent';
import minhasPlantasIcon from "../../../../assets/folha.svg";
import favoritar from "../../../../assets/estrela.svg";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Panel } = Collapse;
const genExtra = () => (
    <DownOutlined id='icon-collapse'
        onClick={() => {
            document.getElementById("icon-collapse").style.transform = "rotate(180deg);";
        }}
    />

);

const Planta = () => {
    const history = useHistory();
    return (
        <Layout className="layout" >
            <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: "0" }}>
                <Col style={{width:'100%'}}>
                    <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
                        <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                    </Button>
                     <Image
                        src={favoritar}
                        preview={false}
                        className='icon-estrela'
                    />
                    <Image
                        src={minhasPlantasIcon}
                        preview={false}
                        className='icon-planta'
                    />
                </Col>
            </Row>
            <Row className='container_item'>
                <Title className='titulo' style={{ marginTop: "0" }}>Espada-de-São-Jorge</Title>

            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
                    <Col>
                        <Card className='card-planta-style'>
                            <Text className='text-planta'>Tem como nome científico: Dracaena trifasciata.
                            Planta muito tóxica. Não pode ser ingerida.</Text>
                        </Card>
                        <Image
                            src={planta}
                            preview={false}
                            className='planta'
                        />
                    </Col>
                </Row>
                <Row className='container_item' style={{ padding: '0 15px', textAlign: 'justify' }}>
                    <Col>
                        <Text className='sobre-planta'>Nativa da África e também conhecida como “espada de Ogum”, a Espada-de-São-Jorge é considerada por várias religiões uma planta protetora, capaz de afastar energias negativas. É ideal para iniciantes por ser uma das plantas mais versáteis para cultivo, sendo resistente a variações de temperatura e podendo ser plantada em jardins ou em vasos dentro de casa.
</Text>
                    </Col>
                </Row>
                <Row className='container_item' >
                    <Collapse className='sobre-planta'
                        bordered={false}
                        expandIcon={() => <Image className='icon-collapse' src={calendar} />}
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent'
                        }}>
                        <Panel extra={genExtra()} header="Cronograma" key="1" >
                            <Text className='sobre-planta'>Não necessita de atenção constante, devendo ser regada apenas quando a terra estiver muito seca, normalmente uma vez por semana. 

</Text>
                        </Panel>
                    </Collapse>
                    <Collapse
                        className='sobre-planta'
                        bordered={false}
                        expandIcon={() => <Image className='icon-collapse' src={adubagem} />}
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent'
                        }}>
                        <Panel extra={genExtra()} header="Adubagem" key="1" >
                            <Text className='sobre-planta'>Não requer adubo para seu desenvolvimento, mas a aplicação de adubo orgânico a cada 60 dias pode facilitar esse processo e embelezar as folhas da planta.

</Text>
                        </Panel>
                    </Collapse>
                    <Collapse
                        className='sobre-planta'
                        bordered={false}
                        expandIcon={() => <Image className='icon-collapse' src={vasos} />}
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent'
                        }}>
                        <Panel extra={genExtra()} header="Vasos" key="1" >
                            <Text className='sobre-planta'>Os vasos de cerâmica são os ideais para este tipo de planta, uma vez que possibilitam uma troca de temperatura natural com o ambiente externo. Mais importante que o vaso, porém, é o sistema de drenagem: preencha o fundo do vaso com uma camada de pedras ou carvão, o meio com areia e a parte superior com uma mistura de terra e areia, para evitar que o substrato fique encharcado - o que seria danoso para a planta.

</Text>
                        </Panel>
                    </Collapse>
                    <Collapse
                        className='sobre-planta'
                        bordered={false}
                        expandIcon={() => <Image className='icon-collapse' src={clima} />}
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent'
                        }}>
                        <Panel extra={genExtra()} header="Clima Ideal" key="1" >
                            <Text className='sobre-planta'>É ideal para climas tropicais e subtropicais. Embora seja uma planta muito resistente, o indicado é que a espada-de-são-jorge seja posicionada em ambientes com luz indireta ou de meia-sombra, onde haja incidência parcial de sol durante o dia.

</Text>
                        </Panel>
                    </Collapse>
                </Row>

            </Content>
            <MenuComponent />
        </Layout >
    );
};


export default Planta;

