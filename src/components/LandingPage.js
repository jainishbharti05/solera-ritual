import React from 'react';
import Banner from './Banner';
import GenericContent from './GenericContent';
import FeaturedCategories from './FeaturedCategories';
import Header from './Header/header';
import FeaturedArea from './FeaturedArea';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <FeaturedCategories />
            <GenericContent />
            <FeaturedArea />
        </div>
    );
};

export default LandingPage;
