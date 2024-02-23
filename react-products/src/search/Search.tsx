import { useCallback, useState } from "react";
import { productDTO } from "../products/products.model";

export default function Search({ onSearchChange }: SearchProps) {

    const [search, setSearchParam] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value;
        setSearchParam(searchValue);
        console.log(searchValue);
        console.log("handleChange Search.tsx");
        onSearchChange(searchValue); // Call the callback to update the search term in the parent component
      }

    return (
        <>
          <input className="form-control" placeholder="Search" type="text" name="name" onChange={handleChange} />
        </>
      );
}

interface SearchProps {
    onSearchChange: (searchValue: string) => void;
  }
