import * as wiki from "./wiki";

const ROOT = "content/mendoza-wiki";

export const getAllPages = () => wiki.getAllPages(ROOT);
export const readPage = (slug: string) => wiki.readPage(slug, ROOT);
export const getCategories = () => wiki.getCategories(ROOT);
export const findByName = (name: string) => wiki.findByName(name, ROOT);
export { expandWikilinks } from "./wiki";
export type { WikiPage, WikiCategory, WikiFrontmatter } from "./wiki";
