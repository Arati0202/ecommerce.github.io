import Products from "./Products";

function Home() {
    return (
        <>
            <div className="hero">
            <div className="card 45">
                <img src="assets/bg1.jpg" className="card-img" alt="..." height="500px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Seassion Arrival</h5>
                        <p className="card-text lead fs-2">Check Out the all the Trends</p>
                       
                    </div>
            </div>
            <Products />
            </div>
        </>
    );
}
export default Home;