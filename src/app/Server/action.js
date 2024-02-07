"use server";
import dbConnect from "../Config/DBconfi";
import maincatagory from "../model/maincatagory";
import product from "../model/product";

dbConnect();

export async function addcatagory(req) {
  console.log(req);
  try {
    const body = await maincatagory.create(req);

    if (!body) {
      return {
        success: false,
        message: "No data avalible",
      };
    }
    return {
      success: true,
      message: body,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error,
    };
  }
}

export async function getcatagory() {
  try {
    const body = await maincatagory.find();

    if (!body) {
      return {
        success: false,
        message: "No data avalible",
      };
    }
    return {
      success: true,
      message: body,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error,
    };
  }
}

export async function delcatagory(req) {
  try {
    const body = await maincatagory.findByIdAndDelete(req);

    if (!body) {
      return {
        success: false,
        message: "No data avalible",
      };
    }
    return {
      success: true,
      message: body,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error,
    };
  }
}

export async function getproduct() {
  try {
    const body = await product.find();

    if (!body) {
      return {
        success: false,
        message: "No data avalible",
      };
    }
    return {
      success: true,
      message: body,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error,
    };
  }
}

export async function addproduct(req) {
  console.log(req)
  try {
    const body = await product.create(req);

    if (!body) {
      return {
        success: false,
        message: "No data avalible",
      };
    }
    return {
      success: true,
      message: body,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: error,
    };
  }
}