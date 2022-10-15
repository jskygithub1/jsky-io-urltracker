import React, {useEffect, useState} from "react";
import designerStyles from '../../../styles/qrcdesigner.module.css';

interface Props {
    setData: Function;
    qrcType: string;
}

type qrcElement = {
    element: string,
    value: string
}

const QrcComponents = ({setData, qrcType}: Props) => {

    const [qrcData, setQRCData] = React.useState<any | ''>('');

    const [emailAddress, setEmailAddress] = React.useState<any | ''>('');
    const [emailMessage, setEmailMessage] = React.useState<any | ''>('');
    const [emailSubject, setEmailSubject] = React.useState<any | ''>('');
    const [phoneNumber, setPhoneNumber] = React.useState<any | ''>('');
    const [smsMessage, setSMSMessage] = React.useState<any | ''>('');
    const [smsNumber, setSMSNumber] = React.useState<any | ''>('');
    const [whatsAppMessage, setWhatsAppMessage] = React.useState<any | ''>('');
    const [whatsAppNumber, setWhatsAppNumber] = React.useState<any | ''>('');
    const [url, setURL] = React.useState<any | ''>('');
    const [youTubeUrl, setYouTubeURL] = React.useState<any | ''>('');
    const [qrcElements, {} ] = React.useState<any | qrcElement>( [] );

    const saveQRCElement = ( element: string, value: string ) => {
        debugger;
        qrcElements[ element ] = value;
        console.log( qrcElements );
    }

    const saveEmailAddress = (data: string) => {
        setEmailAddress(data);
        saveQRCData(`MATMSG:TO:${data};SUB:${emailSubject};BODY:${emailMessage};;`);
        saveQRCElement( 'emailMessage', data );

    }

    const saveEmailMessage = (data: string) => {
        setEmailMessage(data);
        saveQRCData(`MATMSG:TO:${emailAddress};SUB:${emailSubject};BODY:aaaaaaa${data} \n  next line?;;`);
        console.log( `MATMSG:TO:${emailAddress};SUB:${emailSubject};BODY:${data} <br> next line?;;`);
    }

    const saveEmailSubject = (data: string) => {
        setEmailSubject(data);
        saveQRCData(`MATMSG:TO:${emailAddress};SUB:${data};BODY:${emailMessage};;`);
    }

    const saveQRCData = (data: string) => {
        setQRCData(data);
        setData(data);
    }

    const saveURL = (data: string) => {
        setURL(data);
        saveQRCData(`${data}`);
    }

    const savePhoneNumber = (data: string) => {
        setPhoneNumber(data);
        saveQRCData(`TEL:${data}`);
    }

    const saveSMSMessage = (data: string) => {
        setSMSMessage(data);
        saveQRCData(`SMSTO:${smsNumber}:${data}`);
    }

    const saveSMSNumber = (data: string) => {
        setSMSNumber(data);
        saveQRCData(`SMSTO:${data}:${smsMessage}`);
    }

    const saveWhatsAppMessage = (data: string) => {
        setWhatsAppMessage(data);
        saveQRCData(`https://wa.me/${whatsAppNumber}?text=${data}`);
    }

    const saveWhatsAppNumber = (data: string) => {
        setWhatsAppNumber(data);
        saveQRCData(`https://wa.me/${data}:${whatsAppMessage}`);
    }

    const saveYouTubeURL = (data: string) => {
        setYouTubeURL(data);
        saveQRCData(`${data}`);
    }

    return (
        <div>

            {qrcType.toLowerCase() === 'url' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">URL Link</h5>

                            <label htmlFor="smsNumber">URL</label>
                            <input maxLength={80} onChange={(event) => saveURL(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="phoneNumber"
                                   placeholder={"http://"}
                                   value={url}/>

                        </div>
                    </div>

                </>
            }

            {qrcType.toLowerCase() === 'phone' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Make a phone call</h5>

                            <label htmlFor="smsNumber">Number</label>
                            <input maxLength={20} onChange={(event) => savePhoneNumber(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="phoneNumber"
                                   value={phoneNumber}/>

                        </div>
                    </div>

                </>
            }

            {qrcType.toLowerCase() === 'sms' &&
                <>
                <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Send SMS Message</h5>

                    <label htmlFor="smsNumber">Number</label>
                    <input maxLength={20} onChange={(event) => saveSMSNumber(event.target.value)}
                           className={designerStyles.width_90 + " mb-3 form-control"}
                           type="text"
                           id="smsNumber"
                           value={smsNumber}/>
                    <label htmlFor="smsMessage">Message</label>
                    <input maxLength={140} onChange={(event) => saveSMSMessage(event.target.value)}
                           className={designerStyles.width_90 + " mb-3 form-control"}
                           type="text"
                           id="smsMessage"
                           value={smsMessage}/>
                </div>
                </div>

                </>
            }

            {qrcType.toLowerCase() === 'whatsapp' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Send WhatsApp Message</h5>

                            <label htmlFor="whatsAppNumber">Number</label>
                            <input maxLength={20} onChange={(event) => saveWhatsAppNumber(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="whatsAppNumber"
                                   value={whatsAppNumber}/>
                            <label htmlFor="whatsAppMessage">Message</label>
                            <input maxLength={140} onChange={(event) => saveWhatsAppMessage(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="whatsAppMessage"
                                   value={whatsAppMessage}/>
                        </div>
                    </div>

                </>
            }

            {qrcType.toLowerCase() === 'youtube' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">YouTube Video</h5>

                            <label htmlFor="youTubeUrl">YouTube URL</label>
                            <input maxLength={80} onChange={(event) => saveYouTubeURL(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="youTubeUrl"
                                   value={youTubeUrl}/>
                        </div>
                    </div>

                </>
            }

            {qrcType.toLowerCase() === 'email' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Send eMail</h5>

                            <label htmlFor="emailAddress">To</label>
                            <input maxLength={80} onChange={(event) => saveEmailAddress(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="emailAddress"
                                   value={emailAddress}/>
                            <label htmlFor="emailSubject">Subject</label>
                            <input maxLength={140} onChange={(event) => saveEmailSubject(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="emailSubject"
                                   value={emailSubject}/>
                            <label htmlFor="emailMessage">Message</label>
                            <textarea onChange={(event) => saveEmailMessage(event.target.value)}
                                    //onKeyUp={(event) => saveEmailMessage('xxx')}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   id="emailMessage"
                                   value={emailMessage}/>
                        </div>
                    </div>

                </>
            }

        </div>
    )
}

export default QrcComponents;