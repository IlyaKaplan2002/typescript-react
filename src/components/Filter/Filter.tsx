import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterActions';
import { getFilter } from 'redux/filter/filterSelectors';
import { v4 as uuid } from 'uuid';
import FilterStyled from './Filter.styled';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const filterId = uuid();
  return (
    <FilterStyled>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange={onChange}
        name="filter"
      />
    </FilterStyled>
  );
};

export default Filter;
