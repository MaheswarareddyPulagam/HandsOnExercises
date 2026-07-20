import React from 'react';

const players=[
{name:'Virat',score:95},{name:'Rohit',score:82},{name:'Gill',score:68},
{name:'Rahul',score:74},{name:'Pant',score:61},{name:'Hardik',score:77},
{name:'Jadeja',score:55},{name:'Bumrah',score:48},{name:'Shami',score:72},
{name:'Kuldeep',score:64},{name:'Siraj',score:80}
];

function ListOfPlayers(){
  const low=players.filter(p=>p.score<70);
  return (
    <div>
      <h2>All Players</h2>
      <ul>{players.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul>
      <h2>Players Below 70</h2>
      <ul>{low.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul>
    </div>
  );
}

function IndianPlayers(){
  const team=["Virat","Rohit","Gill","Rahul","Pant","Hardik"];
  const odd=team.filter((_,i)=>i%2===0);
  const even=team.filter((_,i)=>i%2===1);
  const t20=["Virat","Rohit","Surya"];
  const ranji=["Jaiswal","Sarfaraz","Rinku"];
  const merged=[...t20,...ranji];
  return (
    <div>
      <h2>Odd Team</h2><p>{odd.join(", ")}</p>
      <h2>Even Team</h2><p>{even.join(", ")}</p>
      <h2>Merged Players</h2>
      <ul>{merged.map((p,i)=><li key={i}>{p}</li>)}</ul>
    </div>
  );
}

export default function App(){
  const flag=true;
  return <div style={{padding:"20px"}}>{flag?<ListOfPlayers/>:<IndianPlayers/>}</div>;
}
