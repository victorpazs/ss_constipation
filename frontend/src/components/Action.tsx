import { FC } from 'react'
import { Button } from './ui/button';
import { Card } from './ui/card';

type ActionNode = { title: string; steps?: string[]; order?: string[]; note?: string; next?: string }
interface Props { node: ActionNode; onNext: () => void }

const Action: FC<Props> = ({ node, onNext }) => (
  <Card className="space-y-4">
    <h2 className="text-xl font-bold">{node.title}</h2>
    <ul className="list-disc pl-5">
      {(node.steps || node.order)?.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    {node.note && <p className="italic">{node.note}</p>}
    <Button onClick={onNext}>Próximo</Button>
  </Card>
)

export default Action