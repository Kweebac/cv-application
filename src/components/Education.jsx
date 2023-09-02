import "../styles/Education.css";

export function Education({ data }) {
  return (
    <div className="education">
      <div>
        <div>
          {data.startDate || "Unknown"} - {data.endDate || "present"}
        </div>
        <div>{data.location}</div>
      </div>
      <div>
        <h3>{data.school}</h3>
        <div>Bachelors in {data.degree}</div>
      </div>
    </div>
  );
}
