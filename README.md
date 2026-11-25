# RetailPulse Order Operations

A small, intentionally multi-language sample repository for testing a GitHub credential-scanning pipeline.

> **Security notice:** Every credential-looking value in this repository is synthetic, non-functional test data. Do not replace these values with real secrets or use this repository for production.

## Project overview

RetailPulse is a fictional retail order-operations service. It contains small examples for order intake, inventory lookup, payment configuration, and service-to-service communication.

## Languages represented

- Python
- JavaScript
- TypeScript
- Java
- C#
- Go
- PHP

## Suggested scanner test coverage

The sample includes examples intended to exercise these labels:

| Expected label | Example location |
|---|---|
| PASSWORD | `config/dev_settings.py`, `services/checkout.js` |
| API_KEY | `services/catalog.ts` |
| ACCESS_TOKEN | `services/inventory.go` |
| PRIVATE_KEY | `config/signing_key.pem` |
| DATABASE_CREDENTIAL | `services/order_repository.java` |
| CLOUD_SECRET | `config/cloud_config.php` |
| ENCRYPTION_KEY | `services/receipt_crypto.cs` |
| AUTH_TOKEN | `services/session_service.py` |
| NO_CREDENTIAL | `tests/noise_samples.txt`, plus ordinary source comments and sample IDs |

The intended classification set is:

`0 = NO_CREDENTIAL` (active verification / discard gate), followed by:
`PASSWORD`, `API_KEY`, `ACCESS_TOKEN`, `PRIVATE_KEY`, `DATABASE_CREDENTIAL`, `CLOUD_SECRET`, `ENCRYPTION_KEY`, `AUTH_TOKEN`.

The scanner should treat index 0 as a valid negative classification: if a candidate is classified as `NO_CREDENTIAL`, it should be safely discarded rather than reported as a leak.

## Repository layout

```text
retailpulse-order-operations/
├── config/
├── docs/
├── services/
├── tests/
└── README.md
```

## Running

No application dependencies are required. These are small source/configuration samples intended for static scanning, not a deployable production service.

## Safe testing notes

- Use this repository only as a scanner test fixture.
- All values are deliberately fake and must remain non-functional.
- A detection is not proof that a credential is live.
- Do not test against repositories or secrets you do not own or have permission to scan.
