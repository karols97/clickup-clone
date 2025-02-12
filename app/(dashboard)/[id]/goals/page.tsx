"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";

const UserGoalsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const userId = resolvedParams.id;

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user || user.uid !== userId) {
          router.push("/login");
        }
      });

      setUserId(userId);

      return () => unsubscribe();
    };

    fetchParams();
  }, [params, router]);

  return (
    <div
      className="flex justify-center items-center w-full font-sans text-4xl"
      style={{ height: "calc(100vh - 40px)" }}>
      Page Goals in progress
    </div>
  );
};

export default UserGoalsPage;
