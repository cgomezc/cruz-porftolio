
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
    // Define your testimonial structure here
    name: string;
    message: string;
    author: string;
    quote: string;
    position: string;
    company: string;
    // Add other properties as needed
}

export default function TestimonialsSection() {
    const { t } = useTranslation()
   //const translationResult = t("testimonials.items", { returnObjects: true });
const testimonials: Testimonial[] = [];

// Array.isArray(translationResult) 
//     ? translationResult as Testimonial[]
//     : [];
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-rotate testimonials only if we have testimonials
    useEffect(() => {
        if (testimonials.length === 0) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [testimonials.length])

    const goToPrevious = () => {
        if (testimonials.length === 0) return
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const goToNext = () => {
        if (testimonials.length === 0) return
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    // If no testimonials, show a placeholder
    if (testimonials.length === 0) {
        return (
            <section className="py-20 bg-slate-800" id="testimonials">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
                        <p className="text-emerald-400 text-lg">{t("testimonials.subtitle")}</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 text-center">
                            <p>Cooming soon..</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-slate-800" id="testimonials">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
                    <p className="text-emerald-400 text-lg">{t("testimonials.subtitle")}</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600 relative">
                        <Quote className="absolute top-4 left-4 h-8 w-8 text-emerald-400/30" />

                        <div className="pt-6">
                            <p className="text-xl italic mb-8 text-center">"{testimonials[currentIndex].quote}"</p>

                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-600 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-400">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                                </div>
                                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                                <p className="text-emerald-400">{testimonials[currentIndex].position}</p>
                                <p className="text-slate-400 text-sm">{testimonials[currentIndex].company}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-emerald-400" : "bg-slate-600"}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-slate-700 hover:bg-slate-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-slate-700 hover:bg-slate-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}
