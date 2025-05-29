import { useTranslation } from "react-i18next"
import { GraduationCap, Briefcase, Heart, Code, Database, Server } from "lucide-react"

export default function AboutSection() {
    const { t } = useTranslation()
    const educationItems = Array.isArray(t("about.educationItems", { returnObjects: true }))
        ? t("about.educationItems", { returnObjects: true })
        : []

    const experienceItems = Array.isArray(t("about.experienceItems", { returnObjects: true }))
        ? t("about.experienceItems", { returnObjects: true })
        : []

    const interestItems = Array.isArray(t("about.interestItems", { returnObjects: true }))
        ? t("about.interestItems", { returnObjects: true })
        : []

    return (
        <section className="py-20 bg-slate-800" id="about">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
                    <p className="text-emerald-400 text-lg">{t("about.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                            <p className="text-lg leading-relaxed mb-4">{t("about.bio")}</p>
                            <p className="text-lg leading-relaxed">{t("about.bio2")}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 flex flex-col items-center justify-center aspect-square">
                                <Code className="h-10 w-10 text-emerald-400 mb-2" />
                                <span className="text-lg font-medium">C#</span>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 flex flex-col items-center justify-center aspect-square">
                                <Database className="h-10 w-10 text-purple-400 mb-2" />
                                <span className="text-lg font-medium">SQL</span>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 flex flex-col items-center justify-center aspect-square">
                                <Server className="h-10 w-10 text-yellow-400 mb-2" />
                                <span className="text-lg font-medium">.NET</span>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 flex flex-col items-center justify-center aspect-square" >
                                <Code className="h-10 w-10 text-emerald-400 mb-2" />
                                <span className="text-lg font-medium">Angular</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="h-6 w-6 text-emerald-400" />
                                <h3 className="text-xl font-bold">{t("about.education")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {educationItems.map((item, index) => (
                                    <li key={index} className="border-l-2 border-emerald-400 pl-4 py-1">
                                        <p className="font-bold">{item.degree}</p>
                                        <p className="text-slate-300">{item.school}</p>
                                        <p className="text-sm text-slate-400">{item.year}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="h-6 w-6 text-emerald-400" />
                                <h3 className="text-xl font-bold">{t("about.experience")}</h3>
                            </div>
                            <ul className="space-y-4">
                                {experienceItems.map((item, index) => (
                                    <li key={index} className="border-l-2 border-emerald-400 pl-4 py-1">
                                        <p className="font-bold">{item.position}</p>
                                        <p className="text-slate-300">{item.company}</p>
                                        <p className="text-sm text-slate-400">{item.period}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="h-6 w-6 text-emerald-400" />
                                <h3 className="text-xl font-bold">{t("about.interests")}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {interestItems.map((interest, index) => (
                                    <span key={index} className="bg-slate-600 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}