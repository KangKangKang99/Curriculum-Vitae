import { NuxtPage } from "nuxt/schema";

interface IRoutes {
  name: String;
  path: String;
}

export const LANDING: IRoutes = {
  name: "landing",
  path: "/landing",
};
