import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <main className="max-w-xl mx-auto py-10 px-4 space-y-6 flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-3xl font-bold text-center">
        Bem-vindo ao Sistema de Avaliação de Constipação
      </h1>
      <p className="text-center text-lg">
        Este sistema ajudará a avaliar casos de constipação intestinal.
      </p>
      <Button className="mt-6 px-8">
        <Link to="/questionario">Iniciar Questionário</Link>
      </Button>
      <p className="text-center text-xs">
        Victor Paz da Silva, Willian Schwantz, Lucas Teloeken, Vinicius Mohr
      </p>
    </main>
  );
}
export default WelcomePage;
