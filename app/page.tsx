<form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <input
    type="email"
    required
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="px-4 py-2 border rounded-lg"
  />
  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
  >
    {isSubmitting ? "Submitting..." : "Join Waitlist"}
  </button>
</form>

{submitted && (
  <div className="mt-4 text-green-600 font-medium">
    Thanks for joining the waitlist!
  </div>
)}
