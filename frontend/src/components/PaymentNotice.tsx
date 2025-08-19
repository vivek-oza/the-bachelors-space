import { motion } from "motion/react";
import { AlertTriangle, CreditCard, Mail, Phone } from "lucide-react";

/**
 * Intrusive payment notice component
 * Displays a bright, attention-grabbing banner when license is invalid
 */
export function PaymentNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-2xl border-b-4 border-red-800"
      style={{
        background: "linear-gradient(45deg, #dc2626, #ef4444, #f87171, #ef4444, #dc2626)",
        backgroundSize: "400% 400%",
        animation: "gradient-shift 3s ease infinite",
      }}
    >
      {/* Animated gradient background */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 1), 0 0 60px rgba(239, 68, 68, 0.6); }
        }
        .payment-notice {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="payment-notice px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {/* Warning Icon */}
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex-shrink-0"
          >
            <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" />
          </motion.div>

          {/* Main Message */}
          <div className="text-center sm:text-left">
            <motion.h2 
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚨 PAYMENT REQUIRED - WEBSITE ACCESS RESTRICTED 🚨
            </motion.h2>
            <p className="text-sm sm:text-base text-red-100 mt-1 drop-shadow">
              This website requires a valid license key. Please complete payment to continue using this service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-red-100">
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="h-4 w-4" />
              <span>Contact for payment</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <CreditCard className="h-4 w-4" />
              <span>License required</span>
            </motion.div>
          </div>
        </div>

        {/* Pulsing bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
