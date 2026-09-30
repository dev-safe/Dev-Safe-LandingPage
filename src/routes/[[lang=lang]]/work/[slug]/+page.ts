import { error } from '@sveltejs/kit';
import en from '$lib/data/content/en';
import type { ProjectSlug } from '$lib/data/content';
import type { EntryGenerator, PageLoad } from './$types';

const slugs: ProjectSlug[] = [...en.products.projects, ...en.clientWork.projects].map((project) => project.slug);

// Every case study in both languages, so none depends on the crawler finding a link.
export const entries: EntryGenerator = () => slugs.flatMap((slug) => [{ slug }, { slug, lang: 'fr' }]);

export const load: PageLoad = ({ params }) => {
  const slug = slugs.find((s) => s === params.slug);
  if (!slug) error(404, 'Project not found');
  return { slug };
};
