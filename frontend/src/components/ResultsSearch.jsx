export default function ResultsSearch() {
  return (
    <div className="search-row">
      <input
        className="search-input"
        placeholder="Search sequences..."
      />
      <select className="filter-select">
        <option>All Types</option>
        <option>m6A</option>
        <option>m5C</option>
        <option>m7G</option>
      </select>
    </div>
  );
}
