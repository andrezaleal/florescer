import React from 'react';
import {
  Typography,
  Row,
  Col,
  Image,
  Card,
} from 'antd';
import './styles.css';
const CardCatalogo = ({ nome, img, card }) => {
  const { Text } = Typography;
  return (
    <>
      <Row className='container_item' style={{ alignContent: 'center' }}>
        <Col>
          <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${card})`, color: "FFFFFF",}}>
            <Image
              src={img}
              preview={false}
              className='img-catalogo'
            />
             <Text style={{ color: '#6D7970'}} className='titulo-catalogo'>{nome}</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardCatalogo;