
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Zap, Moon } from 'lucide-react';

const questions = [
  {
    id: 'q1',
    question: 'How do you feel after one standard cup of coffee (or ~100mg of caffeine)?',
    answers: [
      { text: 'Pleasantly alert and focused.', points: 1 },
      { text: 'A bit jittery, anxious, or "too buzzed".', points: 3 },
      { text: 'I barely notice it.', points: 0 },
    ],
  },
  {
    id: 'q2',
    question: 'If you have a coffee at 4 PM, how does it affect your sleep?',
    answers: [
      { text: 'I have significant trouble falling or staying asleep.', points: 3 },
      { text: 'It might take me a little longer to fall asleep.', points: 2 },
      { text: 'No effect at all, I sleep soundly.', points: 0 },
    ],
  },
  {
    id: 'q3',
    question: 'Have you ever felt heart palpitations, or a "racing heart" from caffeine?',
    answers: [
      { text: 'Yes, often, even from a small amount.', points: 3 },
      { text: 'Maybe once or twice, only when I had a very large amount.', points: 1 },
      { text: 'Never.', points: 0 },
    ],
  },
  {
    id: 'q4',
    question: 'How many cups of coffee can you drink in a day before feeling negative effects?',
    answers: [
      { text: 'One is usually my limit.', points: 3 },
      { text: 'I can handle 2-3 cups just fine.', points: 1 },
      { text: 'I can drink 4 or more and still feel okay.', points: 0 },
    ],
  },
  {
    id: 'q5',
    question: 'If you skip your usual morning caffeine, what happens?',
    answers: [
      { text: 'I get a headache and feel very fatigued.', points: 1 }, // This indicates dependence, but not sensitivity
      { text: 'I feel a bit sluggish, but I can manage.', points: 2 },
      { text: 'Not much, I don\'t really "need" it.', points: 3 }, // Inverted scoring
    ],
  },
];

type Result = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const results: Record<string, Result> = {
  slow: {
    title: 'You are likely a Slow Metabolizer',
    description: 'Your body processes caffeine very slowly, making you highly sensitive to its effects. Small amounts can feel potent, and caffeine consumed in the afternoon is very likely to disrupt your sleep. You are more prone to jitters and anxiety from caffeine.',
    icon: Moon,
  },
  average: {
    title: 'You are likely an Average Metabolizer',
    description: 'You process caffeine at a moderate pace. You can enjoy the benefits of caffeine but need to be mindful of dosage and timing. A coffee in the mid-afternoon might be okay, but anything later could interfere with your sleep.',
    icon: Coffee,
  },
  fast: {
    title: 'You are likely a Fast Metabolizer',
    description: 'Your body processes caffeine very efficiently. You likely have a high tolerance, experiencing the alert focus of caffeine with fewer negative side effects like jitters. Caffeine\'s effects wear off relatively quickly for you.',
    icon: Zap,
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function CaffeineSensitivityTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const finalScore = newAnswers.reduce((a, b) => a + b, 0);
        setScore(finalScore);
      }
    }, 300);
  };

  const getResult = (): Result | null => {
    if (score === null) return null;
    if (score >= 9) return results.slow;
    if (score >= 4) return results.average;
    return results.fast;
  };
  
  const resetTest = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setScore(null);
  }

  const result = getResult();
  const currentQData = questions[currentQuestion];

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden">
      <CardHeader>
        <CardTitle>Caffeine Sensitivity Questionnaire</CardTitle>
        <CardDescription>Answer the questions to estimate your caffeine metabolism speed.</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[280px]">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center text-center"
              role="alert"
            >
              <result.icon className="h-16 w-16 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
              <p className="text-muted-foreground">{result.description}</p>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <fieldset>
                <legend className="text-lg font-semibold mb-4">{currentQData.question}</legend>
                <RadioGroup onValueChange={(value) => handleAnswer(Number(value))} aria-label={currentQData.question}>
                  <div className="space-y-2">
                    {currentQData.answers.map((answer, index) => (
                      <Label
                        key={`${currentQData.id}-a${index}`}
                        htmlFor={`${currentQData.id}-a${index}`}
                        className="flex items-center space-x-3 p-3 border rounded-md has-[:checked]:bg-accent has-[:checked]:border-accent-foreground/50 transition-colors"
                      >
                        <RadioGroupItem value={String(answer.points)} id={`${currentQData.id}-a${index}`} />
                        <span>{answer.text}</span>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              </fieldset>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-6 border-t">
        {result ? (
            <Button onClick={resetTest} className="w-full">Take the Test Again</Button>
        ) : (
            <>
                <p className="text-sm text-muted-foreground" aria-live="polite">
                Question {currentQuestion + 1} of {questions.length}
                </p>
                <div
                    className="w-full bg-muted rounded-full h-2.5"
                    role="progressbar"
                    aria-valuenow={currentQuestion + 1}
                    aria-valuemin={1}
                    aria-valuemax={questions.length}
                    aria-valuetext={`Question ${currentQuestion + 1} of ${questions.length}`}
                 >
                    <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </>
        )}
      </CardFooter>
    </Card>
  );
}
