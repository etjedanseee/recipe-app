import React, { useRef, useState } from 'react'
import { searchRecipes } from '../functions/searchRecipes'
import styles from './search.module.scss'

const SearchMeals = ({ onSearch, recipes, setSearchedRecipes }) => {
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)

  const onSearchChange = (e) => {
    const searchValue = e.target.value

    setSearch(searchValue)

    if (!searchValue.length) {
      onSearch(false)
    }
    else {
      onSearch(true)
      setSearchedRecipes(searchRecipes(recipes, searchValue))
    }
  }

  const onGoBackClick = () => {
    onSearch(false)
    setSearch('')
  }
  const onSearchClear = () => {
    searchRef.current.focus()
    setSearch('')
  }

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()}>
      <div className={styles.search}>
        <input
          type="text"
          value={search}
          onChange={onSearchChange}
          ref={searchRef}
        />
      </div>

      <div className={styles.clear}>
        <input
          onClick={onSearchClear}
          type="button"
          value={'Clear'}
        />
      </div>

      <div className={styles.goback}>
        <input
          onClick={onGoBackClick}
          type="button"
          value={'To home'}
        />
      </div>
    </form>
  )
}

export default SearchMeals