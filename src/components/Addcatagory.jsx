"use client";
import { addcatagory, getcatagory } from "@/app/Server/action";
import React, { useEffect, useState } from "react";

const Addcatagory = () => {
  const [data, setData] = useState({});
  const [cata, setCata] = useState([]);

  function inputhandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  function submitform(e) {
    e.preventDefault();
    const body = addcatagory(data);
  }

  async function get() {
    const cata = await getcatagory();
    setCata(cata.message);
  }
  useEffect(() => {
    get();
  }, []);
  console.log(cata);
  return (
    <div>
      <form
        className="bg-slate-700 flex gap-4 max-w-[800px] py-6 px-4 rounded-md"
        onSubmit={submitform}
      >
        <input
          className="bg-transparent shadow-inner px-1 shadow-black w-[4ch]"
          type="number"
          maxLength={2}
          name="code"
          onChange={inputhandler}
        />

        <input
          placeholder="Name"
          className="bg-transparent border-b"
          type="text"
          name="name"
          onChange={inputhandler}
        />
        <input type="submit" />
      </form>

      <div className="">
        {cata?.map((v, i) => (
          <div>
            <span>{v.code}</span>
            <span>{v.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addcatagory;
