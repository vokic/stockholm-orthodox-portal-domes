
/**
 * Contentful REST API utility for Lovable integration.
 * Usage: Populate CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN below,
 * then hook up Contentful models (e.g. 'blogPost', 'event') as collections.
 *
 * Read how to set up your Contentful space and get keys:
 * https://www.contentful.com/developers/docs/references/content-delivery-api/
 */

// === POPULATED BY USER ===
const CONTENTFUL_SPACE_ID = 'mtl81t81i86c';
const CONTENTFUL_ACCESS_TOKEN = 'V8nJcpHC_zBJJDQ8APcQU1WcjoagLVy3oOnG206m0hY';
// =========================

const API_BASE = `https://cdn.contentful.com`;

function isConfigured() {
  return !!(CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN);
}

// Helper for resolving Contentful asset URL for media fields
export function resolveContentfulAsset(includes: any, assetId: string) {
  if (!includes || !Array.isArray(includes.Asset)) return undefined;
  const file = includes.Asset.find((a: any) => a.sys.id === assetId);
  if (file && file.fields && file.fields.file && file.fields.file.url) {
    return file.fields.file.url.startsWith('http')
      ? file.fields.file.url
      : `https:${file.fields.file.url}`;
  }
  return undefined;
}

/**
 * Generic fetch from Contentful for a given model (content type).
 * @param {string} contentType Contentful content type ID
 */
export async function fetchContentfulEntries(contentType: string) {
  if (!isConfigured()) {
    throw new Error('[Contentful] Not configured.');
  }
  try {
    const res = await fetch(
      `${API_BASE}/spaces/${CONTENTFUL_SPACE_ID}/entries?content_type=${contentType}&include=2`,
      {
        headers: { Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}` },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch Contentful data');
    const { items, includes } = await res.json();
    return { items, includes };
  } catch (e) {
    throw e;
  }
}
