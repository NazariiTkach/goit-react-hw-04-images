import React from 'react';
import PropTypes from 'prop-types';
import { LoadButton, ButtonContainer } from 'components/Button/ButtonStyle';
import { AiFillCaretDown } from 'react-icons/ai';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <ButtonContainer>
      <LoadButton onClick={onClick}>
        <span>Load more</span>
        <AiFillCaretDown />
      </LoadButton>
    </ButtonContainer>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
