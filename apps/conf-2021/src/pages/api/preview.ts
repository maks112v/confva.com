import { PageDocument, PageQuery, PageQueryVariables } from "#graphql";
import { createHttpLink } from "@apollo/client";
import { graphClient } from "@data/graphcms";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const link = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPH_CMS,
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_PREVIEW_TOKEN}`,
    },
  });

  graphClient.setLink(link);

  if (req?.query?.type === "page") {
    const pageRes = await graphClient.query<PageQuery, PageQueryVariables>({
      query: PageDocument,
      variables: {
        slug: req.query.slug as string,
      },
    });

    if (!pageRes.data.page) {
      return res.status(404).json({ message: "Page Not Found" });
    }

    res.setPreviewData({
      slug: pageRes.data.page?.slug,
    });

    res.writeHead(307, {
      Location: `/${pageRes?.data?.page?.slug
        ?.split("/")
        ?.filter((item) => !!item)}`,
    });
    res.end();
  } else {
    throw new Error("Invalid Type");
  }
}
