"use client"
import React, { useState } from 'react'

function Form({ baseUrl }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = async (e) => {
        e.preventDefault()
        try {
            const req = await fetch(`${baseUrl}/contact`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({user_name: name , phone , email , message})
            })
            console.log(req);
            const content = await req.json();
            console.log(content);
        } catch (e) {
            console.log(e);
        }

    }



    return (
        <form onSubmit={submit} className='mt-5'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='w-full my-3 p-4 border outline-color2 border-gray-300' type="text" placeholder='اسمك' name='name' />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full my-3 p-4 border outline-color2 border-gray-300' type="number" placeholder="رقم الهاتف" name='phone' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full my-3 p-4 border outline-color2 border-gray-300' type="email" placeholder="الايميل" name='email' />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full my-3 p-4 border outline-color2 border-gray-300 min-h-[200px]' placeholder='رسالتك' name='message' />
            <button className='text-white bg-color2 px-14 font-bold rounded-md hover:opacity-70 py-2 mx-auto block'>ارسال</button>
        </form>
    )
}

export default React.memo(Form)
