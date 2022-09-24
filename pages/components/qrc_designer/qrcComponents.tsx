import React, {useEffect, useState} from "react";
import designerStyles from '../../../styles/qrcdesigner.module.css';

interface Props {
    setData: Function;
    qrcType: string;
}

const QrcComponents = ({setData, qrcType}: Props) => {

    const [qrcData, setQRCData] = React.useState<any | ''>('');

    const [smsMessage, setSMSMessage] = React.useState<any | ''>('');
    const [smsNumber, setSMSNumber] = React.useState<any | ''>('');

    const saveQRCData = (data: string) => {
        setQRCData(data);
        setData(data);
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
            {qrcType.toLowerCase() === 'sms' &&
                <>
                <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Send SMS Message</h5>

                    <h3>Send SMS Message</h3>
                    <label htmlFor="smsNumber">Number</label>
                    <input maxLength={20} onChange={(event) => saveSMSNumber(event.target.value)}
                           className={designerStyles.width_20 + " mb-3 form-control"}
                           type="text"
                           id="smsNumber"
                           value={smsNumber}/>
                    <label htmlFor="smsMessage">Number</label>
                    <input maxLength={140} onChange={(event) => saveSMSMessage(event.target.value)}
                           className={designerStyles.width_40 + " mb-3 form-control"}
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