"use client";
import { useState } from "react";
import Image from "next/image"; // Import Image from next/image

const Prototype = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Introduction",
      content: (
        <div>
          <h3 className="text-2xl font-bold">Welcome to the App!</h3>
          <p>This is the introduction screen of our solution.</p>
        </div>
      ),
      image: "/step1.jpg", // Replace with image for step 1
    },
    {
      title: "Step 2: User Interaction",
      content: (
        <div>
          <h3 className="text-2xl font-bold">User Interaction</h3>
          <p>Here’s how the user interacts with the app.</p>
        </div>
      ),
      image: "/step2.jpg", // Replace with image for step 2
    },
    {
      title: "Step 3: Result",
      content: (
        <div>
          <h3 className="text-2xl font-bold">Results</h3>
          <p>This is the result of the user’s interaction with the app.</p>
        </div>
      ),
      image: "/step3.jpg", // Replace with image for step 3
    },
    {
      title: "Step 4: Conclusion",
      content: (
        <div>
          <h3 className="text-2xl font-bold">Conclusion</h3>
          <p>Here’s the conclusion of how the solution benefits the user.</p>
        </div>
      ),
      image: "/step4.jpg", // Replace with image for step 4
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section id="prototype" className="py-16 px-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Prototype Showcase</h2>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold">{steps[step].title}</h3>
        <div className="mt-4">
          {steps[step].content}
        </div>
        <div className="mt-4">
          <Image
            src={steps[step].image}
            alt={steps[step].title}
            width={800} // You can adjust the width and height
            height={450}
            className="max-w-full h-auto rounded-lg"
            priority // Optional: Makes sure the image is prioritized for loading
          />
        </div>
        <div className="mt-6">
          <button
            onClick={handlePrevious}
            className="px-6 py-2 bg-gray-600 text-white rounded-md mr-4"
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
            disabled={step === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
