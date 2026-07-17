import { glob, file } from 'astro/loaders';
import { defineCollection } from 'astro/content/config';
import { z } from 'astro/zod'

const projects = defineCollection({
    loader: glob({pattern: "src/content/projects/**/*.md"}),
    schema: z.object({
        id: z.number(),
        title: z.string().max(50),
        tools: z.preprocess(
            (val) => (Array.isArray(val) ? val : [val]),
            z.array(z.enum(["EC2", "ASG", "ALB", "Route 53", "ACM", "Jenkins", "Kubernetes", "Ansible", "Docker", "Helm", "VM", "GitLab CI/CD", "Prometheus", "Grafana", "Nginx", "SSL/TLS", "Linux", "Load Balancer"]))),
        year: z.string().max(4),
        liveSite: z.url().optional(),
        github: z.url().optional(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
});

const blog = defineCollection({
    loader: glob({pattern: "src/content/blog/**/*.md"}),
    schema: z.object({
        id: z.number(),
        slug: z.string().max(50),
        title: z.string().max(50),
        publishedDate: z.date(),
        category: z.enum(["systems", "ai", "productivity"]),
        readingTime: z.number().optional(),
        isDraft: z.boolean()
    })
})

const experience = defineCollection({
    loader: file("src/content/resume/experience.yaml"),
    schema: z.object({
        title: z.string().max(100),
        timeline: z.string().max(25),
        description: z.string().max(600)
    })
})

const education = defineCollection({
    loader: file("src/content/resume/education.yaml"),
    schema: z.object({
        title: z.string().max(70),
        timeline: z.string().max(15),
        school: z.string().max(70)
    })
})

const skillsAndTools = defineCollection({
    loader: file("src/content/skills-and-tools/skillsAndTools.yaml"),
    schema: z.object({
        title: z.string().max(70),
        items: z.array(z.string())
    })
})


export const collections = { projects, blog, experience, education, skillsAndTools };
