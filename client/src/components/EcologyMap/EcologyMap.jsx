import React, {useEffect, useState} from 'react';
import {Circle, FeatureGroup, MapContainer, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../index.css"

const EcologyMap = () => {
    const [mapMode, setMapMode] = useState('ecology');

    useEffect(() => {
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])

    const handleMapModeChange = () => {
        if (mapMode === 'ecology') {
            setMapMode('noise')
        } else if (mapMode === 'noise') {
            setMapMode('ecology')
        }
    }

    let renderedMap;

    switch (mapMode) {
        case 'ecology': {
            renderedMap = <MapContainer center={[56.835, 60.612]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FeatureGroup>
                    <Popup>Dust</Popup>
                    <Circle center={[56.835, 60.612]} pathOptions={{ fillColor: 'blue', color: 'blue' }} radius={200} />
                </FeatureGroup>
            </MapContainer>
            break;
        }
        case 'noise': {
            renderedMap = <MapContainer center={[56.835, 60.612]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FeatureGroup>
                    <Popup>Noise</Popup>
                    <Circle center={[56.835, 60.612]} pathOptions={{ fillColor: 'red', color: 'red' }} radius={200} />
                </FeatureGroup>
            </MapContainer>
            break;
        }
    }

    return (
        <div className="px-[15px] max-w-[1200px] mx-auto mt-[100px] mb-[100px]">
            <div className="mb-5 flex items-center gap-x-2 cursor-pointer select-none" onClick={handleMapModeChange}>
                <span className="text-black/[0.2] font-bold">Режим карты: { mapMode === 'ecology' ? "Экология" : "Уровень шума"}</span>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.06301 0.00367281C3.06488 0.123377 2.23751 0.491293 1.51048 1.14087C1.14609 1.46653 0.779935 1.93831 0.55989 2.36432C0.489475 2.49986 0.485955 2.51571 0.492996 2.62309C0.498277 2.71815 0.508839 2.74984 0.552848 2.80265C0.642627 2.91531 0.690156 2.93995 0.822184 2.947C1.02991 2.95932 1.09328 2.90827 1.27284 2.58084C1.55625 2.06329 2.12133 1.5035 2.67056 1.19368C3.10185 0.948987 3.57715 0.792314 4.07181 0.732462C4.30418 0.704296 4.77947 0.707817 5.0048 0.741264C6.03813 0.890895 6.93944 1.44189 7.55732 2.29918C7.6383 2.41009 7.64006 2.41009 7.36897 2.21645C7.11547 2.03513 7.0609 2.01224 6.93064 2.02105C6.7634 2.03337 6.63842 2.14955 6.60673 2.32031C6.58913 2.41537 6.63666 2.56148 6.70707 2.62661C6.76868 2.6847 8.26675 3.75676 8.34069 3.79549C8.36533 3.80781 8.4287 3.81837 8.48327 3.81837C8.6065 3.81837 8.71564 3.76204 8.78606 3.6617L8.83711 3.58953L8.92336 2.6583C8.97089 2.14603 9.00786 1.66193 9.0061 1.58272C9.00082 1.45421 8.99554 1.43309 8.94625 1.37147C8.8019 1.1884 8.5308 1.17783 8.38645 1.35035C8.31604 1.43485 8.30724 1.46829 8.27907 1.74995C8.26675 1.88902 8.25267 2.00696 8.24915 2.01048C8.24563 2.014 8.20162 1.95943 8.15233 1.88902C7.83722 1.43485 7.43058 1.03876 6.9588 0.72366C6.43773 0.376869 5.87442 0.153303 5.23365 0.0424008C5.06465 0.014235 4.93087 0.00543317 4.57351 0.00191245C4.32706 -0.00160827 4.09645 0.000152091 4.06301 0.00367281Z"
                        fill="black" fillOpacity="0.2"/>
                    <path
                        d="M0.441911 5.18442C0.353893 5.2073 0.272916 5.26187 0.220105 5.33933L0.169055 5.40974L0.0827973 6.34097C0.0352676 6.85324 -0.00170001 7.33734 6.03471e-05 7.41656C0.00534143 7.54682 0.0106225 7.56619 0.0599126 7.6278C0.132087 7.71582 0.202502 7.75454 0.311644 7.76863C0.427828 7.78271 0.538731 7.74046 0.612666 7.65596C0.690122 7.56795 0.698923 7.5345 0.727089 7.24932C0.739412 7.11025 0.753495 6.99231 0.757015 6.98879C0.760536 6.98527 0.804545 7.03984 0.853835 7.11025C1.00347 7.32502 1.15838 7.50985 1.36082 7.7123C2.03504 8.38651 2.85889 8.80548 3.82532 8.96567C4.10346 9.01144 4.90442 9.01144 5.17728 8.96567C6.08211 8.81252 6.83378 8.45165 7.508 7.84608C7.84247 7.54682 8.23503 7.03984 8.44627 6.63848C8.51492 6.50645 8.52021 6.49061 8.51316 6.3797C8.50788 6.28112 8.49908 6.2512 8.45331 6.19663C8.36353 6.08396 8.316 6.05932 8.18398 6.05228C8.08716 6.04699 8.05019 6.05228 7.99034 6.0822C7.90936 6.12445 7.87063 6.17374 7.73861 6.40963C7.54144 6.76346 7.17705 7.18947 6.85314 7.45176C6.23174 7.95171 5.49239 8.2404 4.72311 8.28265C3.81828 8.33018 2.98387 8.07669 2.25508 7.5345C1.99983 7.34438 1.65304 6.98527 1.44884 6.70009C1.36786 6.58919 1.3661 6.58919 1.6372 6.78283C1.89069 6.96414 1.94526 6.98703 2.07553 6.97823C2.24276 6.9659 2.36775 6.84972 2.39943 6.67896C2.41704 6.5839 2.36951 6.43779 2.29909 6.37266C2.241 6.31809 0.739412 5.24251 0.674278 5.20906C0.621468 5.1809 0.505284 5.17033 0.441911 5.18442Z"
                        fill="black" fillOpacity="0.2"/>
                </svg>
            </div>
            {renderedMap}
        </div>
    );
};

export default EcologyMap;