'use client';

import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Welcome to Insightify
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where ideas flourish and knowledge finds its voice. We're building a community 
              of thinkers, writers, and learners sharing meaningful insights.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Rich Content Creation</h3>
              <p className="text-muted-foreground">
                Create beautiful, engaging blog posts with our powerful editor. Support for 
                markdown, images, and code snippets makes your content shine.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Vibrant Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals, engage in meaningful discussions, 
                and build your network of fellow knowledge seekers.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Smart Discovery</h3>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with our intelligent content 
                recommendation system and powerful search features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Insightify, we believe in the power of shared knowledge and diverse 
                perspectives. Our platform is designed to empower voices, foster meaningful 
                discussions, and create a space where ideas can thrive.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a seasoned writer or just starting your journey, Insightify 
                provides the tools and community you need to grow and succeed.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Start Writing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Topics Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}