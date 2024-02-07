"use client";
import React, { useEffect, useState } from "react";
import { addproduct, getcatagory } from "@/app/Server/action";

const Productadd = () => {
  const [data, setData] = useState({
    catagory: "",
    itemcode: "",
    productname: "jellery",
  });
  const [cata, setCata] = useState([]);

  function inputhandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  function submitform() {
    e.preventDefault();
    const body = addproduct(data);
  }

  async function get() {
    const cata = await getcatagory();
    setCata(cata.message);
  }
  useEffect(() => {
    get();
  }, []);
  console.log(data);

  return (
    <div>
      <form
        className="bg-slate-700 flex gap-4 max-w-[800px] py-6 px-4 rounded-md"
        onSubmit={submitform}
      >
        <input
          className="bg-transparent border-b px-1 shadow-black w-[4ch]"
          type="number"
          maxLength={2}
          name="itemcode"
          value={data?.itemcode}
          onChange={inputhandler}
        />

        <input
          placeholder="Name"
          className="bg-transparent border-b"
          type="text"
          name="productname"
          onChange={inputhandler}
        />
        <select
          className="bg-slate-600"
          name="catagory"
          id=""
          onChange={inputhandler}
        >
          {cata?.map((v, i) => (
            <option key={i} value={v.code}>
              {v.name}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Productadd;
