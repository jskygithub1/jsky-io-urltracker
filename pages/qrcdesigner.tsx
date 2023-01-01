import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import axios from "axios";
import designerStyles from '../styles/qrcdesigner.module.css';
import getId from '../helpers/getId';
import QRCComponents from "./components/qrc_designer/qrcComponents";
import {showModal} from "../helpers/modal";
import validator from 'validator';

const QRCDesigner = () => {

    const [allTypes, setAllTypes] = React.useState<any | {}>({});
    const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');
    const [backgroundColorDisplay, setBackgroundColorDisplay] = React.useState('ffffff');
    const [enableSave, setEnableSave] = React.useState<any | ''>(false);
    const [foregroundColor, setForegroundColor] = React.useState('#000000');
    const [foregroundColorDisplay, setForegroundColorDisplay] = React.useState('000000');
    const [generatedQRC, setGeneratedQRCValue] = useState(null);
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [name, setName] = useState('');
    const [qrcData, setQRCData] = React.useState<any | null>(null);
    const [qrcId, setQRCId] = React.useState<any | null>(getId.getId( 8 ));
    const [selectedType, setSelectedType] = React.useState<any | null>(null);
    const [validationError, setValidationError] = React.useState< any | null >(null);
    const [width, setWidth] = React.useState(100);

    const types = [
        {
            type: 'url',
            color: '#404080',
            icon: 'bi bi-globe',
            displayText: 'URL',
            tip: 'URL Link'
        },
        {
            type: 'text',
            color: '#404080',
            icon: 'bi bi-fonts',
            displayText: 'Text',
            tip: 'Text'
        },
        {
            type: 'phone',
            color: '#8080c0',
            icon: 'bi bi-telephone-outbound-fill',
            displayText: 'Phone call',
            tip: 'Make a phone call'
        },
        {
            type: 'sms',
            color: 'blue',
            icon: 'bi bi-chat-text-fill',
            displayText: 'Send SMS',
            tip: 'Send SMS message'
        },
        {
            type: 'whatsapp',
            color: '#00c000',
            icon: 'bi bi-whatsapp',
            displayText: 'Send WhatsApp message',
            tip: 'Send WhatsApp message'
        },
        {
            type: 'youtube',
            color: 'red',
            icon: 'bi bi-youtube',
            displayText: 'Play YouTube video',
            tip: 'Play YouTube video'
        },
        {
            type: 'linkedin',
            color: '#0a66c2',
            icon: 'bi bi-linkedin',
            displayText: 'LinkedIn profile',
            tip: 'LinkedIn profile'
        },
        {
            type: 'eMail',
            icon: 'bi bi-envelope',
            displayText: 'Send eMail',
            tip: 'Send eMail'
        },
        {
            type: 'event',
            color: '#ff8000',
            icon: 'bi bi-calendar-date',
            displayText: 'Create calendar event',
            tip: 'Create calendar event'
        },
        {
            type: 'contact',
            color: 'darkblue',
            icon: 'bi bi-person-rolodex',
            displayText: 'Create Contact',
            tip: 'Create contact'
        },
        {
            type: 'wifi',
            color: '#0080ff',
            icon: 'bi bi-wifi',
            displayText: 'WIFI Connection',
            tip: 'Create WIFI connection'
        }

    ]

    // @ts-ignore
    useEffect(() => {
        generate().then(() => {
        });
    }, [backgroundColor, foregroundColor, name, selectedType, qrcData, width]);

    /**
     * Call our API and get QrcId!!!!
     */
    const generate = async () => {

        if ( !qrcData ) {
            return
        }
        // strip out leading '#' from colours
        const bgColor = backgroundColor ? backgroundColor.substring(1) : backgroundColor;
        const fgColor = foregroundColor ? foregroundColor.substring(1) : foregroundColor;

        //const parms = `?background=${bgColor}&color=${fgColor}&width=${width}&margin=2&data=${qrcData}`;

        const parms = encodeURI(`?background=${bgColor}&color=${fgColor}&width=${width}&margin=2&data=${allTypes[selectedType]}`);
        console.log(parms);
        console.log( '----------- ')
        const { data } = await axios.get(`/api/v1.0/qrcgen${parms}`);
        setGeneratedQRCValue(data);

    }

    /**
     * Regen on change
     * @param event
     */
    const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(event.target.value);
        setBackgroundColorDisplay(event.target.value.substring(1));

    };

    /**
     * Regen on change
     * @param event
     */
    const handleBackgroundColorChangeDisplay = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(`#${event.target.value}`);
        setBackgroundColorDisplay(event.target.value);
    };

    /**
     * Regen on change
     * @param event
     */
    const handleForegroundColorChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setForegroundColor(event.target.value);
        setForegroundColorDisplay(event.target.value.substring(1));
    };

    /**
     * Regen on change
     * @param event
     */
    const handleForegroundColorChangeDisplay = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setForegroundColor(`#${event.target.value}`);
        setForegroundColorDisplay(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        console.log( event.target.value );
        // react does ot update state immediately.
        setTimeout(() => {
            console.log( 'now..' );
            console.log( name );
            validate ( qrcData );
        }, 2000 )

    };

    /**
     * Regen on change
     * @param event
     */
    const handleWidth = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const width = parseInt(event.target.value);
        if (isNaN(width)) {
            setWidth(100);
            return;
        }

        setWidth(width);

        if (width < 100) {
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

    const saveQRC = async () => {
        debugger

        //`?background=${bgColor}&color=${fgColor}&width=${width}&margin=2&data=${allTypes[selectedType]}`
        const qrcOptions = {
            background: backgroundColor,
            color: foregroundColor,
            data: qrcData,
            name,
            qrcId,
            type: selectedType,
            width
        }

        //const { data } = await axios.post(`/api/v1.0/saveqrc`, qrcOptions);

       // console.log( data );
        alert( 'QRC Saved!');
        showModal( 'a','a','a');

    };

    const setQRCDataFromChild = (data: any) => {
        setQRCData(data);
        allTypes[selectedType] = data;
        validate ( data );
        console.log(allTypes);
    };

    const setType = (qrcType: string) => {
        setValidationError( null ); // be optimistic
        setEnableSave( false );
        setSelectedType(qrcType);
    };

    const validate = ( data: any ) => {

        setValidationError( null ); // be optimistic
        setEnableSave( false );
        const type = selectedType.toLowerCase()

        switch ( type ) {

            case 'contact': {

                if (  data.indexOf( 'FN: undefined') < 0  ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter a contact first name.')
                break;
            }

            case 'email': {
                if ( data.indexOf( 'TO:;') > 0 ) {
                    setValidationError( 'Please enter a TO address.')
                    break;
                }

                const email = data.substring( data.indexOf( 'TO:') + 3, data.indexOf( 'SUB:') - 1 );
                if ( !validator.isEmail( email ) ) {
                    setValidationError( 'Please enter a valid eMail address.')
                    break;
                }

                if ( data.indexOf( 'SUB:;') > 0 ) {
                    setValidationError( 'Please enter a subject.')
                    break;
                }

                if ( data.indexOf( 'BODY:;') > 0 ) {
                    setValidationError( 'Please enter a message.')
                    break;
                }

                setEnableSave( true );
                break;

            }

            case 'event': {

                if ( data.indexOf( 'SUMMARY:undefined') > 0 ) {
                    setValidationError( 'Please enter a summary.')
                    break;
                }

                if ( data.indexOf( 'SUMMARY:\n') > 0 ) {
                    setValidationError( 'Please enter a summary.')
                    break;
                }

                if ( data.indexOf( 'DTSTART:undefined') > 0 ) {
                    setValidationError( 'Please select a start date.')
                    break;
                }

                if ( data.indexOf( 'DTEND:undefined') > 0 ) {
                    setValidationError( 'Please select an end date.')
                    break;
                }

                if ( data.indexOf( 'Tundefined') > 0 ) {
                    setValidationError( 'Please select start/end times.')
                    break;
                }

                setEnableSave( true );
                break;

            }

            case 'linkedin': {
                const name = data.substring( 'https://www.linkedin.com/in/'.length)
                if (  data.length - 'https://www.linkedin.com/in/'.length > 6 ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter a linked in profile name.')
                break;
            }

            case 'text': {
                console.log( data );
                if (  data !== '' ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter some text.')
                break;
            }

            case 'sms':
            case 'phone': {
                if (  data !== '' ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter some text.')
                break;
            }

            case 'whatsapp': {
                if ( data.length > 'https://wa.me/1234565?text=5'.length) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter a number and message.')
                break;
            }

            case 'wifi': {

                if (  data.indexOf( 'S:;') > 0  ) {
                    setValidationError( 'Please enter a network name (SSID).')
                    break;
                }

                if (  data.indexOf( 'S:undefined') > 0  ) {
                    setValidationError( 'Please enter a network name (SSID).')
                    break;
                }

                if (  data.indexOf( 'P:;') > 0  ) {
                    setValidationError( 'Please enter a password.')
                    break;
                }

                if (  data.indexOf( 'P:undefined') > 0  ) {
                    setValidationError( 'Please enter a password.')
                    break;
                }

                setEnableSave( true );

                break;
            }

            case 'url': {
                if ( validator.isURL( data ) ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter a valid URL (http(s)://yoururl.com).')
                break;
            }

            case 'youtube': {
                if ( validator.isURL( data ) ) {
                    setEnableSave( true );
                    break;
                }
                setValidationError( 'Please enter a valid YouTube URL (http(s)://youtube.com/watch...).')
                break;
            }

            default: {
                break;
            }

        }

console.log( `<${name}>`)
        if ( name.trim () === '' ) {
            setValidationError( 'Please enter a name for this QRC.');
            setEnableSave( false );
        }
        // now, ensure a name has been entered.
        console.log( name );
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
                    <div className={"col-sm-12 col-lg-12"}>
                        <div className="card mb-3 ">
                            <div className="card-body">
                                <h5 className="card-title">QRC Type</h5>

                                {types.map(entry => <span key={entry.type} className={"px-4 pointer"} title={entry.tip}>
                                        <strong>
                                            <i onClick={() => setType(entry.type)}
                                               style={{fontSize: '32px', color: entry.color || '#333333'}}
                                               className={entry.icon + ' bi--lg'}></i>
                                        </strong>
                                </span>)}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container px-5 bg-light">
                {selectedType &&
                    <div className={"row  mb-3 "}>
                        <div className={"col-sm-12 col-lg-12 "}>
                            <div className={"error"}>{validationError}</div>
                            <QRCComponents setData={setQRCDataFromChild} qrcType={selectedType}/>
                        </div>
                    </div>
                }

                {selectedType &&
                    <div className={"row "}>
                        <div className={"col-sm-12 col-lg-7 mx-auto"}>

                            <form encType="multipart/form-data">

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">QRC Name</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Used to manage your QRC</h6>
                                        <input onChange={handleNameChange} className="form-control" type="text"
                                               id="name" required/>

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
                                            <input maxLength={6} onChange={handleBackgroundColorChangeDisplay}
                                                   className="form-control"
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
                                            <input maxLength={6} onChange={handleForegroundColorChangeDisplay}
                                                   className="form-control"
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
                                                   className={width < 100 ? 'is-invalid' : '' + "form-control"}
                                                   type="text"
                                                   id="width"
                                                   value={width}/>
                                            <input onChange={handleWidth} type="number" value={width} min="100"
                                                   step="5"/>
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
                                                   className={width < 100 ? 'is-invalid' : '' + "form-control"}
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

                            </form>

                        </div>

                        <div className={"col-sm-12 col-lg-5"}>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Live preview</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Modify attributes and see your
                                                                                  QRC</h6>

                                    {generatedQRC ?
                                        <section className="shadow bg-light py-5 border-bottom">
                                            <div className=" text-center mb-5">

                                                <div>
                                                    <img src={generatedQRC}/>
                                                </div>

                                            </div>

                                        </section>
                                        : null
                                    }
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col-sm-12 d-flex align-items-center"}>

                                        <button className={"btn btn-primary mx-5" }>Download QRC</button>
                                        <button disabled={enableSave ? false : true} onClick={() => saveQRC ()} className={"btn btn-primary mx-5" }>Save my QRC</button>

                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>



            <Footer/>

        </div>
    )
}

export default QRCDesigner;