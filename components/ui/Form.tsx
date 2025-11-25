"use client";

import IconSearch from "@/public/icon-search.svg";
import Image from "next/image";
import { FormEvent, ChangeEvent, useState } from "react";

export default function Form() {
  const [cityName, setCityName] = useState("");

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col sm:flex-row gap-4 w-[600px]"
    >
      <div className="relative flex flex-1 items-center gap-4 bg-cards py-4 px-6 rounded-2xl hover:cursor-pointer focus-within:outline-offset-4 focus-within:outline-2 focus-within:outline-inherit">
        <Image alt="Icon Search" src={IconSearch} />
        <input
          className="outline-none"
          type="text"
          placeholder="Search for a place..."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCityName(event.target.value)
          }
        />
      </div>
      <style>{"input::placeholder { color: inherit }"}</style>
      <button
        onClick={() => console.log(`${cityName}`)}
        className="w-full sm:w-28 bg-[#4656d8] py-4 px-6 rounded-2xl hover:cursor-pointer hover:bg-[#2c1a9d] focus-within:outline-offset-4 focus-within:outline-2 focus-within:outline-[#4656d8]"
      >
        Search
      </button>
    </form>
  );
}
