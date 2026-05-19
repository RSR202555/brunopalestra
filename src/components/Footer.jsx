import React from 'react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-black border-t border-brand-border py-12">
      <div className="container-max text-center">
        <h3 className="font-sans font-bold text-xl uppercase tracking-tighter mb-6 text-white">
          Personal Premier
        </h3>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Personal Premier Performance. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
