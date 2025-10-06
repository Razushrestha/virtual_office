import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export class APIResponse {
  static success(data: any, status: number = 200) {
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString()
    }, { status })
  }

  static error(message: string, status: number = 400, details?: any) {
    return NextResponse.json({
      success: false,
      error: message,
      details,
      timestamp: new Date().toISOString()
    }, { status })
  }

  static validation(error: ZodError) {
    return NextResponse.json({
      success: false,
      error: 'Validation failed',
      details: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      })),
      timestamp: new Date().toISOString()
    }, { status: 400 })
  }

  static unauthorized(message: string = 'Authentication required') {
    return this.error(message, 401)
  }

  static forbidden(message: string = 'Access denied') {
    return this.error(message, 403)
  }

  static notFound(message: string = 'Resource not found') {
    return this.error(message, 404)
  }

  static internal(message: string = 'Internal server error') {
    return this.error(message, 500)
  }
}

export class APIError extends Error {
  constructor(
    public message: string,
    public status: number = 400,
    public details?: any
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export function handleAPIError(error: any): NextResponse {
  console.error('API Error:', error)

  if (error instanceof APIError) {
    return APIResponse.error(error.message, error.status, error.details)
  }

  if (error instanceof ZodError) {
    return APIResponse.validation(error)
  }

  if (error.code === 'P2002') {
    return APIResponse.error('Resource already exists', 409)
  }

  if (error.code === 'P2025') {
    return APIResponse.notFound('Resource not found')
  }

  return APIResponse.internal()
}