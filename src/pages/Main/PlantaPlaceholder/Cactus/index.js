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
import planta from "../../../../assets/cacto.png";
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
                <Title className='titulo' style={{ marginTop: "0" }}>Cactus</Title>

            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
                    <Col>
                        <Image
                            src={planta}
                            preview={false}
                            className='planta'
                        />
                    </Col>
                </Row>
                <Row className='container_item' style={{ padding: '0 15px', textAlign: 'justify' }}>
                    <Col>
                        <Text className='sobre-planta'>Espinhentos, resistentes e fáceis de cuidar, os mini cactos são a escolha certa para iniciantes no universo das plantas ou para aqueles que desejam enfeitar seu ambiente doméstico (ou externo) de forma prática e simples. São inúmeras espécies diferentes, embora todas compartilhem dos mesmos princípios.</Text>
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
                            <Text className='sobre-planta'>Típicos de biomas quentes e desérticos, os cactos são capazes de passar um bom período de tempo sem acesso à água. Dessa forma, recomenda-se a rega em pouca quantidade para evitar acúmulos que possam ser danosos. Regue uma vez por semana em climas quentes e a cada 15 dias em climas mais frios. É importante se certificar sempre antes da rega se o substrato se encontra seco antes de iniciar o processo.

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
                            <Text className='sobre-planta'>Por serem eficientes em armazenar nutrientes por mais tempo, a adubação dos cactos pode ser feita em intervalos maiores. Recomenda-se o adubo orgânico misturado ao substrato ou o uso de adubo químico, como o NPK, na forma diluída. 
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
                            <Text className='sobre-planta'>Os cactos não podem ser expostos a uma quantidade excessiva de água. Por isso, os vasos devem ser constituídos de material que absorva a umidade do solo, como o barro, a cerâmica ou o cimento. Além disso, é importante um bom sistema de drenagem: misture areia, cascalho e terra na mesma proporção.

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
                            <Text className='sobre-planta'>Ideal para climas quentes e secos. Embora possa ficar em ambientes de luz indireta, recomenda-se manter os cactos em locais com forte incidência de luz solar direta, o que favorece o crescimento e a beleza dessas plantas.

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

