import { createClient } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from 'next'

const client = createClient({
  projectId: "rzdbc3t0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-05",
  token: process.env.SANITY_API_TOKEN
})

export default async function Addreview(req:NextApiRequest, res:NextApiResponse) {
   const {_id, user, text, rating} = req.body

   try{
    await client.create({
      _type: "review",
      product: {
        _type: "reference",
        _ref: _id,
      },
      user,
      text,
      rating
    })
   }catch(err){
    return res.status(500).json({message: `Sorry couldn't add your review ${err}`})
   }
  //  console.log("Review added")
   return res.status(200).json({message: "Review Added successfully"})
}
  

