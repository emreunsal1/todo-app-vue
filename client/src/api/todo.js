import instance from "./index";

const get = async (sortBy = undefined) => {
  try {
    const response = await instance.get(`/todo/`, {
      params: {
        sortBy,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error Message Get Todo", error.message);
    return false;
  }
};

const create = async (data) => {
  try {
    const { content, priority, completeStatus } = data;
    if (!content) {
      return false;
    }
    const response = await instance.post("/todo", {
      content,
      priority,
      completeStatus,
    });
    return response.data;
  } catch (error) {
    console.log("error Message Create Todo", error.message);
    return false;
  }
};

const update = async (id, query) => {
  try {
    const { content, priority, completeStatus } = query;
    const response = await instance.put(`/todo/${id}`, {
      data: {
        content,
        priority,
        completeStatus,
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
    const response = await instance.delete(`/todo/${id}`);
    return response.data;
  } catch (error) {
    console.log("error Message Delete Todo", error.message);
    return false;
  }
};

export default { create, deleteTodo, update, get };
