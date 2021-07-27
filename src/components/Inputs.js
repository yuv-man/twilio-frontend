import React, {useState} from 'react';
import { fetcher } from '../util/api';

const Inputs = () => {

    const [phoneInput, setPhoneInput] = useState('')

    const handleChange = (e) => {
        setPhoneInput(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = await fetcher(phoneInput)
        console.log(data.content)
    }

    return(
        <div>
            <div>Welcome to Twilio phone calls</div>
            <form onSubmit={handleSubmit}>
                <input className='phoneInput' type='text' required value={phoneInput} onChange={handleChange}/>
                <input className= 'Button' type='submit' value='Call'/>
            </form>
        </div>
    )

}

export default Inputs