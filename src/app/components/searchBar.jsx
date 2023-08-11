import { useState } from 'react'

export default function SearchBar (props) {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  // const handleClickOn = () => {
  //   setSearch('');
  //   }

  //   const handleClickOff = () => {
  //     setSearch('Search...');
  //   }

  return (
    <form className="focus:border-[#00CECB] p-1">
      <input className="border-2 rounded-lg focus:border-[#00CECB] border-[#00CECB] outline-none"
           value={search} placeholder="Search..." onChange={handleChange}>
      </input>
    </form>
  )
}