export default function ResultsSearch({
  searchText,
  setSearchText,
  methylationFilter,
  setMethylationFilter
}) {
  return (
    <div className="search-row">
      <input
        className="search-input"
        placeholder="Search sequences..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="filter-select"
        value={methylationFilter}
        onChange={(e) => setMethylationFilter(e.target.value)}
      >
        <option value="all">All Types</option>
        <option value="m6A">m6A</option>
        <option value="m5C">m5C</option>
        <option value="m7G">m7G</option>
      </select>
    </div>
  );
}
