function User({ number, img, name, hwCount, score, gradation }) {
  if (score >= 500) {
    gradation = <span className="ex">EX</span>;
  } else {
    gradation = <span className="vg">VG</span>;
  }
  console.log(score);
  return (
    <section>
      <div className="serial-number">{number}</div>
      <div className="student-info">
        <img alt="" src={img} />
        <div className="student-name"> {name}</div>
      </div>
      <div className="homeworks">
        {hwCount}
        <div className="score-info">{score}</div>
      </div>
      <div className="gradation">{gradation}</div>
    </section>
  );
}
export default User;
