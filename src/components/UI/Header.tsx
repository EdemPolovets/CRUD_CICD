import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text tracking-tight py-2">{title}</h1>
    </header>
  );
}; 