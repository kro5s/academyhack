export interface Product {
    price: string;
    rooms: number;
    square: number;
    floor: number;
    metro: string;
    timeToMetro: number;
    address: string;
    img: string;
    eco?: boolean;
    quiet?: boolean;
}