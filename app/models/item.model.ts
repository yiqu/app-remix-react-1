export interface Item {
  dateAdded: Date | string;
  updatedAt: Date | string;
  id: string;
  name: string;
  price: number;
}


export interface ItemToAdd {
  name: string;
  price: number;
}