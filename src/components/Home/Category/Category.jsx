import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    // // Add a console log to see the categories prop
    // console.log('Categories:', categories);

    // // Conditional rendering to ensure categories and categories.data are defined
    // if (!categories || !categories.data) {
    //     return <div>Loading...</div>; // Or any other placeholder/loading component
    // }

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <img
                            src={
                                process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
