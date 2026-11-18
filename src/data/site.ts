import { legal } from "./legal";

export const site = {
  name: legal.brandName,
  slogan: "Switch on Quality",
  email: legal.email,
  phoneDisplay: legal.phoneDisplay,
  phoneHref: legal.phoneHref,
  managingDirector: "Frederik",
  description: "Elektriciteitswerken, domotica en verlichting voor particuliere woningen."
} as const;
