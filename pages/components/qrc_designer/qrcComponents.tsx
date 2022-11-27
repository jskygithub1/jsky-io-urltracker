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
    const [eventStartDate, setEventStartDate] = React.useState<any | ''>('');
    const [eventStartTime, setEventStartTime] = React.useState<any | ''>('');
    const [eventSummary, setEventSummary] = React.useState<any | ''>('');
    const [eventEndDate, setEventEndDate] = React.useState<any | ''>('');
    const [eventEndTime, setEventEndTime] = React.useState<any | ''>('');
    const [phoneNumber, setPhoneNumber] = React.useState<any | ''>('');
    const [smsMessage, setSMSMessage] = React.useState<any | ''>('');
    const [smsNumber, setSMSNumber] = React.useState<any | ''>('');
    const [ssid, setSSID] = React.useState<any | ''>('');
    const [ssidPassword, setSSIDPassword] = React.useState<any | ''>('');
    const [ssidHidden, setSSIDHidden] = React.useState<any | ''>('');
    const [whatsAppMessage, setWhatsAppMessage] = React.useState<any | ''>('');
    const [whatsAppNumber, setWhatsAppNumber] = React.useState<any | ''>('');
    const [url, setURL] = React.useState<any | ''>('');
    const [youTubeUrl, setYouTubeURL] = React.useState<any | ''>('');
    const [qrcElements, {}] = React.useState<any | qrcElement>([]);

    useEffect(() => {
        if ( !qrcData ) {
            return;
        }
        console.log( qrcData );
        setData( qrcData );
    }, [qrcData]);

    const saveQRCElement = (element: string, value: string) => {
        qrcElements[element] = value;
        console.log(qrcElements);
    }

    // start contact
    const saveContact = () => {
        saveQRCData(`BEGIN:VCARD\n`
            + `VERSION:2.1\n`
            + `FN: ${qrcElements['contactFirstname']} ${qrcElements['contactLastName']}\n`
            + `N: ${qrcElements['contactLastName']} ${qrcElements['contactFirstname']} \n`
            + `TEL;CELL:${qrcElements['contactPhoneMobile']}\n`
            + `TEL;WORK;VOICE:${qrcElements['contactPhoneBusiness']}\n`
            + `TEL;HOME;VOICE:${qrcElements['contactPhonePersonal']}\n`
            + `EMAIL;HOME;INTERNET:${qrcElements['contactEmailPersonal']}\n`
            + `EMAIL;WORK;INTERNET:${qrcElements['contactEmailBusiness']}\n`
            + `URL:${qrcElements['contactWebSite']}\n`
            + `ADR:;;${qrcElements['contactStreet']};${qrcElements['contactCity']};${qrcElements['contactPostal']};${qrcElements['contactCountry']}\n`
            + `ORG:${qrcElements['contactOrganisation']}\n`
            + `END:VCARD`
        );

    }

    const saveContactFirstName = (data: string) => {
        saveQRCElement('contactFirstname', data);
        setContactFirstname(data);
        saveContact();

    }
    const saveContactLastName = (data: string) => {
        saveQRCElement('contactLastName', data);
        setContactLastName(data);
        saveContact();

    }
    const saveContactTitle = (data: string) => {
        saveQRCElement('contactTitle', data);
        setContactTitle(data);
        saveContact();

    }
    const saveContactStreet = (data: string) => {
        saveQRCElement('contactStreet', data);
        setContactStreet(data);
        saveContact();

    }
    const saveContactPostal = (data: string) => {
        saveQRCElement('contactPostal', data);
        setContactPostal(data);
        saveContact();

    }
    const saveContactCity = (data: string) => {
        saveQRCElement('contactCity', data);
        setContactCity(data);
        saveContact();

    }
    const saveContactCountry = (data: string) => {
        saveQRCElement('contactCountry', data);
        setContactCountry(data);
        saveContact();

    }
    const saveContactOrganisation = (data: string) => {
        saveQRCElement('contactOrganisation', data);
        setContactOrganisation(data);
        saveContact();

    }
    const saveContactEmailPersonal = (data: string) => {
        saveQRCElement('contactEmailPersonal', data);
        setContactEmailPersonal(data);
        saveContact();

    }
    const saveContactEmailBusiness = (data: string) => {
        saveQRCElement('contactEmailBusiness', data);
        setContactEmailBusiness(data);
        saveContact();

    }
    const saveContactPhonePersonal = (data: string) => {
        saveQRCElement('contactPhonePersonal', data);
        setContactPhonePersonal(data);
        saveContact();

    }
    const saveContactPhoneBusiness = (data: string) => {
        saveQRCElement('contactPhoneBusiness', data);
        setContactPhoneBusiness(data);
        saveContact();

    }
    const saveContactPhoneMobile = (data: string) => {
        saveQRCElement('contactPhoneMobile', data);
        setContactPhoneMobile(data);
        saveContact();

    }
    const saveContactWebSite = (data: string) => {
        saveQRCElement('contactWebSite', data);
        setContactWebSite(data);
        saveContact();

    }

    // end contact

    // start email

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
    // end email

    // start event
    const saveEvent = () => {
        saveQRCData(`BEGIN:VEVENT\n`
        + `SUMMARY:${qrcElements['summary']}\n`
        + `DTSTART:${qrcElements['startDate']}T${qrcElements['startTime']}00\n`
        + `DTEND:${qrcElements['endDate']}T${qrcElements['endTime']}00\n`
        + `END:VEVENT`);
    }

    const saveEventEndDate = (data: string) => {
        const temp  = data.replaceAll('-', '' );
        saveQRCElement( 'endDate', temp );
        setEventEndDate(data);
        saveEvent ();
    }

    const saveEventEndTime = (data: string) => {
        const temp  = data.replaceAll(':', '' );
        saveQRCElement( 'endTime', temp );
        setEventEndTime(data);
        saveEvent ();
    }

    const saveEventStartDate = (data: string) => {
        const temp  = data.replaceAll('-', '' );
        saveQRCElement( 'startDate', temp );
        setEventStartDate(data);
        saveEvent ();
    }

    const saveEventStartTime = (data: string) => {
        const temp  = data.replaceAll(':', '' );
        saveQRCElement( 'startTime', temp );
        setEventStartTime(data);
        saveEvent ();
    }

    const saveEventSummary = (data: string) => {
        saveQRCElement( 'summary', data );
        setEventSummary(data);
        saveEvent ();
    }
    // end event

    const saveQRCData = (data: string) => {
        setQRCData(data);
        setData(data);
    }

    const saveSSID = () => {
        saveQRCData(`WIFI:\n`
            + `S:${qrcElements['ssid']};T:WPA;P:${qrcElements['ssidPassword']};${qrcElements['ssidHidden'] === 'true' 
                ? 'H:true;' : ';'}` );
    }

    const saveSSIDId = (data: string) => {
        saveQRCElement( 'ssid', data );
        setSSID(data);
        saveSSID ();
    }

    const saveSSIDPassword = (data: string) => {
        saveQRCElement( 'ssidPassword', data );
        setSSIDPassword(data);
        saveSSID ();
    }

    const saveSSIDHidden = (data: boolean) => {
        saveQRCElement( 'ssidHidden', data ? 'true' : 'false' );
        setSSIDHidden(data);
        saveSSID ();
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
                            <label htmlFor="eventStartDate">Start date</label>
                            <input maxLength={10} onChange={(event) => saveEventStartDate(event.target.value)}
                                   className={designerStyles.width_20 + " mb-3 form-control pointer"}
                                   type="date"
                                   id="eventStartDate"
                                   value={eventStartDate}/>
                            <label htmlFor="eventStartTime">Start time</label>
                            <input maxLength={10} onChange={(event) => saveEventStartTime(event.target.value)}
                                   className={designerStyles.width_20 + " mb-3 form-control pointer"}
                                   type="time"
                                   id="eventStartTime"
                                   value={eventStartTime}/>
                            <label htmlFor="eventEndDate">End date</label>
                            <input maxLength={10} onChange={(event) => saveEventEndDate(event.target.value)}
                                   className={designerStyles.width_20 + " mb-3 form-control pointer"}
                                   type="date"
                                   id="eventEndDate"
                                   value={eventEndDate}/>
                            <label htmlFor="eventEndTime">End time</label>
                            <input maxLength={10} onChange={(event) => saveEventEndTime(event.target.value)}
                                   className={designerStyles.width_20 + " mb-3 form-control pointer"}
                                   type="time"
                                   id="eventEndTime"
                                   value={eventEndTime}/>

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
            {qrcType.toLowerCase() === 'wifi' &&
                <>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">WIFI connection</h5>

                            <label htmlFor="ssid">SSID</label>
                            <input maxLength={20} onChange={(event) => saveSSIDId(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="ssid"
                                   value={ssid}/>
                            <label htmlFor="ssidPassword">Password</label>
                            <input maxLength={20} onChange={(event) => saveSSIDPassword(event.target.value)}
                                   className={designerStyles.width_90 + " mb-3 form-control"}
                                   type="text"
                                   id="ssidPassword"
                                   value={ssidPassword}/>
                            <label htmlFor="ssidHidden">Hidden</label>
                            <input maxLength={20} onChange={(event) => saveSSIDHidden(event.target.checked)}
                                   type="checkbox"
                                   id="ssidHidden"
                                   value={ssidHidden}/>

                        </div>
                    </div>

                </>
            }

        </div>
    )
}

export default QrcComponents;