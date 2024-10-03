import {create} from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

type SelectedQuestion = {
  index: number;
  description: string;
};

type SelectedQuestionsState = {
  selectedQuestions: SelectedQuestion[];
  addSelectedQuestion: (index: number, description: string) => void;
  clearSelectedQuestions: () => void;
  removeSelectedQuestion: (index: number) => void;
};

const sessionStorageCustom: PersistStorage<SelectedQuestionsState> = {
  getItem: (name) => {
    const value = sessionStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    sessionStorage.removeItem(name);
  },
};

export const useSelectedQuestions = create<SelectedQuestionsState>()(
  persist(
    (set) => ({
      selectedQuestions: [],
      addSelectedQuestion: (index, description) =>
        set((state) => ({
          selectedQuestions: [
            ...state.selectedQuestions,
            { index, description },
          ],
        })),
        removeSelectedQuestion: (index : number) =>
          set((state) => ({
            selectedQuestions: state.selectedQuestions.filter(
              (question) => question.index !== index
            ),
          })),

      clearSelectedQuestions: () => set(() => ({ selectedQuestions: [] })),
    }),
    {
      name: 'selected-questions-storage', 
      storage: sessionStorageCustom,
    }
  )
);
