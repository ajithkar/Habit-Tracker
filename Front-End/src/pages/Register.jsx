import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setServerError("");

      await registerUser(data);

      navigate("/login");
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <Container className="max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-center text-red-900">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Join us and reserve your favorite table.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <Input
              label="Full Name"
              placeholder="John Doe"
              register={register("full_name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              error={errors.full_name}
            />

            <Input
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={errors.email}
            />

            {/* Password */}

            <div className="relative">

              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                error={errors.password}
              />

              <button
                type="button"
                className="absolute right-3 top-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <Input
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                register={register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                error={errors.confirmPassword}
              />

              <button
                type="button"
                className="absolute right-3 top-10"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            <Button
              type="submit"
              className="w-full mt-4"
            >
              Register
            </Button>

          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-900 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </Container>
    </div>
  );
}

export default Register;