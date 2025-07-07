import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Users, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Get the Google Script URL from environment variables
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
  
    setIsLoading(true);
    setError("");
  
    try {
      const formData = new FormData();
      formData.append('email', email);
  
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white overflow-x-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h1
              variants={titleVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
            >
              MuslimMunch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover halal restaurants and authentic Muslim cuisine in your area. 
              Join thousands of food lovers on our platform.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              >
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">2,500+</h3>
              <p className="text-gray-400">Active Users</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">150+</h3>
              <p className="text-gray-400">Verified Restaurants</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
              >
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Coming Soon</h3>
              <p className="text-gray-400">Launch Date</p>
            </motion.div>
          </motion.div>

          {/* Waiting List Form */}
          <motion.div
            variants={formVariants}
            className="max-w-2xl mx-auto"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300"
            >
              <motion.div
                variants={itemVariants}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold mb-4 text-green-400">
                  Join the Waiting List
                </h2>
                <p className="text-gray-300">
                  Be among the first to experience MuslimMunch when we launch. 
                  Get early access and exclusive updates.
                </p>
              </motion.div>

              {!isSubmitted ? (
                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center bg-red-900/20 border border-red-500/30 rounded-lg p-3"
                    >
                      {error}
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ 
                      scale: isLoading ? 1 : 1.02,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ 
                      scale: isLoading ? 1 : 0.98,
                      transition: { duration: 0.1 }
                    }}
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg ${
                      isLoading 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-xl'
                    } text-white`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Join Waiting List'
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.2,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for joining. We'll notify you as soon as MuslimMunch launches.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 text-gray-400"
          >
            <p>© 2024 MuslimMunch. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}