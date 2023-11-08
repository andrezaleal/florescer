import React, { useEffect, useState } from 'react'
import {
	Layout,
	Typography,
	Input,
	Row,
	Col,
	Button,
	Spin,
	Card
} from 'antd';
import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../../components/MenuComponent';
import { db } from '../../../services/firebaseConnections';
import { getDocs, collection } from 'firebase/firestore';

const { Title, Text } = Typography;
const { Content } = Layout;

const CatalogoPequenas = () => {

	const history = useHistory();

	const [planta, setPlanta] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	const allPlants = collection(db, "catalogo");

	useEffect(() => {
		async function loadPlantasPequenas() {
			try {
				const querySnapshot = await getDocs(allPlants);
				const lista = [];
				querySnapshot.forEach((doc) => {
					const plantaPequena = doc.data().pequena;

					if (plantaPequena) {
						lista.push({
							id: doc.id,
							titulo: doc.data().titulo,
							image: doc.data().image,
							planta: plantaPequena,
						});
					}
				});

				if (lista.length === 0) {
					console.log("Nenhuma Planta Fácil de Cuidar Encontrada");
					setLoading(false);
					return;
				}

				lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
				setPlanta(lista);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
		}
		loadPlantasPequenas();
	}, []);

	const filteredPlantas = planta.filter((planta) => {
		return planta.titulo.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<Layout className="layout" >
			<Row className='container_item' sstyle={{ justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '3rem' }}>
				<Col span={8}>
					<Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
						<ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
					</Button>
				</Col>
				<Col span={16}>
					<Title className='titulo' style={{ marginTop: "0", display: 'flex', }}>Catálogo</Title>
				</Col>
			</Row>
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
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</Col>
				</Row>
				<Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
					<Col>
						<Title level={4} className='titulo-catalogos' style={{ textAlign: "left" }}>Plantas Pequenas</Title>
					</Col>
				</Row>
				{loading ? <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' /> :
					<Row className='container_item' style={{ marginBottom: '6rem' }}>

						{filteredPlantas.map((item, index) => (
							<Col key={index} style={{ marginBottom: '1rem' }}>
								<Link to={`/planta/${item.id}`}><Card className="card-catalogo-style-card" bordered={false} style={{ color: "FFFFFF", }}>
									<img
										src={item.image}
										className='img-catalogo-card'
									/>
									<Col>
										<Text style={{ color: '#6D7970' }} className='nome-planta'>{item.titulo}</Text>
									</Col>
								</Card></Link>
							</Col>
						))}
					</Row>
				}
				<MenuComponent />
			</Content>
		</Layout >
	);
};

export default CatalogoPequenas;

