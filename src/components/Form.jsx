import { useState } from "react";
import "../styles/Form.css";

function BasicInfo({ data, setData }) {
  return (
    <section>
      <h1>Personal details</h1>
      <label>
        Full name
        <input
          type="text"
          value={data.basicInfo.name}
          onChange={(e) =>
            setData({ ...data, basicInfo: { ...data.basicInfo, name: e.target.value } })
          }
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={data.basicInfo.email}
          onChange={(e) =>
            setData({ ...data, basicInfo: { ...data.basicInfo, email: e.target.value } })
          }
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          value={data.basicInfo.phone}
          onChange={(e) =>
            setData({ ...data, basicInfo: { ...data.basicInfo, phone: e.target.value } })
          }
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={data.basicInfo.address}
          onChange={(e) =>
            setData({ ...data, basicInfo: { ...data.basicInfo, address: e.target.value } })
          }
        />
      </label>
    </section>
  );
}

function EducationFormInput({ data, setData, placeKey }) {
  const index = data.education.map((item) => item.key).indexOf(placeKey);

  return (
    <div>
      <label>
        School
        <input
          type="text"
          value={data.education[index].school}
          onChange={(e) => {
            setData({
              ...data,
              education: data.education.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, school: e.target.value };
              }),
            });
          }}
        />
      </label>
      <label>
        Degree
        <input
          type="text"
          value={data.education[index].degree}
          onChange={(e) => {
            setData({
              ...data,
              education: data.education.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, degree: e.target.value };
              }),
            });
          }}
        />
      </label>
      <div className="dates">
        <label>
          Start date
          <input
            type="date"
            value={data.education[index].startDate}
            onChange={(e) => {
              setData({
                ...data,
                education: data.education.map((item, itemIndex) => {
                  if (index !== itemIndex) return item;
                  return { ...item, startDate: e.target.value };
                }),
              });
            }}
          />
        </label>
        <label>
          End date
          <input
            type="date"
            value={data.education[index].endDate}
            onChange={(e) => {
              setData({
                ...data,
                education: data.education.map((item, itemIndex) => {
                  if (index !== itemIndex) return item;
                  return { ...item, endDate: e.target.value };
                }),
              });
            }}
          />
        </label>
      </div>
      <label>
        Location
        <input
          type="text"
          value={data.education[index].location}
          onChange={(e) => {
            setData({
              ...data,
              education: data.education.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, location: e.target.value };
              }),
            });
          }}
        />
      </label>
    </div>
  );
}

function EducationListItem({ data, setData, place }) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="box">
        <div>{place.school}</div>
        <svg
          onClick={() => setHidden(!hidden)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>Edit</title>
          <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
        </svg>
        <svg
          onClick={() =>
            setData({
              ...data,
              education: data.education.filter((item) => item.key !== place.key),
            })
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>Remove</title>
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      </div>
      <div className={hidden ? "hidden" : ""}>
        <EducationFormInput data={data} setData={setData} placeKey={place.key} />
      </div>
    </>
  );
}

function EducationForm({ data, setData }) {
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <section>
      <h1>Education</h1>
      {data.education.map((place) => {
        return (
          <EducationListItem key={place.key} data={data} setData={setData} place={place} />
        );
      })}
      <button
        disabled={disabled ? true : false}
        onClick={(e) => {
          e.preventDefault();
          setHidden(false);
          setDisabled(true);

          setData({
            ...data,
            education: [
              ...data.education,
              {
                key: crypto.randomUUID(),
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                location: "",
              },
            ],
          });
        }}
      >
        Add
      </button>
      <div id="endButtonContainer" className={hidden ? "hidden" : ""}>
        <EducationFormInput
          data={data}
          setData={setData}
          placeKey={data.education[data.education.length - 1].key}
        />
        <button
          className="end"
          onClick={(e) => {
            e.preventDefault();
            setHidden(true);
            setDisabled(false);
          }}
        >
          Save
        </button>
      </div>
    </section>
  );
}

function ExperienceFormInput({ data, setData, placeKey }) {
  const index = data.experience.map((item) => item.key).indexOf(placeKey);

  return (
    <div>
      <label>
        Company
        <input
          type="text"
          value={data.experience[index].company}
          onChange={(e) => {
            setData({
              ...data,
              experience: data.experience.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, company: e.target.value };
              }),
            });
          }}
        />
      </label>
      <label>
        Position
        <input
          type="text"
          value={data.experience[index].position}
          onChange={(e) => {
            setData({
              ...data,
              experience: data.experience.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, position: e.target.value };
              }),
            });
          }}
        />
      </label>
      <div className="dates">
        <label>
          Start date
          <input
            type="date"
            value={data.experience[index].startDate}
            onChange={(e) => {
              setData({
                ...data,
                experience: data.experience.map((item, itemIndex) => {
                  if (index !== itemIndex) return item;
                  return { ...item, startDate: e.target.value };
                }),
              });
            }}
          />
        </label>
        <label>
          End date
          <input
            type="date"
            value={data.experience[index].endDate}
            onChange={(e) => {
              setData({
                ...data,
                experience: data.experience.map((item, itemIndex) => {
                  if (index !== itemIndex) return item;
                  return { ...item, endDate: e.target.value };
                }),
              });
            }}
          />
        </label>
      </div>
      <label>
        Location
        <input
          type="text"
          value={data.experience[index].location}
          onChange={(e) => {
            setData({
              ...data,
              experience: data.experience.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, location: e.target.value };
              }),
            });
          }}
        />
      </label>
      <label>
        Description
        <textarea
          cols="30"
          rows="10"
          value={data.experience[index].description}
          onChange={(e) => {
            setData({
              ...data,
              experience: data.experience.map((item, itemIndex) => {
                if (index !== itemIndex) return item;
                return { ...item, description: e.target.value };
              }),
            });
          }}
        ></textarea>
      </label>
    </div>
  );
}

function ExperienceListItem({ data, setData, place }) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="box">
        <div>{place.company}</div>
        <svg
          onClick={() => setHidden(!hidden)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>Edit</title>
          <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
        </svg>
        <svg
          onClick={() =>
            setData({
              ...data,
              experience: data.experience.filter((item) => item.key !== place.key),
            })
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>Remove</title>
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      </div>
      <div className={hidden ? "hidden" : ""}>
        <ExperienceFormInput data={data} setData={setData} placeKey={place.key} />
      </div>
    </>
  );
}

function ExperienceForm({ data, setData }) {
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <section>
      <h1>Experience</h1>
      {data.experience.map((place) => {
        return (
          <ExperienceListItem key={place.key} data={data} setData={setData} place={place} />
        );
      })}
      <button
        disabled={disabled ? true : false}
        onClick={(e) => {
          e.preventDefault();
          setHidden(false);
          setDisabled(true);

          setData({
            ...data,
            experience: [
              ...data.experience,
              {
                key: crypto.randomUUID(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: "",
              },
            ],
          });
        }}
      >
        Add
      </button>
      <div id="endButtonContainer" className={hidden ? "hidden" : ""}>
        <ExperienceFormInput
          data={data}
          setData={setData}
          placeKey={data.experience[data.experience.length - 1].key}
        />
        <button
          className="end"
          onClick={(e) => {
            e.preventDefault();
            setHidden(true);
            setDisabled(false);
          }}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export function Form({ data, setData }) {
  return (
    <form>
      <BasicInfo data={data} setData={setData} />
      <EducationForm data={data} setData={setData} />
      <ExperienceForm data={data} setData={setData} />
    </form>
  );
}
