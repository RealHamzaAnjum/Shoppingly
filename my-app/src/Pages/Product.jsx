import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/Productdisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { ProductId } = useParams();
    const product = all_product.find((e) => e.id === Number(ProductId));

    return (
        <div>
            {product && <Breadcrum product={product} />}
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            {product && <RelatedProduct productId={product.id} />}
        </div>
    );
}

export default Product;
