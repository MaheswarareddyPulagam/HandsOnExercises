import styles from './CohortDetails.module.css';
export default function CohortDetails({cohort}){
 const color={color:cohort.status==='ongoing'?'green':'blue'};
 return(
  <div className={styles.box}>
   <h3 style={color}>{cohort.name}</h3>
   <dl>
    <dt>Started On</dt><dd>{cohort.start}</dd>
    <dt>Coach</dt><dd>{cohort.coach}</dd>
    <dt>Status</dt><dd>{cohort.status}</dd>
   </dl>
  </div>);
}