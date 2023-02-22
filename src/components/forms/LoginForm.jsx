import { Button, PasswordInput, Stack, Text, TextInput} from "@mantine/core";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return(
    <form
        style={{
          marginTop: "1rem",
        }}
      >
        <Stack>
          <TextInput label="Your Name" placeholder="Enter your name" />
          <TextInput
            type="email"
            placeholder="jhon@npmart.com"
            label="Your Email"
          />
          <div>
          <PasswordInput label="password" placeholder="Enter your Password" />
          <Text size='sm' mt='0.5'>
            forgot Password? <Link to='/auth/forgot-password'>Reset Here</Link>
          </Text>
          </div>
          <Button>Continue</Button> 
         
        </Stack>
      </form>
  )
};
export default LoginForm;

