import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthHeder = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1, 23;
  color: var(--primary-color-black);
  margin-bottom: 16px;
`;
export const PageWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    padding-top: 148px;
    padding-left: 738px;
  }
`;


export const StyledLink = styled(Link)`
  z-index: 5;
  position: relative;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-color-blue);
`;
