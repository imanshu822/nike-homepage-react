function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
            <button>SHOP NOW</button>
            <button className="secondary-btn">CATOGERY</button>
        </div>
        <div className="shoping">
            <p>Also Avilable on</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazonIcon" />
                <img src="/images/flipkart.png" alt="flipkartIcon" />
            </div>
        </div>
      </div>
      <div className="hero-image"></div>
      <img src="/images/shoe_image.png" alt="ShoeImg" />
    </main>
  );
}
export default HeroSection;
