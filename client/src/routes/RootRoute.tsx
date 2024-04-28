import React from 'react';
import Welcome from "../components/Welcome/Welcome";
import Layout from "../components/Layout/Layout";
import Features from "../components/Features/Features";


const RootRoute = () => {
    return (
        <Layout>
            <Welcome />
            <Features />
        </Layout>
    );
};

export default RootRoute;