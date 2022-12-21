export interface User {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  company: Company;
}
export interface Company {
  name: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
