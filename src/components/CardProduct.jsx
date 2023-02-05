import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function CardProduct({item}) {
    return (
        <section ca>
        <div className='mt-4'>   
        <Card className='d-flex justify-conten-center align-item-center'>
            <img alt="Sample" src={item.image} className ='image-shop' />
            <CardBody>
                <CardTitle className='card-product' tag="h5">{item.title}</CardTitle>
                <CardText className='card-product'>
                  Category :  {item.category}
                </CardText>
                <CardSubtitle className="mb-2 text-muted card-product" tag="h6">
                  Price :  ${item.price}
                </CardSubtitle>
                
                
            </CardBody>
        </Card>
        </div> 
        </section>
    )
}
