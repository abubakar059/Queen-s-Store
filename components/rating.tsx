"use client"

import { Star } from "lucide-react"

interface RatingProps {
  rating: number
  reviews?: number
  size?: "sm" | "md" | "lg"
}

export default function Rating({ rating, reviews, size = "md" }: RatingProps) {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  const iconSize = sizeMap[size]

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={iconSize}
            className={i < Math.floor(rating) ? "fill-accent text-accent" : "text-muted-foreground"}
          />
        ))}
      </div>
      <span className="text-sm font-semibold">{rating}</span>
      {reviews && <span className="text-sm text-muted-foreground">({reviews})</span>}
    </div>
  )
}
