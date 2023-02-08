import { PrismaClient } from "@prisma/client";


const db = new PrismaClient()

async function createImage() {
    await db.image.createMany({
        data: [{
            uri: "teste"
        }]
    })
}

async function createPaymentMethod() {
    await db.payment_method.createMany({
        data: [
            { name: "PIX" },
            { name: "Cartao de Debito" },
            { name: "Cartao de Credito" },
            { name: "Boleto" },
        ]
    })
}

async function createVeicule() {
    await db.veicule.createMany({
        data: [
            {name: "Moto"},
            {name: "A pe"},
            {name: "Carro"},
            {name: "Bicicleta"},

        ]
    })
}