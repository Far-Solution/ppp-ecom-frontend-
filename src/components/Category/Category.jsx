import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Category.scss";
import Products from "../Products/Products";

const Category = () => {
    const { id } = useParams();

    // Fetch category details to get the correct title
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(
        `/api/categories/${id}?populate=*`
    );

    // Fetch products related to the category
    const { data: productsData, loading: productsLoading, error: productsError } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    // Debug logs to check the fetched data
    console.log('Category data:', categoryData);
    console.log('Products data:', productsData);

    if (categoryLoading || productsLoading) {
        return <div>Loading...</div>;
    }

    if (categoryError || productsError) {
        return <div>Error loading data</div>;
    }

    // Get the category title
    const categoryTitle = categoryData?.data?.attributes?.title || "Category";

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {categoryTitle}
                </div>
                <Products innerPage={true} products={productsData} />
            </div>
        </div>
    );
};

export default Category;
