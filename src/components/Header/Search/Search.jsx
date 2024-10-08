import { MdClose } from "react-icons/md";
import Prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";


const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()


    const onChange = (e) => {
        setQuery(e.target.value);
    } 

    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    if (!query.length){
        data = null;
    }

    return <div className="search-modal">
        <div className="form-feild">
            <input type="text"
                autoFocus
                placeholder="Search for products"
                value={query}
                onChange={onChange}
                />
            <MdClose onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-results">
                {data?.data?.map(item => (

                <div key={item.id} className="search-result-item">
                    <div className="image-container">
                        <img src={Prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <span className="desc">{item.attributes.desc}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Search;
