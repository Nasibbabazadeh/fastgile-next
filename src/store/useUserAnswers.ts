import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserAnswerState {
  userAnswers: Record<string, string>;
  setUserAnswer: (questionId: string, answer: string) => void;
  resetAnswers: () => void;
}

const useUserAnswersStore = create<UserAnswerState>()(
  persist(
    (set) => ({
      userAnswers: {},

      setUserAnswer: (questionId: string, answer: string) =>
        set((state) => ({
          userAnswers: {
            ...state.userAnswers,
            [questionId]: answer,
          },
        })),

      resetAnswers: () => set({ userAnswers: {} }),
    }),
    {
      name: 'user-answers-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserAnswersStore;
