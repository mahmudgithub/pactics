import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const First = () => {
    const [country, setcountry] = useState([])
    useEffect(()=>{
        const lol=async()=>{
        await Axios({
            method:'get',
            url:'https://restcountries.eu/rest/v2/all'
        })
        .then((res)=>{setcountry(res.data)})
        .catch((err)=>{console.log(err);})
        }
        lol()
    },[])
    return (
        <div>
            hello world, this my first deployed react project 
            <ol>

           
            {
                country.map((item,index)=>{return <li key={index}>{item.name}</li>})
            }
             </ol>
        </div>
    )
}

export default First
