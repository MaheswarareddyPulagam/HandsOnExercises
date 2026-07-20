import CohortDetails from './CohortDetails';
const cohorts=[
{name:'React',start:'01-Jul-2026',coach:'John',status:'ongoing'},
{name:'Java',start:'10-Jun-2026',coach:'Mary',status:'completed'}
];
export default function App(){
 return <div>{cohorts.map((c,i)=><CohortDetails key={i} cohort={c}/>)}</div>;
}