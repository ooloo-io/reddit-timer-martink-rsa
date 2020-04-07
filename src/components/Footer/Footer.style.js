import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  min-height: 100px;
  width: 100%;
`;

const FooterItem = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 33.3%;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.xs};
`;

const FooterLeft = styled(FooterItem)`
  justify-content: center;
  padding-left: 75px;
  letter-spacing: ${(props) => props.theme.spacing.letters};
  @media (max-width: ${(props) => props.theme.breakpoint.small}) {
    width: 100%;
    padding-left: 10px;
    justify-self: start;
  }
`;

const FooterCenter = styled(FooterItem)`
  padding-left: 1px;
  justify-content: center;
`;

const FooterRight = styled(FooterItem)`
  padding-right: 128px;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoint.small}) {
    width: 100%;
    padding-right: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export {
  FooterWrapper, LogoContainer, LinksContainer, FooterLeft, FooterCenter, FooterRight,
};
