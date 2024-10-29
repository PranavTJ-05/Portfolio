import { GitFork, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row max-w-[980px] mx-auto items-center justify-between gap-8 mb-24 mt-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm Pranav TJ 👋
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Full Stack Developer & Electrical Engineering Enthusiast
          </p>
          <p className="mb-6">
            I blend the worlds of software development and electrical engineering to create innovative solutions. 
            With expertise in both fields, I bring a unique perspective to technical challenges.
          </p>
          <div className="flex gap-4">
            <Button variant="default">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline">
              <GitFork className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
          <Image
            src='my_photo.jpg'
            alt="Pranav TJ"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16 max-w-[980px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-muted-foreground mb-2">TechCorp Inc. • 2020 - Present</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Led development of microservices architecture</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Electrical Systems Engineer</h3>
            <p className="text-muted-foreground mb-2">PowerTech Solutions • 2018 - 2020</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Designed and implemented power distribution systems</li>
              <li>Developed automation solutions for industrial processes</li>
              <li>Reduced system downtime by 40% through predictive maintenance</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 max-w-[980px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Smart Home Energy Monitor</h3>
            <p className="text-muted-foreground mb-4">
              IoT device for real-time power consumption monitoring with mobile app integration
            </p>
            <Button variant="outline" size="sm">View Project</Button>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Cloud-Based SCADA System</h3>
            <p className="text-muted-foreground mb-4">
              Modern SCADA implementation using microservices and real-time data processing
            </p>
            <Button variant="outline" size="sm">View Project</Button>
          </Card>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="mb-16 max-w-[980px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">GitHub Contributions</h2>
        <Card className="p-6">
          <div className="h-[200px] flex items-center justify-center">
            {/* Replace with actual GitHub contributions graph */}
            <p className="text-muted-foreground">GitHub Contributions Graph Coming Soon</p>
          </div>
        </Card>
      </section>

      {/* Connect Section */}
      <section className="max-w-[980px] mx-auto">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <Card className="p-6">
          <p className="mb-6">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          <div className="flex gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button variant="outline">
              Download Resume
            </Button>
          </div>
        </Card>
      </section>
    </main>
  )
}