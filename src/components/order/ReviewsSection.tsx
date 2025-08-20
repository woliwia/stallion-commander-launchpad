import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    name: "Marcus T.",
    age: 42,
    rating: 5,
    review: "Life-changing results! My energy is through the roof and my confidence has never been higher. Worth every penny.",
    location: "Texas, USA"
  },
  {
    name: "David R.",
    age: 38,
    rating: 5,
    review: "After just 30 days, I noticed incredible improvements. My wife can't believe the difference. Highly recommend!",
    location: "California, USA"
  },
  {
    name: "James M.",
    age: 45,
    rating: 5,
    review: "Finally found something that actually works. The results speak for themselves. Already ordered my second bottle.",
    location: "Florida, USA"
  }
];

const ReviewsSection = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
          WHAT OUR CUSTOMERS
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            ARE SAYING
          </span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
          <span className="text-lg font-bold text-foreground ml-2">4.9/5 (2,847 reviews)</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <Card key={index} className="p-6 bg-gradient-card border border-border hover:shadow-premium transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-foreground mb-4 leading-relaxed">"{review.review}"</p>
            
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground">{review.name}</div>
              <div className="text-sm text-muted-foreground">Age {review.age} • {review.location}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;