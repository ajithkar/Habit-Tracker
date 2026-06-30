import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      const response = await loginUser(data);
      login(response);

      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/customer/dashboard");
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Container className="max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-md">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-red-900">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Login to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email", {
                required: "Email is required",
              })}
              error={errors.email}
            />

            {/* Password */}
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                error={errors.password}
              />

              {/* Toggle Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {serverError && (
              <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
                {serverError}
              </div>
            )}

            {/* Button */}
            <Button type="submit" loading={loading} className="w-full">
              Login
            </Button>

          </form>

          {/* Register link */}
          <p className="text-center text-sm mt-5 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-red-900 font-semibold">
              Register
            </Link>
          </p>

        </div>
      </Container>
    </div>
  );
}

export default Login;