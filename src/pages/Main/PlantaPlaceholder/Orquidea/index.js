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
import planta from "../../../../assets/orqui.png";
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
                <Title className='titulo' style={{ marginTop: "0" }}>Orquídeas Borboleta</Title>

            </Row>
            <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
                <Row className='container_item' style={{ marginBottom: '5rem' }}>
                    <Col>
                        <Card className='card-planta-style'>
                            <Text className='text-planta'>Tem como nome científico: Phalaenopsis</Text>
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
                        <Text className='sobre-planta'>Capazes de elevar a estética de qualquer ambiente, as orquídeas são plantas sofisticadas e elegantes, podendo ser adotadas em ambientes domésticos ou mesmo profissionais. Por serem plantas epífitas, as orquídeas borboleta necessitam de cuidados simples - porém específicos - para se desenvolverem com saúde e vivacidade.
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
                            <Text className='sobre-planta'>A rega deverá ser feita pelo período da manhã e irá depender do tipo de substrato adotado, podendo ocorrer de uma a três vezes por semana ao notar que o substrato está seco ou quase seco. Outra técnica é observar se as raízes estão secas - aspecto visível pela aparência prateada. Caso esteja, recomenda-se a rega, que tornará as raízes mais esverdeadas.

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
                            <Text className='sobre-planta'>No caso das orquídeas borboleta, pode ser aplicado tanto o adubo orgânico, de efeito mais lento porém mais seguro, como o inorgânico, que gera resultados mais rápidos mas exige maior atenção para não prejudicar a planta. Em ambos os casos, é importante a presença de nitrogênio, fósforo e potássio. Logo, o adubo NPK 10 30 20 é o ideal em tempos de floração e nos outros períodos os adubos NPK 10 10 10 e NPK 20 20 20 funcionam corretamente, devendo ambos serem aplicados semanalmente (no mesmo dia) em quantidade reduzida.

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
                            <Text className='sobre-planta'>Por serem plantas íntimas da água, o vaso ideal para as orquídeas borboleta é o de plástico transparente, capaz de reter muito bem a umidade e ajudar as raízes a realizarem a fotossíntese. É importante também que o vaso seja apertado, de forma que as raízes ocupem boa parte do espaço, e composto por um substrato que promova uma boa aeração, como fibra de coco destratada, carvão e casca de arroz carbonizada. Deve-se evitar o uso de terra e casca de pinheiro.

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
                            <Text className='sobre-planta'>O clima próprio para as orquídeas borboletas é o tropical e o subtropical, idealmente (em média) de 20 a 24 graus, podendo variar alguns graus para menos durante a noite, o que favorece o surgimento de flores. Além disso, é indicado que o ambiente seja muito úmido; em meses mais secos, borrifar as folhas com água pode ajudar na manutenção da planta.

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

