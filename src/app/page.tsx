// Remove unused Image import
import Link from "next/link";
import Image from "next/image";
import { getRecentBlogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/magicui/aurora-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export default async function HomePage() {
  const recentPosts = await getRecentBlogPosts(3);

  return (
    <div className="min-h-screen relative bg-white">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(139, 92, 246)" // violet-500
        maxOpacity={0.15}
        flickerChance={0.08}
      />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="relative">
              <h1 className="text-5xl sm:text-7xl font-bold">
                <HyperText
                  className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent text-center"
                  startOnView={true}
                  duration={1200}
                  delay={500}
                >
                  Mark Ewer
                </HyperText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mt-4">
                Software Architect & Technology Leader
              </p>
            </div>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable software solutions, leading high-performing teams, 
              and applying agile methodologies to deliver exceptional results. With expertise in 
              modern web technologies and system architecture, I help organizations transform 
              their digital presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <RainbowButton>
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </Link>
              <Link href="/portfolio">
                <RainbowButton>
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-violet-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                  <Code className="h-8 w-8 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  <AuroraText 
                    colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                    className="text-xl font-semibold"
                  >
                    Software Architecture
                  </AuroraText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Designing scalable, maintainable systems using modern patterns like CQRS, 
                  event sourcing, and microservices architecture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-violet-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                  <Zap className="h-8 w-8 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  <AuroraText 
                    colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                    className="text-xl font-semibold"
                  >
                    AI Tools Design
                  </AuroraText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Creating intelligent development tools and AI-powered solutions that enhance 
                  productivity and streamline software development workflows.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-violet-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                  <Zap className="h-8 w-8 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  <AuroraText 
                    colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                    className="text-xl font-semibold"
                  >
                    Agile Leadership
                  </AuroraText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Leading self-organizing teams through agile transformations, focusing on 
                  sustainable development and continuous improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-violet-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                  <Palette className="h-8 w-8 text-violet-600" />
                </div>
                <CardTitle className="text-xl">
                  <AuroraText 
                    colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                    className="text-xl font-semibold"
                  >
                    Modern Web Development
                  </AuroraText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Building responsive, accessible web applications with React, Next.js, 
                  TypeScript, and cutting-edge UI frameworks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Thoughts</h2>
            <Link href="/blog">
              <RainbowButton>
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </RainbowButton>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Primary Image */}
                {post.metadata.primaryImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.metadata.primaryImage}
                      alt={post.metadata.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="group-hover:text-violet-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <AuroraText 
                        colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                        className="font-medium"
                      >
                        {post.metadata.title}
                      </AuroraText>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {new Date(post.metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.metadata.description || post.metadata.excerpt}
                  </p>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {post.metadata.tags?.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="flex items-center text-violet-600 hover:text-violet-800 transition-colors group/link"
                    >
                      <span className="text-sm font-medium mr-1">Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Ready to discuss your next project or explore new opportunities?
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/about#contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
