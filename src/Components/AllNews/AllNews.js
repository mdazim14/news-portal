import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import image1 from '../../Images/coverImg.png';

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AllNews = () => {

    const { id } = useParams();


    const [news, setNews] = useState([]);
    console.log("state data", news)



    useEffect(() => {
        fetch('http://localhost:5000/News')
            .then(res => res.json())
            .then(data => {
                // console.log("under then", data)
                setNews(data);
            })
    }, [])


    return (
        <div className="text-white text-center">
            <h1 className="p-5 m-5">ALL NEWS</h1>
            <div className="d-flex justify-content-center">

                <div className="d-flex flex-wrap m-3 text-dark border-5">
                    {
                        news.map(news => {
                            const { Title, Description, _id } = news;
                            // console.log("id", _id);
                            return (
                                <div className="">
                                    <Card style={{ width: '18rem', height: '30rem',  margin: '30px' }}>
                                        <Card.Img style={{ height: '15rem' }} variant="top" className="w-100 img-fluid" src={image1} />
                                        <Card.Body>
                                            <Card.Title>{Title}</Card.Title>
                                            <div style={{ height: '7rem' }} >
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            </div>
                                            
                                            <div>
                                            <Link to={`/news/${_id}`}>
                                                <Button  variant="primary">Read more</Button>
                                            </Link>
                                            </div>
                                            
                                        </Card.Body>
                                    </Card>
                                </div>

                            )


                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default AllNews;