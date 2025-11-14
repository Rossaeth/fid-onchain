import { useState, useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { useMiniApp } from "./providers/miniAppProvider";

export default function HomePage() {
  const { isInMiniApp, context } = useMiniApp();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Email submitted:", email);
      setSubmitted(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Base Mini App Starter</h1>
        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-300"
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>

        {submitted && <div className="mt-4 text-green-600">Thanks for joining the waitlist!</div>}
      </div>
    </div>
  );
}
