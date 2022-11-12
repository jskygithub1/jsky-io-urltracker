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

    const [contactFirstname, setContactFirstname] = React.useState<any | ''>('');
    const [contactLastName, setContactLastName] = React.useState<any | ''>('');
    const [contactTitle, setContactTitle] = React.useState<any | ''>('');
    const [contactStreet, setContactStreet] = React.useState<any | ''>('');
    const [contactPostal, setContactPostal] = React.useState<any | ''>('');
    const [contactCity, setContactCity] = React.useState<any | ''>('');
    const [contactCountry, setContactCountry] = React.useState<any | ''>('');
    const [contactOrganisation, setContactOrganisation] = React.useState<any | ''>('');
    const [contactEmailPersonal, setContactEmailPersonal] = React.useState<any | ''>('');
    const [contactEmailBusiness, setContactEmailBusiness] = React.useState<any | ''>('');
    const [contactPhonePersonal, setContactPhonePersonal] = React.useState<any | ''>('');
    const [contactPhoneBusiness, setContactPhoneBusiness] = React.useState<any | ''>('');
    const [contactPhoneMobile, setContactPhoneMobile] = React.useState<any | ''>('');
    const [contactWebSite, setContactWebSite] = React.useState<any | ''>('');

    const [emailAddress, setEmailAddress] = React.useState<any | ''>('');
    const [emailMessage, setEmailMessage] = React.useState<any | ''>('');
    const [emailSubject, setEmailSubject] = React.useState<any | ''>('');
    const [eventStart, setEventStart] = React.useState<any | ''>('');
    const [eventSummary, setEventSummary] = React.useState<any | ''>('');
    const [eventEnd, setEventEnd] = React.useState<any | ''>('');
    const [phoneNumber, setPhoneNumber] = React.useState<any | ''>('');
    const [smsMessage, setSMSMessage] = React.useState<any | ''>('');
    const [smsNumber, setSMSNumber] = React.useState<any | ''>('');
    const [whatsAppMessage, setWhatsAppMessage] = React.useState<any | ''>('');
    const [whatsAppNumber, setWhatsAppNumber] = React.useState<any | ''>('');
    const [url, setURL] = React.useState<any | ''>('');
    const [youTubeUrl, setYouTubeURL] = React.useState<any | ''>('');
    const [qrcElements, {}] = React.useState<any | qrcElement>([]);

    const saveQRCElement = (element: string, value: string) => {
        debugger;
        qrcElements[element] = value;
        console.log(qrcElements);
    }

    const saveContact = () => {
        saveQRCData(`BEGIN:VCARD\n`
            + `VERSION:2.1\n`
            + `FN: ${contactFirstname} ${contactLastName}\n`
            + `N: ${contactLastName} ${contactFirstname}\n`
            + `TEL;CELL:${contactPhoneMobile}\n`
            + `TEL;WORK;VOICE:${contactPhoneBusiness}\n`
            + `TEL;HOME;VOICE:${contactPhonePersonal}\n`
            + `EMAIL;HOME;INTERNET:${contactEmailPersonal}\n`
            + `EMAIL;WORK;INTERNET:${contactEmailBusiness}\n`
            + `URL:${contactWebSite}\n`
            + `ADR:;;${contactStreet};${contactCity};${contactPostal};${contactCountry}\n`
            + `ORG:${contactOrganisation}\n`
            + `END:VCARD`
        );

       //saveQRCData( `BEGIN:VCARD\nVERSION:4.0\nFN: James Young\nEND:VCARD`);
    }

    const saveContactFirstName = (data: string) => {
        setContactFirstname(data);
        saveContact();

    }
    const saveContactLastName = (data: string) => {
        setContactLastName(data);
        saveContact();

    }
    const saveContactTitle = (data: string) => {
        setContactTitle(data);
        saveContact();

    }
    const saveContactStreet = (data: string) => {
        setContactStreet(data);
        saveContact();

    }
    const saveContactPostal = (data: string) => {
        setContactPostal(data);
        saveContact();

    }
    const saveContactCity = (data: string) => {
        setContactCity(data);
        saveContact();

    }
    const saveContactCountry = (data: string) => {
        setContactCountry(data);
        saveContact();

    }
    const saveContactOrganisation = (data: string) => {
        setContactOrganisation(data);
        saveContact();

    }
    const saveContactEmailPersonal = (data: string) => {
        setContactEmailPersonal(data);
        saveContact();

    }
    const saveContactEmailBusiness = (data: string) => {
        setContactEmailBusiness(data);
        saveContact();

    }
    const saveContactPhonePersonal = (data: string) => {
        setContactPhonePersonal(data);
        saveContact();

    }
    const saveContactPhoneBusiness = (data: string) => {
        setContactPhoneBusiness(data);
        saveContact();

    }
    const saveContactPhoneMobile = (data: string) => {
        setContactPhoneMobile(data);
        saveContact();

    }
    const saveContactWebSite = (data: string) => {
        setContactWebSite(data);
        saveContact();

    }

    const saveEmailAddress = (data: string) => {
        setEmailAddress(data);
        saveQRCData(`MATMSG:TO:${data};SUB:${emailSubject};BODY:${emailMessage};;`);
        saveQRCElement('emailMessage', data);

    }

    const saveEmailMessage = (data: string) => {
        setEmailMessage(data);
        saveQRCData(`MATMSG:TO:${emailAddress};SUB:${emailSubject};BODY:${data} \n  next line?;;`);
    }

    const saveEmailSubject = (data: string) => {
        setEmailSubject(data);
        saveQRCData(`MATMSG:TO:${emailAddress};SUB:${data};BODY:${emailMessage};`);
    }

    const saveEventEnd = (data: string) => {
        setEventEnd(data);
        saveQRCData(`BEGIN:VEVENT\nSUMMARY:${eventSummary}\nDTSTART:${eventStart}\nDTEND:${eventEnd}END:VEVENT`);
    }

    const saveEventStart = (data: string) => {
        setEventStart(data);
        saveQRCData(`BEGIN:VEVENT\nSUMMARY:${eventSummary}\nDTSTART:${eventStart}\nDTEND:${eventEnd}END:VEVENT`);
    }

    const saveEventSummary = (data: string) => {
        setEventSummary(data);
        saveQRCData(`BEGIN:VEVENT\nSUMMARY:${eventSummary}\nDTSTART:${eventStart}\nDTEND:${eventEnd}END:VEVENT`);
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

            <h1>{qrcType}</h1>

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

            {qrcType.toLowerCase() === 'event' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Event</h5>

                            <label htmlFor="eventSummary">Summary</label>
                            <input maxLength={80} onChange={(event) => saveEventSummary(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="eventSummary"
                                   value={eventSummary}/>
                            <label htmlFor="eventStart">Start</label>
                            <input maxLength={140} onChange={(event) => saveEventStart(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="eventStart"
                                   value={eventStart}/>
                            <label htmlFor="eventEnd">End</label>
                            <input maxLength={140} onChange={(event) => saveEventEnd(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="eventEnd"
                                   value={eventEnd}/>

                        </div>
                    </div>

                </>
            }

            {qrcType.toLowerCase() === 'contact' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Contact</h5>

                            <label htmlFor="contactFirstName">First name</label>
                            <input maxLength={80} onChange={(event) => saveContactFirstName(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactFirstName"
                                   value={contactFirstname}/>
                            <label htmlFor="contactLastName">Last name</label>
                            <input maxLength={80} onChange={(event) => saveContactLastName(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactLastName"
                                   value={contactLastName}/>
                            <label htmlFor="contactTitle">Title</label>
                            <input maxLength={80} onChange={(event) => saveContactTitle(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactTitle"
                                   value={contactTitle}/>
                            <label htmlFor="contactStreet">Street</label>
                            <input maxLength={80} onChange={(event) => saveContactStreet(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactStreet"
                                   value={contactStreet}/>
                            <label htmlFor="contactPostal">Postcode/ZIP</label>
                            <input maxLength={80} onChange={(event) => saveContactPostal(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactPostal"
                                   value={contactPostal}/>
                            <label htmlFor="contactCity">City</label>
                            <input maxLength={80} onChange={(event) => saveContactCity(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactCity"
                                   value={contactCity}/>
                            <label htmlFor="contactCountry">Country</label>
                            <input maxLength={80} onChange={(event) => saveContactCountry(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactCountry"
                                   value={contactCountry}/>
                            <label htmlFor="contactOrganisation">Country</label>
                            <input maxLength={80} onChange={(event) => saveContactOrganisation(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactOrganisation"
                                   value={contactOrganisation}/>
                            <label htmlFor="contactEmailPersonal">eMail - Personal</label>
                            <input maxLength={80} onChange={(event) => saveContactEmailPersonal(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactEmailPersonal"
                                   value={contactEmailPersonal}/>
                            <label htmlFor="contactEmailBusiness">eMail - Business</label>
                            <input maxLength={80} onChange={(event) => saveContactEmailBusiness(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactEmailBusiness"
                                   value={contactEmailBusiness}/>
                            <label htmlFor="contactPhonePersonal">Phone - Personal</label>
                            <input maxLength={80} onChange={(event) => saveContactPhonePersonal(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactPhonePersonal"
                                   value={contactPhonePersonal}/>
                            <label htmlFor="contactPhoneBusiness">Phone - Business</label>
                            <input maxLength={80} onChange={(event) => saveContactPhoneBusiness(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactPhoneBusiness"
                                   value={contactPhoneBusiness}/>
                            <label htmlFor="contactPhoneMobile">Phone - Mobile</label>
                            <input maxLength={80} onChange={(event) => saveContactPhoneMobile(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactPhoneMobile"
                                   value={contactPhoneMobile}/>
                            <label htmlFor="contactWebSite">Web-site</label>
                            <input maxLength={80} onChange={(event) => saveContactWebSite(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="contactWebSite"
                                   value={contactWebSite}/>

                        </div>
                    </div>

                </>
            }

        </div>
    )
}

export default QrcComponents;