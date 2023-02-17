import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function createCostumer() {
  const res = await db.costumer.create({
    data: {
      name: "teste",
      email: "teste@gmail.com",
      password_hash: `sdsadsadasd`,
      cpf: `asdsadasdasd`,
      gender: {
        connect: {
          id: 1,
        },
      },
      costumer_addresses: {
        create: {
          address: {
            create: {
              CEP: 123213,
              complemento: `asdasdasd`,
              number: 12313,
              address_typeId: 1,
            },
          },
        },
      },
    },
  });

  console.log(res);
}

