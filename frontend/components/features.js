import Image from 'next/image';
const features = [
    {
      imgSrc: '/features/detection.png',
      title: 'Real-Time Defect Detection',
      description: 'Utilizes Intel® OpenVINO for high-performance AI inference directly on edge devices, ensuring immediate feedback with minimal reliance on cloud resources.',
    },
    {
      imgSrc: '/features/inspection.png',
      title: 'Depth Estimation & Multi-Angle Inspection',
      description: 'Integrates depth estimation with multi-angle product inspection to detect both surface-level and internal defects for more comprehensive results.',
    },
    {
      imgSrc: '/features/deployment.png',
      title: 'Edge AI Deployment',
      description: 'Processes AI tasks locally on Intel® AI PC, minimizing latency and ensuring faster, more reliable defect detection in environments with limited internet connectivity.',
    },
    {
      imgSrc: '/features/accuracy.png',
      title: 'Enhanced Accuracy',
      description: 'Intel® OpenVINO-optimized AI models provide precise defect detection even in fast-moving, complex production lines.',
    },
    {
      imgSrc: '/features/efficiency.png',
      title: 'Operational Efficiency',
      description: 'Automates defect detection to eliminate human error, reduce inspection time, and accelerate production cycles, boosting throughput and cutting costs.',
    },
    {
      imgSrc: '/features/scalable.png',
      title: 'Scalability',
      description: 'Designed to scale across multiple machines or factory lines, maintaining efficiency and performance as production demands increase.',
    },
    {
      imgSrc: '/features/decision.png',
      title: 'Real-Time Decision Making',
      description: 'Displays defect severity on a dashboard for immediate corrective actions, ensuring seamless integration with production workflows.',
    },
    {
      imgSrc: '/features/optimization.png',
      title: 'AI-Driven Optimization',
      description: 'Optimizes manufacturing precision, speed, and cost-effectiveness by automating defect detection with AI-driven solutions.',
    },
  ];  
  
const Features = () => {
    return (
      <section id="features" className="py-9 px-7 bg-[#f6dda4]">
        <h2 className="text-4xl font-bold text-center space_grotesk text-[#001427ff]">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
              <div className="relative w-full h-40">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold space_grotesk text-[#bf0603ff]">{feature.title}</h3>
              <p className="mt-2 text-gray-600 poppins">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  