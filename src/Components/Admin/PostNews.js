import React from 'react';
import { useForm } from "react-hook-form";
import './PostNews.css';


const PostNews = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-dark text-white p-5">
            <h5 className="bg-info text-dark border">This is Admin Panal for Post news.</h5>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex jus">
                        <div className="p-5 border w-100">
                            <h5>News Title:</h5>
                            <input defaultValue="News Title" type="text" {...register("Title")} />
                        </div>
                        <div className="p-5 border">
                            <h5>Reporter Name:</h5>
                            <input defaultValue="Repoter Name" type="text" {...register("ReporterName")} />
                        </div>
                        <div className="p-5 border">
                            <h5>Select Image:</h5>
                            <input type="file"  {...register} />
                        </div>

                    </div>

                    <div className="d-flex ms-auto border">

                        <div className="p-5 border w-100">
                            <h5>Full Report:</h5>
                            <textarea style={{ width: "800px" }} defaultValue="Full Report" type="text"{...register("FullReport")} />
                        </div>

                    </div>
                    <input className="btn btn-primary m-5" type="submit" />


                </form>
            </div>
        </div>
    );
};


export default PostNews;