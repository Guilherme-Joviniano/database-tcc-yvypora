import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// await db.day_of_week.createMany({
//   data: [
//     { name: "Segunda-Feira" },
//     { name: "Terça-Feira" },
//     { name: "Quarta-Feira" },
//     { name: "Quinta-Feira" },
//     { name: "Sexta-Feira" },
//     { name: "Sabado" },
//     { name: "Domingo" },
//   ],
// });

// const newLocal = await db.type_of_price.createMany({
//   data: [{ name: "Granel" }, { name: "Unitario" }, { name: "Duzia" }],
// });

// await db.category_of_product.create({
//   data: {
//     name: "Frutas",
//     image: {
//       create: {
//         uri: "https://w7.pngwing.com/pngs/375/323/png-transparent-wild-strawberry-fruit-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png",
//       },
//     },
//   },
// });

// await db.category_of_product.create({
//   data: {
//     name: "Vegetais",
//     image: {
//       create: {
//         uri: "https://img.favpng.com/10/2/8/vegetable-high-definition-television-high-definition-video-display-resolution-wallpaper-png-favpng-wTpc1A3TMi8wXbcBNHc5PWHS1.jpg",
//       },
//     },
//   },
// });

// await db.category_of_product.create({
//   data: {
//     name: "Especiarias",
//     image: {
//       create: {
//         uri: "https://e7.pngegg.com/pngimages/861/863/png-clipart-colorful-spices-spices-colorful.png",
//       },
//     },
//   },
// });

// await db.gender.createMany({
//   data: [{ name: "Male" }, { name: "Female" }],
// });

await db.marketer.create({
  data: {
    name: "Feirate de Exemplo",
    email: "marketer@gmail.com",
    password_hash: "1231312312",
    birthday: "1988-02-02",
    phone: "+5511987728938",
    cpf: "14352417890",
    gender: {
      connect: {
        id: 1,
      },
    },
    location: {
      create: {
        latitude: -20,
        longitude: 20,
      },
    },
    products: {
      create: {
        available_quantity: 100,
        name: "Uva",
        price: 12.99,
        type_of_price: {
          connect: {
            name: "Duzia",
          },
        },
        category_of_product: {
          connect: {
            name: "Frutas",
          },
        },
      },
    },
  },
});
