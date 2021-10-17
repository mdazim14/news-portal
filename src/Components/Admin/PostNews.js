import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import convertToBase64 from '../../utilities/convertToBase64';
import './PostNews.css';


const PostNews = () => {
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [info, setInfo] = useState(false);
    // console.log("infoTop", info)

    const handleSwitch = (e) => {
        const isChecked = e.target.checked;
        setInfo(e.target.checked);
    }

    const onSubmit = async (data) => {
        try {
            const isCheckedTrue = info;
            data['topNewsChecked'] = isCheckedTrue;
            console.log("after submit", data);
            console.log("image Link", data.file[0])
            const file = await convertToBase64(data.file[0])
            const res = await fetch('http://localhost:5000/addNews', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ ...data, file, info })
            })
            const isPosted = await res.json()

            console.log("isPosted", isPosted);
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
            <h5 className="p-2 text-uppercase text-center bg-warning text-dark border">This is Admin Panel for Post news.</h5>
            <div>
                <div>
                    <div className="py-3 form-check fs-5 form-switch">
                        <input onClick={handleSwitch} className="form-check-input" name="checkbox" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Top News</label>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="">

                        <div>
                            <div className="p-3 m-2 border">
                                <h5>News Title:</h5>
                                <input defaultValue="News Title" type="text" {...register("Title", { required: true })} />
                            </div>
                            <div className="p-3 m-2 border">
                                <h5>Choose Category</h5>
                                <select className="border fs-5 fw-bold text-danger" {...register("Category", { required: true })}>
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
                            <div className="p-3 m-2 border">
                                <h5>Select Image:</h5>
                                <input type="file"  {...register("file", { required: true })} />
                                {/* onChange={handleFileChange} */}
                            </div>
                            <div className="p-3 m-2 border">
                                <h5> Reporter Name:</h5>
                                <input defaultValue="Name" type="text" {...register("reporterName", { required: true })} />
                            </div>
                        </div>
                    </div>
                    <div className="p-3 m-2 border">
                        <h5>Full Report:</h5>
                        <textarea style={{ width: "100%", height: "100px" }} defaultValue="Full Report" type="text"{...register("fullReport", { required: true })} />
                    </div>

                    <div className="text-center">
                        <button className="btn fs-5 btn-primary m-5" type="submit" >
                            Submit
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};


export default PostNews;