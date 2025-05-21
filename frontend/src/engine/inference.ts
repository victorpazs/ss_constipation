import { Rule, Facts } from "../types";

export function runInferenceEngine(rules: Rule[], facts: Facts) {
  const triggeredRules: string[] = [];
  const appliedRules = new Set<string>();
  let somethingChanged = true;

  while (somethingChanged) {
    somethingChanged = false;

    for (const rule of rules) {
      if (!appliedRules.has(rule.id) && rule.condition(facts)) {
        const snapshot = JSON.stringify(facts);
        rule.action(facts);
        appliedRules.add(rule.id);
        if (JSON.stringify(facts) !== snapshot) {
          triggeredRules.push(rule.description);
          somethingChanged = true;
        }
      }
    }
  }

  return { facts, triggeredRules };
}
