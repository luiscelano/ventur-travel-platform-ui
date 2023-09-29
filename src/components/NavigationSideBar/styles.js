import styled from 'styled-components'

export const NavigationSideBarContainer = styled.div`
  min-width: 360px !important;
  background: ${(props) => props.theme.color.background.dark};
  height: 100vh;
`

export const NavigationSideBarHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const NavigationSideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding-top: 10vh;
  margin: auto;
  max-width: 280px;
`

export const LogoContainer = styled.img`
  width: 280px;
  height: 81px;
  object-fit: cover;
`
