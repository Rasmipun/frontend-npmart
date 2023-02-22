import { Text, Title } from "@mantine/core";
import ForgotPasswordForm from "../../components/forms/ForgotPasswordForm";



const ForgotPassword = () => {
  return <div>
  <Title order={2}>Forgot Password</Title>
  <Text size='md'>
   No worries, Just enter your email 
  </Text>

<ForgotPasswordForm/>
  
</div>
};
export default ForgotPassword;