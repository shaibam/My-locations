import React, { Component } from 'react';
import FooterButton from './footerButton';
import LocationsImage from './images/locations.png';
import CategoriesImage from './images/categories.png';
import HomeImage from './images/home.png';
import style from "./style.css";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <FooterButton text="Categories" img={CategoriesImage} url="Categories"></FooterButton>
                <FooterButton text="Locations" img={LocationsImage} url="Locations"></FooterButton>
                <FooterButton text="Home" img={HomeImage} url="/"></FooterButton>
            </div>
        );
    }
}

export default Footer;