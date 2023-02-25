import { UserSession } from 'hooks/api/auth/useUserSession';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type UserSessionStore = {
	userSession: UserSession;
	setUserSession: (userSession: UserSession) => void;
};

export const initialState: UserSession = {
	createdAt: null,
	modifiedAt: null,
	id: null,
	name: null,
	nickname: null,
	email: null,
	phoneNumber: null,
	type: null, // 'USER' | 'BOSS'
	oauthType: null, // KAKAO | NAVER
	oauthIdentity: null,
	rating: null,
	imgPath: null,
};

export const userSessionStore = (set) => ({
	userSession: initialState,
	setUserSession: (newUserSession: UserSession) => set(() => ({ userSession: newUserSession })),
});

const useUserSessionStore = create<UserSessionStore>()(
	process.env.NODE_ENV === 'production' ? userSessionStore : devtools(userSessionStore),
);

export default useUserSessionStore;
