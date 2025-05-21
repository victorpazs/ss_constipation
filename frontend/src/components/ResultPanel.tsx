import { Button } from "@/components/ui/button";
import type { StepNode } from "../types";
import { AnswerSummary } from "./AnswerSummary";

export function ResultPanel({
  facts,
  triggeredRules,
  onRestart,
  steps,
}: {
  facts: any;
  triggeredRules: string[];
  onRestart: () => void;
  steps: StepNode[];
}) {
  if (facts.alerta) {
    return (
      <section className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex flex-col items-center justify-center p-8 bg-red-50 rounded shadow-md text-center space-y-4">
          <h2 className="text-lg font-semibold text-red-700">
            Encaminhar Paciente
          </h2>
          <p className="text-sm text-red-600 max-w-md">
            Identificamos sinais de alerta durante a triagem. Por precaução,
            este paciente deve ser encaminhado a um profissional de saúde ou
            serviço especializado.
          </p>
          <Button variant="outline" onClick={onRestart}>
            Recomeçar
          </Button>
        </div>
        <AnswerSummary facts={facts} steps={steps} />
      </section>
    );
  }

  if (facts.tratamento === "nao_farmacologico") {
    return (
      <div className="space-y-6">
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-lg font-semibold">
            Tratamento Não Farmacológico
          </h2>
          <ul className="list-disc ml-6">
            <li>Ingestão de líquidos: 1,5 – 2 L/dia</li>
            <li>
              Fibras: 20 – 35 g/dia (adultos); 5 – 10 g/dia (crianças ≥ 2 anos)
            </li>
            <li>Exercícios físicos regulares</li>
            <li>Estímulo à evacuação (horários e postura)</li>
          </ul>

          <h2 className="text-lg font-semibold mt-4">
            Tratamento Farmacológico
          </h2>
          <ul className="list-disc ml-6">
            <li>Laxantes formadores de massa</li>
            <li>Surfactantes/emolientes</li>
            <li>Agentes osmóticos</li>
            <li>Laxantes estimulantes/irritantes</li>
          </ul>
          <p className="text-sm italic">
            Usar até alívio, por no máximo 7 dias.
          </p>
        </div>

        <AnswerSummary facts={facts} steps={steps} />

        <div className="text-center">
          <Button variant="outline" onClick={onRestart}>
            Recomeçar
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
