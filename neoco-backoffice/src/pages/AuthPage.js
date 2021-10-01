import React, { useContext } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Sidebar, List, ListItem, Link, Button } from "bluejay-ui";
import { ReactComponent as Logout } from "../images/logout.svg";
import { ReactComponent as Edit } from "../images/pencil.svg";
import AuthContext from "../contexts/AuthContext";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const ChildrenContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px 60px 150px 60px;
  background: linear-gradient(180deg, #edf0f4 0%, #dadde1 100%);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding-bottom: 60px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid #19c3fc;
`;

const SmallButton = styled(Button)`
  width: 40px;
  height: 40px;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const AuthPage = ({ children, routes }) => {
  const { user, logout, sidebarProps } = useContext(AuthContext);

  return (
    <Container>
      <Sidebar defaultOpen={false} {...sidebarProps}>
        <List>
          {routes
            .filter((route) => route.to)
            .map((route, key) => (
              <Link
                key={key}
                as={RouterLink}
                to={route.to}
                style={{ textDecoration: "none" }}
              >
                <ListItem icon={route.icon}>{route.name}</ListItem>
              </Link>
            ))}
        </List>
        <ControlsContainer>
          {user.imageUrl && <ProfileImage src={user.imageUrl} />}
          <Link as={RouterLink} to="/profile">
            <SmallButton
              color="primary"
              style={{ marginTop: 20 }}
              rounded
              icon={Edit}
            ></SmallButton>
          </Link>
          <SmallButton
            color="#FC6B19"
            rounded
            icon={Logout}
            onClick={logout}
          ></SmallButton>
        </ControlsContainer>
      </Sidebar>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default AuthPage;
