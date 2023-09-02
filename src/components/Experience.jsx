import "../styles/Experience.css";

export function Experience({ data }) {
  return (
    <div className="experience">
      <div>
        <div>
          {data.startDate || "Unknown"} - {data.endDate || "present"}
        </div>
        <div>{data.location}</div>
      </div>
      <div>
        <h3>{data.company}</h3>
        <div>{data.position}</div>
        <div className="description">{data.description}</div>
      </div>
    </div>
  );
}
