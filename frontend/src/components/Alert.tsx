import { FC } from "react";
import { AlertNode } from "../types";
import { AlertTriangleIcon } from "lucide-react";
import { Card } from "./ui/card";

/**
 * Exibe um alerta suave, centralizado na tela.
 * Sobrepõe o conteúdo com um leve escurecimento de fundo.
 */
interface Props {
  node: AlertNode;
}

const Alert: FC<Props> = ({ node }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray/1 backdrop-blur-sm">
    <Card className="w-full max-w-md p-6 space-y-4 shadow-xl">
      <div className="flex items-center gap-3">
        <AlertTriangleIcon className="shrink-0 text-yellow-500" />
        <h2 className="text-lg font-semibold">{node.title}</h2>
      </div>

      <p className="text-sm text-muted-foreground">{node.description}</p>
    </Card>
  </div>
);

export default Alert;
