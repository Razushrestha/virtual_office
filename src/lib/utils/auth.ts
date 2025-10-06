import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface JWTPayload {
  userId: string
  email: string
  role: string
}

export class AuthUtils {
  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' })
  }

  static generateRefreshToken(userId: string): string {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '30d' })
  }

  static verifyToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    } catch {
      return null
    }
  }

  static extractTokenFromRequest(req: NextRequest): string | null {
    const authHeader = req.headers.get('authorization')
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7)
    }
    return null
  }

  static hashPassword(password: string): Promise<string> {
    const bcrypt = require('bcryptjs')
    return bcrypt.hash(password, 12)
  }

  static verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    const bcrypt = require('bcryptjs')
    return bcrypt.compare(password, hashedPassword)
  }
}