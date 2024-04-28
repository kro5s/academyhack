import React from 'react';
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <section className="pt-[100px] pb-[150px]">
            <div className="flex flex-col-reverse text-center gap-y-40 items-center justify-between custom-container gap-x-16 lg:flex-row lg:text-left">
                <div>
                    <h1 className="text-dark-green font-ptsans text-[40px] font-bold pb-[150px]">Подключите систему экомониторинга
                        для вашего агенства недвижимости</h1>
                    <Link to="/example" className="py-4 px-8 bg-light-green rounded-2xl text-3xl text-white inline-block hover:bg-[#689614] transition">Посмотреть пример</Link>
                </div>
                <div className="lg:flex-shrink-0">
                    <img src="/welcome.png" alt="Ecology"/>
                </div>
            </div>
        </section>
    );
};

export default Welcome;