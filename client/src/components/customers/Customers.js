import React, { useState, useEffect } from 'react';

function Customers() {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => setCustomers(customers))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2 className='text-slate-400'>Customers</h2>
            {customers ? (
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id}>
                            { customer.firstName }
                            { customer.lastName }
                        </li>
                    ))}
                </ul>
            ) : <div>Loading...</div>}
        </div>
    );
}

export default Customers;
