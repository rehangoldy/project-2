import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import CardProduct from '../../components/CardProduct';
import { getProduct } from './productSlice';



export default function Product() {
    const {status, data} = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
      if (status === "idle" ) {
        dispatch(getProduct());
      }  
    }, [status]);

    if (status === 'loading' ) { 
        return <div>loading...</div>;
    }

  return (
    <Container>
        <Row>
            {
                data.map((item, i) => (
                    <Col key={i} xs="6" md=" 4" lg=" 3"   >
                    <CardProduct item={item}/>
                    </Col>
                ))
            }
            
        </Row>
    </Container>
  );
}
