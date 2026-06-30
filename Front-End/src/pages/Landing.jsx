import { Link } from "react-router-dom";
import { CheckCircle, Flame, BarChart3 } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Build Better Habits
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Track your daily habits, maintain streaks, and achieve your goals with our intuitive habit tracker.
            Stay consistent and watch your progress grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/register"
              className="bg-gradient-to-right from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-200 border border-gray-600"
            >
              Sign In
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <CheckCircle className="text-green-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Tracking</h3>
              <p className="text-gray-400">
                Mark your habits complete with a single click. Track multiple habits effortlessly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <Flame className="text-red-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintain Streaks</h3>
              <p className="text-gray-400">
                Build momentum with consecutive day tracking. Watch your streaks grow and stay motivated.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <BarChart3 className="text-blue-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visualize Progress</h3>
              <p className="text-gray-400">
                See your completion rates and progress with beautiful charts and statistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Better Habits?
          </h2>
          <p className="text-lg mb-8 text-orange-50">
            Join thousands of users who are transforming their lives through consistent habit tracking.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105"
          >
            Start For Free
          </Link>
        </div>
      </section>
    </div>
  );
}
