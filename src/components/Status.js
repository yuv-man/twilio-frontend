import React, {useState, useEffect} from 'react';
import {getStatus} from '../util/api'

const Status = () => {

    const [status, setStatus] = useState('')

    const getData = async() => {
        const res = await getStatus()
        setStatus(res.status)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            <div>{status}</div>
        </div>
    )
}

export default Status