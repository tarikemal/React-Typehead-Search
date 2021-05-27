function SearchBar({
  loading,
  query,
  setQuery,
  displayedResults,
  totalResults,
}) {
  return (
    <section className="search-section">
      <div className="search-section__input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span class="material-icons search-icon">search</span>
      </div>

      <div
        style={{
          display: `${query === "" || loading === true ? "none" : "block"}`,
        }}
      >
        {totalResults === 0 ? (
          <div>No results found</div>
        ) : (
          <p>
            Displaying <strong>{displayedResults}</strong> of{" "}
            <strong>{totalResults}</strong> results
          </p>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
