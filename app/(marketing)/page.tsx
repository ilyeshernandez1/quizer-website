import { FeatureCardProps } from "@/components/feature-card";
import {
  FeatureCardWrapper,
  FeatureCardWrapperProps,
} from "@/components/feature-card-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "AI Magic",
      description: "Create quizzes effortlessly with AI-powered engagement!",
      icon: <h1 className="text-4xl">🚀</h1>,
    },
    {
      name: "Easy Quiz Builder",
      description:
        "Craft professional quizzes with or without AI, adapting to your style.",
      icon: <h1 className="text-4xl">🛠️</h1>,
    },
    {
      name: "Multi-Platform Compatibility",
      description:
        "Seamlessly integrate quizzes across various platforms for maximum accessibility.",
      icon: <h1 className="text-4xl">🌐</h1>,
    },
    {
      name: "Performance Analytics",
      description:
        "Gain insights into quiz success with detailed performance analytics.",
      icon: <h1 className="text-4xl">📊 </h1>,
    },
    {
      name: "Customizable Themes",
      description:
        "Personalize quizzes with unique themes to match your style.",
      icon: <h1 className="text-4xl">🎨</h1>,
    },
    {
      name: "Collaborative Quizzing",
      description:
        "Team up in real-time for engaging and collaborative quiz creation.",
      icon: <h1 className="text-4xl">👥</h1>,
    },
  ];

  return (
    <>
      <main className="flex gap-y-4 flex-col justify-center items-center w-full h-full mt-44">
        <Badge size="lg" variant="secondary">
          Beta Version
        </Badge>
        <h1 className="font-heading font-bold text-7xl">
          AI-Powered Quiz Builder
        </h1>
        <p className="text-muted-foreground text-center">
          Create quizzes effortlessly with our AI-driven Quiz Builder. Perfect
          for teachers, content <br /> creators, and quiz enthusiasts. Try it
          now during our beta phase!
        </p>
        <div className="flex gap-x-4">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            What&apos;s new?
          </Button>
        </div>
      </main>
      <section id="features" className="container flex flex-col justify-center items-center pt-64">
        <h1 className="font-heading font-bold text-6xl">
          Unlocking Power with AI
        </h1>
        <p className="text-center text-muted-foreground">
          Explore the potential of artificial intelligence with our advanced
          quiz builder. Harness the capabilities of AI for a <br />
          variety of features, while also enjoying a comprehensive quiz-building
          experience <br />
          that seamlessly operates without AI.
        </p>

        <FeatureCardWrapper
          className="w-3/4 gap-4 mt-24 grid grid-cols-3 grid-rows-2"
          features={features}
        />

        <p className="mt-5 text-muted-foreground">
          Quizer also includes a comprehensive documentation and a
          community-driven plugins marketplace.
        </p>
      </section>
      <section id="open-source" className="flex flex-col container justify-center items-center mt-44">
        <h1 className="font-heading font-bold text-6xl">We are open-source</h1>
        <p className="text-muted-foreground text-center">
          We love the community of open source. We are always looking for new
          contributors. Join our community on <Link href="https://github.com/quizer" className="text-primary hover:underline">GitHub</Link>
        </p>
      </section>
    </>
  );
}
