import { StepNode } from "@/types";

export function AnswerSummary({
  facts,
  steps,
}: {
  facts: any;
  steps: StepNode[];
}) {
  return (
    <div className="bg-white text-start p-4">
      <h2 className="text-lg font-semibold mb-2">Resumo das Respostas</h2>
      <ul className="space-y-2 text-sm">
        {steps.map((step) => {
          const resposta = facts[step.field];
          if (resposta === undefined) return null;
          const label =
            step.options?.find((o) => o.value === resposta)?.label ?? resposta;
          return (
            <li key={step.field}>
              <strong>{step.prompt}</strong>{" "}
              <p>
                <b>R.:</b> {label}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
