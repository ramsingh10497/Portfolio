import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.3rem;
  line-height: 3.0rem;
  text-align:center;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PText = ({ children }) => (
  <PStyle>
    <p>{children}</p>
  </PStyle>
);
export default PText;
