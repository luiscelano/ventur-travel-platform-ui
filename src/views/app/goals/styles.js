import styled from 'styled-components'

export const NavigationSideBarContainer = styled.div`
  min-width: 360px !important;
  background: ${(props) => props.theme.color.background.dark};
  height: 100vh;
  position: fixed;
  z-index: 1;
`

export const NavigationSideBarHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px;
`

export const NavigationSideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding-top: 5vh;
  margin: auto;
  max-width: 280px;
`

export const LogoContainer = styled.img`
  width: 280px;
  height: 81px;
  object-fit: cover;
`
