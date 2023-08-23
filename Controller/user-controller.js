import User from "../model/user-Schema.js";

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({userName: request.body.userName});
        if(exist){
            return response.status(401).json({ message: "UserName Already Exists"})
        }

        const user = new User(request.body);
        await user.save();

        response.status(200).json({message: user});
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
}

export const userLogin = async (request, response) => {
    try {
        const userName = request.body.userName;
        const password = request.body.password;

        let data = await User.findOne({userName: userName, password: password});

        if(data) {
            return response.status(200).json(data);
        }
        else {
            return response.status(401).json("Invalid Login");
        }
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
}