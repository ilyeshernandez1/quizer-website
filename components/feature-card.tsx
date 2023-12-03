import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface FeatureCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ name, description, icon }: FeatureCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        {icon}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
