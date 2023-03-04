import { Container, HoverCard, Paper, SimpleGrid, Title } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import Product from "../components/Product.jsx"
import { api } from "../utils/api.js"


const LandingPage = () => {
  const { data: response } = useQuery({
    queryKey: ["products", "all"],
    queryFn: api.products.getAll,
  })
  return (
    <Container size='xl' mt='sm'>
      <Title mb='sm'>New Arrivals</Title>
      
      <SimpleGrid 
      
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {response?.data?.products?.map((product, index) => (
          <Product key={`product-${index}`} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
export default LandingPage
