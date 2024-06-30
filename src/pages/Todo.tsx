import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-bold mt-4">My Todos</h1>
            <div className="flex justify-center items-center">
                {" "}
                <div className="border-2 rounded-md shadow-md border-blue-950 mt-2 min-w-44 max-w-52 "></div>
            </div>
            <TodoContainer />
        </Container>
    );
};

export default Todo;
