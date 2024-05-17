import React from 'react';
import './ProShop.css';

const products = [
    {
        id: 1,
        name: 'Baseball Bat',
        price: '$350.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/23ETSBHYPFR102342BBB_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Bats',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Baseball Glove',
        price: '$70.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/23RAWYCN10SSS24XXBBB_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Gloves',
        rating: 4
    },
    {
        id: 3,
        name: 'Baseball Shoes',
        price: '$90.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/22NWBM3000V6MTLLWCLT_Triple_White_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Shoes',
        rating: 4.5
    },
    {
        id: 4,
        name: 'Baseball Cap',
        price: '$20.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/23MCCYCTXCNNCT11SKBT_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 4.5
    },
    {
        id: 5,
        name: 'Bruce Bolt Batting Gloves',
        price: '$100.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/22XRAMBBSHRTCFFGLBTG_Green_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 5
    },
    {
        id: 6,
        name: 'Batting Pants',
        price: '$30.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/19NIKBYNKVPRSLCTPBBAA_Grey_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Gloves',
        rating: 4.5
    },
    {
        id: 7,
        name: 'Bat Grip',
        price: '$7.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/21LZSUDSPLTR18CM1BTA_Blitz_Camo_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 4.5
    },
    {
        id: 8,
        name: 'Sliding Mitt',
        price: '$50.00',
        image: 'https://dks.scene7.com/is/image/dkscdn/22EVSBVSHLDYTHSLDTHR_Navy_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 4.5
    },
    {
        id: 9,
        name: 'PRIMED 1-Position Batting Tee',
        price: '$19.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/22UARYBCLSSC34BSBBBA_White_Forest_Green_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Training',
        rating: 4.5
    },
    {
        id: 10,
        name: 'Shock Doctor Youth Core Supporter with Bioflex Cup',
        price: '$34.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/21ETSUWLKFFNXSMLTBBG_Stars_And_Stripes_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 4.5
    },
    {
        id: 11,
        name: 'PRIMED 2-in-1 Target/Rebound Trainer',
        price: '$59.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/21PMDUPRMD2N1TRNRTRA_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Training',
        rating: 4.5
    },
    {
        id: 12,
        name: 'Evoshield Tone Set Duffle Bag',
        price: '$79.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/23EVSUVSHLDTNSTDFBBG_Black_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Accessories',
        rating: 4.5
    },
    {
        id: 13,
        name: 'Baseball Pitching Net',
        price: '$99.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/22MCCU7NSTNTNTXXXBAS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Shoes',
        rating: 4.5
    },
    {
        id: 14,
        name: 'Easton Youth Batting Helmet',
        price: '$29.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/23IXRURGNLTNNRTXXBAS_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Helmets',
        rating: 4.5
    },
    {
        id: 15,
        name: 'Nike Men’s Baseball Cleats',
        price: '$119.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/22UARMMTLTYSSCGJCBBA_Jet_Gray_White_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Shoes',
        rating: 4.5
    },
    {
        id: 16,
        name: 'Wilson A2000 Baseball Glove',
        price: '$259.99',
        image: 'https://dks.scene7.com/is/image/dkscdn/21WILM20001799127SGL_Blonde_Tan_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        category: 'Gloves',
        rating: 4.5
    },
];

const ProShop = () => {
    return (
        <div className="proshop-container">
            <h1 className="proshop-title">Pro Shop</h1>
            <p className="proshop-description">Shop the latest baseball equipment and accessories.</p>
            <div className="proshop-products">
                {products.map(product => (
                    <div key={product.id} className="proshop-product">
                        <img src={product.image} alt={product.name} className="proshop-product-image" />
                        <h2 className="proshop-product-name">{product.name}</h2>
                        <p className="proshop-product-price">{product.price}</p>
                        <div className="proshop-product-rating">
                            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                        </div>
                        <div className="proshop-product-footer">
                            <button className="proshop-add-to-cart">
                                <span role="img" aria-label="cart">🛒</span> Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProShop;
