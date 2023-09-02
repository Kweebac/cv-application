import "../styles/Form.css";

export function Form({ data, setData }) {
  return (
    <form>
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
      <section>
        <h1>Education</h1>
        <label>
          School
          <input type="text" />
        </label>
        <label>
          Degree
          <input type="text" />
        </label>
        <div className="dates">
          <label>
            Start date
            <input type="date" />
          </label>
          <label>
            End date
            <input type="date" />
          </label>
        </div>
        <label>
          Location
          <input type="text" />
        </label>
        <button>Save</button>
      </section>
      <section>
        <h1>Experience</h1>
        <label>
          Company
          <input type="text" />
        </label>
        <label>
          Position
          <input type="text" />
        </label>
        <div className="dates">
          <label>
            Start date
            <input type="date" />
          </label>
          <label>
            End date
            <input type="date" />
          </label>
        </div>
        <label>
          Location
          <input type="text" />
        </label>
        <label>
          Description
          <textarea cols="30" rows="10"></textarea>
        </label>
        <button>Save</button>
      </section>
    </form>
  );
}
