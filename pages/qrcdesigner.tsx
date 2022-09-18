import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import axios from "axios";
import designerStyles from '../styles/qrcdesigner.module.css';

const QRCDesigner = () => {

    const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');
    const [backgroundColorDisplay, setBackgroundColorDisplay] = React.useState('ffffff');
    const [foregroundColor, setForegroundColor] = React.useState('#000000');
    const [foregroundColorDisplay, setForegroundColorDisplay] = React.useState('000000');
    const [generatedQRC, setGeneratedQRCValue] = useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [width, setWidth] = React.useState(100);
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');

    // @ts-ignore
    useEffect( () => {
       generate ().then (() => {});
    }, [backgroundColor, foregroundColor, width]);

    /**
     * Call our API and get QRC!!!!
     */
    const generate = async () => {

        // strip out leading '#' from colours
        const bgColor = backgroundColor ? backgroundColor.substring( 1 ) : backgroundColor;
        const fgColor = foregroundColor ? foregroundColor.substring( 1 ) : foregroundColor;

        const parms = `?background=${bgColor}&color=${fgColor}&width=${width}&margin=2`;

        const {data} = await axios.get(`/api/v1.0/qrcgen${parms}`);
        setGeneratedQRCValue(data);
    }

    const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(event.target.value);
        setBackgroundColorDisplay(event.target.value.substring( 1 ));

    };

    const handleBackgroundColorChangeDisplay = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(`#${event.target.value}`);
        setBackgroundColorDisplay(event.target.value);
        //await generate();

    };

    const handleForegroundColorChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setForegroundColor(event.target.value);
        setForegroundColorDisplay(event.target.value.substring( 1 ));
        //await generate();

    };

    const handleForegroundColorChangeDisplay = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setForegroundColor(`#${event.target.value}`);
        setForegroundColorDisplay(event.target.value);
        //await generate();

    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleWidth = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const width = parseInt( event.target.value);
        if ( isNaN( width ) ) {
            setWidth(100 );
            return;
        }

        setWidth(width);

        if  ( width < 100 ) {
            return;
        }

    };

    const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {

        /* Prevent form from submitting by default */
        e.preventDefault();

        /* If file is not selected, then show alert message */
        if (!inputFileRef.current?.files?.length) {
            alert('Please, select file you want to upload');
            return;
        }

        setIsLoading(true);

        /* Add files to FormData */
        const formData = new FormData();

        Object.values(inputFileRef.current.files).forEach(file => {
            formData.append('myfile', file);
        })

        formData.append('myfield1', 'valllll')
        formData.append('myfield2', 'valllll22222')

        const response = await axios.post('/api/v1.0/uploader', formData)

        setIsLoading(false);
    };

    return (
        <div>
            <Header/>
            <header className="bg-dark py-5 text-white">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder mb-2">
                                    Design your QRC<br/><i className="bi bi-qr-code"></i>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container px-5 bg-light h-25">&nbsp;</div>

            <div className="container px-5 bg-light">
                <div className={"row "}>
                    <div className={"col-sm-12 col-lg-7 "}>

                        <form encType="multipart/form-data">
                            <div className={"container"}>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Name</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Used to manage your QRC</h6>
                                        <input onChange={handleNameChange} className="form-control" type="text"
                                               id="name"/>

                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Background Color</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Click to choose your background
                                                                                      color</h6>
                                        <div className={"col-sm-12 input-group mb-3 " + designerStyles.colorPicker}>
                                            <input onChange={handleBackgroundColorChange}
                                                   className="form-control "
                                                   type="color"
                                                   id="backgroundColor"
                                                   title={"Click here to choose..."}
                                                   value={backgroundColor}/>
                                            <span className={"input-group-text"}>or (RGB)</span>
                                            <input maxLength={6} onChange={handleBackgroundColorChangeDisplay} className="form-control"
                                                   type="text"
                                                   id="backgroundColorRGB"
                                                   value={backgroundColorDisplay}/>
                                        </div>
                                    </div>
                                </div>





                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Foreground Color</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Click to choose your foreground
                                                                                      color</h6>
                                        <div className={"col-sm-12 input-group mb-3 " + designerStyles.colorPicker}>
                                            <input onChange={handleForegroundColorChange}
                                                   className="form-control "
                                                   type="color"
                                                   id="foregroundColor"
                                                   title={"Click here to choose..."}
                                                   value={foregroundColor}/>
                                            <span className={"input-group-text"}>or (RGB)</span>
                                            <input maxLength={6} onChange={handleForegroundColorChangeDisplay} className="form-control"
                                                   type="text"
                                                   id="foregroundColorRGB"
                                                   value={foregroundColorDisplay}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Width</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            How big will your QRC be? (Minimum is 100px)</h6>
                                        <div className="input-group">
                                        <input maxLength={3} onChange={handleWidth}
                                               className={ width < 100  ? 'is-invalid' : '' + "form-control" }
                                               type="text"
                                               id="width"
                                               value={width}/>
                                        <span className="input-group-text">px</span>
                                            <div className="invalid-feedback">
                                                Please enter a width between 100 and 999.
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Margin</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            Margin around </h6>
                                        <div className="input-group">
                                            <input maxLength={3} onChange={handleWidth}
                                                   className={ width < 100  ? 'is-invalid' : '' + "form-control" }
                                                   type="text"
                                                   id="width"
                                                   value={width}/>
                                            <span className="input-group-text">px</span>
                                            <div className="invalid-feedback">
                                                Please enter a width between 100 and 999.
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Adding your logo?</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Select your logo image. This will
                                                                                      be
                                                                                      placed in the center of your
                                                                                      QRC</h6>
                                        <input className="form-control"
                                               accept=".png, .jpg, .jpeg"
                                               type="file"
                                               id="fileLogo"
                                               name="fileLogo"
                                               ref={inputFileRef}/>

                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className={"col-sm-12 col-lg-5"}>

                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Live preview</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Modify attributes and see your QRC</h6>

                                {generatedQRC ?
                                    <section className="shadow bg-light py-5 border-bottom">
                                        <div className=" text-center mb-5">

                                            <div>
                                                <img src={generatedQRC} />
                                            </div>

                                        </div>

                                    </section>
                                    : null
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default QRCDesigner;