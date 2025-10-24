export function slugify(text: string): string {
  return text
    .toLowerCase() // make lowercase
    .trim() // remove leading/trailing spaces
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/[^\w\-]+/g, ""); // remove non-word chars (like & or .)
}