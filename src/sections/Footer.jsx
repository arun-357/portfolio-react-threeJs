export default function Footer() {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms of Cool</p>
        <p>|</p>
        <p>Privacy? Nah, You&apos;re Safe Here</p>
      </div>
    
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/arun-357" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="github" className="w-6 h-6" /> 
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/im-arunachalam" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="linkedin" className="w-6 h-6" />
          </a>
        </div>
      </div>
    
      <p className="text-white-500">© 2025 Arunachalam N. All rights reserved.</p>
    </footer>
  );
};
    
    