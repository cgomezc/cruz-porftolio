import { useTranslation } from "react-i18next"
import { Github } from "lucide-react"

export default function ProjectsSection() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-slate-900" id="projects">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
                    <p className="text-emerald-400 text-lg">{t("projects.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* {Array.isArray(t("projects.items", { returnObjects: true })) ? (
                        t("projects.items", { returnObjects: true }).map((project, index) => (
                            <div
                                key={index}
                                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 transition-transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-mono text-emerald-400">{`</>`}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-slate-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {Array.isArray(project.tech) &&
                                            project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-slate-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                                            ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                                        >
                                            <Github className="h-4 w-4" />
                                            {t("projects.viewGithub")}
                                        </a>

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                {t("projects.liveDemo")}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 text-center py-10">
                            <p>No projects available</p>
                        </div>
                    )} */}

                    {/* Cooming soon.. */}
                    <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 transition-transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <span className="text-2xl font-mono text-emerald-400">{`</>`}</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Cooming soon...</h3>
                            <p className="text-slate-300 mb-4">Stay tuned for my latest projects!</p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/cgomezc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 !text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        {t("projects.viewAll")}
                    </a>
                </div>
            </div>
        </section>
    )
}
