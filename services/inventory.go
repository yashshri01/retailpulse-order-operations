package inventory

// Inventory service client settings.
// Synthetic test fixture: ACCESS_TOKEN
const inventoryAccessToken = "rp_demo_access_token_abcdef0123456789"

type StockItem struct {
    SKU       string
    Quantity  int
    Warehouse string
}

func IsInStock(item StockItem) bool {
    return item.Quantity > 0
}
