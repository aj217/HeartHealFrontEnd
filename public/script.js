// Navbar Component
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

// UserNavbar Component
function UserNavbar({ onNavigate, onLogout }) {
  const handleLogoutClick = () => {
    const confirmed = window.confirm("Are you sure you want to exit?");
    if (confirmed) {
      onLogout();
    }
  };

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
              handleLogoutClick();
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

// LandingPage Component
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

// FeaturesSection Component
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

// Utility: Validate Password
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// LoginPage Component
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
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        onAuthSuccess();
        onNavigate("dashboard");
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

// SignupPage Component
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

// ForgotPasswordPage Component
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

// ResetPasswordPage Component
function ResetPasswordPage({ onNavigate }) {
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

// DashboardPage Component
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

// JournalPage Component
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

// MusicQuotePage Component
function MusicQuotePage() {
  const [mood, setMood] = React.useState("happy");
  const [tracks, setTracks] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [sound, setSound] = React.useState(null);
  const [currentPreview, setCurrentPreview] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const [quote, setQuote] = React.useState("");
  const [quoteAuthor, setQuoteAuthor] = React.useState("");
  const [quoteLoading, setQuoteLoading] = React.useState(false);
  const [quoteSaved, setQuoteSaved] = React.useState(false);
  const [quoteSaveError, setQuoteSaveError] = React.useState("");

  const moods = ["happy", "calm", "sad", "energetic"];

  const fetchMusic = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(
        `http://localhost:5000/api/music/spotify?mood=${mood}&limit=10`
      );
      if (!res.ok) throw new Error("Failed to fetch music!");
      const data = await res.json();
      setTracks(data.results || []);
      setSearchResults([]);
    } catch (err) {
      console.error("Error fetching mood-based music:", err);
      setError("Could not load music. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuote = async () => {
    setQuoteLoading(true);
    setQuoteSaved(false);
    setQuoteSaveError("");
    try {
      const res = await fetch("http://localhost:5000/api/quotes/random");
      if (!res.ok) throw new Error("Quote fetch failed");
      const data = await res.json();
      setQuote(data.quote);
      setQuoteAuthor(data.author);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote("Failed to load quote.");
      setQuoteAuthor("Try again");
    } finally {
      setQuoteLoading(false);
    }
  };

  const saveQuoteToFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/quotes/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text: quote,
          author: quoteAuthor,
          mood: mood,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setQuoteSaved(true);
      } else {
        setQuoteSaveError(data.message || "Failed to save quote.");
      }
    } catch (err) {
      console.error("Error saving quote:", err);
      setQuoteSaveError("Something went wrong. Try again.");
    }
  };

  const playPreview = (previewUrl) => {
    if (sound) {
      sound.stop();
      setSound(null);
      setCurrentPreview(null);
    }

    if (previewUrl && currentPreview !== previewUrl) {
      const newSound = new Howl({
        src: [previewUrl],
        html5: true,
        onend: () => setCurrentPreview(null),
      });
      newSound.play();
      setSound(newSound);
      setCurrentPreview(previewUrl);
    }
  };

  const stopPlayback = () => {
    if (sound) {
      sound.stop();
      setSound(null);
      setCurrentPreview(null);
    }
  };

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    if (!searchTerm.trim() || !token) return;

    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(
        `http://localhost:5000/api/music/search?query=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Search failed");
      const data = await res.json();
      setSearchResults(data.results || []);
      setTracks([]);
    } catch (err) {
      console.error("Search error:", err);
      setError("Search failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup for unmounted component
  React.useEffect(() => {
    let isMounted = true;
    fetchMusic();
    fetchQuote();
    return () => {
      isMounted = false;
      if (sound) sound.stop();
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">🎵 Music & Inspiration</h2>

      {/* Search Bar */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search any music (e.g. Lofi, Taylor Swift)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-2/3"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
        >
          🔍 Search
        </button>
      </div>

      {/* Mood Selector */}
      <div className="flex items-center mb-6 space-x-4">
        <label className="text-lg font-semibold">Mood:</label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {moods.map((m) => (
            <option key={m} value={m}>
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={fetchMusic}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Quote Section */}
      <section className="bg-purple-50 border border-purple-300 rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4">
          💡 Daily Inspiration
        </h3>
        {quoteLoading ? (
          <p className="text-gray-500 italic">Loading inspirational words...</p>
        ) : (
          <>
            <p className="text-lg italic text-gray-800 mb-2">"{quote}"</p>
            <p className="text-right font-semibold text-purple-700">
              — {quoteAuthor}
            </p>
            {quoteSaved && (
              <p className="text-green-600 mt-2 font-semibold">
                💖 Saved to favorites!
              </p>
            )}
            {quoteSaveError && (
              <p className="text-red-500 mt-2">{quoteSaveError}</p>
            )}
          </>
        )}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={fetchQuote}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            🔁 Refresh Quote
          </button>
          <button
            onClick={saveQuoteToFavorites}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
          >
            💖 Save to Favorites
          </button>
        </div>
      </section>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isLoading && <p className="text-gray-500 mb-4">Loading music...</p>}

      {/* Music Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(searchResults.length > 0 ? searchResults : tracks).map(
          (track, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={track.image}
                alt={track.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{track.name}</h3>
              <p className="text-gray-600">
                {Array.isArray(track.artists)
                  ? track.artists.join(", ")
                  : track.artist || "Unknown Artist"}
              </p>

              {currentPreview === track.preview_url && (
                <p className="text-green-600 text-sm mt-1">🎧 Now Playing</p>
              )}

              <div className="mt-4 space-x-2">
                {track.preview_url ? (
                  <button
                    onClick={() =>
                      currentPreview === track.preview_url
                        ? stopPlayback()
                        : playPreview(track.preview_url)
                    }
                    className={`px-4 py-2 rounded text-white ${
                      currentPreview === track.preview_url
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {currentPreview === track.preview_url
                      ? "Stop"
                      : "Play Preview"}
                  </button>
                ) : (
                  <span className="text-sm text-gray-400">
                    No preview available
                  </span>
                )}
                <a
                  href={track.url}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                  Open in Spotify
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}

// UserProfilePage Component (Profile Display)
function UserProfilePage({ onNavigate }) {
  const [profile, setProfile] = React.useState(null);
  const [error, setError] = React.useState("");
  const [achievements, setAchievements] = React.useState([]);
  const [favoriteQuotes, setFavoriteQuotes] = React.useState([]);
  const token = localStorage.getItem("token");
  const [selectedMood, setSelectedMood] = React.useState("all");

  React.useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(
            `Profile fetch failed with status ${response.status}`
          );
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err.message);
      }
    }

    async function fetchAchievements() {
      try {
        const response = await fetch("http://localhost:5000/api/achievements", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(
            `Achievements fetch failed with status ${response.status}`
          );
        }
        const data = await response.json();
        setAchievements(data || []);
      } catch (err) {
        console.error("Error fetching achievements:", err);
      }
    }

    async function fetchFavoriteQuotes(mood = "all") {
      try {
        let url = "http://localhost:5000/api/quotes/favorites";
        if (mood !== "all") {
          url += `?mood=${mood}`;
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to load favorite quotes");

        const data = await res.json();
        setFavoriteQuotes(data || []);
      } catch (err) {
        console.error("Error fetching favorite quotes:", err);
      }
    }

    if (token) {
      fetchProfile();
      fetchAchievements();
      fetchFavoriteQuotes(selectedMood);
    }
  }, [token]);

  async function fetchFavoriteQuotes(mood = "all") {
    try {
      let url = "http://localhost:5000/api/quotes/favorites";
      if (mood !== "all") {
        url += `?mood=${mood}`;
      }

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to load favorite quotes");

      const data = await res.json();
      setFavoriteQuotes(data || []);
    } catch (err) {
      console.error("Error fetching favorite quotes:", err);
    }
  }

  function deleteFavoriteQuote(quoteId) {
    if (!window.confirm("Are you sure you want to delete this quote?")) return;

    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/api/quotes/favorites/${quoteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        // Update UI to remove deleted quote
        setFavoriteQuotes((prev) => prev.filter((q) => q._id !== quoteId));
      })
      .catch((err) => {
        console.error("Error deleting quote:", err);
        alert("Something went wrong while deleting the quote.");
      });
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {profile ? (
        <>
          {/* Personal Info */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            {profile.profilePicture ? (
              <img
                src={`http://localhost:5000/${profile.profilePicture}`}
                alt="Profile"
                className="w-32 h-32 rounded-full mt-2"
              />
            ) : (
              <p>No profile picture set.</p>
            )}
            <p>
              <strong>Bio:</strong> {profile.bio}
            </p>
          </div>

          {/* Update Profile Button */}
          <button
            onClick={() => onNavigate("updateProfile")}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Update Profile
          </button>

          {/* Achievements */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">🏆 Your Achievements</h3>
            {achievements.length > 0 ? (
              <ul className="list-disc list-inside">
                {achievements.map((ach) => (
                  <li key={ach.name} className="mb-2">
                    <strong>{ach.name}</strong> - {ach.description}
                    {ach.earned && (
                      <span className="ml-2 text-green-600">(Earned!)</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No achievements earned yet.</p>
            )}
          </div>

          {/* Favorite Quotes */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">💖 Favorite Quotes</h3>
            {/* Mood Filter */}
            <div className="mb-4 flex items-center gap-4">
              <label
                htmlFor="mood-filter"
                className="font-medium text-gray-700"
              >
                Filter by Mood:
              </label>
              <select
                id="mood-filter"
                value={selectedMood}
                onChange={(e) => {
                  const mood = e.target.value;
                  setSelectedMood(mood);
                  fetchFavoriteQuotes(mood); // fetch quotes based on mood
                }}
                className="border px-3 py-2 rounded"
              >
                <option value="all">All</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="calm">Calm</option>
                <option value="energetic">Energetic</option>
              </select>
            </div>
            {favoriteQuotes.length === 0 ? (
              <p className="text-gray-600">No favorite quotes saved yet.</p>
            ) : (
              <ul className="space-y-4">
                {favoriteQuotes.map((q) => (
                  <li
                    key={q._id}
                    className="bg-white border rounded p-4 shadow"
                  >
                    <div className="flex justify-between items-start">
                      <p className="italic text-gray-800">"{q.text}"</p>
                      <button
                        onClick={() => deleteFavoriteQuote(q._id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                        title="Delete quote"
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>— {q.author || "Unknown"}</span>
                      <span>{q.mood ? `Mood: ${q.mood}` : "Mood: N/A"}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </main>
  );
}

// UpdateProfilePage Component (Profile Update Form)
function UpdateProfilePage({ onNavigate }) {
  const [formData, setFormData] = React.useState({ name: "", bio: "" });
  const [profilePicFile, setProfilePicFile] = React.useState(null);
  const [previewPic, setPreviewPic] = React.useState(null);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFormData({ name: data.name || "", bio: data.bio || "" });
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
      }
    }
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicFile(file);
    if (file) {
      setPreviewPic(URL.createObjectURL(file));
    } else {
      setPreviewPic(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const updateData = new FormData();
    updateData.append("name", formData.name);
    updateData.append("bio", formData.bio);
    if (profilePicFile) {
      updateData.append("profilePicture", profilePicFile);
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/update", {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: updateData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Profile updated successfully!");
        onNavigate("profile");
      } else {
        setError(data.message || "Update failed. Please try again.");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("An error occurred while updating profile.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Update Profile</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block font-semibold mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block font-semibold mb-1">
            Upload Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            onChange={handleFileChange}
            className="w-full"
            accept="image/*"
          />
          {previewPic && (
            <img
              src={previewPic}
              alt="Preview"
              className="w-32 h-32 rounded-full mt-2"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
      <button
        onClick={() => onNavigate("profile")}
        className="mt-4 text-blue-500 hover:underline"
      >
        Cancel
      </button>
    </main>
  );
}

// Footer Component
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

// PrivacyPolicy Component
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

// TermsOfService Component
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

// ContactUs Component
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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// App Component
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
        return <UserProfilePage onNavigate={setPage} />;
      case "updateProfile":
        return <UpdateProfilePage onNavigate={setPage} />;
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
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        {isAuthenticated ? (
          <UserNavbar onNavigate={setPage} onLogout={handleLogout} />
        ) : (
          <Navbar onNavigate={setPage} />
        )}
        <div className="flex-grow">{renderPage()}</div>
        {page === "home" && <Footer onNavigate={setPage} />}
      </div>
    </ErrorBoundary>
  );
}

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
