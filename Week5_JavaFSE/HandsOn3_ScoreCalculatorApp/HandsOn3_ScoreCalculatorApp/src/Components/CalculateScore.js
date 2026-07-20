import '../Stylesheets/mystyle.css';
export default function CalculateScore({name,school,total,goal}){
 const average=(goal/total*100).toFixed(2);
 return(
  <div className='card'>
   <h2>Student Score Calculator</h2>
   <p><b>Name:</b> {name}</p>
   <p><b>School:</b> {school}</p>
   <p><b>Total Marks:</b> {total}</p>
   <p><b>Marks Scored:</b> {goal}</p>
   <h3>Average: {average}%</h3>
  </div>
 );
}
