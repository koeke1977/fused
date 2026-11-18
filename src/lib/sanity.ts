import { createClient } from "@sanity/client";
import { services as fallbackServices } from "../data/services";
import { site as fallbackSite } from "../data/site";

export interface ProjectGalleryImage {
  image: string;
  alt: string;
}

export interface WebsiteProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  year?: number;
  gallery?: ProjectGalleryImage[];
}

export interface WebsiteService {
  slug: string;
  title: string;
  summary: string;
  detailsTitle?: string;
  details?: string[];
}

export interface WebsiteSettings {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroIntro: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroBottomLine: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesTitleAccent: string;
  servicesIntro: string;
  projectsEyebrow: string;
  projectsTitle: string;
  contactEyebrow: string;
  contactTitle: string;
  contactCta: string;
  slogan: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
}

const defaultSettings: WebsiteSettings = {
  heroEyebrow: "SWITCH ON QUALITY",
  heroTitle: "Powerful techniek.",
  heroTitleAccent: "Perfect afgewerkt.",
  heroIntro: "Elektriciteit, slimme technologie en verlichting. Fused brengt alles samen in één doordachte installatie.",
  heroPrimaryCta: "Bespreek je project",
  heroSecondaryCta: "Bekijk realisaties",
  heroBottomLine: "Techniek waarop je kan vertrouwen",
  servicesEyebrow: "WAT WE DOEN",
  servicesTitle: "Alles begint met",
  servicesTitleAccent: "de juiste connectie.",
  servicesIntro: "Van een betrouwbare elektrische basis tot slimme oplossingen die je dagelijks leven makkelijker maken.",
  projectsEyebrow: "ONS WERK",
  projectsTitle: "Gerealiseerd door Fused.",
  contactEyebrow: "KLAAR OM TE STARTEN?",
  contactTitle: "Jouw plannen. Onze expertise.",
  contactCta: "Vertel ons erover",
  slogan: fallbackSite.slogan,
  email: fallbackSite.email,
  phoneDisplay: fallbackSite.phoneDisplay,
  phoneHref: fallbackSite.phoneHref,
};

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "ulj7mtyd";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-11-18",
  perspective: "published",
  // Bypass Sanity's CDN during static builds so newly published content is fetched from the API.
  useCdn: false,
});

const projectsQuery = `*[_type == "project" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  "slug": slug.current,
  title,
  category,
  summary,
  description,
  "image": coverImage.asset->url,
  "imageAlt": coverImageAlt,
  featured,
  year,
  "gallery": gallery[]{
    "image": asset->url,
    "alt": alt
  }
}`;

const servicesQuery = `*[_type == "service" && isVisible != false && defined(slug.current)] | order(sortOrder asc, title asc) {
  "slug": slug.current,
  title,
  summary,
  detailsTitle,
  details
}`;

const settingsQuery = `*[_type == "siteSettings"][0] {
  heroEyebrow, heroTitle, heroTitleAccent, heroIntro, heroPrimaryCta,
  heroSecondaryCta, heroBottomLine, servicesEyebrow, servicesTitle,
  servicesTitleAccent, servicesIntro, projectsEyebrow, projectsTitle,
  contactEyebrow, contactTitle, contactCta, slogan, email, phoneDisplay, phoneHref
}`;

export async function getProjects(): Promise<WebsiteProject[]> {
  const cmsProjects = await sanityClient.fetch<WebsiteProject[]>(projectsQuery);
  return cmsProjects.filter((project) => project.image && project.slug);
}

export async function getServices(): Promise<WebsiteService[]> {
  const cmsServices = await sanityClient.fetch<WebsiteService[]>(servicesQuery);
  if (cmsServices.length > 0) return cmsServices;
  return fallbackServices.map((service) => ({ ...service, details: [...("details" in service ? service.details : [])] }));
}

export async function getWebsiteSettings(): Promise<WebsiteSettings> {
  const cmsSettings = await sanityClient.fetch<Partial<WebsiteSettings> | null>(settingsQuery);
  return { ...defaultSettings, ...cmsSettings };
}
