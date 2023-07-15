import type { Product } from "~/models/products.model";
import { prisma } from "./database.server";
import { json } from "@remix-run/node";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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

export async function getItemById(id?: string) {
  try {
    const res = await prisma.item.findUnique({
      where: {
        id: id,
      }
    });
    return res;
  } catch (error) {
    console.error("Prisma Error Get Item By Id: ", error);
    throw json(
      { invalid: id, message: `Error occured trying to find item.` },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}