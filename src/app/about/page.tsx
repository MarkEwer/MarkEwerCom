import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Linkedin, Github, Twitter, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(139, 92, 246)" // violet-500
        maxOpacity={0.15}
        flickerChance={0.08}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/">
            <RainbowButton size="sm" className="text-xs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </RainbowButton>
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          <AuroraText
            colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
            className="inline-block"
          >
            About Mark Ewer
          </AuroraText>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Photo Column */}
          <div className="flex justify-center">
            <img
              src="/images/HeadShot.jpg"
              alt="Mark Ewer"
              className="rounded-xl shadow-lg object-cover w-64 h-80 md:w-72 md:h-96 bg-gray-200"
            />
          </div>
          {/* Social Contacts Column */}
          <div>
            <p className="text-lg text-gray-700 mb-10 text-center md:text-left">
              Software Architect, Technology Leader, and passionate builder of
              scalable, modern web solutions.
            </p>
            <div className="bg-violet-50 rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-violet-700">
                Contact & Socials
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://linkedin.com/in/markewer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-violet-700 hover:text-violet-900 transition-colors font-medium"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                    <span className="text-xs text-gray-500">/in/markewer</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/MarkEwer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-violet-700 hover:text-violet-900 transition-colors font-medium"
                  >
                    <Github className="h-6 w-6" />
                    <span>GitHub</span>
                    <span className="text-xs text-gray-500">@MarkEwer</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/Mark_Ewer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-violet-700 hover:text-violet-900 transition-colors font-medium"
                  >
                    <Twitter className="h-6 w-6" />
                    <span>X (Twitter)</span>
                    <span className="text-xs text-gray-500">@Mark_Ewer</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
