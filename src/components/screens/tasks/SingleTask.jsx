import { useParams } from "react-router-dom";

function SingleTask() {
  const { nameTask } = useParams();
  return <h2>{nameTask}</h2>;
}

export default SingleTask;
