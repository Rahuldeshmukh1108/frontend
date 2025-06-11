// Contact service for handling form submissions
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  inquiryType: string
}

export interface ContactResponse {
  success: boolean
  message: string
  id?: number
}

export class ContactService {
  private static readonly API_ENDPOINT = "/api/contact"

  static async submitForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(this.API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return {
        success: true,
        message: result.message,
        id: result.id,
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
      }
    }
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }
}
