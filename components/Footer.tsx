
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Workshop - Do Zero ao Lucro Online. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;