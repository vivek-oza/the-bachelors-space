"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import { useIsMobile } from "./ui/use-mobile";

const institutions = [
  {
    name: "IIT Gandhinagar",
    distance: "10 km",
    icon: GraduationCap,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Central University of Gujarat",
    distance: "8 km",
    icon: GraduationCap,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Dhirubhai Ambani Institute of ICT",
    distance: "1 km",
    icon: GraduationCap,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Gujarat Forensic Sciences University",
    distance: "5 km",
    icon: GraduationCap,
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "National Institute of Design",
    distance: "1 km",
    icon: GraduationCap,
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "NIFT Gandhinagar",
    distance: "1 km",
    icon: GraduationCap,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Pandit Deendayal Energy University",
    distance: "6 km",
    icon: GraduationCap,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Rashtriya Raksha University",
    distance: "30 km",
    icon: GraduationCap,
    color: "from-red-400 to-red-600",
  },
  {
    name: "Karnavati University",
    distance: "5 km",
    icon: GraduationCap,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "Gujarat Technological University",
    distance: "12 km",
    icon: GraduationCap,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Gujarat National Law University",
    distance: "6 km",
    icon: GraduationCap,
    color: "from-violet-400 to-violet-600",
  },
  {
    name: "Swaminarayan University",
    distance: "15 km",
    icon: GraduationCap,
    color: "from-amber-400 to-amber-600",
  },
  {
    name: "LDRP Institute of Technology",
    distance: "8 km",
    icon: GraduationCap,
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Government Engineering College",
    distance: "10 km",
    icon: GraduationCap,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Kadi Sarva Vishwavidyalaya",
    distance: "8 km",
    icon: GraduationCap,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Government Polytechnic",
    distance: "10 km",
    icon: GraduationCap,
    color: "from-yellow-400 to-yellow-600",
  },
];

export function NearbyInstitutions() {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const initialCount = isMobile ? 6 : 6;
  const visible = showAll ? institutions : institutions.slice(0, initialCount);

  return (
    <section
      id="nearby"
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
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-3 lg:mb-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
            <span className="font-medium font-body text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-2xl">Educational Hub</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-purple-900 mb-4 lg:mb-6 font-heading">
            Nearby Institutions
          </h2>
          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-body">
            Located in the heart of Gandhinagar's educational district, with easy
            access to major universities and colleges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {visible.map((institution, index) => {
            const IconComponent = institution.icon;
            return (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${institution.color} shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-heading text-purple-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {institution.name}
                    </h3>

                    <div className="space-y-1 text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 xl:w-5 xl:h-5 text-purple-500" />
                        <span className="font-body">
                          {institution.distance} away
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {institutions.length > initialCount && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll((s) => !s)}
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-body"
            >
              {showAll
                ? "Show Less"
                : `Show All ${institutions.length} Institutions`}
            </Button>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-7">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-heading text-purple-900 mb-3">
              Perfect Location for Students
            </h3>
            <p className="text-gray-600 font-body max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              Our hostel is strategically located in Gandhinagar's educational
              hub, providing easy access to top universities and colleges. Save
              time on commuting and focus on your studies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
