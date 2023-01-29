import instance from "./index";

const get = async (filter = null) => {
  try {
    const response = await instance.get(
      `/todo/${filter && "?fiter=" + filter}`
    );
    return response.data;
  } catch (error) {
    console.log("error Message Get Todo", error.message);
    return false;
  }
};

const create = async (query) => {
  try {
    const { content, flag, status } = query;
    if (!content) {
      return false;
    }
    const response = await instance.post("/todo", {
      content,
      flag,
      status,
    });
    return response.data;
  } catch (error) {
    console.log("error Message Create Todo", error.message);
    return false;
  }
};

const update = async (id, query) => {
  try {
    const { content, flag, status } = query;
    const response = await instance.put("/todo", {
      id: id,
      query: {
        content,
        flag,
        status,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error Message Update Todo", error.message);
    return false;
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await instance.delete("/todo", {
      id,
    });
    return response.data;
  } catch (error) {
    console.log("error Message Delete Todo", error.message);
    return false;
  }
};

export default { create, deleteTodo, update, get };
