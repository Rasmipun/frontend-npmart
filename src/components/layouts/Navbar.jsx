import {
  ActionIcon,
  Button,
  
  Container,
  createStyles,
  Drawer,
  Group,
  Indicator,
  MediaQuery,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { White } from "../logo";
import { TbMenu2, TbSearch, TbShoppingCart } from "react-icons/tb";
import { useState } from "react";
import useUser from "../../hooks/useUser";

import { useCart } from "@react-providers/cart";

const useStyles = createStyles((theme) => ({
  navbar: {
    background: theme.colors.dark,
    height: "60px",
    position: "sticky"
  },
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftNav: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    alignItems: "360px",
  },

  form: {
    marginLeft: theme.spacing.md,
    width: "360px",
  },

  nav: {
    display: "flex",
    gap: theme.spacing.md,
    alignItems: "center",
  },

  navLink: {
    color: theme.colors.gray[0],
    fontWeight: 500,
  },

  cartIcon: {
    fontSize: "1.5rem",
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false)
  const {user, logout} = useUser()
  const {cart} = useCart()
 
  return (
    <header className={classes.navbar}>
      <Container size="xl" className={classes.container}>
        <div className={classes.leftNav}>
          <Link to="/" className={classes.logo}>
            <White />
          </Link>

          <MediaQuery
            smallerThan="sm"
            styles={{
              display: "none",
            }}
          >
            <form className={classes.form}>
              <TextInput icon={<TbSearch />} placeholder="Search" />
            </form>
          </MediaQuery>
        </div>

        <nav className={classes.nav}>
          <MediaQuery
            smallerThan="md"
            styles={{
              display: "none",
            }}
          >
            <Group>
              <Text className={classes.navLink} component={Link} to="/">
                Home
              </Text>
              <Text className={classes.navLink} component={Link} to="about">
                About Us
              </Text>
            </Group>
          </MediaQuery>

          <Indicator label={cart.totalQuantity} inline size={18}>
            <ActionIcon component={Link} to='/cart' color="yellow" size="xl">
              <TbShoppingCart className={classes.cartIcon} />
            </ActionIcon>
          </Indicator>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Group>
            {!user ? (
            <>
            <Button component={Link} to="/auth/login" variant="default">Sign In</Button>
          <Button component={Link} to="/auth/register">
            Register
          </Button>
            </>
          ): (
            <>
              <Button onClick={logout}
              >
                logout
              </Button>
              <Button color='blue' component={Link} to='/dashboard'>Dashboard</Button>
            </>
             
          )}
            </Group>
          </MediaQuery>

          <ActionIcon
            onClick={() => setOpened(true)}
            size="lg"
            sx={(theme) => ({
              [` @media (min-width: ${theme.breakpoints.md}px)`]: {
                display: "none",
              },
            })}
          >
            <TbMenu2 className={classes.cartIcon} />
          </ActionIcon>
        </nav>
      </Container>
      <MobileNavbar opened={opened} setOpened={setOpened} />
    </header>
  );
};

const MobileNavbar = ({ opened, setOpened }) => {
  const onClose = () => setOpened(false)
  const {user, logout} = useUser()
  const { classes } = useStyles()
 
  return (
    <Drawer
      styles={(theme) => ({
        drawer: {
          background: theme.colors.dark,
        },
        body: {
          padding: theme.spacing.md,
        },
      })}
      opened={opened}
      size="sm"
      withCloseButton={false}
      onClose={onClose}
    >
      <Stack>
        <form>
          <TextInput icon={<TbSearch />} placeholder="Search" />
        </form>

        <Stack>
          {!user ? (
            <>
            <Button component={Link} to="/auth/login" variant="default">Sign In</Button>
          <Button component={Link} to="/auth/register">
            Register
          </Button>
            </>
          ): (
            <>
              <Button component={Link} to="/auth/login" onClick={logout}
              >
                logout
              </Button>
              <Button color='blue' component={Link} to='/dashboard'>Dashboard</Button>
            </>
          )
          }
        </Stack>
        <Group>
          <Text className={classes.navLink} component={Link} to="/">
            Home
          </Text>
          <Text className={classes.navLink} component={Link} to="about">
            About Us
          </Text>
        </Group>
      </Stack>
    </Drawer>
  );
};
export default Navbar;
