import "./ProgressCircles.css";

function ProgressCircles({ info }) {
  console.log(info);
  return <>
    {
      [...Array(16).keys()].map((num) => (
        <div className="circle"> {num} </div>
      ))
    }
  </>;
}

export default ProgressCircles;
