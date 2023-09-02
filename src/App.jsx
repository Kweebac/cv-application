import "./App.css";
import { useState } from "react";

import { Form } from "./components/Form";
import { Preview } from "./components/Preview";

export function App() {
  const [data, setData] = useState({
    basicInfo: {
      name: "Josephine Meyers",
      email: "josephine.meyers@gmail.com",
      phone: "+44 24555 215521",
      address: "London, UK",
    },
    education: [
      {
        school: "London City University",
        degree: "Economics",
        startDate: "08/2020",
        endDate: undefined,
        location: "New York City, US",
      },
    ],
    experience: [
      {
        company: "Umbrella Inc.",
        position: "Software Engineer",
        startDate: "08/2020",
        endDate: undefined,
        location: "New York City, US",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      },
    ],
  });

  return (
    <>
      <Form data={data} setData={setData} />
      <Preview data={data} />
    </>
  );
}
