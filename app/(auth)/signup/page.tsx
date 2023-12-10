"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    setError(null);
  }, [])

  async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string) ?? ("" as string);
    const { error } = await supabase.auth.signInWithOtp({
      email,
    });
    if (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      sleep(5000);
      setLoading(false);
      router.refresh()
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-64">
      <form className="w-1/4 flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold font-heading text-center">
          Welcome back!
        </h1>
        <p className="text-center text-muted-foreground">
          Sign up to your account
        </p>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@me.com"
        ></Input>
        <Button disabled={loading} className="w-full" type="submit">
          {loading ? "Loading..." : "Create an account"}
        </Button>
        {error && <p className="text-red-500 text-center ">{error}</p>}
        <p className="text-center text-muted-foreground">
          You have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
