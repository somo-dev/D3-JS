import { useEffect, useRef, useState } from "react";
import { select } from "d3";

function Starter() {
  const [data, setData] = useState([12, 34, 56, 45, 20]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        "circle"
        // (update) =>
        //   update
        // .attr("class", "updated")
        // .attr("r", (value) => value)
        // .attr("cx", (value) => value * 3)
        // .attr("cy", (value) => value * 3)
        // (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 3)
      .attr("cy", (value) => value * 3)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((d) => d + 5))}>update</button>
      <button onClick={() => setData(data.filter((d) => d < 35))}>
        delete
      </button>
    </>
  );
}

export default Starter;
