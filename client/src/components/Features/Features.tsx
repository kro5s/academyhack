import React from 'react';

const Features = () => {
    return (
        <section className="bg-light-green pt-20 pb-36">
            <h2 className="text-center font-bold text-[40px] text-white">Преимущества использования для бизнеса</h2>
            <div className="custom-container">
                <ul className="flex flex-col gap-y-20 justify-between items-start gap-x-40 mt-36 lg:flex-row">
                    <li><Feature name="Повышение привлекательности недвижимости"
                                 description=" Хорошее экосостояние района может сделать недвижимость более привлекательной для покупателей, которые ищут здоровую и безопасную среду для жизни"
                                 img="/estate.svg"/></li>
                    <li><Feature name="Повышение цен на экологичную недвижимость"
                                 description="Недвижимость в экологически чистых районах может оцениваться выше, так как спрос на такие объекты обычно больше"
                                 img="/prices.svg"/></li>
                    <li><Feature name="Инновационное решение"
                                 description="Наши алгоритмы анализируют и обрабатывают большое количество данных, собираемых с наших датчиков, предоставляя эко данные о любом виде недвижимости"
                                 img="/innovation.svg"/></li>
                </ul>
            </div>
        </section>
    );
};

const Feature: React.FC<{ name: string; description: string; img: string }> = ({name, description, img}) => {
    return (
        <div className="flex flex-col items-center text-center text-white">
            <div><img className="size-24" src={img} alt={name}/></div>
            <h3 className="font-bold text-3xl pt-8 pb-4">{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Features;