"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { FaSearch, FaTimes } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
  autoFocus?: boolean;
}

export function SearchInput({
  placeholder = "Search...",
  className,
  onSearch,
  autoFocus = false,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery("");
    
    if (onSearch) {
      onSearch("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        className="pr-10"
        icon={<FaSearch className="text-light-blue" />}
      />
      {query && (
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-paynes-gray hover:text-light-blue focus:outline-none"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <FaTimes size={14} />
        </button>
      )}
    </div>
  );
} 