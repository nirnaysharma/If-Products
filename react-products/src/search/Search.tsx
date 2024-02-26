import { useState } from "react";

export default function Search({ onSearchChange }: SearchProps) {

    const [search, setSearchParam] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value;
        setSearchParam(searchValue);

        onSearchChange(searchValue); // Call the callback to update the search term in the parent component
      }

    return (
        <div className="searchDiv" >
          <input className="form-control searchTextbox" placeholder="Search" type="text" name="name" onChange={handleChange} />
        </div>
      );
}

interface SearchProps {
    onSearchChange: (searchValue: string) => void;
  }

