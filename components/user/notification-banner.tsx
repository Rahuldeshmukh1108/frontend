"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Info, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "warning" | "success" | "error"
  isActive: boolean
  createdAt: string
}

export function NotificationBanner() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [dismissedIds, setDismissedIds] = useState<string[]>([])

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/admin/notifications?active=true&banner=true")
      if (response.ok) {
        const data = await response.json()
        setNotifications(data.data || [])
      }
    } catch (error) {
      console.error("Failed to fetch notifications:", error)
    }
  }

  const dismissNotification = (id: string) => {
    setDismissedIds((prev) => [...prev, id])
  }

  const activeNotifications = notifications.filter((n) => n.isActive && !dismissedIds.includes(n.id))

  if (activeNotifications.length === 0) return null

  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5" />
      case "warning":
        return <AlertTriangle className="h-5 w-5" />
      case "success":
        return <CheckCircle className="h-5 w-5" />
      case "error":
        return <AlertCircle className="h-5 w-5" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getBgColor = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-600"
      case "warning":
        return "bg-yellow-600"
      case "success":
        return "bg-green-600"
      case "error":
        return "bg-red-600"
      default:
        return "bg-blue-600"
    }
  }

  return (
    <div className="space-y-1">
      {activeNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`${getBgColor(notification.type)} text-white px-4 py-3 relative animate-in slide-in-from-top duration-300`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              {getIcon(notification.type)}
              <div>
                <p className="font-semibold text-sm">{notification.title}</p>
                <p className="text-sm opacity-90">{notification.message}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
              onClick={() => dismissNotification(notification.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
