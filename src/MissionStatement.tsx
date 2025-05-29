import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

export default function MissionStatement() {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300)
        
        return () => clearTimeout(timer)
    }, [])
    
    // Mission statement content - emotional and impactful in first person
    const missionTitle = t("mission.title", { name: "Antonio Cárdenas" })
    const missionText = t("mission.text", { name: "Antonio Cárdenas" })
    const missionTagline = t("mission.tagline", { name: "Antonio Cárdenas" })

    return (
        <section className="bg-emerald-700 py-20 md:py-28 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-15">
                <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-800 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-emerald-800 to-transparent opacity-60"></div>
            
            {/* Animated accent circles */}
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-emerald-500 opacity-20 animate-pulse"></div>
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-emerald-400 opacity-20 animate-pulse"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className={`flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Mission Icon */}
                    {/* <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2 transition-all duration-700 transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div> */}
                    
                    {/* Mission Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight tracking-tight">
                        {missionTitle}
                    </h2>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-1 bg-emerald-400 rounded-full"></div>
                    
                    {/* Mission Content */}
                    <p className="text-lg md:text-xl text-white text-center leading-relaxed font-light max-w-4xl mx-auto mt-2">
                        {missionText}
                    </p>
                    
                    {/* Mission Tagline */}
                    <div className="mt-6 flex items-center">
                        <span className="h-px w-8 bg-emerald-400 mr-4"></span>
                        <p className="text-emerald-200 text-xl font-medium italic">
                            {missionTagline}
                        </p>
                        <span className="h-px w-8 bg-emerald-400 ml-4"></span>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    )
}