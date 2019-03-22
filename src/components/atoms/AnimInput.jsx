import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { InputSearch, InputSearchWrapper, InputLabel } from '../../ui/atoms';

export const AnimInput = ({ handleOnChange, animState, value }) => {
  return (
    <Spring
      from={{ top: `${animState ? 40 : 0}%` }}
      to={{ top: `${animState ? 0 : 40}%` }}
      reset={!animState}>
      {props => (
        <InputSearchWrapper style={props}>
          <InputSearch placeholder="Search" onChange={handleOnChange} />
          <Spring
            from={{ width: `${animState ? 100 : 0}%` }}
            to={{ width: `${animState ? 0 : 100}%` }}
            reset={!animState}>
            {props => (
              <InputLabel style={props}>
                Type here the title of TV show{' '}
              </InputLabel>
            )}
          </Spring>
        </InputSearchWrapper>
      )}
    </Spring>
  );
};
