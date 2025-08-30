"use client";

import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 flex-grow pt-16 sm:pt-10 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 lg:pt-20 space-y-6 sm:space-y-8 ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="block text-gray-100">Transform</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Body
                </span>
                <span className="block pt-2 text-gray-100">
                  With{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    AI Precision
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
                Get personalized diet plans and workout routines instantly —
                powered by AI and designed to help you reach peak performance.
              </p>

              {/* BUTTON */}
              <div className="pt-4 sm:pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition"
                >
                  <Link
                    href={"/generate-program"}
                    className="flex items-center font-mono"
                  >
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>

              {/* STATS */}
              <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-8 sm:pt-10 font-mono text-sm">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    500+
                  </div>
                  <span className="text-gray-400">Active Users</span>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    3min
                  </div>
                  <span className="text-gray-400">Avg. Generation</span>
                </div>
                <div className="hidden sm:block h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    100%
                  </div>
                  <span className="text-gray-400">Personalized</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            {/* RIGHT CONTENT */}
            <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-[-40px]">
              <div className="relative w-full max-w-sm md:max-w-md max-h-[400px] md:max-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border bg-gradient-to-b from-background to-muted">
                <img
                  src="/ai-hero.png"
                  alt="AI Fitness Coach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserPrograms />
    </div>
  );
};
export default HomePage;
