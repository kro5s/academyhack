import React from 'react';
import {Product} from "../../../types/types";
import EstateCard from "../EstateCard/EstateCard";

const estates: Product[] = [
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, quiet: true, img: "/e1.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, img: "/e2.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, img: "/e3.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, quiet: true, img: "/e4.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, img: "/e5.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, quiet: true, img: "/e6.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, quiet: true, img: "/e7.jpg"},
    {price: "5 000 000", rooms: 2, square: 48, floor: 4, metro: "Ботаническая", timeToMetro: 30, address: "Екатеринбург, пр. Ленина 30", eco: true, img: "/e8.jpg"},
]

const EstateGrid = () => {
    return (
        <div className="custom-container">
            <h2 className="text-dark-green text-3xl font-bold mb-10 text-center">Найдите экологичное жилье в вашем городе!</h2>
            <div className="grid grid-cols-[repeat(auto-fit,_270px)] gap-x-6 gap-y-10 items-start justify-center pb-20">
                {
                    estates.map((estate, index) => (
                        <EstateCard key={index} card={estate}/>
                    ))
                }
            </div>
        </div>
    );
};

export default EstateGrid;