import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import APIHandler from './../../api/APIHandler'

import Nav from './AdminHome'


const AdminEditContact = (props) => {

   const [contact, setContact] = useState({})

   useEffect(() => {
    const rv = APIHandler.get(`contact/${props.match.params.id}`)
    .then (res => 
        {console.log(res.data)
        setContact(res.data)})
    console.log(rv)
   }, [])


    const onChange = async e => {
        // console.log(e.target.type, e.target.name, e.target.checked)
        e.target.type === "checkbox"? setContact({...contact, [e.target.name]: e.target.checked}) :
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault()
        try {
            await APIHandler.patch(`/contact/edit/${contact._id}`, contact);
            console.log("edited")
            props.history.push('/admin/list-contacts')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Nav/>
            <form className='flex-column-center' onChange={onChange} onSubmit={onSubmit} >
                
                <h3>Main informations (all fields required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={contact.name}/>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" defaultValue={contact.city}/>
                    <label htmlFor="language">Language(s)</label>
                    <input type="text" name="language" defaultValue={contact.language}/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" defaultValue={contact.phone}/>
                    <label htmlFor="isWhatsApp">Does this phone number work on WhatsApp?</label>
                    <input type="checkbox" name="isWhatsApp" defaultChecked={contact.isWhatsApp && "check"}/>
                </div>

                <h3>What services can he/she propose? (at least one field required)</h3>
                
                <div className="flex-column-center">
                    <label htmlFor="isTranslator">Translation in his/her language</label>
                    <input type="checkbox" name="isTranslator" defaultChecked={contact.isTranslator && "check"}/>
                    <label htmlFor="callAmbulance">Call an ambulance</label>
                    <input type="checkbox" name="callAmbulance" defaultChecked={contact.callAmbulance && "check"}/>
                    <label htmlFor="psySupport">Psychological support</label>
                    <input type="checkbox" name="psySupport" defaultChecked={contact.psySupport && "check"}/>
                    <label htmlFor="needsMedecines">If someone needs medecines, would he/she go to buy them?</label>
                    <input type="checkbox" name="needsMedecines" defaultChecked={contact.needsMedecines && "check"}/>
                    <label htmlFor="needsSupermarket">Go to the store to buy food and basic commodities</label>
                    <input type="checkbox" name="needsSupermarket" defaultChecked={contact.needsSupermarket && "check"}/>
                    <label htmlFor="needsElse">Anything else that someone would need to ask</label>
                    <input type="checkbox" name="needsElse" defaultChecked={contact.needsElse && "check"}/>
                </div>

                <h3>On what hours?</h3>

                <div className="flex-column-center">
                    <p>a.m.</p>
                    <label htmlFor="from0to4">From midnight to 4</label>
                    <input type="checkbox" name="from0to4" defaultChecked={contact.from0to4 && "check"}/>
                    <label htmlFor="from4to8">From 4 to 8</label>
                    <input type="checkbox" name="from4to8" defaultChecked={contact.from4to8 && "check"}/>
                    <label htmlFor="from8to12">From 9 to noon</label>
                    <input type="checkbox" name="from8to12" defaultChecked={contact.from8to12 && "check"}/>
                    <p>p.m.</p>
                    <label htmlFor="from12to16">From noon to 4</label>
                    <input type="checkbox" name="from12to16" defaultChecked={contact.from12to16 && "check"}/>
                    <label htmlFor="from16to20">From 4 to 8</label>
                    <input type="checkbox" name="from16to20" defaultChecked={contact.from16to20 && "check"}/>
                    <label htmlFor="from20to24">From 8 to midnight</label>
                    <input type="checkbox" name="from20to24" defaultChecked={contact.from20to24 && "check"}/>
                </div>

                <button>Edit contact</button>
            </form>
        </div>
    )
}

export default withRouter(AdminEditContact)
