import Image from 'next/image';

const Flowchart = () => {
  return (
    <section id="flowchart" className="py-9 px-7 bg-[#f6dda4]">
      <h2 className="text-4xl font-bold text-center space_grotesk text-[#001427ff]">Workflow</h2>
      <div className="mt-8 text-center">
        <Image
          src="/flowchart.png"
          alt="Solution Flowchart"
          width={1200}
          height={600}
          className="mx-auto rounded-lg shadow-lg p-4 bg-[#f4f4f4]"
        />
      </div>
    </section>
  );
};

export default Flowchart;
