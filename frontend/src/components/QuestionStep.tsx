import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type QuestionProps = {
  step: any;
  value: any;
  onSubmit: (field: string, value: any) => void;
};

export function QuestionStep({ step, value, onSubmit }: QuestionProps) {
  const [tempValue, setTempValue] = useState(value ?? "");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (step.inputType === "number") {
      if (tempValue < 0)
        return toast({
          variant: "destructive",
          title: "Valor inválido",
          description: "O valor não pode ser menor que 0",
        });
    }

    onSubmit(step.field, tempValue);
  };

  return (
    <div className="space-y-4">
      <Label className="text-lg font-bold">{step.prompt}</Label>

      {step.inputType === "number" || step.inputType === "text" ? (
        <Input
          type={step.inputType}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
      ) : step.inputType === "radio" || step.inputType === "radio_boolean" ? (
        <RadioGroup
          value={String(tempValue)}
          onValueChange={(val) => {
            if (step.inputType === "radio_boolean") {
              setTempValue(val);
            } else {
              setTempValue(parseInt(val));
            }
          }}
        >
          {step.options.map((opt: any) => (
            <div key={opt.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={String(opt.value)}
                id={String(opt.value)}
              />
              <Label htmlFor={String(opt.value)}>{opt.label}</Label>
            </div>
          ))}
        </RadioGroup>
      ) : null}

      <Button disabled={tempValue === ""} onClick={handleSubmit}>
        Confirmar
      </Button>
    </div>
  );
}
