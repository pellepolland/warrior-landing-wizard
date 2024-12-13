export const FooterContact = () => {
  return (
    <div>
      <h3 className="font-semibold mb-6 text-sm normal-case">Get in touch</h3>
      <div className="flex flex-col space-y-2">
        <p className="text-warrior-gray text-xs">+44 (0) 207 985 0157</p>
        <a 
          href="mailto:info@warriorcapital.co.uk" 
          className="text-warrior-gray hover:text-white transition-colors text-xs"
        >
          info@warriorcapital.co.uk
        </a>
      </div>
    </div>
  );
};