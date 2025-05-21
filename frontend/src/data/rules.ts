import { Rule, Facts } from "../types";

export const rules: Rule[] = [
  {
    id: "avaliar_duracao",
    description:
      "Se duração dos sintomas ≤ 2 semanas, prosseguir para avaliação da Escala de Bristol",
    condition: (facts: Facts) => facts.duracaoSemanas <= 2,
    action: (facts: Facts) => {
      facts.etapa = "step2";
    },
  },
  {
    id: "duracao_prolongada",
    description: "Se duração dos sintomas > 2 semanas, encaminhar",
    condition: (facts: Facts) => facts.duracaoSemanas > 2,
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_bristol",
    description: "Se tipo de fezes Bristol ≤ 2, prosseguir",
    condition: (facts: Facts) =>
      facts.bristolType <= 2 && facts.etapa === "step2",
    action: (facts: Facts) => {
      facts.etapa = "step3";
    },
  },
  {
    id: "bristol_inadequado",
    description: "Se tipo Bristol > 2, encaminhar",
    condition: (facts: Facts) =>
      facts.bristolType > 2 && facts.etapa === "step2",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_dor_leve",
    description: "Se dor abdominal leve, prosseguir",
    condition: (facts: Facts) =>
      facts.dorLeve === "sim" && facts.etapa === "step3",
    action: (facts: Facts) => {
      facts.etapa = "step4";
    },
  },
  {
    id: "dor_abdominal_intensa",
    description: "Se dor abdominal não é leve, encaminhar",
    condition: (facts: Facts) =>
      facts.dorLeve === "nao" && facts.etapa === "step3",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_estresse",
    description: "Se sintomas ocorrem sob estresse, prosseguir",
    condition: (facts: Facts) =>
      facts.situacional === "sim" && facts.etapa === "step4",
    action: (facts: Facts) => {
      facts.etapa = "step5";
    },
  },
  {
    id: "sem_relacao_estresse",
    description: "Se não ocorre sob estresse, encaminhar",
    condition: (facts: Facts) =>
      facts.situacional === "nao" && facts.etapa === "step4",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_alimentacao",
    description: "Se há relação com alimentação irregular, prosseguir",
    condition: (facts: Facts) =>
      facts.relacaoAlimentacao === "sim" && facts.etapa === "step5",
    action: (facts: Facts) => {
      facts.etapa = "step6";
    },
  },
  {
    id: "sem_relacao_alimentar",
    description: "Se não há relação com alimentação, encaminhar",
    condition: (facts: Facts) =>
      facts.relacaoAlimentacao === "nao" && facts.etapa === "step5",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_plenitude",
    description: "Se há plenitude gástrica ou desconforto, prosseguir",
    condition: (facts: Facts) =>
      facts.plenitude === "sim" && facts.etapa === "step6",
    action: (facts: Facts) => {
      facts.etapa = "step7";
    },
  },
  {
    id: "sem_plenitude",
    description: "Se não há plenitude gástrica, encaminhar",
    condition: (facts: Facts) =>
      facts.plenitude === "nao" && facts.etapa === "step6",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_perfil",
    description:
      "Se paciente não é especial (criança, idoso frágil, gestante, lactante), prosseguir",
    condition: (facts: Facts) =>
      facts.pacienteEspecial === "nao" && facts.etapa === "step7",
    action: (facts: Facts) => {
      facts.etapa = "step8";
    },
  },
  {
    id: "paciente_especial",
    description:
      "Se paciente é criança, idoso, gestante ou lactante, encaminhar",
    condition: (facts: Facts) =>
      facts.pacienteEspecial === "sim" && facts.etapa === "step7",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_condicao_clinica",
    description: "Se não há condição clínica grave, prosseguir",
    condition: (facts: Facts) =>
      facts.condicaoClinica === "nao" && facts.etapa === "step8",
    action: (facts: Facts) => {
      facts.etapa = "step9";
    },
  },
  {
    id: "condicao_clinica_grave",
    description: "Se há condição clínica grave, encaminhar",
    condition: (facts: Facts) =>
      facts.condicaoClinica === "sim" && facts.etapa === "step8",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
  {
    id: "avaliar_uso_medicamentos",
    description:
      "Se não usa laxantes ou constipantes, recomendar tratamento não farmacológico",
    condition: (facts: Facts) =>
      facts.usoMedicamentos === "nao" && facts.etapa === "step9",
    action: (facts: Facts) => {
      facts.tratamento = "nao_farmacologico";
      facts.etapa = "fim";
    },
  },
  {
    id: "uso_de_medicamentos",
    description: "Se usa laxantes ou medicamentos constipantes, encaminhar",
    condition: (facts: Facts) =>
      facts.usoMedicamentos === "sim" && facts.etapa === "step9",
    action: (facts: Facts) => {
      facts.alerta = true;
    },
  },
];
