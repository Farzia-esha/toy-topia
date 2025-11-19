import React from 'react';
import MyToys from '../Component/Mytoys';

import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useAuth } from '../Provider/AuthProvider';

const Profile = () => {
    const { user, setUser } = useAuth(); 
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      setUser({ ...user, displayName: name, photoURL: photo });

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.success('profile updated successfully!')
    } finally {
      setLoading(false);
    }
  };
    return (
        <div>
    <div className="max-w-sm md:max-w-lg mx-auto my-10 bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">My Profile</h2>

      {user ? (
        <>
          <img
            src={user.photoURL || "https://i.ibb.co/0n6z3sb/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-lg">
            <strong>Name:</strong> {user.displayName || "N/A"}
          </p>
          <p className="text-lg mb-6">
            <strong>Email:</strong> {user.email}
          </p>

          <form onSubmit={handleUpdate} className="flex flex-col gap-4 text-left">
            <label className="font-semibold">Edit Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />

            <label className="font-semibold">Edit Photo URL:</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn bg-purple-600 hover:bg-purple-700 text-white w-full mt-3"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </>
      ) : (
        <p className="text-gray-600">Please log in to view your profile.</p>
      )}
    </div>

    </div>    
    );
};

export default Profile;