import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Smart Home Automation',
    description: 'Complete home automation system with mobile app control. Features real-time monitoring, voice commands, and energy optimization.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop',
    tags: ['React', 'Node.js', 'ESP32', 'MQTT'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Energy Monitor',
    description: 'Real-time energy monitoring system with advanced analytics and predictive maintenance capabilities.',
    image: 'https://images.unsplash.com/photo-1592833159057-6fdc2a5c1678?w=800&h=400&fit=crop',
    tags: ['TypeScript', 'Next.js', 'Arduino', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Station',
    description: 'DIY weather station with web interface providing accurate local weather data and forecasting.',
    image: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=800&h=400&fit=crop',
    tags: ['Python', 'React', 'Raspberry Pi', 'InfluxDB'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground mb-8">
          Explore my latest work combining software development and electrical engineering.
        </p>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card">
              <div className="md:flex">
                <div className="relative h-[200px] md:w-[300px] md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href={project.demoUrl}>
                          <Globe className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}