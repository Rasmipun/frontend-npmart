import { Container, createStyles } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/layout/Header";
import Sidebar from "../components/dashboard/layout/sidebar";



const DashboardLayout = () => {
    const [opened, setOpened] = useLocalStorage({
        key: "sidebar-opened",
        defaultValue: true,
    })

    const useStyles = createStyles((theme) =>({
      layout:{},
      container: {
         marginLeft: opened ? "300px" : "0px",
         [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          marginLeft: "0px"
         }
      },
  }))

  const {classes} = useStyles()


  return (
    <div className={classes.layout}>
      <Sidebar opened={opened} />
      <div className={classes.container}>
        <Header />
      <main>
        <Container size= "xl" mt='md'>
        <Outlet />
        </Container>
      </main>
      
    </div>
    
</div>
  );
};
export default DashboardLayout;