import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be an API call
    toast({
      variant: "destructive",
      title: "Invalid credentials",
      description: "The username or password you entered is incorrect.",
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-up">
        <div className="text-center">
          <img 
            src="/lovable-uploads/c865e138-a44c-4a9e-8650-447e5445df7f.png"
            alt="Warrior Capital"
            className="h-12 mx-auto mb-8"
          />
          <h2 className="text-2xl font-semibold text-white mb-2">
            Investor Login
          </h2>
          <p className="text-warrior-gray">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent border-warrior-gray text-white"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-warrior-gray text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-warrior-purple hover:bg-warrior-secondary text-white"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;