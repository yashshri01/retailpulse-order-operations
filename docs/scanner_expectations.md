# Scanner expectations

This repository is designed to contain both positive and negative examples.

## Expected positive classes

- PASSWORD: development and checkout settings
- API_KEY: catalog client
- ACCESS_TOKEN: inventory client
- PRIVATE_KEY: deliberately invalid PEM-shaped fixture
- DATABASE_CREDENTIAL: order repository
- CLOUD_SECRET: cloud configuration
- ENCRYPTION_KEY: receipt crypto configuration
- AUTH_TOKEN: session service

## Expected negative examples

The `tests/noise_samples.txt` file contains IDs, URLs, placeholders, masked values, and ordinary text. These should be filtered as `NO_CREDENTIAL` when they do not contain a genuine credential value.

## Important

The repository is a static scanner fixture. A rule-based detector may produce different results depending on its patterns and confidence thresholds. The expected labels are test intent, not a guarantee that every scanner will classify every line identically.
