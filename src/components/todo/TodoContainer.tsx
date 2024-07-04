import { useState } from "react";
import { useGetTodosQuery } from "../../redux/api/api";
// import { useAppSelector } from "../../redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    // const { todos } = useAppSelector((state) => state.todos);

    const [priority, setPriority] = useState('')
    
    const { data: todos, isLoading, isError } = useGetTodosQuery(priority)

    // console.log(todos);

    if(isLoading) {
        return <p>Loading...</p>
    }

    // console.log(todos.data);

    return (
        <div className="mt-10">
            <div className="mb-7 flex justify-between">
                <AddTodoModal />
                <TodoFilter priority={priority} setPriority={setPriority} />
            </div>
            <div className="bg-primary-gradient shadow-md w-full h-full rounded-2xl p-2">
                {todos?.data?.length !== 0 ? (
                    <div className="space-y-7 bg-gray-100 min-h-40 p-3 rounded-xl shadow-md">
                        {todos?.data?.map((item) => (
                            <TodoCard
                                key={item._id}
                                id={item?._id}
                                title={item?.title}
                                description={item?.description}
                                isCompleted={item?.isCompleted}
                                priority= {item?.priority}
                            />
                        ))}
                    </div>
                ) : (
                    <div>
                        <p className="bg-lime-600 text-white text-center py-7 rounded-md shadow-md text-xl font-semibold">
                            There is no task pending... 
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoContainer;
