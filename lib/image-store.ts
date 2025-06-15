// Simple in-memory image store (replace with database in production)
interface ImageData {
  id: string
  filename: string
  originalName: string
  url: string
  alt: string
  category: string
  tags: string[]
  size: number
  uploadedAt: string
}

const imageStore: ImageData[] = [
  {
    id: "1",
    filename: "campus-main.jpg",
    originalName: "campus-main-building.jpg",
    url: "/images/campus-main.jpg",
    alt: "LNCT Main Campus Building",
    category: "Campus",
    tags: ["campus", "building", "main"],
    size: 2048000,
    uploadedAt: new Date().toISOString(),
  },
  {
    id: "2",
    filename: "library.jpg",
    originalName: "library-interior.jpg",
    url: "/images/library.jpg",
    alt: "Modern Library Interior",
    category: "Facilities",
    tags: ["library", "study", "books"],
    size: 1536000,
    uploadedAt: new Date().toISOString(),
  },
  {
    id: "3",
    filename: "lab.jpg",
    originalName: "computer-lab.jpg",
    url: "/images/lab.jpg",
    alt: "Computer Laboratory",
    category: "Labs",
    tags: ["computer", "lab", "technology"],
    size: 1792000,
    uploadedAt: new Date().toISOString(),
  },
]

export function getAllImages() {
  return imageStore
}

export function getImageById(id: string) {
  return imageStore.find((img) => img.id === id) || null
}

export function getImagesByCategory(category: string) {
  return imageStore.filter((img) => img.category === category)
}

export function addImage(imageData: Omit<ImageData, "id" | "uploadedAt">) {
  const newImage: ImageData = {
    ...imageData,
    id: Date.now().toString(),
    uploadedAt: new Date().toISOString(),
  }
  imageStore.push(newImage)
  return newImage
}

export function updateImage(id: string, updates: Partial<ImageData>) {
  const index = imageStore.findIndex((img) => img.id === id)
  if (index !== -1) {
    imageStore[index] = { ...imageStore[index], ...updates }
    return imageStore[index]
  }
  return null
}

export function deleteImage(id: string) {
  const index = imageStore.findIndex((img) => img.id === id)
  if (index !== -1) {
    const deleted = imageStore.splice(index, 1)[0]
    return deleted
  }
  return null
}

export function getImageCategories() {
  const categories = new Set(imageStore.map((img) => img.category))
  return Array.from(categories)
}
