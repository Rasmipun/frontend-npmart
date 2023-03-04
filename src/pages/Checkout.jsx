import { Button, Container, createStyles, Paper, SimpleGrid, TextInput, Title } from "@mantine/core";
import { zodResolver } from "@mantine/form";
import { useMutation} from "@tanstack/react-query";
import { OrderSchema } from "../Schemas/orderSchema";

const useStyles = createStyles ({
    form: {
        gridColumn: "1/3",
        "& > *": {
            marginBottom: 5
        }
    }
})

const CheckoutPage = () => {
    const {classes} = useStyles()
    const {cart} = useCart()

   

    const orderMutation = useMutation({
        mutationFn: api.orders.create,
        onSuccess: () => {
          toast.success("Order Success")
         console.log("success")
        },
        onError: (error) => {
          toast.error("error deleting order")
          console.log(error);
        },
      });
    
      const form = useForm ({
       initialValues: {
            name: "",
            address1: "",
            address2: "",
            state: "",
            country: "",
            zip: "",
            city: "",
            
        },
        validate: zodResolver(OrderSchema)
    })
   
const handleSubmit = (values) => {
    const submitValues = {
        ...values,
        items: cart.cartItems
    }
    orderMutation.mutate(submitValues)
}

  return (
    <Container>
        <SimpleGrid cols={3}>
            <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
            <Title>Checkout</Title>

            <TextInput {...form.getInputProps("name")}  label='Name' />
            <TextInput {...form.getInputProps("address1")} label='Address 1' />
            <TextInput  {...form.getInputProps("address")}label='Address 2' />
            <TextInput  {...form.getInputProps("city")}label='City' />
            <TextInput  {...form.getInputProps("state")}label='State' />
            <TextInput  {...form.getInputProps("zip")}label='Zip' />
            <TextInput  {...form.getInputProps("country")}label='Country' />
            <Button>Order</Button>
            </form>

            <Paper withBorder p='md'>
                <Title order={4}>Order Summary</Title>
                
            </Paper>
        </SimpleGrid>
    </Container>
  )
  }
export default CheckoutPage;