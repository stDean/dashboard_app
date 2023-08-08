const User = require("../model/User");

const UserCtrl = {
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = UserCtrl;
