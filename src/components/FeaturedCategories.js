import React from 'react';
import shop_multivitamin from "../images/shop_multivitamin.jpg"
import shop_protein from "../images/shop_protein.jpg"
import shop_pregnancy from "../images/shop pregnancy.jpg"
import shop_bundles from "../images/shop bundles.jpg"

const FeaturedCategories = () => {

    // const categories = [
    //     {
    //         title : "Shop Multivitamin",
    //         imgsrc : {shop_multivitamin}
    //     },
    //     {
    //         title : "Shop Protein",
    //         imgsrc : {shop_protein}
    //     },
    //     {
    //         title : "Shop Pregnancy",
    //         imgsrc : {shop_pregnancy}
    //     },
    //     {
    //         title : "Shop Bundles",
    //         imgsrc : {shop_bundles}
    //     },
    // ]


    return (
        <div className="categoriesCard_container">
            <div className="categoryCard">
                <div className="cardImg_container">
                    <img src={shop_multivitamin} alt="" />
                </div>
                <div className="categorytitle_container">
                    <span>Shop Multivitamin</span>
                </div>
            </div>
            <div className="categoryCard">
                <div className="cardImg_container">
                    <img src={shop_protein} alt="" />
                </div>
                <div className="categorytitle_container">
                    <span>Shop Protein</span>
                </div>
            </div>
            <div className="categoryCard">
                <div className="cardImg_container">
                    <img src={shop_pregnancy} alt="" />
                </div>
                <div className="categorytitle_container">
                    <span>Shop Pregnancy</span>
                </div>
            </div>
            <div className="categoryCard">
                <div className="cardImg_container">
                    <img src={shop_bundles} alt="" />
                </div>
                <div className="categorytitle_container">
                    <span>Shop Bundles</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;