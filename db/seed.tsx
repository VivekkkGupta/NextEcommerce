import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.creatMany({ data: sampleData.products });
  console.log("Database seeded successfully");
}

main();
