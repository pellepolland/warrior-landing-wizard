export const FooterAddress = () => {
  return (
    <div>
      <h3 className="font-semibold mb-6 text-sm normal-case">Address</h3>
      <div className="flex flex-col space-y-2">
        <a 
          href="https://maps.app.goo.gl/CJWVFeoxHmA7cGAu8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warrior-gray hover:text-white transition-colors"
        >
          <p className="text-xs mb-2">103 Portobello Road</p>
          <p className="text-xs">London W11 2QB</p>
        </a>
      </div>
    </div>
  );
};