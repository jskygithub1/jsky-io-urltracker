import React from "react";
import {useState} from 'react';
import axios from "axios";
import Image from "next/image";

const TryIt = () => {

    const [value, setValue] = useState('');

    const [generatedQRC, setGeneratedQRCValue] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    /**
     * Call our API and get QrcId!!!!
     */
    const generate = async () => {
        const {data} = await axios.get(`/api/v1.0/qrcgen?background=ffffff&&color=000000&width=300&margin=10`);
        setGeneratedQRCValue(data);
    }


    return (
        <>
        <section className="bg-light py-5 border-bottom">
            <div className="text-center mb-5">
                <h2 className="fw-bolder ">Try It - Generate your QRC</h2>
            </div>
            <div className="container px-5 my-5">
                <div className="form-floating mb-3">

                    <input onChange={handleChange} className="form-control" type="text" id="try-input"/>
                    <label htmlFor="try-input">Enter a URL</label>

                    <div className="mt-4 d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <button onClick={generate} className="btn btn-primary btn-lg px-4 me-sm-3">Generate!</button>
                    </div>
                </div>

            </div>

        </section>
            {generatedQRC ?
                <section className="bg-light py-5 border-bottom">
                    <div className="text-center mb-5">

                        <div>
                            <Image src={generatedQRC} alt={"QrcId Image"}/>
                        </div>

                    </div>

                </section>
                : null
            }

            </>
    )
}

export default TryIt;