import React, {useEffect, useState} from "react";
import designerStyles from '../../../styles/qrcdesigner.module.css';

interface Props {
    setData: Function;
    qrcType: string;
}

const QrcComponents = ({setData, qrcType}: Props) => {

    const [qrcData, setQRCData] = React.useState<any | ''>('');

    const [phoneNumber, setPhoneNumber] = React.useState<any | ''>('');
    const [smsMessage, setSMSMessage] = React.useState<any | ''>('');
    const [smsNumber, setSMSNumber] = React.useState<any | ''>('');
    const [url, setURL] = React.useState<any | ''>('');

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

        </div>
    )
}

export default QrcComponents;