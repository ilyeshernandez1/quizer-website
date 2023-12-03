import { FeatureCard, FeatureCardProps } from "./feature-card";

export interface FeatureCardWrapperProps {
  features: FeatureCardProps[];
  className?: string;
}

export function FeatureCardWrapper({
  features,
  className,
}: FeatureCardWrapperProps) {
  return (
    <div className={className ?? ""}>
      {features.map((feature) => (
        <FeatureCard key={feature.name} {...feature} />
      ))}
    </div>
  );
}
