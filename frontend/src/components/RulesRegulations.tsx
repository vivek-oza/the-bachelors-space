"use client";

import { motion } from "motion/react";

import { Badge } from "./ui/badge";
import {
  FileText,
  Calendar,
  CreditCard,
  Shield,
  AlertTriangle,
  Users,
  ChevronDown,
  DollarSign,
  Clock,
  Home,
} from "lucide-react";
import { useState } from "react";

interface Rule {
  icon: any;
  title: string;
  content: string;
  type: string;
}

const yearlyRules: Rule[] = [
  {
    icon: Calendar,
    title: "Fee Collection",
    content: "Fees are typically collected on an annual basis only.",
    type: "info",
  },
  {
    icon: Shield,
    title: "Security Deposit",
    content:
      "₹10,000 security deposit required, fully refundable post inspection.",
    type: "info",
  },
  {
    icon: AlertTriangle,
    title: "Damage Policy",
    content:
      "Any damages to hostel property will be deducted from the security deposit.",
    type: "warning",
  },
  {
    icon: Home,
    title: "Included Facilities",
    content:
      "Fees include accommodation, food, limited laundry, maintenance, WiFi, and utilities.",
    type: "success",
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    content: "Bank transfer, online portal, cash, or cheque payments accepted.",
    type: "info",
  },
  {
    icon: DollarSign,
    title: "Extra Charges",
    content:
      "Guest charges and individual electricity usage may apply as extra.",
    type: "warning",
  },
];

const monthlyRules: Rule[] = [
  {
    icon: Clock,
    title: "Payment Due Date",
    content: "Rent due on 1st of every month. Late fee of ₹500/day applies.",
    type: "warning",
  },
  {
    icon: Shield,
    title: "Security Deposit",
    content:
      "One month's rent as security deposit. Non-refundable without proper notice.",
    type: "info",
  },
  {
    icon: AlertTriangle,
    title: "Refund Policy",
    content:
      "Security deposit refundable after inspection and proper notice period.",
    type: "warning",
  },
  {
    icon: DollarSign,
    title: "Additional Costs",
    content:
      "Extra laundry, transport, and individual electricity charges apply.",
    type: "warning",
  },
  {
    icon: FileText,
    title: "Policy Updates",
    content:
      "Hostel may update rules and policies with proper notice to residents.",
    type: "info",
  },
  {
    icon: Users,
    title: "Termination Rights",
    content: "Management reserves right to terminate stay due to misconduct.",
    type: "warning",
  },
];

export function RulesRegulations() {
  const [yearlyOpen, setYearlyOpen] = useState(false);
  const [monthlyOpen, setMonthlyOpen] = useState(false);

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "border-l-4 border-yellow-400 bg-yellow-50";
      case "success":
        return "border-l-4 border-teal-400 bg-teal-50";
      default:
        return "border-l-4 border-cyan-400 bg-cyan-50";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "warning":
        return "text-yellow-500";
      case "success":
        return "text-teal-500";
      default:
        return "text-cyan-500";
    }
  };

  return (
    <section
      id="rules"
      className="w-full py-10 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[2560px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4" />
            <span className="font-medium font-body">Important Information</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-purple-900 mb-6 font-heading">
            Rules & Regulations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-body">
            Clear guidelines to ensure a comfortable and harmonious living
            environment for all residents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Yearly Rules */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setYearlyOpen(!yearlyOpen)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 flex items-center justify-between hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-purple-900" />
                  <span className="text-xl font-heading text-purple-900">
                    Yearly Plan Rules
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: yearlyOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-purple-900" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: yearlyOpen ? "auto" : 0,
                  opacity: yearlyOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {yearlyRules.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: yearlyOpen ? 1 : 0,
                        y: yearlyOpen ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: yearlyOpen ? index * 0.1 : 0,
                      }}
                      className={`p-4 rounded-lg ${getTypeStyles(
                        rule.type
                      )} hover:shadow-md transition-shadow duration-200`}
                    >
                      <div className="flex items-start gap-3">
                        <rule.icon
                          className={`w-5 h-5 mt-1 ${getIconColor(rule.type)}`}
                        />
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">
                            {rule.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {rule.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Monthly Rules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setMonthlyOpen(!monthlyOpen)}
                className="w-full bg-gradient-to-r from-teal-400 to-teal-500 p-6 flex items-center justify-between hover:from-teal-500 hover:to-teal-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-white" />
                  <span className="text-xl font-heading text-white">
                    Monthly Plan Rules
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: monthlyOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: monthlyOpen ? "auto" : 0,
                  opacity: monthlyOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {monthlyRules.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: monthlyOpen ? 1 : 0,
                        y: monthlyOpen ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: monthlyOpen ? index * 0.1 : 0,
                      }}
                      className={`p-4 rounded-lg ${getTypeStyles(
                        rule.type
                      )} hover:shadow-md transition-shadow duration-200`}
                    >
                      <div className="flex items-start gap-3">
                        <rule.icon
                          className={`w-5 h-5 mt-1 ${getIconColor(rule.type)}`}
                        />
                        <div>
                          <h4 className="font-medium text-purple-900 mb-1">
                            {rule.title}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {rule.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
