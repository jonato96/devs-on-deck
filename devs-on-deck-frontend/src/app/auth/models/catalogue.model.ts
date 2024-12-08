export interface Catalogue {
  id: number;
  name: string;
}
export interface State extends Catalogue {}

export interface City extends Catalogue {}

export interface Languages extends Catalogue {
  logo: string;
}

export interface Framework extends Catalogue {
  logo: string;
}
