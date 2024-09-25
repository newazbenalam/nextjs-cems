'use client';

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function DashboardService({ params }) {

    const { serviceId } = params;
    const [id, setId] = useState();


    useEffect(() => {
        setId(parseInt(serviceId));
        console.log(serviceId, ' ', id)
    }, [])


    return (
        <div>DashboardService {id}</div>
    )
}
