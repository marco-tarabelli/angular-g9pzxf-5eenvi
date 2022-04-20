export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Airforce1',
    price: 800,
    description: 'Look classico e iconico'
  },
  {
    id: 2,
    name: 'Stan Smith',
    price: 699,
    description: 'La linea adidas Stan Smith da uomo si reinventa grazie a nuovi materiali e tonalità di colore inedite.'
  },
  {
    id: 3,
    name: 'Nike Court Vision Low',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/