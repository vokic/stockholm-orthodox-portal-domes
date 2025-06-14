
/**
 * Contentful REST API utility for Lovable integration.
 * Usage: Populate CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN below,
 * then hook up Contentful models (e.g. 'blogPost', 'event') as collections.
 * 
 * Read how to set up your Contentful space and get keys:
 * https://www.contentful.com/developers/docs/references/content-delivery-api/
 */

const CONTENTFUL_SPACE_ID = ''; // Fill in your Space ID or connect via secrets
const CONTENTFUL_ACCESS_TOKEN = ''; // Fill in your API Token or connect via secrets
const API_BASE = `https://cdn.contentful.com`;

function isConfigured() {
  return !!(CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN);
}

/**
 * Generic fetch from Contentful for a given model (content type).
 * @param {string} contentType Contentful content type ID
 */
export async function fetchContentfulEntries(contentType: string) {
  if (!isConfigured()) {
    console.warn('[Contentful] Not configured. Using fallback static data.');
    return null;
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
    console.error('[Contentful] Error:', e);
    return null;
  }
}

