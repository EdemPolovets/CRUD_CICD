import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">{title}</h1>
    </header>
  );
}; 