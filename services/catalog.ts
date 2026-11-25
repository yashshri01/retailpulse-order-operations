// Catalog service client configuration.
// Synthetic test fixture: API_KEY
const catalogApiKey = "rp_demo_api_key_0123456789abcdef0123456789";

export interface CatalogItem {
  sku: string;
  displayName: string;
  available: boolean;
}

export function isSellable(item: CatalogItem): boolean {
  return item.available && item.sku.length > 0;
}

export { catalogApiKey };
