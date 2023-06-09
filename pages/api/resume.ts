import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "./components/api/resume.pdf");
  const fileStats = fs.statSync(filePath);

  res
    .status(200)
    .setHeader("Content-Type", "application/pdf")
    .setHeader("Content-Length", fileStats.size)
    .setHeader(
      "Content-Disposition",
      `attachment; filename="JohnAustinMooreResume.pdf"`
    );

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}
