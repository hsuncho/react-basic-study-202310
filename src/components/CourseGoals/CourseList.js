import React from 'react';
// import './CourseList.css';
import CourseItem from './CourseItem';

import styled from 'styled-components';

const CourseUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUL>
      {items.map((item) => {
        return (
          <CourseItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        );
      })}
    </CourseUL>
  );
};

export default CourseList;
