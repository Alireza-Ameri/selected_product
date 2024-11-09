"use client";

import { useGetUserByIdQuery } from "@/src/services/users";
import Loading from "@/src/components/Loading";
import UserDetailsData from "@/src/components/UserDetailsData";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const UserDetails: React.FC = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { id } = params;
  const { data: user, isLoading, error } = useGetUserByIdQuery({ id });

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <Loading />
      </div>
    );

  if (error || !user) return <p className="text-center text-red-500 font-semibold">Failed to load user details</p>;

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
        <UserDetailsData user={user} />
        <button
          onClick={() => router.back()}
          className="mt-6 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
