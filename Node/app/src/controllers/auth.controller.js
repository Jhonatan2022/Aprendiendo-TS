export const register = (req, res) => {
    const data = req.body

    console.log(data);
}

export const login = (req, res) => res.send('login')