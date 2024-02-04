import styled from "styled-components";
import Header from "../../components/Header";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <Outlet />
    </StyledDefaultLayout>
  );
}

const StyledDefaultLayout = styled.div`
  width: inherit;
  height: inherit;
`;
