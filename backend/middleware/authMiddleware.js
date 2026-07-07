import jwt from 'jsonwebtoken'

const authorize = (req, res, next) => {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]

    if(!token) return res.status(401).json({
        message: "no token provided"
    })

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if(error){
            console.log(error)
            return res.status(403).json({
                message: "login first"
            })
        }
        req.user = user;
        next()
    })

}

export default authorize