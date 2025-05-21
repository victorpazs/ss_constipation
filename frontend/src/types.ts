export type Facts = Record<string, any>;

export type Rule = {
  id: string;
  description: string;
  condition: (facts: Facts) => boolean;
  action: (facts: Facts) => void;
};

export type StepNode = {
  id: string;
  inputType: "number" | "text" | "radio";
  prompt: string;
  field: string;
  options?: { value: number; label: string }[];
};
