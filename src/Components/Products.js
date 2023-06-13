import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';



function Products() {


    const [product, setProduct] = useState([]);
    const [filter, setFilter] = useState([]);

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setProduct(await response.json());
    }
    useEffect(() => {
        getData();
    }, [product]);


    const filterProduct = (cat) =>{
       const updatedlist = product.filter((x) =>x.category === cat);
       setFilter(updatedlist);
    }
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <h1 className="text-center fw-bolder my-3">Latest Products</h1>
                <hr />
                <div className="button d-flex justify-content-center my-5 ">
                    <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(product)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("men's clothing")}>Mean's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("women's clothing")}>Women's</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
               
                {
                   
                    filter.map((product , ind) => {
                        return (
                            
                            <>
                            
                                <div className="col-3 mb-5" key={ind}>
                                    <div className="card h-100" >
                                       
                                        <img className="card-img-top" src={product.image} alt="..." height="250px" />
                                     
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                               
                                                <h5 className="fw-bolder">{product.title} </h5>
                                              
                                                ${product.price}
                                            </div>
                                        </div>
                                       
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <NavLink className="btn btn-outline-dark mt-auto" to={`/products/${product.id}`}>Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })

                }
</div>

                {/* <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {
                        product.map((currEle,i) => {
                            const url = "product/" + currEle.id;
                            return (

                                <div className="col mb-5" key={i}>
                                    <div className="card h-100">
                                       
                                        <img className="card-img-top" src={currEle.image} alt="..." height="250px" />
                                        
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                
                                                <h5 className="fw-bolder">{currEle.title} </h5>
                                                
                                                ${currEle.price}
                                            </div>
                                        </div>
                                       
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <a className="btn btn-outline-dark mt-auto" to={` /Section/${product.id}`}>Buy Now</a>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            );
                        })
                    }
                </div> */}
            </div>
        </>
    );
}
export default Products;