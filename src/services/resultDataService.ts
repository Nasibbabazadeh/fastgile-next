// import API from "@/http/api";

// async function getResultData(userAnswers, questionAnswers, questionDescription, questionId)  {
//   const response = await fetch(API['exam-result'], {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       answers: userAnswers,
//       questions: {
//         answers: questionAnswers,
//         description: questionDescription,
//         id: questionId,
//         limit: 0,
//         type: 'singleChoice',
//       },
//     }),
//   });

//   const data = await response.json();
//   return data; 
// }

// export default getResultData;
