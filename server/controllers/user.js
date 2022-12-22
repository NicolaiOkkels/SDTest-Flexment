import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { signUpError, errorMessage, fullName, calculateStartIndex } from '../services/userService.js'

import UserModel from '../models/userModel.js'

export const getUsers = async (req, res) => {
  const { page } = req.query

  try {
    const LIMIT = 8
    const startIndex = calculateStartIndex(LIMIT, page) // get starting index of every page
    const total = await UserModel.countDocuments({})

    const users = await UserModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex)

    res.status(200).json({ data: users, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) })
  } catch (error) {
    res.status(404).json({ message: error.message })
    console.log(error)
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params

  try {
    const user = await UserModel.findById(id)

    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
    console.log(error)
    console.log(req.params)
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const existingUser = await UserModel.findOne({ email })

    if (!existingUser) return res.status(404).json({ message: 'User doesnt exist' })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    if (!isPasswordCorrect) return res.status(404).json({ message: 'Wrong credentials ' })

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' })

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body

  try {
    const existingUser = await UserModel.findOne({ email })

    if (signUpError(existingUser, firstName, lastName, password, confirmPassword)) {
      const error = errorMessage(existingUser, firstName, lastName, password, confirmPassword)
      if (existingUser) {
        return res.status(404).json({ message: error })
      } else {
        return res.status(400).json({ message: error })
      }
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await UserModel.create({ email, password: hashedPassword, name: fullName(firstName, lastName) })

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' })

    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(' WHY ME ')
    console.log(req.body)
    console.error(error)
  }
}
