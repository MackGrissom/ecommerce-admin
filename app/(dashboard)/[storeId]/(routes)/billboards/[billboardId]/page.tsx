import prismadb from '@/lib/prismadb'
import React from 'react'

const BillboardsPage = async ({
    params }:

    {
        params: { billboardId: string }

    }) => {
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    });


    return (
        <div>

            Existing Billboard: {billboard?.label}

        </div>
    )
}

export default BillboardsPage
