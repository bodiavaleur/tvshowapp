import React from 'react';
import { ButtonMenu } from '../../ui/atoms';

export const MenuButton = ({ onClick, menuIsOpen }) => {
  return (
    <ButtonMenu onClick={onClick} menuIsOpen={menuIsOpen}>
      <img src="/icons/arrow_down.svg" alt="menu-button" />
    </ButtonMenu>
  );
};
