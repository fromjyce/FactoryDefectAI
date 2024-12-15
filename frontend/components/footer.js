const Footer = () => {
  return (
    <footer className="bg-[#8d0801ff] text-white py-1 px-6 text-center poppins">
      <p>
        Developed by{' '}
        <a
          href="/submission.pdf"
          download
          className="text-[#f4d58dff] hover:text-[#708d81ff]"
        >
          <strong>Team Definox</strong>
        </a>{' '}
        for{' '}
        <a
          href="https://www.hackerearth.com/challenges/hackathon/intel-hackathon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f4d58dff] hover:text-[#708d81ff]"
        >
          <strong className="space_grotesk">HACKSTORM: INTEL® AI PC EDITION</strong>
        </a>{' '}
        Hackathon
      </p>
    </footer>
  );
};

export default Footer;