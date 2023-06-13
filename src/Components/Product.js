import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


function Product() {
    const [product, setProduct] = useState();
    const id = useParams();

    const getProduct = async () => {
        // console.log("Hello");
         //console.log(id.id);
        const response = await fetch(`https://fakestoreapi.com/products/${id.id}`);
        //console.log(response);
        setProduct(await response.json());

          //console.log(response.json());


        //setProduct(json);
    }

    useEffect(() => {
        getProduct();
    }, [product]);


    return (
        <>

          
                             <div className="container py-5" >
                                <div className="row py-4">
                                    <div className="col-md-6">
                                        <img src={product.image} height="400px" width="400px" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="text-uppercase text-black-50">
                                            {product.category} </h4>
                                        <h1 className="display-5">{product.title}</h1>
                                        <p className="lead fw-bolder">Rating{product.rating}
                                            <i className="fa fa-star"></i></p>
                                        <h4 className="display-4 fw-bold my-4">${product.price}</h4>
                                        <p>{product.description}</p>
                                        <NavLink to="/" className="btn btn-outline-dark px-4 py-2">Add To Cart</NavLink>
                                        <NavLink to="/" className="btn btn-outline-dark ms-2 ps-3">Go To Cart</NavLink>


                                    </div>

                                </div>
                            </div> 
                           

        </>
    );
}
export default Product;