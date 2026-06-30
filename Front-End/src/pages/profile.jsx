import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>

      {!user ? (
        <p className="text-gray-600">No user information is available.</p>
      ) : (
        <div className="space-y-6 text-gray-800">
          <div>
            <p className="text-sm text-slate-500">Name</p>
            <p className="text-lg font-medium">{user.name || "—"}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="text-lg font-medium">{user.email || "—"}</p>
          </div>
          {user.username && (
            <div>
              <p className="text-sm text-slate-500">Username</p>
              <p className="text-lg font-medium">{user.username}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
