export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Island Daily
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your community portal - coming soon!
          </p>
          <div className="space-x-4">
            <a
              href="/auth/signin"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/auth/signup"
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
