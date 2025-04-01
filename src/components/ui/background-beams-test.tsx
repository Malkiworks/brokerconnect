"use client";
import React from "react";
import Link from "next/link";

export default function BackgroundBeamsTest() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto bg-neutral-900/30 backdrop-blur-sm p-8 rounded-xl border border-neutral-800/50">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-neutral-200">
          Background Beams Test
        </h1>
        <p className="text-neutral-300 text-center mb-8">
          This is a test page to verify that the background beams effect is working correctly.
          The beams should appear behind this content across the entire page.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-neutral-800/30 p-4 rounded-lg border border-neutral-700/30">
              <h3 className="text-lg font-medium mb-2">Card {i + 1}</h3>
              <p className="text-sm text-neutral-400">This is a test card to show content over the beams background.</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-neutral-800/70 hover:bg-neutral-700/70 transition-colors text-neutral-200 rounded-lg">
            Test Button
          </button>
          <Link href="/" className="px-6 py-3 bg-neutral-800/70 hover:bg-neutral-700/70 transition-colors text-neutral-200 rounded-lg inline-block">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
} 