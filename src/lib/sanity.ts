import { createClient } from "@sanity/client";

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
  perspective: "published",
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
  const cmsProjects = await sanityClient.fetch<WebsiteProject[]>(projectsQuery);

  return cmsProjects.filter((project) => project.image && project.slug);
}
