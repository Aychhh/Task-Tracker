"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface valueType {
  title: string;
  id: number;
}
interface eTask {
  etitle: string;
  id: number;
}

interface StoreContextType {
  value: Array<valueType>;
  setValue: Dispatch<SetStateAction<Array<valueType>>>;
  deletTask: (id: number) => void;
  isEdit: boolean;
  setisEdit: Dispatch<SetStateAction<boolean>>;
  eTask: eTask;
  seteTask: Dispatch<SetStateAction<eTask>>;
  updateTask: (currentTask: any) => void;
  handleSave: (id: number, title: string) => void;
}
const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderType {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderType) => {
  const [value, setValue] = useState<Array<valueType>>([]);

  const deletTask = (id: number) => {
    const newValue = value.filter((nValue) => nValue.id !== id);
    setValue(newValue);
  };

  const [isEdit, setisEdit] = useState(false);

  const [eTask, seteTask] = useState<eTask>({
    id: 0,
    etitle: "",
  });

  const updateTask = (currentTask: any) => {
    seteTask({
      id: currentTask.id,
      etitle: currentTask.title,
    });
    setisEdit(true);
    console.log("isEditTrue");
  };

  const handleSave = (id: number, title: string) => {
    let newTask = JSON.parse(JSON.stringify(value));
    for (let index = 0; index < newTask.length; index++) {
      const element = newTask[index];
      if (element.id === id) {
        newTask[index].title = title;
        break;
      }
    }
    setValue(newTask);
  };

  return (
    <StoreContext.Provider
      value={{
        value,
        setValue,
        deletTask,
        isEdit,
        eTask,
        setisEdit,
        seteTask,
        updateTask,
        handleSave,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

export const useStateContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider",
    );
  }
  return context;
};
