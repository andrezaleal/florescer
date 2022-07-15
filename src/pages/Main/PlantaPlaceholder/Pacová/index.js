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
import planta from "../../../../assets/pacovin.png";
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
                <Title className='titulo' style={{ marginTop: "0" }}>Pacová</Title>

            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
                    <Col>
                        <Card className='card-planta-style'>
                            <Text className='text-planta'>Tem como nome científico: Philodendron martianum</Text>
                        </Card>
                        <div className='planta'>
                        <Image
                            src={planta}
                            preview={false}
                            className='planta'
                        /></div>
                    </Col>
                </Row>
                <Row className='container_item' style={{ padding: '0 15px', textAlign: 'justify' }}>
                    <Col>
                        <Text className='sobre-planta'>Originário da Mata Atlântica, o Pacová é uma planta nativa das florestas brasileiras. Suas longas folhas de um verde vibrante refletem sua natureza viva, capaz de iluminar e animar qualquer ambiente. A planta não é exigente, o que a torna ideal para iniciantes e para a decoração de espaços internos.
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
                            <Text className='sobre-planta'>O Pacová adora umidade. Por isso, é importante se certificar que o solo está sempre úmido, mas não encharcado. Dessa forma, recomenda-se a rega a cada dois ou três dias. Uma dica é utilizar as mãos para descobrir se a terra está seca - o que indicará a necessidade de uma nova rega.

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
                            <Text className='sobre-planta'>É recomendada a adubação uma ou duas vezes por ano. Ela deve ser equilibrada e pode ser realizada por meio de compostos orgânicos, por exemplo.

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
                            <Text className='sobre-planta'>O ideal é utilizar vasos de plástico ou jardineiras, que contribuirão para manter a umidade do interior do vaso. O solo, por sua vez, deve ser solto e com bastante umidade, o que pode ser alcançado pela mistura de terra mista, areia de construção e fibras de coco, por exemplo.
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
                            <Text className='sobre-planta'>O Pacová é uma espécie epífita típica de florestas tropicais, logo ele é ideal para climas quentes e úmidos. Certifique-se de que ele não está sendo exposto à luz direta do sol: isso pode danificar a planta e amarelar suas folhas. O recomendado é a exposição de meia-sombra, preferencialmente perto de alguma janela com boa iluminação indireta.
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

