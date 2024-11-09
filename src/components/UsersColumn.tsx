import React, { useState } from "react";
import Loading from "@/src/components/Loading";
import { useGetUsersQuery } from "@/src/services/users";
import { useRouter } from "next/navigation";

const UsersColumn: React.FC = () => {
  const [search, setSearch] = useState("");
  const { data: users = [], isLoading } = useGetUsersQuery();
  const router = useRouter();

  const filteredUsers = users.filter((user) =>
    `${user.name.firstname} ${user.name.lastname}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-[95vh] overflow-auto">
      <input
        type="text"
        placeholder="🔍 Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full border rounded focus:ring-2 focus:ring-green-400 placeholder-gray-400 transition-all"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => router.push(`/user/${user.id}`)}
              className="p-4 mb-2 border rounded hover:bg-green-100 cursor-pointer transition-all"
            >
              <h3 className="font-semibold text-lg">
                {user.name.firstname} {user.name.lastname}
              </h3>
              <p className="text-gray-600">Username: {user.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersColumn;
