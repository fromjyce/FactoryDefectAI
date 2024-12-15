const Landing = () => {
    return (
      <section
        id="landing"
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: 'url(/landing.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-black space_grotesk">Optimizing Defect Detection</h1>
            <p className="mt-4 text-2xl poppins font-bold">Leveraging AI for Industry 4.0 Manufacturing</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Landing;
  