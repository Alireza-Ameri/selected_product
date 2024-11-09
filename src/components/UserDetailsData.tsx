import React from "react";
import { IUser } from "@/src/types/users";

const UserDetailsData: React.FC<{ user: IUser }> = ({ user }) => {
  const googleMapsLink = `https://www.google.com/maps?q=${user.address.geolocation.lat},${user.address.geolocation.long}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        {user.name.firstname} {user.name.lastname}
      </h1>
      <div className="space-y-2">
        <p className="text-lg">
          <strong className="font-semibold text-gray-600">Username:</strong>{" "}
          {user.username}
        </p>
        <p className="text-lg">
          <strong className="font-semibold text-gray-600">Email:</strong>{" "}
          {user.email}
        </p>
        <p className="text-lg">
          <strong className="font-semibold text-gray-600">Phone:</strong>{" "}
          {user.phone}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700">Address</h2>
        <p className="text-lg">
          {user.address.number} {user.address.street}
        </p>
        <p className="text-lg">
          {user.address.city}, {user.address.zipcode}
        </p>

        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-semibold"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default UserDetailsData;
