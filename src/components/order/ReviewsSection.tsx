import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    name: "Michael T.",
    age: 39,
    rating: 5,
    review:
      "Stallion Commander gave me the stamina I thought I’d lost. Stronger workouts, sharper focus, and my confidence is back.",
    location: "New York",
    tag: "Back in control"
  },
  {
    name: "Ryan S.",
    age: 32,
    rating: 5,
    review:
      "After a few weeks my energy stayed high all day. My partner noticed before I did.",
    location: "Nevada",
    tag: "Unstoppable energy"
  },
  {
    name: "Daniel K.",
    age: 45,
    rating: 5,
    review: "No jitters and real results. I’ve tried others—nothing compares to this.",
    location: "Chicago",
    tag: "Nothing compares"
  },
  {
    name: "Anthony B.",
    age: 28,
    rating: 5,
    review:
      "Two weeks in and I felt stronger at the gym and more confident everywhere else.",
    location: "Texas",
    tag: "Confidence up"
  },
  {
    name: "Chris J.",
    age: 36,
    rating: 5,
    review:
      "Delivers exactly what it promises—strength, stamina, and focus all improved.",
    location: "Florida",
    tag: "Delivered results"
  },
  {
    name: "Jason M.",
    age: 41,
    rating: 5,
    review: "Total game-changer. Endurance and recovery have both jumped.",
    location: "California",
    tag: "Game-changer"
  }
];

const ReviewsSection = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
          WHAT OUR CUSTOMERS
          <span className="block text-[#21BFF4]">
            ARE SAYING
          </span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#21BFF4] text-[#21BFF4]" />
          ))}
          <span className="text-lg font-bold text-foreground ml-2">4.9/5 (2,847 reviews)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-card border border-[#42c6f7] hover:shadow-premium transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#21BFF4] text-[#21BFF4]" />
              ))}
            </div>

            <p className="text-foreground mb-4 leading-relaxed flex-grow">"{review.review}"</p>

            <div className="border-t border-border pt-4 mt-auto">
              <div className="font-semibold text-foreground">{review.name}</div>
              <div className="text-sm text-muted-foreground">Age {review.age} • {review.location}</div>
              {review.tag ? (
                <span className="mt-3 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-[#21BFF4]">
                  “{review.tag}”
                </span>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
