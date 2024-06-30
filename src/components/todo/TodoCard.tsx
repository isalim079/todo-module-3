const TodoCard = () => {
    return (
        <div className="flex justify-between  p-4 rounded-md shadow-md border-2 border-amber-600 font-semibold">
            <input type="checkbox" name="" id="" />
            <p>Todo Title</p>
            <p>Time</p>
            <p>Description</p>
            <div className="space-x-4">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    );
};

export default TodoCard;
