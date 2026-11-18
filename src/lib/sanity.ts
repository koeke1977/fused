import { createClient } from "@sanity/client";
import { projects as fallbackProjects } from "../data/projects";

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

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "ulj7mtyd";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-11-18",
  useCdn: true,
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

export async function getProjects(): Promise<WebsiteProject[]> {
  try {
    const cmsProjects = await sanityClient.fetch<WebsiteProject[]>(projectsQuery);

    if (cmsProjects.length > 0) {
      return cmsProjects.filter((project) => project.image && project.slug);
    }
  } catch (error) {
    console.error("Sanity-projecten konden niet worden opgehaald. De tijdelijke projectdata wordt gebruikt.", error);
  }

  return fallbackProjects.map((project) => ({ ...project }));
}
