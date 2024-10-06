import { TExamData } from "@/components/exam/type";
import API from "@/http/api";

async function getResultData(userAnswers: Record<string, string>, questionsData: TExamData[]) {
  try {
    const requestBody = questionsData.map((question: TExamData) => {
      const userAnswer = userAnswers[question.id] || "";  
      
      return {
        answers: [userAnswer],
        question: {
          answers: question.answers, 
          description: question.description,
          id: question.id,
          limit: 0,  
          type: 'singleChoice',  
        }
      };
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API['exam-result']}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching exam result data:", error);
    throw error;  
  }
}

export default getResultData;
