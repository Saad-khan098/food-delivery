import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function EnterAddress() {
    const [address, setaddress] = useState('')
    const navigate = useNavigate();

    function submitAddress(){
        console.log(address);
        axios.post('http://localhost:5000/address', {
            addressLine: address
        }).then(()=> {
            navigate('/checkout');
        })
    }

  return (
    <div>
        asjfafjas
        <textarea name="" id="" cols="30" rows="10" value={address} onChange={(e)=>{setaddress(e.target.value)}}  ></textarea>
        <button onClick={submitAddress} >Submit</button>
    </div>
  )
}
