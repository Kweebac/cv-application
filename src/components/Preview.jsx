import "../styles/Preview.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Header } from "./Header";

export function Preview({ data }) {
  return (
    <div className="preview">
      <Header data={data.basicInfo} />

      <h1>Education</h1>
      <section className="educationSection">
        {data.education.map((place) => (
          <Education data={place} />
        ))}
      </section>

      <h1>Experience</h1>
      {data.experience.map((place) => (
        <Experience data={place} />
      ))}
    </div>
  );
}
