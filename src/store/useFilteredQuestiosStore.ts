import { TCommunityData } from '@/components/community/CommunityComponent';
import { create } from 'zustand';

interface FilterState {
    filterData: TCommunityData[];
    setFilterData: (data: TCommunityData[]) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    filterData: [],
    setFilterData: (data: TCommunityData[]) => set(() => ({ filterData: data })),
}));
