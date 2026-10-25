import { Category } from "../models/index.js";

export const createCategory = async (data) => {
  return await Category.create(data);
};

export const bulkCreateCategory = async(data)=>{
    return await Category.bulkCreate(data,{validate:true})
}

export const getAllCategories = async () => {
  return await Category.findAll({
    order: [["createdAt", "DESC"]],
  });
};

export const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};
