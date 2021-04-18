import React from 'react';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
    text: 'All',
  },
  {
    name: 'business',
    text: 'Business',
  },
  {
    name: 'entertainment',
    text: 'Entertainment',
  },
  {
    name: 'health',
    text: 'Health',
  },
  {
    name: 'science',
    text: 'Science',
  },
  {
    name: 'sports',
    text: 'Sports',
  },
  {
    name: 'technology',
    text: 'Technology',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
