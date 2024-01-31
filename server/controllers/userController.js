import User from "../models/UserModel.js";

//REGISTER FUNCTION*****************
export const handleRegister = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save();
        res.status(201).send({success: true, user})
    } catch (error) {
        console.log("error in register",error.message);
        res.status(500).send({success:false, error: error.message})
    }
}


export const handleLogin = async (req, res) => {
    try {
       const findUser = await User.findOne({
        email : req.body.email,
        password: req.body.password
       }).select("-password");
        
       if (!findUser) {
        // If no user is found, send an error response
        return res.status(401).send({ success: false, error: "Username or password not correct" });
}
    // If a user is found, send a success response
        res.json({ success: true, findUser  });
    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).send({ success: false, error: error.message });
    }
}