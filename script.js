// The Navbar has links to "Home" and "Login".
function Navbar({ onNavigate }) {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">HeartHeal</div>
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="text-gray-700 hover:text-blue-500 px-3"
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("login");
            }}
            className="text-gray-700 hover:text-blue-500 px-3"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

// UserNavbar for authenticated users
function UserNavbar({ onNavigate, onLogout }) {
  return (
    <nav className="bg-blue-600 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">HeartHeal Dashboard</div>
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("dashboard");
            }}
            className="text-white hover:text-gray-200 px-3"
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("journal");
            }}
            className="text-white hover:text-gray-200 px-3"
          >
            Journal
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("musicquote");
            }}
            className="text-white hover:text-gray-200 px-3"
          >
            Music &amp; Quotes
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("profile");
            }}
            className="text-white hover:text-gray-200 px-3"
          >
            Profile
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLogout();
            }}
            className="text-white hover:text-gray-200 px-3"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

// Footer with links to Privacy Policy, Terms of Service, Contact, etc.
function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("privacy");
            }}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("terms");
            }}
            className="hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
            className="hover:underline"
          >
            Contact Us
          </a>
        </div>
        <p>© {new Date().getFullYear()} HeartHeal. All rights reserved.</p>
      </div>
    </footer>
  );
}

// FeaturesSection on landing page that indicates the purpose of the website.
function FeaturesSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Daily Journaling</h3>
          <p>Express your thoughts and track your emotional journey</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Calming Music</h3>
          <p>Discover peaceful melodies to soothe your mind</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Daily Quotes</h3>
          <p>Find inspiration in a variety of curated quotes</p>
        </div>
      </div>
    </section>
  );
}

// LandingPage with a "Get Started" button that navigates to "login".
function LandingPage({ onNavigate }) {
  const handleGetStarted = () => {
    onNavigate("login");
  };

  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to HeartHeal</h1>
      <p className="text-lg mb-8">
        At HeartHeal, our mission is to support you in your journey to emotional
        recovery and well-being. Explore expert advice, community support, and
        personalized resources to help you heal your heart.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Get Started
      </button>

      <FeaturesSection />
    </main>
  );
}

// Utility function to validate password strength.
function validatePassword(password) {
  // Must be at least 8 characters and include at least one digit and one special character.
  const regex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// LoginPage sends a POST request to /api/auth/login.
function LoginPage({ onNavigate, onAuthSuccess }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        alert("Login successful!");
        onAuthSuccess(); // Mark user as authenticated
        onNavigate("dashboard"); // Redirect to dashboard or another secure page
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="loginEmail" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="loginEmail"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loginPassword" className="block font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => onNavigate("forgot")}
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot password?
        </button>
        <button
          onClick={() => onNavigate("signup")}
          className="text-sm text-blue-500 hover:underline"
        >
          New user? Sign up
        </button>
      </div>
    </main>
  );
}

// SignupPage sends a POST request to /api/auth/signup.
function SignupPage({ onNavigate }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include a number and a special character."
      );
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("User registered successfully!");
      } else {
        if (data.message && data.message.toLowerCase().includes("exists")) {
          setMessage("User already registered!");
        } else {
          setError(data.message || "Signup failed. Please try again.");
        }
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      {message && <div className="text-green-500 mb-4">{message}</div>}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="signupName" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="signupName"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="signupEmail" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="signupEmail"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="signupPassword" className="block font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="signupPassword"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={() => onNavigate("login")}
          className="text-sm text-blue-500 hover:underline"
        >
          Already have an account? Log in
        </button>
      </div>
    </main>
  );
}

// ForgotPasswordPage sends a POST request to /api/auth/forgot-password.
function ForgotPasswordPage({ onNavigate }) {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMessage("A password reset link has been sent to your email.");
      } else {
        setError(
          data.message || "Failed to send reset link. Please try again."
        );
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <form
        onSubmit={handleForgotPassword}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="forgotEmail" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="forgotEmail"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your email to receive a reset link"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          Send Reset Link
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={() => onNavigate("login")}
          className="text-sm text-blue-500 hover:underline"
        >
          Remembered your password? Log in
        </button>
      </div>
    </main>
  );
}

// ResetPasswordPage reads the token from the URL query string (if provided) so that the user does not need to enter it manually.
function ResetPasswordPage({ onNavigate }) {
  // Read token from the query parameter, if present.
  const queryParams = new URLSearchParams(window.location.search);
  const tokenFromURL = queryParams.get("token");
  const [token, setToken] = React.useState(tokenFromURL || "");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!validatePassword(newPassword)) {
      setError(
        "Password must be at least 8 characters long, include a number and a special character."
      );
      return;
    }
    if (!token) {
      setError("Reset token is missing.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: newPassword }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert(
          "Password reset successful! Please log in with your new password."
        );
        onNavigate("login");
      } else {
        setError(data.message || "Password reset failed. Please try again.");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Only show token input if not provided in the URL */}
        {!token && (
          <div className="mb-4">
            <label htmlFor="resetToken" className="block font-semibold mb-1">
              Reset Token
            </label>
            <input
              type="text"
              id="resetToken"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter the reset token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="newPass" className="block font-semibold mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPass"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPass" className="block font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPass"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
        >
          Reset Password
        </button>
      </form>
    </main>
  );
}

// placeholders (Privacy, Terms, Contact).
// Privacy Policy
function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At HeartHeal, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you use our website or services. By using
          HeartHeal, you agree to the practices described in this policy. If you
          do not agree with any part, please discontinue use of our website.
        </p>
        <p className="mb-4">
          We collect personal information that you provide voluntarily, such as
          your name, email address, and any other details you choose to share.
          We may also gather usage data (e.g., pages visited, time spent) to
          analyze site performance and enhance user experience. Cookies or
          similar technologies may be used to remember your preferences and
          improve site functionality.
        </p>
        <p className="mb-4">
          Your information is used to personalize your experience, send relevant
          updates, analyze trends, and improve our services. We do not sell or
          share your data with third parties except as required by law. While we
          implement industry-standard security measures to protect your data,
          please note that no method of transmission or storage is completely
          secure.
        </p>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page. By continuing to use HeartHeal after any
          modifications, you acknowledge and accept those changes.
        </p>
      </div>
    </main>
  );
}

// Dashboardpage
function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>
        Welcome to your dashboard! Here you can see an overview of your
        activity.
      </p>
    </main>
  );
}

// JournalPage
function JournalPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Journal</h2>
      <p>
        This is your journal page. Record your thoughts and track your progress.
      </p>
    </main>
  );
}

// MusicQuotesPage
function MusicQuotePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Music &amp; Quotes</h2>
      <p>Enjoy calming music and read inspiring daily quotes.</p>
    </main>
  );
}

// ProfilePage
function ProfilePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <p>View and update your profile settings here.</p>
    </main>
  );
}

// Terms of Service
function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
        <p className="mb-4">
          By accessing or using HeartHeal, you agree to be bound by these Terms
          of Service. If you do not agree with any part of these terms, please
          discontinue use of our website immediately. HeartHeal is provided for
          informational and supportive purposes only and should not be
          considered professional or medical advice. We reserve the right to
          modify or discontinue any part of our services at any time without
          prior notice.
        </p>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account. You agree to use our website only for lawful purposes and to
          refrain from any conduct that could harm HeartHeal or other users. We
          also reserve the right to update or modify these Terms of Service at
          any time. Continued use of our website signifies your acceptance of
          any updated terms.
        </p>
        <p className="mb-4">
          HeartHeal and its affiliates are not liable for any direct, indirect,
          incidental, or consequential damages arising from your use of our
          website. The content provided is for general informational purposes
          only, and we cannot guarantee that our services will meet your
          requirements or be uninterrupted, timely, secure, or error-free.
        </p>
      </div>
    </main>
  );
}

// Contact Us component for user inquiries.
function ContactUs() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns, please feel free to reach out
          to us at{" "}
          <a
            href="mailto:support@heartheal.com"
            className="text-blue-500 hover:underline"
          >
            support@heartheal.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}

// The App holds the current page in state. It switch pages via onNavigate().
function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const initialPage = queryParams.get("page") || "home";
  const [page, setPage] = React.useState(initialPage);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPage("login");
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <LandingPage onNavigate={setPage} />;
      case "login":
        return (
          <LoginPage onNavigate={setPage} onAuthSuccess={handleAuthSuccess} />
        );
      case "signup":
        return <SignupPage onNavigate={setPage} />;
      case "forgot":
        return <ForgotPasswordPage onNavigate={setPage} />;
      case "reset":
        return <ResetPasswordPage onNavigate={setPage} />;
      case "dashboard":
        return <DashboardPage />;
      case "journal":
        return <JournalPage />;
      case "musicquote":
        return <MusicQuotePage />;
      case "profile":
        return <ProfilePage />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfService />;
      case "contact":
        return <ContactUs />;
      default:
        return <LandingPage onNavigate={setPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated ? (
        <UserNavbar onNavigate={setPage} onLogout={handleLogout} />
      ) : (
        <Navbar onNavigate={setPage} />
      )}

      <div className="flex-grow">{renderPage()}</div>

      {/* Hide footer on these authenticated pages */}
      {!["dashboard", "journal", "musicquote", "profile"].includes(page) && (
        <Footer onNavigate={setPage} />
      )}
    </div>
  );
}

// Render the App component to the root div
ReactDOM.render(<App />, document.getElementById("root"));
