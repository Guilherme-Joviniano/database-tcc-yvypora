import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function createCostumer() {
  const res = await db.costumer.create({
    data: {
      name: "teste",
      email: "testecomentregaecompraepedido@gmail.com",
      password_hash: `sdsadsadasd`,
      cpf: `123123123123`,
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
      shopping_lists: {
        create: {
          total: 100,
          freight: 0.0,
          products_in_shopping_list: {
            create: {
              product: {
                create: {
                  image_of_product: {
                    create: {
                      image: {
                        create: {
                          uri: "asdasdasdasdsadasd",
                        },
                      },
                    },
                  },
                  available_quantity: 100,
                  name: "Limao",
                  price: 19.99,
                  active_for_selling: true,
                  marketerId: 6,
                },
              },
            },
          },
          order: {
            create: {
              delivered_status_for_client: true,
              accepted_status: true,
              costumer_addresses: {
                connect: {
                  id: 7,
                },
              },
              retreat_products_status: true,
              deliveryman: {
                create: {
                  picture_uri: "asdasdasdasd",
                  email: "teste3@gmail.com",
                  password_hash: "asdasd",
                  name: "entregador",
                  gender: {
                    connect: {
                      id: 1,
                    },
                  },
                  location: {
                    create: {
                      latitude: -12321312,
                      longitude: 12321312,
                    },
                  },
                },
              },
              payment: {
                create: {
                  details: "pagamento feito",
                  payment_method: {
                    connect: {
                      id: 2,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  console.log(res);
}

// await createCostumer();

// const res = await db.costumer.delete({ where: { id: 17 } });

async function createMarketer() {
  const res = await db.marketer.create({
    data: {
      email: "marketer@gmail.com",
      name: "zedafeira",
      password_hash: "asdasdasdasdasd",
      phone: "+55119853123",
      cpf: "1435234190",
      gender: {
        connect: {
          id: 1,
        },
      },
      location: {
        create: {
          latitude: 123123123,
          longitude: 213123123,
        },
      },
      products: {
        createMany: {
          data: [
            {
              available_quantity: 100,
              name: "Limao do ze",
              price: 19.99,
              active_for_selling: true,
            },
            {
              available_quantity: 100,
              name: "Limao do ze",
              price: 19.99,
              active_for_selling: true,
            },
            {
              available_quantity: 100,
              name: "Limao do ze",
              price: 19.99,
              active_for_selling: true,
            },
            {
              available_quantity: 100,
              name: "Limao do ze",
              price: 19.99,
              active_for_selling: true,
            },
          ],
        },
      },
      fair_marketers: {
        create: {
          fair: {
            create: {
              address: {
                create: {
                  CEP: 0o6233240,
                  complemento: "Avenida das Americas",
                  number: 12313,
                  address_typeId: 3,
                },
              },
              fair_date_hour_of_work: {
                create: {
                  dates: {
                    create: {
                      day_of_week: {
                        create: {
                          name: "SEGUNDA",
                        },
                      },
                      open_datetime: new Date(),
                      close_datetime: new Date(),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  console.log(res);
}

// id 9

// await createMarketer();

await db.day_of_week.createMany({
  data: [
    { name: "Segunda-Feira" },
    { name: "Terça-Feira" },
    { name: "Quarta-Feira" },
    { name: "Quinta-Feira" },
    { name: "Sexta-Feira" },
    { name: "Sabado" },
    { name: "Domingo" },
  ],
});
