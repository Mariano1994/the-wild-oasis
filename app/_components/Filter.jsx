"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

function Filter() {
  const serachParams = useSearchParams();
  const router = useRouter();
  const parhName = usePathname();

  const handleFilter = (filterOption) => {
    const params = new URLSearchParams(serachParams);
    params.set("capacity", filterOption);
    router.replace(`${parhName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className=" border border-primary-800 flex">
      <button
        className=" px-5 py-2 hover:bg-primary-700
      "
        onClick={() => handleFilter("all")}
      >
        {" "}
        All cabins
      </button>

      <button
        className=" px-5 py-2 hover:bg-primary-700
      "
        onClick={() => handleFilter("small")}
      >
        {" "}
        1&mdash;3 guests
      </button>

      <button
        className=" px-5 py-2 hover:bg-primary-700
      "
        onClick={() => handleFilter("medium")}
      >
        {" "}
        4&mdash;7 guests
      </button>

      <button
        className=" px-5 py-2 hover:bg-primary-700
      "
        onClick={() => handleFilter("large")}
      >
        {" "}
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
