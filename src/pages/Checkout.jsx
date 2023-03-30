import { Button, Container, createStyles, Paper, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useCart } from "@react-providers/cart";
import { useMutation} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { orderSchema } from "../Schemas/orderSchema";
import { api } from "../utils/api";


const useStyles = createStyles ({
    form: {
        gridColumn: "1/3",
        "& > *": {
            marginBottom: 5
        }
    }
})

const CheckoutPage = () => {
    const { classes } = useStyles();
  
    const { cart } = useCart();
  
    const navigate = useNavigate();
  
    const orderMutation = useMutation({
      mutationFn: api.orders.create,
      onSuccess: () => {
        toast.success('Your Orders Have Been Placed!!!');
        
      },
      onError: (e) => {
        toast.error('Error Placing Your Order.');
        
      },
    });
  
    const form = useForm({
      initialValues: {
        name: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        zip: '',
      },
      validate: zodResolver(orderSchema),
    });
  
    const handleSubmit = (values) => {
      const submitValues = {
        ...values,
        items: cart.cartItems,
      };
      orderMutation.mutate(submitValues);
    };
  
    return (
      <Container size="xl" mt="md">
        <SimpleGrid cols={3}>
          <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
            <Title>Checkout</Title>
            <TextInput
              label="Name"
              placeholder=""
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Country"
              placeholder=""
              {...form.getInputProps('country')}
            />
            <TextInput
              label="State"
              placeholder=""
              {...form.getInputProps('state')}
            />
            <TextInput
              label="City"
              placeholder=""
              {...form.getInputProps('city')}
            />
            <TextInput
              label="Zip"
              placeholder=""
              {...form.getInputProps('zip')}
            />
            <TextInput
              label="Address 1"
              placeholder=""
              {...form.getInputProps('address1')}
            />
            <TextInput
              label="Address 2"
              placeholder=""
              {...form.getInputProps('address2')}
            />
            <Button type="submit">Order</Button>
          </form>
  
          <Paper withBorder p="md">
            <Title order={4}>Order Summary</Title>
            <Text>Total: {cart.totalPrice}</Text>
          </Paper>
        </SimpleGrid>
      </Container>
    );
  };
export default CheckoutPage;