import { createAuth } from "@/convex/auth";
import { getToken as getTokenNextJs } from "@convex-dev/better-auth/nextjs";

export const getToken = () => {
  return getTokenNextJs(createAuth);
};
