import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { InputSearch } from '../../ui/atoms';

export const AnimInput = ({ handleOnChange, animState, value }) => {
  return (
    <Spring
      from={{ top: `${animState ? 40 : 0}%` }}
      to={{ top: `${animState ? 0 : 40}%` }}
      reset={!animState}>
      {props => (
        <InputSearch
          style={props}
          placeholder="Search"
          onChange={handleOnChange}
        />
      )}
    </Spring>
  );
};
