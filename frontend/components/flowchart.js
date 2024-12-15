import Image from 'next/image';

const Flowchart = () => {
  return (
    <section id="flowchart" className="py-9 px-7 bg-[#f6dda4]">
      <h2 className="text-4xl font-bold text-center space_grotesk text-[#001427ff]">Solution Flowchart</h2>
      <div className="mt-8 text-center">
        <Image
          src="/flowchart.jpg"
          alt="Solution Flowchart"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Flowchart;
