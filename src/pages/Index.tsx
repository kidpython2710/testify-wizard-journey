import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Brain, Clock, Share2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Personality Assessment Platform
          </h1>
          <p className="text-xl text-slate-600">
            Discover insights about yourself through scientifically validated assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-teal-100 p-3 rounded-full">
                <Brain className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Big Five Personality
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              Understand your personality dimensions through this comprehensive assessment
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                15-20 minutes
              </div>
              <div className="flex items-center">
                <Share2 className="h-4 w-4 mr-1" />
                Premium
              </div>
            </div>
            <Button
              onClick={() => navigate("/instructions")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            >
              Start Test
            </Button>
          </div>

          {/* Placeholder for future tests */}
          <div className="bg-white rounded-lg shadow-lg p-8 opacity-50">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-slate-100 p-3 rounded-full">
                <Brain className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Coming Soon
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              More assessments will be available soon
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                TBA
              </div>
            </div>
            <Button disabled className="w-full">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;