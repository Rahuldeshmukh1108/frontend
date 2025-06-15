import jwt from "jsonwebtoken"
import type { NextRequest } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@lnctgroup.in"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
}

export interface AdminUser extends User {
  role: "admin"
}

export async function verifyCredentials(email: string, password: string): Promise<User | null> {
  // Check if it's admin credentials
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return {
      id: "admin-1",
      email: ADMIN_EMAIL,
      name: "Admin User",
      role: "admin",
    }
  }

  // For regular users, you would check against your database
  // This is a placeholder - replace with actual user verification
  if (email && password && password.length >= 6) {
    return {
      id: `user-${Date.now()}`,
      email: email,
      name: email.split("@")[0],
      role: "user",
    }
  }

  return null
}

export function generateToken(user: User): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "24h" })
}

export function verifyToken(token: string): User | null {
  try {
    return jwt.verify(token, JWT_SECRET) as User
  } catch {
    return null
  }
}

export async function requireAuth(request: NextRequest): Promise<User | null> {
  const token =
    request.cookies.get("auth-token")?.value ||
    request.cookies.get("admin-token")?.value ||
    request.headers.get("authorization")?.replace("Bearer ", "")

  if (!token) {
    return null
  }

  return verifyToken(token)
}

export async function requireAdmin(request: NextRequest): Promise<AdminUser | null> {
  const user = await requireAuth(request)

  if (!user || user.role !== "admin") {
    return null
  }

  return user as AdminUser
}
