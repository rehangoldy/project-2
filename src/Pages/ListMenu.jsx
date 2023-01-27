import React from 'react'
import Tabs from '../components/Tabs';
import Layout from '../Layout';
import {Container} from 'reactstrap';
import Product from '../features/product/Product';




export default function ListMenu() {
  return (
    <Layout>
      <Container>
      <h1 className='list-font'>Easy to Wear, Easy to Style</h1>
      <h2 className='list-font'>Happy Shopping!</h2>
      <Tabs/>
      <Product/>
      </Container>
    </Layout>
  )
}
