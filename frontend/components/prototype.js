const Prototype = () => {
  return (
    <section id="prototype" className="py-9 px-7 bg-[#f6dda4]">
      <h2 className="text-4xl font-bold text-center space_grotesk text-[#001427ff]">See it in Action!</h2>
      <div className="mt-8 flex justify-center">
        <iframe
          width="560"
          height="315"
          className="rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Dp58JsgqvUU?si=uSH16YtfWs7bnW9c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Prototype;
