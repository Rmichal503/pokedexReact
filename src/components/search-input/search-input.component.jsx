import './search-input.styles.css'

const SearchInput = (props)=>{

    return(
        <div className={props.className}>
            <input type="search" placeholder="Search pokemon" onChange={props.valueHandler} />
        </div>
    )
}

export default SearchInput