export interface Product {
  subscribe(arg0: (e: any) => void): unknown;
  id?:number;
  name:string;
  price:number
  image:string;
  description:string;
  weight:number;
}
