"use client";

import React from "react";

import { getInitials } from "../utils/getInitials";
import { usetaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { Task, User } from "@/app/server-actions/types";
import useUserQuery from "@/hooks/useUserQuery";

function UsersList() {
  const { setFormData } = usetaskFormContext();

  const users = useUserQuery();

  return (
    <ul>
      {users?.map((user: User) => (
        <span
          className="cursor-pointer"
          key={user.id}
          onClick={() =>
            setFormData((prevState: Task) => ({
              ...prevState,
              assignees: [
                ...(prevState.assignees ?? []),
                {
                  signUpFullName: user.signUpFullName,
                  signUpEmail: user.signUpEmail,
                },
              ],
            }))
          }
        >
          {getInitials(user.signUpFullName)} ({user.signUpEmail})
        </span>
      ))}
    </ul>
  );
}

export default UsersList;
