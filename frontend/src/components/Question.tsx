import { FC, useEffect, useState } from "react";
import { QuestionNode, QuestionOption } from "../types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface Props {
  node: QuestionNode;
  onAnswer: (ans: string | number) => void;
}

const Question: FC<Props> = ({ node, onAnswer }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => setValue(""), [node.id]);

  /* converte string devolvida pelo rádio p/ tipo original */
  const toOriginal = (v: string): string | number => {
    if (!node.options) return isNaN(Number(v)) ? v : Number(v);

    const opt = node.options.find((o) => String(o.value) === v);
    return opt ? opt.value : v;
  };

  const send = () => onAnswer(toOriginal(value));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{node.title}</h2>
      <p>{node.prompt}</p>

      {node.inputType === "radio" && node.options && node.options.length > 0 ? (
        <RadioGroup
          value={value}
          onValueChange={setValue}
          className="space-y-2"
        >
          {node.options.map((o: QuestionOption) => (
            <div key={o.value} className="flex items-center space-x-2">
              <RadioGroupItem value={String(o.value)} id={String(o.value)} />
              <Label htmlFor={String(o.value)} className="cursor-pointer">
                {o.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <Input
          type={node.inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite um valor…"
        />
      )}

      <Button onClick={send} disabled={!value}>
        Avançar
      </Button>
    </div>
  );
};

export default Question;
