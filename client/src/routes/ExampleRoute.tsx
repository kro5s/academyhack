import React from 'react';
import Layout from "../components/Layout/Layout";
import EcologyMap from "../components/EcologyMap/EcologyMap.jsx";
import EstateGrid from "../components/Estate/EstateGrid/EstateGrid";

const ExampleRoute = () => {
    return (
        <Layout>
            <EcologyMap />
            <EstateGrid />
        </Layout>
    );
};

export default ExampleRoute;