"use client";

import IconSearch from "@/public/icon-search.svg";
import Image from "next/image";

import { FormEvent, useState } from "react";

interface FormProps {
  handleSearch(searchTerm: string): void;
}

export default function Form({ handleSearch }: FormProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const isButtonDisabled = searchTerm.length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-[600px]"
    >
      <div className="relative flex flex-1 items-center gap-4 bg-cards py-4 px-6 rounded-2xl hover:cursor-pointer focus-within:outline-offset-4 focus-within:outline-2 focus-within:outline-inherit">
        <Image alt="Icon Search" src={IconSearch} />
        <input
          className="outline-none"
          type="text"
          value={searchTerm}
          placeholder="Search for a place..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <style>{"input::placeholder { color: inherit }"}</style>
      <button
        disabled={isButtonDisabled}
        className={`w-full sm:w-28 bg-[#4656d8] py-4 px-6 rounded-2xl hover:bg-[#2c1a9d] focus-within:outline-offset-4 focus-within:outline-2 focus-within:outline-[#4656d8] ${
          isButtonDisabled
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      >
        Search
      </button>
    </form>
  );
}
