import { api } from "../../../utils/api";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    api
      .post("nft/create", {
        ...req.body,
      })
      .then((response) => {
        res.status(response.status).end();
      })
      .catch((error) => {
        res.status(error.response.status).end();
      });
  } else {
    res.end();
  }
}
