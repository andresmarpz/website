import create from 'zustand'

interface Store{
	alreadyAnimated: boolean;
	setAlreadyAnimated: (alreadyAnimated: boolean) => void;
}

const useStore = create<Store>((set, get) => ({
	alreadyAnimated: false,
	setAlreadyAnimated: (alreadyAnimated: boolean) => set({ alreadyAnimated }),
}));

export default useStore