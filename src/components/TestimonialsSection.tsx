import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    age: 34,
    location: "California",
    rating: 5,
    text: "Stallion Commander completely transformed my life. The energy boost is incredible, and my confidence has skyrocketed. My partner has definitely noticed the difference!",
    highlight: "Transformed my life"
  },
  {
    name: "David R.",
    age: 41,
    location: "Texas",
    rating: 5,
    text: "I was skeptical at first, but after just 2 weeks, I felt like a new man. The stamina improvement is beyond anything I've experienced before.",
    highlight: "Felt like a new man"
  },
  {
    name: "James K.",
    age: 29,
    location: "Florida",
    rating: 5,
    text: "This stuff works! No side effects, just pure power and performance. I've tried other products but nothing comes close to Stallion Commander.",
    highlight: "Nothing comes close"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6">
            REAL MEN,
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              REAL RESULTS
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Join thousands of satisfied customers who've unlocked their true potential with Stallion Commander.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-premium hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base">
                "{testimonial.text}"
              </blockquote>
              
              {/* Highlight */}
              <div className="bg-primary/10 border border-primary/20 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 inline-block">
                <span className="text-primary font-semibold text-xs sm:text-sm">"{testimonial.highlight}"</span>
              </div>
              
              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Age {testimonial.age} • {testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[
            { number: "50K+", label: "Satisfied Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "90", label: "Day Guarantee" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-primary bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};