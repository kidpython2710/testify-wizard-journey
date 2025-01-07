import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Clock, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestInstructions = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStart = () => {
    if (!accepted) {
      toast({
        title: "Please accept the terms",
        description: "You must accept the terms to continue",
        variant: "destructive",
      });
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-teal-100 p-3 rounded-full">
              <Info className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Big Five Personality Assessment
          </h1>
          
          <p className="text-slate-600 text-center mb-8">
            Understand your personality dimensions through this comprehensive assessment
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
              <Clock className="h-6 w-6 text-teal-600 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Duration</h3>
                <p className="text-slate-600">This assessment takes approximately 15-20 minutes to complete</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Instructions:</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Answer all questions honestly and to the best of your ability</li>
                <li>There are no right or wrong answers</li>
                <li>Choose the response that best describes you</li>
                <li>Avoid spending too much time on any single question</li>
                <li>Complete the assessment in one sitting</li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I understand and agree to proceed with the assessment
                </label>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                onClick={handleStart}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8"
                size="lg"
              >
                Start Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions;