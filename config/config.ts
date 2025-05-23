// config.ts
import algoliasearch from "algoliasearch";

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_ADMIN!,
);

export const searchClientIndex = searchClient.initIndex(
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_INDEX!,
);

export const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
