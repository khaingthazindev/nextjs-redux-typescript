"use client"

import {useState} from "react";
import {ProfileContext, useProfileContext} from "@/app/components/react-with-typescript/context/ProfileContext";

function HomePage() {
  const {profile, setProfile} = useProfileContext();
  const handleChangeProfile = () => {
    setProfile({name: "Khaing"});
  }
  return (<div>
    <h1>HomePage profile: {profile.name}</h1>
    <button onClick={handleChangeProfile}>change user in home and google map</button>
  </div>)
}

function ContactFormPage() {
  return (<div>
    ContactFormPage profile: thazin
  </div>)
}

function ContactMapPage() {
  return (<div>
    ContactMapPage profile: thazin
    <GoogleMapPage/>
  </div>)
}

function GoogleMapPage() {
  const {profile, setProfile} = useProfileContext();
  return (<div>
    GoogleMapPage profile: {profile.name}
  </div>)
}

function ContactPage() {
  return (<div>
    <h1>ContactPage profile: thazin</h1>
    <ContactFormPage/>
    <ContactMapPage/>
  </div>)
}

function AboutPage() {
  return (<div>
    <h1>AboutPage profile: thazin</h1>
  </div>)
}

export default function ContextDemo() {
  const [profile, setProfile] = useState({name: 'thazin'});
  return (<div>
    <ProfileContext.Provider value={{profile, setProfile}}>
      <HomePage/>
      <ContactPage/>
      <AboutPage/>
    </ProfileContext.Provider>
  </div>)
}