import { Task } from "@/app/server-actions/types";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";

export const useUpdateTaskForm = () => {
  const { formData, setFormData } = useTaskFormContext();

  type PropertyToChange = "taskName" | "assignees" | "priority" | "status";

  const updateTaskForm = <K extends PropertyToChange>(property: K, value: Task[K]) => {
    const updatedTask = structuredClone(formData);
    updatedTask[property] = value;
    setFormData(updatedTask);
  };

  return {
    updateTaskForm,
  };
};
