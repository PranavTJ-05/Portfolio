import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    title: 'Building a Smart Home System from Scratch',
    description: 'A comprehensive guide on creating your own smart home automation system using ESP32 and React. Learn about hardware selection, software architecture, and system integration.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop',
    slug: 'smart-home-system',
    readTime: '10 min read',
  },
  {
    title: 'Energy Monitoring Best Practices',
    description: 'Learn how to effectively monitor and optimize energy consumption in your projects. Discover the latest techniques and tools for energy efficiency.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1592833159057-6fdc2a5c1678?w=800&h=400&fit=crop',
    slug: 'energy-monitoring',
    readTime: '8 min read',
  },
  {
    title: 'Full Stack Development with Next.js and TypeScript',
    description: 'A deep dive into building modern web applications with Next.js and TypeScript. Explore best practices and advanced patterns.',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    slug: 'nextjs-typescript',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-8">
          Thoughts and insights on software development, electrical engineering, and technology.
        </p>
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="md:flex">
                  <div className="relative h-[200px] md:w-[300px] md:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                        <span>•</span>
                        {post.readTime}
                      </div>
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {post.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}