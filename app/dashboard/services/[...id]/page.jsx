'use client';

import React, { useEffect, useState } from 'react'

export default function DashboardService({ params }) {

    const { id } = params;

    useEffect(() => {
    }, [])


    return (
        <div>DashboardService {id}</div>
    )
}
