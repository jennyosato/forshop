import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: "rzdbc3t0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-05",
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source: object) => {
  return builder.image(source);
};
