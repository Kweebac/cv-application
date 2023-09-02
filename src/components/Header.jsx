import "../styles/Header.css";

export function Header({ data }) {
  return (
    <header>
      <h1>{data.name}</h1>
      <div>
        <span>{data.email}</span>
        <span>{data.phone}</span>
        <span>{data.address}</span>
      </div>
    </header>
  );
}
