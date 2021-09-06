import React from 'react';
import { Card, Button } from 'react-bootstrap';
import image1 from '../../Images/Project1.jpeg';
import image2 from '../../Images/Project2.jpeg';
import image3 from '../../Images/Project3.jpeg';

const AllNews = () => {
    return (
        <div className="text-white">
            <h1 className="p-5 m-5">ALL NEWS</h1>
            <div className="d-flex">


                <div className="p-5 text-dark border-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" className="w-100 img-fluid" src={image1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="p-5 text-dark border-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" className="w-100 img-fluid" src={image2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="p-5 text-dark border-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '15rem' }} variant="top" className="w-100 img-fluid" src={image3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AllNews;