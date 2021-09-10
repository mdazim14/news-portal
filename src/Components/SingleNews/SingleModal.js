import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import image1 from '../../Images/singleNews.jpg';
import { useParams } from "react-router-dom";


const SingleModal = () => {

    const { id } = useParams();

    const [NewsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/News')
            .then(res => res.json())
            .then(data => {
                // console.log("under then llll", data)
                const singleData = data.find(element => element._id === id);
                console.log("singleData finding", singleData)
                setNewsData(singleData);

            })
    }, [id])

    const { Title, created, ReporterName, Category } = NewsData;

    //Need to explore with id post get 
    // useEffect(() => {
    //     fetch(`http://localhost:5000/News/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log("under then", data)
    //             console.log("data",data);
    //             setNewsData(data);
    //         })
    // }, [id])


    return (
        <div className="text-white text-center">
            <h1>Single News</h1>
            <div className="border">
                <div className="text-dark d-inline-block">
                    <Card style={{ width: '80rem', height: '60rem' }}>
                        <Card.Img style={{ height: '30rem', padding: '10px' }} variant="top" className="w-100 img-fluid" src={image1} />
                        <Card.Body>
                            <Card.Title>
                                <h1>{Title}</h1>
                            </Card.Title>
                            <Card.Title>
                                <h6>{created}</h6>
                                <h5>Reporter: {ReporterName}</h5>
                            </Card.Title>
                            <Card.Text>
                                <div className="text-start">
                                    <h6 className="p-4">A court found Le Van Tri guilty of "transmitting dangerous infectious diseases" to eight people, one of whom eventually died.

                                        Until recently Vietnam had been largely successful in keeping Covid out with tight restrictions.

                                        But infections have surged since June, with an outbreak fuelled by the more contagious Delta variant.

                                        The country has seen more than 530,000 cases with more than 13,300 deaths, many of which have occurred the last few months.

                                        Many of those cases have been found in the capital Ho Chi City.</h6>

                                    <h6 className="p-4">
                                        In early July, Tri, 28, had reportedly travelled by motorcycle from Ho Chi City to his home province Ca Mau in the south of the country.

                                        At Ca Mau, Tri was found to have lied on a health declaration form which asked about his recent travel history, and also failed to comply with isolation rules.

                                        Local authorities at the time had made it mandatory that anyone travelling from other provinces into Ca Mau had to immediately isolate themselves for 21 days.

                                        Tri later tested positive for Covid, and was found to have transmitted the virus to members of his family as well as staff at a welfare centre which he visited.

                                        Tri was sentenced to jail at the end of a one-day trial, and was also fined the equivalent of $880 (£630).
                                    </h6>
                                </div>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SingleModal;