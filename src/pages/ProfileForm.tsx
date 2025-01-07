import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield, ArrowLeft, ArrowRight } from "lucide-react";

const ProfileForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    education: "",
    occupation: "",
  });

  const validatePage = (page: number) => {
    switch (page) {
      case 1:
        return !!formData.age && !!formData.gender;
      case 2:
        return !!formData.education && !!formData.occupation;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validatePage(currentPage)) {
      toast({
        title: "Please fill all fields",
        description: "All fields on this page are required to proceed",
        variant: "destructive",
      });
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePage(currentPage)) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to proceed",
        variant: "destructive",
      });
      return;
    }
    navigate("/questions");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-teal-100 p-3 rounded-full">
              <Shield className="h-6 w-6 text-teal-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Your Profile Information
          </h1>

          <p className="text-slate-600 text-center mb-8">
            This information helps us provide more accurate and personalized insights.
            Your data is kept confidential and used only for assessment purposes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentPage === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="education">Education Level</Label>
                  <Select
                    value={formData.education}
                    onValueChange={(value) => setFormData({ ...formData, education: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="doctorate">Doctorate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="occupation">Current Occupation</Label>
                  <Input
                    id="occupation"
                    placeholder="Enter your occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              {currentPage > 1 && (
                <Button
                  type="button"
                  onClick={handleBack}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              
              {currentPage === 1 && (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
              
              {currentPage === 2 && (
                <Button
                  type="submit"
                  className="ml-auto bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Continue to Assessment
                </Button>
              )}
            </div>
          </form>

          <div className="mt-4 flex justify-center">
            <span className="text-sm text-slate-500">
              Page {currentPage} of 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;