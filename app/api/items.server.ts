import type { Product } from "~/models/products.model";
import { prisma } from "./database.server";

export async function addItem(item: Omit<Product, "id">) {
  try {
    const res = prisma.item.create({
      data: {
        name: item.name,
        price: +item.price,
      }
    });
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllItems() {
  try {
    const res = await prisma.item.findMany({
      orderBy: {
        dateAdded: 'desc',
      }
    });
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}