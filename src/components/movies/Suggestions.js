import React from "react";

const Suggestions = props => {
  const options = props.results.map(r => <li key={r.id}>{r.title}</li>);
  let styles;

  if (options.length > 0) {
    styles = {
      backgroundColor: "rgba(136, 144, 144, 0.77)",
      border: "solid 1px"
    };
  } else {
    styles = {
      display: "none"
    };
  }

  return (
    <div style={styles} className="results">
      <ul className="ulSearch">{options}</ul>
    </div>
  );
};

export default Suggestions;
