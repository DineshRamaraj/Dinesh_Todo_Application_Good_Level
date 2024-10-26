const TodoModel = require("../../models/TodoModel");

const AddTodo = async (req, res) => {
  const { user_id } = req.params;
  const { title, description, status = "pending" } = req.body;
  try {
    if (title.length < 3 || title === "") {
      throw new Error("Invalid Title");
    }
    await TodoModel.create({
      user_id,
      title,
      description,
      status,
    });
    return res
      .status(201)
      .json({ status: "success", message: "Added Your Todo List" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = AddTodo;
