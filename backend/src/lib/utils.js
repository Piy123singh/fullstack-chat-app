import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {  // Changed from res.cookies to res.cookie
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,  // Fixed from httpsOnly to httpOnly
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"  // Fixed typo in "development"
    });

    return token;
};