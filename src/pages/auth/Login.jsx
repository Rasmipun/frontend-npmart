import { Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return <div>
  <Title order={2}>Sign In</Title>
  <Text>
    new to NpMart <Link to="/auth/login">Create account here.</Link>
  </Text>

  <LoginForm />
</div>
};
export default Login;