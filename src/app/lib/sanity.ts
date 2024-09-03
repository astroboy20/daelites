import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "9ex5x1m7",
    useCdn:false,
})

const builder = imageUrlBuilder(client)
export const urlFor =(source:any)=>{
return builder.image(source)
}