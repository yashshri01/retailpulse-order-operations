"""Session helper for the fictional RetailPulse application."""

# Synthetic test fixture: AUTH_TOKEN
DEFAULT_AUTH_TOKEN = "Bearer demo_auth_token_0123456789abcdef0123456789"

def build_session_summary(user_id: str) -> dict:
    # A user ID is not an authentication token.
    return {
        "user_id": user_id,
        "status": "active",
        "service": "retailpulse-session"
    }
