import Image from 'next/image';

const Prototype = () => {
  return (
    <section id="prototype" className="py-9 px-7 bg-[#f6dda4]">
      <h2 className="text-4xl font-bold text-center space_grotesk text-[#001427ff]">See it in Action!</h2>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-12">
        <div className="w-[560px] ">
          <div className='transform transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          <iframe
            width="100%"
            height="315"
            className="rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/Dp58JsgqvUU?si=uSH16YtfWs7bnW9c"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
          <p className="mt-4 text-center text-sm text-[#001427ff] poppins">
            Showcasing the power of real-time defect detection with Intel® AI PC, highlighting low-latency edge processing and depth analysis for high-accuracy results.
          </p>
        </div>
        <div className="w-[560px]">
          <div className='transform transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          <Image
            src="/dashboard.png"
            alt="Sample Dashboard"
            width={560}
            height={315}
            className="rounded-lg shadow-lg"
            priority
          />
          </div>
          <p className="mt-4 text-center text-sm text-[#001427ff] poppins">
            Sample dashboard demonstrating multi-angle cameras detecting a material as defect-free and defective, with precise real-time analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
