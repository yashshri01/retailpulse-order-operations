namespace RetailPulse.Receipts;

// Receipt signing/encryption configuration.
// Synthetic test fixture: ENCRYPTION_KEY
public class ReceiptCrypto
{
    private const string DemoEncryptionKey =
        "FAKE_ENCRYPTION_KEY_0123456789ABCDEF0123456789ABCDEF";

    public string GetKeyStatus()
    {
        return string.IsNullOrEmpty(DemoEncryptionKey)
            ? "missing"
            : "configured-for-scanner-demo";
    }
}
