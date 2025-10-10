"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LoaderScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full border-[1.5px] border-white/15 border-t-white/70"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-10 h-10 rounded-full border-[1px] border-white/10 border-b-white/60"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute w-2.5 h-2.5 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </div>
      <motion.div className="mt-10 text-[0.75rem] tracking-[0.35em] uppercase text-white/60 font-light">
        Loading...
      </motion.div>
      <motion.div
        className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
        initial={{ width: "20%" }}
        animate={{ width: ["20%", "80%", "20%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
