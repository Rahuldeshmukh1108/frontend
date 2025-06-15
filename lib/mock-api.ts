interface SignupUserData {
  email: string;
  password: string;
  name: string;
  userType: string;
  institution: string;
}

export const mockApi = {
  // Authentication
  login: async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (email === "demo@lnctgroup.in" && password === "demo123") {
      return {
        success: true,
        user: {
          id: "1",
          email,
          name: "Demo User",
          userType: "student",
          institution: "LNCT University",
        },
        token: "mock-jwt-token",
      }
    }
    throw new Error("Invalid credentials")
  },

  signup: async (userData: SignupUserData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return {
      success: true,
      user: {
        id: Date.now().toString(),
        ...userData,
      },
      message: "Account created successfully",
    }
  },

  // Contact form
  submitContactForm: async (formData: { name: string; email: string; message: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate email sending
    console.log("Sending email to LNCT team:", formData)
    console.log("Sending confirmation email to user:", formData.email)

    return {
      success: true,
      message: "Message sent successfully",
    }
  },

  // Get institutions
  getInstitutions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      data: [
        {
          id: "1",
          name: "LNCT University",
          category: "University",
          location: "Bhopal",
          website: "https://lnctu.ac.in",
        },
        // Add more institutions...
      ],
    }
  },

  // Get gallery images
  getGalleryImages: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return {
      success: true,
      data: [
        {
          id: "1",
          src: "/placeholder.svg?height=400&width=600",
          alt: "Campus Main Building",
          category: "Campus",
        },
        // Add more images...
      ],
    }
  },
}
