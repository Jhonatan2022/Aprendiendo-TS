import User from '../models/user.model.js'

export const register = async (req, res) => {
  const { username, password, email } = req.body

  try {
    const newUser = new User({
      username,
      password,
      email
    })

    const userSaved = await newUser.save()
    res.json(userSaved)
  } catch (error) {
    console.log(error)
  }
}

export const login = (req, res) => res.send('login')
