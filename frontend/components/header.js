import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#f4d58dff] text-white py-3 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image 
          src="/main.png" 
          alt="Logo" 
          width={40}
          height={40} 
        />
        <span className="font-bold text-xl space_grotesk text-[#001427ff] hover:text-[#bf0603ff]">FactoryDefectAI</span>
      </div>
      <nav className="space-x-6 poppins text-[#001427ff] font-bold">
        <Link href="#landing" className='hover:text-[#bf0603ff]'>Overview</Link>
        <Link href="#features" className='hover:text-[#bf0603ff]'>Key Features</Link>
        <Link href="#prototype" className='hover:text-[#bf0603ff]'>See It in Action</Link>
        <Link href="#flowchart" className='hover:text-[#bf0603ff]'>Workflow</Link>
      </nav>
    </header>
  );
};

export default Header;
