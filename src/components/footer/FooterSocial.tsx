export const FooterSocial = () => {
  return (
    <div>
      <h3 className="font-semibold mb-6 text-sm normal-case">Find us on</h3>
      <div className="flex flex-col space-y-2">
        <a 
          href="https://www.instagram.com/warrior_capital" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-warrior-gray hover:text-white transition-colors text-xs"
        >
          Instagram
        </a>
        <a 
          href="https://uk.linkedin.com/company/warrior-capital1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-warrior-gray hover:text-white transition-colors text-xs"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};