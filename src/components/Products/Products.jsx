import "./Products.scss";
import Product from "./Product/Product";


const Products = ({ products, innerPage, headingText }) => {
    // // Add a console log to see the products prop
    // console.log('Products:', products);

    // // Conditional rendering to ensure products and products.data are defined
    // if (!products || !products.data) {
    //     return <div>Loading...</div>; // Or any other placeholder/loading component
    // }

    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {products?.data?.map((item) => (
                <Product key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            ))}
        </div>
    </div>;
};

export default Products;
