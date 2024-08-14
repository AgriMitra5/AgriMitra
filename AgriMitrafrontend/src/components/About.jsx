function About(){
    return (
        <>
        <div className="page-heading about-heading header-text" style={{backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/409/828/desktop-wallpaper-farming-background-sunset-landscape-cute-farm-landscapes.jpg)'}} >
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="text-content">
                <h4>about us</h4>
                <h2>AgriMitra</h2>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="best-features about-features">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                <h2>We are providing Farming Products on rents</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-image">
                {/* <img src="images/aboutus.jpg" alt /> */}
                 <img src={'https://www.tractorjunction.com/blog/wp-content/uploads/2022/09/Top-10-agriculture-equipment-list-in-India.jpg'} style={{ width: "500px", height: "380px" }} /> 
                
                </div>
            </div>
            <div className="col-md-6">
                <div className="left-content" style={{ textAlign: 'justify' }}>
                <h4>Welcome to AgriMitra, your trusted partner for seamless farming equipment rentals!</h4>
                <p>
                

1. At AgriMitra, we know that efficiency, affordability, and reliability are key when it comes to renting agricultural machinery. With extensive experience in the industry, we are committed to providing top-quality service, ensuring a smooth and productive rental experience every time.
<br /><br /> 2. Our inventory includes a diverse range of farming equipment, from compact tractors for small-scale operations to powerful harvesters for large farms. Whether you’re preparing your fields, planting, or harvesting, we have the ideal equipment to meet your needs.
<br /><br /> 3. We emphasize transparency and fairness in our pricing. With no hidden charges and competitive rates, you can be confident that you’re getting the best value for your money with AgriMitra.
<br /><br /> 4. Thank you for choosing AgriMitra for your farming needs. We look forward to supporting your agricultural success and helping you achieve your goals.
                 </p>
                {/* <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul> */}
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default About;