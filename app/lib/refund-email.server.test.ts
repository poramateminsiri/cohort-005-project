import { describe, it, expect } from "vitest";
import { buildRefundRequestEmail } from "./refund-email.server";

describe("buildRefundRequestEmail", () => {
  const learner = {
    learnerName: "Liam",
    learnerEmail: "liam@example.com",
    courseTitle: "Introduction to TypeScript",
  };

  it("formats a $0 purchase as money, not as a free course", () => {
    const email = buildRefundRequestEmail({ ...learner, amount: 0 });

    expect(email.body).toContain("The refund is for $0.00, the amount you paid.");
    expect(email.body).not.toContain("Free");
  });

  it("states the amount paid for a paid purchase", () => {
    const email = buildRefundRequestEmail({ ...learner, amount: 7900 });

    expect(email.body).toContain("The refund is for $79.00, the amount you paid.");
  });
});
