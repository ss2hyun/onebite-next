import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/"); // index 경로 다시 생성
    return res.json({ revalidate: true }); // 생성되면 true
  } catch (err) {
    console.error(err);
    return res.status(500).send("Revalidate Failed");
  }
}
