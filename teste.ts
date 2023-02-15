import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

async function createAddressType() {
    await db.address_type.createMany({
        data: [
            { name: "Casa" },
            { name: "Apartamento" },
            { name: "Feira" }
        ]
    })
}

await createAddressType()