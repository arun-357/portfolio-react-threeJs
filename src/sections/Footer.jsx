export default function Footer() {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
    
      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.png" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
        </div>
      </div>
    
      <p className="text-white-500">© 2025 Arunachalam N. All rights reserved.</p>
    </footer>
  );
};
    
    