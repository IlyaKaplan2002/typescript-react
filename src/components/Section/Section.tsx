import React from 'react';
import SectionStyled from './Section.styled';

interface ISection {
  title: string;
}

const Section: React.FC<ISection> = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h1>{title}</h1>}
      {children}
    </SectionStyled>
  );
};

export default Section;
