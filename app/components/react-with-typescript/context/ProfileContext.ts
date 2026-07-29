import {createContext, useContext} from "react";

type Profile = {
  name: string;
}
type SetProfile = (profile: Profile) => void;

interface ProfileContextType {
  profile: Profile;
  setProfile: SetProfile;
}
export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfileContext = () => {
  const profileContext = useContext(ProfileContext)
  if (profileContext) {
    return profileContext;
  } else {
    throw new Error("No Context Value.");
  }
};