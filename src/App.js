import "./App.css";
import User from "./components/User";

function App(props) {
  const usersList = props.users.map((item) => (
    <User
      name={item.name}
      img={item.img}
      hwCount={item.homeworks.length}
      score={item.homeworks.reduce((p, c) => p + c, 0)}
    />
  ));
  usersList.sort((a, b) => b.props.score - a.props.score);
  return (
    <div className="wrapper">
      <div className="title">
        <p>Рейтинг группы</p>
      </div>
      <div className="subtitle">
        <h2>Cтудент </h2>
        <h2> Домашки/баллы</h2>
      </div>

      {usersList}
    </div>
  );
}

// function App(props) {
//   return (
//     <div className="wrapper">
//       <div className="title">
//         <p>Рейтинг группы</p>
//       </div>
//       <div className="subtitle">
//         <h2>Cтудент </h2>
//         <h2> Домашки/баллы</h2>
//       </div>
//       {props.users.map((item) => {
//         let number = props.users.indexOf(item) + 1;
//         const userName = item.name;
//         const art = item.img;
//         let hwCount = item.homeworks.length;

//         let countScore = item.homeworks.reduce((a, b) => a + b);

//         let grade;

//         if (countScore >= item.homeworks.length * 85) {
//           grade = <span className="ex">EX</span>;
//         } else {
//           grade = <span className="vg">VG</span>;
//         }
//         return (
//           <User
//             number={number}
//             name={userName}
//             img={art}
//             hwCount={hwCount}
//             score={countScore}
//             gradation={grade}
//           />
//         );
//       })}
//     </div>
//   );
// }

export default App;
