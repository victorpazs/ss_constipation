import { useEffect, useState } from "react";
import { rules } from "../data/rules";
import { runInferenceEngine } from "../engine/inference";
import { QuestionStep } from "../components/QuestionStep";
import { ResultPanel } from "../components/ResultPanel";
import { Toaster } from "@/components/ui/toaster";
import startSteps from "../data/steps.json";
import type { StepNode } from "../types";

function QuestionsPage() {
  const [facts, setFacts] = useState<any>({ etapa: "step1" });
  const [triggered, setTriggered] = useState<string[]>([]);
  const steps = startSteps as StepNode[];
  const currentStep = steps.find((s) => s.id === facts.etapa);

  function handleSubmit(field: string, value: any) {
    const updated = { ...facts, [field]: value };
    const result = runInferenceEngine(rules, updated);
    setFacts(result.facts);
    setTriggered(result.triggeredRules);
  }

  function handleRestart() {
    setFacts({ etapa: "step1" });
    setTriggered([]);
  }

  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6">
      {facts.etapa !== "fim" && !facts.alerta && currentStep && (
        <QuestionStep
          key={currentStep.id}
          step={currentStep}
          value={facts[currentStep.field]}
          onSubmit={handleSubmit}
        />
      )}

      <ResultPanel
        facts={facts}
        triggeredRules={triggered}
        onRestart={handleRestart}
        steps={steps}
      />

      <Toaster />
    </main>
  );
}

export default QuestionsPage;
