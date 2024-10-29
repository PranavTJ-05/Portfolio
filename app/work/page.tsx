import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2020 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Improved system performance by 40% through optimization and caching',
      'Mentored team of 5 junior developers and conducted technical interviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Software Engineer',
    company: 'InnovateTech',
    location: 'Boston, MA',
    period: '2018 - 2020',
    description: [
      'Developed full-stack applications using React and Node.js',
      'Implemented automated testing reducing bugs by 45%',
      'Led migration from monolith to microservices architecture',
      'Collaborated with product team to define technical requirements',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'Jenkins', 'Git', 'Jest'],
  },
  {
    title: 'Electrical Engineering Intern',
    company: 'PowerSystems Co.',
    location: 'Seattle, WA',
    period: '2017 - 2018',
    description: [
      'Assisted in designing power distribution systems for commercial buildings',
      'Developed automation scripts reducing testing time by 30%',
      'Created comprehensive documentation for system maintenance',
      'Participated in cross-functional team projects',
    ],
    skills: ['Arduino', 'Python', 'AutoCAD', 'Circuit Design', 'PLC Programming'],
  },
];

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[980px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-muted-foreground mb-8">
          My professional journey combining software development and electrical engineering expertise.
        </p>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground mb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {experience.company}
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    {experience.location}
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>
                <CardTitle className="text-2xl">{experience.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}