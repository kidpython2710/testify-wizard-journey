import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";

const questions = [
  {
    id: 1,
    text: "I see myself as someone who is outgoing, sociable",
    options: [
      { value: "1", label: "Strongly Disagree" },
      { value: "2", label: "Disagree" },
      { value: "3", label: "Neutral" },
      { value: "4", label: "Agree" },
      { value: "5", label: "Strongly Agree" },
    ],
  },
  // Add more questions as needed
];

const QuestionScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm font-medium text-slate-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="flex items-center space-x-2 text-slate-600">
              <Clock className="h-4 w-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          <Progress value={progress} className="mb-8" />

          <div className="space-y-8">
            <div className="text-xl font-medium text-slate-900">
              {questions[currentQuestion].text}
            </div>

            <RadioGroup
              value={answers[currentQuestion]}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-grow cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
              >
                Previous
              </Button>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                disabled={!answers[currentQuestion]}
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion((prev) => prev + 1);
                  } else {
                    // Handle test completion
                    console.log("Test completed", answers);
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;