"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  CheckCircle,
  Calendar,
  Users,
  Wifi,
  Utensils,
  Shirt,
  Wrench,
  Star,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";

const yearlyPlans = [
  {
    sharing: 2,
    actualFees: "₹2,28,000",
    oneTimePayment: "₹2,16,000",
    twoInstallments: "₹1,11,000 ×2",
    securityDeposit: "₹10,000",
    color: "from-yellow-400 to-yellow-500",
    popular: true,
    savings: "₹12,000",
  },
  {
    sharing: 3,
    actualFees: "₹1,80,000",
    oneTimePayment: "₹1,62,000",
    twoInstallments: "₹84,000 ×2",
    securityDeposit: "₹10,000",
    color: "from-teal-400 to-teal-500",
    savings: "₹18,000",
  },
  {
    sharing: 4,
    actualFees: "₹1,68,000",
    oneTimePayment: "₹1,50,000",
    twoInstallments: "₹78,000 ×2",
    securityDeposit: "₹10,000",
    color: "from-pink-400 to-pink-500",
    savings: "₹18,000",
  },
  {
    sharing: 5,
    actualFees: "₹1,50,000",
    oneTimePayment: "₹1,38,000",
    twoInstallments: "₹72,000 ×2",
    securityDeposit: "₹10,000",
    color: "from-cyan-400 to-cyan-500",
    savings: "₹12,000",
  },
  {
    sharing: 6,
    actualFees: "₹1,26,000",
    oneTimePayment: "₹1,20,000",
    twoInstallments: "₹61,500 ×2",
    securityDeposit: "₹10,000",
    color: "from-purple-400 to-purple-500",
    savings: "₹6,000",
  },
];

const facilities = [
  { icon: Utensils, name: "Food" },
  { icon: Wifi, name: "WiFi" },
  { icon: Shirt, name: "Laundry" },
  { icon: Wrench, name: "Maintenance" },
];

export function YearlyPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="yearly"
      className="w-full py-16 lg:py-16 xl:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[2560px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14 xl:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
            <span className="font-medium font-body text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl">Yearly Plans</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-purple-900 mb-4 lg:mb-6 font-heading">
            Yearly Accommodation Plans
          </h2>
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-body">
            Pick from flexible room-sharing options (2 to 6 beds), all-inclusive
            annual fees. Enjoy accommodation, food, WiFi, laundry and more in
            one hassle-free package!
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 xl:gap-6 mb-10 lg:mb-14">
          {yearlyPlans.map((plan, index) => (
            <motion.div
              key={plan.sharing}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative bg-white">
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                {plan.popular && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-medium font-body">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-3">
                  <motion.div
                    className="flex items-center justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${plan.color} text-white`}
                    >
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
                    </div>
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-purple-900 font-heading">
                    {plan.sharing} Sharing
                  </CardTitle>
                  <motion.div
                    className="flex items-center justify-center gap-2 text-xs md:text-sm lg:text-sm xl:text-base text-gray-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingDown className="w-4 h-4 xl:w-5 xl:h-5 text-green-500" />
                    <span className="line-through font-body">
                      {plan.actualFees}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-300 font-body"
                    >
                      Save {plan.savings}
                    </Badge>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between items-center"
                      whileHover={{ x: 2 }}
                    >
                      <span className="text-xs md:text-sm text-gray-600 font-body">
                        One-Time:
                      </span>
                      <span className="font-medium text-teal-600 font-body">
                        {plan.oneTimePayment}
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center"
                      whileHover={{ x: 2 }}
                    >
                      <span className="text-xs md:text-sm text-gray-600 font-body">
                        2 Installments:
                      </span>
                      <span className="font-medium text-cyan-600 font-body">
                        {plan.twoInstallments}
                      </span>
                    </motion.div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-gray-600 font-body">
                        Security:
                      </span>
                      <Badge
                        variant="outline"
                        className="text-xs md:text-sm xl:text-sm 2xl:text-base border-purple-300 text-purple-700 font-body"
                      >
                        {plan.securityDeposit}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {facilities.map((facility, fIndex) => (
                      <motion.div
                        key={facility.name}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        <facility.icon className="w-4 h-4 text-gray-400" />
                        <span className="text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-gray-600 font-body">
                          {facility.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
