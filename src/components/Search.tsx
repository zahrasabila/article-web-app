"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

interface SearchProps {
  value: string;
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function Search({
  value,
  onSearch,
  placeholder = "Search destinations or topics...",
}: SearchProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue.trim());
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row gap-3"
    >
      <div className="flex-1">
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-background backdrop-blur-lg border-border shadow-none"
        />
      </div>
      <Button
        type="submit"
        className="w-full sm:w-auto hover:scale-105 transition-transform"
      >
        <SearchIcon className="w-4 h-4 mr-2" />
        Cari
      </Button>
    </form>
  );
}
