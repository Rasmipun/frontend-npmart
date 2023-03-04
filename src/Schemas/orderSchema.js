import {  z } from "zod";

export const OrderSchema = z.object({
    body: z.object({
        name: z.number().min(1, "name is required"),
        country: z.string().min(1, "Country is required"),
        state: z.string().min(1, "State is required"),
        address1: z.string().min(1, "Address is required"),
        address2: z.string.nullable(),
        city: z.string().min(1, "city is required"),
        zip: z.string().min(1, "zip is required"),
        
    })
})