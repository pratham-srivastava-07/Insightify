"use server"

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export default async function GroupInfo({id}: {id: string}) {
    try {
        const response = await client.affiliate.findUnique({
            where: {
                id
            },
            select: {
                groupId: true,

            }
        })
        if(response) {
            return {status: 200, user: response};
        }
    } catch(e: any) {
        console.log(e);
        // alert(e.message)
    }
}