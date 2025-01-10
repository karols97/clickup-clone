import { useCallback, useEffect, useState } from "react";
import ButtonRender from "./modal-components/ButtonRender";
import { useUserProfile } from "@/app/server-actions/user/useUserProfile";

export default function UserProfilModal() {
  const [userInitial, setUserInitial] = useState("?"); // State for the initials
  const [fullName, setFullName] = useState(""); // State for the full name
  const [loading, setLoading] = useState(true); // State for loading data
  const { userData } = useUserProfile();

  // Function simulating fetching user data (name and initials)
  const fetchUserData = useCallback(() => {
    setTimeout(() => {
      const userName = userData?.signUpFullName || "";
      const nameParts = userName.trim().split(" "); // Split name into parts
      const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || ""; // First letter of the first name
      const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || ""; // First letter of the last name (if exists)
      const FullUserName = nameParts[0] + " " + nameParts[1];

      setUserInitial(firstLetter + lastLetter); // Set initials
      setFullName(FullUserName); // Set full name
      setLoading(false); // Set state to "loaded"
    }, 1000); // Simulating delay for loading
  }, [userData]);
  // Run fetchUserData on mount
  useEffect(() => {
    if (userData) {
      fetchUserData();
    }
  }, [userData, fetchUserData]);

  return (
    <>
      <div className="flex items-center justify-between my-2 px-4 py-2">
        <div className="flex w-full gap-[12px]">
          {/* Initials Avatar */}
          <div className="static">
            <div className=" flex justify-center items-center min-w-8 h-8 bg-blue-400 rounded-full text-white text-[14px] font-bold font-sans cursor-default">
              {loading ? "?" : userInitial}
            </div>
            <div className="absolute z-[60] w-3 h-3 border-[2px] border-white bg-green-600 rounded-full top-[87px] right-[236px]"></div>
          </div>
          <div className="flex-row ">
            <div className="flex text-sm/4 font-sans font-medium text-gray-950 mb-[2px]">
              {loading ? "Loading..." : fullName}
            </div>
            <div className="flex text-xs/[16px] font-sans text-gray-800">
              Online
            </div>
          </div>
        </div>
      </div>
      <ButtonRender />
    </>
  );
}
