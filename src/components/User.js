import React, { useState, useEffect } from "react";
import SkeletonProfile from "../skeleton/SkeletonProfile";

function User() {
  const [ profile, setProfile ] = useState(null);

  const fetchProfile = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    setProfile(data);
  };

  useEffect(() => {
    fetchProfile();
  });
  return (
    <div>
      <h2>User Details</h2>
      <div>
        {!profile ? (
          <SkeletonProfile theme="light" />
        ) : (
          <div>
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
