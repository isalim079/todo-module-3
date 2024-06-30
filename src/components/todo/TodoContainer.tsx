import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div className="mt-10">
            <div className="mb-5">
                <button>Add todo</button>
                <button>Filter</button>
            </div>
            <div className="bg-primary-gradient shadow-md w-full h-full rounded-2xl p-2">

            <div className="space-y-7 bg-gray-100 p-3 rounded-xl shadow-md">
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>


                {/* <div>
                    <p className="bg-lime-600 text-white text-center py-4 rounded-md shadow-md text-xl font-semibold">
                        There is no task pending...
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;
