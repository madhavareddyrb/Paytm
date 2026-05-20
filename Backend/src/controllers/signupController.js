import SignUpModel from "../modals/SignUpModal.js";
import bcrypt from "bcrypt";

export const signupController = async (req, res) => {
  try {
    const { username, email, phonenumber, password } = req.body;
    if (!username || !email || !phonenumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All Fields",
      });
    }
    if (phonenumber.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "PhoneNumber Must be 10 letters",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password Must be at least 6 characters ",
      });
    }

    const existinguser = await SignUpModel.findOne({
      $or: [{ email }, { phonenumber }],
    });

    if (existinguser) {
      return res.status(409).json({
        success: false,
        message: "Email or Phone Number Already Exists",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await SignUpModel.create({
      username,
      email,
      phonenumber,
      password: hashpassword,
    });
    if (newUser) {
      return res.status(200).json({
        success: true,
        message: "user account created successfully",
        data: newUser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      false: false,
      message: "SignUp Failed",
      error: error.message,
    });
  }
};

