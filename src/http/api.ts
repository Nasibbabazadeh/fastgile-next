const API = {
    "community": "community/read-info",
    "articles": "article/read-info",
    'register':'auth/register-user',
    'verify':'verify?',
    'repeat-verify':'verify/send_repeat_verification_code',
    'login':'auth/login-user',
    'exam_questions' :'question/read-info',
    'exam-result': 'result',
    'community-filter':'community/search?',
    'ask-question-community':'community',
    'result-feedback':'user-feedback',
    'community-count':'community/read-info-count',
    'article-count':'article/read-info-count',
    'leadership-board' :'leadership-board?',
    'leadership-board-2' :'leadership-board/out?',
    'community-details' :'community-reply/read-info?',
    'community-reply':'community-reply'
  };
  export default API;
