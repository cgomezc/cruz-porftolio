import { useState, useEffect } from "react"
import {
  Database,
  Server,
  Code,
  Cloud,
  Braces,
  FileCode2,
  Terminal,
  ChevronDown,
  Linkedin,
  Github,
  Globe,
} from "lucide-react"
import { useTranslation } from "react-i18next"


export default function HeroSection() {
    const { t, i18n } = useTranslation()
    const [typedText, setTypedText] = useState("")
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    // Define texts to type based on current language
    const getTextsToType = () => [t("roles.dotnet"), t("roles.backend"), t("roles.educator")]
  
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }
  
    useEffect(() => {
      const textsToType = getTextsToType()
      const textToType = textsToType[currentTextIndex]
      let charIndex = 0
      let typingInterval: number
      let pauseTimeout: number
  
      // Type the text
      const typeText = () => {
        if (charIndex <= textToType.length) {
          setTypedText(textToType.substring(0, charIndex))
          charIndex++
          typingInterval = setTimeout(typeText, 100)
        } else {
          // Pause at the end of typing
          pauseTimeout = setTimeout(() => {
            // Start erasing
            eraseText()
          }, 2000)
        }
      }
  
      // Erase the text
      const eraseText = () => {
        if (charIndex > 0) {
          charIndex--
          setTypedText(textToType.substring(0, charIndex))
          typingInterval = setTimeout(eraseText, 50)
        } else {
          // Move to next text
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textsToType.length)
        }
      }
  
      typeText()
  
      return () => {
        clearTimeout(typingInterval)
        clearTimeout(pauseTimeout)
      }
    }, [currentTextIndex, i18n.language])
  
    return (
      <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col justify-center relative overflow-hidden">
        {/* Language switcher */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
          <Globe className="h-5 w-5 text-slate-400" />
          <button
            onClick={() => changeLanguage("en")}
            className={`px-2 py-1 rounded text-sm ${i18n.language === "en" ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-white"}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className={`px-2 py-1 rounded text-sm ${i18n.language === "es" ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-white"}`}
          >
            ES
          </button>
        </div>
  
        {/* Social links */}
        <div className="absolute top-4 left-4 flex items-center gap-3 z-20">
          <a
            href="https://linkedin.com/in/ccardenasg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/cgomezc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
  
        {/* Background code pattern */}
        <div className="absolute inset-0 opacity-5">
          <pre className="text-xm sm:text-sm overflow-hidden h-full">
            {`
  using System;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.EntityFrameworkCore;
  
  namespace Portfolio.Controllers
  {
      [ApiController]
      [Route("api/[controller]")]
      public class ProjectsController : ControllerBase
      {
          private readonly ApplicationDbContext _context;
  
          public ProjectsController(ApplicationDbContext context)
          {
              _context = context;
          }
  
          [HttpGet]
          public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
          {
              return await _context.Projects.ToListAsync();
          }
      }
  }
            `}
          </pre>
        </div>
  
        <div className="container mx-auto px-6 py-12 z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-3/5 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="text-emerald-400 h-6 w-6" />
                <span className="text-emerald-400 font-mono text-sm">backend_developer.cs</span>
              </div>
  
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {t("name.first")} <br />
                <span className="text-emerald-400">{t("name.last")}</span>
              </h1>
  
              <div className="h-16">
                <h2 className="text-2xl sm:text-3xl font-mono">
                  <span className="text-emerald-400">&gt;</span> {typedText}
                  <span className="animate-pulse">_</span>
                </h2>
              </div>
  
              <p className="text-slate-300 text-lg max-w-xl">{t("description")}</p>
  
              <div className="flex flex-wrap gap-3 pt-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
                  <FileCode2 className="h-5 w-5" />
                  {t("buttons.projects")}
                </button>
                <button className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  {t("buttons.contact")}
                </button>
              </div>
            </div>
  
            <div className="w-full md:w-2/5">
              <div className="relative bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-slate-700 pb-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-400 text-sm ml-2 font-mono">skills.json</span>
                </div>
  
                <div className="font-mono text-sm">
                  <p className="text-slate-400">// {t("skills.title")}</p>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center gap-2">
                      <Braces className="text-blue-400 h-5 w-5" />
                      <span className="text-blue-400">C#</span>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-blue-400 rounded-sm ml-1"></div>
                        ))}
                      </div>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <Database className="text-purple-400 h-5 w-5" />
                      <span className="text-purple-400">SQL</span>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-purple-400 rounded-sm ml-1"></div>
                        ))}
                      </div>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <Code className="text-yellow-400 h-5 w-5" />
                      <span className="text-yellow-400">.NET Core</span>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-yellow-400 rounded-sm ml-1"></div>
                        ))}
                      </div>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <Cloud className="text-cyan-400 h-5 w-5" />
                      <span className="text-cyan-400">Azure</span>
                      <div className="ml-auto flex">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-cyan-400 rounded-sm ml-1"></div>
                        ))}
                        <div className="h-2 w-6 bg-slate-600 rounded-sm ml-1"></div>
                      </div>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <Code className="text-orange-400 h-5 w-5" />
                      <span className="text-orange-400">React/Next.js</span>
                      <div className="ml-auto flex">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-orange-400 rounded-sm ml-1"></div>
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-slate-600 rounded-sm ml-1"></div>
                        ))}
                      </div>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <Code className="text-red-400 h-5 w-5" />
                      <span className="text-red-400">Angular</span>
                      <div className="ml-auto flex">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-red-400 rounded-sm ml-1"></div>
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="h-2 w-6 bg-slate-600 rounded-sm ml-1"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-emerald-400" />
        </div>
      </section>
    )
  }
  