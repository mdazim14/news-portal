import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import convertToBase64 from '../../utilities/convertToBase64';
import './PostNews.css';


const PostNews = () => {
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("after submit", data);
            const file = await convertToBase64(data.file[0])
            const res = await fetch('http://localhost:5000/addNews', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ ...data, file })
            })
            const isPosted = await res.json()
            // console.log("is", isPosted);
            alert('The news added successfully')
            history.push('/');

        } catch (error) {
            console.log(error)
        }

        // fetch('http://localhost:5000/addNews',{
        //     method:'POST',
        //     headers:{
        //         'Content-type': 'application/json'
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res=>res.json())
        // .then(success=>{
        //     console.log("result data",success);
        //     if(success === false){
        //          alert('The news added successfully')
        //          history.push('/');
        //     }
        // })
    }

    return (
        <div className="bg-dark text-white p-5">
            <h5 className="bg-info text-dark border">This is Admin Panel for Post news.</h5>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex justify-content-center">

                        <div>
                            <div className="p-5 border w-100">
                                <h5>News Title:</h5>
                                <input defaultValue="News Title" type="text" {...register("Title", { required: true })} />
                            </div>
                            <div className="p-5 border">

                                <h5>Choose Category</h5>
                                <select className="border w-100 fs-5 fw-bold text-danger" {...register("Category", { required: true })}>
                                    <option>-</option>
                                    <option>Sports</option>
                                    <option>Health</option>
                                    <option>Entertainment</option>
                                    <option>International</option>
                                    <option>Environment</option>
                                    <option>Politics</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="p-5 border">
                                <h5>Select Image:</h5>
                                <input type="file"  {...register("file", { required: true })} />
                                {/* onChange={handleFileChange} */}
                            </div>
                            <div className="p-5 border">
                                <h5> Reporter Name:</h5>
                                <input defaultValue="Name" type="text" {...register("reporterName", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex ms-auto border">
                        <div className="p-5 border w-100">
                            <h5>Full Report:</h5>
                            <textarea style={{ width: "500px" }} defaultValue="Full Report" type="text"{...register("fullReport", { required: true })} />
                        </div>
                    </div>

                    <button className="btn btn-primary m-5" type="submit" >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};


export default PostNews;