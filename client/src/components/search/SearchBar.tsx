import React, { useState } from 'react';

// Assets [Icons, etc]
import { IoSearch } from 'react-icons/io5';

// Styles
import styles from './search-bar.module.scss';

function SearchBar() {
  const [query, setQuery] = useState<string>();

  return (
    <div className={styles.container}>
      <input
        className={styles.textInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, tags, or writer"
      />

      <IoSearch />
    </div>
  );
}

export default SearchBar;
