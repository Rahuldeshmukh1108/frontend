// Simple in-memory notification store (replace with database in production)
interface NotificationData {
  id: string
  title: string
  message: string
  type: "info" | "warning" | "success" | "error"
  targetAudience: "all" | "students" | "faculty" | "staff"
  isActive: boolean
  isBanner: boolean
  createdAt: string
  updatedAt: string
}

const notificationStore: NotificationData[] = [
  {
    id: "1",
    title: "Welcome to LNCT Group",
    message: "Explore our comprehensive range of educational institutions and programs.",
    type: "info",
    targetAudience: "all",
    isActive: true,
    isBanner: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export function getAllNotifications() {
  return notificationStore.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getActiveNotifications(isBanner?: boolean) {
  return notificationStore
    .filter((notification) => {
      if (!notification.isActive) return false
      if (isBanner !== undefined && notification.isBanner !== isBanner) return false
      return true
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getNotificationById(id: string) {
  return notificationStore.find((notification) => notification.id === id) || null
}

export function addNotification(notificationData: Omit<NotificationData, "id" | "createdAt" | "updatedAt">) {
  const newNotification: NotificationData = {
    ...notificationData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  notificationStore.push(newNotification)
  return newNotification
}

export function updateNotification(id: string, updates: Partial<NotificationData>) {
  const index = notificationStore.findIndex((notification) => notification.id === id)
  if (index !== -1) {
    notificationStore[index] = {
      ...notificationStore[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    return notificationStore[index]
  }
  return null
}

export function deleteNotification(id: string) {
  const index = notificationStore.findIndex((notification) => notification.id === id)
  if (index !== -1) {
    const deleted = notificationStore.splice(index, 1)[0]
    return deleted
  }
  return null
}

export function toggleNotificationStatus(id: string) {
  const notification = getNotificationById(id)
  if (notification) {
    return updateNotification(id, { isActive: !notification.isActive })
  }
  return null
}
