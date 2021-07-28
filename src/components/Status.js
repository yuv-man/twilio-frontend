import React, {useState, useEffect} from 'react';
import {getStatus} from '../util/api'
import io from 'socket.io-client'

const socket = io.connect('http://127.0.0.1:5000')

const Status = () => {

    const [status, setStatus] = useState('')

    const getData = async() => {
        const res = await getStatus()
        console.log(res.status)
        setStatus(res.status)
    }

    useEffect(() => {
        socket.on('status', ({status}) => {
            setStatus(status)
        })
        // getData()
    }, [])

    return(
        <div>
            <div>{status}</div>
        </div>
    )
}

export default Status