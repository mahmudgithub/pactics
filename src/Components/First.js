// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'

// const First = () => {
//     const [country, setcountry] = useState([])
//     const [search, setsearch] = useState('')
//     useEffect(()=>{
//         const lol=async()=>{
//         await Axios({
//             method:'get',
//             url:'https://restcountries.eu/rest/v2/all'
//         })
//         .then((res)=>{setcountry(res.data)})
//         .catch((err)=>{console.log(err);})
//         }
//         lol()
//     },[])
//     const update=country.filter((item)=>{
//         return item.name.toLowerCase().includes(search.toLowerCase())
//     })
//     return (
//         <div>
//             hello world, this my first deployed react project 
//             <input type='text' placeholder='search ...' onChange={(e)=>{setsearch(e.target.value)}}/>
//             <ol>
//             {
//                 update.map((item,index)=>{return <li key={index}>{item.name}</li>})
//             }
//              </ol>
//         </div>
//     )
// }

// export default First



import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// import MOCK from './Data/MOCK.json'

const First = () => {
    const [country, setcountry] = useState([])
    // const [search, setsearch] = useState('')
    useEffect(()=>{
        const lol=async()=>{
        await Axios({
            method:'get',
            url:'http://127.0.0.1:8000/api/'
        })
        .then((res)=>{console.log(res.data); setcountry(res.data)})
        .catch((err)=>{console.log(err);})
        }
        lol()
    },[])
    // const update=country.filter((item)=>{
    //     return item.name.toLowerCase().includes(search.toLowerCase())
    // })
    return (
        <div>
            hello world, this my first deployed react project 
            {/* <input type='text' placeholder='search ...' onChange={(e)=>{setsearch(e.target.value)}}/> */}
            <ol>
            {
                country.map((item,index)=>{return <li key={index}>{item.name}</li>})
            }
             </ol>
        </div>
    )
}

export default First
