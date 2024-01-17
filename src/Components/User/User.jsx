import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  console.log(userid);
  return (
    <div className="bg-gray-600 text-center text-white text-3xl p-5">
      user:{userid}
    </div>
  );
};

export default User;
