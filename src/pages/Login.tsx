import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      variant: "destructive",
      title: "Error",
      description: "Invalid username or password",
    });
  };

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center p-4">
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-white hover:bg-white hover:text-black rounded-none font-light"
      >
        <ChevronLeft className="mr-2" />
        Back
      </Button>

      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <img
            src="/lovable-uploads/7611d285-1ab8-40e9-b8c1-c4ca9ddd53b8.png"
            alt="Warrior Capital"
            className="h-12 w-auto mb-8"
          />
          <h2 className="text-2xl font-light text-white mb-2 tracking-wide">
            Investor Login
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-light text-warrior-gray tracking-wide"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent border-warrior-gray text-white rounded-none font-light tracking-wide"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-light text-warrior-gray tracking-wide"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-warrior-gray text-white rounded-none font-light tracking-wide"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-black rounded-none font-light tracking-wide"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;