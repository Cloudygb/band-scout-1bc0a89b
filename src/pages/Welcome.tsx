
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Welcome = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="container py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome, {user?.name}!</CardTitle>
          <CardDescription>
            You've successfully logged in to your Band-it account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is your personalized dashboard. As we develop the platform, you'll see your upcoming events, recommended bands, and more right here.</p>
          
          <div className="p-4 bg-muted rounded-md">
            <h3 className="font-medium mb-2">Your test account details:</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>Email:</strong> {user?.email}</li>
              <li><strong>Account type:</strong> {user?.role}</li>
              <li><strong>Member since:</strong> {new Date(user?.createdAt || "").toLocaleDateString()}</li>
            </ul>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button onClick={() => navigate("/bands")}>
              Find Bands
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Welcome;
