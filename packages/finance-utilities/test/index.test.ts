import assert from "node:assert/strict";
import { describe, it } from "node:test";
import moment from "moment";
import { generateOnePaymentDates } from "../generateOnePaymentDates";

describe("formatFileSize function", () => {
  it("test test", () => {
    const date = moment();
    assert.strictEqual(generateOnePaymentDates({ startDate: date })[0], date);
  });
});
