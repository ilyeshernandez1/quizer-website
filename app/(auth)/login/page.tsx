"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mt-64">
      <form className="w-1/4 flex flex-col gap-y-4">
        <h1 className="text-4xl font-bold font-heading text-center">
          Welcome back!
        </h1>
        <p className="text-center text-muted-foreground">
          Log in to your account
        </p>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@me.com"
        ></Input>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
