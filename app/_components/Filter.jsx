"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

function Filter() {
  const serachParams = useSearchParams();
  const router = useRouter();
  const parhName = usePathname();
  const activeFilter = serachParams.get("capacity") ?? "all";

  const handleFilter = (filterOption) => {
    const params = new URLSearchParams(serachParams);
    params.set("capacity", filterOption);
    router.replace(`${parhName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className=" border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        {" "}
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        {" "}
        2&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        {" "}
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        {" "}
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {" "}
      {children}
    </button>
  );
}

export default Filter;
