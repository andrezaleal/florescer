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
import planta from "../../../../assets/lavender.png";
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
                <Title className='titulo' style={{ marginTop: "0" }}>Lavanda</Title>

            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
                    <Col>
                        <Card className='card-planta-style'>
                            <Text className='text-planta'>Tem como nome científico: Lavandula angustifolia</Text>
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
                        <Text className='sobre-planta'>Conhecida por sua fragrância inconfundível, a lavanda é originária do Mediterrâneo e típica do cultivo francês. Seu aroma, além de perfumar qualquer ambiente, mantendo-o sempre agradável e leve, é aplicado de diversas formas comercialmente, desde perfumes até óleos essenciais. Além disso, é uma planta de fácil cultivo devido a sua adaptabilidade à variação de temperaturas.
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
                            <Text className='sobre-planta'>Plantas jovens devem ser regadas dia sim, dia não durante a primeira semana. Após esse período, a rega deve ocorrer a cada quatro dias após o surgimento das flores e uma vez por semana no restante do tempo.

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
                            <Text className='sobre-planta'>Durante o primeiro ano de cultivo não é necessária a adubação, uma vez que a lavanda é uma planta que não necessita de muitos nutrientes para se desenvolver. Após esse período, uma aplicação de fertilizante de liberação lenta toda primavera já é o suficiente.
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
                            <Text className='sobre-planta'>Os tipos de vaso ideais para a lavanda são os de cerâmica e os de terracota. Por serem relativamente mais espessos que outros materiais, não irão esquentar com facilidade durante o verão e irão resistir ao frio intenso durante o inverno. O solo deve ser bem drenado, o que pode ser atingido com a adição de areia à terra, e de preferência levemente alcalino.

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
                            <Text className='sobre-planta'>Ideal para clima subtropical, a lavanda cresce melhor em ambientes relativamente secos e não gosta de muita umidade. Deve ser exposta à luz direta do sol de quatro a seis horas por dia.

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

