import type { NavItem } from "~/shared/models/nav.model";

export interface Product {
  name: string;
  id: string;
  price: number;
}

export interface ProductFire {
  name: string;
  id: string;
  price: number;
  fireId: string;
}

const initValue: Product = {
  name: "Cool product",
  id: "1",
  price: 5,
};

export const navOptions: NavItem[] = [
  {
    displayName: 'New',
    path: 'add-new',
    id: 'new',
  },
  {
    displayName: 'View',
    path: 'view',
    id: 'view',
  },
];