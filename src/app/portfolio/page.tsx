import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { ArrowLeft, ExternalLink, Github, Calendar, Code } from 'lucide-react'

// Portfolio data based on your GitHub repositories
const portfolioProjects = [
  {
    title: "WebAssembly with OOUI and Blazor",
    description: "An overview of Web Assembly with demos of OOUI and Blazor. Shows how to use the Mono compiler toolchain to build, deploy, and run .Net assemblies in the web browser.",
    technologies: ["C#", "WebAssembly", "Blazor", "OOUI", ".NET"],
    date: "May 2018",
    githubUrl: "https://github.com/MarkEwer/JaxDugSamples/tree/master/WebAssembly",
    highlights: ["Bleeding-edge WebAssembly technology", "Browser-based .NET execution", "OOUI and Blazor demonstrations"]
  },
  {
    title: "Transitioning Legacy Procedural to Object-Oriented Code",
    description: "A comprehensive guide on converting procedural code typically found in legacy applications into modern, object-oriented structures using C# 6 features.",
    technologies: ["C#", "Object-Oriented Programming", "Refactoring", "Design Patterns"],
    date: "November 2017",
    githubUrl: "https://github.com/MarkEwer/JaxDugSamples/tree/master/Refactoring_Procedural_Code",
    highlights: ["Boolean conditionals to object branching", "Procedural iterators to object selectors", "Algorithm to strategy pattern conversion", "Task execution pipelines"]
  },
  {
    title: "CQRS and Domain-Driven Design",
    description: "Implementation of a CQRS system with frameworks for the .Net platform. Demonstrates command-query separation and domain modeling best practices.",
    technologies: ["C#", "CQRS", "DDD", ".NET", "Event Sourcing"],
    date: "August 2017",
    githubUrl: "https://github.com/MarkEwer/JaxDugSamples/tree/master/BenefitsEstimation",
    highlights: ["CQRS pattern implementation", "Domain-driven design principles", "Benefits estimation system", "Code Impact 2017 presentation"]
  },
  {
    title: "Evolution of CQRS + Event Sourcing",
    description: "Shows how CQRS and Event Sourcing design patterns are natural evolutionary steps when growing an application, focusing on performance and cache invalidation complexity.",
    technologies: ["C#", "CQRS", "Event Sourcing", "Performance Optimization"],
    date: "June 2017",
    githubUrl: "https://github.com/MarkEwer/JaxDugSamples/tree/master/CQRS_ES_Sample",
    highlights: ["Command-query separation", "Event sourcing implementation", "Performance enhancement strategies", "Cache invalidation solutions"]
  },
  {
    title: "Akka.Net Actor System Overview",
    description: "Implementation of the Actor Model system for building highly concurrent, distributed, fault-tolerant, and event-driven applications on the .Net platform.",
    technologies: ["C#", "Akka.Net", "Actor Model", "Distributed Systems", "Fault Tolerance"],
    date: "June 2017",
    githubUrl: "https://github.com/MarkEwer/JaxDugSamples/tree/master/Akka_Sample",
    highlights: ["Actor system implementation", "Fault-tolerance with supervision hierarchy", "Finite state machine actors", "Location transparency for distributed processing"]
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-100 relative">
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#8b5cf6"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <Link href="/" className="inline-block mb-8">
            <RainbowButton size="sm" className="text-xs">
              <ArrowLeft className="w-3 h-3" />
              Back to Home
            </RainbowButton>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio & Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of presentations, sample code, and technical demonstrations 
              showcasing modern software architecture patterns and cutting-edge technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-violet-600 hover:text-violet-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-violet-100 text-violet-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Highlights
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-violet-50 to-purple-50">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  More Projects & Presentations
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  These projects represent presentations given at JaxDug (Jacksonville .NET User Group) 
                  and various conferences. Each includes comprehensive sample code, presentation slides, 
                  and detailed documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/MarkEwer/JaxDugSamples"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RainbowButton>
                      <Github className="w-4 h-4 mr-2" />
                      View All on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </RainbowButton>
                  </a>
                  <Link href="/blog">
                    <RainbowButton>
                      Read Technical Blog
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </RainbowButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
