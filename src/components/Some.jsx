"use client";
import { addproduct } from "@/app/Server/action";
import { useState } from "react";

const Some = () => {
  var [formData, setFormData] = useState({
    itemCode: ["", ""],
  });

  var category = [
    {
      label: "Gold",
      code: "01",
    },
    {
      label: "Silver",
      code: "02",
    },
    {
      label: "Pitel",
      code: "03",
    },
  ];

  var subCategory = [
    {
      label: "Ring",
      code: "01",
    },
    {
      label: "Gani",
      code: "02",
    },
    {
      label: "Chala",
      code: "03",
    },
  ];

  const changeHandler = (e) => {
    var copy = formData.itemCode;

    if (e.target.name == "category") {
      copy.splice(0, 1, e.target.value);
    }

    if (e.target.name == "subCategory") {
      copy.splice(1, 1, e.target.value);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      itemCode: copy,
    });
  };

  var submitHandler = (e) => {
    e.preventDefault();
    var data = {
      itemcode: formData.itemCode.join(""),
      catagory: category.find((v) => v.code == formData.itemCode[0]).label,
      subcatagory: subCategory.find((v) => v.code == formData.itemCode[1]).label,
      productname: "jewller",
    };
    addproduct(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={formData.itemCode.join("")}
          disabled
          type="text"
          className="border"
        />
        <select required name="category" onChange={changeHandler} id="">
          <option value="">Select Main</option>
          {category.map((v, i) => {
            return <option value={v.code}>{v.label}</option>;
          })}
        </select>
        {formData.category && (
          <select required name="subCategory" onChange={changeHandler} id="">
            <option value="">Select Sub</option>
            {subCategory.map((v, i) => {
              return <option value={v.code}>{v.label}</option>;
            })}
          </select>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Some;
