package com.retailpulse.orders;

// Example JDBC repository configuration.
// Synthetic test fixture: DATABASE_CREDENTIAL
public class OrderRepository {
    private static final String JDBC_URL =
        "jdbc:postgresql://db.demo.invalid:5432/retailpulse";

    private static final String DB_USER = "orders_demo";
    private static final String DB_PASSWORD =
        "FakeDbPassword_OnlyForScanner!";

    public String connectionSummary() {
        return "Configured repository for " + JDBC_URL + " as " + DB_USER;
    }
}
